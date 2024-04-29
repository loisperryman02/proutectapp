import * as React from 'react';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import { Text, StyleSheet, View, Dimensions, Button, TouchableOpacity, Pressable, KeyboardAvoidingView, Alert } from 'react-native';
import { CheckBox } from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import Constants from 'expo-constants';
import MapViewDirections from 'react-native-maps-directions';
import polyline from '@mapbox/polyline';
import { findNearestSafetyScore, daytimeKDTree, eveningKDTree, findNearestPoints } from '../data_structures/KDTree.js';
import { aStar } from '../data_structures/aStar';
 
/**
 * This page handles all Map views that are displayed to the user. 
 * There are several views depending on what stage of the journey the user it at. 
 * The page automatically updates depending on user interactions with the UI.
 */
export default function MapScreen( {navigation} ) {

  const [ start, setStart ] = React.useState();
  const [ destination, setDestination ] = React.useState();
  const [ isPressed, setIsPressed ] = React.useState(false);
  const [ isTextFocused, setIsTextFocused] = React.useState(false);

  const [ efficientChecked, setEfficientChecked ] = React.useState(false);
  const [ safeChecked, setSafeChecked ] = React.useState(false);

  const [ safeRouteChecked, setSafeRouteChecked ] = React.useState(false);
  const [ googleRouteChecked, setGoogleRouteChecked ] = React.useState(false);

  const [ route, setRoute ] = React.useState(false);
  const [ startJourney, setStartJourney ] = React.useState(false);
 
  const [ coords, setCoordinates ] = React.useState();
  const [ googleCoords, setGoogleCoords ] = React.useState();
  const [ chosenCoords, setChosenCoordinates ] = React.useState();

  const [ preferences, setPreferences ] = React.useState(new Set());

  const [ routeSafetyScore, setRouteSafetyScore ] = React.useState(0);

  // This function handles the notification for users to take an alternative route home, if the safety score is too low.
  React.useEffect(() => {
    if (safeRouteChecked && routeSafetyScore < 50) {
      Alert.alert(
        'Caution: Low Safety Score!',
        "The safety score for this route is below 50. Consider taking a taxi to your destination instead.",
        [{ text: 'OK', onPress: () => console.log('OK Pressed') }],
        { cancelable: false }
      );
    }
  }, [safeRouteChecked && routeSafetyScore]); 

  // Stores an array for user preferences.
  const updatePreferences = (title, isChecked) => {
    setPreferences(currentPreferences => {
      const updatePreferences = new Set(currentPreferences);
      if (isChecked) {
        updatePreferences.add(title);
      } else {
        updatePreferences.delete(title);
      }
      return updatePreferences;
    });
  }

  const [ routeInfo, setRouteInfo ] = React.useState({
    distance: null,
    duration: null,
    steps: [],
  });

  const handleExpansion = () => {
    setIsPressed(!isPressed);
  };
  
  const mapRef = React.useRef(null);

  // Here, a Google API key must be input for the application to fetch routes.
  const GOOGLE_API_KEY = '';

  // Sets the initial view of the map.
  React.useEffect(() => {
    if (start && mapRef.current) {
      mapRef.current.animateToRegion(start, 1000); 
    }
  }, [start]);

  React.useEffect(() => {
    if (start && destination) {
      getDirections(start, destination);
    }
  }, [start, destination]);

  // Converts the data from Google Directions API to location coordinates. 
  const decodePolyline = (points) => {
    return polyline.decode(points).map(point => ({
      latitude: point[0],
      longitude: point[1]
    }));
  };

  /**
   * This function is responsible for fetching directions between different locations on the route.
   * It calls the Google Maps API endpoint to get directions from a start and end location. 
   * The relevant information is extracted from the API response. 
   */
  const getDirections = async (startLoc, destinationLoc) => {
    try {
      const response = await fetch(
        `https://maps.googleapis.com/maps/api/directions/json?origin=${startLoc.latitude},${startLoc.longitude}&destination=${destinationLoc.latitude},${destinationLoc.longitude}&mode=walking&key=${GOOGLE_API_KEY}`
      );
      const json = await response.json();
      if (json.routes.length) {
        const points = json.routes[0].overview_polyline.points;
        const decodedPoints = decodePolyline(points); // You need a function to decode this
        setGoogleCoords(decodedPoints);
        setRouteInfo({
          distance: json.routes[0].legs[0].distance.text,
          duration: json.routes[0].legs[0].duration.text,
          coordinates: decodedPoints,
          steps: json.routes[0].legs[0].steps.map(step => ({
            data: step,
            instructions: step.html_instructions,
          })),
        });
      }
    } catch (error) {
      console.error(error);
    }
  };

   /**
   * This function is responsible for fetching the distance between different locations on the route.
   * It calls the Google Maps API endpoint to get the distance from a start and end location. 
   * This is then stored in the route graph as the weight for edges between nodes.
   */
  const getDistance = async (startLat, startLng, destinationLat, destinationLng) => {
    try {
      const response = await fetch(
        `https://maps.googleapis.com/maps/api/directions/json?origin=${startLat},${startLng}&destination=${destinationLat},${destinationLng}&mode=walking&key=${GOOGLE_API_KEY}`
      );
      const json = await response.json();
      if (json.routes.length) {
        return {
          distance: json.routes[0].legs[0].distance.value,
        };
      } 
    } catch (error) {
      console.error(error);
    }
  };

  // Returns the appropriate KD tree depending on what time the route is being requested.
  const getCurrentKDTree = () => {
    const currentHour = new Date().getHours();
    if (currentHour >= 18 || currentHour < 6) {
      return eveningKDTree;
    } else {
      return daytimeKDTree;
    }
  };

  /**
   * This function builds the route graph when it is requested by a user. 
   * It initially forms a set of nodes and edges to represent the route returned by Google Maps then this
   * graph is expanded using the dataset of nodes (Stored in a KD Tree).
   */
  const buildGraph = async (routeInfo) => {
    // Creates a Hash map of nodes, mapping each node (a unique coordinate) to its edges
    let nodes = new Map();
    const edges = [];
    const kdtree = getCurrentKDTree();

    // Sets start node and end node of original route as the location coordinates of origin and destination location
    let originalStartNodeID = `${routeInfo.steps[0].data.start_location.lat},${routeInfo.steps[0].data.start_location.lng}`;
    let originalDestinationID = `${routeInfo.steps[routeInfo.steps.length-1].data.end_location.lat},${routeInfo.steps[routeInfo.steps.length-1].data.end_location.lng}`;

    // Loops through each step in the Google Maps route
    for (const stepObj of routeInfo.steps) {

      const step = stepObj.data;

      let startNode = `${step.start_location.lat},${step.start_location.lng}`;
      let endNode = `${step.end_location.lat},${step.end_location.lng}`;

      if (!nodes.has(startNode)) {
        nodes.set(startNode, {id: startNode, edges: []});
      }

      if (!nodes.has(endNode)) {
        nodes.set(endNode, {id: endNode, edges: []});
      }
      
      // This function uses the KD tree to search for the nearest safety score in the dataset, to fetch data from this coordinate.
      start_safety_score = findNearestSafetyScore(step.start_location.lat, step.start_location.lng, kdtree);
      end_safety_score = findNearestSafetyScore(step.end_location.lat, step.end_location.lng, kdtree);

      // A safety score of an edge is calculated by the safety scores of the two end nodes. 
      avg_score = (start_safety_score + end_safety_score) / 2
      
      // Sets edge
      const edge = {
        from: startNode,
        to: endNode,
        distance: step.distance.value,
        safetyScore: avg_score
      };

      // Maintains an array of edges.
      edges.push(edge);
      
      // Adds edge to the hash map with the coordinate as the key. 
      nodes.get(startNode).edges.push(edge);
    } 

    // The original graph is now expanded using the nearest coordinates of each node that reside in the dataset. 

    const originalNodes = [...nodes.keys()];

    let previousNode = null;

    let visitedPoints = new Set(); 

    let nearbyPoints = [];
    
    previousPoints = [];

    for (const nodeId of originalNodes) {

      let coords = nodeId.split(",");
      let currentLat = coords[0];
      let currentLon = coords[1];

      // Finds the three nearest coordinates in the KD tree.
      if (nodeId != originalDestinationID) {
        nearbyPoints = await findNearestPoints(currentLat, currentLon, kdtree, 3);
      } else {
        nearbyPoints = [];
      }
      
      // Adds corresponding edge between existing node and its three nearest coordinates.
      for (const point of nearbyPoints) {

        let coordinateNode = `${point.latitude},${point.longitude}`;

        // Ensures that each location coordinate is only added to the hash map once. 
        if (visitedPoints.has(coordinateNode)) continue;

        visitedPoints.add(coordinateNode);

        nodes.set(coordinateNode, {id: coordinateNode, edges: []});

        let currentDistance = await getDistance (
          currentLat, currentLon,
          point.latitude, point.longitude
        );

        if (currentDistance.distance == undefined) {
          continue;
        }

        let currentSafetyScore = findNearestSafetyScore(currentLat, currentLon, kdtree);

        let edgeSafetyScore = (currentSafetyScore + point.safetyScore) / 2

        const currentEdge = {
          from: nodeId,
          to: coordinateNode,
          distance: currentDistance.distance,
          safetyScore: edgeSafetyScore
        };

        edges.push(currentEdge);

        nodes.get(nodeId).edges.push(currentEdge);

        // Further expands the graph by adding a edges from the previous node in the original graph to the three coordinates added from the dataset.
        if (previousNode!=null) {

          if (!nodes.has(previousNode)) {
            nodes.set(previousNode, {id: previousNode, edges: []});
          }

          const [prevLat, prevLng] = previousNode.split(',');
          const edgeFromPrevDistance = await getDistance(
            prevLat, prevLng,
            point.latitude, point.longitude
          );

          let currentSafetyScore = findNearestSafetyScore(prevLat, prevLng, kdtree);

          // Finds the average safety score of both nodes on the route.
          let edgeSafetyScore = (currentSafetyScore + point.safetyScore) / 2

          const edgeFromPrevious = {
            from: previousNode,
            to: coordinateNode,
            distance: edgeFromPrevDistance.distance,
            safetyScore: edgeSafetyScore
          };

          edges.push(edgeFromPrevious);
          nodes.get(previousNode).edges.push(edgeFromPrevious);
        }
      }

      // Adds edges from previous coordinates added from the dataset to the current node. 
      if (previousPoints.length > 0) {
        
        for (const prevPoint of previousPoints) {

          if (!nodes.has(prevPoint)) {
            nodes.set(prevPoint, {id: prevPoint, edges: []});
          };

          const [prevLat, prevLng] = prevPoint.split(',');
          const edgeFromPrevDistance = await getDistance(
            prevLat, prevLng,
            currentLat, currentLon
          );

          let prevSafetyScore = findNearestSafetyScore(prevLat, prevLng, kdtree);
          let currentSafetyScore = findNearestSafetyScore(currentLat, currentLon, kdtree);

          let edgeSafetyScore = (prevSafetyScore + currentSafetyScore) / 2;

          const edgeFromPrevious = {
            from: prevPoint,
            to: nodeId,
            distance: edgeFromPrevDistance.distance,
            safetyScore: edgeSafetyScore
          };

          edges.push(edgeFromPrevious);
          nodes.get(prevPoint).edges.push(edgeFromPrevious);

        }

        // Resets the previous points array for the next interation 
        previousPoints = [];
      }

      // Resets the previous node to the current node. 
      previousNode = nodeId;

      // Sets previous points as the current nearby coordinates fetched from the KD tree.
      if (nearbyPoints) {
        for (const point of nearbyPoints) {
          let pointNode = `${point.latitude},${point.longitude}`;
          previousPoints.push(pointNode);
        }
      }
      }

      return [nodes, originalStartNodeID, originalDestinationID ];

  };

     
  // This function finds the safest route by calling the buildGraph function and A* search algorithm
  React.useEffect(() => {
    const findAndSetSafestRoute = async () => {
      try {
        if (routeInfo.steps.length) {
            let [ nodes, startNodeID, destinationNodeID ] = await buildGraph(routeInfo);

            let startNode = {
              id: startNodeID,
              edges: nodes.get(startNodeID).edges
            };

            let destinationNode = {
              id: destinationNodeID,
              edges: nodes.get(destinationNodeID).edges
            };
    
            let safestRoute = aStar(startNode, destinationNode, nodes, preferences);
            
            setCoordinates([]);
            const coordinates = []

            let current_kdtree = getCurrentKDTree();
            let total_safety_score = 0;

            safestRoute.forEach(node => {
              let step = node.split(",");
              const splitCoordinates = { latitude: parseFloat(step[0]), longitude: parseFloat(step[1]) };
              coordinates.push(splitCoordinates);    

              total_safety_score += findNearestSafetyScore(parseFloat(step[0]), parseFloat(step[1]), current_kdtree)
          
            });

            setRouteSafetyScore(total_safety_score / (coordinates.length));
            setCoordinates(coordinates);

        }
      } catch (error) {
        console.error("ERROR IN FIND AND SET SAFEST ROUTE:", error);
      }
    };
    findAndSetSafestRoute();
}, [routeInfo]);

  const initialRegion = {
      latitude: 52.285802,
      longitude: -1.533322,
      latitudeDelta: 0.01,
      longitudeDelta: 0.01
  };

  // Returns the UI for the Map Screen. Note that different views are shown depending on the user's state in their journey. 
  return (
    <View style={styles.container}>

      <MapView 
        style={[
          styles.map, 
          isPressed && styles.smallerMap,
          startJourney && styles.navigationMap
        ]}
        ref={mapRef}
        provider={PROVIDER_GOOGLE}
        initialRegion={initialRegion}
      >

        {start && (
            <Marker 
              coordinate={{latitude: start.latitude, 
                          longitude: start.longitude}}
            />
        )}

        {destination && (
            <Marker 
              coordinate={{latitude: destination.latitude, 
                          longitude: destination.longitude}}
            />
        )}

        {/*Displays the route returned by Proutect in pink*/}
        {start && destination && coords && route && (
          coords.map((coord, index) => {
            if (index < coords.length - 1) {
                        
              const nextCoord = coords[index + 1];
              return (
                <MapViewDirections
                  key={index}
                  origin={coord}
                  destination={nextCoord}
                  apikey={GOOGLE_API_KEY}
                  strokeWidth={3}
                  mode = "WALKING"
                  strokeColor="hotpink"
                />
              );
            }
          })
        
        )}

        {/*Displays the route returned by Google Maps in pink*/}
        {start && destination && coords && route && (
          <MapViewDirections
            origin = {start}
            destination = {destination}
            apikey = {GOOGLE_API_KEY}
            strokeWidth = {3}
            strokeColor = "blue"
            mode = "WALKING"          
          />
        )}

      </MapView>

      <View style={[
                    styles.bottomContainer, 
                    isPressed && styles.expandedBottomContainer,
                    startJourney && styles.navigationContainer
                  ]}>

        <TouchableOpacity style = {styles.iconContainer}
            onPress = {() => {
              handleExpansion();
              setStartJourney(false);
              setIsTextFocused(false);
              }} 
            >
          <Icon style = {styles.arrowIcon} name="keyboard-arrow-up"/>
        </TouchableOpacity>

      {/*Checks that a button has been pressed to trigger a different view.*/}
      {isPressed ? (      

        <View style={styles.searchContainer}>  

          <View style={styles.titleContainer}>
            <Text style = {styles.titleText}> Enter journey details: </Text>
          </View>
        
          {isTextFocused ? (

          <>
          <View style = {styles.searchBarsContainer}>
            <GooglePlacesAutocomplete
              styles={{
                textInput: styles.searchOriginIcon,
                textInputContainer: styles.originContainer
              }}
              fetchDetails
              GooglePlacesSearchQuery={{ rankby: "distance" }}
              onPress={(data, details = null) => {
                setStart({
                  latitude: details.geometry.location.lat,
                  longitude: details.geometry.location.lng,
                  latitudeDelta: 0.01,
                  longitudeDelta: 0.01
                });
          
              }}
              query={{
                key: GOOGLE_API_KEY,
                language: 'en',
                components: 'country:gb',
                types: 'establishment',
                radius: 30000
              }}
            
            />

          {/*GooglePlacesAutocomplete API finds places as users are typing them into the text box.*/}
          <GooglePlacesAutocomplete
              styles={{
                textInput: styles.searchOriginIcon,
                textInputContainer: styles.destinationContainer
              }}
              fetchDetails
              GooglePlacesSearchQuery={{
                  rankby: "distance"
              }}
              onPress={(data, details = null) => {
                  setDestination({
                    latitude: details.geometry.location.lat,
                    longitude: details.geometry.location.lng,
                    latitudeDelta: 0.01,
                    longitudeDelta: 0.01
                  })   
              }}

              query={{
                  key: GOOGLE_API_KEY,
                  language: 'en',
                  components: 'country:gb',
                  types: 'establishment',
                  radius: 30000
              }}
            />        

          </View>

          {/*Displays Checkbox for user to select their priorities.*/}
          <View style = {styles.checkBoxContainer} >
              <Text style = {styles.titleText}> Choose journey priorities: </Text>

              <View style = {styles.checkContainer}>
                <CheckBox
                  title="Efficient"
                  checked={efficientChecked}
                  onPress={() => {
                    setEfficientChecked(!efficientChecked);
                    updatePreferences("Efficient", !efficientChecked);
                  }}
                />
                <CheckBox
                  title="Safe"
                  checked={safeChecked}
                  onPress={
                    () => {
                      setSafeChecked(!safeChecked);
                      updatePreferences("Safe", !safeChecked);
                  }}
                />
  
              </View>
              
            </View>

            <View style = {styles.routeButtonContainer}>
              <Pressable 
                onPress={() => setRoute(true)}
                style={styles.routeButton}> 
                  <Text style={styles.buttonText}>
                    GET ROUTE
                  </Text>
              </Pressable>
            </View>

            <View style = {styles.routeButtonContainer}>
              <Pressable
                onPress = {() => {
                  handleExpansion();
                  setStartJourney(true);
                  }} 
                  style={styles.routeButton}
                >
                <Text style={styles.buttonText}>
                  START JOURNEY
                </Text>
              </Pressable>
            </View>

          </>
          
          ) : (

            <>

            <View style = {styles.searchBarsContainer}>

              <TouchableOpacity style={styles.originPlaceholderContainer} onPress={() => setIsTextFocused(true)}>
                <Icon style={styles.placeholderSearchIcon} name="search"/>
                <Text style={styles.placeholderText}>Enter start location</Text>
              </TouchableOpacity>
              
              <TouchableOpacity style={styles.destinationPlaceholderContainer} onPress={() => setIsTextFocused(true)}>
                <Icon style={styles.placeholderSearchIcon} name="search"/>
                <Text style={styles.placeholderText}>Enter destination location</Text>
              </TouchableOpacity>

            </View>


            <View style = {styles.checkBoxContainer} >
              <Text style = {styles.titleText}> Choose journey priorities: </Text>

              <View style = {styles.checkContainer}>
                <CheckBox
                  title="Efficient"
                  checked={efficientChecked}
                  onPress={() => {
                    setEfficientChecked(!efficientChecked);
                    updatePreferences("Efficient", !efficientChecked);
                  }}
                />
                <CheckBox
                  title="Safe"
                  checked={safeChecked}
                  onPress={
                    () => {
                      setSafeChecked(!safeChecked);
                      updatePreferences("Safe", !safeChecked);
                  }}
                />
              
              </View>
              
            </View>

            <View style = {styles.routeButtonContainer}>
              <Pressable 
                onPress={() => setRoute(true)}
                style={styles.routeButton}> 
                  <Text style={styles.buttonText}>
                    GET ROUTE
                  </Text>
              </Pressable>
            </View>

            </>

          )}
        </View>
              
        ) : startJourney ? (

          <>
          <View style = {styles.checkRouteTitleContainer}>
              
              <Text style = {styles.routeCheckText}>
                Select preferred route: 
              </Text>

          </View>
    
          <View style = {styles.checkRouteContainer}>
          <View style = {styles.routeCheckBoxes}>
          
                <CheckBox
                  title={`Pink Route - Suggested by Proutect. Safety Score: ${routeSafetyScore}`}
                  checked={safeRouteChecked}
                  onPress={() => {
                    setSafeRouteChecked(!safeRouteChecked);
                    setGoogleRouteChecked(false);
                    setChosenCoordinates();
                    setChosenCoordinates(coords);
                    console.log(chosenCoords);
                  }}
                />
                <CheckBox
                  title="Blue Route - Suggested by Google Maps" 
                  checked={googleRouteChecked}
                  onPress={
                    () => {
                      setGoogleRouteChecked(!googleRouteChecked);
                      setSafeRouteChecked(false);
                      setChosenCoordinates();
                      setChosenCoordinates(googleCoords);
                      console.log(chosenCoords);
                  }}
                />
          </View>

          </View>

          <View style = {styles.finishedJourneyContainer}>

          <Pressable 
            onPress={ () => {
              navigation.navigate("FeedbackPage", chosenCoords)
            }}
            style = {styles.finishedJourney}> 

            <Text style={styles.buttonText}>
              FINISHED JOURNEY
            </Text>          
            
          </Pressable>

          </View>
          </>


        ) : !startJourney && !isPressed && (
       
          <View style = {styles.searchBarContainer}> 
          <Icon style={styles.searchIcon} name="search" />
            <Text style = {styles.searchInput}>
              Search for a route
            </Text>
          </View>
        )}
    
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  map: {
    width: '100%',
    height: '85%'
  },
  smallerMap: {
    height: '10%'
  },
  navigationMap: {
    height: '60%'
  },
  searchContainer: {
    position: "absolute",
    width: '100%',
    height: '100%',
    backgroundColor: "transparent",
    flexDirection: "column"
  }, 
  input: {
    borderColor: "#888",
    borderWidth: 1
  },
  directionsContainer: {
    position: 'absolute',
    bottom: Constants.statusBarHeight, 
    width: '100%',
    backgroundColor: 'rgba(255,255,255,0.9)',
    padding: 10
  },
  bottomContainer: {
    height: '15%',
    width: '100%',
    backgroundColor: 'white', 
    flex: 1,
    justifyContent: 'flex-end', 
    borderTopRightRadius: 100,
    borderTopWidth: 30,
    borderTopColor: "#013B1E",
    borderRightColor: "#013B1E",
    borderRightWidth: 20
  }, 
  expandedBottomContainer: {
    height: '90%',
    flexDirection: 'column',
  },
  navigationContainer: {
    height: '40%',
    flexDirection: 'column'
  },
  searchBarContainer: {
    height: '50%',
    backgroundColor: '#E2E4F1',
    borderRadius: '70%',
    marginBottom: '10%',
    width: '70%',
    marginLeft: '15%',
    alignItems: 'left',
    flexDirection: 'row',
    paddingHorizontal: 10,
  },
  searchInput : {
    fontSize: 20,
    marginTop: 12,
    paddingLeft: 10, 
    color: "#013B1E",
    opacity: 0.8,
    fontFamily: "Arial"
  },
  placeholderSearchIcon: {
    fontSize: 23,
    marginTop: 12,
    color: "#013B1E",
    opacity: 0.8,
    fontFamily: "Arial"
  },
  searchIcon: {
    fontSize: 23,
    marginTop: 12,
    color: "#013B1E",
    opacity: 0.8,
    fontFamily: "Arial"
  },
  searchOriginIcon: {
    fontSize: 18,
    backgroundColor: 'transparent',
    color: "#013B1E",
    fontFamily: "Arial",
    height: '100%',
    paddingTop: 0
  },
  placeholderText: {
    fontSize: 20,
    marginTop: 12,
    color: "#013B1E",
    opacity: 0.8,
    fontFamily: "Arial",
    paddingLeft: 10
  },
  originContainer: {
    backgroundColor: '#E2E4F1',
    borderRadius: '70%',
    width: '100%',
    marginTop: 20,
    alignItems: 'left',
    flexDirection: 'row',
    paddingHorizontal: 10,
    paddingTop: 1,
    height: 50
  },
  destinationContainer: {
    backgroundColor: '#E2E4F1',
    borderRadius: '70%',
    width: '100%',
    alignItems: 'left',
    flexDirection: 'row',
    paddingHorizontal: 10,
    paddingTop: 1,
    height: 50
  },
  originPlaceholderContainer: {
    backgroundColor: '#E2E4F1',
    borderRadius: '70%',
    width: '100%',
    alignItems: 'left',
    flexDirection: 'row',
    paddingHorizontal: 10,
    paddingTop: 1,
    height: 50,
    marginBottom: "21%"
  },
  destinationPlaceholderContainer: {
    backgroundColor: '#E2E4F1',
    borderRadius: '70%',
    width: '100%',
    alignItems: 'left',
    flexDirection: 'row',
    paddingHorizontal: 10,
    paddingTop: 1,
    height: 50,
    marginBottom: "28%"
  },
  arrowIcon: {
    color: "white",
    position: 'absolute',
    fontSize: 40
  },
  iconContainer: {
    position: 'absolute',
    top: -38,  
    backgroundColor: 'transparent',
    alignItems: 'center',
    width: '100%'
  }, 
  titleContainer: {
    width: "100%",
    flex: 0.05,
    justifyContent: "flex-end",
    alignItems: "center",
    marginTop: 10
  },
  searchBarsContainer: {
    width: '80%',
    flex: 0.4,
    justifyContent: "flex-end",
    marginTop: 10,
    borderTopWidth: 3, 
    borderTopColor: "#013B1E",
    marginLeft: "10%"
  },
  checkBoxContainer: {
    width: '100%',
    flex: 0.4,
    alignItems: "center",
    justifyContent: 'flex-start'
  },
  routeButtonContainer: {
    width: '100%',
    flex: 0.15,
    backgroundColor: "transparent",
    alignItems: 'center'
  },
  checkContainer: {
    width: '80%',
    borderTopColor: "#013B1E",
    borderTopWidth: 3,
    marginTop: 10,
    paddingTop: 10
  },
  routeButton: {
    alignItems: "center",
    backgroundColor: '#5EDD9D',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    width: "60%",
    height: "50%"
  },
  finishedJourney: {
    alignItems: "center",
    backgroundColor: '#5EDD9D',
    paddingHorizontal: 20,
    paddingVertical: 6,
    borderRadius: 10,
    width: "60%",
    height: "50%",
    marginTop: "3%"
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 20,
    marginTop: 2
  },
  titleText: {
    color: "#013B1E",
    fontWeight: "bold",
    fontSize: 20
  },
  finishedJourneyContainer: {
    alignItems: "center",
    flex: 0.3
  },
  checkRouteContainer: {
    flex: 0.5,
    width: "100%",
    alignItems: "center"
  },
  checkRouteTitleContainer: {
    flex: 0.2,
    width: "80%",
    borderBottomColor: "#013B1E",
    borderBottomWidth: 2,
    marginLeft: "10%"
  },
  routeCheckBoxes: {
    width: "70%",
    marginTop: "3%"
  },
  routeCheckText: {
    width: "100%",
    color: "#013B1E",
    fontWeight: "bold",
    fontSize: 20,
    textAlign: "center",
    paddingTop: "8%"
  }
})