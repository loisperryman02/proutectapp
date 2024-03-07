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

// let updated_safety_scores = 
// [
//   {
//     "Longitude": -1.58454,
//     "Latitude": 52.29014,
//     "Safety Score": "66.57050339"
//   },
//   {
//     "Longitude": -1.5845361,
//     "Latitude": 52.2901428,
//     "Safety Score": "59.45245805"
//   },
//   {
//     "Longitude": -1.58442,
//     "Latitude": 52.29019,
//     "Safety Score": "66.57050339"
//   },
//   {
//     "Longitude": -1.58405,
//     "Latitude": 52.29035,
//     "Safety Score": "66.57050339"
//   },
//   {
//     "Longitude": -1.58365,
//     "Latitude": 52.29047,
//     "Safety Score": "66.57050339"
//   },
//   {
//     "Longitude": -1.58311,
//     "Latitude": 52.29086,
//     "Safety Score": "66.57050339"
//   },
//   {
//     "Longitude": -1.58309,
//     "Latitude": 52.29081,
//     "Safety Score": "66.57050339"
//   },
//   {
//     "Longitude": -1.5830862,
//     "Latitude": 52.290809,
//     "Safety Score": "52.21666176"
//   },
//   {
//     "Longitude": -1.5830234,
//     "Latitude": 52.2909716,
//     "Safety Score": "52.21666176"
//   },
//   {
//     "Longitude": -1.58302,
//     "Latitude": 52.29097,
//     "Safety Score": "66.57050339"
//   },
//   {
//     "Longitude": -1.58299,
//     "Latitude": 52.29071,
//     "Safety Score": "66.57050339"
//   },
//   {
//     "Longitude": -1.5829859,
//     "Latitude": 52.2907119,
//     "Safety Score": "52.21666176"
//   },
//   {
//     "Longitude": -1.58286,
//     "Latitude": 52.29094,
//     "Safety Score": "66.57050339"
//   },
//   {
//     "Longitude": -1.58276,
//     "Latitude": 52.29093,
//     "Safety Score": "71.48071828"
//   },
//   {
//     "Longitude": -1.58259,
//     "Latitude": 52.29094,
//     "Safety Score": "61.66028849"
//   },
//   {
//     "Longitude": -1.58167,
//     "Latitude": 52.29095,
//     "Safety Score": "66.57050339"
//   },
//   {
//     "Longitude": -1.58136,
//     "Latitude": 52.29092,
//     "Safety Score": "66.57050339"
//   },
//   {
//     "Longitude": -1.58082,
//     "Latitude": 52.29081,
//     "Safety Score": "66.57050339"
//   },
//   {
//     "Longitude": -1.58028,
//     "Latitude": 52.29064,
//     "Safety Score": "66.57050339"
//   },
//   {
//     "Longitude": -1.58019,
//     "Latitude": 52.29057,
//     "Safety Score": "71.48071828"
//   },
//   {
//     "Longitude": -1.58014,
//     "Latitude": 52.29051,
//     "Safety Score": "66.57050339"
//   },
//   {
//     "Longitude": -1.58006,
//     "Latitude": 52.29026,
//     "Safety Score": "66.57050339"
//   },
//   {
//     "Longitude": -1.57997,
//     "Latitude": 52.29015,
//     "Safety Score": "66.57050339"
//   },
//   {
//     "Longitude": -1.57979,
//     "Latitude": 52.29004,
//     "Safety Score": "66.57050339"
//   },
//   {
//     "Longitude": -1.57966,
//     "Latitude": 52.28998,
//     "Safety Score": "66.57050339"
//   },
//   {
//     "Longitude": -1.579364,
//     "Latitude": 52.2899038,
//     "Safety Score": "52.21666176"
//   },
//   {
//     "Longitude": -1.57936,
//     "Latitude": 52.2899,
//     "Safety Score": "66.57050339"
//   },
//   {
//     "Longitude": -1.5792,
//     "Latitude": 52.28991,
//     "Safety Score": "66.57050339"
//   },
//   {
//     "Longitude": -1.57908,
//     "Latitude": 52.28997,
//     "Safety Score": "66.57050339"
//   },
//   {
//     "Longitude": -1.57894,
//     "Latitude": 52.29001,
//     "Safety Score": "66.57050339"
//   },
//   {
//     "Longitude": -1.57887,
//     "Latitude": 52.29001,
//     "Safety Score": "61.66028849"
//   },
//   {
//     "Longitude": -1.5785805,
//     "Latitude": 52.2899654,
//     "Safety Score": "52.21666176"
//   },
//   {
//     "Longitude": -1.57858,
//     "Latitude": 52.28997,
//     "Safety Score": "66.57050339"
//   },
//   {
//     "Longitude": -1.5783038,
//     "Latitude": 52.291387,
//     "Safety Score": "52.21666176"
//   },
//   {
//     "Longitude": -1.5783,
//     "Latitude": 52.29139,
//     "Safety Score": "66.57050339"
//   },
//   {
//     "Longitude": -1.57827,
//     "Latitude": 52.29054,
//     "Safety Score": "61.66028849"
//   },
//   {
//     "Longitude": -1.5782611,
//     "Latitude": 52.2914035,
//     "Safety Score": "52.21666176"
//   },
//   {
//     "Longitude": -1.57826,
//     "Latitude": 52.2914,
//     "Safety Score": "71.48071828"
//   },
//   {
//     "Longitude": -1.57826,
//     "Latitude": 52.29141,
//     "Safety Score": "61.66028849"
//   },
//   {
//     "Longitude": -1.57822,
//     "Latitude": 52.29134,
//     "Safety Score": "66.57050339"
//   },
//   {
//     "Longitude": -1.57815,
//     "Latitude": 52.29078,
//     "Safety Score": "71.48071828"
//   },
//   {
//     "Longitude": -1.57814,
//     "Latitude": 52.2913,
//     "Safety Score": "66.57050339"
//   },
//   {
//     "Longitude": -1.57803,
//     "Latitude": 52.29125,
//     "Safety Score": "71.48071828"
//   },
//   {
//     "Longitude": -1.57801,
//     "Latitude": 52.29134,
//     "Safety Score": "66.57050339"
//   },
//   {
//     "Longitude": -1.57799,
//     "Latitude": 52.29134,
//     "Safety Score": "61.66028849"
//   },
//   {
//     "Longitude": -1.57794,
//     "Latitude": 52.29121,
//     "Safety Score": "61.66028849"
//   },
//   {
//     "Longitude": -1.57793,
//     "Latitude": 52.29122,
//     "Safety Score": "61.66028849"
//   },
//   {
//     "Longitude": -1.57789,
//     "Latitude": 52.2913,
//     "Safety Score": "66.57050339"
//   },
//   {
//     "Longitude": -1.5778892,
//     "Latitude": 52.2913023,
//     "Safety Score": "52.21666176"
//   },
//   {
//     "Longitude": -1.57778,
//     "Latitude": 52.29117,
//     "Safety Score": "71.48071828"
//   },
//   {
//     "Longitude": -1.57764,
//     "Latitude": 52.29116,
//     "Safety Score": "61.66028849"
//   },
//   {
//     "Longitude": -1.57753,
//     "Latitude": 52.29114,
//     "Safety Score": "71.48071828"
//   },
//   {
//     "Longitude": -1.57742,
//     "Latitude": 52.29111,
//     "Safety Score": "61.66028849"
//   },
//   {
//     "Longitude": -1.57684,
//     "Latitude": 52.29094,
//     "Safety Score": "66.57050339"
//   },
//   {
//     "Longitude": -1.57659,
//     "Latitude": 52.29084,
//     "Safety Score": "61.66028849"
//   },
//   {
//     "Longitude": -1.57535,
//     "Latitude": 52.29034,
//     "Safety Score": "61.66028849"
//   },
//   {
//     "Longitude": -1.57507,
//     "Latitude": 52.29023,
//     "Safety Score": "66.57050339"
//   },
//   {
//     "Longitude": -1.57412,
//     "Latitude": 52.28994,
//     "Safety Score": "61.66028849"
//   },
//   {
//     "Longitude": -1.57311,
//     "Latitude": 52.28964,
//     "Safety Score": "71.48071828"
//   },
//   {
//     "Longitude": -1.5725,
//     "Latitude": 52.28947,
//     "Safety Score": "61.66028849"
//   },
//   {
//     "Longitude": -1.57167,
//     "Latitude": 52.28924,
//     "Safety Score": "71.48071828"
//   },
//   {
//     "Longitude": -1.57006,
//     "Latitude": 52.2888,
//     "Safety Score": "61.66028849"
//   },
//   {
//     "Longitude": -1.570058,
//     "Latitude": 52.286249,
//     "Safety Score": "66.68825434"
//   },
//   {
//     "Longitude": -1.56897,
//     "Latitude": 52.2885,
//     "Safety Score": "51.714761110000005"
//   },
//   {
//     "Longitude": -1.56838,
//     "Latitude": 52.28835,
//     "Safety Score": "61.66028849"
//   },
//   {
//     "Longitude": -1.56762,
//     "Latitude": 52.28815,
//     "Safety Score": "61.66028849"
//   },
//   {
//     "Longitude": -1.56727,
//     "Latitude": 52.28806,
//     "Safety Score": "71.48071828"
//   },
//   {
//     "Longitude": -1.5668,
//     "Latitude": 52.28796,
//     "Safety Score": "44.077829413333326"
//   },
//   {
//     "Longitude": -1.5667,
//     "Latitude": 52.28793,
//     "Safety Score": "53.89825920333334"
//   },
//   {
//     "Longitude": -1.56659,
//     "Latitude": 52.28788,
//     "Safety Score": "44.077829413333326"
//   },
//   {
//     "Longitude": -1.56656,
//     "Latitude": 52.28788,
//     "Safety Score": "53.89825920333334"
//   },
//   {
//     "Longitude": -1.56643,
//     "Latitude": 52.28788,
//     "Safety Score": "44.077829413333326"
//   },
//   {
//     "Longitude": -1.5663,
//     "Latitude": 52.28787,
//     "Safety Score": "51.83937311"
//   },
//   {
//     "Longitude": -1.56596,
//     "Latitude": 52.28782,
//     "Safety Score": "40.19314571"
//   },
//   {
//     "Longitude": -1.56568,
//     "Latitude": 52.28776,
//     "Safety Score": "50.0135755"
//   },
//   {
//     "Longitude": -1.5655,
//     "Latitude": 52.28772,
//     "Safety Score": "40.19314571"
//   },
//   {
//     "Longitude": -1.56534,
//     "Latitude": 52.28766,
//     "Safety Score": "45.10336060666666"
//   },
//   {
//     "Longitude": -1.56522,
//     "Latitude": 52.2876,
//     "Safety Score": "45.10336060666666"
//   },
//   {
//     "Longitude": -1.56515,
//     "Latitude": 52.28753,
//     "Safety Score": "71.48071828"
//   },
//   {
//     "Longitude": -1.56509,
//     "Latitude": 52.28748,
//     "Safety Score": "61.66028849"
//   },
//   {
//     "Longitude": -1.56501,
//     "Latitude": 52.28743,
//     "Safety Score": "66.57050339"
//   },
//   {
//     "Longitude": -1.56499,
//     "Latitude": 52.28744,
//     "Safety Score": "61.66028849"
//   },
//   {
//     "Longitude": -1.56498,
//     "Latitude": 52.28742,
//     "Safety Score": "61.66028849"
//   },
//   {
//     "Longitude": -1.56498,
//     "Latitude": 52.28746,
//     "Safety Score": "61.66028849"
//   },
//   {
//     "Longitude": -1.56476,
//     "Latitude": 52.28752,
//     "Safety Score": "61.66028849"
//   },
//   {
//     "Longitude": -1.56476,
//     "Latitude": 52.28757,
//     "Safety Score": "61.66028849"
//   },
//   {
//     "Longitude": -1.56472,
//     "Latitude": 52.28731,
//     "Safety Score": "71.48071828"
//   },
//   {
//     "Longitude": -1.56445,
//     "Latitude": 52.28726,
//     "Safety Score": "71.48071828"
//   },
//   {
//     "Longitude": -1.56437,
//     "Latitude": 52.28766,
//     "Safety Score": "61.66028849"
//   },
//   {
//     "Longitude": -1.56431,
//     "Latitude": 52.28574,
//     "Safety Score": "71.17456579"
//   },
//   {
//     "Longitude": -1.56422,
//     "Latitude": 52.28592,
//     "Safety Score": "71.17456579"
//   },
//   {
//     "Longitude": -1.56413,
//     "Latitude": 52.28726,
//     "Safety Score": "71.48071828"
//   },
//   {
//     "Longitude": -1.5641,
//     "Latitude": 52.28775,
//     "Safety Score": "61.66028849"
//   },
//   {
//     "Longitude": -1.56407,
//     "Latitude": 52.28619,
//     "Safety Score": "71.17456579"
//   },
//   {
//     "Longitude": -1.56386,
//     "Latitude": 52.28648,
//     "Safety Score": "71.17456579"
//   },
//   {
//     "Longitude": -1.56382,
//     "Latitude": 52.28727,
//     "Safety Score": "71.48071828"
//   },
//   {
//     "Longitude": -1.56382,
//     "Latitude": 52.28784,
//     "Safety Score": "61.66028849"
//   },
//   {
//     "Longitude": -1.56379,
//     "Latitude": 52.28656,
//     "Safety Score": "71.17456579"
//   },
//   {
//     "Longitude": -1.56333,
//     "Latitude": 52.28726,
//     "Safety Score": "71.48071828"
//   },
//   {
//     "Longitude": -1.56332,
//     "Latitude": 52.28552,
//     "Safety Score": "71.17456579"
//   },
//   {
//     "Longitude": -1.56326,
//     "Latitude": 52.28549,
//     "Safety Score": "71.17456579"
//   },
//   {
//     "Longitude": -1.56319,
//     "Latitude": 52.28644,
//     "Safety Score": "71.17456579"
//   },
//   {
//     "Longitude": -1.56318,
//     "Latitude": 52.2854,
//     "Safety Score": "71.17456579"
//   },
//   {
//     "Longitude": -1.56298,
//     "Latitude": 52.28821,
//     "Safety Score": "39.24869487"
//   },
//   {
//     "Longitude": -1.56292,
//     "Latitude": 52.28721,
//     "Safety Score": "71.48071828"
//   },
//   {
//     "Longitude": -1.56291,
//     "Latitude": 52.2851,
//     "Safety Score": "71.17456579"
//   },
//   {
//     "Longitude": -1.56258,
//     "Latitude": 52.28525,
//     "Safety Score": "71.17456579"
//   },
//   {
//     "Longitude": -1.56206,
//     "Latitude": 52.28705,
//     "Safety Score": "71.48071828"
//   },
//   {
//     "Longitude": -1.56201,
//     "Latitude": 52.28866,
//     "Safety Score": "42.30612729333333"
//   },
//   {
//     "Longitude": -1.56199,
//     "Latitude": 52.2856,
//     "Safety Score": "71.17456579"
//   },
//   {
//     "Longitude": -1.56179,
//     "Latitude": 52.28874,
//     "Safety Score": "45.21836388"
//   },
//   {
//     "Longitude": -1.56141,
//     "Latitude": 52.28885,
//     "Safety Score": "61.66028849"
//   },
//   {
//     "Longitude": -1.56127,
//     "Latitude": 52.28683,
//     "Safety Score": "71.48071828"
//   },
//   {
//     "Longitude": -1.56105,
//     "Latitude": 52.28675,
//     "Safety Score": "71.17456579"
//   },
//   {
//     "Longitude": -1.56102,
//     "Latitude": 52.28634,
//     "Safety Score": "71.17456579"
//   },
//   {
//     "Longitude": -1.56092,
//     "Latitude": 52.28669,
//     "Safety Score": "71.48071828"
//   },
//   {
//     "Longitude": -1.56086,
//     "Latitude": 52.28683,
//     "Safety Score": "71.17456579"
//   },
//   {
//     "Longitude": -1.56084,
//     "Latitude": 52.28665,
//     "Safety Score": "71.17456579"
//   },
//   {
//     "Longitude": -1.56082,
//     "Latitude": 52.28662,
//     "Safety Score": "71.48071828"
//   },
//   {
//     "Longitude": -1.56078,
//     "Latitude": 52.28681,
//     "Safety Score": "71.17456579"
//   },
//   {
//     "Longitude": -1.56076,
//     "Latitude": 52.28646,
//     "Safety Score": "71.17456579"
//   },
//   {
//     "Longitude": -1.56075,
//     "Latitude": 52.28658,
//     "Safety Score": "71.17456579"
//   },
//   {
//     "Longitude": -1.56066,
//     "Latitude": 52.28653,
//     "Safety Score": "71.48071828"
//   },
//   {
//     "Longitude": -1.56064,
//     "Latitude": 52.28655,
//     "Safety Score": "71.17456579"
//   },
//   {
//     "Longitude": -1.56061,
//     "Latitude": 52.28658,
//     "Safety Score": "71.17456579"
//   },
//   {
//     "Longitude": -1.56055,
//     "Latitude": 52.28646,
//     "Safety Score": "71.17456579"
//   },
//   {
//     "Longitude": -1.56041,
//     "Latitude": 52.28639,
//     "Safety Score": "71.48071828"
//   },
//   {
//     "Longitude": -1.56032,
//     "Latitude": 52.28636,
//     "Safety Score": "71.17456579"
//   },
//   {
//     "Longitude": -1.56024,
//     "Latitude": 52.28633,
//     "Safety Score": "71.48071828"
//   },
//   {
//     "Longitude": -1.56011,
//     "Latitude": 52.2863,
//     "Safety Score": "71.17456579"
//   },
//   {
//     "Longitude": -1.56007,
//     "Latitude": 52.28628,
//     "Safety Score": "71.48071828"
//   },
//   {
//     "Longitude": -1.56007,
//     "Latitude": 52.28924,
//     "Safety Score": "61.66028849"
//   },
//   {
//     "Longitude": -1.55979,
//     "Latitude": 52.28617,
//     "Safety Score": "71.17456579"
//   },
//   {
//     "Longitude": -1.55954,
//     "Latitude": 52.28937,
//     "Safety Score": "50.356230786666664"
//   },
//   {
//     "Longitude": -1.55937,
//     "Latitude": 52.28603,
//     "Safety Score": "71.48071828"
//   },
//   {
//     "Longitude": -1.55918,
//     "Latitude": 52.28946,
//     "Safety Score": "33.42949661"
//   },
//   {
//     "Longitude": -1.5591778,
//     "Latitude": 52.2894565,
//     "Safety Score": "38.45746247"
//   },
//   {
//     "Longitude": -1.55897,
//     "Latitude": 52.2859,
//     "Safety Score": "71.17456579"
//   },
//   {
//     "Longitude": -1.55874,
//     "Latitude": 52.28582,
//     "Safety Score": "71.48071828"
//   },
//   {
//     "Longitude": -1.55855,
//     "Latitude": 52.2895,
//     "Safety Score": "33.42949661"
//   },
//   {
//     "Longitude": -1.55808,
//     "Latitude": 52.28554,
//     "Safety Score": "71.17456579"
//   },
//   {
//     "Longitude": -1.55803,
//     "Latitude": 52.2855,
//     "Safety Score": "71.48071828"
//   },
//   {
//     "Longitude": -1.55795,
//     "Latitude": 52.28544,
//     "Safety Score": "71.48071828"
//   },
//   {
//     "Longitude": -1.55792,
//     "Latitude": 52.28945,
//     "Safety Score": "40.19901619"
//   },
//   {
//     "Longitude": -1.5579,
//     "Latitude": 52.28542,
//     "Safety Score": "71.17456579"
//   },
//   {
//     "Longitude": -1.55786,
//     "Latitude": 52.28541,
//     "Safety Score": "71.48071828"
//   },
//   {
//     "Longitude": -1.55777,
//     "Latitude": 52.2854,
//     "Safety Score": "71.48071828"
//   },
//   {
//     "Longitude": -1.55773,
//     "Latitude": 52.28538,
//     "Safety Score": "71.17456579"
//   },
//   {
//     "Longitude": -1.55769,
//     "Latitude": 52.28536,
//     "Safety Score": "71.48071828"
//   },
//   {
//     "Longitude": -1.55704,
//     "Latitude": 52.28502,
//     "Safety Score": "71.17456579"
//   },
//   {
//     "Longitude": -1.5567,
//     "Latitude": 52.28944,
//     "Safety Score": "61.66028849"
//   },
//   {
//     "Longitude": -1.55646,
//     "Latitude": 52.28471,
//     "Safety Score": "71.32764204"
//   },
//   {
//     "Longitude": -1.55642,
//     "Latitude": 52.28464,
//     "Safety Score": "71.48071828"
//   },
//   {
//     "Longitude": -1.55636,
//     "Latitude": 52.28459,
//     "Safety Score": "71.48071828"
//   },
//   {
//     "Longitude": -1.55604,
//     "Latitude": 52.28443,
//     "Safety Score": "71.48071828"
//   },
//   {
//     "Longitude": -1.55596,
//     "Latitude": 52.28439,
//     "Safety Score": "71.48071828"
//   },
//   {
//     "Longitude": -1.55584,
//     "Latitude": 52.28434,
//     "Safety Score": "71.48071828"
//   },
//   {
//     "Longitude": -1.55544,
//     "Latitude": 52.28476,
//     "Safety Score": "71.17456579"
//   },
//   {
//     "Longitude": -1.55518,
//     "Latitude": 52.28951,
//     "Safety Score": "43.0968843"
//   },
//   {
//     "Longitude": -1.55485,
//     "Latitude": 52.28376,
//     "Safety Score": "71.48071828"
//   },
//   {
//     "Longitude": -1.55438,
//     "Latitude": 52.28483,
//     "Safety Score": "71.17456579"
//   },
//   {
//     "Longitude": -1.55428,
//     "Latitude": 52.28486,
//     "Safety Score": "71.17456579"
//   },
//   {
//     "Longitude": -1.55396,
//     "Latitude": 52.28315,
//     "Safety Score": "71.48071828"
//   },
//   {
//     "Longitude": -1.55395,
//     "Latitude": 52.28491,
//     "Safety Score": "71.17456579"
//   },
//   {
//     "Longitude": -1.55372,
//     "Latitude": 52.28958,
//     "Safety Score": "61.66028849"
//   },
//   {
//     "Longitude": -1.55368,
//     "Latitude": 52.28295,
//     "Safety Score": "71.48071828"
//   },
//   {
//     "Longitude": -1.55357,
//     "Latitude": 52.28959,
//     "Safety Score": "61.66028849"
//   },
//   {
//     "Longitude": -1.55356,
//     "Latitude": 52.28494,
//     "Safety Score": "71.17456579"
//   },
//   {
//     "Longitude": -1.55354,
//     "Latitude": 52.28279,
//     "Safety Score": "71.48071828"
//   },
//   {
//     "Longitude": -1.55349,
//     "Latitude": 52.28275,
//     "Safety Score": "71.48071828"
//   },
//   {
//     "Longitude": -1.55344,
//     "Latitude": 52.28958,
//     "Safety Score": "61.66028849"
//   },
//   {
//     "Longitude": -1.55343,
//     "Latitude": 52.28959,
//     "Safety Score": "61.66028849"
//   },
//   {
//     "Longitude": -1.55341,
//     "Latitude": 52.28959,
//     "Safety Score": "61.66028849"
//   },
//   {
//     "Longitude": -1.55339,
//     "Latitude": 52.28959,
//     "Safety Score": "61.66028849"
//   },
//   {
//     "Longitude": -1.55338,
//     "Latitude": 52.28959,
//     "Safety Score": "61.66028849"
//   },
//   {
//     "Longitude": -1.55337,
//     "Latitude": 52.2827,
//     "Safety Score": "71.48071828"
//   },
//   {
//     "Longitude": -1.55337,
//     "Latitude": 52.28959,
//     "Safety Score": "61.66028849"
//   },
//   {
//     "Longitude": -1.55327,
//     "Latitude": 52.2896,
//     "Safety Score": "61.66028849"
//   },
//   {
//     "Longitude": -1.55306,
//     "Latitude": 52.2896,
//     "Safety Score": "61.66028849"
//   },
//   {
//     "Longitude": -1.5530564,
//     "Latitude": 52.2896032,
//     "Safety Score": "66.68825434"
//   },
//   {
//     "Longitude": -1.55296,
//     "Latitude": 52.28252,
//     "Safety Score": "71.48071828"
//   },
//   {
//     "Longitude": -1.55289,
//     "Latitude": 52.28499,
//     "Safety Score": "71.17456579"
//   },
//   {
//     "Longitude": -1.55269,
//     "Latitude": 52.28245,
//     "Safety Score": "71.48071828"
//   },
//   {
//     "Longitude": -1.55258,
//     "Latitude": 52.2896,
//     "Safety Score": "61.66028849"
//   },
//   {
//     "Longitude": -1.55252,
//     "Latitude": 52.28244,
//     "Safety Score": "71.48071828"
//   },
//   {
//     "Longitude": -1.5523,
//     "Latitude": 52.28506,
//     "Safety Score": "71.17456579"
//   },
//   {
//     "Longitude": -1.55215,
//     "Latitude": 52.28248,
//     "Safety Score": "71.48071828"
//   },
//   {
//     "Longitude": -1.55178,
//     "Latitude": 52.28517,
//     "Safety Score": "71.17456579"
//   },
//   {
//     "Longitude": -1.55163,
//     "Latitude": 52.28964,
//     "Safety Score": "61.66028849"
//   },
//   {
//     "Longitude": -1.5515,
//     "Latitude": 52.2826,
//     "Safety Score": "71.48071828"
//   },
//   {
//     "Longitude": -1.55111,
//     "Latitude": 52.28264,
//     "Safety Score": "71.48071828"
//   },
//   {
//     "Longitude": -1.55093,
//     "Latitude": 52.28968,
//     "Safety Score": "61.66028849"
//   },
//   {
//     "Longitude": -1.55088,
//     "Latitude": 52.28967,
//     "Safety Score": "61.66028849"
//   },
//   {
//     "Longitude": -1.55083,
//     "Latitude": 52.28261,
//     "Safety Score": "71.48071828"
//   },
//   {
//     "Longitude": -1.55082,
//     "Latitude": 52.28968,
//     "Safety Score": "61.66028849"
//   },
//   {
//     "Longitude": -1.55079,
//     "Latitude": 52.28969,
//     "Safety Score": "61.66028849"
//   },
//   {
//     "Longitude": -1.55051,
//     "Latitude": 52.28535,
//     "Safety Score": "71.17456579"
//   },
//   {
//     "Longitude": -1.55049,
//     "Latitude": 52.28253,
//     "Safety Score": "71.48071828"
//   },
//   {
//     "Longitude": -1.5504,
//     "Latitude": 52.2854,
//     "Safety Score": "71.17456579"
//   },
//   {
//     "Longitude": -1.55028,
//     "Latitude": 52.28248,
//     "Safety Score": "71.48071828"
//   },
//   {
//     "Longitude": -1.55026,
//     "Latitude": 52.28969,
//     "Safety Score": "61.66028849"
//   },
//   {
//     "Longitude": -1.55023,
//     "Latitude": 52.28249,
//     "Safety Score": "71.48071828"
//   },
//   {
//     "Longitude": -1.55016,
//     "Latitude": 52.28252,
//     "Safety Score": "71.48071828"
//   },
//   {
//     "Longitude": -1.55011,
//     "Latitude": 52.28254,
//     "Safety Score": "71.48071828"
//   },
//   {
//     "Longitude": -1.5501,
//     "Latitude": 52.28554,
//     "Safety Score": "71.17456579"
//   },
//   {
//     "Longitude": -1.5501,
//     "Latitude": 52.28972,
//     "Safety Score": "61.66028849"
//   },
//   {
//     "Longitude": -1.5500951,
//     "Latitude": 52.2897243,
//     "Safety Score": "66.68825434"
//   },
//   {
//     "Longitude": -1.55003,
//     "Latitude": 52.28252,
//     "Safety Score": "71.48071828"
//   },
//   {
//     "Longitude": -1.55001,
//     "Latitude": 52.28248,
//     "Safety Score": "71.48071828"
//   },
//   {
//     "Longitude": -1.55001,
//     "Latitude": 52.28251,
//     "Safety Score": "71.48071828"
//   },
//   {
//     "Longitude": -1.55,
//     "Latitude": 52.2824,
//     "Safety Score": "71.48071828"
//   },
//   {
//     "Longitude": -1.54998,
//     "Latitude": 52.28238,
//     "Safety Score": "71.48071828"
//   },
//   {
//     "Longitude": -1.54992,
//     "Latitude": 52.28565,
//     "Safety Score": "71.17456579"
//   },
//   {
//     "Longitude": -1.54984,
//     "Latitude": 52.28671,
//     "Safety Score": "68.10519085"
//   },
//   {
//     "Longitude": -1.54981,
//     "Latitude": 52.28673,
//     "Safety Score": "68.10519085"
//   },
//   {
//     "Longitude": -1.54975,
//     "Latitude": 52.28676,
//     "Safety Score": "68.10519085"
//   },
//   {
//     "Longitude": -1.5496,
//     "Latitude": 52.28663,
//     "Safety Score": "68.10519085"
//   },
//   {
//     "Longitude": -1.54955,
//     "Latitude": 52.28661,
//     "Safety Score": "68.10519085"
//   },
//   {
//     "Longitude": -1.54954,
//     "Latitude": 52.28226,
//     "Safety Score": "64.32762505"
//   },
//   {
//     "Longitude": -1.54948,
//     "Latitude": 52.28589,
//     "Safety Score": "71.17456579"
//   },
//   {
//     "Longitude": -1.54941,
//     "Latitude": 52.28681,
//     "Safety Score": "68.10519085"
//   },
//   {
//     "Longitude": -1.54932,
//     "Latitude": 52.28594,
//     "Safety Score": "71.17456579"
//   },
//   {
//     "Longitude": -1.54926,
//     "Latitude": 52.28974,
//     "Safety Score": "61.66028849"
//   },
//   {
//     "Longitude": -1.54923,
//     "Latitude": 52.28686,
//     "Safety Score": "68.10519085"
//   },
//   {
//     "Longitude": -1.54919,
//     "Latitude": 52.28217,
//     "Safety Score": "71.48071828"
//   },
//   {
//     "Longitude": -1.54914,
//     "Latitude": 52.28693,
//     "Safety Score": "68.10519085"
//   },
//   {
//     "Longitude": -1.54912,
//     "Latitude": 52.28616,
//     "Safety Score": "71.17456579"
//   },
//   {
//     "Longitude": -1.54906,
//     "Latitude": 52.28616,
//     "Safety Score": "71.17456579"
//   },
//   {
//     "Longitude": -1.54898,
//     "Latitude": 52.28613,
//     "Safety Score": "71.17456579"
//   },
//   {
//     "Longitude": -1.5489,
//     "Latitude": 52.28709,
//     "Safety Score": "68.10519085"
//   },
//   {
//     "Longitude": -1.5488877,
//     "Latitude": 52.2833039,
//     "Safety Score": "78.56343833"
//   },
//   {
//     "Longitude": -1.54876,
//     "Latitude": 52.28714,
//     "Safety Score": "68.10519085"
//   },
//   {
//     "Longitude": -1.54867,
//     "Latitude": 52.28621,
//     "Safety Score": "71.17456579"
//   },
//   {
//     "Longitude": -1.54861,
//     "Latitude": 52.28211,
//     "Safety Score": "71.48071828"
//   },
//   {
//     "Longitude": -1.54861,
//     "Latitude": 52.28629,
//     "Safety Score": "71.17456579"
//   },
//   {
//     "Longitude": -1.54856,
//     "Latitude": 52.28725,
//     "Safety Score": "68.10519085"
//   },
//   {
//     "Longitude": -1.54854,
//     "Latitude": 52.28652,
//     "Safety Score": "71.17456579"
//   },
//   {
//     "Longitude": -1.54848,
//     "Latitude": 52.2866,
//     "Safety Score": "71.17456579"
//   },
//   {
//     "Longitude": -1.54828,
//     "Latitude": 52.28678,
//     "Safety Score": "71.17456579"
//   },
//   {
//     "Longitude": -1.54819,
//     "Latitude": 52.29237,
//     "Safety Score": "66.46452752"
//   },
//   {
//     "Longitude": -1.5481874,
//     "Latitude": 52.2923727,
//     "Safety Score": "66.71180453"
//   },
//   {
//     "Longitude": -1.548171,
//     "Latitude": 52.281418,
//     "Safety Score": "65.25505698"
//   },
//   {
//     "Longitude": -1.548171,
//     "Latitude": 52.286249,
//     "Safety Score": "61.966440979999994"
//   },
//   {
//     "Longitude": -1.54798,
//     "Latitude": 52.2821,
//     "Safety Score": "71.48071828"
//   },
//   {
//     "Longitude": -1.54787,
//     "Latitude": 52.28612,
//     "Safety Score": "68.10519085"
//   },
//   {
//     "Longitude": -1.54778,
//     "Latitude": 52.28711,
//     "Safety Score": "71.17456579"
//   },
//   {
//     "Longitude": -1.54773,
//     "Latitude": 52.28778,
//     "Safety Score": "68.10519085"
//   },
//   {
//     "Longitude": -1.54772,
//     "Latitude": 52.28211,
//     "Safety Score": "71.48071828"
//   },
//   {
//     "Longitude": -1.54761,
//     "Latitude": 52.29191,
//     "Safety Score": "66.46452752"
//   },
//   {
//     "Longitude": -1.54751,
//     "Latitude": 52.28793,
//     "Safety Score": "68.10519085"
//   },
//   {
//     "Longitude": -1.54749,
//     "Latitude": 52.28594,
//     "Safety Score": "68.10519085"
//   },
//   {
//     "Longitude": -1.54747,
//     "Latitude": 52.28214,
//     "Safety Score": "71.48071828"
//   },
//   {
//     "Longitude": -1.5474,
//     "Latitude": 52.28732,
//     "Safety Score": "71.17456579"
//   },
//   {
//     "Longitude": -1.54736,
//     "Latitude": 52.28218,
//     "Safety Score": "71.48071828"
//   },
//   {
//     "Longitude": -1.54732,
//     "Latitude": 52.28579,
//     "Safety Score": "68.10519085"
//   },
//   {
//     "Longitude": -1.5473,
//     "Latitude": 52.28573,
//     "Safety Score": "68.10519085"
//   },
//   {
//     "Longitude": -1.54728,
//     "Latitude": 52.28806,
//     "Safety Score": "68.10519085"
//   },
//   {
//     "Longitude": -1.5472643,
//     "Latitude": 52.2789332,
//     "Safety Score": "78.56343833"
//   },
//   {
//     "Longitude": -1.54724,
//     "Latitude": 52.28459,
//     "Safety Score": "55.60381427666667"
//   },
//   {
//     "Longitude": -1.54724,
//     "Latitude": 52.28477,
//     "Safety Score": "55.60381427666667"
//   },
//   {
//     "Longitude": -1.54724,
//     "Latitude": 52.28554,
//     "Safety Score": "68.10519085"
//   },
//   {
//     "Longitude": -1.54722,
//     "Latitude": 52.28527,
//     "Safety Score": "68.10519085"
//   },
//   {
//     "Longitude": -1.5471869,
//     "Latitude": 52.2789466,
//     "Safety Score": "58.57521341999999"
//   },
//   {
//     "Longitude": -1.54717,
//     "Latitude": 52.28421,
//     "Safety Score": "68.10519085"
//   },
//   {
//     "Longitude": -1.54715,
//     "Latitude": 52.29147,
//     "Safety Score": "66.46452752"
//   },
//   {
//     "Longitude": -1.54712,
//     "Latitude": 52.28406,
//     "Safety Score": "68.10519085"
//   },
//   {
//     "Longitude": -1.54707,
//     "Latitude": 52.28389,
//     "Safety Score": "68.10519085"
//   },
//   {
//     "Longitude": -1.5470501,
//     "Latitude": 52.281384,
//     "Safety Score": "52.21666176"
//   },
//   {
//     "Longitude": -1.54705,
//     "Latitude": 52.28138,
//     "Safety Score": "49.91463056"
//   },
//   {
//     "Longitude": -1.54696,
//     "Latitude": 52.28125,
//     "Safety Score": "49.91463056"
//   },
//   {
//     "Longitude": -1.54693,
//     "Latitude": 52.2812,
//     "Safety Score": "49.91463056"
//   },
//   {
//     "Longitude": -1.5469286,
//     "Latitude": 52.2812049,
//     "Safety Score": "52.21666176"
//   },
//   {
//     "Longitude": -1.54692,
//     "Latitude": 52.28347,
//     "Safety Score": "68.10519085"
//   },
//   {
//     "Longitude": -1.5469188,
//     "Latitude": 52.2834728,
//     "Safety Score": "61.966440979999994"
//   },
//   {
//     "Longitude": -1.54688,
//     "Latitude": 52.28342,
//     "Safety Score": "68.10519085"
//   },
//   {
//     "Longitude": -1.54684,
//     "Latitude": 52.28829,
//     "Safety Score": "68.10519085"
//   },
//   {
//     "Longitude": -1.54678,
//     "Latitude": 52.28325,
//     "Safety Score": "68.10519085"
//   },
//   {
//     "Longitude": -1.54675,
//     "Latitude": 52.28324,
//     "Safety Score": "68.10519085"
//   },
//   {
//     "Longitude": -1.54673,
//     "Latitude": 52.29117,
//     "Safety Score": "66.46452752"
//   },
//   {
//     "Longitude": -1.54672,
//     "Latitude": 52.28761,
//     "Safety Score": "71.17456579"
//   },
//   {
//     "Longitude": -1.5467,
//     "Latitude": 52.28125,
//     "Safety Score": "49.91463056"
//   },
//   {
//     "Longitude": -1.54669,
//     "Latitude": 52.28321,
//     "Safety Score": "68.10519085"
//   },
//   {
//     "Longitude": -1.54668,
//     "Latitude": 52.29107,
//     "Safety Score": "66.46452752"
//   },
//   {
//     "Longitude": -1.54664,
//     "Latitude": 52.28974,
//     "Safety Score": "68.10519085"
//   },
//   {
//     "Longitude": -1.54664,
//     "Latitude": 52.29061,
//     "Safety Score": "52.324671263333336"
//   },
//   {
//     "Longitude": -1.54663,
//     "Latitude": 52.28851,
//     "Safety Score": "68.10519085"
//   },
//   {
//     "Longitude": -1.5466228,
//     "Latitude": 52.2898457,
//     "Safety Score": "76.20253165"
//   },
//   {
//     "Longitude": -1.54662,
//     "Latitude": 52.28985,
//     "Safety Score": "61.60141301000001"
//   },
//   {
//     "Longitude": -1.5466,
//     "Latitude": 52.28128,
//     "Safety Score": "49.91463056"
//   },
//   {
//     "Longitude": -1.5466,
//     "Latitude": 52.28879,
//     "Safety Score": "68.10519085"
//   },
//   {
//     "Longitude": -1.5466,
//     "Latitude": 52.28996,
//     "Safety Score": "66.46452752"
//   },
//   {
//     "Longitude": -1.54656,
//     "Latitude": 52.28862,
//     "Safety Score": "68.10519085"
//   },
//   {
//     "Longitude": -1.54656,
//     "Latitude": 52.28888,
//     "Safety Score": "68.10519085"
//   },
//   {
//     "Longitude": -1.54655,
//     "Latitude": 52.28869,
//     "Safety Score": "68.10519085"
//   },
//   {
//     "Longitude": -1.54654,
//     "Latitude": 52.28245,
//     "Safety Score": "56.11048805666667"
//   },
//   {
//     "Longitude": -1.54652,
//     "Latitude": 52.28313,
//     "Safety Score": "68.10519085"
//   },
//   {
//     "Longitude": -1.54622,
//     "Latitude": 52.28301,
//     "Safety Score": "68.10519085"
//   },
//   {
//     "Longitude": -1.54604,
//     "Latitude": 52.28987,
//     "Safety Score": "61.54253753"
//   },
//   {
//     "Longitude": -1.54591,
//     "Latitude": 52.28789,
//     "Safety Score": "71.17456579"
//   },
//   {
//     "Longitude": -1.5459,
//     "Latitude": 52.27957,
//     "Safety Score": "57.24462761"
//   },
//   {
//     "Longitude": -1.54587,
//     "Latitude": 52.28138,
//     "Safety Score": "49.91463056"
//   },
//   {
//     "Longitude": -1.54587,
//     "Latitude": 52.283,
//     "Safety Score": "68.10519085"
//   },
//   {
//     "Longitude": -1.54582,
//     "Latitude": 52.28282,
//     "Safety Score": "49.91463056"
//   },
//   {
//     "Longitude": -1.5458,
//     "Latitude": 52.28279,
//     "Safety Score": "47.08714851"
//   },
//   {
//     "Longitude": -1.54579,
//     "Latitude": 52.28285,
//     "Safety Score": "49.91463056"
//   },
//   {
//     "Longitude": -1.54578,
//     "Latitude": 52.2794,
//     "Safety Score": "57.24462761"
//   },
//   {
//     "Longitude": -1.54576,
//     "Latitude": 52.27959,
//     "Safety Score": "57.24462761"
//   },
//   {
//     "Longitude": -1.54574,
//     "Latitude": 52.28136,
//     "Safety Score": "49.91463056"
//   },
//   {
//     "Longitude": -1.54573,
//     "Latitude": 52.28273,
//     "Safety Score": "68.65323623666667"
//   },
//   {
//     "Longitude": -1.54571,
//     "Latitude": 52.28131,
//     "Safety Score": "49.91463056"
//   },
//   {
//     "Longitude": -1.54571,
//     "Latitude": 52.28269,
//     "Safety Score": "47.08714851"
//   },
//   {
//     "Longitude": -1.54571,
//     "Latitude": 52.28794,
//     "Safety Score": "71.17456579"
//   },
//   {
//     "Longitude": -1.5457,
//     "Latitude": 52.27919,
//     "Safety Score": "57.24462761"
//   },
//   {
//     "Longitude": -1.54569,
//     "Latitude": 52.28128,
//     "Safety Score": "49.91463056"
//   },
//   {
//     "Longitude": -1.5456867,
//     "Latitude": 52.2812835,
//     "Safety Score": "52.21666176"
//   },
//   {
//     "Longitude": -1.54565,
//     "Latitude": 52.27902,
//     "Safety Score": "57.24462761"
//   },
//   {
//     "Longitude": -1.5456,
//     "Latitude": 52.28128,
//     "Safety Score": "49.91463056"
//   },
//   {
//     "Longitude": -1.54559,
//     "Latitude": 52.27856,
//     "Safety Score": "57.24462761"
//   },
//   {
//     "Longitude": -1.54557,
//     "Latitude": 52.28129,
//     "Safety Score": "49.91463056"
//   },
//   {
//     "Longitude": -1.54557,
//     "Latitude": 52.28253,
//     "Safety Score": "47.08714851"
//   },
//   {
//     "Longitude": -1.54555,
//     "Latitude": 52.28143,
//     "Safety Score": "49.91463056"
//   },
//   {
//     "Longitude": -1.54554,
//     "Latitude": 52.28303,
//     "Safety Score": "60.82896674"
//   },
//   {
//     "Longitude": -1.54553,
//     "Latitude": 52.28136,
//     "Safety Score": "49.91463056"
//   },
//   {
//     "Longitude": -1.54552,
//     "Latitude": 52.28294,
//     "Safety Score": "49.91463056"
//   },
//   {
//     "Longitude": -1.54551,
//     "Latitude": 52.28182,
//     "Safety Score": "49.91463056"
//   },
//   {
//     "Longitude": -1.54551,
//     "Latitude": 52.28296,
//     "Safety Score": "49.91463056"
//   },
//   {
//     "Longitude": -1.5455,
//     "Latitude": 52.27963,
//     "Safety Score": "57.24462761"
//   },
//   {
//     "Longitude": -1.5455,
//     "Latitude": 52.28139,
//     "Safety Score": "49.91463056"
//   },
//   {
//     "Longitude": -1.5455,
//     "Latitude": 52.28164,
//     "Safety Score": "49.91463056"
//   },
//   {
//     "Longitude": -1.54535,
//     "Latitude": 52.27856,
//     "Safety Score": "57.24462761"
//   },
//   {
//     "Longitude": -1.5453,
//     "Latitude": 52.27966,
//     "Safety Score": "57.24462761"
//   },
//   {
//     "Longitude": -1.54528,
//     "Latitude": 52.28799,
//     "Safety Score": "71.17456579"
//   },
//   {
//     "Longitude": -1.54523,
//     "Latitude": 52.27962,
//     "Safety Score": "57.24462761"
//   },
//   {
//     "Longitude": -1.54515,
//     "Latitude": 52.28312,
//     "Safety Score": "60.82896674"
//   },
//   {
//     "Longitude": -1.545145,
//     "Latitude": 52.2785643,
//     "Safety Score": "61.966440979999994"
//   },
//   {
//     "Longitude": -1.54514,
//     "Latitude": 52.27856,
//     "Safety Score": "57.24462761"
//   },
//   {
//     "Longitude": -1.545,
//     "Latitude": 52.28992,
//     "Safety Score": "61.54253753"
//   },
//   {
//     "Longitude": -1.54493,
//     "Latitude": 52.27932,
//     "Safety Score": "57.24462761"
//   },
//   {
//     "Longitude": -1.54488,
//     "Latitude": 52.28994,
//     "Safety Score": "61.66028849"
//   },
//   {
//     "Longitude": -1.54481,
//     "Latitude": 52.27921,
//     "Safety Score": "57.24462761"
//   },
//   {
//     "Longitude": -1.5448,
//     "Latitude": 52.28324,
//     "Safety Score": "49.91463056"
//   },
//   {
//     "Longitude": -1.54479,
//     "Latitude": 52.28996,
//     "Safety Score": "61.54253753"
//   },
//   {
//     "Longitude": -1.54475,
//     "Latitude": 52.27921,
//     "Safety Score": "57.24462761"
//   },
//   {
//     "Longitude": -1.54473,
//     "Latitude": 52.28309,
//     "Safety Score": "71.48071828"
//   },
//   {
//     "Longitude": -1.5446566,
//     "Latitude": 52.281047,
//     "Safety Score": "38.93615032333333"
//   },
//   {
//     "Longitude": -1.54465,
//     "Latitude": 52.27925,
//     "Safety Score": "57.24462761"
//   },
//   {
//     "Longitude": -1.5445862,
//     "Latitude": 52.280894,
//     "Safety Score": "38.93615032333333"
//   },
//   {
//     "Longitude": -1.54453,
//     "Latitude": 52.29001,
//     "Safety Score": "61.54253753"
//   },
//   {
//     "Longitude": -1.5445292,
//     "Latitude": 52.2900115,
//     "Safety Score": "71.44539299"
//   },
//   {
//     "Longitude": -1.54452,
//     "Latitude": 52.28803,
//     "Safety Score": "71.17456579"
//   },
//   {
//     "Longitude": -1.54452,
//     "Latitude": 52.28995,
//     "Safety Score": "61.54253753"
//   },
//   {
//     "Longitude": -1.54445,
//     "Latitude": 52.2899,
//     "Safety Score": "61.54253753"
//   },
//   {
//     "Longitude": -1.54443,
//     "Latitude": 52.28336,
//     "Safety Score": "68.10519085"
//   },
//   {
//     "Longitude": -1.5442,
//     "Latitude": 52.28342,
//     "Safety Score": "49.91463056"
//   },
//   {
//     "Longitude": -1.54408,
//     "Latitude": 52.28332,
//     "Safety Score": "71.48071828"
//   },
//   {
//     "Longitude": -1.54405,
//     "Latitude": 52.28984,
//     "Safety Score": "44.03015164666667"
//   },
//   {
//     "Longitude": -1.54404,
//     "Latitude": 52.27956,
//     "Safety Score": "57.24462761"
//   },
//   {
//     "Longitude": -1.54403,
//     "Latitude": 52.28346,
//     "Safety Score": "68.10519085"
//   },
//   {
//     "Longitude": -1.54394,
//     "Latitude": 52.29012,
//     "Safety Score": "44.353763066666666"
//   },
//   {
//     "Longitude": -1.5438,
//     "Latitude": 52.28807,
//     "Safety Score": "71.17456579"
//   },
//   {
//     "Longitude": -1.54377,
//     "Latitude": 52.28352,
//     "Safety Score": "49.91463056"
//   },
//   {
//     "Longitude": -1.5436,
//     "Latitude": 52.28342,
//     "Safety Score": "71.48071828"
//   },
//   {
//     "Longitude": -1.54357,
//     "Latitude": 52.28354,
//     "Safety Score": "68.10519085"
//   },
//   {
//     "Longitude": -1.5435,
//     "Latitude": 52.29016,
//     "Safety Score": "44.353763066666666"
//   },
//   {
//     "Longitude": -1.54344,
//     "Latitude": 52.28806,
//     "Safety Score": "71.17456579"
//   },
//   {
//     "Longitude": -1.54334,
//     "Latitude": 52.27903,
//     "Safety Score": "57.24462761"
//   },
//   {
//     "Longitude": -1.5432,
//     "Latitude": 52.28359,
//     "Safety Score": "68.10519085"
//   },
//   {
//     "Longitude": -1.54315,
//     "Latitude": 52.28377,
//     "Safety Score": "68.10519085"
//   },
//   {
//     "Longitude": -1.5431489,
//     "Latitude": 52.2837661,
//     "Safety Score": "58.57521341999999"
//   },
//   {
//     "Longitude": -1.5431,
//     "Latitude": 52.28368,
//     "Safety Score": "68.10519085"
//   },
//   {
//     "Longitude": -1.54303,
//     "Latitude": 52.28362,
//     "Safety Score": "68.10519085"
//   },
//   {
//     "Longitude": -1.54297,
//     "Latitude": 52.2836,
//     "Safety Score": "68.10519085"
//   },
//   {
//     "Longitude": -1.54296,
//     "Latitude": 52.27924,
//     "Safety Score": "57.24462761"
//   },
//   {
//     "Longitude": -1.5429,
//     "Latitude": 52.28361,
//     "Safety Score": "49.91463056"
//   },
//   {
//     "Longitude": -1.54264,
//     "Latitude": 52.28807,
//     "Safety Score": "71.17456579"
//   },
//   {
//     "Longitude": -1.54262,
//     "Latitude": 52.2902,
//     "Safety Score": "44.71594289"
//   },
//   {
//     "Longitude": -1.54256,
//     "Latitude": 52.28968,
//     "Safety Score": "44.598191930000006"
//   },
//   {
//     "Longitude": -1.54227,
//     "Latitude": 52.28366,
//     "Safety Score": "49.91463056"
//   },
//   {
//     "Longitude": -1.54227,
//     "Latitude": 52.28964,
//     "Safety Score": "50.22967411"
//   },
//   {
//     "Longitude": -1.54218,
//     "Latitude": 52.28354,
//     "Safety Score": "71.48071828"
//   },
//   {
//     "Longitude": -1.54216,
//     "Latitude": 52.27968,
//     "Safety Score": "57.24462761"
//   },
//   {
//     "Longitude": -1.5418035,
//     "Latitude": 52.290212,
//     "Safety Score": "55.37539092"
//   },
//   {
//     "Longitude": -1.5418,
//     "Latitude": 52.29021,
//     "Safety Score": "50.34742507000001"
//   },
//   {
//     "Longitude": -1.541341,
//     "Latitude": 52.2875364,
//     "Safety Score": "46.008428503333334"
//   },
//   {
//     "Longitude": -1.54134,
//     "Latitude": 52.28754,
//     "Safety Score": "31.772337833333335"
//   },
//   {
//     "Longitude": -1.54127,
//     "Latitude": 52.28379,
//     "Safety Score": "45.62568598666667"
//   },
//   {
//     "Longitude": -1.54107,
//     "Latitude": 52.28813,
//     "Safety Score": "71.17456579"
//   },
//   {
//     "Longitude": -1.540875,
//     "Latitude": 52.286249,
//     "Safety Score": "40.29930172666667"
//   },
//   {
//     "Longitude": -1.54084,
//     "Latitude": 52.28023,
//     "Safety Score": "57.24462761"
//   },
//   {
//     "Longitude": -1.54053,
//     "Latitude": 52.28817,
//     "Safety Score": "71.17456579"
//   },
//   {
//     "Longitude": -1.54049,
//     "Latitude": 52.28032,
//     "Safety Score": "57.24462761"
//   },
//   {
//     "Longitude": -1.5404,
//     "Latitude": 52.28377,
//     "Safety Score": "67.19177371333333"
//   },
//   {
//     "Longitude": -1.5403,
//     "Latitude": 52.28819,
//     "Safety Score": "71.17456579"
//   },
//   {
//     "Longitude": -1.54012,
//     "Latitude": 52.28819,
//     "Safety Score": "71.17456579"
//   },
//   {
//     "Longitude": -1.5401,
//     "Latitude": 52.28807,
//     "Safety Score": "44.99317244666667"
//   },
//   {
//     "Longitude": -1.5401,
//     "Latitude": 52.28818,
//     "Safety Score": "61.54253753"
//   },
//   {
//     "Longitude": -1.54006,
//     "Latitude": 52.28768,
//     "Safety Score": "26.03526841333333"
//   },
//   {
//     "Longitude": -1.54005,
//     "Latitude": 52.28862,
//     "Safety Score": "61.54253753"
//   },
//   {
//     "Longitude": -1.54004,
//     "Latitude": 52.28907,
//     "Safety Score": "61.54253753"
//   },
//   {
//     "Longitude": -1.54004,
//     "Latitude": 52.28931,
//     "Safety Score": "61.54253753"
//   },
//   {
//     "Longitude": -1.54002,
//     "Latitude": 52.28888,
//     "Safety Score": "61.54253753"
//   },
//   {
//     "Longitude": -1.54001,
//     "Latitude": 52.28903,
//     "Safety Score": "61.54253753"
//   },
//   {
//     "Longitude": -1.53995,
//     "Latitude": 52.28807,
//     "Safety Score": "44.99317244666667"
//   },
//   {
//     "Longitude": -1.53982,
//     "Latitude": 52.28399,
//     "Safety Score": "49.91463056"
//   },
//   {
//     "Longitude": -1.53979,
//     "Latitude": 52.28768,
//     "Safety Score": "26.03526841333333"
//   },
//   {
//     "Longitude": -1.53979,
//     "Latitude": 52.28816,
//     "Safety Score": "54.62520070666667"
//   },
//   {
//     "Longitude": -1.53972,
//     "Latitude": 52.28038,
//     "Safety Score": "57.24462761"
//   },
//   {
//     "Longitude": -1.53961,
//     "Latitude": 52.28805,
//     "Safety Score": "44.99317244666667"
//   },
//   {
//     "Longitude": -1.53938,
//     "Latitude": 52.28801,
//     "Safety Score": "54.62520070666667"
//   },
//   {
//     "Longitude": -1.53917,
//     "Latitude": 52.28392,
//     "Safety Score": "71.48071828"
//   },
//   {
//     "Longitude": -1.53915,
//     "Latitude": 52.28795,
//     "Safety Score": "61.54253753"
//   },
//   {
//     "Longitude": -1.53914,
//     "Latitude": 52.28755,
//     "Safety Score": "42.5846335"
//   },
//   {
//     "Longitude": -1.53901,
//     "Latitude": 52.28408,
//     "Safety Score": "49.91463056"
//   },
//   {
//     "Longitude": -1.53888,
//     "Latitude": 52.28785,
//     "Safety Score": "66.35855166"
//   },
//   {
//     "Longitude": -1.5387,
//     "Latitude": 52.2902,
//     "Safety Score": "43.121420193333336"
//   },
//   {
//     "Longitude": -1.5386973,
//     "Latitude": 52.2902026,
//     "Safety Score": "48.14938604666667"
//   },
//   {
//     "Longitude": -1.53865,
//     "Latitude": 52.28741,
//     "Safety Score": "23.67936349333333"
//   },
//   {
//     "Longitude": -1.53862,
//     "Latitude": 52.28776,
//     "Safety Score": "71.17456579"
//   },
//   {
//     "Longitude": -1.53858,
//     "Latitude": 52.28397,
//     "Safety Score": "49.617964480000005"
//   },
//   {
//     "Longitude": -1.53848,
//     "Latitude": 52.28908,
//     "Safety Score": "38.62619010666666"
//   },
//   {
//     "Longitude": -1.5384772,
//     "Latitude": 52.289077,
//     "Safety Score": "52.63321777666667"
//   },
//   {
//     "Longitude": -1.53839,
//     "Latitude": 52.28767,
//     "Safety Score": "42.63726752333333"
//   },
//   {
//     "Longitude": -1.53832,
//     "Latitude": 52.2935,
//     "Safety Score": "61.966440979999994"
//   },
//   {
//     "Longitude": -1.53831,
//     "Latitude": 52.28414,
//     "Safety Score": "28.05187675"
//   },
//   {
//     "Longitude": -1.53828,
//     "Latitude": 52.29311,
//     "Safety Score": "48.03591735"
//   },
//   {
//     "Longitude": -1.5382739,
//     "Latitude": 52.2883984,
//     "Safety Score": "71.17456579"
//   },
//   {
//     "Longitude": -1.53827,
//     "Latitude": 52.2884,
//     "Safety Score": "47.61259935"
//   },
//   {
//     "Longitude": -1.53824,
//     "Latitude": 52.28051,
//     "Safety Score": "39.35974482"
//   },
//   {
//     "Longitude": -1.53821,
//     "Latitude": 52.28726,
//     "Safety Score": "23.67936349333333"
//   },
//   {
//     "Longitude": -1.5382023,
//     "Latitude": 52.2923339,
//     "Safety Score": "49.42499104666666"
//   },
//   {
//     "Longitude": -1.5382,
//     "Latitude": 52.28757,
//     "Safety Score": "52.26929578333334"
//   },
//   {
//     "Longitude": -1.5382,
//     "Latitude": 52.29226,
//     "Safety Score": "43.292535789999995"
//   },
//   {
//     "Longitude": -1.5381524,
//     "Latitude": 52.2918076,
//     "Safety Score": "66.51162791"
//   },
//   {
//     "Longitude": -1.53811,
//     "Latitude": 52.2912,
//     "Safety Score": "43.071235493333326"
//   },
//   {
//     "Longitude": -1.53809,
//     "Latitude": 52.28874,
//     "Safety Score": "31.449269293333334"
//   },
//   {
//     "Longitude": -1.53808,
//     "Latitude": 52.28821,
//     "Safety Score": "47.61259935"
//   },
//   {
//     "Longitude": -1.53807,
//     "Latitude": 52.28823,
//     "Safety Score": "47.61259935"
//   },
//   {
//     "Longitude": -1.53807,
//     "Latitude": 52.29062,
//     "Safety Score": "42.28063014"
//   },
//   {
//     "Longitude": -1.5380635,
//     "Latitude": 52.2882476,
//     "Safety Score": "71.17456579"
//   },
//   {
//     "Longitude": -1.5380516,
//     "Latitude": 52.2883539,
//     "Safety Score": "71.17456579"
//   },
//   {
//     "Longitude": -1.53805,
//     "Latitude": 52.28835,
//     "Safety Score": "47.61259935"
//   },
//   {
//     "Longitude": -1.53805,
//     "Latitude": 52.2902,
//     "Safety Score": "61.966440979999994"
//   },
//   {
//     "Longitude": -1.53805,
//     "Latitude": 52.29353,
//     "Safety Score": "61.966440979999994"
//   },
//   {
//     "Longitude": -1.53804,
//     "Latitude": 52.28818,
//     "Safety Score": "47.61259935"
//   },
//   {
//     "Longitude": -1.53803,
//     "Latitude": 52.28898,
//     "Safety Score": "28.971960206666665"
//   },
//   {
//     "Longitude": -1.53803,
//     "Latitude": 52.289,
//     "Safety Score": "28.971960206666665"
//   },
//   {
//     "Longitude": -1.53802,
//     "Latitude": 52.28901,
//     "Safety Score": "28.971960206666665"
//   },
//   {
//     "Longitude": -1.53802,
//     "Latitude": 52.29009,
//     "Safety Score": "61.966440979999994"
//   },
//   {
//     "Longitude": -1.53801,
//     "Latitude": 52.28895,
//     "Safety Score": "28.971960206666665"
//   },
//   {
//     "Longitude": -1.53799,
//     "Latitude": 52.28807,
//     "Safety Score": "47.61259935"
//   },
//   {
//     "Longitude": -1.53799,
//     "Latitude": 52.28894,
//     "Safety Score": "28.971960206666665"
//   },
//   {
//     "Longitude": -1.53799,
//     "Latitude": 52.28903,
//     "Safety Score": "43.32580182666667"
//   },
//   {
//     "Longitude": -1.53798,
//     "Latitude": 52.28894,
//     "Safety Score": "28.971960206666665"
//   },
//   {
//     "Longitude": -1.5379752,
//     "Latitude": 52.2889352,
//     "Safety Score": "52.533926646666664"
//   },
//   {
//     "Longitude": -1.53797,
//     "Latitude": 52.28788,
//     "Safety Score": "47.61259935"
//   },
//   {
//     "Longitude": -1.53796,
//     "Latitude": 52.28903,
//     "Safety Score": "43.32580182666667"
//   },
//   {
//     "Longitude": -1.53796,
//     "Latitude": 52.2899,
//     "Safety Score": "61.966440979999994"
//   },
//   {
//     "Longitude": -1.53795,
//     "Latitude": 52.28415,
//     "Safety Score": "28.05187675"
//   },
//   {
//     "Longitude": -1.53794,
//     "Latitude": 52.28903,
//     "Safety Score": "43.32580182666667"
//   },
//   {
//     "Longitude": -1.53793,
//     "Latitude": 52.28743,
//     "Safety Score": "52.26929578333334"
//   },
//   {
//     "Longitude": -1.53791,
//     "Latitude": 52.28713,
//     "Safety Score": "23.67936349333333"
//   },
//   {
//     "Longitude": -1.53787,
//     "Latitude": 52.28781,
//     "Safety Score": "47.61259935"
//   },
//   {
//     "Longitude": -1.53777,
//     "Latitude": 52.28942,
//     "Safety Score": "43.32580182666667"
//   },
//   {
//     "Longitude": -1.53771,
//     "Latitude": 52.28416,
//     "Safety Score": "28.05187675"
//   },
//   {
//     "Longitude": -1.53767,
//     "Latitude": 52.28904,
//     "Safety Score": "41.72467087333333"
//   },
//   {
//     "Longitude": -1.53767,
//     "Latitude": 52.28909,
//     "Safety Score": "41.72467087333333"
//   },
//   {
//     "Longitude": -1.53763,
//     "Latitude": 52.28767,
//     "Safety Score": "28.70732934333333"
//   },
//   {
//     "Longitude": -1.53761,
//     "Latitude": 52.28698,
//     "Safety Score": "23.67936349333333"
//   },
//   {
//     "Longitude": -1.53755,
//     "Latitude": 52.28398,
//     "Safety Score": "49.617964480000005"
//   },
//   {
//     "Longitude": -1.53751,
//     "Latitude": 52.28718,
//     "Safety Score": "42.63726752333333"
//   },
//   {
//     "Longitude": -1.53747,
//     "Latitude": 52.28715,
//     "Safety Score": "71.17456579"
//   },
//   {
//     "Longitude": -1.53743,
//     "Latitude": 52.28753,
//     "Safety Score": "47.61259935"
//   },
//   {
//     "Longitude": -1.53742,
//     "Latitude": 52.2961,
//     "Safety Score": "61.966440979999994"
//   },
//   {
//     "Longitude": -1.5374,
//     "Latitude": 52.29599,
//     "Safety Score": "61.966440979999994"
//   },
//   {
//     "Longitude": -1.53738,
//     "Latitude": 52.28679,
//     "Safety Score": "42.5846335"
//   },
//   {
//     "Longitude": -1.53736,
//     "Latitude": 52.28603,
//     "Safety Score": "30.04154198666667"
//   },
//   {
//     "Longitude": -1.5373244,
//     "Latitude": 52.2854409,
//     "Safety Score": "69.08448631"
//   },
//   {
//     "Longitude": -1.53731,
//     "Latitude": 52.28668,
//     "Safety Score": "42.5846335"
//   },
//   {
//     "Longitude": -1.53728,
//     "Latitude": 52.2865,
//     "Safety Score": "42.5846335"
//   },
//   {
//     "Longitude": -1.53725,
//     "Latitude": 52.2948,
//     "Safety Score": "46.426296869999994"
//   },
//   {
//     "Longitude": -1.53718,
//     "Latitude": 52.28739,
//     "Safety Score": "47.61259935"
//   },
//   {
//     "Longitude": -1.53717,
//     "Latitude": 52.29359,
//     "Safety Score": "45.81397707333334"
//   },
//   {
//     "Longitude": -1.53713,
//     "Latitude": 52.29414,
//     "Safety Score": "45.81397707333334"
//   },
//   {
//     "Longitude": -1.53706,
//     "Latitude": 52.29302,
//     "Safety Score": "33.10458013666667"
//   },
//   {
//     "Longitude": -1.5370596,
//     "Latitude": 52.2930159,
//     "Safety Score": "56.87849829666667"
//   },
//   {
//     "Longitude": -1.53705,
//     "Latitude": 52.28694,
//     "Safety Score": "49.14728682"
//   },
//   {
//     "Longitude": -1.53704,
//     "Latitude": 52.28694,
//     "Safety Score": "66.35855166"
//   },
//   {
//     "Longitude": -1.53702,
//     "Latitude": 52.28691,
//     "Safety Score": "49.91463056"
//   },
//   {
//     "Longitude": -1.53702,
//     "Latitude": 52.2936,
//     "Safety Score": "45.81397707333334"
//   },
//   {
//     "Longitude": -1.53701,
//     "Latitude": 52.28695,
//     "Safety Score": "60.54459817"
//   },
//   {
//     "Longitude": -1.53701,
//     "Latitude": 52.29612,
//     "Safety Score": "61.966440979999994"
//   },
//   {
//     "Longitude": -1.53701,
//     "Latitude": 52.29629,
//     "Safety Score": "61.966440979999994"
//   },
//   {
//     "Longitude": -1.537,
//     "Latitude": 52.29631,
//     "Safety Score": "61.966440979999994"
//   },
//   {
//     "Longitude": -1.53698,
//     "Latitude": 52.28687,
//     "Safety Score": "54.57756844"
//   },
//   {
//     "Longitude": -1.5369774,
//     "Latitude": 52.292597,
//     "Safety Score": "58.88830693"
//   },
//   {
//     "Longitude": -1.53696,
//     "Latitude": 52.28698,
//     "Safety Score": "47.61259935"
//   },
//   {
//     "Longitude": -1.53692,
//     "Latitude": 52.28702,
//     "Safety Score": "60.54459817"
//   },
//   {
//     "Longitude": -1.5369,
//     "Latitude": 52.28721,
//     "Safety Score": "47.61259935"
//   },
//   {
//     "Longitude": -1.53689,
//     "Latitude": 52.28724,
//     "Safety Score": "47.61259935"
//   },
//   {
//     "Longitude": -1.53688,
//     "Latitude": 52.28398,
//     "Safety Score": "71.48071828"
//   },
//   {
//     "Longitude": -1.53687,
//     "Latitude": 52.28677,
//     "Safety Score": "52.24609949999999"
//   },
//   {
//     "Longitude": -1.53687,
//     "Latitude": 52.28706,
//     "Safety Score": "47.61259935"
//   },
//   {
//     "Longitude": -1.53685,
//     "Latitude": 52.28714,
//     "Safety Score": "47.61259935"
//   },
//   {
//     "Longitude": -1.53681,
//     "Latitude": 52.28712,
//     "Safety Score": "60.16092631"
//   },
//   {
//     "Longitude": -1.53679,
//     "Latitude": 52.28663,
//     "Safety Score": "54.57756844"
//   },
//   {
//     "Longitude": -1.53673,
//     "Latitude": 52.29131,
//     "Safety Score": "38.11343631333333"
//   },
//   {
//     "Longitude": -1.5367,
//     "Latitude": 52.28415,
//     "Safety Score": "49.91463056"
//   },
//   {
//     "Longitude": -1.5367,
//     "Latitude": 52.2865,
//     "Safety Score": "49.91463056"
//   },
//   {
//     "Longitude": -1.53668,
//     "Latitude": 52.28431,
//     "Safety Score": "49.91463056"
//   },
//   {
//     "Longitude": -1.53666,
//     "Latitude": 52.28397,
//     "Safety Score": "71.48071828"
//   },
//   {
//     "Longitude": -1.53666,
//     "Latitude": 52.28532,
//     "Safety Score": "49.91463056"
//   },
//   {
//     "Longitude": -1.53666,
//     "Latitude": 52.2871,
//     "Safety Score": "71.17456579"
//   },
//   {
//     "Longitude": -1.53665,
//     "Latitude": 52.28414,
//     "Safety Score": "71.48071828"
//   },
//   {
//     "Longitude": -1.53665,
//     "Latitude": 52.28434,
//     "Safety Score": "49.91463056"
//   },
//   {
//     "Longitude": -1.53665,
//     "Latitude": 52.2853,
//     "Safety Score": "42.5846335"
//   },
//   {
//     "Longitude": -1.53664,
//     "Latitude": 52.28534,
//     "Safety Score": "42.5846335"
//   },
//   {
//     "Longitude": -1.53664,
//     "Latitude": 52.28727,
//     "Safety Score": "49.91463056"
//   },
//   {
//     "Longitude": -1.53662,
//     "Latitude": 52.28525,
//     "Safety Score": "42.5846335"
//   },
//   {
//     "Longitude": -1.53661,
//     "Latitude": 52.28437,
//     "Safety Score": "49.91463056"
//   },
//   {
//     "Longitude": -1.5366,
//     "Latitude": 52.28638,
//     "Safety Score": "42.03447692666666"
//   },
//   {
//     "Longitude": -1.53659,
//     "Latitude": 52.28524,
//     "Safety Score": "49.91463056"
//   },
//   {
//     "Longitude": -1.53655,
//     "Latitude": 52.28544,
//     "Safety Score": "49.91463056"
//   },
//   {
//     "Longitude": -1.53654,
//     "Latitude": 52.29031,
//     "Safety Score": "38.13311196666667"
//   },
//   {
//     "Longitude": -1.53652,
//     "Latitude": 52.2852,
//     "Safety Score": "42.5846335"
//   },
//   {
//     "Longitude": -1.53651,
//     "Latitude": 52.28748,
//     "Safety Score": "49.91463056"
//   },
//   {
//     "Longitude": -1.5365,
//     "Latitude": 52.28551,
//     "Safety Score": "30.04154198666667"
//   },
//   {
//     "Longitude": -1.53649,
//     "Latitude": 52.2858,
//     "Safety Score": "30.04154198666667"
//   },
//   {
//     "Longitude": -1.53647,
//     "Latitude": 52.28438,
//     "Safety Score": "49.91463056"
//   },
//   {
//     "Longitude": -1.53647,
//     "Latitude": 52.28623,
//     "Safety Score": "42.03447692666666"
//   },
//   {
//     "Longitude": -1.53646,
//     "Latitude": 52.28621,
//     "Safety Score": "37.371539043333335"
//   },
//   {
//     "Longitude": -1.5364,
//     "Latitude": 52.28772,
//     "Safety Score": "49.91463056"
//   },
//   {
//     "Longitude": -1.53638,
//     "Latitude": 52.28437,
//     "Safety Score": "49.91463056"
//   },
//   {
//     "Longitude": -1.53637,
//     "Latitude": 52.28514,
//     "Safety Score": "42.5846335"
//   },
//   {
//     "Longitude": -1.53637,
//     "Latitude": 52.28616,
//     "Safety Score": "54.57756844"
//   },
//   {
//     "Longitude": -1.53636,
//     "Latitude": 52.28574,
//     "Safety Score": "47.4153665"
//   },
//   {
//     "Longitude": -1.53633,
//     "Latitude": 52.28097,
//     "Safety Score": "38.874066219999996"
//   },
//   {
//     "Longitude": -1.53633,
//     "Latitude": 52.28588,
//     "Safety Score": "52.24609949999999"
//   },
//   {
//     "Longitude": -1.5363235,
//     "Latitude": 52.2878584,
//     "Safety Score": "53.45426992666666"
//   },
//   {
//     "Longitude": -1.53629,
//     "Latitude": 52.2861,
//     "Safety Score": "49.91463056"
//   },
//   {
//     "Longitude": -1.53628,
//     "Latitude": 52.28511,
//     "Safety Score": "28.28444521333333"
//   },
//   {
//     "Longitude": -1.53628,
//     "Latitude": 52.28597,
//     "Safety Score": "49.91463056"
//   },
//   {
//     "Longitude": -1.5362706,
//     "Latitude": 52.2879694,
//     "Safety Score": "53.45426992666666"
//   },
//   {
//     "Longitude": -1.53627,
//     "Latitude": 52.28797,
//     "Safety Score": "33.34535029333333"
//   },
//   {
//     "Longitude": -1.53626,
//     "Latitude": 52.28602,
//     "Safety Score": "54.57756844"
//   },
//   {
//     "Longitude": -1.53626,
//     "Latitude": 52.28604,
//     "Safety Score": "49.91463056"
//   },
//   {
//     "Longitude": -1.53626,
//     "Latitude": 52.28606,
//     "Safety Score": "54.57756844"
//   },
//   {
//     "Longitude": -1.53626,
//     "Latitude": 52.28855,
//     "Safety Score": "34.49636589666667"
//   },
//   {
//     "Longitude": -1.53621,
//     "Latitude": 52.28836,
//     "Safety Score": "32.19433468666667"
//   },
//   {
//     "Longitude": -1.5362,
//     "Latitude": 52.28831,
//     "Safety Score": "32.19433468666667"
//   },
//   {
//     "Longitude": -1.53619,
//     "Latitude": 52.28816,
//     "Safety Score": "33.34535029333333"
//   },
//   {
//     "Longitude": -1.53619,
//     "Latitude": 52.28827,
//     "Safety Score": "33.34535029333333"
//   },
//   {
//     "Longitude": -1.53618,
//     "Latitude": 52.28437,
//     "Safety Score": "31.949443740000003"
//   },
//   {
//     "Longitude": -1.53618,
//     "Latitude": 52.2851,
//     "Safety Score": "24.619446683333333"
//   },
//   {
//     "Longitude": -1.53616,
//     "Latitude": 52.2857,
//     "Safety Score": "54.57756844"
//   },
//   {
//     "Longitude": -1.5359592,
//     "Latitude": 52.2931277,
//     "Safety Score": "66.87665587"
//   },
//   {
//     "Longitude": -1.53592,
//     "Latitude": 52.2851,
//     "Safety Score": "31.949443740000003"
//   },
//   {
//     "Longitude": -1.53589,
//     "Latitude": 52.2856,
//     "Safety Score": "54.57756844"
//   },
//   {
//     "Longitude": -1.53586,
//     "Latitude": 52.28436,
//     "Safety Score": "31.949443740000003"
//   },
//   {
//     "Longitude": -1.53586,
//     "Latitude": 52.2844,
//     "Safety Score": "31.949443740000003"
//   },
//   {
//     "Longitude": -1.53582,
//     "Latitude": 52.28411,
//     "Safety Score": "71.48071828"
//   },
//   {
//     "Longitude": -1.5357703,
//     "Latitude": 52.2873121,
//     "Safety Score": "71.17456579"
//   },
//   {
//     "Longitude": -1.53577,
//     "Latitude": 52.28731,
//     "Safety Score": "71.17456579"
//   },
//   {
//     "Longitude": -1.53576,
//     "Latitude": 52.2919643,
//     "Safety Score": "56.75629137000001"
//   },
//   {
//     "Longitude": -1.53574,
//     "Latitude": 52.28728,
//     "Safety Score": "71.17456579"
//   },
//   {
//     "Longitude": -1.53571,
//     "Latitude": 52.28829,
//     "Safety Score": "32.19433468666667"
//   },
//   {
//     "Longitude": -1.5357,
//     "Latitude": 52.28509,
//     "Safety Score": "24.619446683333333"
//   },
//   {
//     "Longitude": -1.5356918,
//     "Latitude": 52.2874242,
//     "Safety Score": "71.17456579"
//   },
//   {
//     "Longitude": -1.53567,
//     "Latitude": 52.28556,
//     "Safety Score": "54.57756844"
//   },
//   {
//     "Longitude": -1.53566,
//     "Latitude": 52.28726,
//     "Safety Score": "71.17456579"
//   },
//   {
//     "Longitude": -1.53563,
//     "Latitude": 52.2844,
//     "Safety Score": "31.949443740000003"
//   },
//   {
//     "Longitude": -1.53562,
//     "Latitude": 52.28441,
//     "Safety Score": "31.949443740000003"
//   },
//   {
//     "Longitude": -1.53562,
//     "Latitude": 52.28725,
//     "Safety Score": "71.17456579"
//   },
//   {
//     "Longitude": -1.5356019,
//     "Latitude": 52.2762849,
//     "Safety Score": "41.9774965"
//   },
//   {
//     "Longitude": -1.5356,
//     "Latitude": 52.27628,
//     "Safety Score": "60.935400533333336"
//   },
//   {
//     "Longitude": -1.5356,
//     "Latitude": 52.28443,
//     "Safety Score": "31.949443740000003"
//   },
//   {
//     "Longitude": -1.5356,
//     "Latitude": 52.28726,
//     "Safety Score": "71.17456579"
//   },
//   {
//     "Longitude": -1.53559,
//     "Latitude": 52.28443,
//     "Safety Score": "31.949443740000003"
//   },
//   {
//     "Longitude": -1.53554,
//     "Latitude": 52.28444,
//     "Safety Score": "31.949443740000003"
//   },
//   {
//     "Longitude": -1.53554,
//     "Latitude": 52.28724,
//     "Safety Score": "71.17456579"
//   },
//   {
//     "Longitude": -1.53553,
//     "Latitude": 52.28508,
//     "Safety Score": "24.619446683333333"
//   },
//   {
//     "Longitude": -1.53552,
//     "Latitude": 52.29037,
//     "Safety Score": "63.674114040000006"
//   },
//   {
//     "Longitude": -1.53547,
//     "Latitude": 52.28995,
//     "Safety Score": "59.848639866666666"
//   },
//   {
//     "Longitude": -1.53546,
//     "Latitude": 52.28444,
//     "Safety Score": "28.28444521333333"
//   },
//   {
//     "Longitude": -1.53545,
//     "Latitude": 52.28451,
//     "Safety Score": "31.949443740000003"
//   },
//   {
//     "Longitude": -1.53545,
//     "Latitude": 52.28455,
//     "Safety Score": "24.619446683333333"
//   },
//   {
//     "Longitude": -1.53544,
//     "Latitude": 52.28459,
//     "Safety Score": "31.949443740000003"
//   },
//   {
//     "Longitude": -1.53544,
//     "Latitude": 52.28474,
//     "Safety Score": "24.619446683333333"
//   },
//   {
//     "Longitude": -1.53544,
//     "Latitude": 52.28479,
//     "Safety Score": "31.949443740000003"
//   },
//   {
//     "Longitude": -1.5354354,
//     "Latitude": 52.2897651,
//     "Safety Score": "52.61284357333333"
//   },
//   {
//     "Longitude": -1.53543,
//     "Latitude": 52.28972,
//     "Safety Score": "59.848639866666666"
//   },
//   {
//     "Longitude": -1.53542,
//     "Latitude": 52.28503,
//     "Safety Score": "24.619446683333333"
//   },
//   {
//     "Longitude": -1.53542,
//     "Latitude": 52.28506,
//     "Safety Score": "28.28444521333333"
//   },
//   {
//     "Longitude": -1.53541,
//     "Latitude": 52.28718,
//     "Safety Score": "71.17456579"
//   },
//   {
//     "Longitude": -1.53538,
//     "Latitude": 52.28554,
//     "Safety Score": "54.57756844"
//   },
//   {
//     "Longitude": -1.53536,
//     "Latitude": 52.28942,
//     "Safety Score": "57.57165772"
//   },
//   {
//     "Longitude": -1.53521,
//     "Latitude": 52.28855,
//     "Safety Score": "39.52433174666667"
//   },
//   {
//     "Longitude": -1.5352,
//     "Latitude": 52.28442,
//     "Safety Score": "24.619446683333333"
//   },
//   {
//     "Longitude": -1.5352,
//     "Latitude": 52.28779,
//     "Safety Score": "37.20278448"
//   },
//   {
//     "Longitude": -1.5352,
//     "Latitude": 52.28945,
//     "Safety Score": "57.57165772"
//   },
//   {
//     "Longitude": -1.53515,
//     "Latitude": 52.28842,
//     "Safety Score": "39.90812264666667"
//   },
//   {
//     "Longitude": -1.535144,
//     "Latitude": 52.2879016,
//     "Safety Score": "51.74798134333333"
//   },
//   {
//     "Longitude": -1.5351349,
//     "Latitude": 52.2840609,
//     "Safety Score": "56.95613777"
//   },
//   {
//     "Longitude": -1.53513,
//     "Latitude": 52.28406,
//     "Safety Score": "65.79923462"
//   },
//   {
//     "Longitude": -1.5351,
//     "Latitude": 52.28713,
//     "Safety Score": "71.17456579"
//   },
//   {
//     "Longitude": -1.53507,
//     "Latitude": 52.28436,
//     "Safety Score": "24.619446683333333"
//   },
//   {
//     "Longitude": -1.53501,
//     "Latitude": 52.28949,
//     "Safety Score": "73.7474242"
//   },
//   {
//     "Longitude": -1.53498,
//     "Latitude": 52.28131,
//     "Safety Score": "57.24462761"
//   },
//   {
//     "Longitude": -1.53491,
//     "Latitude": 52.28211,
//     "Safety Score": "38.986895239999996"
//   },
//   {
//     "Longitude": -1.5349,
//     "Latitude": 52.28223,
//     "Safety Score": "38.986895239999996"
//   },
//   {
//     "Longitude": -1.5349,
//     "Latitude": 52.28805,
//     "Safety Score": "42.23075033"
//   },
//   {
//     "Longitude": -1.53489,
//     "Latitude": 52.2843,
//     "Safety Score": "42.5846335"
//   },
//   {
//     "Longitude": -1.53487,
//     "Latitude": 52.28773,
//     "Safety Score": "37.20278448"
//   },
//   {
//     "Longitude": -1.53486,
//     "Latitude": 52.28243,
//     "Safety Score": "38.47298982666667"
//   },
//   {
//     "Longitude": -1.53485,
//     "Latitude": 52.2818,
//     "Safety Score": "54.73064469"
//   },
//   {
//     "Longitude": -1.53484,
//     "Latitude": 52.28429,
//     "Safety Score": "42.5846335"
//   },
//   {
//     "Longitude": -1.53484,
//     "Latitude": 52.2904,
//     "Safety Score": "63.674114040000006"
//   },
//   {
//     "Longitude": -1.5348337,
//     "Latitude": 52.2762555,
//     "Safety Score": "38.625519270000005"
//   },
//   {
//     "Longitude": -1.53483,
//     "Latitude": 52.27626,
//     "Safety Score": "60.935400533333336"
//   },
//   {
//     "Longitude": -1.5348,
//     "Latitude": 52.28793,
//     "Safety Score": "42.23075033"
//   },
//   {
//     "Longitude": -1.53478,
//     "Latitude": 52.28762,
//     "Safety Score": "52.21666176"
//   },
//   {
//     "Longitude": -1.53478,
//     "Latitude": 52.28793,
//     "Safety Score": "42.23075033"
//   },
//   {
//     "Longitude": -1.53476,
//     "Latitude": 52.28426,
//     "Safety Score": "42.5846335"
//   },
//   {
//     "Longitude": -1.53475,
//     "Latitude": 52.28151,
//     "Safety Score": "54.73064469"
//   },
//   {
//     "Longitude": -1.53475,
//     "Latitude": 52.28793,
//     "Safety Score": "42.23075033"
//   },
//   {
//     "Longitude": -1.53473,
//     "Latitude": 52.28422,
//     "Safety Score": "42.5846335"
//   },
//   {
//     "Longitude": -1.53472,
//     "Latitude": 52.28557,
//     "Safety Score": "35.25723656333333"
//   },
//   {
//     "Longitude": -1.53471,
//     "Latitude": 52.28138,
//     "Safety Score": "57.24462761"
//   },
//   {
//     "Longitude": -1.53471,
//     "Latitude": 52.28273,
//     "Safety Score": "38.47298982666667"
//   },
//   {
//     "Longitude": -1.53471,
//     "Latitude": 52.28785,
//     "Safety Score": "42.23075033"
//   },
//   {
//     "Longitude": -1.5347,
//     "Latitude": 52.28791,
//     "Safety Score": "42.23075033"
//   },
//   {
//     "Longitude": -1.53469,
//     "Latitude": 52.28788,
//     "Safety Score": "42.23075033"
//   },
//   {
//     "Longitude": -1.53468,
//     "Latitude": 52.28712,
//     "Safety Score": "71.17456579"
//   },
//   {
//     "Longitude": -1.53467,
//     "Latitude": 52.28779,
//     "Safety Score": "42.23075033"
//   },
//   {
//     "Longitude": -1.53464,
//     "Latitude": 52.28403,
//     "Safety Score": "42.5846335"
//   },
//   {
//     "Longitude": -1.53464,
//     "Latitude": 52.28413,
//     "Safety Score": "42.5846335"
//   },
//   {
//     "Longitude": -1.53462,
//     "Latitude": 52.28291,
//     "Safety Score": "37.78238543333333"
//   },
//   {
//     "Longitude": -1.5346,
//     "Latitude": 52.28099,
//     "Safety Score": "52.21666176"
//   },
//   {
//     "Longitude": -1.5346,
//     "Latitude": 52.28963,
//     "Safety Score": "73.7474242"
//   },
//   {
//     "Longitude": -1.5345806,
//     "Latitude": 52.2852996,
//     "Safety Score": "50.41082049"
//   },
//   {
//     "Longitude": -1.53458,
//     "Latitude": 52.2853,
//     "Safety Score": "35.54711722333334"
//   },
//   {
//     "Longitude": -1.5345,
//     "Latitude": 52.2807,
//     "Safety Score": "52.21666176"
//   },
//   {
//     "Longitude": -1.53446,
//     "Latitude": 52.28323,
//     "Safety Score": "40.130548563333335"
//   },
//   {
//     "Longitude": -1.53444,
//     "Latitude": 52.28751,
//     "Safety Score": "57.24462761"
//   },
//   {
//     "Longitude": -1.53444,
//     "Latitude": 52.28754,
//     "Safety Score": "57.24462761"
//   },
//   {
//     "Longitude": -1.53444,
//     "Latitude": 52.28755,
//     "Safety Score": "57.24462761"
//   },
//   {
//     "Longitude": -1.53441,
//     "Latitude": 52.28749,
//     "Safety Score": "57.24462761"
//   },
//   {
//     "Longitude": -1.53438,
//     "Latitude": 52.28337,
//     "Safety Score": "40.130548563333335"
//   },
//   {
//     "Longitude": -1.53438,
//     "Latitude": 52.28492,
//     "Safety Score": "35.14512022666667"
//   },
//   {
//     "Longitude": -1.53437,
//     "Latitude": 52.28037,
//     "Safety Score": "35.23709329"
//   },
//   {
//     "Longitude": -1.53436,
//     "Latitude": 52.28749,
//     "Safety Score": "57.24462761"
//   },
//   {
//     "Longitude": -1.53435,
//     "Latitude": 52.28345,
//     "Safety Score": "36.45919466666667"
//   },
//   {
//     "Longitude": -1.53434,
//     "Latitude": 52.28724,
//     "Safety Score": "52.21666176"
//   },
//   {
//     "Longitude": -1.53431,
//     "Latitude": 52.28036,
//     "Safety Score": "35.23709329"
//   },
//   {
//     "Longitude": -1.53426,
//     "Latitude": 52.28458,
//     "Safety Score": "32.337482683333334"
//   },
//   {
//     "Longitude": -1.53424,
//     "Latitude": 52.28029,
//     "Safety Score": "35.23709329"
//   },
//   {
//     "Longitude": -1.53421,
//     "Latitude": 52.28372,
//     "Safety Score": "36.45919466666667"
//   },
//   {
//     "Longitude": -1.53421,
//     "Latitude": 52.28727,
//     "Safety Score": "71.17456579"
//   },
//   {
//     "Longitude": -1.5342,
//     "Latitude": 52.27627,
//     "Safety Score": "63.96087198666667"
//   },
//   {
//     "Longitude": -1.53417,
//     "Latitude": 52.28735,
//     "Safety Score": "57.24462761"
//   },
//   {
//     "Longitude": -1.53414,
//     "Latitude": 52.28418,
//     "Safety Score": "38.43240029333333"
//   },
//   {
//     "Longitude": -1.53412,
//     "Latitude": 52.284,
//     "Safety Score": "44.29934171"
//   },
//   {
//     "Longitude": -1.5341,
//     "Latitude": 52.28729,
//     "Safety Score": "61.69561378"
//   },
//   {
//     "Longitude": -1.53394,
//     "Latitude": 52.28569,
//     "Safety Score": "37.10111256"
//   },
//   {
//     "Longitude": -1.53391,
//     "Latitude": 52.28478,
//     "Safety Score": "29.670423513333333"
//   },
//   {
//     "Longitude": -1.53386,
//     "Latitude": 52.28708,
//     "Safety Score": "71.17456579"
//   },
//   {
//     "Longitude": -1.53377,
//     "Latitude": 52.28475,
//     "Safety Score": "30.281965203333332"
//   },
//   {
//     "Longitude": -1.53365,
//     "Latitude": 52.28523,
//     "Safety Score": "38.204691063333335"
//   },
//   {
//     "Longitude": -1.53365,
//     "Latitude": 52.28526,
//     "Safety Score": "38.204691063333335"
//   },
//   {
//     "Longitude": -1.53364,
//     "Latitude": 52.28689,
//     "Safety Score": "52.21666176"
//   },
//   {
//     "Longitude": -1.53362,
//     "Latitude": 52.28688,
//     "Safety Score": "57.24462761"
//   },
//   {
//     "Longitude": -1.53361,
//     "Latitude": 52.2853,
//     "Safety Score": "38.204691063333335"
//   },
//   {
//     "Longitude": -1.53357,
//     "Latitude": 52.28506,
//     "Safety Score": "35.994636926666665"
//   },
//   {
//     "Longitude": -1.53357,
//     "Latitude": 52.28683,
//     "Safety Score": "54.57756844"
//   },
//   {
//     "Longitude": -1.53355,
//     "Latitude": 52.28503,
//     "Safety Score": "35.994636926666665"
//   },
//   {
//     "Longitude": -1.53352,
//     "Latitude": 52.28502,
//     "Safety Score": "35.994636926666665"
//   },
//   {
//     "Longitude": -1.533494,
//     "Latitude": 52.286249,
//     "Safety Score": "39.678607236666664"
//   },
//   {
//     "Longitude": -1.533494,
//     "Latitude": 52.290777,
//     "Safety Score": "61.58231207"
//   },
//   {
//     "Longitude": -1.53346,
//     "Latitude": 52.28486,
//     "Safety Score": "33.04938427"
//   },
//   {
//     "Longitude": -1.53345,
//     "Latitude": 52.28726,
//     "Safety Score": "71.17456579"
//   },
//   {
//     "Longitude": -1.53339,
//     "Latitude": 52.2869,
//     "Safety Score": "56.93847513"
//   },
//   {
//     "Longitude": -1.53338,
//     "Latitude": 52.28659,
//     "Safety Score": "40.29441153"
//   },
//   {
//     "Longitude": -1.53337,
//     "Latitude": 52.28729,
//     "Safety Score": "56.93847513"
//   },
//   {
//     "Longitude": -1.53332,
//     "Latitude": 52.28653,
//     "Safety Score": "38.51637208666667"
//   },
//   {
//     "Longitude": -1.53329,
//     "Latitude": 52.28714,
//     "Safety Score": "56.93847513"
//   },
//   {
//     "Longitude": -1.53327,
//     "Latitude": 52.28403,
//     "Safety Score": "34.86243609666667"
//   },
//   {
//     "Longitude": -1.5332444,
//     "Latitude": 52.2857939,
//     "Safety Score": "57.027503053333334"
//   },
//   {
//     "Longitude": -1.53323,
//     "Latitude": 52.28443,
//     "Safety Score": "33.216694503333336"
//   },
//   {
//     "Longitude": -1.53323,
//     "Latitude": 52.28699,
//     "Safety Score": "56.93847513"
//   },
//   {
//     "Longitude": -1.53322,
//     "Latitude": 52.28702,
//     "Safety Score": "56.93847513"
//   },
//   {
//     "Longitude": -1.53319,
//     "Latitude": 52.28699,
//     "Safety Score": "56.93847513"
//   },
//   {
//     "Longitude": -1.53318,
//     "Latitude": 52.28736,
//     "Safety Score": "64.05652046"
//   },
//   {
//     "Longitude": -1.53316,
//     "Latitude": 52.28403,
//     "Safety Score": "51.62428478666667"
//   },
//   {
//     "Longitude": -1.53316,
//     "Latitude": 52.28624,
//     "Safety Score": "35.55536123666666"
//   },
//   {
//     "Longitude": -1.53312,
//     "Latitude": 52.28613,
//     "Safety Score": "34.71599188"
//   },
//   {
//     "Longitude": -1.53311,
//     "Latitude": 52.27632,
//     "Safety Score": "63.96087198666667"
//   },
//   {
//     "Longitude": -1.5330837,
//     "Latitude": 52.285817,
//     "Safety Score": "55.45193535999999"
//   },
//   {
//     "Longitude": -1.53308,
//     "Latitude": 52.28573,
//     "Safety Score": "33.86839064"
//   },
//   {
//     "Longitude": -1.53308,
//     "Latitude": 52.28582,
//     "Safety Score": "36.49403132333333"
//   },
//   {
//     "Longitude": -1.5330768,
//     "Latitude": 52.2857262,
//     "Safety Score": "55.281402119999996"
//   },
//   {
//     "Longitude": -1.53303,
//     "Latitude": 52.28405,
//     "Safety Score": "34.86243609666667"
//   },
//   {
//     "Longitude": -1.53294,
//     "Latitude": 52.28545,
//     "Safety Score": "38.82497859666667"
//   },
//   {
//     "Longitude": -1.53289,
//     "Latitude": 52.2875,
//     "Safety Score": "64.05652046"
//   },
//   {
//     "Longitude": -1.53262,
//     "Latitude": 52.28409,
//     "Safety Score": "57.94979721000001"
//   },
//   {
//     "Longitude": -1.5325758,
//     "Latitude": 52.2847851,
//     "Safety Score": "58.59154723666666"
//   },
//   {
//     "Longitude": -1.53256,
//     "Latitude": 52.28765,
//     "Safety Score": "56.93847513"
//   },
//   {
//     "Longitude": -1.53234,
//     "Latitude": 52.28774,
//     "Safety Score": "64.05652046"
//   },
//   {
//     "Longitude": -1.5322,
//     "Latitude": 52.27632,
//     "Safety Score": "57.37221959666667"
//   },
//   {
//     "Longitude": -1.53214,
//     "Latitude": 52.28418,
//     "Safety Score": "57.94979721000001"
//   },
//   {
//     "Longitude": -1.5321236,
//     "Latitude": 52.2841693,
//     "Safety Score": "59.58653551"
//   },
//   {
//     "Longitude": -1.53212,
//     "Latitude": 52.28416,
//     "Safety Score": "57.94979721000001"
//   },
//   {
//     "Longitude": -1.53203,
//     "Latitude": 52.28407,
//     "Safety Score": "57.94979721000001"
//   },
//   {
//     "Longitude": -1.53196,
//     "Latitude": 52.28394,
//     "Safety Score": "57.94979721000001"
//   },
//   {
//     "Longitude": -1.53189,
//     "Latitude": 52.2863,
//     "Safety Score": "36.10197092333333"
//   },
//   {
//     "Longitude": -1.53186,
//     "Latitude": 52.28632,
//     "Safety Score": "36.10197092333333"
//   },
//   {
//     "Longitude": -1.5318264,
//     "Latitude": 52.2861809,
//     "Safety Score": "43.22001626"
//   },
//   {
//     "Longitude": -1.53174,
//     "Latitude": 52.28799,
//     "Safety Score": "64.05652046"
//   },
//   {
//     "Longitude": -1.5316,
//     "Latitude": 52.28578,
//     "Safety Score": "35.24100694333333"
//   },
//   {
//     "Longitude": -1.53153,
//     "Latitude": 52.2844,
//     "Safety Score": "35.01614554666667"
//   },
//   {
//     "Longitude": -1.53153,
//     "Latitude": 52.28806,
//     "Safety Score": "57.054277793333334"
//   },
//   {
//     "Longitude": -1.5315297,
//     "Latitude": 52.284399,
//     "Safety Score": "35.01614554666667"
//   },
//   {
//     "Longitude": -1.53146,
//     "Latitude": 52.28538,
//     "Safety Score": "34.23204412333333"
//   },
//   {
//     "Longitude": -1.53145,
//     "Latitude": 52.28485,
//     "Safety Score": "35.14316564666667"
//   },
//   {
//     "Longitude": -1.53128,
//     "Latitude": 52.28638,
//     "Safety Score": "36.10197092333333"
//   },
//   {
//     "Longitude": -1.5312424,
//     "Latitude": 52.28236,
//     "Safety Score": "63.341001129999995"
//   },
//   {
//     "Longitude": -1.53124,
//     "Latitude": 52.28236,
//     "Safety Score": "61.704262836666665"
//   },
//   {
//     "Longitude": -1.53106,
//     "Latitude": 52.28821,
//     "Safety Score": "42.81818712333333"
//   },
//   {
//     "Longitude": -1.53088,
//     "Latitude": 52.27635,
//     "Safety Score": "76.20253165"
//   },
//   {
//     "Longitude": -1.5307,
//     "Latitude": 52.2883,
//     "Safety Score": "49.93623245333333"
//   },
//   {
//     "Longitude": -1.53065,
//     "Latitude": 52.28838,
//     "Safety Score": "42.87853449"
//   },
//   {
//     "Longitude": -1.53063,
//     "Latitude": 52.2885,
//     "Safety Score": "42.87853449"
//   },
//   {
//     "Longitude": -1.5306291,
//     "Latitude": 52.288495,
//     "Safety Score": "41.95713325333333"
//   },
//   {
//     "Longitude": -1.52981,
//     "Latitude": 52.2793,
//     "Safety Score": "47.67703534"
//   },
//   {
//     "Longitude": -1.5298098,
//     "Latitude": 52.2792974,
//     "Safety Score": "45.16305241"
//   },
//   {
//     "Longitude": -1.52971,
//     "Latitude": 52.27637,
//     "Safety Score": "76.20253165"
//   },
//   {
//     "Longitude": -1.52949,
//     "Latitude": 52.28657,
//     "Safety Score": "52.21666176"
//   },
//   {
//     "Longitude": -1.5284333,
//     "Latitude": 52.2763825,
//     "Safety Score": "52.21666176"
//   },
//   {
//     "Longitude": -1.52843,
//     "Latitude": 52.27638,
//     "Safety Score": "69.02561083"
//   },
//   {
//     "Longitude": -1.52703,
//     "Latitude": 52.27642,
//     "Safety Score": "59.45528851333333"
//   },
//   {
//     "Longitude": -1.52697,
//     "Latitude": 52.27642,
//     "Safety Score": "59.45528851333333"
//   },
//   {
//     "Longitude": -1.52694,
//     "Latitude": 52.27606,
//     "Safety Score": "59.45528851333333"
//   },
//   {
//     "Longitude": -1.52691,
//     "Latitude": 52.27593,
//     "Safety Score": "76.20253165"
//   },
//   {
//     "Longitude": -1.52685,
//     "Latitude": 52.2758,
//     "Safety Score": "76.20253165"
//   },
//   {
//     "Longitude": -1.52666,
//     "Latitude": 52.27543,
//     "Safety Score": "76.20253165"
//   },
//   {
//     "Longitude": -1.52654,
//     "Latitude": 52.27517,
//     "Safety Score": "76.20253165"
//   },
//   {
//     "Longitude": -1.52648,
//     "Latitude": 52.27509,
//     "Safety Score": "55.17502372333333"
//   },
//   {
//     "Longitude": -1.52646,
//     "Latitude": 52.28688,
//     "Safety Score": "52.21666176"
//   },
//   {
//     "Longitude": -1.52629,
//     "Latitude": 52.27488,
//     "Safety Score": "55.17502372333333"
//   },
//   {
//     "Longitude": -1.52624,
//     "Latitude": 52.27645,
//     "Safety Score": "45.10144689333333"
//   },
//   {
//     "Longitude": -1.526155,
//     "Latitude": 52.272517,
//     "Safety Score": "42.05617521666667"
//   },
//   {
//     "Longitude": -1.526155,
//     "Latitude": 52.286249,
//     "Safety Score": "31.727812566666667"
//   },
//   {
//     "Longitude": -1.52606,
//     "Latitude": 52.27472,
//     "Safety Score": "55.17502372333333"
//   },
//   {
//     "Longitude": -1.52582,
//     "Latitude": 52.27458,
//     "Safety Score": "55.17502372333333"
//   },
//   {
//     "Longitude": -1.5256998,
//     "Latitude": 52.2721847,
//     "Safety Score": "41.966244753333335"
//   },
//   {
//     "Longitude": -1.52549,
//     "Latitude": 52.27444,
//     "Safety Score": "55.17502372333333"
//   },
//   {
//     "Longitude": -1.525,
//     "Latitude": 52.27424,
//     "Safety Score": "76.20253165"
//   },
//   {
//     "Longitude": -1.52497,
//     "Latitude": 52.27646,
//     "Safety Score": "61.84869002"
//   },
//   {
//     "Longitude": -1.52487,
//     "Latitude": 52.2742,
//     "Safety Score": "61.66720566"
//   },
//   {
//     "Longitude": -1.52483,
//     "Latitude": 52.28707,
//     "Safety Score": "35.66729667333333"
//   },
//   {
//     "Longitude": -1.52477,
//     "Latitude": 52.27432,
//     "Safety Score": "61.66720566"
//   },
//   {
//     "Longitude": -1.52474,
//     "Latitude": 52.27435,
//     "Safety Score": "61.66720566"
//   },
//   {
//     "Longitude": -1.5244127,
//     "Latitude": 52.2867355,
//     "Safety Score": "35.66729667333333"
//   },
//   {
//     "Longitude": -1.52441,
//     "Latitude": 52.28674,
//     "Safety Score": "35.66729667333333"
//   },
//   {
//     "Longitude": -1.52409,
//     "Latitude": 52.27643,
//     "Safety Score": "61.84869002"
//   },
//   {
//     "Longitude": -1.52292,
//     "Latitude": 52.27638,
//     "Safety Score": "61.84869002"
//   },
//   {
//     "Longitude": -1.52168,
//     "Latitude": 52.27632,
//     "Safety Score": "42.33607471"
//   },
//   {
//     "Longitude": -1.52121,
//     "Latitude": 52.27633,
//     "Safety Score": "61.84869002"
//   },
//   {
//     "Longitude": -1.52057,
//     "Latitude": 52.27641,
//     "Safety Score": "61.84869002"
//   },
//   {
//     "Longitude": -1.52028,
//     "Latitude": 52.27645,
//     "Safety Score": "61.84869002"
//   },
//   {
//     "Longitude": -1.52008,
//     "Latitude": 52.27648,
//     "Safety Score": "61.84869002"
//   },
//   {
//     "Longitude": -1.51993,
//     "Latitude": 52.27645,
//     "Safety Score": "61.84869002"
//   },
//   {
//     "Longitude": -1.51919,
//     "Latitude": 52.27646,
//     "Safety Score": "61.84869002"
//   },
//   {
//     "Longitude": -1.51873,
//     "Latitude": 52.27635,
//     "Safety Score": "61.84869002"
//   },
//   {
//     "Longitude": -1.518688,
//     "Latitude": 52.277348,
//     "Safety Score": "38.09392772666667"
//   },
//   {
//     "Longitude": -1.51851,
//     "Latitude": 52.27633,
//     "Safety Score": "61.84869002"
//   },
//   {
//     "Longitude": -1.51758,
//     "Latitude": 52.27608,
//     "Safety Score": "61.84869002"
//   },
//   {
//     "Longitude": -1.51742,
//     "Latitude": 52.27607,
//     "Safety Score": "61.84869002"
//   },
//   {
//     "Longitude": -1.51715,
//     "Latitude": 52.27598,
//     "Safety Score": "61.84869002"
//   },
//   {
//     "Longitude": -1.51677,
//     "Latitude": 52.27587,
//     "Safety Score": "61.84869002"
//   },
//   {
//     "Longitude": -1.51667,
//     "Latitude": 52.27585,
//     "Safety Score": "61.84869002"
//   },
//   {
//     "Longitude": -1.51665,
//     "Latitude": 52.27586,
//     "Safety Score": "61.84869002"
//   },
//   {
//     "Longitude": -1.51663,
//     "Latitude": 52.27593,
//     "Safety Score": "61.84869002"
//   },
//   {
//     "Longitude": -1.51643,
//     "Latitude": 52.27595,
//     "Safety Score": "46.98895181666666"
//   },
//   {
//     "Longitude": -1.5164124,
//     "Latitude": 52.2760706,
//     "Safety Score": "37.356923556666665"
//   },
//   {
//     "Longitude": -1.51641,
//     "Latitude": 52.27619,
//     "Safety Score": "46.98895181666666"
//   }
//  ]

let updated_safety_scores = 
[
  {
    "Longitude": -1.58454,
    "Latitude": 52.29014,
    "Safety Score": 66.57050339
  },
  {
    "Longitude": -1.5845361,
    "Latitude": 52.2901428,
    "Safety Score": 59.45245805
  },
  {
    "Longitude": -1.58442,
    "Latitude": 52.29019,
    "Safety Score": 66.57050339
  },
  {
    "Longitude": -1.58405,
    "Latitude": 52.29035,
    "Safety Score": 66.57050339
  },
  {
    "Longitude": -1.58365,
    "Latitude": 52.29047,
    "Safety Score": 66.57050339
  },
  {
    "Longitude": -1.58311,
    "Latitude": 52.29086,
    "Safety Score": 66.57050339
  },
  {
    "Longitude": -1.58309,
    "Latitude": 52.29081,
    "Safety Score": 66.57050339
  },
  {
    "Longitude": -1.5830862,
    "Latitude": 52.290809,
    "Safety Score": 52.21666176
  },
  {
    "Longitude": -1.5830234,
    "Latitude": 52.2909716,
    "Safety Score": 52.21666176
  },
  {
    "Longitude": -1.58302,
    "Latitude": 52.29097,
    "Safety Score": 66.57050339
  },
  {
    "Longitude": -1.58299,
    "Latitude": 52.29071,
    "Safety Score": 66.57050339
  },
  {
    "Longitude": -1.5829859,
    "Latitude": 52.2907119,
    "Safety Score": 52.21666176
  },
  {
    "Longitude": -1.58286,
    "Latitude": 52.29094,
    "Safety Score": 66.57050339
  },
  {
    "Longitude": -1.58276,
    "Latitude": 52.29093,
    "Safety Score": 71.48071828
  },
  {
    "Longitude": -1.58259,
    "Latitude": 52.29094,
    "Safety Score": 61.66028849
  },
  {
    "Longitude": -1.58167,
    "Latitude": 52.29095,
    "Safety Score": 66.57050339
  },
  {
    "Longitude": -1.58136,
    "Latitude": 52.29092,
    "Safety Score": 66.57050339
  },
  {
    "Longitude": -1.58082,
    "Latitude": 52.29081,
    "Safety Score": 66.57050339
  },
  {
    "Longitude": -1.58028,
    "Latitude": 52.29064,
    "Safety Score": 66.57050339
  },
  {
    "Longitude": -1.58019,
    "Latitude": 52.29057,
    "Safety Score": 71.48071828
  },
  {
    "Longitude": -1.58014,
    "Latitude": 52.29051,
    "Safety Score": 66.57050339
  },
  {
    "Longitude": -1.58006,
    "Latitude": 52.29026,
    "Safety Score": 66.57050339
  },
  {
    "Longitude": -1.57997,
    "Latitude": 52.29015,
    "Safety Score": 66.57050339
  },
  {
    "Longitude": -1.57979,
    "Latitude": 52.29004,
    "Safety Score": 66.57050339
  },
  {
    "Longitude": -1.57966,
    "Latitude": 52.28998,
    "Safety Score": 66.57050339
  },
  {
    "Longitude": -1.579364,
    "Latitude": 52.2899038,
    "Safety Score": 52.21666176
  },
  {
    "Longitude": -1.57936,
    "Latitude": 52.2899,
    "Safety Score": 66.57050339
  },
  {
    "Longitude": -1.5792,
    "Latitude": 52.28991,
    "Safety Score": 66.57050339
  },
  {
    "Longitude": -1.57908,
    "Latitude": 52.28997,
    "Safety Score": 66.57050339
  },
  {
    "Longitude": -1.57894,
    "Latitude": 52.29001,
    "Safety Score": 66.57050339
  },
  {
    "Longitude": -1.57887,
    "Latitude": 52.29001,
    "Safety Score": 61.66028849
  },
  {
    "Longitude": -1.5785805,
    "Latitude": 52.2899654,
    "Safety Score": 52.21666176
  },
  {
    "Longitude": -1.57858,
    "Latitude": 52.28997,
    "Safety Score": 66.57050339
  },
  {
    "Longitude": -1.5783038,
    "Latitude": 52.291387,
    "Safety Score": 52.21666176
  },
  {
    "Longitude": -1.5783,
    "Latitude": 52.29139,
    "Safety Score": 66.57050339
  },
  {
    "Longitude": -1.57827,
    "Latitude": 52.29054,
    "Safety Score": 61.66028849
  },
  {
    "Longitude": -1.5782611,
    "Latitude": 52.2914035,
    "Safety Score": 52.21666176
  },
  {
    "Longitude": -1.57826,
    "Latitude": 52.2914,
    "Safety Score": 71.48071828
  },
  {
    "Longitude": -1.57826,
    "Latitude": 52.29141,
    "Safety Score": 61.66028849
  },
  {
    "Longitude": -1.57822,
    "Latitude": 52.29134,
    "Safety Score": 66.57050339
  },
  {
    "Longitude": -1.57815,
    "Latitude": 52.29078,
    "Safety Score": 71.48071828
  },
  {
    "Longitude": -1.57814,
    "Latitude": 52.2913,
    "Safety Score": 66.57050339
  },
  {
    "Longitude": -1.57803,
    "Latitude": 52.29125,
    "Safety Score": 71.48071828
  },
  {
    "Longitude": -1.57801,
    "Latitude": 52.29134,
    "Safety Score": 66.57050339
  },
  {
    "Longitude": -1.57799,
    "Latitude": 52.29134,
    "Safety Score": 61.66028849
  },
  {
    "Longitude": -1.57794,
    "Latitude": 52.29121,
    "Safety Score": 61.66028849
  },
  {
    "Longitude": -1.57793,
    "Latitude": 52.29122,
    "Safety Score": 61.66028849
  },
  {
    "Longitude": -1.57789,
    "Latitude": 52.2913,
    "Safety Score": 66.57050339
  },
  {
    "Longitude": -1.5778892,
    "Latitude": 52.2913023,
    "Safety Score": 52.21666176
  },
  {
    "Longitude": -1.57778,
    "Latitude": 52.29117,
    "Safety Score": 71.48071828
  },
  {
    "Longitude": -1.57764,
    "Latitude": 52.29116,
    "Safety Score": 61.66028849
  },
  {
    "Longitude": -1.57753,
    "Latitude": 52.29114,
    "Safety Score": 71.48071828
  },
  {
    "Longitude": -1.57742,
    "Latitude": 52.29111,
    "Safety Score": 61.66028849
  },
  {
    "Longitude": -1.57684,
    "Latitude": 52.29094,
    "Safety Score": 66.57050339
  },
  {
    "Longitude": -1.57659,
    "Latitude": 52.29084,
    "Safety Score": 61.66028849
  },
  {
    "Longitude": -1.57535,
    "Latitude": 52.29034,
    "Safety Score": 61.66028849
  },
  {
    "Longitude": -1.57507,
    "Latitude": 52.29023,
    "Safety Score": 66.57050339
  },
  {
    "Longitude": -1.57412,
    "Latitude": 52.28994,
    "Safety Score": 61.66028849
  },
  {
    "Longitude": -1.57311,
    "Latitude": 52.28964,
    "Safety Score": 71.48071828
  },
  {
    "Longitude": -1.5725,
    "Latitude": 52.28947,
    "Safety Score": 44.71007241
  },
  {
    "Longitude": -1.57167,
    "Latitude": 52.28924,
    "Safety Score": 56.05764421
  },
  {
    "Longitude": -1.57006,
    "Latitude": 52.2888,
    "Safety Score": 44.76192377
  },
  {
    "Longitude": -1.570058,
    "Latitude": 52.286249,
    "Safety Score": 50.60033026
  },
  {
    "Longitude": -1.56897,
    "Latitude": 52.2885,
    "Safety Score": 56.78348881
  },
  {
    "Longitude": -1.56838,
    "Latitude": 52.28835,
    "Safety Score": 46.96305902
  },
  {
    "Longitude": -1.56762,
    "Latitude": 52.28815,
    "Safety Score": 45.52205642
  },
  {
    "Longitude": -1.56727,
    "Latitude": 52.28806,
    "Safety Score": 54.98833977
  },
  {
    "Longitude": -1.5668,
    "Latitude": 52.28796,
    "Safety Score": 45.72036093
  },
  {
    "Longitude": -1.5667,
    "Latitude": 52.28793,
    "Safety Score": 55.54079072
  },
  {
    "Longitude": -1.56659,
    "Latitude": 52.28788,
    "Safety Score": 45.78259645
  },
  {
    "Longitude": -1.56656,
    "Latitude": 52.28788,
    "Safety Score": 55.60302624
  },
  {
    "Longitude": -1.56643,
    "Latitude": 52.28788,
    "Safety Score": 45.78259645
  },
  {
    "Longitude": -1.5663,
    "Latitude": 52.28787,
    "Safety Score": 55.60302624
  },
  {
    "Longitude": -1.56596,
    "Latitude": 52.28782,
    "Safety Score": 44.95819154
  },
  {
    "Longitude": -1.56568,
    "Latitude": 52.28776,
    "Safety Score": 54.73834798
  },
  {
    "Longitude": -1.5655,
    "Latitude": 52.28772,
    "Safety Score": 44.91791819
  },
  {
    "Longitude": -1.56534,
    "Latitude": 52.28766,
    "Safety Score": 49.9030295
  },
  {
    "Longitude": -1.56522,
    "Latitude": 52.2876,
    "Safety Score": 49.9030295
  },
  {
    "Longitude": -1.56515,
    "Latitude": 52.28753,
    "Safety Score": 54.81324439
  },
  {
    "Longitude": -1.56509,
    "Latitude": 52.28748,
    "Safety Score": 44.9928146
  },
  {
    "Longitude": -1.56501,
    "Latitude": 52.28743,
    "Safety Score": 49.9030295
  },
  {
    "Longitude": -1.56499,
    "Latitude": 52.28744,
    "Safety Score": 44.9928146
  },
  {
    "Longitude": -1.56498,
    "Latitude": 52.28742,
    "Safety Score": 45.17683524
  },
  {
    "Longitude": -1.56498,
    "Latitude": 52.28746,
    "Safety Score": 45.17683524
  },
  {
    "Longitude": -1.56476,
    "Latitude": 52.28752,
    "Safety Score": 45.17683524
  },
  {
    "Longitude": -1.56476,
    "Latitude": 52.28757,
    "Safety Score": 45.17683524
  },
  {
    "Longitude": -1.56472,
    "Latitude": 52.28731,
    "Safety Score": 54.99726504
  },
  {
    "Longitude": -1.56445,
    "Latitude": 52.28726,
    "Safety Score": 54.92171643
  },
  {
    "Longitude": -1.56437,
    "Latitude": 52.28766,
    "Safety Score": 45.10128664
  },
  {
    "Longitude": -1.56431,
    "Latitude": 52.28574,
    "Safety Score": 57.68167511
  },
  {
    "Longitude": -1.56422,
    "Latitude": 52.28592,
    "Safety Score": 56.79969926
  },
  {
    "Longitude": -1.56413,
    "Latitude": 52.28726,
    "Safety Score": 54.81638701
  },
  {
    "Longitude": -1.5641,
    "Latitude": 52.28775,
    "Safety Score": 44.99595722
  },
  {
    "Longitude": -1.56407,
    "Latitude": 52.28619,
    "Safety Score": 57.06505768
  },
  {
    "Longitude": -1.56386,
    "Latitude": 52.28648,
    "Safety Score": 54.84188444
  },
  {
    "Longitude": -1.56382,
    "Latitude": 52.28727,
    "Safety Score": 54.81638701
  },
  {
    "Longitude": -1.56382,
    "Latitude": 52.28784,
    "Safety Score": 44.99595722
  },
  {
    "Longitude": -1.56379,
    "Latitude": 52.28656,
    "Safety Score": 54.77098977
  },
  {
    "Longitude": -1.56333,
    "Latitude": 52.28726,
    "Safety Score": 54.81638701
  },
  {
    "Longitude": -1.56332,
    "Latitude": 52.28552,
    "Safety Score": 58.20855806
  },
  {
    "Longitude": -1.56326,
    "Latitude": 52.28549,
    "Safety Score": 58.14222067
  },
  {
    "Longitude": -1.56319,
    "Latitude": 52.28644,
    "Safety Score": 54.84188444
  },
  {
    "Longitude": -1.56318,
    "Latitude": 52.2854,
    "Safety Score": 58.14222067
  },
  {
    "Longitude": -1.56298,
    "Latitude": 52.28821,
    "Safety Score": 44.69986589
  },
  {
    "Longitude": -1.56292,
    "Latitude": 52.28721,
    "Safety Score": 54.90272569
  },
  {
    "Longitude": -1.56291,
    "Latitude": 52.2851,
    "Safety Score": 58.84442199
  },
  {
    "Longitude": -1.56258,
    "Latitude": 52.28525,
    "Safety Score": 58.84442199
  },
  {
    "Longitude": -1.56206,
    "Latitude": 52.28705,
    "Safety Score": 55.0102402
  },
  {
    "Longitude": -1.56201,
    "Latitude": 52.28866,
    "Safety Score": 42.31391726
  },
  {
    "Longitude": -1.56199,
    "Latitude": 52.2856,
    "Safety Score": 57.49935225
  },
  {
    "Longitude": -1.56179,
    "Latitude": 52.28874,
    "Safety Score": 42.64604514
  },
  {
    "Longitude": -1.56141,
    "Latitude": 52.28885,
    "Safety Score": 42.59122601
  },
  {
    "Longitude": -1.56127,
    "Latitude": 52.28683,
    "Safety Score": 53.29083624
  },
  {
    "Longitude": -1.56105,
    "Latitude": 52.28675,
    "Safety Score": 53.06142883
  },
  {
    "Longitude": -1.56102,
    "Latitude": 52.28634,
    "Safety Score": 53.45756347
  },
  {
    "Longitude": -1.56092,
    "Latitude": 52.28669,
    "Safety Score": 53.61613556
  },
  {
    "Longitude": -1.56086,
    "Latitude": 52.28683,
    "Safety Score": 53.48233038
  },
  {
    "Longitude": -1.56084,
    "Latitude": 52.28665,
    "Safety Score": 53.63055648
  },
  {
    "Longitude": -1.56082,
    "Latitude": 52.28662,
    "Safety Score": 53.93670897
  },
  {
    "Longitude": -1.56078,
    "Latitude": 52.28681,
    "Safety Score": 53.48233038
  },
  {
    "Longitude": -1.56076,
    "Latitude": 52.28646,
    "Safety Score": 53.37766459
  },
  {
    "Longitude": -1.56075,
    "Latitude": 52.28658,
    "Safety Score": 53.63055648
  },
  {
    "Longitude": -1.56066,
    "Latitude": 52.28653,
    "Safety Score": 53.68381708
  },
  {
    "Longitude": -1.56064,
    "Latitude": 52.28655,
    "Safety Score": 53.63055648
  },
  {
    "Longitude": -1.56061,
    "Latitude": 52.28658,
    "Safety Score": 53.63055648
  },
  {
    "Longitude": -1.56055,
    "Latitude": 52.28646,
    "Safety Score": 53.37766459
  },
  {
    "Longitude": -1.56041,
    "Latitude": 52.28639,
    "Safety Score": 55.41914266
  },
  {
    "Longitude": -1.56032,
    "Latitude": 52.28636,
    "Safety Score": 55.11299017
  },
  {
    "Longitude": -1.56024,
    "Latitude": 52.28633,
    "Safety Score": 57.80550474
  },
  {
    "Longitude": -1.56011,
    "Latitude": 52.2863,
    "Safety Score": 57.49935225
  },
  {
    "Longitude": -1.56007,
    "Latitude": 52.28628,
    "Safety Score": 57.80550474
  },
  {
    "Longitude": -1.56007,
    "Latitude": 52.28924,
    "Safety Score": 43.22313454
  },
  {
    "Longitude": -1.55979,
    "Latitude": 52.28617,
    "Safety Score": 57.49935225
  },
  {
    "Longitude": -1.55954,
    "Latitude": 52.28937,
    "Safety Score": 43.22313454
  },
  {
    "Longitude": -1.55937,
    "Latitude": 52.28603,
    "Safety Score": 57.80550474
  },
  {
    "Longitude": -1.55918,
    "Latitude": 52.28946,
    "Safety Score": 43.22313454
  },
  {
    "Longitude": -1.5591778,
    "Latitude": 52.2894565,
    "Safety Score": 48.25110039
  },
  {
    "Longitude": -1.55897,
    "Latitude": 52.2859,
    "Safety Score": 57.49935225
  },
  {
    "Longitude": -1.55874,
    "Latitude": 52.28582,
    "Safety Score": 57.80550474
  },
  {
    "Longitude": -1.55855,
    "Latitude": 52.2895,
    "Safety Score": 43.5234292
  },
  {
    "Longitude": -1.55808,
    "Latitude": 52.28554,
    "Safety Score": 57.05672382
  },
  {
    "Longitude": -1.55803,
    "Latitude": 52.2855,
    "Safety Score": 54.53245903
  },
  {
    "Longitude": -1.55795,
    "Latitude": 52.28544,
    "Safety Score": 54.53245903
  },
  {
    "Longitude": -1.55792,
    "Latitude": 52.28945,
    "Safety Score": 45.26749034
  },
  {
    "Longitude": -1.5579,
    "Latitude": 52.28542,
    "Safety Score": 54.22630654
  },
  {
    "Longitude": -1.55786,
    "Latitude": 52.28541,
    "Safety Score": 54.53245903
  },
  {
    "Longitude": -1.55777,
    "Latitude": 52.2854,
    "Safety Score": 54.53245903
  },
  {
    "Longitude": -1.55773,
    "Latitude": 52.28538,
    "Safety Score": 54.22630654
  },
  {
    "Longitude": -1.55769,
    "Latitude": 52.28536,
    "Safety Score": 54.53245903
  },
  {
    "Longitude": -1.55704,
    "Latitude": 52.28502,
    "Safety Score": 55.27762314
  },
  {
    "Longitude": -1.5567,
    "Latitude": 52.28944,
    "Safety Score": 45.60959042
  },
  {
    "Longitude": -1.55646,
    "Latitude": 52.28471,
    "Safety Score": 55.43069938
  },
  {
    "Longitude": -1.55642,
    "Latitude": 52.28464,
    "Safety Score": 55.58377562
  },
  {
    "Longitude": -1.55636,
    "Latitude": 52.28459,
    "Safety Score": 55.58377562
  },
  {
    "Longitude": -1.55604,
    "Latitude": 52.28443,
    "Safety Score": 55.58377562
  },
  {
    "Longitude": -1.55596,
    "Latitude": 52.28439,
    "Safety Score": 55.58377562
  },
  {
    "Longitude": -1.55584,
    "Latitude": 52.28434,
    "Safety Score": 55.77737676
  },
  {
    "Longitude": -1.55544,
    "Latitude": 52.28476,
    "Safety Score": 55.27762314
  },
  {
    "Longitude": -1.55518,
    "Latitude": 52.28951,
    "Safety Score": 44.39153731
  },
  {
    "Longitude": -1.55485,
    "Latitude": 52.28376,
    "Safety Score": 55.0974391
  },
  {
    "Longitude": -1.55438,
    "Latitude": 52.28483,
    "Safety Score": 58.2899006
  },
  {
    "Longitude": -1.55428,
    "Latitude": 52.28486,
    "Safety Score": 58.2899006
  },
  {
    "Longitude": -1.55396,
    "Latitude": 52.28315,
    "Safety Score": 55.35077628
  },
  {
    "Longitude": -1.55395,
    "Latitude": 52.28491,
    "Safety Score": 58.2899006
  },
  {
    "Longitude": -1.55372,
    "Latitude": 52.28958,
    "Safety Score": 44.59853333
  },
  {
    "Longitude": -1.55368,
    "Latitude": 52.28295,
    "Safety Score": 55.35077628
  },
  {
    "Longitude": -1.55357,
    "Latitude": 52.28959,
    "Safety Score": 44.59853333
  },
  {
    "Longitude": -1.55356,
    "Latitude": 52.28494,
    "Safety Score": 58.2899006
  },
  {
    "Longitude": -1.55354,
    "Latitude": 52.28279,
    "Safety Score": 55.35077628
  },
  {
    "Longitude": -1.55349,
    "Latitude": 52.28275,
    "Safety Score": 55.35077628
  },
  {
    "Longitude": -1.55344,
    "Latitude": 52.28958,
    "Safety Score": 44.59853333
  },
  {
    "Longitude": -1.55343,
    "Latitude": 52.28959,
    "Safety Score": 44.6772323
  },
  {
    "Longitude": -1.55341,
    "Latitude": 52.28959,
    "Safety Score": 44.6772323
  },
  {
    "Longitude": -1.55339,
    "Latitude": 52.28959,
    "Safety Score": 44.6772323
  },
  {
    "Longitude": -1.55338,
    "Latitude": 52.28959,
    "Safety Score": 44.6772323
  },
  {
    "Longitude": -1.55337,
    "Latitude": 52.2827,
    "Safety Score": 55.35077628
  },
  {
    "Longitude": -1.55337,
    "Latitude": 52.28959,
    "Safety Score": 44.6772323
  },
  {
    "Longitude": -1.55327,
    "Latitude": 52.2896,
    "Safety Score": 44.6772323
  },
  {
    "Longitude": -1.55306,
    "Latitude": 52.2896,
    "Safety Score": 44.6772323
  },
  {
    "Longitude": -1.5530564,
    "Latitude": 52.2896032,
    "Safety Score": 49.70519815
  },
  {
    "Longitude": -1.55296,
    "Latitude": 52.28252,
    "Safety Score": 55.35077628
  },
  {
    "Longitude": -1.55289,
    "Latitude": 52.28499,
    "Safety Score": 58.2899006
  },
  {
    "Longitude": -1.55269,
    "Latitude": 52.28245,
    "Safety Score": 55.35077628
  },
  {
    "Longitude": -1.55258,
    "Latitude": 52.2896,
    "Safety Score": 44.46556861
  },
  {
    "Longitude": -1.55252,
    "Latitude": 52.28244,
    "Safety Score": 54.79443504
  },
  {
    "Longitude": -1.5523,
    "Latitude": 52.28506,
    "Safety Score": 58.44918436
  },
  {
    "Longitude": -1.55215,
    "Latitude": 52.28248,
    "Safety Score": 58.80167225
  },
  {
    "Longitude": -1.55178,
    "Latitude": 52.28517,
    "Safety Score": 58.44918436
  },
  {
    "Longitude": -1.55163,
    "Latitude": 52.28964,
    "Safety Score": 44.12501345
  },
  {
    "Longitude": -1.5515,
    "Latitude": 52.2826,
    "Safety Score": 58.78387301
  },
  {
    "Longitude": -1.55111,
    "Latitude": 52.28264,
    "Safety Score": 58.78387301
  },
  {
    "Longitude": -1.55093,
    "Latitude": 52.28968,
    "Safety Score": 44.71773831
  },
  {
    "Longitude": -1.55088,
    "Latitude": 52.28967,
    "Safety Score": 44.45759895
  },
  {
    "Longitude": -1.55083,
    "Latitude": 52.28261,
    "Safety Score": 58.76255293
  },
  {
    "Longitude": -1.55082,
    "Latitude": 52.28968,
    "Safety Score": 44.68801313
  },
  {
    "Longitude": -1.55079,
    "Latitude": 52.28969,
    "Safety Score": 44.68801313
  },
  {
    "Longitude": -1.55051,
    "Latitude": 52.28535,
    "Safety Score": 55.76642655
  },
  {
    "Longitude": -1.55049,
    "Latitude": 52.28253,
    "Safety Score": 57.95529129
  },
  {
    "Longitude": -1.5504,
    "Latitude": 52.2854,
    "Safety Score": 55.76642655
  },
  {
    "Longitude": -1.55028,
    "Latitude": 52.28248,
    "Safety Score": 57.88589681
  },
  {
    "Longitude": -1.55026,
    "Latitude": 52.28969,
    "Safety Score": 45.19958334
  },
  {
    "Longitude": -1.55023,
    "Latitude": 52.28249,
    "Safety Score": 57.88589681
  },
  {
    "Longitude": -1.55016,
    "Latitude": 52.28252,
    "Safety Score": 57.96652761
  },
  {
    "Longitude": -1.55011,
    "Latitude": 52.28254,
    "Safety Score": 58.75813255
  },
  {
    "Longitude": -1.5501,
    "Latitude": 52.28554,
    "Safety Score": 55.76642655
  },
  {
    "Longitude": -1.5501,
    "Latitude": 52.28972,
    "Safety Score": 45.19958334
  },
  {
    "Longitude": -1.5500951,
    "Latitude": 52.2897243,
    "Safety Score": 50.2275492
  },
  {
    "Longitude": -1.55003,
    "Latitude": 52.28252,
    "Safety Score": 58.82500016
  },
  {
    "Longitude": -1.55001,
    "Latitude": 52.28248,
    "Safety Score": 58.86466136
  },
  {
    "Longitude": -1.55001,
    "Latitude": 52.28251,
    "Safety Score": 58.86466136
  },
  {
    "Longitude": -1.55,
    "Latitude": 52.2824,
    "Safety Score": 58.86466136
  },
  {
    "Longitude": -1.54998,
    "Latitude": 52.28238,
    "Safety Score": 58.86466136
  },
  {
    "Longitude": -1.54992,
    "Latitude": 52.28565,
    "Safety Score": 56.50353473
  },
  {
    "Longitude": -1.54984,
    "Latitude": 52.28671,
    "Safety Score": 53.00818927
  },
  {
    "Longitude": -1.54981,
    "Latitude": 52.28673,
    "Safety Score": 53.00818927
  },
  {
    "Longitude": -1.54975,
    "Latitude": 52.28676,
    "Safety Score": 53.00818927
  },
  {
    "Longitude": -1.5496,
    "Latitude": 52.28663,
    "Safety Score": 53.00818927
  },
  {
    "Longitude": -1.54955,
    "Latitude": 52.28661,
    "Safety Score": 53.00818927
  },
  {
    "Longitude": -1.54954,
    "Latitude": 52.28226,
    "Safety Score": 58.86466136
  },
  {
    "Longitude": -1.54948,
    "Latitude": 52.28589,
    "Safety Score": 56.07756421
  },
  {
    "Longitude": -1.54941,
    "Latitude": 52.28681,
    "Safety Score": 53.02917242
  },
  {
    "Longitude": -1.54932,
    "Latitude": 52.28594,
    "Safety Score": 56.09854736
  },
  {
    "Longitude": -1.54926,
    "Latitude": 52.28974,
    "Safety Score": 44.75981526
  },
  {
    "Longitude": -1.54923,
    "Latitude": 52.28686,
    "Safety Score": 53.02917242
  },
  {
    "Longitude": -1.54919,
    "Latitude": 52.28217,
    "Safety Score": 58.99542478
  },
  {
    "Longitude": -1.54914,
    "Latitude": 52.28693,
    "Safety Score": 53.02917242
  },
  {
    "Longitude": -1.54912,
    "Latitude": 52.28616,
    "Safety Score": 56.09854736
  },
  {
    "Longitude": -1.54906,
    "Latitude": 52.28616,
    "Safety Score": 56.09854736
  },
  {
    "Longitude": -1.54898,
    "Latitude": 52.28613,
    "Safety Score": 56.09854736
  },
  {
    "Longitude": -1.5489,
    "Latitude": 52.28709,
    "Safety Score": 51.97156773
  },
  {
    "Longitude": -1.5488877,
    "Latitude": 52.2833039,
    "Safety Score": 67.02288611
  },
  {
    "Longitude": -1.54876,
    "Latitude": 52.28714,
    "Safety Score": 52.36912635
  },
  {
    "Longitude": -1.54867,
    "Latitude": 52.28621,
    "Safety Score": 56.15057941
  },
  {
    "Longitude": -1.54861,
    "Latitude": 52.28211,
    "Safety Score": 60.20792699
  },
  {
    "Longitude": -1.54861,
    "Latitude": 52.28629,
    "Safety Score": 56.15057941
  },
  {
    "Longitude": -1.54856,
    "Latitude": 52.28725,
    "Safety Score": 51.63048941
  },
  {
    "Longitude": -1.54854,
    "Latitude": 52.28652,
    "Safety Score": 56.15057941
  },
  {
    "Longitude": -1.54848,
    "Latitude": 52.2866,
    "Safety Score": 56.15057941
  },
  {
    "Longitude": -1.54828,
    "Latitude": 52.28678,
    "Safety Score": 56.15057941
  },
  {
    "Longitude": -1.54819,
    "Latitude": 52.29237,
    "Safety Score": 51.51871247
  },
  {
    "Longitude": -1.5481874,
    "Latitude": 52.2923727,
    "Safety Score": 51.76598948
  },
  {
    "Longitude": -1.548171,
    "Latitude": 52.281418,
    "Safety Score": 53.98226569
  },
  {
    "Longitude": -1.548171,
    "Latitude": 52.286249,
    "Safety Score": 46.9424546
  },
  {
    "Longitude": -1.54798,
    "Latitude": 52.2821,
    "Safety Score": 60.29606418
  },
  {
    "Longitude": -1.54787,
    "Latitude": 52.28612,
    "Safety Score": 52.60024575
  },
  {
    "Longitude": -1.54778,
    "Latitude": 52.28711,
    "Safety Score": 54.99498393
  },
  {
    "Longitude": -1.54773,
    "Latitude": 52.28778,
    "Safety Score": 51.32174386
  },
  {
    "Longitude": -1.54772,
    "Latitude": 52.28211,
    "Safety Score": 60.29606418
  },
  {
    "Longitude": -1.54761,
    "Latitude": 52.29191,
    "Safety Score": 51.65771532
  },
  {
    "Longitude": -1.54751,
    "Latitude": 52.28793,
    "Safety Score": 51.70544737
  },
  {
    "Longitude": -1.54749,
    "Latitude": 52.28594,
    "Safety Score": 53.60192579
  },
  {
    "Longitude": -1.54747,
    "Latitude": 52.28214,
    "Safety Score": 60.35459115
  },
  {
    "Longitude": -1.5474,
    "Latitude": 52.28732,
    "Safety Score": 54.77482231
  },
  {
    "Longitude": -1.54736,
    "Latitude": 52.28218,
    "Safety Score": 60.35459115
  },
  {
    "Longitude": -1.54732,
    "Latitude": 52.28579,
    "Safety Score": 53.60192579
  },
  {
    "Longitude": -1.5473,
    "Latitude": 52.28573,
    "Safety Score": 53.60192579
  },
  {
    "Longitude": -1.54728,
    "Latitude": 52.28806,
    "Safety Score": 51.70544737
  },
  {
    "Longitude": -1.5472643,
    "Latitude": 52.2789332,
    "Safety Score": 69.67641844
  },
  {
    "Longitude": -1.54724,
    "Latitude": 52.28459,
    "Safety Score": 56.46753714
  },
  {
    "Longitude": -1.54724,
    "Latitude": 52.28477,
    "Safety Score": 56.40713479
  },
  {
    "Longitude": -1.54724,
    "Latitude": 52.28554,
    "Safety Score": 53.60192579
  },
  {
    "Longitude": -1.54722,
    "Latitude": 52.28527,
    "Safety Score": 53.60192579
  },
  {
    "Longitude": -1.5471869,
    "Latitude": 52.2789466,
    "Safety Score": 49.68819353
  },
  {
    "Longitude": -1.54717,
    "Latitude": 52.28421,
    "Safety Score": 56.76878329
  },
  {
    "Longitude": -1.54715,
    "Latitude": 52.29147,
    "Safety Score": 51.60317245
  },
  {
    "Longitude": -1.54712,
    "Latitude": 52.28406,
    "Safety Score": 56.76878329
  },
  {
    "Longitude": -1.54707,
    "Latitude": 52.28389,
    "Safety Score": 56.76878329
  },
  {
    "Longitude": -1.5470501,
    "Latitude": 52.281384,
    "Safety Score": 39.82579084
  },
  {
    "Longitude": -1.54705,
    "Latitude": 52.28138,
    "Safety Score": 37.52375964
  },
  {
    "Longitude": -1.54696,
    "Latitude": 52.28125,
    "Safety Score": 37.52375964
  },
  {
    "Longitude": -1.54693,
    "Latitude": 52.2812,
    "Safety Score": 37.52375964
  },
  {
    "Longitude": -1.5469286,
    "Latitude": 52.2812049,
    "Safety Score": 39.82579084
  },
  {
    "Longitude": -1.54692,
    "Latitude": 52.28347,
    "Safety Score": 56.78914923
  },
  {
    "Longitude": -1.5469188,
    "Latitude": 52.2834728,
    "Safety Score": 50.65039935
  },
  {
    "Longitude": -1.54688,
    "Latitude": 52.28342,
    "Safety Score": 56.78914923
  },
  {
    "Longitude": -1.54684,
    "Latitude": 52.28829,
    "Safety Score": 51.69755101
  },
  {
    "Longitude": -1.54678,
    "Latitude": 52.28325,
    "Safety Score": 56.78914923
  },
  {
    "Longitude": -1.54675,
    "Latitude": 52.28324,
    "Safety Score": 56.78914923
  },
  {
    "Longitude": -1.54673,
    "Latitude": 52.29117,
    "Safety Score": 50.78660553
  },
  {
    "Longitude": -1.54672,
    "Latitude": 52.28761,
    "Safety Score": 54.70360278
  },
  {
    "Longitude": -1.5467,
    "Latitude": 52.28125,
    "Safety Score": 37.52375964
  },
  {
    "Longitude": -1.54669,
    "Latitude": 52.28321,
    "Safety Score": 56.78914923
  },
  {
    "Longitude": -1.54668,
    "Latitude": 52.29107,
    "Safety Score": 50.78660553
  },
  {
    "Longitude": -1.54664,
    "Latitude": 52.28974,
    "Safety Score": 51.50985302
  },
  {
    "Longitude": -1.54664,
    "Latitude": 52.29061,
    "Safety Score": 49.36748177
  },
  {
    "Longitude": -1.54663,
    "Latitude": 52.28851,
    "Safety Score": 51.69755101
  },
  {
    "Longitude": -1.5466228,
    "Latitude": 52.2898457,
    "Safety Score": 59.60719381
  },
  {
    "Longitude": -1.54662,
    "Latitude": 52.28985,
    "Safety Score": 44.65479073
  },
  {
    "Longitude": -1.5466,
    "Latitude": 52.28128,
    "Safety Score": 37.52375964
  },
  {
    "Longitude": -1.5466,
    "Latitude": 52.28879,
    "Safety Score": 52.02040485
  },
  {
    "Longitude": -1.5466,
    "Latitude": 52.28996,
    "Safety Score": 49.45065816
  },
  {
    "Longitude": -1.54656,
    "Latitude": 52.28862,
    "Safety Score": 51.69755101
  },
  {
    "Longitude": -1.54656,
    "Latitude": 52.28888,
    "Safety Score": 52.02040485
  },
  {
    "Longitude": -1.54655,
    "Latitude": 52.28869,
    "Safety Score": 51.56384796
  },
  {
    "Longitude": -1.54654,
    "Latitude": 52.28245,
    "Safety Score": 60.35459115
  },
  {
    "Longitude": -1.54652,
    "Latitude": 52.28313,
    "Safety Score": 56.78914923
  },
  {
    "Longitude": -1.54622,
    "Latitude": 52.28301,
    "Safety Score": 56.78914923
  },
  {
    "Longitude": -1.54604,
    "Latitude": 52.28987,
    "Safety Score": 44.52048249
  },
  {
    "Longitude": -1.54591,
    "Latitude": 52.28789,
    "Safety Score": 54.70360278
  },
  {
    "Longitude": -1.5459,
    "Latitude": 52.27957,
    "Safety Score": 45.19163347
  },
  {
    "Longitude": -1.54587,
    "Latitude": 52.28138,
    "Safety Score": 37.52375964
  },
  {
    "Longitude": -1.54587,
    "Latitude": 52.283,
    "Safety Score": 56.78914923
  },
  {
    "Longitude": -1.54582,
    "Latitude": 52.28282,
    "Safety Score": 38.59858893
  },
  {
    "Longitude": -1.5458,
    "Latitude": 52.28279,
    "Safety Score": 38.59858893
  },
  {
    "Longitude": -1.54579,
    "Latitude": 52.28285,
    "Safety Score": 38.59858893
  },
  {
    "Longitude": -1.54578,
    "Latitude": 52.2794,
    "Safety Score": 45.19163347
  },
  {
    "Longitude": -1.54576,
    "Latitude": 52.27959,
    "Safety Score": 45.19163347
  },
  {
    "Longitude": -1.54574,
    "Latitude": 52.28136,
    "Safety Score": 37.52375964
  },
  {
    "Longitude": -1.54573,
    "Latitude": 52.28273,
    "Safety Score": 60.16467665
  },
  {
    "Longitude": -1.54571,
    "Latitude": 52.28131,
    "Safety Score": 37.52375964
  },
  {
    "Longitude": -1.54571,
    "Latitude": 52.28269,
    "Safety Score": 38.59858893
  },
  {
    "Longitude": -1.54571,
    "Latitude": 52.28794,
    "Safety Score": 54.42669136
  },
  {
    "Longitude": -1.5457,
    "Latitude": 52.27919,
    "Safety Score": 45.19163347
  },
  {
    "Longitude": -1.54569,
    "Latitude": 52.28128,
    "Safety Score": 37.52375964
  },
  {
    "Longitude": -1.5456867,
    "Latitude": 52.2812835,
    "Safety Score": 39.82579084
  },
  {
    "Longitude": -1.54565,
    "Latitude": 52.27902,
    "Safety Score": 46.54633849
  },
  {
    "Longitude": -1.5456,
    "Latitude": 52.28128,
    "Safety Score": 37.29956981
  },
  {
    "Longitude": -1.54559,
    "Latitude": 52.27856,
    "Safety Score": 46.49042187
  },
  {
    "Longitude": -1.54557,
    "Latitude": 52.28129,
    "Safety Score": 37.29956981
  },
  {
    "Longitude": -1.54557,
    "Latitude": 52.28253,
    "Safety Score": 38.26746158
  },
  {
    "Longitude": -1.54555,
    "Latitude": 52.28143,
    "Safety Score": 37.29956981
  },
  {
    "Longitude": -1.54554,
    "Latitude": 52.28303,
    "Safety Score": 49.18179776
  },
  {
    "Longitude": -1.54553,
    "Latitude": 52.28136,
    "Safety Score": 37.29956981
  },
  {
    "Longitude": -1.54552,
    "Latitude": 52.28294,
    "Safety Score": 38.26746158
  },
  {
    "Longitude": -1.54551,
    "Latitude": 52.28182,
    "Safety Score": 37.29956981
  },
  {
    "Longitude": -1.54551,
    "Latitude": 52.28296,
    "Safety Score": 38.26746158
  },
  {
    "Longitude": -1.5455,
    "Latitude": 52.27963,
    "Safety Score": 45.19163347
  },
  {
    "Longitude": -1.5455,
    "Latitude": 52.28139,
    "Safety Score": 37.29956981
  },
  {
    "Longitude": -1.5455,
    "Latitude": 52.28164,
    "Safety Score": 37.29956981
  },
  {
    "Longitude": -1.54535,
    "Latitude": 52.27856,
    "Safety Score": 46.49042187
  },
  {
    "Longitude": -1.5453,
    "Latitude": 52.27966,
    "Safety Score": 44.86699125
  },
  {
    "Longitude": -1.54528,
    "Latitude": 52.28799,
    "Safety Score": 55.23609107
  },
  {
    "Longitude": -1.54523,
    "Latitude": 52.27962,
    "Safety Score": 41.54702487
  },
  {
    "Longitude": -1.54515,
    "Latitude": 52.28312,
    "Safety Score": 48.87904665
  },
  {
    "Longitude": -1.545145,
    "Latitude": 52.2785643,
    "Safety Score": 50.64810082
  },
  {
    "Longitude": -1.54514,
    "Latitude": 52.27856,
    "Safety Score": 45.92628745
  },
  {
    "Longitude": -1.545,
    "Latitude": 52.28992,
    "Safety Score": 44.30162759
  },
  {
    "Longitude": -1.54493,
    "Latitude": 52.27932,
    "Safety Score": 41.9036482
  },
  {
    "Longitude": -1.54488,
    "Latitude": 52.28994,
    "Safety Score": 45.10220604
  },
  {
    "Longitude": -1.54481,
    "Latitude": 52.27921,
    "Safety Score": 41.9036482
  },
  {
    "Longitude": -1.5448,
    "Latitude": 52.28324,
    "Safety Score": 37.09249869
  },
  {
    "Longitude": -1.54479,
    "Latitude": 52.28996,
    "Safety Score": 44.98445508
  },
  {
    "Longitude": -1.54475,
    "Latitude": 52.27921,
    "Safety Score": 41.39935788
  },
  {
    "Longitude": -1.54473,
    "Latitude": 52.28309,
    "Safety Score": 58.16827879
  },
  {
    "Longitude": -1.5446566,
    "Latitude": 52.281047,
    "Safety Score": 38.14499001
  },
  {
    "Longitude": -1.54465,
    "Latitude": 52.27925,
    "Safety Score": 41.39935788
  },
  {
    "Longitude": -1.5445862,
    "Latitude": 52.280894,
    "Safety Score": 38.14499001
  },
  {
    "Longitude": -1.54453,
    "Latitude": 52.29001,
    "Safety Score": 44.76295273
  },
  {
    "Longitude": -1.5445292,
    "Latitude": 52.2900115,
    "Safety Score": 54.66580819
  },
  {
    "Longitude": -1.54452,
    "Latitude": 52.28803,
    "Safety Score": 53.1499114
  },
  {
    "Longitude": -1.54452,
    "Latitude": 52.28995,
    "Safety Score": 44.76295273
  },
  {
    "Longitude": -1.54445,
    "Latitude": 52.2899,
    "Safety Score": 44.76295273
  },
  {
    "Longitude": -1.54443,
    "Latitude": 52.28336,
    "Safety Score": 55.28305899
  },
  {
    "Longitude": -1.5442,
    "Latitude": 52.28342,
    "Safety Score": 38.98129631
  },
  {
    "Longitude": -1.54408,
    "Latitude": 52.28332,
    "Safety Score": 60.54738404
  },
  {
    "Longitude": -1.54405,
    "Latitude": 52.28984,
    "Safety Score": 45.04301126
  },
  {
    "Longitude": -1.54404,
    "Latitude": 52.27956,
    "Safety Score": 40.71672662
  },
  {
    "Longitude": -1.54403,
    "Latitude": 52.28346,
    "Safety Score": 57.17185661
  },
  {
    "Longitude": -1.54394,
    "Latitude": 52.29012,
    "Safety Score": 44.88070368
  },
  {
    "Longitude": -1.5438,
    "Latitude": 52.28807,
    "Safety Score": 53.1499114
  },
  {
    "Longitude": -1.54377,
    "Latitude": 52.28352,
    "Safety Score": 38.98129631
  },
  {
    "Longitude": -1.5436,
    "Latitude": 52.28342,
    "Safety Score": 60.54738404
  },
  {
    "Longitude": -1.54357,
    "Latitude": 52.28354,
    "Safety Score": 57.69226053
  },
  {
    "Longitude": -1.5435,
    "Latitude": 52.29016,
    "Safety Score": 44.35582632
  },
  {
    "Longitude": -1.54344,
    "Latitude": 52.28806,
    "Safety Score": 53.23713238
  },
  {
    "Longitude": -1.54334,
    "Latitude": 52.27903,
    "Safety Score": 40.53090904
  },
  {
    "Longitude": -1.5432,
    "Latitude": 52.28359,
    "Safety Score": 57.53128545
  },
  {
    "Longitude": -1.54315,
    "Latitude": 52.28377,
    "Safety Score": 57.1954574
  },
  {
    "Longitude": -1.5431489,
    "Latitude": 52.2837661,
    "Safety Score": 47.66547996
  },
  {
    "Longitude": -1.5431,
    "Latitude": 52.28368,
    "Safety Score": 57.1954574
  },
  {
    "Longitude": -1.54303,
    "Latitude": 52.28362,
    "Safety Score": 57.53128545
  },
  {
    "Longitude": -1.54297,
    "Latitude": 52.2836,
    "Safety Score": 57.53128545
  },
  {
    "Longitude": -1.54296,
    "Latitude": 52.27924,
    "Safety Score": 40.71672662
  },
  {
    "Longitude": -1.5429,
    "Latitude": 52.28361,
    "Safety Score": 39.34072515
  },
  {
    "Longitude": -1.54264,
    "Latitude": 52.28807,
    "Safety Score": 53.23713238
  },
  {
    "Longitude": -1.54262,
    "Latitude": 52.2902,
    "Safety Score": 43.73620495
  },
  {
    "Longitude": -1.54256,
    "Latitude": 52.28968,
    "Safety Score": 44.94450643
  },
  {
    "Longitude": -1.54227,
    "Latitude": 52.28366,
    "Safety Score": 36.73469044
  },
  {
    "Longitude": -1.54227,
    "Latitude": 52.28964,
    "Safety Score": 44.9320545
  },
  {
    "Longitude": -1.54218,
    "Latitude": 52.28354,
    "Safety Score": 58.43323731
  },
  {
    "Longitude": -1.54216,
    "Latitude": 52.27968,
    "Safety Score": 39.83875244
  },
  {
    "Longitude": -1.5418035,
    "Latitude": 52.290212,
    "Safety Score": 48.82087902
  },
  {
    "Longitude": -1.5418,
    "Latitude": 52.29021,
    "Safety Score": 43.79291317
  },
  {
    "Longitude": -1.541341,
    "Latitude": 52.2875364,
    "Safety Score": 38.06293417
  },
  {
    "Longitude": -1.54134,
    "Latitude": 52.28754,
    "Safety Score": 23.8268435
  },
  {
    "Longitude": -1.54127,
    "Latitude": 52.28379,
    "Safety Score": 35.83223564
  },
  {
    "Longitude": -1.54107,
    "Latitude": 52.28813,
    "Safety Score": 53.115463
  },
  {
    "Longitude": -1.540875,
    "Latitude": 52.286249,
    "Safety Score": 41.22798281
  },
  {
    "Longitude": -1.54084,
    "Latitude": 52.28023,
    "Safety Score": 39.15995911
  },
  {
    "Longitude": -1.54053,
    "Latitude": 52.28817,
    "Safety Score": 54.07821328
  },
  {
    "Longitude": -1.54049,
    "Latitude": 52.28032,
    "Safety Score": 38.73570431
  },
  {
    "Longitude": -1.5404,
    "Latitude": 52.28377,
    "Safety Score": 55.38957435
  },
  {
    "Longitude": -1.5403,
    "Latitude": 52.28819,
    "Safety Score": 54.07821328
  },
  {
    "Longitude": -1.54012,
    "Latitude": 52.28819,
    "Safety Score": 54.16021413
  },
  {
    "Longitude": -1.5401,
    "Latitude": 52.28807,
    "Safety Score": 44.52818587
  },
  {
    "Longitude": -1.5401,
    "Latitude": 52.28818,
    "Safety Score": 44.52818587
  },
  {
    "Longitude": -1.54006,
    "Latitude": 52.28768,
    "Safety Score": 24.59227518
  },
  {
    "Longitude": -1.54005,
    "Latitude": 52.28862,
    "Safety Score": 45.36455363
  },
  {
    "Longitude": -1.54004,
    "Latitude": 52.28907,
    "Safety Score": 44.49365814
  },
  {
    "Longitude": -1.54004,
    "Latitude": 52.28931,
    "Safety Score": 44.71317818
  },
  {
    "Longitude": -1.54002,
    "Latitude": 52.28888,
    "Safety Score": 45.04927679
  },
  {
    "Longitude": -1.54001,
    "Latitude": 52.28903,
    "Safety Score": 44.48030058
  },
  {
    "Longitude": -1.53995,
    "Latitude": 52.28807,
    "Safety Score": 44.52818587
  },
  {
    "Longitude": -1.53982,
    "Latitude": 52.28399,
    "Safety Score": 33.16120051
  },
  {
    "Longitude": -1.53979,
    "Latitude": 52.28768,
    "Safety Score": 24.59227518
  },
  {
    "Longitude": -1.53979,
    "Latitude": 52.28816,
    "Safety Score": 54.16021413
  },
  {
    "Longitude": -1.53972,
    "Latitude": 52.28038,
    "Safety Score": 37.71664783
  },
  {
    "Longitude": -1.53961,
    "Latitude": 52.28805,
    "Safety Score": 44.5646358
  },
  {
    "Longitude": -1.53938,
    "Latitude": 52.28801,
    "Safety Score": 53.84676843
  },
  {
    "Longitude": -1.53917,
    "Latitude": 52.28392,
    "Safety Score": 54.91570839
  },
  {
    "Longitude": -1.53915,
    "Latitude": 52.28795,
    "Safety Score": 44.01845873
  },
  {
    "Longitude": -1.53914,
    "Latitude": 52.28755,
    "Safety Score": 24.51294442
  },
  {
    "Longitude": -1.53901,
    "Latitude": 52.28408,
    "Safety Score": 32.77924178
  },
  {
    "Longitude": -1.53888,
    "Latitude": 52.28785,
    "Safety Score": 49.44629337
  },
  {
    "Longitude": -1.5387,
    "Latitude": 52.2902,
    "Safety Score": 45.99709693
  },
  {
    "Longitude": -1.5386973,
    "Latitude": 52.2902026,
    "Safety Score": 51.02506279
  },
  {
    "Longitude": -1.53865,
    "Latitude": 52.28741,
    "Safety Score": 24.51294442
  },
  {
    "Longitude": -1.53862,
    "Latitude": 52.28776,
    "Safety Score": 53.3645695
  },
  {
    "Longitude": -1.53858,
    "Latitude": 52.28397,
    "Safety Score": 54.3453295
  },
  {
    "Longitude": -1.53848,
    "Latitude": 52.28908,
    "Safety Score": 38.33006891
  },
  {
    "Longitude": -1.5384772,
    "Latitude": 52.289077,
    "Safety Score": 53.00331
  },
  {
    "Longitude": -1.53839,
    "Latitude": 52.28767,
    "Safety Score": 43.67906096
  },
  {
    "Longitude": -1.53832,
    "Latitude": 52.2935,
    "Safety Score": 45.37309089
  },
  {
    "Longitude": -1.53831,
    "Latitude": 52.28414,
    "Safety Score": 33.16359968
  },
  {
    "Longitude": -1.53828,
    "Latitude": 52.29311,
    "Safety Score": 45.24384996
  },
  {
    "Longitude": -1.5382739,
    "Latitude": 52.2883984,
    "Safety Score": 53.97343382
  },
  {
    "Longitude": -1.53827,
    "Latitude": 52.2884,
    "Safety Score": 30.41146738
  },
  {
    "Longitude": -1.53824,
    "Latitude": 52.28051,
    "Safety Score": 37.95197966
  },
  {
    "Longitude": -1.53821,
    "Latitude": 52.28726,
    "Safety Score": 24.52389189
  },
  {
    "Longitude": -1.5382023,
    "Latitude": 52.2923339,
    "Safety Score": 49.67574359
  },
  {
    "Longitude": -1.5382,
    "Latitude": 52.28757,
    "Safety Score": 53.11382419
  },
  {
    "Longitude": -1.5382,
    "Latitude": 52.29226,
    "Safety Score": 45.25106194
  },
  {
    "Longitude": -1.5381524,
    "Latitude": 52.2918076,
    "Safety Score": 49.59097896
  },
  {
    "Longitude": -1.53811,
    "Latitude": 52.2912,
    "Safety Score": 45.01427767
  },
  {
    "Longitude": -1.53809,
    "Latitude": 52.28874,
    "Safety Score": 31.14914841
  },
  {
    "Longitude": -1.53808,
    "Latitude": 52.28821,
    "Safety Score": 30.65015079
  },
  {
    "Longitude": -1.53807,
    "Latitude": 52.28823,
    "Safety Score": 30.65015079
  },
  {
    "Longitude": -1.53807,
    "Latitude": 52.29062,
    "Safety Score": 45.7071204
  },
  {
    "Longitude": -1.5380635,
    "Latitude": 52.2882476,
    "Safety Score": 54.05408892
  },
  {
    "Longitude": -1.5380516,
    "Latitude": 52.2883539,
    "Safety Score": 53.92827919
  },
  {
    "Longitude": -1.53805,
    "Latitude": 52.28835,
    "Safety Score": 30.36631275
  },
  {
    "Longitude": -1.53805,
    "Latitude": 52.2902,
    "Safety Score": 46.34931521
  },
  {
    "Longitude": -1.53805,
    "Latitude": 52.29353,
    "Safety Score": 45.40352282
  },
  {
    "Longitude": -1.53804,
    "Latitude": 52.28818,
    "Safety Score": 30.78612638
  },
  {
    "Longitude": -1.53803,
    "Latitude": 52.28898,
    "Safety Score": 31.56693117
  },
  {
    "Longitude": -1.53803,
    "Latitude": 52.289,
    "Safety Score": 31.10267093
  },
  {
    "Longitude": -1.53802,
    "Latitude": 52.28901,
    "Safety Score": 31.10267093
  },
  {
    "Longitude": -1.53802,
    "Latitude": 52.29009,
    "Safety Score": 46.34931521
  },
  {
    "Longitude": -1.53801,
    "Latitude": 52.28895,
    "Safety Score": 31.56693117
  },
  {
    "Longitude": -1.53799,
    "Latitude": 52.28807,
    "Safety Score": 30.78612638
  },
  {
    "Longitude": -1.53799,
    "Latitude": 52.28894,
    "Safety Score": 31.56693117
  },
  {
    "Longitude": -1.53799,
    "Latitude": 52.28903,
    "Safety Score": 45.45651256
  },
  {
    "Longitude": -1.53798,
    "Latitude": 52.28894,
    "Safety Score": 31.76049723
  },
  {
    "Longitude": -1.5379752,
    "Latitude": 52.2889352,
    "Safety Score": 55.32246367
  },
  {
    "Longitude": -1.53797,
    "Latitude": 52.28788,
    "Safety Score": 30.6588389
  },
  {
    "Longitude": -1.53796,
    "Latitude": 52.28903,
    "Safety Score": 45.61135193
  },
  {
    "Longitude": -1.53796,
    "Latitude": 52.2899,
    "Safety Score": 46.50362059
  },
  {
    "Longitude": -1.53795,
    "Latitude": 52.28415,
    "Safety Score": 33.10741251
  },
  {
    "Longitude": -1.53794,
    "Latitude": 52.28903,
    "Safety Score": 45.61135193
  },
  {
    "Longitude": -1.53793,
    "Latitude": 52.28743,
    "Safety Score": 53.22976881
  },
  {
    "Longitude": -1.53791,
    "Latitude": 52.28713,
    "Safety Score": 24.53274547
  },
  {
    "Longitude": -1.53787,
    "Latitude": 52.28781,
    "Safety Score": 29.59876527
  },
  {
    "Longitude": -1.53777,
    "Latitude": 52.28942,
    "Safety Score": 46.31291041
  },
  {
    "Longitude": -1.53771,
    "Latitude": 52.28416,
    "Safety Score": 32.10228414
  },
  {
    "Longitude": -1.53767,
    "Latitude": 52.28904,
    "Safety Score": 46.10370625
  },
  {
    "Longitude": -1.53767,
    "Latitude": 52.28909,
    "Safety Score": 46.10370625
  },
  {
    "Longitude": -1.53763,
    "Latitude": 52.28767,
    "Safety Score": 29.83546895
  },
  {
    "Longitude": -1.53761,
    "Latitude": 52.28698,
    "Safety Score": 24.1240665
  },
  {
    "Longitude": -1.53755,
    "Latitude": 52.28398,
    "Safety Score": 53.18999902
  },
  {
    "Longitude": -1.53751,
    "Latitude": 52.28718,
    "Safety Score": 43.43615539
  },
  {
    "Longitude": -1.53747,
    "Latitude": 52.28715,
    "Safety Score": 53.06818365
  },
  {
    "Longitude": -1.53743,
    "Latitude": 52.28753,
    "Safety Score": 29.45223796
  },
  {
    "Longitude": -1.53742,
    "Latitude": 52.2961,
    "Safety Score": 47.28088088
  },
  {
    "Longitude": -1.5374,
    "Latitude": 52.29599,
    "Safety Score": 46.41969522
  },
  {
    "Longitude": -1.53738,
    "Latitude": 52.28679,
    "Safety Score": 23.97431682
  },
  {
    "Longitude": -1.53736,
    "Latitude": 52.28603,
    "Safety Score": 25.28180406
  },
  {
    "Longitude": -1.5373244,
    "Latitude": 52.2854409,
    "Safety Score": 51.65209227
  },
  {
    "Longitude": -1.53731,
    "Latitude": 52.28668,
    "Safety Score": 23.59748611
  },
  {
    "Longitude": -1.53728,
    "Latitude": 52.2865,
    "Safety Score": 23.51683141
  },
  {
    "Longitude": -1.53725,
    "Latitude": 52.2948,
    "Safety Score": 43.80178792
  },
  {
    "Longitude": -1.53718,
    "Latitude": 52.28739,
    "Safety Score": 29.07507628
  },
  {
    "Longitude": -1.53717,
    "Latitude": 52.29359,
    "Safety Score": 45.26234616
  },
  {
    "Longitude": -1.53713,
    "Latitude": 52.29414,
    "Safety Score": 45.2574636
  },
  {
    "Longitude": -1.53706,
    "Latitude": 52.29302,
    "Safety Score": 36.0058364
  },
  {
    "Longitude": -1.5370596,
    "Latitude": 52.2930159,
    "Safety Score": 59.77975456
  },
  {
    "Longitude": -1.53705,
    "Latitude": 52.28694,
    "Safety Score": 30.26958992
  },
  {
    "Longitude": -1.53704,
    "Latitude": 52.28694,
    "Safety Score": 47.48085477
  },
  {
    "Longitude": -1.53702,
    "Latitude": 52.28691,
    "Safety Score": 31.03693366
  },
  {
    "Longitude": -1.53702,
    "Latitude": 52.2936,
    "Safety Score": 45.15899189
  },
  {
    "Longitude": -1.53701,
    "Latitude": 52.28695,
    "Safety Score": 41.66690128
  },
  {
    "Longitude": -1.53701,
    "Latitude": 52.29612,
    "Safety Score": 47.28088088
  },
  {
    "Longitude": -1.53701,
    "Latitude": 52.29629,
    "Safety Score": 47.28088088
  },
  {
    "Longitude": -1.537,
    "Latitude": 52.29631,
    "Safety Score": 47.28088088
  },
  {
    "Longitude": -1.53698,
    "Latitude": 52.28687,
    "Safety Score": 35.70851449
  },
  {
    "Longitude": -1.5369774,
    "Latitude": 52.292597,
    "Safety Score": 59.64808607
  },
  {
    "Longitude": -1.53696,
    "Latitude": 52.28698,
    "Safety Score": 29.11305097
  },
  {
    "Longitude": -1.53692,
    "Latitude": 52.28702,
    "Safety Score": 42.04504979
  },
  {
    "Longitude": -1.5369,
    "Latitude": 52.28721,
    "Safety Score": 29.13510683
  },
  {
    "Longitude": -1.53689,
    "Latitude": 52.28724,
    "Safety Score": 29.10957708
  },
  {
    "Longitude": -1.53688,
    "Latitude": 52.28398,
    "Safety Score": 51.27407233
  },
  {
    "Longitude": -1.53687,
    "Latitude": 52.28677,
    "Safety Score": 33.30913752
  },
  {
    "Longitude": -1.53687,
    "Latitude": 52.28706,
    "Safety Score": 29.15221495
  },
  {
    "Longitude": -1.53685,
    "Latitude": 52.28714,
    "Safety Score": 29.13271794
  },
  {
    "Longitude": -1.53681,
    "Latitude": 52.28712,
    "Safety Score": 41.66260299
  },
  {
    "Longitude": -1.53679,
    "Latitude": 52.28663,
    "Safety Score": 35.62550588
  },
  {
    "Longitude": -1.53673,
    "Latitude": 52.29131,
    "Safety Score": 35.56177126
  },
  {
    "Longitude": -1.5367,
    "Latitude": 52.28415,
    "Safety Score": 29.92450555
  },
  {
    "Longitude": -1.5367,
    "Latitude": 52.2865,
    "Safety Score": 30.88649521
  },
  {
    "Longitude": -1.53668,
    "Latitude": 52.28431,
    "Safety Score": 29.89233221
  },
  {
    "Longitude": -1.53666,
    "Latitude": 52.28397,
    "Safety Score": 51.28659554
  },
  {
    "Longitude": -1.53666,
    "Latitude": 52.28532,
    "Safety Score": 30.0002109
  },
  {
    "Longitude": -1.53666,
    "Latitude": 52.2871,
    "Safety Score": 52.59420651
  },
  {
    "Longitude": -1.53665,
    "Latitude": 52.28414,
    "Safety Score": 51.49199524
  },
  {
    "Longitude": -1.53665,
    "Latitude": 52.28434,
    "Safety Score": 29.8972871
  },
  {
    "Longitude": -1.53665,
    "Latitude": 52.2853,
    "Safety Score": 22.67021385
  },
  {
    "Longitude": -1.53664,
    "Latitude": 52.28534,
    "Safety Score": 22.67021385
  },
  {
    "Longitude": -1.53664,
    "Latitude": 52.28727,
    "Safety Score": 31.31031076
  },
  {
    "Longitude": -1.53662,
    "Latitude": 52.28525,
    "Safety Score": 22.67021385
  },
  {
    "Longitude": -1.53661,
    "Latitude": 52.28437,
    "Safety Score": 29.8972871
  },
  {
    "Longitude": -1.5366,
    "Latitude": 52.28638,
    "Safety Score": 35.49428435
  },
  {
    "Longitude": -1.53659,
    "Latitude": 52.28524,
    "Safety Score": 30.0002109
  },
  {
    "Longitude": -1.53655,
    "Latitude": 52.28544,
    "Safety Score": 29.9894608
  },
  {
    "Longitude": -1.53654,
    "Latitude": 52.29031,
    "Safety Score": 36.18928058
  },
  {
    "Longitude": -1.53652,
    "Latitude": 52.2852,
    "Safety Score": 22.65946375
  },
  {
    "Longitude": -1.53651,
    "Latitude": 52.28748,
    "Safety Score": 31.35467388
  },
  {
    "Longitude": -1.5365,
    "Latitude": 52.28551,
    "Safety Score": 22.69901504
  },
  {
    "Longitude": -1.53649,
    "Latitude": 52.2858,
    "Safety Score": 22.70440512
  },
  {
    "Longitude": -1.53647,
    "Latitude": 52.28438,
    "Safety Score": 29.88764462
  },
  {
    "Longitude": -1.53647,
    "Latitude": 52.28623,
    "Safety Score": 35.41199193
  },
  {
    "Longitude": -1.53646,
    "Latitude": 52.28621,
    "Safety Score": 30.74905405
  },
  {
    "Longitude": -1.5364,
    "Latitude": 52.28772,
    "Safety Score": 31.61983646
  },
  {
    "Longitude": -1.53638,
    "Latitude": 52.28437,
    "Safety Score": 29.88764462
  },
  {
    "Longitude": -1.53637,
    "Latitude": 52.28514,
    "Safety Score": 22.67150054
  },
  {
    "Longitude": -1.53637,
    "Latitude": 52.28616,
    "Safety Score": 34.98605842
  },
  {
    "Longitude": -1.53636,
    "Latitude": 52.28574,
    "Safety Score": 27.50372482
  },
  {
    "Longitude": -1.53633,
    "Latitude": 52.28097,
    "Safety Score": 38.02267896
  },
  {
    "Longitude": -1.53633,
    "Latitude": 52.28588,
    "Safety Score": 32.33450072
  },
  {
    "Longitude": -1.5363235,
    "Latitude": 52.2878584,
    "Safety Score": 53.39341149
  },
  {
    "Longitude": -1.53629,
    "Latitude": 52.2861,
    "Safety Score": 30.28045416
  },
  {
    "Longitude": -1.53628,
    "Latitude": 52.28511,
    "Safety Score": 26.33649907
  },
  {
    "Longitude": -1.53628,
    "Latitude": 52.28597,
    "Safety Score": 30.13766663
  },
  {
    "Longitude": -1.5362706,
    "Latitude": 52.2879694,
    "Safety Score": 53.32342309
  },
  {
    "Longitude": -1.53627,
    "Latitude": 52.28797,
    "Safety Score": 33.21450346
  },
  {
    "Longitude": -1.53626,
    "Latitude": 52.28602,
    "Safety Score": 34.80060451
  },
  {
    "Longitude": -1.53626,
    "Latitude": 52.28604,
    "Safety Score": 30.13766663
  },
  {
    "Longitude": -1.53626,
    "Latitude": 52.28606,
    "Safety Score": 34.94339205
  },
  {
    "Longitude": -1.53626,
    "Latitude": 52.28855,
    "Safety Score": 35.23366842
  },
  {
    "Longitude": -1.53621,
    "Latitude": 52.28836,
    "Safety Score": 32.53006659
  },
  {
    "Longitude": -1.5362,
    "Latitude": 52.28831,
    "Safety Score": 32.53006659
  },
  {
    "Longitude": -1.53619,
    "Latitude": 52.28816,
    "Safety Score": 33.41344817
  },
  {
    "Longitude": -1.53619,
    "Latitude": 52.28827,
    "Safety Score": 33.23169154
  },
  {
    "Longitude": -1.53618,
    "Latitude": 52.28437,
    "Safety Score": 30.12913164
  },
  {
    "Longitude": -1.53618,
    "Latitude": 52.2851,
    "Safety Score": 22.9228889
  },
  {
    "Longitude": -1.53616,
    "Latitude": 52.2857,
    "Safety Score": 34.92902135
  },
  {
    "Longitude": -1.5359592,
    "Latitude": 52.2931277,
    "Safety Score": 50.41386573
  },
  {
    "Longitude": -1.53592,
    "Latitude": 52.2851,
    "Safety Score": 30.25288596
  },
  {
    "Longitude": -1.53589,
    "Latitude": 52.2856,
    "Safety Score": 34.92902135
  },
  {
    "Longitude": -1.53586,
    "Latitude": 52.28436,
    "Safety Score": 30.15143032
  },
  {
    "Longitude": -1.53586,
    "Latitude": 52.2844,
    "Safety Score": 30.15143032
  },
  {
    "Longitude": -1.53582,
    "Latitude": 52.28411,
    "Safety Score": 51.73094753
  },
  {
    "Longitude": -1.5357703,
    "Latitude": 52.2873121,
    "Safety Score": 52.54994412
  },
  {
    "Longitude": -1.53577,
    "Latitude": 52.28731,
    "Safety Score": 52.54994412
  },
  {
    "Longitude": -1.53576,
    "Latitude": 52.2919643,
    "Safety Score": 49.87713209
  },
  {
    "Longitude": -1.53574,
    "Latitude": 52.28728,
    "Safety Score": 52.54994412
  },
  {
    "Longitude": -1.53571,
    "Latitude": 52.28829,
    "Safety Score": 32.48636147
  },
  {
    "Longitude": -1.5357,
    "Latitude": 52.28509,
    "Safety Score": 22.94678294
  },
  {
    "Longitude": -1.5356918,
    "Latitude": 52.2874242,
    "Safety Score": 52.56708381
  },
  {
    "Longitude": -1.53567,
    "Latitude": 52.28556,
    "Safety Score": 35.10842576
  },
  {
    "Longitude": -1.53566,
    "Latitude": 52.28726,
    "Safety Score": 52.54994412
  },
  {
    "Longitude": -1.53563,
    "Latitude": 52.2844,
    "Safety Score": 30.2892362
  },
  {
    "Longitude": -1.53562,
    "Latitude": 52.28441,
    "Safety Score": 30.2892362
  },
  {
    "Longitude": -1.53562,
    "Latitude": 52.28725,
    "Safety Score": 52.5492663
  },
  {
    "Longitude": -1.5356019,
    "Latitude": 52.2762849,
    "Safety Score": 40.47402699
  },
  {
    "Longitude": -1.5356,
    "Latitude": 52.27628,
    "Safety Score": 59.43193102
  },
  {
    "Longitude": -1.5356,
    "Latitude": 52.28443,
    "Safety Score": 30.2892362
  },
  {
    "Longitude": -1.5356,
    "Latitude": 52.28726,
    "Safety Score": 52.5492663
  },
  {
    "Longitude": -1.53559,
    "Latitude": 52.28443,
    "Safety Score": 30.29678026
  },
  {
    "Longitude": -1.53554,
    "Latitude": 52.28444,
    "Safety Score": 30.36410419
  },
  {
    "Longitude": -1.53554,
    "Latitude": 52.28724,
    "Safety Score": 52.522896
  },
  {
    "Longitude": -1.53553,
    "Latitude": 52.28508,
    "Safety Score": 23.03462927
  },
  {
    "Longitude": -1.53552,
    "Latitude": 52.29037,
    "Safety Score": 56.99205204
  },
  {
    "Longitude": -1.53547,
    "Latitude": 52.28995,
    "Safety Score": 57.73468827
  },
  {
    "Longitude": -1.53546,
    "Latitude": 52.28444,
    "Safety Score": 26.72489827
  },
  {
    "Longitude": -1.53545,
    "Latitude": 52.28451,
    "Safety Score": 30.3898968
  },
  {
    "Longitude": -1.53545,
    "Latitude": 52.28455,
    "Safety Score": 23.05989975
  },
  {
    "Longitude": -1.53544,
    "Latitude": 52.28459,
    "Safety Score": 30.3898968
  },
  {
    "Longitude": -1.53544,
    "Latitude": 52.28474,
    "Safety Score": 23.03648709
  },
  {
    "Longitude": -1.53544,
    "Latitude": 52.28479,
    "Safety Score": 30.36648415
  },
  {
    "Longitude": -1.5354354,
    "Latitude": 52.2897651,
    "Safety Score": 50.49889198
  },
  {
    "Longitude": -1.53543,
    "Latitude": 52.28972,
    "Safety Score": 57.3486614
  },
  {
    "Longitude": -1.53542,
    "Latitude": 52.28503,
    "Safety Score": 23.03462927
  },
  {
    "Longitude": -1.53542,
    "Latitude": 52.28506,
    "Safety Score": 26.6996278
  },
  {
    "Longitude": -1.53541,
    "Latitude": 52.28718,
    "Safety Score": 52.56156388
  },
  {
    "Longitude": -1.53538,
    "Latitude": 52.28554,
    "Safety Score": 35.3218297
  },
  {
    "Longitude": -1.53536,
    "Latitude": 52.28942,
    "Safety Score": 57.30154788
  },
  {
    "Longitude": -1.53521,
    "Latitude": 52.28855,
    "Safety Score": 40.26603816
  },
  {
    "Longitude": -1.5352,
    "Latitude": 52.28442,
    "Safety Score": 23.25793495
  },
  {
    "Longitude": -1.5352,
    "Latitude": 52.28779,
    "Safety Score": 34.0748084
  },
  {
    "Longitude": -1.5352,
    "Latitude": 52.28945,
    "Safety Score": 57.43541459
  },
  {
    "Longitude": -1.53515,
    "Latitude": 52.28842,
    "Safety Score": 39.89244708
  },
  {
    "Longitude": -1.535144,
    "Latitude": 52.2879016,
    "Safety Score": 51.2519148
  },
  {
    "Longitude": -1.5351349,
    "Latitude": 52.2840609,
    "Safety Score": 37.66845464
  },
  {
    "Longitude": -1.53513,
    "Latitude": 52.28406,
    "Safety Score": 46.51155149
  },
  {
    "Longitude": -1.5351,
    "Latitude": 52.28713,
    "Safety Score": 52.66962062
  },
  {
    "Longitude": -1.53507,
    "Latitude": 52.28436,
    "Safety Score": 23.27625381
  },
  {
    "Longitude": -1.53501,
    "Latitude": 52.28949,
    "Safety Score": 57.35274688
  },
  {
    "Longitude": -1.53498,
    "Latitude": 52.28131,
    "Safety Score": 38.81722177
  },
  {
    "Longitude": -1.53491,
    "Latitude": 52.28211,
    "Safety Score": 36.21267919
  },
  {
    "Longitude": -1.5349,
    "Latitude": 52.28223,
    "Safety Score": 36.21267919
  },
  {
    "Longitude": -1.5349,
    "Latitude": 52.28805,
    "Safety Score": 39.43021671
  },
  {
    "Longitude": -1.53489,
    "Latitude": 52.2843,
    "Safety Score": 23.27625381
  },
  {
    "Longitude": -1.53487,
    "Latitude": 52.28773,
    "Safety Score": 33.96516178
  },
  {
    "Longitude": -1.53486,
    "Latitude": 52.28243,
    "Safety Score": 36.17999945
  },
  {
    "Longitude": -1.53485,
    "Latitude": 52.2818,
    "Safety Score": 36.3525063
  },
  {
    "Longitude": -1.53484,
    "Latitude": 52.28429,
    "Safety Score": 23.27625381
  },
  {
    "Longitude": -1.53484,
    "Latitude": 52.2904,
    "Safety Score": 57.14855569
  },
  {
    "Longitude": -1.5348337,
    "Latitude": 52.2762555,
    "Safety Score": 37.20182631
  },
  {
    "Longitude": -1.53483,
    "Latitude": 52.27626,
    "Safety Score": 59.51170757
  },
  {
    "Longitude": -1.5348,
    "Latitude": 52.28793,
    "Safety Score": 39.23850143
  },
  {
    "Longitude": -1.53478,
    "Latitude": 52.28762,
    "Safety Score": 33.92431495
  },
  {
    "Longitude": -1.53478,
    "Latitude": 52.28793,
    "Safety Score": 39.23850143
  },
  {
    "Longitude": -1.53476,
    "Latitude": 52.28426,
    "Safety Score": 23.27625381
  },
  {
    "Longitude": -1.53475,
    "Latitude": 52.28151,
    "Safety Score": 36.33130924
  },
  {
    "Longitude": -1.53475,
    "Latitude": 52.28793,
    "Safety Score": 39.23850143
  },
  {
    "Longitude": -1.53473,
    "Latitude": 52.28422,
    "Safety Score": 23.28789005
  },
  {
    "Longitude": -1.53472,
    "Latitude": 52.28557,
    "Safety Score": 36.66168019
  },
  {
    "Longitude": -1.53471,
    "Latitude": 52.28138,
    "Safety Score": 38.43353891
  },
  {
    "Longitude": -1.53471,
    "Latitude": 52.28273,
    "Safety Score": 35.8037597
  },
  {
    "Longitude": -1.53471,
    "Latitude": 52.28785,
    "Safety Score": 39.29705817
  },
  {
    "Longitude": -1.5347,
    "Latitude": 52.28791,
    "Safety Score": 39.29705817
  },
  {
    "Longitude": -1.53469,
    "Latitude": 52.28788,
    "Safety Score": 39.29705817
  },
  {
    "Longitude": -1.53468,
    "Latitude": 52.28712,
    "Safety Score": 52.67111744
  },
  {
    "Longitude": -1.53467,
    "Latitude": 52.28779,
    "Safety Score": 38.98901693
  },
  {
    "Longitude": -1.53464,
    "Latitude": 52.28403,
    "Safety Score": 23.39863438
  },
  {
    "Longitude": -1.53464,
    "Latitude": 52.28413,
    "Safety Score": 23.35093462
  },
  {
    "Longitude": -1.53462,
    "Latitude": 52.28291,
    "Safety Score": 35.75934755
  },
  {
    "Longitude": -1.5346,
    "Latitude": 52.28099,
    "Safety Score": 33.58791092
  },
  {
    "Longitude": -1.5346,
    "Latitude": 52.28963,
    "Safety Score": 57.43797986
  },
  {
    "Longitude": -1.5345806,
    "Latitude": 52.2852996,
    "Safety Score": 50.33859911
  },
  {
    "Longitude": -1.53458,
    "Latitude": 52.2853,
    "Safety Score": 35.47489584
  },
  {
    "Longitude": -1.5345,
    "Latitude": 52.2807,
    "Safety Score": 33.40427248
  },
  {
    "Longitude": -1.53446,
    "Latitude": 52.28323,
    "Safety Score": 35.50698587
  },
  {
    "Longitude": -1.53444,
    "Latitude": 52.28751,
    "Safety Score": 38.69333627
  },
  {
    "Longitude": -1.53444,
    "Latitude": 52.28754,
    "Safety Score": 38.67509625
  },
  {
    "Longitude": -1.53444,
    "Latitude": 52.28755,
    "Safety Score": 38.67509625
  },
  {
    "Longitude": -1.53441,
    "Latitude": 52.28749,
    "Safety Score": 38.69333627
  },
  {
    "Longitude": -1.53438,
    "Latitude": 52.28337,
    "Safety Score": 36.0207997
  },
  {
    "Longitude": -1.53438,
    "Latitude": 52.28492,
    "Safety Score": 38.21576947
  },
  {
    "Longitude": -1.53437,
    "Latitude": 52.28037,
    "Safety Score": 33.7685563
  },
  {
    "Longitude": -1.53436,
    "Latitude": 52.28749,
    "Safety Score": 38.69333627
  },
  {
    "Longitude": -1.53435,
    "Latitude": 52.28345,
    "Safety Score": 36.15434951
  },
  {
    "Longitude": -1.53434,
    "Latitude": 52.28724,
    "Safety Score": 33.71733607
  },
  {
    "Longitude": -1.53431,
    "Latitude": 52.28036,
    "Safety Score": 33.7685563
  },
  {
    "Longitude": -1.53426,
    "Latitude": 52.28458,
    "Safety Score": 38.24251777
  },
  {
    "Longitude": -1.53424,
    "Latitude": 52.28029,
    "Safety Score": 34.16072787
  },
  {
    "Longitude": -1.53421,
    "Latitude": 52.28372,
    "Safety Score": 36.2454906
  },
  {
    "Longitude": -1.53421,
    "Latitude": 52.28727,
    "Safety Score": 52.70282122
  },
  {
    "Longitude": -1.5342,
    "Latitude": 52.27627,
    "Safety Score": 59.08831093
  },
  {
    "Longitude": -1.53417,
    "Latitude": 52.28735,
    "Safety Score": 38.69333627
  },
  {
    "Longitude": -1.53414,
    "Latitude": 52.28418,
    "Safety Score": 38.30535534
  },
  {
    "Longitude": -1.53412,
    "Latitude": 52.284,
    "Safety Score": 44.28080628
  },
  {
    "Longitude": -1.5341,
    "Latitude": 52.28729,
    "Safety Score": 43.28610666
  },
  {
    "Longitude": -1.53394,
    "Latitude": 52.28569,
    "Safety Score": 38.40229297
  },
  {
    "Longitude": -1.53391,
    "Latitude": 52.28478,
    "Safety Score": 35.6441391
  },
  {
    "Longitude": -1.53386,
    "Latitude": 52.28708,
    "Safety Score": 52.82450845
  },
  {
    "Longitude": -1.53377,
    "Latitude": 52.28475,
    "Safety Score": 35.81602358
  },
  {
    "Longitude": -1.53365,
    "Latitude": 52.28523,
    "Safety Score": 38.13727302
  },
  {
    "Longitude": -1.53365,
    "Latitude": 52.28526,
    "Safety Score": 38.13727302
  },
  {
    "Longitude": -1.53364,
    "Latitude": 52.28689,
    "Safety Score": 33.33017811
  },
  {
    "Longitude": -1.53362,
    "Latitude": 52.28688,
    "Safety Score": 38.35814396
  },
  {
    "Longitude": -1.53361,
    "Latitude": 52.2853,
    "Safety Score": 38.13727302
  },
  {
    "Longitude": -1.53357,
    "Latitude": 52.28506,
    "Safety Score": 38.09923473
  },
  {
    "Longitude": -1.53357,
    "Latitude": 52.28683,
    "Safety Score": 35.69108479
  },
  {
    "Longitude": -1.53355,
    "Latitude": 52.28503,
    "Safety Score": 38.09923473
  },
  {
    "Longitude": -1.53352,
    "Latitude": 52.28502,
    "Safety Score": 38.09923473
  },
  {
    "Longitude": -1.533494,
    "Latitude": 52.286249,
    "Safety Score": 42.72345661
  },
  {
    "Longitude": -1.533494,
    "Latitude": 52.290777,
    "Safety Score": 57.97289766
  },
  {
    "Longitude": -1.53346,
    "Latitude": 52.28486,
    "Safety Score": 35.63683709
  },
  {
    "Longitude": -1.53345,
    "Latitude": 52.28726,
    "Safety Score": 52.67217242
  },
  {
    "Longitude": -1.53339,
    "Latitude": 52.2869,
    "Safety Score": 37.96875023
  },
  {
    "Longitude": -1.53338,
    "Latitude": 52.28659,
    "Safety Score": 38.33549489
  },
  {
    "Longitude": -1.53337,
    "Latitude": 52.28729,
    "Safety Score": 38.43608175
  },
  {
    "Longitude": -1.53332,
    "Latitude": 52.28653,
    "Safety Score": 36.77740089
  },
  {
    "Longitude": -1.53329,
    "Latitude": 52.28714,
    "Safety Score": 38.39084767
  },
  {
    "Longitude": -1.53327,
    "Latitude": 52.28403,
    "Safety Score": 33.39125682
  },
  {
    "Longitude": -1.5332444,
    "Latitude": 52.2857939,
    "Safety Score": 57.26192371
  },
  {
    "Longitude": -1.53323,
    "Latitude": 52.28443,
    "Safety Score": 33.29673582
  },
  {
    "Longitude": -1.53323,
    "Latitude": 52.28699,
    "Safety Score": 38.39427425
  },
  {
    "Longitude": -1.53322,
    "Latitude": 52.28702,
    "Safety Score": 38.39427425
  },
  {
    "Longitude": -1.53319,
    "Latitude": 52.28699,
    "Safety Score": 38.39427425
  },
  {
    "Longitude": -1.53318,
    "Latitude": 52.28736,
    "Safety Score": 45.49925694
  },
  {
    "Longitude": -1.53316,
    "Latitude": 52.28403,
    "Safety Score": 50.15310551
  },
  {
    "Longitude": -1.53316,
    "Latitude": 52.28624,
    "Safety Score": 38.51439635
  },
  {
    "Longitude": -1.53312,
    "Latitude": 52.28613,
    "Safety Score": 36.54125454
  },
  {
    "Longitude": -1.53311,
    "Latitude": 52.27632,
    "Safety Score": 59.40881488
  },
  {
    "Longitude": -1.5330837,
    "Latitude": 52.285817,
    "Safety Score": 57.26192371
  },
  {
    "Longitude": -1.53308,
    "Latitude": 52.28573,
    "Safety Score": 35.62247719
  },
  {
    "Longitude": -1.53308,
    "Latitude": 52.28582,
    "Safety Score": 38.30401967
  },
  {
    "Longitude": -1.5330768,
    "Latitude": 52.2857262,
    "Safety Score": 57.03548867
  },
  {
    "Longitude": -1.53303,
    "Latitude": 52.28405,
    "Safety Score": 33.41544005
  },
  {
    "Longitude": -1.53294,
    "Latitude": 52.28545,
    "Safety Score": 37.97309844
  },
  {
    "Longitude": -1.53289,
    "Latitude": 52.2875,
    "Safety Score": 45.49925694
  },
  {
    "Longitude": -1.53262,
    "Latitude": 52.28409,
    "Safety Score": 55.77120137
  },
  {
    "Longitude": -1.5325758,
    "Latitude": 52.2847851,
    "Safety Score": 57.33748535
  },
  {
    "Longitude": -1.53256,
    "Latitude": 52.28765,
    "Safety Score": 38.70119513
  },
  {
    "Longitude": -1.53234,
    "Latitude": 52.28774,
    "Safety Score": 45.81924047
  },
  {
    "Longitude": -1.5322,
    "Latitude": 52.27632,
    "Safety Score": 59.56209019
  },
  {
    "Longitude": -1.53214,
    "Latitude": 52.28418,
    "Safety Score": 55.74877195
  },
  {
    "Longitude": -1.5321236,
    "Latitude": 52.2841693,
    "Safety Score": 57.38551025
  },
  {
    "Longitude": -1.53212,
    "Latitude": 52.28416,
    "Safety Score": 55.74877195
  },
  {
    "Longitude": -1.53203,
    "Latitude": 52.28407,
    "Safety Score": 55.91834101
  },
  {
    "Longitude": -1.53196,
    "Latitude": 52.28394,
    "Safety Score": 55.7810783
  },
  {
    "Longitude": -1.53189,
    "Latitude": 52.2863,
    "Safety Score": 33.70635661
  },
  {
    "Longitude": -1.53186,
    "Latitude": 52.28632,
    "Safety Score": 33.70635661
  },
  {
    "Longitude": -1.5318264,
    "Latitude": 52.2861809,
    "Safety Score": 40.82440195
  },
  {
    "Longitude": -1.53174,
    "Latitude": 52.28799,
    "Safety Score": 45.7717836
  },
  {
    "Longitude": -1.5316,
    "Latitude": 52.28578,
    "Safety Score": 33.38611738
  },
  {
    "Longitude": -1.53153,
    "Latitude": 52.2844,
    "Safety Score": 33.48025522
  },
  {
    "Longitude": -1.53153,
    "Latitude": 52.28806,
    "Safety Score": 53.13681179
  },
  {
    "Longitude": -1.5315297,
    "Latitude": 52.284399,
    "Safety Score": 33.48025522
  },
  {
    "Longitude": -1.53146,
    "Latitude": 52.28538,
    "Safety Score": 33.44765779
  },
  {
    "Longitude": -1.53145,
    "Latitude": 52.28485,
    "Safety Score": 33.46172419
  },
  {
    "Longitude": -1.53128,
    "Latitude": 52.28638,
    "Safety Score": 33.78192671
  },
  {
    "Longitude": -1.5312424,
    "Latitude": 52.28236,
    "Safety Score": 58.88165998
  },
  {
    "Longitude": -1.53124,
    "Latitude": 52.28236,
    "Safety Score": 57.24492168
  },
  {
    "Longitude": -1.53106,
    "Latitude": 52.28821,
    "Safety Score": 39.15165789
  },
  {
    "Longitude": -1.53088,
    "Latitude": 52.27635,
    "Safety Score": 59.68397844
  },
  {
    "Longitude": -1.5307,
    "Latitude": 52.2883,
    "Safety Score": 46.86342666
  },
  {
    "Longitude": -1.53065,
    "Latitude": 52.28838,
    "Safety Score": 46.86342666
  },
  {
    "Longitude": -1.53063,
    "Latitude": 52.2885,
    "Safety Score": 46.93147613
  },
  {
    "Longitude": -1.5306291,
    "Latitude": 52.288495,
    "Safety Score": 46.01007489
  },
  {
    "Longitude": -1.52981,
    "Latitude": 52.2793,
    "Safety Score": 44.76758717
  },
  {
    "Longitude": -1.5298098,
    "Latitude": 52.2792974,
    "Safety Score": 42.24713754
  },
  {
    "Longitude": -1.52971,
    "Latitude": 52.27637,
    "Safety Score": 59.61151239
  },
  {
    "Longitude": -1.52949,
    "Latitude": 52.28657,
    "Safety Score": 35.25143026
  },
  {
    "Longitude": -1.5284333,
    "Latitude": 52.2763825,
    "Safety Score": 35.20213284
  },
  {
    "Longitude": -1.52843,
    "Latitude": 52.27638,
    "Safety Score": 52.01108191
  },
  {
    "Longitude": -1.52703,
    "Latitude": 52.27642,
    "Safety Score": 59.45026533
  },
  {
    "Longitude": -1.52697,
    "Latitude": 52.27642,
    "Safety Score": 59.45026533
  },
  {
    "Longitude": -1.52694,
    "Latitude": 52.27606,
    "Safety Score": 59.56829474
  },
  {
    "Longitude": -1.52691,
    "Latitude": 52.27593,
    "Safety Score": 59.4406202
  },
  {
    "Longitude": -1.52685,
    "Latitude": 52.2758,
    "Safety Score": 59.4406202
  },
  {
    "Longitude": -1.52666,
    "Latitude": 52.27543,
    "Safety Score": 59.40105567
  },
  {
    "Longitude": -1.52654,
    "Latitude": 52.27517,
    "Safety Score": 58.95806867
  },
  {
    "Longitude": -1.52648,
    "Latitude": 52.27509,
    "Safety Score": 58.95806867
  },
  {
    "Longitude": -1.52646,
    "Latitude": 52.28688,
    "Safety Score": 35.51170242
  },
  {
    "Longitude": -1.52629,
    "Latitude": 52.27488,
    "Safety Score": 58.35057233
  },
  {
    "Longitude": -1.52624,
    "Latitude": 52.27645,
    "Safety Score": 44.45296907
  },
  {
    "Longitude": -1.526155,
    "Latitude": 52.272517,
    "Safety Score": 41.16846436
  },
  {
    "Longitude": -1.526155,
    "Latitude": 52.286249,
    "Safety Score": 35.95511947
  },
  {
    "Longitude": -1.52606,
    "Latitude": 52.27472,
    "Safety Score": 58.28901781
  },
  {
    "Longitude": -1.52582,
    "Latitude": 52.27458,
    "Safety Score": 58.22000623
  },
  {
    "Longitude": -1.5256998,
    "Latitude": 52.2721847,
    "Safety Score": 40.48256548
  },
  {
    "Longitude": -1.52549,
    "Latitude": 52.27444,
    "Safety Score": 57.89241957
  },
  {
    "Longitude": -1.525,
    "Latitude": 52.27424,
    "Safety Score": 57.66587338
  },
  {
    "Longitude": -1.52497,
    "Latitude": 52.27646,
    "Safety Score": 43.57839784
  },
  {
    "Longitude": -1.52487,
    "Latitude": 52.2742,
    "Safety Score": 57.66587338
  },
  {
    "Longitude": -1.52483,
    "Latitude": 52.28707,
    "Safety Score": 35.60140427
  },
  {
    "Longitude": -1.52477,
    "Latitude": 52.27432,
    "Safety Score": 57.66587338
  },
  {
    "Longitude": -1.52474,
    "Latitude": 52.27435,
    "Safety Score": 57.66587338
  },
  {
    "Longitude": -1.5244127,
    "Latitude": 52.2867355,
    "Safety Score": 36.92616309
  },
  {
    "Longitude": -1.52441,
    "Latitude": 52.28674,
    "Safety Score": 36.92616309
  },
  {
    "Longitude": -1.52409,
    "Latitude": 52.27643,
    "Safety Score": 42.69060964
  },
  {
    "Longitude": -1.52292,
    "Latitude": 52.27638,
    "Safety Score": 42.45912086
  },
  {
    "Longitude": -1.52168,
    "Latitude": 52.27632,
    "Safety Score": 41.9224878
  },
  {
    "Longitude": -1.52121,
    "Latitude": 52.27633,
    "Safety Score": 41.9224878
  },
  {
    "Longitude": -1.52057,
    "Latitude": 52.27641,
    "Safety Score": 42.11777673
  },
  {
    "Longitude": -1.52028,
    "Latitude": 52.27645,
    "Safety Score": 41.77380576
  },
  {
    "Longitude": -1.52008,
    "Latitude": 52.27648,
    "Safety Score": 41.40869573
  },
  {
    "Longitude": -1.51993,
    "Latitude": 52.27645,
    "Safety Score": 41.06011982
  },
  {
    "Longitude": -1.51919,
    "Latitude": 52.27646,
    "Safety Score": 42.1209852
  },
  {
    "Longitude": -1.51873,
    "Latitude": 52.27635,
    "Safety Score": 42.41829593
  },
  {
    "Longitude": -1.518688,
    "Latitude": 52.277348,
    "Safety Score": 33.72896524
  },
  {
    "Longitude": -1.51851,
    "Latitude": 52.27633,
    "Safety Score": 42.77111574
  },
  {
    "Longitude": -1.51758,
    "Latitude": 52.27608,
    "Safety Score": 42.67821289
  },
  {
    "Longitude": -1.51742,
    "Latitude": 52.27607,
    "Safety Score": 42.8007792
  },
  {
    "Longitude": -1.51715,
    "Latitude": 52.27598,
    "Safety Score": 43.9498879
  },
  {
    "Longitude": -1.51677,
    "Latitude": 52.27587,
    "Safety Score": 44.4603813
  },
  {
    "Longitude": -1.51667,
    "Latitude": 52.27585,
    "Safety Score": 44.4603813
  },
  {
    "Longitude": -1.51665,
    "Latitude": 52.27586,
    "Safety Score": 44.4603813
  },
  {
    "Longitude": -1.51663,
    "Latitude": 52.27593,
    "Safety Score": 44.15209148
  },
  {
    "Longitude": -1.51643,
    "Latitude": 52.27595,
    "Safety Score": 44.15209148
  },
  {
    "Longitude": -1.5164124,
    "Latitude": 52.2760706,
    "Safety Score": 34.3445133
  },
  {
    "Longitude": -1.51641,
    "Latitude": 52.27619,
    "Safety Score": 44.45734096
  }
 ]
 
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
export const daytimeKDTree = buildKDTree(updated_safety_scores.map(item => ({
  latitude: item.Latitude, longitude: item.Longitude, safetyScore: getAverageSafetyScore(item.Latitude, item.Longitude, safety_scores)+5
})));

// Minus 5 from safety score for evening KD tree.
export const eveningKDTree = buildKDTree(updated_safety_scores.map(item => ({
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