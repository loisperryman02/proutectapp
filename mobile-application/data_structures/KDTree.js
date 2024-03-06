import { kdTree } from 'kd-tree-javascript';
// import { safety_scores } from 'C:/Users/loisp/Documents/Year3/Dissertation/Proutect/Proutect/csv-json-files/safety_scores.json';

// let safety_scores = 
// [
//   {
//     "Latitude": 52.268551,
//     "Longitude": -1.570058,
//     "Safety_Score": "65.0"
//   },
//   {
//     "Latitude": 52.268551,
//     "Longitude": -1.562762,
//     "Safety_Score": "47.31337351"
//   },
//   {
//     "Latitude": 52.268551,
//     "Longitude": -1.555381,
//     "Safety_Score": "53.149663753333336"
//   },
//   {
//     "Latitude": 52.268551,
//     "Longitude": -1.548171,
//     "Safety_Score": "38.691645099999995"
//   },
//   {
//     "Latitude": 52.268551,
//     "Longitude": -1.540875,
//     "Safety_Score": "46.255208100000004"
//   },
//   {
//     "Latitude": 52.268551,
//     "Longitude": -1.533494,
//     "Safety_Score": "49.12114172"
//   },
//   {
//     "Latitude": 52.268551,
//     "Longitude": -1.526155,
//     "Safety_Score": "51.02499434333333"
//   },
//   {
//     "Latitude": 52.268551,
//     "Longitude": -1.518688,
//     "Safety_Score": "58.32011884"
//   },
//   {
//     "Latitude": 52.268551,
//     "Longitude": -1.511564,
//     "Safety_Score": "48.98405437666667"
//   },
//   {
//     "Latitude": 52.268551,
//     "Longitude": -1.50414,
//     "Safety_Score": "65.0"
//   },
//   {
//     "Latitude": 52.268551,
//     "Longitude": -1.497617,
//     "Safety_Score": "65.0"
//   },
//   {
//     "Latitude": 52.272517,
//     "Longitude": -1.570058,
//     "Safety_Score": "30.915087126666663"
//   },
//   {
//     "Latitude": 52.272517,
//     "Longitude": -1.562762,
//     "Safety_Score": "26.781616680000003"
//   },
//   {
//     "Latitude": 52.272517,
//     "Longitude": -1.555381,
//     "Safety_Score": "51.72134046"
//   },
//   {
//     "Latitude": 52.272517,
//     "Longitude": -1.548171,
//     "Safety_Score": "47.41179139"
//   },
//   {
//     "Latitude": 52.272517,
//     "Longitude": -1.540875,
//     "Safety_Score": "33.42037551666667"
//   },
//   {
//     "Latitude": 52.272517,
//     "Longitude": -1.533494,
//     "Safety_Score": "47.633075633333334"
//   },
//   {
//     "Latitude": 52.272517,
//     "Longitude": -1.526155,
//     "Safety_Score": "53.83993998333333"
//   },
//   {
//     "Latitude": 52.272517,
//     "Longitude": -1.518688,
//     "Safety_Score": "57.06609329666666"
//   },
//   {
//     "Latitude": 52.272517,
//     "Longitude": -1.511564,
//     "Safety_Score": "57.16451111666667"
//   },
//   {
//     "Latitude": 52.272517,
//     "Longitude": -1.50414,
//     "Safety_Score": "48.61959836666667"
//   },
//   {
//     "Latitude": 52.272517,
//     "Longitude": -1.497617,
//     "Safety_Score": "55.343112776666665"
//   },
//   {
//     "Latitude": 52.277348,
//     "Longitude": -1.570058,
//     "Safety_Score": "30.72221885333333"
//   },
//   {
//     "Latitude": 52.277348,
//     "Longitude": -1.562762,
//     "Safety_Score": "29.585149763333334"
//   },
//   {
//     "Latitude": 52.277348,
//     "Longitude": -1.555381,
//     "Safety_Score": "31.150629350000003"
//   },
//   {
//     "Latitude": 52.277348,
//     "Longitude": -1.548171,
//     "Safety_Score": "29.618579686666667"
//   },
//   {
//     "Latitude": 52.277348,
//     "Longitude": -1.540875,
//     "Safety_Score": "48.263411213333335"
//   },
//   {
//     "Latitude": 52.277348,
//     "Longitude": -1.533494,
//     "Safety_Score": "47.75409936333333"
//   },
//   {
//     "Latitude": 52.277348,
//     "Longitude": -1.526155,
//     "Safety_Score": "48.666953756666665"
//   },
//   {
//     "Latitude": 52.277348,
//     "Longitude": -1.518688,
//     "Safety_Score": "46.94346495"
//   },
//   {
//     "Latitude": 52.277348,
//     "Longitude": -1.511564,
//     "Safety_Score": "45.68113729"
//   },
//   {
//     "Latitude": 52.277348,
//     "Longitude": -1.50414,
//     "Safety_Score": "34.95672649666667"
//   },
//   {
//     "Latitude": 52.277348,
//     "Longitude": -1.497617,
//     "Safety_Score": "50.04116277333333"
//   },
//   {
//     "Latitude": 52.281418,
//     "Longitude": -1.570058,
//     "Safety_Score": "31.441496413333336"
//   },
//   {
//     "Latitude": 52.281418,
//     "Longitude": -1.562762,
//     "Safety_Score": "33.97765718333333"
//   },
//   {
//     "Latitude": 52.281418,
//     "Longitude": -1.555381,
//     "Safety_Score": "44.258170576666664"
//   },
//   {
//     "Latitude": 52.281418,
//     "Longitude": -1.548171,
//     "Safety_Score": "30.29830246"
//   },
//   {
//     "Latitude": 52.281418,
//     "Longitude": -1.540875,
//     "Safety_Score": "40.36072968"
//   },
//   {
//     "Latitude": 52.281418,
//     "Longitude": -1.533494,
//     "Safety_Score": "46.626796250000005"
//   },
//   {
//     "Latitude": 52.281418,
//     "Longitude": -1.526155,
//     "Safety_Score": "45.17962776666667"
//   },
//   {
//     "Latitude": 52.281418,
//     "Longitude": -1.518688,
//     "Safety_Score": "47.535889723333334"
//   },
//   {
//     "Latitude": 52.281418,
//     "Longitude": -1.511564,
//     "Safety_Score": "48.135184769999995"
//   },
//   {
//     "Latitude": 52.281418,
//     "Longitude": -1.50414,
//     "Safety_Score": "38.262863540000005"
//   },
//   {
//     "Latitude": 52.281418,
//     "Longitude": -1.497617,
//     "Safety_Score": "30.288206476666662"
//   },
//   {
//     "Latitude": 52.286249,
//     "Longitude": -1.570058,
//     "Safety_Score": "24.60326641"
//   },
//   {
//     "Latitude": 52.286249,
//     "Longitude": -1.562762,
//     "Safety_Score": "26.32755115"
//   },
//   {
//     "Latitude": 52.286249,
//     "Longitude": -1.555381,
//     "Safety_Score": "46.981209336666666"
//   },
//   {
//     "Latitude": 52.286249,
//     "Longitude": -1.548171,
//     "Safety_Score": "37.723628633333334"
//   },
//   {
//     "Latitude": 52.286249,
//     "Longitude": -1.540875,
//     "Safety_Score": "40.60841083"
//   },
//   {
//     "Latitude": 52.286249,
//     "Longitude": -1.533494,
//     "Safety_Score": "44.43362443666666"
//   },
//   {
//     "Latitude": 52.286249,
//     "Longitude": -1.526155,
//     "Safety_Score": "44.30797104333334"
//   },
//   {
//     "Latitude": 52.286249,
//     "Longitude": -1.518688,
//     "Safety_Score": "45.25719840333333"
//   },
//   {
//     "Latitude": 52.286249,
//     "Longitude": -1.511564,
//     "Safety_Score": "49.81778384333333"
//   },
//   {
//     "Latitude": 52.286249,
//     "Longitude": -1.50414,
//     "Safety_Score": "50.31454218333334"
//   },
//   {
//     "Latitude": 52.286249,
//     "Longitude": -1.497617,
//     "Safety_Score": "65.0"
//   },
//   {
//     "Latitude": 52.290777,
//     "Longitude": -1.570058,
//     "Safety_Score": "36.593620146666666"
//   },
//   {
//     "Latitude": 52.290777,
//     "Longitude": -1.562762,
//     "Safety_Score": "34.79055279333333"
//   },
//   {
//     "Latitude": 52.290777,
//     "Longitude": -1.555381,
//     "Safety_Score": "46.333957856666665"
//   },
//   {
//     "Latitude": 52.290777,
//     "Longitude": -1.548171,
//     "Safety_Score": "41.400194776666666"
//   },
//   {
//     "Latitude": 52.290777,
//     "Longitude": -1.540875,
//     "Safety_Score": "38.60296973333333"
//   },
//   {
//     "Latitude": 52.290777,
//     "Longitude": -1.533494,
//     "Safety_Score": "35.2805994"
//   },
//   {
//     "Latitude": 52.290777,
//     "Longitude": -1.526155,
//     "Safety_Score": "47.679741166666666"
//   },
//   {
//     "Latitude": 52.290777,
//     "Longitude": -1.518688,
//     "Safety_Score": "43.44858558666667"
//   },
//   {
//     "Latitude": 52.290777,
//     "Longitude": -1.511564,
//     "Safety_Score": "38.212501886666665"
//   },
//   {
//     "Latitude": 52.290777,
//     "Longitude": -1.50414,
//     "Safety_Score": "65.0"
//   },
//   {
//     "Latitude": 52.290777,
//     "Longitude": -1.497617,
//     "Safety_Score": "65.0"
//   },
//   {
//     "Latitude": 52.295042,
//     "Longitude": -1.570058,
//     "Safety_Score": "36.63678922333333"
//   },
//   {
//     "Latitude": 52.295042,
//     "Longitude": -1.562762,
//     "Safety_Score": "39.458076846666664"
//   },
//   {
//     "Latitude": 52.295042,
//     "Longitude": -1.555381,
//     "Safety_Score": "48.41571103333333"
//   },
//   {
//     "Latitude": 52.295042,
//     "Longitude": -1.548171,
//     "Safety_Score": "36.45224213666667"
//   },
//   {
//     "Latitude": 52.295042,
//     "Longitude": -1.540875,
//     "Safety_Score": "42.96627217333333"
//   },
//   {
//     "Latitude": 52.295042,
//     "Longitude": -1.533494,
//     "Safety_Score": "42.17868164666667"
//   },
//   {
//     "Latitude": 52.295042,
//     "Longitude": -1.526155,
//     "Safety_Score": "49.974718849999995"
//   },
//   {
//     "Latitude": 52.295042,
//     "Longitude": -1.518688,
//     "Safety_Score": "70.69559656"
//   },
//   {
//     "Latitude": 52.295042,
//     "Longitude": -1.511564,
//     "Safety_Score": "65.0"
//   },
//   {
//     "Latitude": 52.295042,
//     "Longitude": -1.50414,
//     "Safety_Score": "65.0"
//   },
//   {
//     "Latitude": 52.295042,
//     "Longitude": -1.497617,
//     "Safety_Score": "65.0"
//   }
// ];

let safety_scores = 
[
  {
    "Latitude": 52.295042,
    "Longitude": -1.570058,
    "Safety Score": 13.80620686
  },
  {
    "Latitude": 52.295042,
    "Longitude": -1.562762,
    "Safety Score": 11.58090568
  },
  {
    "Latitude": 52.295042,
    "Longitude": -1.555381,
    "Safety Score": 28.07885933
  },
  {
    "Latitude": 52.295042,
    "Longitude": -1.548171,
    "Safety Score": 37.73148045
  },
  {
    "Latitude": 52.295042,
    "Longitude": -1.540875,
    "Safety Score": 32.58106035
  },
  {
    "Latitude": 52.295042,
    "Longitude": -1.533494,
    "Safety Score": 31.42341993
  },
  {
    "Latitude": 52.295042,
    "Longitude": -1.526155,
    "Safety Score": 27.52080703
  },
  {
    "Latitude": 52.295042,
    "Longitude": -1.518688,
    "Safety Score": 28.01797662
  },
  {
    "Latitude": 52.295042,
    "Longitude": -1.511564,
    "Safety Score": 65
  },
  {
    "Latitude": 52.295042,
    "Longitude": -1.50414,
    "Safety Score": 65
  },
  {
    "Latitude": 52.295042,
    "Longitude": -1.497617,
    "Safety Score": 65
  },
  {
    "Latitude": 52.290777,
    "Longitude": -1.570058,
    "Safety Score": 13.32681842
  },
  {
    "Latitude": 52.290777,
    "Longitude": -1.562762,
    "Safety Score": 10.20351719
  },
  {
    "Latitude": 52.290777,
    "Longitude": -1.555381,
    "Safety Score": 30.5746395
  },
  {
    "Latitude": 52.290777,
    "Longitude": -1.548171,
    "Safety Score": 34.85210893
  },
  {
    "Latitude": 52.290777,
    "Longitude": -1.540875,
    "Safety Score": 31.06807024
  },
  {
    "Latitude": 52.290777,
    "Longitude": -1.533494,
    "Safety Score": 30.43200542
  },
  {
    "Latitude": 52.290777,
    "Longitude": -1.526155,
    "Safety Score": 27.52225172
  },
  {
    "Latitude": 52.290777,
    "Longitude": -1.518688,
    "Safety Score": 31.74882628
  },
  {
    "Latitude": 52.290777,
    "Longitude": -1.511564,
    "Safety Score": 40.05803734
  },
  {
    "Latitude": 52.290777,
    "Longitude": -1.50414,
    "Safety Score": 65
  },
  {
    "Latitude": 52.290777,
    "Longitude": -1.497617,
    "Safety Score": 65
  },
  {
    "Latitude": 52.286249,
    "Longitude": -1.570058,
    "Safety Score": 23.76975959
  },
  {
    "Latitude": 52.286249,
    "Longitude": -1.562762,
    "Safety Score": 17.73159001
  },
  {
    "Latitude": 52.286249,
    "Longitude": -1.555381,
    "Safety Score": 33.69278631
  },
  {
    "Latitude": 52.286249,
    "Longitude": -1.548171,
    "Safety Score": 37.61852167
  },
  {
    "Latitude": 52.286249,
    "Longitude": -1.540875,
    "Safety Score": 32.70540386
  },
  {
    "Latitude": 52.286249,
    "Longitude": -1.533494,
    "Safety Score": 27.93619032
  },
  {
    "Latitude": 52.286249,
    "Longitude": -1.526155,
    "Safety Score": 32.43056127
  },
  {
    "Latitude": 52.286249,
    "Longitude": -1.518688,
    "Safety Score": 31.69629961
  },
  {
    "Latitude": 52.286249,
    "Longitude": -1.511564,
    "Safety Score": 25.09083644
  },
  {
    "Latitude": 52.286249,
    "Longitude": -1.50414,
    "Safety Score": -3.004107479
  },
  {
    "Latitude": 52.286249,
    "Longitude": -1.497617,
    "Safety Score": 65
  },
  {
    "Latitude": 52.281418,
    "Longitude": -1.570058,
    "Safety Score": 13.50297059
  },
  {
    "Latitude": 52.281418,
    "Longitude": -1.562762,
    "Safety Score": 19.9088324
  },
  {
    "Latitude": 52.281418,
    "Longitude": -1.555381,
    "Safety Score": 34.57138548
  },
  {
    "Latitude": 52.281418,
    "Longitude": -1.548171,
    "Safety Score": 45.76309319
  },
  {
    "Latitude": 52.281418,
    "Longitude": -1.540875,
    "Safety Score": 34.51479961
  },
  {
    "Latitude": 52.281418,
    "Longitude": -1.533494,
    "Safety Score": 28.32540438
  },
  {
    "Latitude": 52.281418,
    "Longitude": -1.526155,
    "Safety Score": 30.68995448
  },
  {
    "Latitude": 52.281418,
    "Longitude": -1.518688,
    "Safety Score": 27.67714903
  },
  {
    "Latitude": 52.281418,
    "Longitude": -1.511564,
    "Safety Score": 26.2335389
  },
  {
    "Latitude": 52.281418,
    "Longitude": -1.50414,
    "Safety Score": 9.773879476
  },
  {
    "Latitude": 52.281418,
    "Longitude": -1.497617,
    "Safety Score": 24.93154202
  },
  {
    "Latitude": 52.277348,
    "Longitude": -1.570058,
    "Safety Score": 18.10315151
  },
  {
    "Latitude": 52.277348,
    "Longitude": -1.562762,
    "Safety Score": 30.2867819
  },
  {
    "Latitude": 52.277348,
    "Longitude": -1.555381,
    "Safety Score": 23.4290073
  },
  {
    "Latitude": 52.277348,
    "Longitude": -1.548171,
    "Safety Score": 47.54033525
  },
  {
    "Latitude": 52.277348,
    "Longitude": -1.540875,
    "Safety Score": 31.25690264
  },
  {
    "Latitude": 52.277348,
    "Longitude": -1.533494,
    "Safety Score": 30.8251025
  },
  {
    "Latitude": 52.277348,
    "Longitude": -1.526155,
    "Safety Score": 29.92839449
  },
  {
    "Latitude": 52.277348,
    "Longitude": -1.518688,
    "Safety Score": 27.37719636
  },
  {
    "Latitude": 52.277348,
    "Longitude": -1.511564,
    "Safety Score": 28.75739197
  },
  {
    "Latitude": 52.277348,
    "Longitude": -1.50414,
    "Safety Score": 22.57873891
  },
  {
    "Latitude": 52.277348,
    "Longitude": -1.497617,
    "Safety Score": 37.38607157
  },
  {
    "Latitude": 52.272517,
    "Longitude": -1.570058,
    "Safety Score": 19.64886759
  },
  {
    "Latitude": 52.272517,
    "Longitude": -1.562762,
    "Safety Score": 30.96850933
  },
  {
    "Latitude": 52.272517,
    "Longitude": -1.555381,
    "Safety Score": 28.10350113
  },
  {
    "Latitude": 52.272517,
    "Longitude": -1.548171,
    "Safety Score": 26.9997414
  },
  {
    "Latitude": 52.272517,
    "Longitude": -1.540875,
    "Safety Score": 14.37074129
  },
  {
    "Latitude": 52.272517,
    "Longitude": -1.533494,
    "Safety Score": 35.73451332
  },
  {
    "Latitude": 52.272517,
    "Longitude": -1.526155,
    "Safety Score": 30.63005686
  },
  {
    "Latitude": 52.272517,
    "Longitude": -1.518688,
    "Safety Score": 22.90974679
  },
  {
    "Latitude": 52.272517,
    "Longitude": -1.511564,
    "Safety Score": 24.1162541
  },
  {
    "Latitude": 52.272517,
    "Longitude": -1.50414,
    "Safety Score": -15
  },
  {
    "Latitude": 52.272517,
    "Longitude": -1.497617,
    "Safety Score": 18.35726567
  },
  {
    "Latitude": 52.268551,
    "Longitude": -1.570058,
    "Safety Score": 65
  },
  {
    "Latitude": 52.268551,
    "Longitude": -1.562762,
    "Safety Score": 65
  },
  {
    "Latitude": 52.268551,
    "Longitude": -1.555381,
    "Safety Score": 26.30451029
  },
  {
    "Latitude": 52.268551,
    "Longitude": -1.548171,
    "Safety Score": 13.19688225
  },
  {
    "Latitude": 52.268551,
    "Longitude": -1.540875,
    "Safety Score": 37.36757089
  },
  {
    "Latitude": 52.268551,
    "Longitude": -1.533494,
    "Safety Score": 34.98260955
  },
  {
    "Latitude": 52.268551,
    "Longitude": -1.526155,
    "Safety Score": 34.50297522
  },
  {
    "Latitude": 52.268551,
    "Longitude": -1.518688,
    "Safety Score": 24.77801237
  },
  {
    "Latitude": 52.268551,
    "Longitude": -1.511564,
    "Safety Score": 65
  },
  {
    "Latitude": 52.268551,
    "Longitude": -1.50414,
    "Safety Score": 65
  },
  {
    "Latitude": 52.268551,
    "Longitude": -1.497617,
    "Safety Score": 65
  },
  {
    "Latitude": 52.295042,
    "Longitude": -1.570058,
    "Safety Score": 15.94410909
  },
  {
    "Latitude": 52.295042,
    "Longitude": -1.562762,
    "Safety Score": 16.22163438
  },
  {
    "Latitude": 52.295042,
    "Longitude": -1.555381,
    "Safety Score": 34.94333301
  },
  {
    "Latitude": 52.295042,
    "Longitude": -1.548171,
    "Safety Score": 40.1465928
  },
  {
    "Latitude": 52.295042,
    "Longitude": -1.540875,
    "Safety Score": 28.81002527
  },
  {
    "Latitude": 52.295042,
    "Longitude": -1.533494,
    "Safety Score": 29.21267852
  },
  {
    "Latitude": 52.295042,
    "Longitude": -1.526155,
    "Safety Score": 26.63726119
  },
  {
    "Latitude": 52.295042,
    "Longitude": -1.518688,
    "Safety Score": 80.04672897
  },
  {
    "Latitude": 52.295042,
    "Longitude": -1.511564,
    "Safety Score": 65
  },
  {
    "Latitude": 52.295042,
    "Longitude": -1.50414,
    "Safety Score": 65
  },
  {
    "Latitude": 52.295042,
    "Longitude": -1.497617,
    "Safety Score": 65
  },
  {
    "Latitude": 52.290777,
    "Longitude": -1.570058,
    "Safety Score": 13.41289917
  },
  {
    "Latitude": 52.290777,
    "Longitude": -1.562762,
    "Safety Score": 14.7279419
  },
  {
    "Latitude": 52.290777,
    "Longitude": -1.555381,
    "Safety Score": 34.99202513
  },
  {
    "Latitude": 52.290777,
    "Longitude": -1.548171,
    "Safety Score": 33.39640571
  },
  {
    "Latitude": 52.290777,
    "Longitude": -1.540875,
    "Safety Score": 28.35393767
  },
  {
    "Latitude": 52.290777,
    "Longitude": -1.533494,
    "Safety Score": 28.02567385
  },
  {
    "Latitude": 52.290777,
    "Longitude": -1.526155,
    "Safety Score": 28.9029901
  },
  {
    "Latitude": 52.290777,
    "Longitude": -1.518688,
    "Safety Score": 33.14694741
  },
  {
    "Latitude": 52.290777,
    "Longitude": -1.511564,
    "Safety Score": 46.50019381
  },
  {
    "Latitude": 52.290777,
    "Longitude": -1.50414,
    "Safety Score": 65
  },
  {
    "Latitude": 52.290777,
    "Longitude": -1.497617,
    "Safety Score": 65
  },
  {
    "Latitude": 52.286249,
    "Longitude": -1.570058,
    "Safety Score": 23.9217256
  },
  {
    "Latitude": 52.286249,
    "Longitude": -1.562762,
    "Safety Score": 21.90186945
  },
  {
    "Latitude": 52.286249,
    "Longitude": -1.555381,
    "Safety Score": 31.97755084
  },
  {
    "Latitude": 52.286249,
    "Longitude": -1.548171,
    "Safety Score": 38.37916665
  },
  {
    "Latitude": 52.286249,
    "Longitude": -1.540875,
    "Safety Score": 33.02564595
  },
  {
    "Latitude": 52.286249,
    "Longitude": -1.533494,
    "Safety Score": 28.31057288
  },
  {
    "Latitude": 52.286249,
    "Longitude": -1.526155,
    "Safety Score": 32.93791701
  },
  {
    "Latitude": 52.286249,
    "Longitude": -1.518688,
    "Safety Score": 35.49071046
  },
  {
    "Latitude": 52.286249,
    "Longitude": -1.511564,
    "Safety Score": 38.0295839
  },
  {
    "Latitude": 52.286249,
    "Longitude": -1.50414,
    "Safety Score": 16.97793484
  },
  {
    "Latitude": 52.286249,
    "Longitude": -1.497617,
    "Safety Score": 65
  },
  {
    "Latitude": 52.281418,
    "Longitude": -1.570058,
    "Safety Score": 6.773048534
  },
  {
    "Latitude": 52.281418,
    "Longitude": -1.562762,
    "Safety Score": 16.05071839
  },
  {
    "Latitude": 52.281418,
    "Longitude": -1.555381,
    "Safety Score": 39.25352613
  },
  {
    "Latitude": 52.281418,
    "Longitude": -1.548171,
    "Safety Score": 47.66235699
  },
  {
    "Latitude": 52.281418,
    "Longitude": -1.540875,
    "Safety Score": 33.84189541
  },
  {
    "Latitude": 52.281418,
    "Longitude": -1.533494,
    "Safety Score": 25.46501118
  },
  {
    "Latitude": 52.281418,
    "Longitude": -1.526155,
    "Safety Score": 31.62706178
  },
  {
    "Latitude": 52.281418,
    "Longitude": -1.518688,
    "Safety Score": 29.29833346
  },
  {
    "Latitude": 52.281418,
    "Longitude": -1.511564,
    "Safety Score": 30.38599087
  },
  {
    "Latitude": 52.281418,
    "Longitude": -1.50414,
    "Safety Score": 11.09540227
  },
  {
    "Latitude": 52.281418,
    "Longitude": -1.497617,
    "Safety Score": 14.97931391
  },
  {
    "Latitude": 52.277348,
    "Longitude": -1.570058,
    "Safety Score": 23.81025439
  },
  {
    "Latitude": 52.277348,
    "Longitude": -1.562762,
    "Safety Score": 20.38582018
  },
  {
    "Latitude": 52.277348,
    "Longitude": -1.555381,
    "Safety Score": 15.28712722
  },
  {
    "Latitude": 52.277348,
    "Longitude": -1.548171,
    "Safety Score": 50.84755675
  },
  {
    "Latitude": 52.277348,
    "Longitude": -1.540875,
    "Safety Score": 28.86889235
  },
  {
    "Latitude": 52.277348,
    "Longitude": -1.533494,
    "Safety Score": 24.00056906
  },
  {
    "Latitude": 52.277348,
    "Longitude": -1.526155,
    "Safety Score": 25.6748363
  },
  {
    "Latitude": 52.277348,
    "Longitude": -1.518688,
    "Safety Score": 35.59638147
  },
  {
    "Latitude": 52.277348,
    "Longitude": -1.511564,
    "Safety Score": 35.66819577
  },
  {
    "Latitude": 52.277348,
    "Longitude": -1.50414,
    "Safety Score": 10.92828823
  },
  {
    "Latitude": 52.277348,
    "Longitude": -1.497617,
    "Safety Score": 24.37012823
  },
  {
    "Latitude": 52.272517,
    "Longitude": -1.570058,
    "Safety Score": 21.76828133
  },
  {
    "Latitude": 52.272517,
    "Longitude": -1.562762,
    "Safety Score": 20.65989637
  },
  {
    "Latitude": 52.272517,
    "Longitude": -1.555381,
    "Safety Score": 28.75559623
  },
  {
    "Latitude": 52.272517,
    "Longitude": -1.548171,
    "Safety Score": 31.6279627
  },
  {
    "Latitude": 52.272517,
    "Longitude": -1.540875,
    "Safety Score": 3.17538848
  },
  {
    "Latitude": 52.272517,
    "Longitude": -1.533494,
    "Safety Score": 25.80024988
  },
  {
    "Latitude": 52.272517,
    "Longitude": -1.526155,
    "Safety Score": 19.88735896
  },
  {
    "Latitude": 52.272517,
    "Longitude": -1.518688,
    "Safety Score": 18.69285099
  },
  {
    "Latitude": 52.272517,
    "Longitude": -1.511564,
    "Safety Score": 22.20500309
  },
  {
    "Latitude": 52.272517,
    "Longitude": -1.50414,
    "Safety Score": 10.57793484
  },
  {
    "Latitude": 52.272517,
    "Longitude": -1.497617,
    "Safety Score": 31.23967411
  },
  {
    "Latitude": 52.268551,
    "Longitude": -1.570058,
    "Safety Score": 65
  },
  {
    "Latitude": 52.268551,
    "Longitude": -1.562762,
    "Safety Score": 15.60322933
  },
  {
    "Latitude": 52.268551,
    "Longitude": -1.555381,
    "Safety Score": 27.4925446
  },
  {
    "Latitude": 52.268551,
    "Longitude": -1.548171,
    "Safety Score": 4.559916725
  },
  {
    "Latitude": 52.268551,
    "Longitude": -1.540875,
    "Safety Score": 22.43993074
  },
  {
    "Latitude": 52.268551,
    "Longitude": -1.533494,
    "Safety Score": 26.8388411
  },
  {
    "Latitude": 52.268551,
    "Longitude": -1.526155,
    "Safety Score": 23.17848153
  },
  {
    "Latitude": 52.268551,
    "Longitude": -1.518688,
    "Safety Score": 16.51570876
  },
  {
    "Latitude": 52.268551,
    "Longitude": -1.511564,
    "Safety Score": 32.99172556
  },
  {
    "Latitude": 52.268551,
    "Longitude": -1.50414,
    "Safety Score": 65
  },
  {
    "Latitude": 52.268551,
    "Longitude": -1.497617,
    "Safety Score": 65
  },
  {
    "Latitude": 52.295042,
    "Longitude": -1.570058,
    "Safety Score": 5.765907519
  },
  {
    "Latitude": 52.295042,
    "Longitude": -1.562762,
    "Safety Score": 0.384046346
  },
  {
    "Latitude": 52.295042,
    "Longitude": -1.555381,
    "Safety Score": 29.95026404
  },
  {
    "Latitude": 52.295042,
    "Longitude": -1.548171,
    "Safety Score": 48.82309759
  },
  {
    "Latitude": 52.295042,
    "Longitude": -1.540875,
    "Safety Score": 30.80111487
  },
  {
    "Latitude": 52.295042,
    "Longitude": -1.533494,
    "Safety Score": 32.41165549
  },
  {
    "Latitude": 52.295042,
    "Longitude": -1.526155,
    "Safety Score": 30.41587067
  },
  {
    "Latitude": 52.295042,
    "Longitude": -1.518688,
    "Safety Score": 80.04672897
  },
  {
    "Latitude": 52.295042,
    "Longitude": -1.511564,
    "Safety Score": 65
  },
  {
    "Latitude": 52.295042,
    "Longitude": -1.50414,
    "Safety Score": 65
  },
  {
    "Latitude": 52.295042,
    "Longitude": -1.497617,
    "Safety Score": 65
  },
  {
    "Latitude": 52.290777,
    "Longitude": -1.570058,
    "Safety Score": 8.871849092
  },
  {
    "Latitude": 52.290777,
    "Longitude": -1.562762,
    "Safety Score": 9.00682079
  },
  {
    "Latitude": 52.290777,
    "Longitude": -1.555381,
    "Safety Score": 31.78362591
  },
  {
    "Latitude": 52.290777,
    "Longitude": -1.548171,
    "Safety Score": 40.97818704
  },
  {
    "Latitude": 52.290777,
    "Longitude": -1.540875,
    "Safety Score": 32.27087589
  },
  {
    "Latitude": 52.290777,
    "Longitude": -1.533494,
    "Safety Score": 31.50441526
  },
  {
    "Latitude": 52.290777,
    "Longitude": -1.526155,
    "Safety Score": 33.07678442
  },
  {
    "Latitude": 52.290777,
    "Longitude": -1.518688,
    "Safety Score": 44.52255838
  },
  {
    "Latitude": 52.290777,
    "Longitude": -1.511564,
    "Safety Score": 39.2710633
  },
  {
    "Latitude": 52.290777,
    "Longitude": -1.50414,
    "Safety Score": 65
  },
  {
    "Latitude": 52.290777,
    "Longitude": -1.497617,
    "Safety Score": 65
  },
  {
    "Latitude": 52.286249,
    "Longitude": -1.570058,
    "Safety Score": 24.3754188
  },
  {
    "Latitude": 52.286249,
    "Longitude": -1.562762,
    "Safety Score": 21.29885933
  },
  {
    "Latitude": 52.286249,
    "Longitude": -1.555381,
    "Safety Score": 31.80973373
  },
  {
    "Latitude": 52.286249,
    "Longitude": -1.548171,
    "Safety Score": 46.80914523
  },
  {
    "Latitude": 52.286249,
    "Longitude": -1.540875,
    "Safety Score": 37.44985011
  },
  {
    "Latitude": 52.286249,
    "Longitude": -1.533494,
    "Safety Score": 28.86069275
  },
  {
    "Latitude": 52.286249,
    "Longitude": -1.526155,
    "Safety Score": 31.46203807
  },
  {
    "Latitude": 52.286249,
    "Longitude": -1.518688,
    "Safety Score": 31.48439429
  },
  {
    "Latitude": 52.286249,
    "Longitude": -1.511564,
    "Safety Score": 26.21694335
  },
  {
    "Latitude": 52.286249,
    "Longitude": -1.50414,
    "Safety Score": 65
  },
  {
    "Latitude": 52.286249,
    "Longitude": -1.497617,
    "Safety Score": 65
  },
  {
    "Latitude": 52.281418,
    "Longitude": -1.570058,
    "Safety Score": 34.9294657
  },
  {
    "Latitude": 52.281418,
    "Longitude": -1.562762,
    "Safety Score": 10.10257554
  },
  {
    "Latitude": 52.281418,
    "Longitude": -1.555381,
    "Safety Score": 31.05208958
  },
  {
    "Latitude": 52.281418,
    "Longitude": -1.548171,
    "Safety Score": 45.28989985
  },
  {
    "Latitude": 52.281418,
    "Longitude": -1.540875,
    "Safety Score": 37.99861006
  },
  {
    "Latitude": 52.281418,
    "Longitude": -1.533494,
    "Safety Score": 27.26867104
  },
  {
    "Latitude": 52.281418,
    "Longitude": -1.526155,
    "Safety Score": 29.05577948
  },
  {
    "Latitude": 52.281418,
    "Longitude": -1.518688,
    "Safety Score": 28.73382539
  },
  {
    "Latitude": 52.281418,
    "Longitude": -1.511564,
    "Safety Score": 31.07960031
  },
  {
    "Latitude": 52.281418,
    "Longitude": -1.50414,
    "Safety Score": 13.05467941
  },
  {
    "Latitude": 52.281418,
    "Longitude": -1.497617,
    "Safety Score": 18.97601834
  },
  {
    "Latitude": 52.277348,
    "Longitude": -1.570058,
    "Safety Score": 15.62881326
  },
  {
    "Latitude": 52.277348,
    "Longitude": -1.562762,
    "Safety Score": 10.11112679
  },
  {
    "Latitude": 52.277348,
    "Longitude": -1.555381,
    "Safety Score": 14.61967492
  },
  {
    "Latitude": 52.277348,
    "Longitude": -1.548171,
    "Safety Score": 45.8124463
  },
  {
    "Latitude": 52.277348,
    "Longitude": -1.540875,
    "Safety Score": 31.96050079
  },
  {
    "Latitude": 52.277348,
    "Longitude": -1.533494,
    "Safety Score": 28.21372213
  },
  {
    "Latitude": 52.277348,
    "Longitude": -1.526155,
    "Safety Score": 28.04284126
  },
  {
    "Latitude": 52.277348,
    "Longitude": -1.518688,
    "Safety Score": 28.06912028
  },
  {
    "Latitude": 52.277348,
    "Longitude": -1.511564,
    "Safety Score": 32.4473134
  },
  {
    "Latitude": 52.277348,
    "Longitude": -1.50414,
    "Safety Score": 10.80426732
  },
  {
    "Latitude": 52.277348,
    "Longitude": -1.497617,
    "Safety Score": 28.20104887
  },
  {
    "Latitude": 52.272517,
    "Longitude": -1.570058,
    "Safety Score": 15.62881326
  },
  {
    "Latitude": 52.272517,
    "Longitude": -1.562762,
    "Safety Score": 17.18736803
  },
  {
    "Latitude": 52.272517,
    "Longitude": -1.555381,
    "Safety Score": 24.16372409
  },
  {
    "Latitude": 52.272517,
    "Longitude": -1.548171,
    "Safety Score": 38.03149584
  },
  {
    "Latitude": 52.272517,
    "Longitude": -1.540875,
    "Safety Score": 31.00266107
  },
  {
    "Latitude": 52.272517,
    "Longitude": -1.533494,
    "Safety Score": 30.40779961
  },
  {
    "Latitude": 52.272517,
    "Longitude": -1.526155,
    "Safety Score": 23.08714292
  },
  {
    "Latitude": 52.272517,
    "Longitude": -1.518688,
    "Safety Score": 21.97779272
  },
  {
    "Latitude": 52.272517,
    "Longitude": -1.511564,
    "Safety Score": 19.88733266
  },
  {
    "Latitude": 52.272517,
    "Longitude": -1.50414,
    "Safety Score": 8.283959325
  },
  {
    "Latitude": 52.272517,
    "Longitude": -1.497617,
    "Safety Score": 24.43269079
  },
  {
    "Latitude": 52.268551,
    "Longitude": -1.570058,
    "Safety Score": 65
  },
  {
    "Latitude": 52.268551,
    "Longitude": -1.562762,
    "Safety Score": 7.051344819
  },
  {
    "Latitude": 52.268551,
    "Longitude": -1.555381,
    "Safety Score": 23.29749943
  },
  {
    "Latitude": 52.268551,
    "Longitude": -1.548171,
    "Safety Score": 14.29568625
  },
  {
    "Latitude": 52.268551,
    "Longitude": -1.540875,
    "Safety Score": 40.61608996
  },
  {
    "Latitude": 52.268551,
    "Longitude": -1.533494,
    "Safety Score": 29.2047258
  },
  {
    "Latitude": 52.268551,
    "Longitude": -1.526155,
    "Safety Score": 27.6894339
  },
  {
    "Latitude": 52.268551,
    "Longitude": -1.518688,
    "Safety Score": 22.66835655
  },
  {
    "Latitude": 52.268551,
    "Longitude": -1.511564,
    "Safety Score": -15
  },
  {
    "Latitude": 52.268551,
    "Longitude": -1.50414,
    "Safety Score": 65
  },
  {
    "Latitude": 52.268551,
    "Longitude": -1.497617,
    "Safety Score": 65
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