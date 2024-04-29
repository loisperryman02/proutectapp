/**
 * This file holds the A* search algorithm used to find the safest route in a graph.
 */

export function aStar(startNode, goalNode, nodes, preferences) {
    let openSet = new Set(); 
    let exploredSet = new Set(); 
    let cameFrom = new Map(); 
    let gScore = {}; // output of cost function
    let fScore = {}; // output of heuristic function

    // Open set starts at start node
    openSet.add(startNode.id);

    gScore[startNode.id] = 0;
    fScore[startNode.id] = 0;

    // Sets goal node as destination location.
    goal = {
        id: goalNode.id,
        edges: goalNode.edges
    };
    
    while (openSet.size > 0) {

        lowestFScore = Infinity;
        let currentId = null;

        // Loops through openSet, gets the node with the lowest fScore and sets it as the current node
        openSet.forEach(nodeId => {
            if (fScore[nodeId] < lowestFScore) {
                currentId = nodeId;
                lowestFScore = fScore[nodeId];
            }
        });

        // If there is no current node to explore then break out of the loop as there must be no other nodes to explore.
        if (currentId == null) continue;

        current = nodes.get(currentId);
        openSet.delete(currentId);
        exploredSet.add(currentId);

        // Explores all neighbours of current node to find the lowest cost one.
        for (let edge of current.edges) {
            let neighbourId = edge.to;
            let neighbour = nodes.get(neighbourId);

            if (exploredSet.has(neighbourId)) {
                continue;
            }

            if (neighbourId === goalNode.id) {
                cameFrom.set(neighbourId, current);
                return reconstructPath(cameFrom, neighbour);
            }
            
            // Calls the cost function
            let temporaryCost = costFunction(edge, preferences);

            // Calculates the total cost (gscore) for the current neighbour
            let temporaryGScore = gScore[current.id] + temporaryCost;
            
            // Calculates the total predicted cost from neighbour to the goal node, by summing the gscore cost and the heuristic cost.
            let temporaryFScore = temporaryGScore + heuristicCostEstimate(neighbour, goal, preferences);

            // If the total predicted cost (fscore) is lower than the existing one for this neighbour node, then the lowest cost route is updated. 
            // If the neighbour node hasn't been encountered before, then its gscore is assigned to infinity.
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

function deg2rad(degrees) {
    return degrees * (Math.PI / 180);
}

// Defines the heuristic cost function, which applies the same weights as the cost function to ensure that it does not overestimate the cost.
function heuristicCostEstimate(currentNode, goalNode, preferences) {
    let distance_weight = 0.5;

    if (preferences.size == 1) {
        if (preferences.has("Efficiency")) {
            distance_weight =  0.8;
        } else {
            distance_weight =  0.2;
        }
    }
    return haversineDistance(currentNode.id, goalNode.id) * distance_weight;
}

// The cost function is altered depending on the user preferences selected. The weights of the cost function are adjusted accordingly. 
function costFunction(edge, preferences) {
    let distance_weight = 0.5;
    let safety_weight = 0.5;

    if (preferences.size == 1) {
        if (preferences.has("Efficiency")) {
            distance_weight =  0.8;
            safety_weight = 0.2;
        } else {
            distance_weight =  0.2;
            safety_weight = 0.8;
        }
    }

    let safety_score = 0;

    // The lowest possible safety score should result in the highest penalty. 
    if (edge.safetyScore == 0) {
        safety_score = safety_weight;
    } else if (edge.safetyScore = 100)  {
        safety_score = 0;
    } else {
        safety_score = parseFloat(1/edge.safetyScore) * safety_weight;
    }

    let gScore = ((edge.distance * distance_weight) + safety_score);

    return gScore
}

/**
 * This function returns the optimal route from the start node to the goal node. 
 * It iterates backwards from the goal node to the start node using the data stored in the cameFrom map,
 * which keeps track of the best predecessor for each node. The function returns the entire sequence of steps taken.
 */
function reconstructPath(cameFrom, goal) {
    let goalId = goal.id;
    let totalPath = [goalId];

    while (cameFrom.has(goalId)) {
        let predessecorNode = cameFrom.get(goalId);
        totalPath.unshift(predessecorNode.id);
        goalId = predessecorNode.id;
    }

    return totalPath;
}