const buildGraph = async (routeInfo) => {
    const nodes = {};
    const edges = [];
    const kdtree = getCurrentKDTree();

    // Sets start node and end node of original route - coordinates from route not the actual coordinates of places 
    let originalStartNodeID = `${routeInfo.steps[0].data.start_location.lat},${routeInfo.steps[0].data.start_location.lng}`;
    let originalDestinationID = `${routeInfo.steps[0].data.end_location.lat},${routeInfo.steps[0].data.end_location.lng}`;

    console.log("START NODE ID: ");
    console.log(originalStartNodeID);

    console.log("DESTINATION NODE ID: ");
    console.log(originalDestinationID);

    // Holds all places fetched in a set, to check that a place is not added to the graph twice. 
    let fetchedPlaces = new Set();

    for (const stepObj of routeInfo.steps) {
      
      const step = stepObj.data;

      console.log("STEP DATA: ");
      console.log(step);

      // Sets start node and end node of original route - coordinates from route not the actual coordinates of places 
      let startNode = `${step.start_location.lat},${step.start_location.lng}`;
      let endNode = `${step.end_location.lat},${step.end_location.lng}`;

      console.log("start node of step: ");
      console.log(startNode);

      console.log("end node of step: ");
      console.log(endNode);

      // Add nodes to graph -> these will be nodes of the original graph. 
      if (!nodes[startNode]) {
        nodes[startNode] = { id: startNode, edges: [] };
      }

      // Add end node to graph 
      if (!nodes[endNode]) {
        nodes[endNode] = { id: endNode, edges: [] };
      }

      console.log("NODES: ");
      console.log(nodes);

      let midpoint = calculateMidpoint(step.start_location.lat, step.start_location.lng, step.end_location.lat, step.end_location.lng);
      
      // Add edges to graph -> these will be the distances between the nodes of the orginal graph. 
      const edge = {
        from: startNode,
        to: endNode,
        distance: step.distance.value,
        safetyScore: findNearestSafetyScore(midpoint.latitude, midpoint.longitude, kdtree)
      };

      console.log("SAFETY score");
      console.log(edge.safetyScore);

      edges.push(edge);
  
      // Links corresponding edges to nodes
      nodes[startNode].edges.push(edge);
    } 
    
    
    //end of loop --> have now constructed a list of nodes and edges of the ORIGINAL ROUTE.

      // Now, we need to loop through each longitude and latutide in the graph and get 3 places, then add edges between corresponding nodes
      // Make a list of longitude/latitude pairs  

    
    // Loop through the node array to get all current data points. 

    // Define currentPlaces array - this indicates that places have not been found yet.
    const currentPlaces = [];

    console.log(nodes);

    for (const eachNode of Object.keys(nodes)) {
      let coords = nodes[eachNode].id.split(",");
      let currentLat = coords[0];
      let currentLon = coords[1];
      const nearbyPlaces = await fetchNearbyPlaces(currentLat, currentLon);
      const requiredPlaces = [];
      
      for (const place of nearbyPlaces) {

        // Sets placeNode equal to longitude and latitude
        const placeNode = `${place.latitude},${place.longitude}`;

         // If place has already been added to the nodes, then this is ignored and the next place is looked at.
        if (fetchedPlaces.has(placeNode)) {
          break;
        };
        
        // Adds this place to list of fetched places --> places that are already in the array.
        fetchedPlaces.add(placeNode);
        requiredPlaces.push(place);

        // Adds placeNode to nodes array.
        nodes[placeNode] = { id: placeNode, edges: [], placeDetails: place };

        console.log("PLACE NODE: ");
        console.log(placeNode);

        // Finds distance between current node in array and all places. 
        const distanceStore = await getDistance(
          currentLat, currentLon,
          place.latitude, place.longitude);
        

        let midpoint = calculateMidpoint(currentLat, currentLon, place.latitude, place.longitude)

        // Creates edge from current node to each place.
        const currentEdge = {
          from: nodes[eachNode].id,
          to: placeNode,
          distance: distanceStore,
          safetyScore: findNearestSafetyScore(midpoint.latitude, midpoint.longitude, kdtree)
        };

        edges.push(currentEdge);
        nodes[eachNode].edges.push(currentEdge);

        // Checks if there is a previous node (i.e. it is not the first node) then an edge is constructed from each edge to the node before the current node.
        if (previousNode) {
          const [prevLat, prevLng] = previousNode.id.split(',');
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
          nodes[previousNode.id].edges.push(edgeFromPrevious);
        }
    }

  //   if (currentPlaces.length > 0) {
  //     for (const place of currentPlaces) {

  //       // Sets placeNode equal to longitude and latitude
  //       const placeNode = `${place.latitude},${place.longitude}`;

  //       // Adds placeNode to nodes array.
  //       nodes[placeNode] = { id: placeNode, edges: [], placeDetails: place };

  //       console.log("PLACE NODE: ");
  //       console.log(placeNode);

  //       // Finds distance between current node in array and all places. 
  //       const distanceStore = await getDistance(
  //         currentLat, currentLon,
  //         place.latitude, place.longitude);
        

  //       let midpoint = calculateMidpoint(currentLat, currentLon, place.latitude, place.longitude);

  //       // Creates edge from current node to each place.
  //       const currentEdge = {
  //         from: placeNode,
  //         to: nodes[eachNode].id,
  //         distance: distanceStore,
  //         safetyScore: findNearestSafetyScore(midpoint.latitude, midpoint.longitude, kdtree)
  //       };

  //       edges.push(currentEdge);
  //       nodes[placeNode].edges.push(currentEdge);
        
  //     }

  //   };

  //   // Fills up current places array.

  //   for (const place of requiredPlaces) {
  //     currentPlaces.push(place);
  //   };

  //   previousNode = nodes[eachNode];

  // }
    
    return [nodes, originalStartNodeID, originalDestinationID ];
  };