
// A* Graph Search algorithm. 

// Need to sort out objects and how they are accessed in this file.
export function aStar(startNode, goalNode, nodes, preferences) {
    let openSet = new Set(); // starts with start node
    let exploredSet = new Set(); // defines already explored nodes
    let cameFrom = new Map(); // reconstructs path later
    let gScore = {}; // Cost from start to node
    let fScore = {}; // estimated cost from start to goal through node

    console.log("-------------------------------STARTING A*------------------------------");

    openSet.add(startNode.id);

    // Sets it to the highest possible value, so it can be updated later
    gScore[startNode.id] = 0;
    fScore[startNode.id] = 0;

    goal = {
        id: goalNode.id,
        edges: goalNode.edges
    };
    
    while (openSet.size > 0) {

        lowestFScore = Infinity;
        let currentId = null;

        // Loops through openSet, gets the node with the lowest fScore and sets it to current 
        openSet.forEach(nodeId => {
            if (fScore[nodeId] < lowestFScore) {
                currentId = nodeId;
                lowestFScore = fScore[nodeId];
            }
        });

        // if no current node, break out of loop. 
        if (currentId == null) continue;

        current = nodes.get(currentId);

        openSet.delete(currentId);
        exploredSet.add(currentId);

        for (let edge of current.edges) {
            let neighbourId = edge.to;
            let neighbour = nodes.get(neighbourId);

            if (exploredSet.has(neighbourId)) {
                continue;
            }

            if (neighbourId === goalNode.id) {
                // console.log("Found goal id!");
                cameFrom.set(neighbourId, current);
                // console.log(cameFrom);
                return reconstructPath(cameFrom, neighbour);
            }

            // console.log("PREFERENCES!!!");
            // console.log(preferences);

            console.log("edge!!!");
            console.log(edge);
            let temporaryCost = costFunction(edge, preferences);
            


            // Calculates a temporary gScore for neighbour node 
            // Sum of gScore of current node, and the cost of current node and neighbour (considering distance and safety score)
            let temporaryGScore = gScore[current.id] + temporaryCost;
            
            let temporaryFScore = temporaryGScore + heuristicCostEstimate(neighbour, goal);

            // This checks if the tentative gScore for neighbour node is better than previously recorded
            // If neighbour node hasn't been encountered before, infinity is assigned to gScore

            if (!fScore[neighbourId] || temporaryFScore < fScore[neighbourId]) {

                cameFrom.set(neighbour.id, current);
                gScore[neighbourId] = temporaryGScore;
                fScore[neighbourId] = temporaryFScore;

                if (!openSet.has(neighbourId)) {
                    openSet.add(neighbourId);
                };

            }
            
            
        }
    }

    return [];
}


function haversineDistance(coords1, coords2, isMiles = false) {
    
    // Earth's radius in kilometers or miles
    const RADIUS_OF_EARTH_IN_KM = 6371;
    const RADIUS_OF_EARTH_IN_MILES = 3959;
  
    const radius = isMiles ? RADIUS_OF_EARTH_IN_MILES : RADIUS_OF_EARTH_IN_KM;

    firstCoordinates = coords1.split(",");
    const lat1 = parseFloat(firstCoordinates[0]);
    const lon1 = parseFloat(firstCoordinates[1]);

    secondCoordinates = coords2.split(",");
    const lat2 = parseFloat(secondCoordinates[0]);
    
    const lon2 = parseFloat(secondCoordinates[1]);

    const latDelta = deg2rad(lat2 - lat1);
    const lonDelta = deg2rad(lon2 - lon1);
  
    const a = Math.sin(latDelta / 2) * Math.sin(latDelta / 2) +
                Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
                Math.sin(lonDelta / 2) * Math.sin(lonDelta / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  
    return radius * c;
  }

  
// Helper function to convert degrees to radians
function deg2rad(degrees) {
    return degrees * (Math.PI / 180);
}


function heuristicCostEstimate(currentNode, goalNode) {
    return haversineDistance(currentNode.id, goalNode.id);
}

// The cost function will be altered depending on user preferences
// The user may prefer a more efficient, safe or busy route

function costFunction(edge, preferences) {

    let distance_weight = 0.5;
    let safety_weight = 0.5;


    console.log(edge.distance);



    if (preferences.size == 1) {
        if (preferences.has("Efficiency")) {
            distance_weight =  0.8;
            safety_weight = 0.2;
        } else {
            distance_weight =  0.2;
            safety_weight = 0.8;
        }
    }

    let gScore = ((edge.distance * distance_weight) + (parseFloat(1/edge.safetyScore) * safety_weight));

    return gScore
}

// Iterates backwards from the goal node to the start node using cameFrom map
// cameFrom map -> keeps track of the best predessecor for each node
// This function gets the entire sequence of steps taken once the goal is found. 
function reconstructPath(cameFrom, goal) {
    let goalId = goal.id;
    let totalPath = [goalId];
    // console.log("total path");
    // console.log(totalPath);

    while (cameFrom.has(goalId)) {
        let predessecorNode = cameFrom.get(goalId);
        totalPath.unshift(predessecorNode.id);
        goalId = predessecorNode.id;
    }

    return totalPath;
}