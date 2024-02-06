import { kdTree } from 'kd-tree-javascript';
// import { safety_scores } from 'C:/Users/loisp/Documents/Year3/Dissertation/Proutect/Proutect/csv-json-files/safety_scores.json';

let safety_scores = 
[
  {
    "Latitude": 52.268551,
    "Longitude": -1.570058,
    "Safety_Score": "65.0"
  },
  {
    "Latitude": 52.268551,
    "Longitude": -1.562762,
    "Safety_Score": "47.31337351"
  },
  {
    "Latitude": 52.268551,
    "Longitude": -1.555381,
    "Safety_Score": "53.149663753333336"
  },
  {
    "Latitude": 52.268551,
    "Longitude": -1.548171,
    "Safety_Score": "38.691645099999995"
  },
  {
    "Latitude": 52.268551,
    "Longitude": -1.540875,
    "Safety_Score": "46.255208100000004"
  },
  {
    "Latitude": 52.268551,
    "Longitude": -1.533494,
    "Safety_Score": "49.12114172"
  },
  {
    "Latitude": 52.268551,
    "Longitude": -1.526155,
    "Safety_Score": "51.02499434333333"
  },
  {
    "Latitude": 52.268551,
    "Longitude": -1.518688,
    "Safety_Score": "58.32011884"
  },
  {
    "Latitude": 52.268551,
    "Longitude": -1.511564,
    "Safety_Score": "48.98405437666667"
  },
  {
    "Latitude": 52.268551,
    "Longitude": -1.50414,
    "Safety_Score": "65.0"
  },
  {
    "Latitude": 52.268551,
    "Longitude": -1.497617,
    "Safety_Score": "65.0"
  },
  {
    "Latitude": 52.272517,
    "Longitude": -1.570058,
    "Safety_Score": "30.915087126666663"
  },
  {
    "Latitude": 52.272517,
    "Longitude": -1.562762,
    "Safety_Score": "26.781616680000003"
  },
  {
    "Latitude": 52.272517,
    "Longitude": -1.555381,
    "Safety_Score": "51.72134046"
  },
  {
    "Latitude": 52.272517,
    "Longitude": -1.548171,
    "Safety_Score": "47.41179139"
  },
  {
    "Latitude": 52.272517,
    "Longitude": -1.540875,
    "Safety_Score": "33.42037551666667"
  },
  {
    "Latitude": 52.272517,
    "Longitude": -1.533494,
    "Safety_Score": "47.633075633333334"
  },
  {
    "Latitude": 52.272517,
    "Longitude": -1.526155,
    "Safety_Score": "53.83993998333333"
  },
  {
    "Latitude": 52.272517,
    "Longitude": -1.518688,
    "Safety_Score": "57.06609329666666"
  },
  {
    "Latitude": 52.272517,
    "Longitude": -1.511564,
    "Safety_Score": "57.16451111666667"
  },
  {
    "Latitude": 52.272517,
    "Longitude": -1.50414,
    "Safety_Score": "48.61959836666667"
  },
  {
    "Latitude": 52.272517,
    "Longitude": -1.497617,
    "Safety_Score": "55.343112776666665"
  },
  {
    "Latitude": 52.277348,
    "Longitude": -1.570058,
    "Safety_Score": "30.72221885333333"
  },
  {
    "Latitude": 52.277348,
    "Longitude": -1.562762,
    "Safety_Score": "29.585149763333334"
  },
  {
    "Latitude": 52.277348,
    "Longitude": -1.555381,
    "Safety_Score": "31.150629350000003"
  },
  {
    "Latitude": 52.277348,
    "Longitude": -1.548171,
    "Safety_Score": "29.618579686666667"
  },
  {
    "Latitude": 52.277348,
    "Longitude": -1.540875,
    "Safety_Score": "48.263411213333335"
  },
  {
    "Latitude": 52.277348,
    "Longitude": -1.533494,
    "Safety_Score": "47.75409936333333"
  },
  {
    "Latitude": 52.277348,
    "Longitude": -1.526155,
    "Safety_Score": "48.666953756666665"
  },
  {
    "Latitude": 52.277348,
    "Longitude": -1.518688,
    "Safety_Score": "46.94346495"
  },
  {
    "Latitude": 52.277348,
    "Longitude": -1.511564,
    "Safety_Score": "45.68113729"
  },
  {
    "Latitude": 52.277348,
    "Longitude": -1.50414,
    "Safety_Score": "34.95672649666667"
  },
  {
    "Latitude": 52.277348,
    "Longitude": -1.497617,
    "Safety_Score": "50.04116277333333"
  },
  {
    "Latitude": 52.281418,
    "Longitude": -1.570058,
    "Safety_Score": "31.441496413333336"
  },
  {
    "Latitude": 52.281418,
    "Longitude": -1.562762,
    "Safety_Score": "33.97765718333333"
  },
  {
    "Latitude": 52.281418,
    "Longitude": -1.555381,
    "Safety_Score": "44.258170576666664"
  },
  {
    "Latitude": 52.281418,
    "Longitude": -1.548171,
    "Safety_Score": "30.29830246"
  },
  {
    "Latitude": 52.281418,
    "Longitude": -1.540875,
    "Safety_Score": "40.36072968"
  },
  {
    "Latitude": 52.281418,
    "Longitude": -1.533494,
    "Safety_Score": "46.626796250000005"
  },
  {
    "Latitude": 52.281418,
    "Longitude": -1.526155,
    "Safety_Score": "45.17962776666667"
  },
  {
    "Latitude": 52.281418,
    "Longitude": -1.518688,
    "Safety_Score": "47.535889723333334"
  },
  {
    "Latitude": 52.281418,
    "Longitude": -1.511564,
    "Safety_Score": "48.135184769999995"
  },
  {
    "Latitude": 52.281418,
    "Longitude": -1.50414,
    "Safety_Score": "38.262863540000005"
  },
  {
    "Latitude": 52.281418,
    "Longitude": -1.497617,
    "Safety_Score": "30.288206476666662"
  },
  {
    "Latitude": 52.286249,
    "Longitude": -1.570058,
    "Safety_Score": "24.60326641"
  },
  {
    "Latitude": 52.286249,
    "Longitude": -1.562762,
    "Safety_Score": "26.32755115"
  },
  {
    "Latitude": 52.286249,
    "Longitude": -1.555381,
    "Safety_Score": "46.981209336666666"
  },
  {
    "Latitude": 52.286249,
    "Longitude": -1.548171,
    "Safety_Score": "37.723628633333334"
  },
  {
    "Latitude": 52.286249,
    "Longitude": -1.540875,
    "Safety_Score": "40.60841083"
  },
  {
    "Latitude": 52.286249,
    "Longitude": -1.533494,
    "Safety_Score": "44.43362443666666"
  },
  {
    "Latitude": 52.286249,
    "Longitude": -1.526155,
    "Safety_Score": "44.30797104333334"
  },
  {
    "Latitude": 52.286249,
    "Longitude": -1.518688,
    "Safety_Score": "45.25719840333333"
  },
  {
    "Latitude": 52.286249,
    "Longitude": -1.511564,
    "Safety_Score": "49.81778384333333"
  },
  {
    "Latitude": 52.286249,
    "Longitude": -1.50414,
    "Safety_Score": "50.31454218333334"
  },
  {
    "Latitude": 52.286249,
    "Longitude": -1.497617,
    "Safety_Score": "65.0"
  },
  {
    "Latitude": 52.290777,
    "Longitude": -1.570058,
    "Safety_Score": "36.593620146666666"
  },
  {
    "Latitude": 52.290777,
    "Longitude": -1.562762,
    "Safety_Score": "34.79055279333333"
  },
  {
    "Latitude": 52.290777,
    "Longitude": -1.555381,
    "Safety_Score": "46.333957856666665"
  },
  {
    "Latitude": 52.290777,
    "Longitude": -1.548171,
    "Safety_Score": "41.400194776666666"
  },
  {
    "Latitude": 52.290777,
    "Longitude": -1.540875,
    "Safety_Score": "38.60296973333333"
  },
  {
    "Latitude": 52.290777,
    "Longitude": -1.533494,
    "Safety_Score": "35.2805994"
  },
  {
    "Latitude": 52.290777,
    "Longitude": -1.526155,
    "Safety_Score": "47.679741166666666"
  },
  {
    "Latitude": 52.290777,
    "Longitude": -1.518688,
    "Safety_Score": "43.44858558666667"
  },
  {
    "Latitude": 52.290777,
    "Longitude": -1.511564,
    "Safety_Score": "38.212501886666665"
  },
  {
    "Latitude": 52.290777,
    "Longitude": -1.50414,
    "Safety_Score": "65.0"
  },
  {
    "Latitude": 52.290777,
    "Longitude": -1.497617,
    "Safety_Score": "65.0"
  },
  {
    "Latitude": 52.295042,
    "Longitude": -1.570058,
    "Safety_Score": "36.63678922333333"
  },
  {
    "Latitude": 52.295042,
    "Longitude": -1.562762,
    "Safety_Score": "39.458076846666664"
  },
  {
    "Latitude": 52.295042,
    "Longitude": -1.555381,
    "Safety_Score": "48.41571103333333"
  },
  {
    "Latitude": 52.295042,
    "Longitude": -1.548171,
    "Safety_Score": "36.45224213666667"
  },
  {
    "Latitude": 52.295042,
    "Longitude": -1.540875,
    "Safety_Score": "42.96627217333333"
  },
  {
    "Latitude": 52.295042,
    "Longitude": -1.533494,
    "Safety_Score": "42.17868164666667"
  },
  {
    "Latitude": 52.295042,
    "Longitude": -1.526155,
    "Safety_Score": "49.974718849999995"
  },
  {
    "Latitude": 52.295042,
    "Longitude": -1.518688,
    "Safety_Score": "70.69559656"
  },
  {
    "Latitude": 52.295042,
    "Longitude": -1.511564,
    "Safety_Score": "65.0"
  },
  {
    "Latitude": 52.295042,
    "Longitude": -1.50414,
    "Safety_Score": "65.0"
  },
  {
    "Latitude": 52.295042,
    "Longitude": -1.497617,
    "Safety_Score": "65.0"
  }
];
 
 function haversineDistance(coords1, coords2, isMiles = false) {
  // Earth's radius in kilometers or miles
  const RADIUS_OF_EARTH_IN_KM = 6371;
  const RADIUS_OF_EARTH_IN_MILES = 3959;

  const radius = isMiles ? RADIUS_OF_EARTH_IN_MILES : RADIUS_OF_EARTH_IN_KM;
  const lat1 = coords1.latitude;
  const lon1 = coords1.longitude;
  const lat2 = coords2.latitude;
  const lon2 = coords2.longitude;

  const latDelta = degreesToRadians(lat2 - lat1);
  const lonDelta = degreesToRadians(lon2 - lon1);

  const a = Math.sin(latDelta / 2) * Math.sin(latDelta / 2) +
              Math.cos(degreesToRadians(lat1)) * Math.cos(degreesToRadians(lat2)) *
              Math.sin(lonDelta / 2) * Math.sin(lonDelta / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  return radius * c;
}

function getAverageSafetyScore(lat, lng, safety_scores) {
    let averageScore = 0;
    safety_scores.forEach(entry => {
      if (entry.Latitude == lat && entry.Longitude == lng) {
        averageScore = averageScore + entry.Safety_Score
      }
    })

    return averageScore/3
  }

function degreesToRadians(degrees) {
  return degrees * (Math.PI / 180);
}

function buildKDTree(data) {
  return new kdTree(data, haversineDistance, ["latitude", "longitude"]);
}

export function findNearestSafetyScore(lat, lng, kdtree) {
  let nearest = kdtree.nearest({ latitude: lat, longitude: lng }, 3);
  return nearest[0][0].latitude; // Returns the Safety_Score of the nearest point
}

export function findNearestPoints(lat, lng, kdtree, numPoints) {
  // Find the 'numPoints' nearest points to the given latitude and longitude
  let nearest = kdtree.nearest({ latitude: lat, longitude: lng }, numPoints);

  // Map the results to an array of objects with latitude, longitude, and safetyScore
  let returned_points = nearest.map(point => ({
    latitude: point[0].latitude,
    longitude: point[0].longitude,
    safetyScore: point[0].safetyScore
  }));

  return returned_points;
}

// Plus 5 to safety score for daytime KD tree.
export const daytimeKDTree = buildKDTree(safety_scores.map(item => ({
  latitude: item.Latitude, longitude: item.Longitude, safetyScore: getAverageSafetyScore(item.Latitude, item.Longitude, safety_scores)+5
})));

// Minus 5 from safety score for evening KD tree.
export const eveningKDTree = buildKDTree(safety_scores.map(item => ({
  latitude: item.Latitude, longitude: item.Longitude, safetyScore: getAverageSafetyScore(item.Latitude, item.Longitude, safety_scores)-5
})));

function findLowestAverageSafetyScore(safety_scores) {
  // Group by latitude and longitude and calculate average safety score for each group
  const groupedByCoordinates = {};

  safety_scores.forEach(item => {
    const key = `${item.Latitude},${item.Longitude}`;
    if (!groupedByCoordinates[key]) {
      groupedByCoordinates[key] = { total: 0, count: 0 };
    }
    groupedByCoordinates[key].total += item.Safety_Score;
    groupedByCoordinates[key].count += 1;
  });

  // Calculate average for each group and find the lowest average
  let lowestAverage = Number.MAX_VALUE;
  Object.values(groupedByCoordinates).forEach(group => {
    const average = group.total / group.count;
    if (average < lowestAverage) {
      lowestAverage = average;
      console.log("lowest group", group)
    }
  });

  return lowestAverage;
}

const lowestAverage = findLowestAverageSafetyScore(safety_scores);
console.log(`Lowest average safety score: ${lowestAverage}`);




