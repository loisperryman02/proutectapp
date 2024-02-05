import * as React from 'react';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import { Text, StyleSheet, View, Dimensions, Button, TouchableOpacity, Pressable } from 'react-native';
import { CheckBox } from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import Constants from 'expo-constants';
import MapViewDirections from 'react-native-maps-directions';
import RenderHtml from 'react-native-render-html';
import { findNearestSafetyScore, daytimeKDTree, eveningKDTree } from '../data_structures/KDTree.js';
import { aStar } from '../data_structures/aStar';
 
export default function MapScreen( {navigation} ) {

  const [ start, setStart ] = React.useState();
  const [ destination, setDestination ] = React.useState();
  const [ isPressed, setIsPressed ] = React.useState(false);
  const [ isTextFocused, setIsTextFocused] = React.useState(false);

  const [ efficientChecked, setEfficientChecked ] = React.useState(false);
  const [ busyChecked, setBusyChecked ] = React.useState(false);
  const [ safeChecked, setSafeChecked ] = React.useState(false);

  const [ route, setRoute ] = React.useState(false);
  const [ startJourney, setStartJourney ] = React.useState(false);
  const [ feedback, getFeedback ] = React.useState(false);
  const [ userInput, setUserInput ] = React.useState('');
  const [ coords, setCoordinates ] = React.useState();

  const [ routeInfo, setRouteInfo ] = React.useState({
    distance: null,
    duration: null,
    steps: [],
  });

  const handleExpansion = () => {
    setIsPressed(!isPressed);
  };
  
  const mapRef = React.useRef(null);
  const GOOGLE_API_KEY = 'AIzaSyBwPXdbTdxT8cMhVjPxHuvJ3KCaFrF8-Xw';
  const { width } = Dimensions.get('window');

  // Fetch nearby places function, gets nearest places 
  const fetchNearbyPlaces = async (latitude, longitude) => {
    try {
      const placesResponse = await fetch(
        `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${latitude},${longitude}&radius=200&type=point_of_interest&key=${GOOGLE_API_KEY}`
      );
      const json = await placesResponse.json();
      const topThreePlaces = json.results.slice(0, 3); 

      return topThreePlaces.map(place => ({
        latitude: place.geometry.location.lat,
        longitude: place.geometry.location.lng,
        name: place.name
      }));
        
    } catch (error) {
      console.error(error);
      return [];
    }
  };
  

  React.useEffect(() => {
    if (start && mapRef.current) {
      mapRef.current.animateToRegion(start, 1000); // Animate to the new region
    }
  }, [start]); // This effect runs when 'start' changes

  React.useEffect(() => {
    if (start && destination) {
      getDirections(start, destination);
    }
  }, [start, destination]);



  const getDirections = async (startLoc, destinationLoc) => {
    try {
      const response = await fetch(
        `https://maps.googleapis.com/maps/api/directions/json?origin=${startLoc.latitude},${startLoc.longitude}&destination=${destinationLoc.latitude},${destinationLoc.longitude}&mode=walking&key=${GOOGLE_API_KEY}`
      );
      const json = await response.json();
      if (json.routes.length) {
        setRouteInfo({
          distance: json.routes[0].legs[0].distance.text,
          duration: json.routes[0].legs[0].duration.text,
          steps: json.routes[0].legs[0].steps.map(step => ({
            data: step,
            instructions: step.html_instructions,
          })),
        });
      
      }
      console.log("roue info up")
    } catch (error) {
      console.error(error);
    }
  };

  const getDistance = async (startLat, startLng, destinationLat, destinationLng) => {
    try {
      const response = await fetch(
        `https://maps.googleapis.com/maps/api/directions/json?origin=${startLat},${startLng}&destination=${destinationLat},${destinationLng}&mode=walking&key=${GOOGLE_API_KEY}`
      );
      const json = await response.json();
      if (json.routes.length) {
        console.log("distance data found");
        return {
          distance: json.routes[0].legs[0].distance.text,
        };
      } else {
        console.log("distance not found");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const getCurrentKDTree = () => {
    const currentHour = new Date().getHours();
    // Define the hours that constitute 'daytime' and 'evening'
    return (currentHour >= 6 && currentHour < 18) ? daytimeKDTree : eveningKDTree;
  };

  function calculateMidpoint(lat1, lon1, lat2, lon2) {
    // Convert latitude and longitude from degrees to radians
    lat1 = deg2rad(lat1);
    lon1 = deg2rad(lon1);
    lat2 = deg2rad(lat2);
    lon2 = deg2rad(lon2);
  
    // Calculate the average latitude and longitude
    let avgLat = (lat1 + lat2) / 2;
    let avgLon = (lon1 + lon2) / 2;
  
    return { latitude: avgLat, longitude: avgLon };
  }
  
  // Helper function to convert degrees to radians
  function deg2rad(degrees) {
    return degrees * (Math.PI / 180);
  }

  const buildGraph = async (routeInfo) => {
    let nodes = new Map();
    const edges = [];
    const kdtree = getCurrentKDTree();

    print(kdtree)

    // Sets start node and end node of original route - coordinates from route not the actual coordinates of places 
    let originalStartNodeID = `${routeInfo.steps[0].data.start_location.lat},${routeInfo.steps[0].data.start_location.lng}`;
    let originalDestinationID = `${routeInfo.steps[routeInfo.steps.length-1].data.end_location.lat},${routeInfo.steps[routeInfo.steps.length-1].data.end_location.lng}`;

    for (const stepObj of routeInfo.steps) {

      const step = stepObj.data;

      // Sets start node and end node of original route - coordinates from route not the actual coordinates of places 
      let startNode = `${step.start_location.lat},${step.start_location.lng}`;
      let endNode = `${step.end_location.lat},${step.end_location.lng}`;

      // Add nodes to graph -> these will be nodes of the original graph. 
      if (!nodes.has(startNode)) {
        nodes.set(startNode, {id: startNode, edges: []});
      }

      // Add end node to graph 
      if (!nodes.has(endNode)) {
        nodes.set(endNode, {id: endNode, edges: []});
      }

      let midpoint = calculateMidpoint(step.start_location.lat, step.start_location.lng, step.end_location.lat, step.end_location.lng);
      
      // Add edges to graph -> these will be the distances between the nodes of the orginal graph. 
      const edge = {
        from: startNode,
        to: endNode,
        distance: step.distance.value,
        safetyScore: findNearestSafetyScore(midpoint.latitude, midpoint.longitude, kdtree)
      };

      // console.log(midpoint);
      // console.log(edge.safetyScore);

      

      edges.push(edge);
      nodes.get(startNode).edges.push(edge);
    } 

    // Keeps track of fetched places already. 
    let fetchedPlaces = new Set(); 
    const originalNodes = [...nodes.keys()];

    let previousNode = null;
    let nearbyPlaces = []

    for (const nodeId of originalNodes) {
      console.log(originalNodes);
      let coords = nodeId.split(",");
      let currentLat = coords[0];
      let currentLon = coords[1];

      if (nodeId != originalDestinationID) {
        nearbyPlaces = await fetchNearbyPlaces(currentLat, currentLon);
      } else {
        continue;
      }

      previousPlaces = [];

      for (const place of nearbyPlaces) {

        let placeNode = `${place.latitude},${place.longitude}`;

        if (fetchedPlaces.has(placeNode)) continue;

        fetchedPlaces.add(placeNode);

        nodes.set(placeNode, { id: placeNode, edges: [], placeDetails: place });

        console.log(placeNode);

        const currentDistance = await getDistance (
          currentLat, currentLon,
          place.latitude, place.longitude
        );

        if (currentDistance.value == undefined) {
          continue;
        }

        let midpoint = calculateMidpoint(currentLat, currentLon, place.latitude, place.longitude)

        // Creates edge from current node to each place.
        const currentEdge = {
          from: nodeId,
          to: placeNode,
          distance: currentDistance.value,
          safetyScore: findNearestSafetyScore(midpoint.latitude, midpoint.longitude, kdtree)
        };

        edges.push(currentEdge);
        nodes.get(nodeId).edges.push(currentEdge);

        if (previousNode!=null) {
          const [prevLat, prevLng] = previousNode.split(',');
          const edgeFromPrevDistance = await getDistance(
            prevLat, prevLng,
            place.latitude, place.longitude
          );

          let midpoint = calculateMidpoint(prevLat, prevLng, place.latitude, place.longitude);

          const edgeFromPrevious = {
            from: previousNode,
            to: placeNode,
            distance: edgeFromPrevDistance,
            safetyScore: findNearestSafetyScore(midpoint.latitude, midpoint.longitude, kdtree)
          };

          edges.push(edgeFromPrevious);
          nodes[previousNode].edges.push(edgeFromPrevious);
        }

      }

      if (previousPlaces.length > 0) {
        for (const prevPlace of previousPlaces) {
          const [prevLat, prevLng] = prevPlace.split(',');
          const edgeFromPrevDistance = await getDistance(
            prevLat, prevLng,
            currentLat, currentLon
          );

          let midpoint = calculateMidpoint(prevLat, prevLng, currentLat, currentLon);

          const edgeFromPrevious = {
            from: prevPlace,
            to: nodeId,
            distance: edgeFromPrevDistance,
            safetyScore: findNearestSafetyScore(midpoint.latitude, midpoint.longitude, kdtree)
          };

          edges.push(edgeFromPrevious);
          nodes[previousNode].edges.push(edgeFromPrevious);
        }

      }

      previousNode = nodeId;
      if (nearbyPlaces) {
        for (const place of nearbyPlaces) {
          let placeNode = `${place.latitude},${place.longitude}`;
          if (fetchedPlaces.has(placeNode)) {
            continue;
          };
          previousPlaces.push(placeNode);
        }
      }

      }

        return [nodes, originalStartNodeID, originalDestinationID ];

      };

     

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
    
            let safestRoute = aStar(startNode, destinationNode, nodes);

            // Need to get safest route in format to display route on screen. 
            setCoordinates([]);
            const coordinates = []

            safestRoute.forEach(node => {
              let step = node.split(",");
              const splitCoordinates = { latitude: parseFloat(step[0]), longitude: parseFloat(step[1]) };
              // Push these objects into the coordinates array
              coordinates.push(splitCoordinates);           
            });

            setCoordinates(coordinates);

        }
      } catch (error) {
        console.error("ERROR IN FIND AND SET SAFEST ROUTE:", error);
      }
    };
    console.log(route);
    findAndSetSafestRoute();
}, [routeInfo]);


  const initialRegion = {
      latitude: 52.285802,
      longitude: -1.533322,
      latitudeDelta: 0.01,
      longitudeDelta: 0.01
  };

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

        
        {start && destination && coords && route && (
          <MapViewDirections
            origin = {start}
            destination = {destination}
            apikey = {GOOGLE_API_KEY}
            strokeWidth = {3}
            strokeColor = "blue"
            mode = "WALKING"
            onReady={result => {
              console.log('Distance:', result.distance, 'km');
              console.log('Duration:', result.duration, 'min');
            }}            
          />
        )}

      </MapView>

      <View style>
          

      </View>

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

      
      {isPressed ? (      

        // New search bar when active
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

          <View style = {styles.checkBoxContainer} >
              <Text style = {styles.titleText}> Choose journey priorities: </Text>

              <View style = {styles.checkContainer}>
                <CheckBox
                  title="Efficient"
                  checked={efficientChecked}
                  onPress={() => setEfficientChecked(!efficientChecked)}
                />
                <CheckBox
                  title="Safe"
                  checked={safeChecked}
                  onPress={() => setSafeChecked(!safeChecked)}
                />
                <CheckBox
                  title="Busy"
                  checked={busyChecked}
                  onPress={() => setBusyChecked(!busyChecked)}
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
                  onPress={() => setEfficientChecked(!efficientChecked)}
                />
                <CheckBox
                  title="Safe"
                  checked={safeChecked}
                  onPress={() => setSafeChecked(!safeChecked)}
                />
                <CheckBox
                  title="Busy"
                  checked={busyChecked}
                  onPress={() => setBusyChecked(!busyChecked)}
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

          <Pressable 
            onPress={ () => {
              navigation.navigate("FeedbackPage")
            }}
            style = {styles.routeButton}> 

            <Text style={styles.buttonText}>
              Finished Journey
            </Text>          
            
          </Pressable>


        ) : !startJourney && !isPressed && (
          // Original content
          
          <View style = {styles.searchBarContainer}> 
          <Icon style={styles.searchIcon} name="search" />
            <Text style = {styles.searchInput}>
              Search for a route
            </Text>
          </View>
        )}
    
      </View>

      {/* <View style={styles.directionsContainer}>
        {routeInfo.steps.map((step, index) => (
          step.instructions ? 
          <RenderHtml key={index} contentWidth={width} source={{ html: step.instructions }} /> :
          null
        ))}
      </View> */}

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
    height: '80%'
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
    // Add your styles for the directions container here
    position: 'absolute',
    bottom: Constants.statusBarHeight, // for example
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
    flexDirection: 'column'
  },
  navigationContainer: {
    height: '20%'
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
    marginBottom: "27%"
  },
  arrowIcon: {
    color: "white",
    position: 'absolute',
    fontSize: 40
  },
  iconContainer: {
    position: 'absolute',
    top: -40,  // Adjust the top positioning as needed
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
  }
})