const buildOriginalGraph = async (routeInfo) => {
    let nodes = new Map();
    const edges = [];
    const kdtree = getCurrentKDTree();

    console.log("Route info:");
    console.log(routeInfo);

    // Sets start node and end node of original route - coordinates from route not the actual coordinates of places 
    let originalStartNodeID = `${routeInfo.steps[0].data.start_location.lat},${routeInfo.steps[0].data.start_location.lng}`;
    let originalDestinationID = `${routeInfo.steps[routeInfo.steps.length-1].data.end_location.lat},${routeInfo.steps[routeInfo.steps.length-1].data.end_location.lng}`;

    console.log("ORIGINAL START NODE ID: ");
    console.log(originalStartNodeID);

    console.log("ORIGINAL DESTINATION NODE ID: ");
    console.log(originalDestinationID);
  
    for (const stepObj of routeInfo.steps) {

      const step = stepObj.data;

      console.log("step data:");
      console.log(step);

      // Sets start node and end node of original route - coordinates from route not the actual coordinates of places 
      let startNode = `${step.start_location.lat},${step.start_location.lng}`;
      let endNode = `${step.end_location.lat},${step.end_location.lng}`;

      console.log("start node of step: ");
      console.log(startNode);

      console.log("end node of step: ");
      console.log(endNode);

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

      edges.push(edge);

      console.log("Start node entry");
      console.log(nodes.get(startNode).edges);

  
      nodes.get(startNode).edges.push(edge);

      console.log("Start node entry");
      console.log(nodes.get(startNode).edges);

    
    } 

    return [ nodes ];

  }