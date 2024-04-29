import { kdTree } from 'kd-tree-javascript';


let safety_scores = 
[
  {
    "Latitude": 52.295042,
    "Longitude": -1.570058,
    "SafetyScore": 13.80620686
  },
  {
    "Latitude": 52.295042,
    "Longitude": -1.562762,
    "SafetyScore": 11.58090568
  },
  {
    "Latitude": 52.295042,
    "Longitude": -1.555381,
    "SafetyScore": 28.07885933
  },
  {
    "Latitude": 52.295042,
    "Longitude": -1.548171,
    "SafetyScore": 37.73148045
  },
  {
    "Latitude": 52.295042,
    "Longitude": -1.540875,
    "SafetyScore": 32.58106035
  },
  {
    "Latitude": 52.295042,
    "Longitude": -1.533494,
    "SafetyScore": 31.42341993
  },
  {
    "Latitude": 52.295042,
    "Longitude": -1.526155,
    "SafetyScore": 27.52080703
  },
  {
    "Latitude": 52.295042,
    "Longitude": -1.518688,
    "SafetyScore": 28.01797662
  },
  {
    "Latitude": 52.295042,
    "Longitude": -1.511564,
    "SafetyScore": 65
  },
  {
    "Latitude": 52.295042,
    "Longitude": -1.50414,
    "SafetyScore": 65
  },
  {
    "Latitude": 52.295042,
    "Longitude": -1.497617,
    "SafetyScore": 65
  },
  {
    "Latitude": 52.290777,
    "Longitude": -1.570058,
    "SafetyScore": 13.32681842
  },
  {
    "Latitude": 52.290777,
    "Longitude": -1.562762,
    "SafetyScore": 10.20351719
  },
  {
    "Latitude": 52.290777,
    "Longitude": -1.555381,
    "SafetyScore": 30.5746395
  },
  {
    "Latitude": 52.290777,
    "Longitude": -1.548171,
    "SafetyScore": 34.85210893
  },
  {
    "Latitude": 52.290777,
    "Longitude": -1.540875,
    "SafetyScore": 31.06807024
  },
  {
    "Latitude": 52.290777,
    "Longitude": -1.533494,
    "SafetyScore": 30.43200542
  },
  {
    "Latitude": 52.290777,
    "Longitude": -1.526155,
    "SafetyScore": 27.52225172
  },
  {
    "Latitude": 52.290777,
    "Longitude": -1.518688,
    "SafetyScore": 31.74882628
  },
  {
    "Latitude": 52.290777,
    "Longitude": -1.511564,
    "SafetyScore": 40.05803734
  },
  {
    "Latitude": 52.290777,
    "Longitude": -1.50414,
    "SafetyScore": 65
  },
  {
    "Latitude": 52.290777,
    "Longitude": -1.497617,
    "SafetyScore": 65
  },
  {
    "Latitude": 52.286249,
    "Longitude": -1.570058,
    "SafetyScore": 23.76975959
  },
  {
    "Latitude": 52.286249,
    "Longitude": -1.562762,
    "SafetyScore": 17.73159001
  },
  {
    "Latitude": 52.286249,
    "Longitude": -1.555381,
    "SafetyScore": 33.69278631
  },
  {
    "Latitude": 52.286249,
    "Longitude": -1.548171,
    "SafetyScore": 37.61852167
  },
  {
    "Latitude": 52.286249,
    "Longitude": -1.540875,
    "SafetyScore": 32.70540386
  },
  {
    "Latitude": 52.286249,
    "Longitude": -1.533494,
    "SafetyScore": 27.93619032
  },
  {
    "Latitude": 52.286249,
    "Longitude": -1.526155,
    "SafetyScore": 32.43056127
  },
  {
    "Latitude": 52.286249,
    "Longitude": -1.518688,
    "SafetyScore": 31.69629961
  },
  {
    "Latitude": 52.286249,
    "Longitude": -1.511564,
    "SafetyScore": 25.09083644
  },
  {
    "Latitude": 52.286249,
    "Longitude": -1.50414,
    "SafetyScore": -3.004107479
  },
  {
    "Latitude": 52.286249,
    "Longitude": -1.497617,
    "SafetyScore": 65
  },
  {
    "Latitude": 52.281418,
    "Longitude": -1.570058,
    "SafetyScore": 13.50297059
  },
  {
    "Latitude": 52.281418,
    "Longitude": -1.562762,
    "SafetyScore": 19.9088324
  },
  {
    "Latitude": 52.281418,
    "Longitude": -1.555381,
    "SafetyScore": 34.57138548
  },
  {
    "Latitude": 52.281418,
    "Longitude": -1.548171,
    "SafetyScore": 45.76309319
  },
  {
    "Latitude": 52.281418,
    "Longitude": -1.540875,
    "SafetyScore": 34.51479961
  },
  {
    "Latitude": 52.281418,
    "Longitude": -1.533494,
    "SafetyScore": 28.32540438
  },
  {
    "Latitude": 52.281418,
    "Longitude": -1.526155,
    "SafetyScore": 30.68995448
  },
  {
    "Latitude": 52.281418,
    "Longitude": -1.518688,
    "SafetyScore": 27.67714903
  },
  {
    "Latitude": 52.281418,
    "Longitude": -1.511564,
    "SafetyScore": 26.2335389
  },
  {
    "Latitude": 52.281418,
    "Longitude": -1.50414,
    "SafetyScore": 9.773879476
  },
  {
    "Latitude": 52.281418,
    "Longitude": -1.497617,
    "SafetyScore": 24.93154202
  },
  {
    "Latitude": 52.277348,
    "Longitude": -1.570058,
    "SafetyScore": 18.10315151
  },
  {
    "Latitude": 52.277348,
    "Longitude": -1.562762,
    "SafetyScore": 30.2867819
  },
  {
    "Latitude": 52.277348,
    "Longitude": -1.555381,
    "SafetyScore": 23.4290073
  },
  {
    "Latitude": 52.277348,
    "Longitude": -1.548171,
    "SafetyScore": 47.54033525
  },
  {
    "Latitude": 52.277348,
    "Longitude": -1.540875,
    "SafetyScore": 31.25690264
  },
  {
    "Latitude": 52.277348,
    "Longitude": -1.533494,
    "SafetyScore": 30.8251025
  },
  {
    "Latitude": 52.277348,
    "Longitude": -1.526155,
    "SafetyScore": 29.92839449
  },
  {
    "Latitude": 52.277348,
    "Longitude": -1.518688,
    "SafetyScore": 27.37719636
  },
  {
    "Latitude": 52.277348,
    "Longitude": -1.511564,
    "SafetyScore": 28.75739197
  },
  {
    "Latitude": 52.277348,
    "Longitude": -1.50414,
    "SafetyScore": 22.57873891
  },
  {
    "Latitude": 52.277348,
    "Longitude": -1.497617,
    "SafetyScore": 37.38607157
  },
  {
    "Latitude": 52.272517,
    "Longitude": -1.570058,
    "SafetyScore": 19.64886759
  },
  {
    "Latitude": 52.272517,
    "Longitude": -1.562762,
    "SafetyScore": 30.96850933
  },
  {
    "Latitude": 52.272517,
    "Longitude": -1.555381,
    "SafetyScore": 28.10350113
  },
  {
    "Latitude": 52.272517,
    "Longitude": -1.548171,
    "SafetyScore": 26.9997414
  },
  {
    "Latitude": 52.272517,
    "Longitude": -1.540875,
    "SafetyScore": 14.37074129
  },
  {
    "Latitude": 52.272517,
    "Longitude": -1.533494,
    "SafetyScore": 35.73451332
  },
  {
    "Latitude": 52.272517,
    "Longitude": -1.526155,
    "SafetyScore": 30.63005686
  },
  {
    "Latitude": 52.272517,
    "Longitude": -1.518688,
    "SafetyScore": 22.90974679
  },
  {
    "Latitude": 52.272517,
    "Longitude": -1.511564,
    "SafetyScore": 24.1162541
  },
  {
    "Latitude": 52.272517,
    "Longitude": -1.50414,
    "SafetyScore": -15
  },
  {
    "Latitude": 52.272517,
    "Longitude": -1.497617,
    "SafetyScore": 18.35726567
  },
  {
    "Latitude": 52.268551,
    "Longitude": -1.570058,
    "SafetyScore": 65
  },
  {
    "Latitude": 52.268551,
    "Longitude": -1.562762,
    "SafetyScore": 65
  },
  {
    "Latitude": 52.268551,
    "Longitude": -1.555381,
    "SafetyScore": 26.30451029
  },
  {
    "Latitude": 52.268551,
    "Longitude": -1.548171,
    "SafetyScore": 13.19688225
  },
  {
    "Latitude": 52.268551,
    "Longitude": -1.540875,
    "SafetyScore": 37.36757089
  },
  {
    "Latitude": 52.268551,
    "Longitude": -1.533494,
    "SafetyScore": 34.98260955
  },
  {
    "Latitude": 52.268551,
    "Longitude": -1.526155,
    "SafetyScore": 34.50297522
  },
  {
    "Latitude": 52.268551,
    "Longitude": -1.518688,
    "SafetyScore": 24.77801237
  },
  {
    "Latitude": 52.268551,
    "Longitude": -1.511564,
    "SafetyScore": 65
  },
  {
    "Latitude": 52.268551,
    "Longitude": -1.50414,
    "SafetyScore": 65
  },
  {
    "Latitude": 52.268551,
    "Longitude": -1.497617,
    "SafetyScore": 65
  },
  {
    "Latitude": 52.295042,
    "Longitude": -1.570058,
    "SafetyScore": 15.94410909
  },
  {
    "Latitude": 52.295042,
    "Longitude": -1.562762,
    "SafetyScore": 16.22163438
  },
  {
    "Latitude": 52.295042,
    "Longitude": -1.555381,
    "SafetyScore": 34.94333301
  },
  {
    "Latitude": 52.295042,
    "Longitude": -1.548171,
    "SafetyScore": 40.1465928
  },
  {
    "Latitude": 52.295042,
    "Longitude": -1.540875,
    "SafetyScore": 28.81002527
  },
  {
    "Latitude": 52.295042,
    "Longitude": -1.533494,
    "SafetyScore": 29.21267852
  },
  {
    "Latitude": 52.295042,
    "Longitude": -1.526155,
    "SafetyScore": 26.63726119
  },
  {
    "Latitude": 52.295042,
    "Longitude": -1.518688,
    "SafetyScore": 80.04672897
  },
  {
    "Latitude": 52.295042,
    "Longitude": -1.511564,
    "SafetyScore": 65
  },
  {
    "Latitude": 52.295042,
    "Longitude": -1.50414,
    "SafetyScore": 65
  },
  {
    "Latitude": 52.295042,
    "Longitude": -1.497617,
    "SafetyScore": 65
  },
  {
    "Latitude": 52.290777,
    "Longitude": -1.570058,
    "SafetyScore": 13.41289917
  },
  {
    "Latitude": 52.290777,
    "Longitude": -1.562762,
    "SafetyScore": 14.7279419
  },
  {
    "Latitude": 52.290777,
    "Longitude": -1.555381,
    "SafetyScore": 34.99202513
  },
  {
    "Latitude": 52.290777,
    "Longitude": -1.548171,
    "SafetyScore": 33.39640571
  },
  {
    "Latitude": 52.290777,
    "Longitude": -1.540875,
    "SafetyScore": 28.35393767
  },
  {
    "Latitude": 52.290777,
    "Longitude": -1.533494,
    "SafetyScore": 28.02567385
  },
  {
    "Latitude": 52.290777,
    "Longitude": -1.526155,
    "SafetyScore": 28.9029901
  },
  {
    "Latitude": 52.290777,
    "Longitude": -1.518688,
    "SafetyScore": 33.14694741
  },
  {
    "Latitude": 52.290777,
    "Longitude": -1.511564,
    "SafetyScore": 46.50019381
  },
  {
    "Latitude": 52.290777,
    "Longitude": -1.50414,
    "SafetyScore": 65
  },
  {
    "Latitude": 52.290777,
    "Longitude": -1.497617,
    "SafetyScore": 65
  },
  {
    "Latitude": 52.286249,
    "Longitude": -1.570058,
    "SafetyScore": 23.9217256
  },
  {
    "Latitude": 52.286249,
    "Longitude": -1.562762,
    "SafetyScore": 21.90186945
  },
  {
    "Latitude": 52.286249,
    "Longitude": -1.555381,
    "SafetyScore": 31.97755084
  },
  {
    "Latitude": 52.286249,
    "Longitude": -1.548171,
    "SafetyScore": 38.37916665
  },
  {
    "Latitude": 52.286249,
    "Longitude": -1.540875,
    "SafetyScore": 33.02564595
  },
  {
    "Latitude": 52.286249,
    "Longitude": -1.533494,
    "SafetyScore": 28.31057288
  },
  {
    "Latitude": 52.286249,
    "Longitude": -1.526155,
    "SafetyScore": 32.93791701
  },
  {
    "Latitude": 52.286249,
    "Longitude": -1.518688,
    "SafetyScore": 35.49071046
  },
  {
    "Latitude": 52.286249,
    "Longitude": -1.511564,
    "SafetyScore": 38.0295839
  },
  {
    "Latitude": 52.286249,
    "Longitude": -1.50414,
    "SafetyScore": 16.97793484
  },
  {
    "Latitude": 52.286249,
    "Longitude": -1.497617,
    "SafetyScore": 65
  },
  {
    "Latitude": 52.281418,
    "Longitude": -1.570058,
    "SafetyScore": 6.773048534
  },
  {
    "Latitude": 52.281418,
    "Longitude": -1.562762,
    "SafetyScore": 16.05071839
  },
  {
    "Latitude": 52.281418,
    "Longitude": -1.555381,
    "SafetyScore": 39.25352613
  },
  {
    "Latitude": 52.281418,
    "Longitude": -1.548171,
    "SafetyScore": 47.66235699
  },
  {
    "Latitude": 52.281418,
    "Longitude": -1.540875,
    "SafetyScore": 33.84189541
  },
  {
    "Latitude": 52.281418,
    "Longitude": -1.533494,
    "SafetyScore": 25.46501118
  },
  {
    "Latitude": 52.281418,
    "Longitude": -1.526155,
    "SafetyScore": 31.62706178
  },
  {
    "Latitude": 52.281418,
    "Longitude": -1.518688,
    "SafetyScore": 29.29833346
  },
  {
    "Latitude": 52.281418,
    "Longitude": -1.511564,
    "SafetyScore": 30.38599087
  },
  {
    "Latitude": 52.281418,
    "Longitude": -1.50414,
    "SafetyScore": 11.09540227
  },
  {
    "Latitude": 52.281418,
    "Longitude": -1.497617,
    "SafetyScore": 14.97931391
  },
  {
    "Latitude": 52.277348,
    "Longitude": -1.570058,
    "SafetyScore": 23.81025439
  },
  {
    "Latitude": 52.277348,
    "Longitude": -1.562762,
    "SafetyScore": 20.38582018
  },
  {
    "Latitude": 52.277348,
    "Longitude": -1.555381,
    "SafetyScore": 15.28712722
  },
  {
    "Latitude": 52.277348,
    "Longitude": -1.548171,
    "SafetyScore": 50.84755675
  },
  {
    "Latitude": 52.277348,
    "Longitude": -1.540875,
    "SafetyScore": 28.86889235
  },
  {
    "Latitude": 52.277348,
    "Longitude": -1.533494,
    "SafetyScore": 24.00056906
  },
  {
    "Latitude": 52.277348,
    "Longitude": -1.526155,
    "SafetyScore": 25.6748363
  },
  {
    "Latitude": 52.277348,
    "Longitude": -1.518688,
    "SafetyScore": 35.59638147
  },
  {
    "Latitude": 52.277348,
    "Longitude": -1.511564,
    "SafetyScore": 35.66819577
  },
  {
    "Latitude": 52.277348,
    "Longitude": -1.50414,
    "SafetyScore": 10.92828823
  },
  {
    "Latitude": 52.277348,
    "Longitude": -1.497617,
    "SafetyScore": 24.37012823
  },
  {
    "Latitude": 52.272517,
    "Longitude": -1.570058,
    "SafetyScore": 21.76828133
  },
  {
    "Latitude": 52.272517,
    "Longitude": -1.562762,
    "SafetyScore": 20.65989637
  },
  {
    "Latitude": 52.272517,
    "Longitude": -1.555381,
    "SafetyScore": 28.75559623
  },
  {
    "Latitude": 52.272517,
    "Longitude": -1.548171,
    "SafetyScore": 31.6279627
  },
  {
    "Latitude": 52.272517,
    "Longitude": -1.540875,
    "SafetyScore": 3.17538848
  },
  {
    "Latitude": 52.272517,
    "Longitude": -1.533494,
    "SafetyScore": 25.80024988
  },
  {
    "Latitude": 52.272517,
    "Longitude": -1.526155,
    "SafetyScore": 19.88735896
  },
  {
    "Latitude": 52.272517,
    "Longitude": -1.518688,
    "SafetyScore": 18.69285099
  },
  {
    "Latitude": 52.272517,
    "Longitude": -1.511564,
    "SafetyScore": 22.20500309
  },
  {
    "Latitude": 52.272517,
    "Longitude": -1.50414,
    "SafetyScore": 10.57793484
  },
  {
    "Latitude": 52.272517,
    "Longitude": -1.497617,
    "SafetyScore": 31.23967411
  },
  {
    "Latitude": 52.268551,
    "Longitude": -1.570058,
    "SafetyScore": 65
  },
  {
    "Latitude": 52.268551,
    "Longitude": -1.562762,
    "SafetyScore": 15.60322933
  },
  {
    "Latitude": 52.268551,
    "Longitude": -1.555381,
    "SafetyScore": 27.4925446
  },
  {
    "Latitude": 52.268551,
    "Longitude": -1.548171,
    "SafetyScore": 4.559916725
  },
  {
    "Latitude": 52.268551,
    "Longitude": -1.540875,
    "SafetyScore": 22.43993074
  },
  {
    "Latitude": 52.268551,
    "Longitude": -1.533494,
    "SafetyScore": 26.8388411
  },
  {
    "Latitude": 52.268551,
    "Longitude": -1.526155,
    "SafetyScore": 23.17848153
  },
  {
    "Latitude": 52.268551,
    "Longitude": -1.518688,
    "SafetyScore": 16.51570876
  },
  {
    "Latitude": 52.268551,
    "Longitude": -1.511564,
    "SafetyScore": 32.99172556
  },
  {
    "Latitude": 52.268551,
    "Longitude": -1.50414,
    "SafetyScore": 65
  },
  {
    "Latitude": 52.268551,
    "Longitude": -1.497617,
    "SafetyScore": 65
  },
  {
    "Latitude": 52.295042,
    "Longitude": -1.570058,
    "SafetyScore": 5.765907519
  },
  {
    "Latitude": 52.295042,
    "Longitude": -1.562762,
    "SafetyScore": 0.384046346
  },
  {
    "Latitude": 52.295042,
    "Longitude": -1.555381,
    "SafetyScore": 29.95026404
  },
  {
    "Latitude": 52.295042,
    "Longitude": -1.548171,
    "SafetyScore": 48.82309759
  },
  {
    "Latitude": 52.295042,
    "Longitude": -1.540875,
    "SafetyScore": 30.80111487
  },
  {
    "Latitude": 52.295042,
    "Longitude": -1.533494,
    "SafetyScore": 32.41165549
  },
  {
    "Latitude": 52.295042,
    "Longitude": -1.526155,
    "SafetyScore": 30.41587067
  },
  {
    "Latitude": 52.295042,
    "Longitude": -1.518688,
    "SafetyScore": 80.04672897
  },
  {
    "Latitude": 52.295042,
    "Longitude": -1.511564,
    "SafetyScore": 65
  },
  {
    "Latitude": 52.295042,
    "Longitude": -1.50414,
    "SafetyScore": 65
  },
  {
    "Latitude": 52.295042,
    "Longitude": -1.497617,
    "SafetyScore": 65
  },
  {
    "Latitude": 52.290777,
    "Longitude": -1.570058,
    "SafetyScore": 8.871849092
  },
  {
    "Latitude": 52.290777,
    "Longitude": -1.562762,
    "SafetyScore": 9.00682079
  },
  {
    "Latitude": 52.290777,
    "Longitude": -1.555381,
    "SafetyScore": 31.78362591
  },
  {
    "Latitude": 52.290777,
    "Longitude": -1.548171,
    "SafetyScore": 40.97818704
  },
  {
    "Latitude": 52.290777,
    "Longitude": -1.540875,
    "SafetyScore": 32.27087589
  },
  {
    "Latitude": 52.290777,
    "Longitude": -1.533494,
    "SafetyScore": 31.50441526
  },
  {
    "Latitude": 52.290777,
    "Longitude": -1.526155,
    "SafetyScore": 33.07678442
  },
  {
    "Latitude": 52.290777,
    "Longitude": -1.518688,
    "SafetyScore": 44.52255838
  },
  {
    "Latitude": 52.290777,
    "Longitude": -1.511564,
    "SafetyScore": 39.2710633
  },
  {
    "Latitude": 52.290777,
    "Longitude": -1.50414,
    "SafetyScore": 65
  },
  {
    "Latitude": 52.290777,
    "Longitude": -1.497617,
    "SafetyScore": 65
  },
  {
    "Latitude": 52.286249,
    "Longitude": -1.570058,
    "SafetyScore": 24.3754188
  },
  {
    "Latitude": 52.286249,
    "Longitude": -1.562762,
    "SafetyScore": 21.29885933
  },
  {
    "Latitude": 52.286249,
    "Longitude": -1.555381,
    "SafetyScore": 31.80973373
  },
  {
    "Latitude": 52.286249,
    "Longitude": -1.548171,
    "SafetyScore": 46.80914523
  },
  {
    "Latitude": 52.286249,
    "Longitude": -1.540875,
    "SafetyScore": 37.44985011
  },
  {
    "Latitude": 52.286249,
    "Longitude": -1.533494,
    "SafetyScore": 28.86069275
  },
  {
    "Latitude": 52.286249,
    "Longitude": -1.526155,
    "SafetyScore": 31.46203807
  },
  {
    "Latitude": 52.286249,
    "Longitude": -1.518688,
    "SafetyScore": 31.48439429
  },
  {
    "Latitude": 52.286249,
    "Longitude": -1.511564,
    "SafetyScore": 26.21694335
  },
  {
    "Latitude": 52.286249,
    "Longitude": -1.50414,
    "SafetyScore": 65
  },
  {
    "Latitude": 52.286249,
    "Longitude": -1.497617,
    "SafetyScore": 65
  },
  {
    "Latitude": 52.281418,
    "Longitude": -1.570058,
    "SafetyScore": 34.9294657
  },
  {
    "Latitude": 52.281418,
    "Longitude": -1.562762,
    "SafetyScore": 10.10257554
  },
  {
    "Latitude": 52.281418,
    "Longitude": -1.555381,
    "SafetyScore": 31.05208958
  },
  {
    "Latitude": 52.281418,
    "Longitude": -1.548171,
    "SafetyScore": 45.28989985
  },
  {
    "Latitude": 52.281418,
    "Longitude": -1.540875,
    "SafetyScore": 37.99861006
  },
  {
    "Latitude": 52.281418,
    "Longitude": -1.533494,
    "SafetyScore": 27.26867104
  },
  {
    "Latitude": 52.281418,
    "Longitude": -1.526155,
    "SafetyScore": 29.05577948
  },
  {
    "Latitude": 52.281418,
    "Longitude": -1.518688,
    "SafetyScore": 28.73382539
  },
  {
    "Latitude": 52.281418,
    "Longitude": -1.511564,
    "SafetyScore": 31.07960031
  },
  {
    "Latitude": 52.281418,
    "Longitude": -1.50414,
    "SafetyScore": 13.05467941
  },
  {
    "Latitude": 52.281418,
    "Longitude": -1.497617,
    "SafetyScore": 18.97601834
  },
  {
    "Latitude": 52.277348,
    "Longitude": -1.570058,
    "SafetyScore": 15.62881326
  },
  {
    "Latitude": 52.277348,
    "Longitude": -1.562762,
    "SafetyScore": 10.11112679
  },
  {
    "Latitude": 52.277348,
    "Longitude": -1.555381,
    "SafetyScore": 14.61967492
  },
  {
    "Latitude": 52.277348,
    "Longitude": -1.548171,
    "SafetyScore": 45.8124463
  },
  {
    "Latitude": 52.277348,
    "Longitude": -1.540875,
    "SafetyScore": 31.96050079
  },
  {
    "Latitude": 52.277348,
    "Longitude": -1.533494,
    "SafetyScore": 28.21372213
  },
  {
    "Latitude": 52.277348,
    "Longitude": -1.526155,
    "SafetyScore": 28.04284126
  },
  {
    "Latitude": 52.277348,
    "Longitude": -1.518688,
    "SafetyScore": 28.06912028
  },
  {
    "Latitude": 52.277348,
    "Longitude": -1.511564,
    "SafetyScore": 32.4473134
  },
  {
    "Latitude": 52.277348,
    "Longitude": -1.50414,
    "SafetyScore": 10.80426732
  },
  {
    "Latitude": 52.277348,
    "Longitude": -1.497617,
    "SafetyScore": 28.20104887
  },
  {
    "Latitude": 52.272517,
    "Longitude": -1.570058,
    "SafetyScore": 15.62881326
  },
  {
    "Latitude": 52.272517,
    "Longitude": -1.562762,
    "SafetyScore": 17.18736803
  },
  {
    "Latitude": 52.272517,
    "Longitude": -1.555381,
    "SafetyScore": 24.16372409
  },
  {
    "Latitude": 52.272517,
    "Longitude": -1.548171,
    "SafetyScore": 38.03149584
  },
  {
    "Latitude": 52.272517,
    "Longitude": -1.540875,
    "SafetyScore": 31.00266107
  },
  {
    "Latitude": 52.272517,
    "Longitude": -1.533494,
    "SafetyScore": 30.40779961
  },
  {
    "Latitude": 52.272517,
    "Longitude": -1.526155,
    "SafetyScore": 23.08714292
  },
  {
    "Latitude": 52.272517,
    "Longitude": -1.518688,
    "SafetyScore": 21.97779272
  },
  {
    "Latitude": 52.272517,
    "Longitude": -1.511564,
    "SafetyScore": 19.88733266
  },
  {
    "Latitude": 52.272517,
    "Longitude": -1.50414,
    "SafetyScore": 8.283959325
  },
  {
    "Latitude": 52.272517,
    "Longitude": -1.497617,
    "SafetyScore": 24.43269079
  },
  {
    "Latitude": 52.268551,
    "Longitude": -1.570058,
    "SafetyScore": 65
  },
  {
    "Latitude": 52.268551,
    "Longitude": -1.562762,
    "SafetyScore": 7.051344819
  },
  {
    "Latitude": 52.268551,
    "Longitude": -1.555381,
    "SafetyScore": 23.29749943
  },
  {
    "Latitude": 52.268551,
    "Longitude": -1.548171,
    "SafetyScore": 14.29568625
  },
  {
    "Latitude": 52.268551,
    "Longitude": -1.540875,
    "SafetyScore": 40.61608996
  },
  {
    "Latitude": 52.268551,
    "Longitude": -1.533494,
    "SafetyScore": 29.2047258
  },
  {
    "Latitude": 52.268551,
    "Longitude": -1.526155,
    "SafetyScore": 27.6894339
  },
  {
    "Latitude": 52.268551,
    "Longitude": -1.518688,
    "SafetyScore": 22.66835655
  },
  {
    "Latitude": 52.268551,
    "Longitude": -1.511564,
    "SafetyScore": -15
  },
  {
    "Latitude": 52.268551,
    "Longitude": -1.50414,
    "SafetyScore": 65
  },
  {
    "Latitude": 52.268551,
    "Longitude": -1.497617,
    "SafetyScore": 65
  }
];

let updated_safety_scores = [
  {
    "Latitude": 52.2721847,
    "Longitude": -1.5256998,
    "SafetyScore": 33.192720786841726
  },
  {
    "Latitude": 52.272517,
    "Longitude": -1.526155,
    "SafetyScore": 33.52708376081907
  },
  {
    "Latitude": 52.2742,
    "Longitude": -1.52487,
    "SafetyScore": 46.8958095323062
  },
  {
    "Latitude": 52.27424,
    "Longitude": -1.525,
    "SafetyScore": 46.8958095323062
  },
  {
    "Latitude": 52.27432,
    "Longitude": -1.52477,
    "SafetyScore": 46.8958095323062
  },
  {
    "Latitude": 52.27435,
    "Longitude": -1.52474,
    "SafetyScore": 46.8958095323062
  },
  {
    "Latitude": 52.27444,
    "Longitude": -1.52549,
    "SafetyScore": 47.07939192418363
  },
  {
    "Latitude": 52.27458,
    "Longitude": -1.52582,
    "SafetyScore": 47.34485277939592
  },
  {
    "Latitude": 52.27472,
    "Longitude": -1.52606,
    "SafetyScore": 47.40077652501694
  },
  {
    "Latitude": 52.27488,
    "Longitude": -1.52629,
    "SafetyScore": 47.45065741183305
  },
  {
    "Latitude": 52.27509,
    "Longitude": -1.52648,
    "SafetyScore": 47.942943926016824
  },
  {
    "Latitude": 52.27517,
    "Longitude": -1.52654,
    "SafetyScore": 47.942943926016824
  },
  {
    "Latitude": 52.27543,
    "Longitude": -1.52666,
    "SafetyScore": 48.30191979644284
  },
  {
    "Latitude": 52.2758,
    "Longitude": -1.52685,
    "SafetyScore": 48.22325239743003
  },
  {
    "Latitude": 52.27585,
    "Longitude": -1.51667,
    "SafetyScore": 36.30542734354814
  },
  {
    "Latitude": 52.27586,
    "Longitude": -1.51665,
    "SafetyScore": 36.30542734354814
  },
  {
    "Latitude": 52.27587,
    "Longitude": -1.51677,
    "SafetyScore": 36.30542734354814
  },
  {
    "Latitude": 52.27593,
    "Longitude": -1.52691,
    "SafetyScore": 48.22325239743003
  },
  {
    "Latitude": 52.27593,
    "Longitude": -1.51663,
    "SafetyScore": 36.05560374150516
  },
  {
    "Latitude": 52.27595,
    "Longitude": -1.51643,
    "SafetyScore": 36.05560374150516
  },
  {
    "Latitude": 52.27598,
    "Longitude": -1.51715,
    "SafetyScore": 35.89174745570594
  },
  {
    "Latitude": 52.27606,
    "Longitude": -1.52694,
    "SafetyScore": 48.3267138505903
  },
  {
    "Latitude": 52.27607,
    "Longitude": -1.51742,
    "SafetyScore": 34.96056371193877
  },
  {
    "Latitude": 52.2760706,
    "Longitude": -1.5164124,
    "SafetyScore": 28.108002819703785
  },
  {
    "Latitude": 52.27608,
    "Longitude": -1.51758,
    "SafetyScore": 34.861241729305114
  },
  {
    "Latitude": 52.27619,
    "Longitude": -1.51641,
    "SafetyScore": 36.302963594421115
  },
  {
    "Latitude": 52.2762555,
    "Longitude": -1.5348337,
    "SafetyScore": 30.36807081861652
  },
  {
    "Latitude": 52.27626,
    "Longitude": -1.53483,
    "SafetyScore": 48.4469512257412
  },
  {
    "Latitude": 52.27627,
    "Longitude": -1.5342,
    "SafetyScore": 48.21457909767213
  },
  {
    "Latitude": 52.27628,
    "Longitude": -1.5356,
    "SafetyScore": 48.271575411239006
  },
  {
    "Latitude": 52.2762849,
    "Longitude": -1.5356019,
    "SafetyScore": 32.908979991391675
  },
  {
    "Latitude": 52.27632,
    "Longitude": -1.53311,
    "SafetyScore": 48.47430045885263
  },
  {
    "Latitude": 52.27632,
    "Longitude": -1.5322,
    "SafetyScore": 48.59850757136186
  },
  {
    "Latitude": 52.27632,
    "Longitude": -1.52168,
    "SafetyScore": 34.02738031940188
  },
  {
    "Latitude": 52.27633,
    "Longitude": -1.52121,
    "SafetyScore": 34.082744638918655
  },
  {
    "Latitude": 52.27633,
    "Longitude": -1.51851,
    "SafetyScore": 34.82579719773167
  },
  {
    "Latitude": 52.27635,
    "Longitude": -1.53088,
    "SafetyScore": 48.69728008856024
  },
  {
    "Latitude": 52.27635,
    "Longitude": -1.51873,
    "SafetyScore": 34.53988858910866
  },
  {
    "Latitude": 52.27637,
    "Longitude": -1.52971,
    "SafetyScore": 48.63855700459566
  },
  {
    "Latitude": 52.27638,
    "Longitude": -1.52843,
    "SafetyScore": 42.368796319648915
  },
  {
    "Latitude": 52.27638,
    "Longitude": -1.52292,
    "SafetyScore": 34.46224255331456
  },
  {
    "Latitude": 52.2763825,
    "Longitude": -1.5284333,
    "SafetyScore": 28.747613113542048
  },
  {
    "Latitude": 52.27641,
    "Longitude": -1.52057,
    "SafetyScore": 34.185633293911856
  },
  {
    "Latitude": 52.27642,
    "Longitude": -1.52703,
    "SafetyScore": 48.3417969959177
  },
  {
    "Latitude": 52.27642,
    "Longitude": -1.52697,
    "SafetyScore": 48.231068356884144
  },
  {
    "Latitude": 52.27643,
    "Longitude": -1.52409,
    "SafetyScore": 34.649830190939795
  },
  {
    "Latitude": 52.27645,
    "Longitude": -1.52624,
    "SafetyScore": 36.077963542476496
  },
  {
    "Latitude": 52.27645,
    "Longitude": -1.52028,
    "SafetyScore": 33.906895367608506
  },
  {
    "Latitude": 52.27645,
    "Longitude": -1.51993,
    "SafetyScore": 33.328557792067905
  },
  {
    "Latitude": 52.27646,
    "Longitude": -1.52497,
    "SafetyScore": 35.36925206942973
  },
  {
    "Latitude": 52.27646,
    "Longitude": -1.51919,
    "SafetyScore": 34.29896192632675
  },
  {
    "Latitude": 52.27648,
    "Longitude": -1.52008,
    "SafetyScore": 33.611027341355005
  },
  {
    "Latitude": 52.277348,
    "Longitude": -1.518688,
    "SafetyScore": 27.4984629335104
  },
  {
    "Latitude": 52.27856,
    "Longitude": -1.54559,
    "SafetyScore": 38.39339147342837
  },
  {
    "Latitude": 52.27856,
    "Longitude": -1.54535,
    "SafetyScore": 38.28266283439482
  },
  {
    "Latitude": 52.27856,
    "Longitude": -1.54514,
    "SafetyScore": 37.77015046693475
  },
  {
    "Latitude": 52.2785643,
    "Longitude": -1.545145,
    "SafetyScore": 41.59648634479735
  },
  {
    "Latitude": 52.2789332,
    "Longitude": -1.5472643,
    "SafetyScore": 57.18223458532461
  },
  {
    "Latitude": 52.2789466,
    "Longitude": -1.5471869,
    "SafetyScore": 40.98471550135514
  },
  {
    "Latitude": 52.27902,
    "Longitude": -1.54565,
    "SafetyScore": 38.43870367264688
  },
  {
    "Latitude": 52.27903,
    "Longitude": -1.54334,
    "SafetyScore": 33.176531814934
  },
  {
    "Latitude": 52.27919,
    "Longitude": -1.5457,
    "SafetyScore": 37.34091432352202
  },
  {
    "Latitude": 52.27921,
    "Longitude": -1.54481,
    "SafetyScore": 34.45502814370499
  },
  {
    "Latitude": 52.27921,
    "Longitude": -1.54475,
    "SafetyScore": 34.10173926319454
  },
  {
    "Latitude": 52.27924,
    "Longitude": -1.54296,
    "SafetyScore": 33.327109657377406
  },
  {
    "Latitude": 52.27925,
    "Longitude": -1.54465,
    "SafetyScore": 34.10173926319454
  },
  {
    "Latitude": 52.2792974,
    "Longitude": -1.5298098,
    "SafetyScore": 35.010197373685706
  },
  {
    "Latitude": 52.2793,
    "Longitude": -1.52981,
    "SafetyScore": 37.05265143171003
  },
  {
    "Latitude": 52.27932,
    "Longitude": -1.54493,
    "SafetyScore": 34.39966382418822
  },
  {
    "Latitude": 52.2794,
    "Longitude": -1.54578,
    "SafetyScore": 37.34091432352202
  },
  {
    "Latitude": 52.27956,
    "Longitude": -1.54404,
    "SafetyScore": 33.54856693544451
  },
  {
    "Latitude": 52.27957,
    "Longitude": -1.5459,
    "SafetyScore": 37.45164296255558
  },
  {
    "Latitude": 52.27959,
    "Longitude": -1.54576,
    "SafetyScore": 37.45164296255558
  },
  {
    "Latitude": 52.27962,
    "Longitude": -1.54523,
    "SafetyScore": 34.22140165972589
  },
  {
    "Latitude": 52.27963,
    "Longitude": -1.5455,
    "SafetyScore": 37.23018568448847
  },
  {
    "Latitude": 52.27966,
    "Longitude": -1.5453,
    "SafetyScore": 36.91174655370798
  },
  {
    "Latitude": 52.27968,
    "Longitude": -1.54216,
    "SafetyScore": 32.61564060061268
  },
  {
    "Latitude": 52.28023,
    "Longitude": -1.54084,
    "SafetyScore": 31.73339243920658
  },
  {
    "Latitude": 52.28029,
    "Longitude": -1.53424,
    "SafetyScore": 28.346621969332602
  },
  {
    "Latitude": 52.28032,
    "Longitude": -1.54049,
    "SafetyScore": 31.389596263993315
  },
  {
    "Latitude": 52.28036,
    "Longitude": -1.53431,
    "SafetyScore": 28.02882454405751
  },
  {
    "Latitude": 52.28037,
    "Longitude": -1.53437,
    "SafetyScore": 27.918095905023947
  },
  {
    "Latitude": 52.28038,
    "Longitude": -1.53972,
    "SafetyScore": 30.563800731187797
  },
  {
    "Latitude": 52.28051,
    "Longitude": -1.53824,
    "SafetyScore": 30.754502605148307
  },
  {
    "Latitude": 52.2807,
    "Longitude": -1.5345,
    "SafetyScore": 27.512168761040545
  },
  {
    "Latitude": 52.280894,
    "Longitude": -1.5445862,
    "SafetyScore": 31.40918800128024
  },
  {
    "Latitude": 52.28097,
    "Longitude": -1.53633,
    "SafetyScore": 30.922522632042632
  },
  {
    "Latitude": 52.28099,
    "Longitude": -1.5346,
    "SafetyScore": 27.60561640954681
  },
  {
    "Latitude": 52.281047,
    "Longitude": -1.5446566,
    "SafetyScore": 31.187730723213136
  },
  {
    "Latitude": 52.2812,
    "Longitude": -1.54693,
    "SafetyScore": 30.905772073988885
  },
  {
    "Latitude": 52.2812049,
    "Longitude": -1.5469286,
    "SafetyScore": 32.77123008925606
  },
  {
    "Latitude": 52.28125,
    "Longitude": -1.54696,
    "SafetyScore": 30.905772073988885
  },
  {
    "Latitude": 52.28125,
    "Longitude": -1.5467,
    "SafetyScore": 30.905772073988885
  },
  {
    "Latitude": 52.28128,
    "Longitude": -1.5466,
    "SafetyScore": 30.961136393505665
  },
  {
    "Latitude": 52.28128,
    "Longitude": -1.54569,
    "SafetyScore": 30.961136393505665
  },
  {
    "Latitude": 52.28128,
    "Longitude": -1.5456,
    "SafetyScore": 30.668734844136825
  },
  {
    "Latitude": 52.2812835,
    "Longitude": -1.5456867,
    "SafetyScore": 32.82659440877284
  },
  {
    "Latitude": 52.28129,
    "Longitude": -1.54557,
    "SafetyScore": 30.668734844136825
  },
  {
    "Latitude": 52.28131,
    "Longitude": -1.54571,
    "SafetyScore": 30.961136393505665
  },
  {
    "Latitude": 52.28131,
    "Longitude": -1.53498,
    "SafetyScore": 31.787840101670128
  },
  {
    "Latitude": 52.28136,
    "Longitude": -1.54574,
    "SafetyScore": 30.961136393505665
  },
  {
    "Latitude": 52.28136,
    "Longitude": -1.54553,
    "SafetyScore": 30.668734844136825
  },
  {
    "Latitude": 52.28138,
    "Longitude": -1.54705,
    "SafetyScore": 30.961136393505665
  },
  {
    "Latitude": 52.28138,
    "Longitude": -1.54587,
    "SafetyScore": 30.961136393505665
  },
  {
    "Latitude": 52.28138,
    "Longitude": -1.53471,
    "SafetyScore": 31.532285848942063
  },
  {
    "Latitude": 52.281384,
    "Longitude": -1.5470501,
    "SafetyScore": 32.82659440877284
  },
  {
    "Latitude": 52.28139,
    "Longitude": -1.5455,
    "SafetyScore": 30.55800620510327
  },
  {
    "Latitude": 52.281418,
    "Longitude": -1.548171,
    "SafetyScore": 44.242972711175334
  },
  {
    "Latitude": 52.28143,
    "Longitude": -1.54555,
    "SafetyScore": 30.668734844136825
  },
  {
    "Latitude": 52.28151,
    "Longitude": -1.53475,
    "SafetyScore": 30.05019489270356
  },
  {
    "Latitude": 52.28164,
    "Longitude": -1.5455,
    "SafetyScore": 30.55800620510327
  },
  {
    "Latitude": 52.2818,
    "Longitude": -1.53485,
    "SafetyScore": 30.510286554260535
  },
  {
    "Latitude": 52.28182,
    "Longitude": -1.54551,
    "SafetyScore": 30.55800620510327
  },
  {
    "Latitude": 52.2821,
    "Longitude": -1.54798,
    "SafetyScore": 49.02719267991
  },
  {
    "Latitude": 52.28211,
    "Longitude": -1.54861,
    "SafetyScore": 48.95577043638656
  },
  {
    "Latitude": 52.28211,
    "Longitude": -1.54772,
    "SafetyScore": 49.08255699942678
  },
  {
    "Latitude": 52.28211,
    "Longitude": -1.53491,
    "SafetyScore": 30.673798826451005
  },
  {
    "Latitude": 52.28214,
    "Longitude": -1.54747,
    "SafetyScore": 49.129984509044654
  },
  {
    "Latitude": 52.28217,
    "Longitude": -1.54919,
    "SafetyScore": 47.973215570705804
  },
  {
    "Latitude": 52.28218,
    "Longitude": -1.54736,
    "SafetyScore": 49.129984509044654
  },
  {
    "Latitude": 52.28223,
    "Longitude": -1.5349,
    "SafetyScore": 31.005984743551664
  },
  {
    "Latitude": 52.28226,
    "Longitude": -1.54954,
    "SafetyScore": 47.75652239296801
  },
  {
    "Latitude": 52.28236,
    "Longitude": -1.5312424,
    "SafetyScore": 50.040234373026415
  },
  {
    "Latitude": 52.28236,
    "Longitude": -1.53124,
    "SafetyScore": 48.71389849516382
  },
  {
    "Latitude": 52.28238,
    "Longitude": -1.54998,
    "SafetyScore": 47.75652239296801
  },
  {
    "Latitude": 52.2824,
    "Longitude": -1.55,
    "SafetyScore": 47.75652239296801
  },
  {
    "Latitude": 52.28243,
    "Longitude": -1.53486,
    "SafetyScore": 31.090231253801704
  },
  {
    "Latitude": 52.28244,
    "Longitude": -1.55252,
    "SafetyScore": 44.40283774973474
  },
  {
    "Latitude": 52.28245,
    "Longitude": -1.55269,
    "SafetyScore": 44.85367056753745
  },
  {
    "Latitude": 52.28245,
    "Longitude": -1.54654,
    "SafetyScore": 49.129984509044654
  },
  {
    "Latitude": 52.28248,
    "Longitude": -1.55215,
    "SafetyScore": 47.650114657649176
  },
  {
    "Latitude": 52.28248,
    "Longitude": -1.55028,
    "SafetyScore": 46.96337754686403
  },
  {
    "Latitude": 52.28248,
    "Longitude": -1.55001,
    "SafetyScore": 47.75652239296801
  },
  {
    "Latitude": 52.28249,
    "Longitude": -1.55023,
    "SafetyScore": 46.96337754686403
  },
  {
    "Latitude": 52.28251,
    "Longitude": -1.55001,
    "SafetyScore": 47.75652239296801
  },
  {
    "Latitude": 52.28252,
    "Longitude": -1.55296,
    "SafetyScore": 44.85367056753745
  },
  {
    "Latitude": 52.28252,
    "Longitude": -1.55016,
    "SafetyScore": 47.02871696129512
  },
  {
    "Latitude": 52.28252,
    "Longitude": -1.55003,
    "SafetyScore": 47.72438281872643
  },
  {
    "Latitude": 52.28253,
    "Longitude": -1.55049,
    "SafetyScore": 47.0196115793291
  },
  {
    "Latitude": 52.28253,
    "Longitude": -1.54557,
    "SafetyScore": 31.231611616459393
  },
  {
    "Latitude": 52.28254,
    "Longitude": -1.55011,
    "SafetyScore": 47.67019644417035
  },
  {
    "Latitude": 52.2826,
    "Longitude": -1.5515,
    "SafetyScore": 47.69105530782699
  },
  {
    "Latitude": 52.28261,
    "Longitude": -1.55083,
    "SafetyScore": 47.67377851673701
  },
  {
    "Latitude": 52.28264,
    "Longitude": -1.55111,
    "SafetyScore": 47.69105530782699
  },
  {
    "Latitude": 52.28269,
    "Longitude": -1.54571,
    "SafetyScore": 31.49994167353296
  },
  {
    "Latitude": 52.2827,
    "Longitude": -1.55337,
    "SafetyScore": 44.85367056753745
  },
  {
    "Latitude": 52.28273,
    "Longitude": -1.54573,
    "SafetyScore": 48.976086711700894
  },
  {
    "Latitude": 52.28273,
    "Longitude": -1.53471,
    "SafetyScore": 30.729979903465438
  },
  {
    "Latitude": 52.28275,
    "Longitude": -1.55349,
    "SafetyScore": 44.85367056753745
  },
  {
    "Latitude": 52.28279,
    "Longitude": -1.55354,
    "SafetyScore": 44.85367056753745
  },
  {
    "Latitude": 52.28279,
    "Longitude": -1.5458,
    "SafetyScore": 31.49994167353296
  },
  {
    "Latitude": 52.28282,
    "Longitude": -1.54582,
    "SafetyScore": 31.49994167353296
  },
  {
    "Latitude": 52.28285,
    "Longitude": -1.54579,
    "SafetyScore": 31.49994167353296
  },
  {
    "Latitude": 52.28291,
    "Longitude": -1.53462,
    "SafetyScore": 30.69399038111996
  },
  {
    "Latitude": 52.28294,
    "Longitude": -1.54552,
    "SafetyScore": 31.231611616459393
  },
  {
    "Latitude": 52.28295,
    "Longitude": -1.55368,
    "SafetyScore": 44.85367056753745
  },
  {
    "Latitude": 52.28296,
    "Longitude": -1.54551,
    "SafetyScore": 31.231611616459393
  },
  {
    "Latitude": 52.283,
    "Longitude": -1.54587,
    "SafetyScore": 46.24071775495789
  },
  {
    "Latitude": 52.28301,
    "Longitude": -1.54622,
    "SafetyScore": 46.24071775495789
  },
  {
    "Latitude": 52.28303,
    "Longitude": -1.54554,
    "SafetyScore": 40.07607726531435
  },
  {
    "Latitude": 52.28309,
    "Longitude": -1.54473,
    "SafetyScore": 47.35829960766507
  },
  {
    "Latitude": 52.28312,
    "Longitude": -1.54515,
    "SafetyScore": 39.83074198369568
  },
  {
    "Latitude": 52.28313,
    "Longitude": -1.54652,
    "SafetyScore": 46.24071775495789
  },
  {
    "Latitude": 52.28315,
    "Longitude": -1.55396,
    "SafetyScore": 44.85367056753745
  },
  {
    "Latitude": 52.28321,
    "Longitude": -1.54669,
    "SafetyScore": 46.24071775495789
  },
  {
    "Latitude": 52.28323,
    "Longitude": -1.53446,
    "SafetyScore": 30.87703855787517
  },
  {
    "Latitude": 52.28324,
    "Longitude": -1.54675,
    "SafetyScore": 46.24071775495789
  },
  {
    "Latitude": 52.28324,
    "Longitude": -1.5448,
    "SafetyScore": 30.279476853903542
  },
  {
    "Latitude": 52.28325,
    "Longitude": -1.54678,
    "SafetyScore": 46.24071775495789
  },
  {
    "Latitude": 52.2833039,
    "Longitude": -1.5488877,
    "SafetyScore": 54.47829336931651
  },
  {
    "Latitude": 52.28332,
    "Longitude": -1.54408,
    "SafetyScore": 49.23085049242044
  },
  {
    "Latitude": 52.28336,
    "Longitude": -1.54443,
    "SafetyScore": 45.02025293532848
  },
  {
    "Latitude": 52.28337,
    "Longitude": -1.53438,
    "SafetyScore": 31.459502125620602
  },
  {
    "Latitude": 52.28342,
    "Longitude": -1.54688,
    "SafetyScore": 46.24071775495789
  },
  {
    "Latitude": 52.28342,
    "Longitude": -1.5442,
    "SafetyScore": 31.754705454252502
  },
  {
    "Latitude": 52.28342,
    "Longitude": -1.5436,
    "SafetyScore": 49.23085049242044
  },
  {
    "Latitude": 52.28345,
    "Longitude": -1.53435,
    "SafetyScore": 31.678453257133697
  },
  {
    "Latitude": 52.28346,
    "Longitude": -1.54403,
    "SafetyScore": 46.495481535677435
  },
  {
    "Latitude": 52.28347,
    "Longitude": -1.54692,
    "SafetyScore": 46.24071775495789
  },
  {
    "Latitude": 52.2834728,
    "Longitude": -1.5469188,
    "SafetyScore": 41.266163047578765
  },
  {
    "Latitude": 52.28352,
    "Longitude": -1.54377,
    "SafetyScore": 31.754705454252502
  },
  {
    "Latitude": 52.28354,
    "Longitude": -1.54357,
    "SafetyScore": 46.91719243616033
  },
  {
    "Latitude": 52.28354,
    "Longitude": -1.54218,
    "SafetyScore": 47.51764523393519
  },
  {
    "Latitude": 52.28359,
    "Longitude": -1.5432,
    "SafetyScore": 46.78674578943471
  },
  {
    "Latitude": 52.2836,
    "Longitude": -1.54297,
    "SafetyScore": 46.78674578943471
  },
  {
    "Latitude": 52.28361,
    "Longitude": -1.5429,
    "SafetyScore": 32.04596970800978
  },
  {
    "Latitude": 52.28362,
    "Longitude": -1.54303,
    "SafetyScore": 46.78674578943471
  },
  {
    "Latitude": 52.28366,
    "Longitude": -1.54227,
    "SafetyScore": 29.934161527163326
  },
  {
    "Latitude": 52.28368,
    "Longitude": -1.5431,
    "SafetyScore": 46.51460650182116
  },
  {
    "Latitude": 52.28372,
    "Longitude": -1.53421,
    "SafetyScore": 32.250588599217245
  },
  {
    "Latitude": 52.28376,
    "Longitude": -1.55485,
    "SafetyScore": 44.75910664874066
  },
  {
    "Latitude": 52.2837661,
    "Longitude": -1.5431489,
    "SafetyScore": 38.79196019138859
  },
  {
    "Latitude": 52.28377,
    "Longitude": -1.54315,
    "SafetyScore": 46.51460650182116
  },
  {
    "Latitude": 52.28377,
    "Longitude": -1.5404,
    "SafetyScore": 44.88511070023346
  },
  {
    "Latitude": 52.28379,
    "Longitude": -1.54127,
    "SafetyScore": 29.092125884855616
  },
  {
    "Latitude": 52.28389,
    "Longitude": -1.54707,
    "SafetyScore": 46.22421415698059
  },
  {
    "Latitude": 52.28392,
    "Longitude": -1.53917,
    "SafetyScore": 44.55647629410407
  },
  {
    "Latitude": 52.28394,
    "Longitude": -1.53196,
    "SafetyScore": 48.52422629435464
  },
  {
    "Latitude": 52.28397,
    "Longitude": -1.53858,
    "SafetyScore": 44.204996660233014
  },
  {
    "Latitude": 52.28397,
    "Longitude": -1.53666,
    "SafetyScore": 42.446078410779585
  },
  {
    "Latitude": 52.28398,
    "Longitude": -1.53755,
    "SafetyScore": 43.32413539474873
  },
  {
    "Latitude": 52.28398,
    "Longitude": -1.53688,
    "SafetyScore": 42.43593018969256
  },
  {
    "Latitude": 52.28399,
    "Longitude": -1.53982,
    "SafetyScore": 26.927644411270226
  },
  {
    "Latitude": 52.284,
    "Longitude": -1.53412,
    "SafetyScore": 38.9281241470797
  },
  {
    "Latitude": 52.28403,
    "Longitude": -1.53464,
    "SafetyScore": 21.397184876269407
  },
  {
    "Latitude": 52.28403,
    "Longitude": -1.53327,
    "SafetyScore": 30.214473133316133
  },
  {
    "Latitude": 52.28403,
    "Longitude": -1.53316,
    "SafetyScore": 43.79748840049171
  },
  {
    "Latitude": 52.28405,
    "Longitude": -1.53303,
    "SafetyScore": 30.234070089636003
  },
  {
    "Latitude": 52.28406,
    "Longitude": -1.54712,
    "SafetyScore": 46.11348551794703
  },
  {
    "Latitude": 52.28406,
    "Longitude": -1.53513,
    "SafetyScore": 39.96071486987964
  },
  {
    "Latitude": 52.2840609,
    "Longitude": -1.5351349,
    "SafetyScore": 32.794684335528494
  },
  {
    "Latitude": 52.28407,
    "Longitude": -1.53203,
    "SafetyScore": 48.5247289154154
  },
  {
    "Latitude": 52.28408,
    "Longitude": -1.53901,
    "SafetyScore": 26.728851622065083
  },
  {
    "Latitude": 52.28409,
    "Longitude": -1.53262,
    "SafetyScore": 48.46085817452467
  },
  {
    "Latitude": 52.28411,
    "Longitude": -1.53582,
    "SafetyScore": 43.41516791816944
  },
  {
    "Latitude": 52.28413,
    "Longitude": -1.53464,
    "SafetyScore": 21.41389554485689
  },
  {
    "Latitude": 52.28414,
    "Longitude": -1.53831,
    "SafetyScore": 27.040317219676268
  },
  {
    "Latitude": 52.28414,
    "Longitude": -1.53665,
    "SafetyScore": 42.72325331944796
  },
  {
    "Latitude": 52.28415,
    "Longitude": -1.53795,
    "SafetyScore": 26.994785779681337
  },
  {
    "Latitude": 52.28415,
    "Longitude": -1.5367,
    "SafetyScore": 25.190607879181005
  },
  {
    "Latitude": 52.28416,
    "Longitude": -1.53771,
    "SafetyScore": 26.23564124986685
  },
  {
    "Latitude": 52.28416,
    "Longitude": -1.53212,
    "SafetyScore": 48.44268242371424
  },
  {
    "Latitude": 52.28416929999999,
    "Longitude": -1.5321236,
    "SafetyScore": 49.824382621093626
  },
  {
    "Latitude": 52.28418,
    "Longitude": -1.53414,
    "SafetyScore": 34.08589924000977
  },
  {
    "Latitude": 52.28418,
    "Longitude": -1.53214,
    "SafetyScore": 48.498046743231015
  },
  {
    "Latitude": 52.28421,
    "Longitude": -1.54717,
    "SafetyScore": 46.11348551794703
  },
  {
    "Latitude": 52.28422,
    "Longitude": -1.53473,
    "SafetyScore": 21.41817150556045
  },
  {
    "Latitude": 52.28426,
    "Longitude": -1.53476,
    "SafetyScore": 21.40874204884983
  },
  {
    "Latitude": 52.28429,
    "Longitude": -1.53484,
    "SafetyScore": 21.35337772933305
  },
  {
    "Latitude": 52.2843,
    "Longitude": -1.53489,
    "SafetyScore": 21.35337772933305
  },
  {
    "Latitude": 52.28431,
    "Longitude": -1.53668,
    "SafetyScore": 25.21990043570945
  },
  {
    "Latitude": 52.28434,
    "Longitude": -1.55584,
    "SafetyScore": 45.42082484637765
  },
  {
    "Latitude": 52.28434,
    "Longitude": -1.53665,
    "SafetyScore": 25.279279958742006
  },
  {
    "Latitude": 52.28436,
    "Longitude": -1.53586,
    "SafetyScore": 25.983504574621076
  },
  {
    "Latitude": 52.28436,
    "Longitude": -1.53507,
    "SafetyScore": 21.242649090299498
  },
  {
    "Latitude": 52.28437,
    "Longitude": -1.53661,
    "SafetyScore": 25.334644278258782
  },
  {
    "Latitude": 52.28437,
    "Longitude": -1.53638,
    "SafetyScore": 25.326830465813725
  },
  {
    "Latitude": 52.28437,
    "Longitude": -1.53618,
    "SafetyScore": 25.74397749192036
  },
  {
    "Latitude": 52.28438,
    "Longitude": -1.53647,
    "SafetyScore": 25.326830465813725
  },
  {
    "Latitude": 52.28439,
    "Longitude": -1.55596,
    "SafetyScore": 45.263939576759526
  },
  {
    "Latitude": 52.284399,
    "Longitude": -1.5315297,
    "SafetyScore": 30.231228940502195
  },
  {
    "Latitude": 52.2844,
    "Longitude": -1.53586,
    "SafetyScore": 25.983504574621076
  },
  {
    "Latitude": 52.2844,
    "Longitude": -1.53563,
    "SafetyScore": 26.53809054454871
  },
  {
    "Latitude": 52.2844,
    "Longitude": -1.53153,
    "SafetyScore": 30.231228940502195
  },
  {
    "Latitude": 52.28441,
    "Longitude": -1.53562,
    "SafetyScore": 26.53809054454871
  },
  {
    "Latitude": 52.28442,
    "Longitude": -1.5352,
    "SafetyScore": 21.172440025924477
  },
  {
    "Latitude": 52.28443,
    "Longitude": -1.55604,
    "SafetyScore": 45.263939576759526
  },
  {
    "Latitude": 52.28443,
    "Longitude": -1.5356,
    "SafetyScore": 26.53809054454871
  },
  {
    "Latitude": 52.28443,
    "Longitude": -1.53559,
    "SafetyScore": 26.544203892385337
  },
  {
    "Latitude": 52.28443,
    "Longitude": -1.53323,
    "SafetyScore": 30.137877753798506
  },
  {
    "Latitude": 52.28444,
    "Longitude": -1.53554,
    "SafetyScore": 26.59876004841325
  },
  {
    "Latitude": 52.28444,
    "Longitude": -1.53546,
    "SafetyScore": 23.649718421856154
  },
  {
    "Latitude": 52.28451,
    "Longitude": -1.53545,
    "SafetyScore": 26.61966116994776
  },
  {
    "Latitude": 52.28455,
    "Longitude": -1.53545,
    "SafetyScore": 20.67977567376455
  },
  {
    "Latitude": 52.28458,
    "Longitude": -1.53426,
    "SafetyScore": 33.86888566253359
  },
  {
    "Latitude": 52.28459,
    "Longitude": -1.55636,
    "SafetyScore": 45.263939576759526
  },
  {
    "Latitude": 52.28459,
    "Longitude": -1.54724,
    "SafetyScore": 45.81400546089258
  },
  {
    "Latitude": 52.28459,
    "Longitude": -1.53544,
    "SafetyScore": 26.61966116994776
  },
  {
    "Latitude": 52.28464,
    "Longitude": -1.55642,
    "SafetyScore": 45.263939576759526
  },
  {
    "Latitude": 52.28471,
    "Longitude": -1.55646,
    "SafetyScore": 45.139893775232814
  },
  {
    "Latitude": 52.28474,
    "Longitude": -1.53544,
    "SafetyScore": 20.66080315813514
  },
  {
    "Latitude": 52.28475,
    "Longitude": -1.53377,
    "SafetyScore": 31.95793300225348
  },
  {
    "Latitude": 52.28476,
    "Longitude": -1.55544,
    "SafetyScore": 45.015847973706094
  },
  {
    "Latitude": 52.28477,
    "Longitude": -1.54724,
    "SafetyScore": 45.76505823281979
  },
  {
    "Latitude": 52.28478,
    "Longitude": -1.53391,
    "SafetyScore": 31.818645893027803
  },
  {
    "Latitude": 52.2847851,
    "Longitude": -1.5325758,
    "SafetyScore": 49.56400822509746
  },
  {
    "Latitude": 52.28479,
    "Longitude": -1.53544,
    "SafetyScore": 26.600688654318347
  },
  {
    "Latitude": 52.28483,
    "Longitude": -1.55438,
    "SafetyScore": 47.3461275743361
  },
  {
    "Latitude": 52.28485,
    "Longitude": -1.53145,
    "SafetyScore": 30.105483625721405
  },
  {
    "Latitude": 52.28486,
    "Longitude": -1.55428,
    "SafetyScore": 47.3461275743361
  },
  {
    "Latitude": 52.28486,
    "Longitude": -1.53346,
    "SafetyScore": 31.812728684222765
  },
  {
    "Latitude": 52.28491,
    "Longitude": -1.55395,
    "SafetyScore": 47.3461275743361
  },
  {
    "Latitude": 52.28492,
    "Longitude": -1.53438,
    "SafetyScore": 33.51502417772121
  },
  {
    "Latitude": 52.28494,
    "Longitude": -1.55356,
    "SafetyScore": 47.3461275743361
  },
  {
    "Latitude": 52.28499,
    "Longitude": -1.55289,
    "SafetyScore": 47.3461275743361
  },
  {
    "Latitude": 52.28502,
    "Longitude": -1.55704,
    "SafetyScore": 44.79439069563898
  },
  {
    "Latitude": 52.28502,
    "Longitude": -1.53352,
    "SafetyScore": 33.86350445079558
  },
  {
    "Latitude": 52.28503,
    "Longitude": -1.53542,
    "SafetyScore": 20.659297668229726
  },
  {
    "Latitude": 52.28503,
    "Longitude": -1.53355,
    "SafetyScore": 33.86350445079558
  },
  {
    "Latitude": 52.28506,
    "Longitude": -1.5523,
    "SafetyScore": 47.47520365967981
  },
  {
    "Latitude": 52.28506,
    "Longitude": -1.53542,
    "SafetyScore": 23.629240416321327
  },
  {
    "Latitude": 52.28506,
    "Longitude": -1.53357,
    "SafetyScore": 33.86350445079558
  },
  {
    "Latitude": 52.28508,
    "Longitude": -1.53553,
    "SafetyScore": 20.714661987746503
  },
  {
    "Latitude": 52.28509,
    "Longitude": -1.5357,
    "SafetyScore": 20.422018167142145
  },
  {
    "Latitude": 52.2851,
    "Longitude": -1.56291,
    "SafetyScore": 47.90621431295606
  },
  {
    "Latitude": 52.2851,
    "Longitude": -1.53618,
    "SafetyScore": 19.959741004241376
  },
  {
    "Latitude": 52.2851,
    "Longitude": -1.53592,
    "SafetyScore": 26.065719458974915
  },
  {
    "Latitude": 52.28511,
    "Longitude": -1.53628,
    "SafetyScore": 22.61524178771278
  },
  {
    "Latitude": 52.28514,
    "Longitude": -1.53637,
    "SafetyScore": 19.534570400587622
  },
  {
    "Latitude": 52.28517,
    "Longitude": -1.55178,
    "SafetyScore": 47.47520365967981
  },
  {
    "Latitude": 52.2852,
    "Longitude": -1.53652,
    "SafetyScore": 19.52481634700653
  },
  {
    "Latitude": 52.28523,
    "Longitude": -1.53365,
    "SafetyScore": 34.11578617290014
  },
  {
    "Latitude": 52.28524,
    "Longitude": -1.53659,
    "SafetyScore": 25.528777537715694
  },
  {
    "Latitude": 52.28525,
    "Longitude": -1.56258,
    "SafetyScore": 47.90621431295606
  },
  {
    "Latitude": 52.28525,
    "Longitude": -1.53662,
    "SafetyScore": 19.53352772201571
  },
  {
    "Latitude": 52.28526,
    "Longitude": -1.53365,
    "SafetyScore": 34.11578617290014
  },
  {
    "Latitude": 52.28527,
    "Longitude": -1.54722,
    "SafetyScore": 43.602577191237664
  },
  {
    "Latitude": 52.28529959999999,
    "Longitude": -1.5345806,
    "SafetyScore": 43.50488915157385
  },
  {
    "Latitude": 52.2853,
    "Longitude": -1.53665,
    "SafetyScore": 19.53352772201571
  },
  {
    "Latitude": 52.2853,
    "Longitude": -1.53458,
    "SafetyScore": 31.460041823329572
  },
  {
    "Latitude": 52.2853,
    "Longitude": -1.53361,
    "SafetyScore": 34.11578617290014
  },
  {
    "Latitude": 52.28532,
    "Longitude": -1.53666,
    "SafetyScore": 25.418048898682134
  },
  {
    "Latitude": 52.28534,
    "Longitude": -1.53664,
    "SafetyScore": 19.53352772201571
  },
  {
    "Latitude": 52.28535,
    "Longitude": -1.55051,
    "SafetyScore": 45.301222676053364
  },
  {
    "Latitude": 52.28536,
    "Longitude": -1.55769,
    "SafetyScore": 44.19054468322228
  },
  {
    "Latitude": 52.28538,
    "Longitude": -1.55773,
    "SafetyScore": 43.94245308016884
  },
  {
    "Latitude": 52.28538,
    "Longitude": -1.53146,
    "SafetyScore": 30.315542150341702
  },
  {
    "Latitude": 52.2854,
    "Longitude": -1.56318,
    "SafetyScore": 47.33718332998467
  },
  {
    "Latitude": 52.2854,
    "Longitude": -1.55777,
    "SafetyScore": 44.19054468322228
  },
  {
    "Latitude": 52.2854,
    "Longitude": -1.5504,
    "SafetyScore": 45.301222676053364
  },
  {
    "Latitude": 52.28541,
    "Longitude": -1.55786,
    "SafetyScore": 44.19054468322228
  },
  {
    "Latitude": 52.28542,
    "Longitude": -1.5579,
    "SafetyScore": 43.94245308016884
  },
  {
    "Latitude": 52.28544,
    "Longitude": -1.55795,
    "SafetyScore": 44.19054468322228
  },
  {
    "Latitude": 52.28544,
    "Longitude": -1.53655,
    "SafetyScore": 25.520066162706513
  },
  {
    "Latitude": 52.2854409,
    "Longitude": -1.5373244,
    "SafetyScore": 42.24398092047169
  },
  {
    "Latitude": 52.28545,
    "Longitude": -1.53294,
    "SafetyScore": 34.093475437134224
  },
  {
    "Latitude": 52.28549,
    "Longitude": -1.56326,
    "SafetyScore": 47.33718332998467
  },
  {
    "Latitude": 52.2855,
    "Longitude": -1.55803,
    "SafetyScore": 44.19054468322228
  },
  {
    "Latitude": 52.28551,
    "Longitude": -1.5365,
    "SafetyScore": 19.61223117385282
  },
  {
    "Latitude": 52.28552,
    "Longitude": -1.56332,
    "SafetyScore": 47.39094003622967
  },
  {
    "Latitude": 52.28554,
    "Longitude": -1.55808,
    "SafetyScore": 46.23609036927885
  },
  {
    "Latitude": 52.28554,
    "Longitude": -1.5501,
    "SafetyScore": 45.301222676053364
  },
  {
    "Latitude": 52.28554,
    "Longitude": -1.54724,
    "SafetyScore": 43.602577191237664
  },
  {
    "Latitude": 52.28554,
    "Longitude": -1.53538,
    "SafetyScore": 30.837725332037547
  },
  {
    "Latitude": 52.28556,
    "Longitude": -1.53567,
    "SafetyScore": 30.554064159465124
  },
  {
    "Latitude": 52.28557,
    "Longitude": -1.53472,
    "SafetyScore": 32.3663918227494
  },
  {
    "Latitude": 52.2856,
    "Longitude": -1.56199,
    "SafetyScore": 46.81623294618339
  },
  {
    "Latitude": 52.2856,
    "Longitude": -1.53589,
    "SafetyScore": 30.021133012902748
  },
  {
    "Latitude": 52.28565,
    "Longitude": -1.54992,
    "SafetyScore": 45.89854053828365
  },
  {
    "Latitude": 52.28569,
    "Longitude": -1.53394,
    "SafetyScore": 34.219817258511235
  },
  {
    "Latitude": 52.2857,
    "Longitude": -1.53616,
    "SafetyScore": 29.85504005435242
  },
  {
    "Latitude": 52.2857262,
    "Longitude": -1.5330768,
    "SafetyScore": 49.485377248933105
  },
  {
    "Latitude": 52.28573,
    "Longitude": -1.5473,
    "SafetyScore": 43.602577191237664
  },
  {
    "Latitude": 52.28573,
    "Longitude": -1.53308,
    "SafetyScore": 32.13327801229188
  },
  {
    "Latitude": 52.28574,
    "Longitude": -1.56431,
    "SafetyScore": 46.96397883345234
  },
  {
    "Latitude": 52.28574,
    "Longitude": -1.53636,
    "SafetyScore": 23.561106733928355
  },
  {
    "Latitude": 52.28578,
    "Longitude": -1.5316,
    "SafetyScore": 30.321037012027023
  },
  {
    "Latitude": 52.28579,
    "Longitude": -1.54732,
    "SafetyScore": 43.54721287172089
  },
  {
    "Latitude": 52.28579389999999,
    "Longitude": -1.5332444,
    "SafetyScore": 49.66886957173682
  },
  {
    "Latitude": 52.2858,
    "Longitude": -1.53649,
    "SafetyScore": 19.72732768094932
  },
  {
    "Latitude": 52.28581699999999,
    "Longitude": -1.5330837,
    "SafetyScore": 49.66886957173682
  },
  {
    "Latitude": 52.28582,
    "Longitude": -1.55874,
    "SafetyScore": 46.95359591020328
  },
  {
    "Latitude": 52.28582,
    "Longitude": -1.53308,
    "SafetyScore": 34.30627415188949
  },
  {
    "Latitude": 52.28588,
    "Longitude": -1.53633,
    "SafetyScore": 27.697198014745535
  },
  {
    "Latitude": 52.28589,
    "Longitude": -1.54948,
    "SafetyScore": 45.553354026770826
  },
  {
    "Latitude": 52.2859,
    "Longitude": -1.55897,
    "SafetyScore": 46.70550430714983
  },
  {
    "Latitude": 52.28592,
    "Longitude": -1.56422,
    "SafetyScore": 46.24926700883854
  },
  {
    "Latitude": 52.28594,
    "Longitude": -1.54932,
    "SafetyScore": 45.570357783975474
  },
  {
    "Latitude": 52.28594,
    "Longitude": -1.54749,
    "SafetyScore": 43.43648423268733
  },
  {
    "Latitude": 52.28597,
    "Longitude": -1.53628,
    "SafetyScore": 25.861622481533583
  },
  {
    "Latitude": 52.28602,
    "Longitude": -1.53626,
    "SafetyScore": 29.640248435732058
  },
  {
    "Latitude": 52.28603,
    "Longitude": -1.55937,
    "SafetyScore": 47.119688868753606
  },
  {
    "Latitude": 52.28603,
    "Longitude": -1.53736,
    "SafetyScore": 20.930101673404806
  },
  {
    "Latitude": 52.28604,
    "Longitude": -1.53626,
    "SafetyScore": 25.861622481533583
  },
  {
    "Latitude": 52.28606,
    "Longitude": -1.53626,
    "SafetyScore": 29.755956750765232
  },
  {
    "Latitude": 52.2861,
    "Longitude": -1.53629,
    "SafetyScore": 25.97733079656676
  },
  {
    "Latitude": 52.28612,
    "Longitude": -1.54787,
    "SafetyScore": 42.62476975166493
  },
  {
    "Latitude": 52.28613,
    "Longitude": -1.54898,
    "SafetyScore": 45.570357783975474
  },
  {
    "Latitude": 52.28613,
    "Longitude": -1.53312,
    "SafetyScore": 32.26880453219031
  },
  {
    "Latitude": 52.28616,
    "Longitude": -1.54912,
    "SafetyScore": 45.570357783975474
  },
  {
    "Latitude": 52.28616,
    "Longitude": -1.54906,
    "SafetyScore": 45.570357783975474
  },
  {
    "Latitude": 52.28616,
    "Longitude": -1.53637,
    "SafetyScore": 29.513709978032306
  },
  {
    "Latitude": 52.28617,
    "Longitude": -1.55979,
    "SafetyScore": 46.87159726570017
  },
  {
    "Latitude": 52.2861809,
    "Longitude": -1.5318264,
    "SafetyScore": 35.628937470031595
  },
  {
    "Latitude": 52.28619,
    "Longitude": -1.56407,
    "SafetyScore": 46.575029651310096
  },
  {
    "Latitude": 52.28621,
    "Longitude": -1.54867,
    "SafetyScore": 45.61252211738474
  },
  {
    "Latitude": 52.28621,
    "Longitude": -1.53646,
    "SafetyScore": 26.024876226681613
  },
  {
    "Latitude": 52.28623,
    "Longitude": -1.53647,
    "SafetyScore": 29.80350218088009
  },
  {
    "Latitude": 52.28624,
    "Longitude": -1.53316,
    "SafetyScore": 33.757017385080154
  },
  {
    "Latitude": 52.286249,
    "Longitude": -1.570058,
    "SafetyScore": 41.05949644861173
  },
  {
    "Latitude": 52.286249,
    "Longitude": -1.548171,
    "SafetyScore": 38.15069005631603
  },
  {
    "Latitude": 52.286249,
    "Longitude": -1.540875,
    "SafetyScore": 33.57531471492203
  },
  {
    "Latitude": 52.286249,
    "Longitude": -1.533494,
    "SafetyScore": 37.05711357921993
  },
  {
    "Latitude": 52.286249,
    "Longitude": -1.526155,
    "SafetyScore": 29.46852676665453
  },
  {
    "Latitude": 52.28628,
    "Longitude": -1.56007,
    "SafetyScore": 47.175053188270375
  },
  {
    "Latitude": 52.28629,
    "Longitude": -1.54861,
    "SafetyScore": 45.61252211738474
  },
  {
    "Latitude": 52.2863,
    "Longitude": -1.56011,
    "SafetyScore": 46.92696158521695
  },
  {
    "Latitude": 52.2863,
    "Longitude": -1.53189,
    "SafetyScore": 29.750079060005675
  },
  {
    "Latitude": 52.28632,
    "Longitude": -1.53186,
    "SafetyScore": 29.750079060005675
  },
  {
    "Latitude": 52.28633,
    "Longitude": -1.56024,
    "SafetyScore": 47.175053188270375
  },
  {
    "Latitude": 52.28634,
    "Longitude": -1.56102,
    "SafetyScore": 43.651685705138995
  },
  {
    "Latitude": 52.28636,
    "Longitude": -1.56032,
    "SafetyScore": 44.993165789177176
  },
  {
    "Latitude": 52.28638,
    "Longitude": -1.5366,
    "SafetyScore": 29.814823777184657
  },
  {
    "Latitude": 52.28638,
    "Longitude": -1.53128,
    "SafetyScore": 29.64522456004313
  },
  {
    "Latitude": 52.28639,
    "Longitude": -1.56041,
    "SafetyScore": 45.241257392230615
  },
  {
    "Latitude": 52.28644,
    "Longitude": -1.56319,
    "SafetyScore": 44.77347443040927
  },
  {
    "Latitude": 52.28646,
    "Longitude": -1.56076,
    "SafetyScore": 43.586939402574984
  },
  {
    "Latitude": 52.28646,
    "Longitude": -1.56055,
    "SafetyScore": 43.586939402574984
  },
  {
    "Latitude": 52.28648,
    "Longitude": -1.56386,
    "SafetyScore": 44.77347443040927
  },
  {
    "Latitude": 52.2865,
    "Longitude": -1.53728,
    "SafetyScore": 19.499850697045854
  },
  {
    "Latitude": 52.2865,
    "Longitude": -1.5367,
    "SafetyScore": 25.804066173299077
  },
  {
    "Latitude": 52.28652,
    "Longitude": -1.54854,
    "SafetyScore": 45.61252211738474
  },
  {
    "Latitude": 52.28653,
    "Longitude": -1.56066,
    "SafetyScore": 43.83503100562842
  },
  {
    "Latitude": 52.28653,
    "Longitude": -1.53332,
    "SafetyScore": 32.01725188926891
  },
  {
    "Latitude": 52.28655,
    "Longitude": -1.56064,
    "SafetyScore": 43.7918711206317
  },
  {
    "Latitude": 52.28656,
    "Longitude": -1.56379,
    "SafetyScore": 44.71602471561047
  },
  {
    "Latitude": 52.28657,
    "Longitude": -1.52949,
    "SafetyScore": 30.337762373634906
  },
  {
    "Latitude": 52.28658,
    "Longitude": -1.56075,
    "SafetyScore": 43.7918711206317
  },
  {
    "Latitude": 52.28658,
    "Longitude": -1.56061,
    "SafetyScore": 43.7918711206317
  },
  {
    "Latitude": 52.28659,
    "Longitude": -1.53338,
    "SafetyScore": 33.27985812361191
  },
  {
    "Latitude": 52.2866,
    "Longitude": -1.54848,
    "SafetyScore": 45.61252211738474
  },
  {
    "Latitude": 52.28661,
    "Longitude": -1.54955,
    "SafetyScore": 43.06607667308126
  },
  {
    "Latitude": 52.28662,
    "Longitude": -1.56082,
    "SafetyScore": 44.039962723685136
  },
  {
    "Latitude": 52.28663,
    "Longitude": -1.5496,
    "SafetyScore": 43.06607667308126
  },
  {
    "Latitude": 52.28663,
    "Longitude": -1.53679,
    "SafetyScore": 29.644337947300347
  },
  {
    "Latitude": 52.28665,
    "Longitude": -1.56084,
    "SafetyScore": 43.7918711206317
  },
  {
    "Latitude": 52.28668,
    "Longitude": -1.53731,
    "SafetyScore": 19.565209475047826
  },
  {
    "Latitude": 52.28669,
    "Longitude": -1.56092,
    "SafetyScore": 43.780185082302836
  },
  {
    "Latitude": 52.28671,
    "Longitude": -1.54984,
    "SafetyScore": 43.06607667308126
  },
  {
    "Latitude": 52.28673,
    "Longitude": -1.54981,
    "SafetyScore": 43.06607667308126
  },
  {
    "Latitude": 52.2867355,
    "Longitude": -1.5244127,
    "SafetyScore": 30.144686293534832
  },
  {
    "Latitude": 52.28674,
    "Longitude": -1.52441,
    "SafetyScore": 30.144686293534832
  },
  {
    "Latitude": 52.28675,
    "Longitude": -1.56105,
    "SafetyScore": 43.33067679076944
  },
  {
    "Latitude": 52.28676,
    "Longitude": -1.54975,
    "SafetyScore": 43.06607667308126
  },
  {
    "Latitude": 52.28677,
    "Longitude": -1.53687,
    "SafetyScore": 27.767261772934614
  },
  {
    "Latitude": 52.28678,
    "Longitude": -1.54828,
    "SafetyScore": 45.61252211738474
  },
  {
    "Latitude": 52.28679,
    "Longitude": -1.53738,
    "SafetyScore": 19.75984675427825
  },
  {
    "Latitude": 52.28681,
    "Longitude": -1.56078,
    "SafetyScore": 43.67175564928625
  },
  {
    "Latitude": 52.28681,
    "Longitude": -1.54941,
    "SafetyScore": 43.08308043028591
  },
  {
    "Latitude": 52.28683,
    "Longitude": -1.56127,
    "SafetyScore": 43.51657778769239
  },
  {
    "Latitude": 52.28683,
    "Longitude": -1.56086,
    "SafetyScore": 43.67175564928625
  },
  {
    "Latitude": 52.28683,
    "Longitude": -1.53357,
    "SafetyScore": 30.694037764414688
  },
  {
    "Latitude": 52.28686,
    "Longitude": -1.54923,
    "SafetyScore": 43.08308043028591
  },
  {
    "Latitude": 52.28687,
    "Longitude": -1.53698,
    "SafetyScore": 29.65623990550901
  },
  {
    "Latitude": 52.28688,
    "Longitude": -1.53362,
    "SafetyScore": 32.799932986882645
  },
  {
    "Latitude": 52.28688,
    "Longitude": -1.52646,
    "SafetyScore": 29.219931043643133
  },
  {
    "Latitude": 52.28689,
    "Longitude": -1.53364,
    "SafetyScore": 28.725505505966613
  },
  {
    "Latitude": 52.2869,
    "Longitude": -1.53339,
    "SafetyScore": 32.48438659233247
  },
  {
    "Latitude": 52.28691,
    "Longitude": -1.53702,
    "SafetyScore": 25.81524579394302
  },
  {
    "Latitude": 52.28693,
    "Longitude": -1.54914,
    "SafetyScore": 43.08308043028591
  },
  {
    "Latitude": 52.28694,
    "Longitude": -1.53705,
    "SafetyScore": 25.30415509455418
  },
  {
    "Latitude": 52.28694,
    "Longitude": -1.53704,
    "SafetyScore": 39.25135611236588
  },
  {
    "Latitude": 52.28695,
    "Longitude": -1.53701,
    "SafetyScore": 34.5953654700506
  },
  {
    "Latitude": 52.28698,
    "Longitude": -1.53761,
    "SafetyScore": 19.881196866068674
  },
  {
    "Latitude": 52.28698,
    "Longitude": -1.53696,
    "SafetyScore": 24.477678857978578
  },
  {
    "Latitude": 52.28699,
    "Longitude": -1.53323,
    "SafetyScore": 33.05066855818422
  },
  {
    "Latitude": 52.28699,
    "Longitude": -1.53319,
    "SafetyScore": 33.05066855818422
  },
  {
    "Latitude": 52.28702,
    "Longitude": -1.53692,
    "SafetyScore": 35.01252791031979
  },
  {
    "Latitude": 52.28702,
    "Longitude": -1.53322,
    "SafetyScore": 33.05066855818422
  },
  {
    "Latitude": 52.28705,
    "Longitude": -1.56206,
    "SafetyScore": 44.909902032989486
  },
  {
    "Latitude": 52.28706,
    "Longitude": -1.53687,
    "SafetyScore": 24.564779833485602
  },
  {
    "Latitude": 52.28707,
    "Longitude": -1.52483,
    "SafetyScore": 29.07116393275525
  },
  {
    "Latitude": 52.28708,
    "Longitude": -1.53386,
    "SafetyScore": 44.633524262438975
  },
  {
    "Latitude": 52.28709,
    "Longitude": -1.5489,
    "SafetyScore": 42.22604723999367
  },
  {
    "Latitude": 52.2871,
    "Longitude": -1.53666,
    "SafetyScore": 43.61643359071075
  },
  {
    "Latitude": 52.28711,
    "Longitude": -1.54778,
    "SafetyScore": 44.565353152048885
  },
  {
    "Latitude": 52.28712,
    "Longitude": -1.53681,
    "SafetyScore": 34.757975299463844
  },
  {
    "Latitude": 52.28712,
    "Longitude": -1.53468,
    "SafetyScore": 44.17703747588698
  },
  {
    "Latitude": 52.28713,
    "Longitude": -1.53791,
    "SafetyScore": 20.26773543831061
  },
  {
    "Latitude": 52.28713,
    "Longitude": -1.5351,
    "SafetyScore": 44.17582452007991
  },
  {
    "Latitude": 52.28714,
    "Longitude": -1.54876,
    "SafetyScore": 42.54821008307266
  },
  {
    "Latitude": 52.28714,
    "Longitude": -1.53685,
    "SafetyScore": 24.604344689453672
  },
  {
    "Latitude": 52.28714,
    "Longitude": -1.53329,
    "SafetyScore": 32.937163174497904
  },
  {
    "Latitude": 52.28715,
    "Longitude": -1.53747,
    "SafetyScore": 43.50224353775337
  },
  {
    "Latitude": 52.28718,
    "Longitude": -1.53751,
    "SafetyScore": 35.69690002630299
  },
  {
    "Latitude": 52.28718,
    "Longitude": -1.53541,
    "SafetyScore": 44.03289608728874
  },
  {
    "Latitude": 52.28721,
    "Longitude": -1.56292,
    "SafetyScore": 44.82277732208629
  },
  {
    "Latitude": 52.28721,
    "Longitude": -1.5369,
    "SafetyScore": 24.606280534337532
  },
  {
    "Latitude": 52.28724,
    "Longitude": -1.53689,
    "SafetyScore": 24.585592419712643
  },
  {
    "Latitude": 52.28724,
    "Longitude": -1.53554,
    "SafetyScore": 44.001561458679134
  },
  {
    "Latitude": 52.28724,
    "Longitude": -1.53434,
    "SafetyScore": 29.03924014490261
  },
  {
    "Latitude": 52.28725,
    "Longitude": -1.54856,
    "SafetyScore": 41.949653382398886
  },
  {
    "Latitude": 52.28725,
    "Longitude": -1.53562,
    "SafetyScore": 44.02293070783378
  },
  {
    "Latitude": 52.28726,
    "Longitude": -1.56445,
    "SafetyScore": 44.83816652340581
  },
  {
    "Latitude": 52.28726,
    "Longitude": -1.56413,
    "SafetyScore": 44.75281250983878
  },
  {
    "Latitude": 52.28726,
    "Longitude": -1.56333,
    "SafetyScore": 44.75281250983878
  },
  {
    "Latitude": 52.28726,
    "Longitude": -1.53821,
    "SafetyScore": 20.260560914150293
  },
  {
    "Latitude": 52.28726,
    "Longitude": -1.53566,
    "SafetyScore": 44.02347998100225
  },
  {
    "Latitude": 52.28726,
    "Longitude": -1.5356,
    "SafetyScore": 44.02293070783378
  },
  {
    "Latitude": 52.28726,
    "Longitude": -1.53345,
    "SafetyScore": 44.620806931635705
  },
  {
    "Latitude": 52.28727,
    "Longitude": -1.56382,
    "SafetyScore": 44.75281250983878
  },
  {
    "Latitude": 52.28727,
    "Longitude": -1.53664,
    "SafetyScore": 26.424327997805864
  },
  {
    "Latitude": 52.28727,
    "Longitude": -1.53421,
    "SafetyScore": 44.645643283816774
  },
  {
    "Latitude": 52.28728,
    "Longitude": -1.53574,
    "SafetyScore": 44.02347998100225
  },
  {
    "Latitude": 52.28729,
    "Longitude": -1.5341,
    "SafetyScore": 37.12550852788335
  },
  {
    "Latitude": 52.28729,
    "Longitude": -1.53337,
    "SafetyScore": 33.08454738965097
  },
  {
    "Latitude": 52.28731,
    "Longitude": -1.56472,
    "SafetyScore": 44.89938756887176
  },
  {
    "Latitude": 52.28731,
    "Longitude": -1.53577,
    "SafetyScore": 44.02347998100225
  },
  {
    "Latitude": 52.2873121,
    "Longitude": -1.5357703,
    "SafetyScore": 44.02347998100225
  },
  {
    "Latitude": 52.28732,
    "Longitude": -1.5474,
    "SafetyScore": 44.38694451159565
  },
  {
    "Latitude": 52.28735,
    "Longitude": -1.53417,
    "SafetyScore": 33.29301437362786
  },
  {
    "Latitude": 52.28736,
    "Longitude": -1.53318,
    "SafetyScore": 38.918941614667254
  },
  {
    "Latitude": 52.28739,
    "Longitude": -1.53718,
    "SafetyScore": 24.280812997584288
  },
  {
    "Latitude": 52.28741,
    "Longitude": -1.53865,
    "SafetyScore": 20.251689596341063
  },
  {
    "Latitude": 52.28742,
    "Longitude": -1.56498,
    "SafetyScore": 36.94137230169619
  },
  {
    "Latitude": 52.2874242,
    "Longitude": -1.5356918,
    "SafetyScore": 43.98200486486596
  },
  {
    "Latitude": 52.28743,
    "Longitude": -1.56501,
    "SafetyScore": 40.77125824542295
  },
  {
    "Latitude": 52.28743,
    "Longitude": -1.53793,
    "SafetyScore": 43.52245592299513
  },
  {
    "Latitude": 52.28744,
    "Longitude": -1.56499,
    "SafetyScore": 36.792250611835165
  },
  {
    "Latitude": 52.28746,
    "Longitude": -1.56498,
    "SafetyScore": 36.94137230169619
  },
  {
    "Latitude": 52.28748,
    "Longitude": -1.56509,
    "SafetyScore": 36.792250611835165
  },
  {
    "Latitude": 52.28748,
    "Longitude": -1.53651,
    "SafetyScore": 26.571006428139807
  },
  {
    "Latitude": 52.28749,
    "Longitude": -1.53441,
    "SafetyScore": 33.01619277604397
  },
  {
    "Latitude": 52.28749,
    "Longitude": -1.53436,
    "SafetyScore": 33.01619277604397
  },
  {
    "Latitude": 52.2875,
    "Longitude": -1.53289,
    "SafetyScore": 38.86357729515047
  },
  {
    "Latitude": 52.28751,
    "Longitude": -1.53444,
    "SafetyScore": 33.071557095560756
  },
  {
    "Latitude": 52.28752,
    "Longitude": -1.56476,
    "SafetyScore": 36.94137230169619
  },
  {
    "Latitude": 52.28753,
    "Longitude": -1.56515,
    "SafetyScore": 44.694901559493964
  },
  {
    "Latitude": 52.28753,
    "Longitude": -1.53743,
    "SafetyScore": 24.531082793501515
  },
  {
    "Latitude": 52.2875364,
    "Longitude": -1.541341,
    "SafetyScore": 31.010507886622616
  },
  {
    "Latitude": 52.28754,
    "Longitude": -1.54134,
    "SafetyScore": 19.474248344637886
  },
  {
    "Latitude": 52.28754,
    "Longitude": -1.53444,
    "SafetyScore": 33.056776240401334
  },
  {
    "Latitude": 52.28755,
    "Longitude": -1.53914,
    "SafetyScore": 20.14096095730751
  },
  {
    "Latitude": 52.28755,
    "Longitude": -1.53444,
    "SafetyScore": 33.056776240401334
  },
  {
    "Latitude": 52.28757,
    "Longitude": -1.56476,
    "SafetyScore": 36.886007982179414
  },
  {
    "Latitude": 52.28757,
    "Longitude": -1.5382,
    "SafetyScore": 43.539228484481555
  },
  {
    "Latitude": 52.2876,
    "Longitude": -1.56522,
    "SafetyScore": 40.71589392590617
  },
  {
    "Latitude": 52.28761,
    "Longitude": -1.54672,
    "SafetyScore": 44.4399601846225
  },
  {
    "Latitude": 52.28762,
    "Longitude": -1.53478,
    "SafetyScore": 29.096237470073476
  },
  {
    "Latitude": 52.28765,
    "Longitude": -1.53256,
    "SafetyScore": 33.52084011005425
  },
  {
    "Latitude": 52.28766,
    "Longitude": -1.56534,
    "SafetyScore": 40.77125824542295
  },
  {
    "Latitude": 52.28766,
    "Longitude": -1.56437,
    "SafetyScore": 36.82478693671346
  },
  {
    "Latitude": 52.28767,
    "Longitude": -1.53839,
    "SafetyScore": 35.9491036128659
  },
  {
    "Latitude": 52.28767,
    "Longitude": -1.53763,
    "SafetyScore": 24.78627087764418
  },
  {
    "Latitude": 52.28768,
    "Longitude": -1.54006,
    "SafetyScore": 20.26061119891885
  },
  {
    "Latitude": 52.28768,
    "Longitude": -1.53979,
    "SafetyScore": 20.14988255988529
  },
  {
    "Latitude": 52.28772,
    "Longitude": -1.5655,
    "SafetyScore": 36.731558074350794
  },
  {
    "Latitude": 52.28772,
    "Longitude": -1.5364,
    "SafetyScore": 27.00733901578546
  },
  {
    "Latitude": 52.28773,
    "Longitude": -1.53487,
    "SafetyScore": 29.240066460756214
  },
  {
    "Latitude": 52.28774,
    "Longitude": -1.53234,
    "SafetyScore": 39.344334200563395
  },
  {
    "Latitude": 52.28775,
    "Longitude": -1.5641,
    "SafetyScore": 36.73943292314643
  },
  {
    "Latitude": 52.28776,
    "Longitude": -1.56568,
    "SafetyScore": 44.68957334152636
  },
  {
    "Latitude": 52.28776,
    "Longitude": -1.53862,
    "SafetyScore": 43.742420713907336
  },
  {
    "Latitude": 52.28778,
    "Longitude": -1.54773,
    "SafetyScore": 41.58873184804691
  },
  {
    "Latitude": 52.28779,
    "Longitude": -1.5352,
    "SafetyScore": 29.16282598204971
  },
  {
    "Latitude": 52.28779,
    "Longitude": -1.53467,
    "SafetyScore": 33.31116282198318
  },
  {
    "Latitude": 52.28781,
    "Longitude": -1.53787,
    "SafetyScore": 24.59445732760774
  },
  {
    "Latitude": 52.28782,
    "Longitude": -1.56596,
    "SafetyScore": 36.76419371250966
  },
  {
    "Latitude": 52.28784,
    "Longitude": -1.56382,
    "SafetyScore": 36.73943292314643
  },
  {
    "Latitude": 52.28785,
    "Longitude": -1.53888,
    "SafetyScore": 40.4565050532152
  },
  {
    "Latitude": 52.28785,
    "Longitude": -1.53471,
    "SafetyScore": 33.50542066805016
  },
  {
    "Latitude": 52.2878584,
    "Longitude": -1.5363235,
    "SafetyScore": 44.76235065791709
  },
  {
    "Latitude": 52.28787,
    "Longitude": -1.5663,
    "SafetyScore": 45.390268008556596
  },
  {
    "Latitude": 52.28788,
    "Longitude": -1.56659,
    "SafetyScore": 37.32152410234747
  },
  {
    "Latitude": 52.28788,
    "Longitude": -1.56656,
    "SafetyScore": 45.279539369523036
  },
  {
    "Latitude": 52.28788,
    "Longitude": -1.56643,
    "SafetyScore": 37.43225274138101
  },
  {
    "Latitude": 52.28788,
    "Longitude": -1.53797,
    "SafetyScore": 25.564219868129026
  },
  {
    "Latitude": 52.28788,
    "Longitude": -1.53469,
    "SafetyScore": 33.56078498756693
  },
  {
    "Latitude": 52.28789,
    "Longitude": -1.54591,
    "SafetyScore": 44.4399601846225
  },
  {
    "Latitude": 52.2879016,
    "Longitude": -1.535144,
    "SafetyScore": 43.08234660097711
  },
  {
    "Latitude": 52.28791,
    "Longitude": -1.5347,
    "SafetyScore": 33.56078498756693
  },
  {
    "Latitude": 52.28793,
    "Longitude": -1.5667,
    "SafetyScore": 45.229106627967205
  },
  {
    "Latitude": 52.28793,
    "Longitude": -1.54751,
    "SafetyScore": 41.89966715790609
  },
  {
    "Latitude": 52.28793,
    "Longitude": -1.5348,
    "SafetyScore": 33.679426312917066
  },
  {
    "Latitude": 52.28793,
    "Longitude": -1.53478,
    "SafetyScore": 33.679426312917066
  },
  {
    "Latitude": 52.28793,
    "Longitude": -1.53475,
    "SafetyScore": 33.679426312917066
  },
  {
    "Latitude": 52.28794,
    "Longitude": -1.54571,
    "SafetyScore": 44.21556416820238
  },
  {
    "Latitude": 52.28795,
    "Longitude": -1.53915,
    "SafetyScore": 36.33486427227981
  },
  {
    "Latitude": 52.28796,
    "Longitude": -1.5668,
    "SafetyScore": 37.27109136079163
  },
  {
    "Latitude": 52.28796939999999,
    "Longitude": -1.5362706,
    "SafetyScore": 44.927092626593186
  },
  {
    "Latitude": 52.28797,
    "Longitude": -1.53627,
    "SafetyScore": 28.631768199112273
  },
  {
    "Latitude": 52.28799,
    "Longitude": -1.54528,
    "SafetyScore": 44.87146369437206
  },
  {
    "Latitude": 52.28799,
    "Longitude": -1.53174,
    "SafetyScore": 38.97369146639079
  },
  {
    "Latitude": 52.28801,
    "Longitude": -1.53938,
    "SafetyScore": 44.18853640754551
  },
  {
    "Latitude": 52.28803,
    "Longitude": -1.54452,
    "SafetyScore": 43.291650270709674
  },
  {
    "Latitude": 52.28805,
    "Longitude": -1.53961,
    "SafetyScore": 36.777460533420964
  },
  {
    "Latitude": 52.28805,
    "Longitude": -1.5349,
    "SafetyScore": 33.72405473019128
  },
  {
    "Latitude": 52.28806,
    "Longitude": -1.56727,
    "SafetyScore": 44.61533335435907
  },
  {
    "Latitude": 52.28806,
    "Longitude": -1.54728,
    "SafetyScore": 42.01039579693964
  },
  {
    "Latitude": 52.28806,
    "Longitude": -1.54344,
    "SafetyScore": 43.4176943786862
  },
  {
    "Latitude": 52.28806,
    "Longitude": -1.53153,
    "SafetyScore": 44.775871592785755
  },
  {
    "Latitude": 52.28807,
    "Longitude": -1.5438,
    "SafetyScore": 43.34701459022645
  },
  {
    "Latitude": 52.28807,
    "Longitude": -1.54264,
    "SafetyScore": 43.473058698202976
  },
  {
    "Latitude": 52.28807,
    "Longitude": -1.5401,
    "SafetyScore": 37.08010913665894
  },
  {
    "Latitude": 52.28807,
    "Longitude": -1.53995,
    "SafetyScore": 36.96938049762538
  },
  {
    "Latitude": 52.28807,
    "Longitude": -1.53799,
    "SafetyScore": 26.1656465455294
  },
  {
    "Latitude": 52.28813,
    "Longitude": -1.54107,
    "SafetyScore": 43.87274241872157
  },
  {
    "Latitude": 52.28815,
    "Longitude": -1.56762,
    "SafetyScore": 36.94430173715483
  },
  {
    "Latitude": 52.28816,
    "Longitude": -1.53979,
    "SafetyScore": 44.940816967626084
  },
  {
    "Latitude": 52.28816,
    "Longitude": -1.53619,
    "SafetyScore": 29.01444092945404
  },
  {
    "Latitude": 52.28817,
    "Longitude": -1.54053,
    "SafetyScore": 44.985095961836294
  },
  {
    "Latitude": 52.28818,
    "Longitude": -1.5401,
    "SafetyScore": 37.24620209520926
  },
  {
    "Latitude": 52.28818,
    "Longitude": -1.53804,
    "SafetyScore": 26.33173950407973
  },
  {
    "Latitude": 52.28819,
    "Longitude": -1.5403,
    "SafetyScore": 44.985095961836294
  },
  {
    "Latitude": 52.28819,
    "Longitude": -1.54012,
    "SafetyScore": 45.05154560665965
  },
  {
    "Latitude": 52.28821,
    "Longitude": -1.56298,
    "SafetyScore": 36.499494410046765
  },
  {
    "Latitude": 52.28821,
    "Longitude": -1.53808,
    "SafetyScore": 26.276915585404243
  },
  {
    "Latitude": 52.28821,
    "Longitude": -1.53106,
    "SafetyScore": 33.00004486768393
  },
  {
    "Latitude": 52.28823,
    "Longitude": -1.53807,
    "SafetyScore": 26.332279904921023
  },
  {
    "Latitude": 52.2882476,
    "Longitude": -1.5380635,
    "SafetyScore": 45.29773263772148
  },
  {
    "Latitude": 52.28827,
    "Longitude": -1.53619,
    "SafetyScore": 28.922518211023334
  },
  {
    "Latitude": 52.28829,
    "Longitude": -1.54684,
    "SafetyScore": 42.003996954025645
  },
  {
    "Latitude": 52.28829,
    "Longitude": -1.53571,
    "SafetyScore": 28.318537713988675
  },
  {
    "Latitude": 52.2883,
    "Longitude": -1.5307,
    "SafetyScore": 39.19393591791833
  },
  {
    "Latitude": 52.28831,
    "Longitude": -1.5362,
    "SafetyScore": 28.353954294127018
  },
  {
    "Latitude": 52.28835,
    "Longitude": -1.56838,
    "SafetyScore": 38.11202259775776
  },
  {
    "Latitude": 52.28835,
    "Longitude": -1.53805,
    "SafetyScore": 26.10227088795931
  },
  {
    "Latitude": 52.2883539,
    "Longitude": -1.5380516,
    "SafetyScore": 45.19578233834099
  },
  {
    "Latitude": 52.28836,
    "Longitude": -1.53621,
    "SafetyScore": 28.4093186136438
  },
  {
    "Latitude": 52.28838,
    "Longitude": -1.53065,
    "SafetyScore": 39.19393591791833
  },
  {
    "Latitude": 52.2883984,
    "Longitude": -1.5382739,
    "SafetyScore": 45.23237352422166
  },
  {
    "Latitude": 52.2884,
    "Longitude": -1.53827,
    "SafetyScore": 26.138862073839977
  },
  {
    "Latitude": 52.28842,
    "Longitude": -1.53515,
    "SafetyScore": 34.37544612208828
  },
  {
    "Latitude": 52.288495,
    "Longitude": -1.5306291,
    "SafetyScore": 38.50241970570924
  },
  {
    "Latitude": 52.2885,
    "Longitude": -1.56897,
    "SafetyScore": 46.07003786493333
  },
  {
    "Latitude": 52.2885,
    "Longitude": -1.53063,
    "SafetyScore": 39.24908001105275
  },
  {
    "Latitude": 52.28851,
    "Longitude": -1.54663,
    "SafetyScore": 42.003996954025645
  },
  {
    "Latitude": 52.28855,
    "Longitude": -1.53626,
    "SafetyScore": 30.544826293628358
  },
  {
    "Latitude": 52.28855,
    "Longitude": -1.53521,
    "SafetyScore": 34.62282247846349
  },
  {
    "Latitude": 52.28862,
    "Longitude": -1.54656,
    "SafetyScore": 42.003996954025645
  },
  {
    "Latitude": 52.28862,
    "Longitude": -1.54005,
    "SafetyScore": 37.92395526265613
  },
  {
    "Latitude": 52.28866,
    "Longitude": -1.56201,
    "SafetyScore": 34.676762294925794
  },
  {
    "Latitude": 52.28869,
    "Longitude": -1.54655,
    "SafetyScore": 41.895650277195536
  },
  {
    "Latitude": 52.28874,
    "Longitude": -1.56179,
    "SafetyScore": 34.89053881286022
  },
  {
    "Latitude": 52.28874,
    "Longitude": -1.53809,
    "SafetyScore": 26.681279832766545
  },
  {
    "Latitude": 52.28879,
    "Longitude": -1.5466,
    "SafetyScore": 42.26562254868737
  },
  {
    "Latitude": 52.2888,
    "Longitude": -1.57006,
    "SafetyScore": 36.32832592036815
  },
  {
    "Latitude": 52.28885,
    "Longitude": -1.56141,
    "SafetyScore": 34.846115965402156
  },
  {
    "Latitude": 52.28888,
    "Longitude": -1.54656,
    "SafetyScore": 42.26562254868737
  },
  {
    "Latitude": 52.28888,
    "Longitude": -1.54002,
    "SafetyScore": 37.668469713144106
  },
  {
    "Latitude": 52.2889352,
    "Longitude": -1.5379752,
    "SafetyScore": 46.4916569435893
  },
  {
    "Latitude": 52.28894,
    "Longitude": -1.53799,
    "SafetyScore": 27.241288644073204
  },
  {
    "Latitude": 52.28894,
    "Longitude": -1.53798,
    "SafetyScore": 27.398145493207622
  },
  {
    "Latitude": 52.28895,
    "Longitude": -1.53801,
    "SafetyScore": 27.241288644073204
  },
  {
    "Latitude": 52.28898,
    "Longitude": -1.53803,
    "SafetyScore": 27.241288644073204
  },
  {
    "Latitude": 52.289,
    "Longitude": -1.53803,
    "SafetyScore": 26.865073947537184
  },
  {
    "Latitude": 52.28901,
    "Longitude": -1.53802,
    "SafetyScore": 26.865073947537184
  },
  {
    "Latitude": 52.28903,
    "Longitude": -1.54001,
    "SafetyScore": 37.207398106358816
  },
  {
    "Latitude": 52.28903,
    "Longitude": -1.53799,
    "SafetyScore": 38.49675333685016
  },
  {
    "Latitude": 52.28903,
    "Longitude": -1.53796,
    "SafetyScore": 38.62222789075602
  },
  {
    "Latitude": 52.28903,
    "Longitude": -1.53794,
    "SafetyScore": 38.62222789075602
  },
  {
    "Latitude": 52.28904,
    "Longitude": -1.53767,
    "SafetyScore": 39.02120872348867
  },
  {
    "Latitude": 52.28907,
    "Longitude": -1.54004,
    "SafetyScore": 37.21822244134304
  },
  {
    "Latitude": 52.289077,
    "Longitude": -1.5384772,
    "SafetyScore": 44.5569593679485
  },
  {
    "Latitude": 52.28908,
    "Longitude": -1.53848,
    "SafetyScore": 32.666453642757666
  },
  {
    "Latitude": 52.28909,
    "Longitude": -1.53767,
    "SafetyScore": 39.02120872348867
  },
  {
    "Latitude": 52.28924,
    "Longitude": -1.57167,
    "SafetyScore": 45.481847471014525
  },
  {
    "Latitude": 52.28924,
    "Longitude": -1.56007,
    "SafetyScore": 35.3581849666486
  },
  {
    "Latitude": 52.28931,
    "Longitude": -1.54004,
    "SafetyScore": 37.50683981535394
  },
  {
    "Latitude": 52.28937,
    "Longitude": -1.55954,
    "SafetyScore": 35.24745632761505
  },
  {
    "Latitude": 52.28942,
    "Longitude": -1.53777,
    "SafetyScore": 39.356830905988055
  },
  {
    "Latitude": 52.28942,
    "Longitude": -1.53536,
    "SafetyScore": 48.59369275314757
  },
  {
    "Latitude": 52.28944,
    "Longitude": -1.5567,
    "SafetyScore": 37.07059949931632
  },
  {
    "Latitude": 52.28945,
    "Longitude": -1.55792,
    "SafetyScore": 36.79337765947944
  },
  {
    "Latitude": 52.28945,
    "Longitude": -1.5352,
    "SafetyScore": 48.70217205225767
  },
  {
    "Latitude": 52.2894565,
    "Longitude": -1.5591778,
    "SafetyScore": 39.321883808531084
  },
  {
    "Latitude": 52.28946,
    "Longitude": -1.55918,
    "SafetyScore": 35.24745632761505
  },
  {
    "Latitude": 52.28947,
    "Longitude": -1.5725,
    "SafetyScore": 36.286308015719385
  },
  {
    "Latitude": 52.28949,
    "Longitude": -1.53501,
    "SafetyScore": 48.80127497276612
  },
  {
    "Latitude": 52.2895,
    "Longitude": -1.55855,
    "SafetyScore": 35.38007238549225
  },
  {
    "Latitude": 52.28951,
    "Longitude": -1.55518,
    "SafetyScore": 36.08354644873243
  },
  {
    "Latitude": 52.28958,
    "Longitude": -1.55372,
    "SafetyScore": 36.14055766508924
  },
  {
    "Latitude": 52.28958,
    "Longitude": -1.55344,
    "SafetyScore": 36.14055766508924
  },
  {
    "Latitude": 52.28959,
    "Longitude": -1.55357,
    "SafetyScore": 36.14055766508924
  },
  {
    "Latitude": 52.28959,
    "Longitude": -1.55343,
    "SafetyScore": 36.20433161047415
  },
  {
    "Latitude": 52.28959,
    "Longitude": -1.55341,
    "SafetyScore": 36.20433161047415
  },
  {
    "Latitude": 52.28959,
    "Longitude": -1.55339,
    "SafetyScore": 36.20433161047415
  },
  {
    "Latitude": 52.28959,
    "Longitude": -1.55338,
    "SafetyScore": 36.20433161047415
  },
  {
    "Latitude": 52.28959,
    "Longitude": -1.55337,
    "SafetyScore": 36.20433161047415
  },
  {
    "Latitude": 52.2896,
    "Longitude": -1.55327,
    "SafetyScore": 36.20433161047415
  },
  {
    "Latitude": 52.2896,
    "Longitude": -1.55306,
    "SafetyScore": 36.20433161047415
  },
  {
    "Latitude": 52.2896,
    "Longitude": -1.55258,
    "SafetyScore": 36.03280929593923
  },
  {
    "Latitude": 52.28960319999999,
    "Longitude": -1.5530564,
    "SafetyScore": 40.278759091390164
  },
  {
    "Latitude": 52.28963,
    "Longitude": -1.5346,
    "SafetyScore": 48.981072422483784
  },
  {
    "Latitude": 52.28964,
    "Longitude": -1.57311,
    "SafetyScore": 57.97998264012747
  },
  {
    "Latitude": 52.28964,
    "Longitude": -1.55163,
    "SafetyScore": 35.75683937841084
  },
  {
    "Latitude": 52.28964,
    "Longitude": -1.54227,
    "SafetyScore": 36.68764916056387
  },
  {
    "Latitude": 52.28967,
    "Longitude": -1.55088,
    "SafetyScore": 36.026351055295294
  },
  {
    "Latitude": 52.28968,
    "Longitude": -1.55093,
    "SafetyScore": 36.2371557837296
  },
  {
    "Latitude": 52.28968,
    "Longitude": -1.55082,
    "SafetyScore": 36.21306788882299
  },
  {
    "Latitude": 52.28968,
    "Longitude": -1.54256,
    "SafetyScore": 36.64237529771358
  },
  {
    "Latitude": 52.28969,
    "Longitude": -1.55079,
    "SafetyScore": 36.21306788882299
  },
  {
    "Latitude": 52.28969,
    "Longitude": -1.55026,
    "SafetyScore": 36.62762037673496
  },
  {
    "Latitude": 52.28972,
    "Longitude": -1.5501,
    "SafetyScore": 36.62762037673496
  },
  {
    "Latitude": 52.28972,
    "Longitude": -1.53543,
    "SafetyScore": 48.79796429481612
  },
  {
    "Latitude": 52.2897243,
    "Longitude": -1.5500951,
    "SafetyScore": 40.70204785765099
  },
  {
    "Latitude": 52.28974,
    "Longitude": -1.54926,
    "SafetyScore": 36.27125296948899
  },
  {
    "Latitude": 52.28974,
    "Longitude": -1.54664,
    "SafetyScore": 41.74116667883473
  },
  {
    "Latitude": 52.2897651,
    "Longitude": -1.5354354,
    "SafetyScore": 43.41332568955738
  },
  {
    "Latitude": 52.28984,
    "Longitude": -1.54405,
    "SafetyScore": 36.666834671795435
  },
  {
    "Latitude": 52.2898457,
    "Longitude": -1.5466228,
    "SafetyScore": 48.30287151344033
  },
  {
    "Latitude": 52.28985,
    "Longitude": -1.54662,
    "SafetyScore": 36.18614601992159
  },
  {
    "Latitude": 52.28987,
    "Longitude": -1.54604,
    "SafetyScore": 36.07730892326387
  },
  {
    "Latitude": 52.2899,
    "Longitude": -1.57936,
    "SafetyScore": 53.945610687022906
  },
  {
    "Latitude": 52.2899,
    "Longitude": -1.54445,
    "SafetyScore": 36.43988838025559
  },
  {
    "Latitude": 52.2899,
    "Longitude": -1.53796,
    "SafetyScore": 39.84355939926993
  },
  {
    "Latitude": 52.2899038,
    "Longitude": -1.579364,
    "SafetyScore": 42.31393129770992
  },
  {
    "Latitude": 52.28991,
    "Longitude": -1.5792,
    "SafetyScore": 53.945610687022906
  },
  {
    "Latitude": 52.28992,
    "Longitude": -1.545,
    "SafetyScore": 36.010687832676616
  },
  {
    "Latitude": 52.28994,
    "Longitude": -1.57412,
    "SafetyScore": 50.02196737295188
  },
  {
    "Latitude": 52.28994,
    "Longitude": -1.54488,
    "SafetyScore": 36.71480334087059
  },
  {
    "Latitude": 52.28995,
    "Longitude": -1.54452,
    "SafetyScore": 36.43988838025559
  },
  {
    "Latitude": 52.28995,
    "Longitude": -1.53547,
    "SafetyScore": 49.719789864012206
  },
  {
    "Latitude": 52.28996,
    "Longitude": -1.5466,
    "SafetyScore": 40.183220476559896
  },
  {
    "Latitude": 52.28996,
    "Longitude": -1.54479,
    "SafetyScore": 36.619383493542344
  },
  {
    "Latitude": 52.28996540000001,
    "Longitude": -1.5785805,
    "SafetyScore": 42.31393129770992
  },
  {
    "Latitude": 52.28997,
    "Longitude": -1.57908,
    "SafetyScore": 53.945610687022906
  },
  {
    "Latitude": 52.28997,
    "Longitude": -1.57858,
    "SafetyScore": 53.945610687022906
  },
  {
    "Latitude": 52.28998,
    "Longitude": -1.57966,
    "SafetyScore": 53.945610687022906
  },
  {
    "Latitude": 52.29001,
    "Longitude": -1.57894,
    "SafetyScore": 53.945610687022906
  },
  {
    "Latitude": 52.29001,
    "Longitude": -1.57887,
    "SafetyScore": 49.96660305343511
  },
  {
    "Latitude": 52.29001,
    "Longitude": -1.54453,
    "SafetyScore": 36.43988838025559
  },
  {
    "Latitude": 52.2900115,
    "Longitude": -1.5445292,
    "SafetyScore": 44.46469754056093
  },
  {
    "Latitude": 52.29004,
    "Longitude": -1.57979,
    "SafetyScore": 53.945610687022906
  },
  {
    "Latitude": 52.29009,
    "Longitude": -1.53802,
    "SafetyScore": 40.16143211901848
  },
  {
    "Latitude": 52.29012,
    "Longitude": -1.54394,
    "SafetyScore": 36.53530822758383
  },
  {
    "Latitude": 52.29014,
    "Longitude": -1.58454,
    "SafetyScore": 53.945610687022906
  },
  {
    "Latitude": 52.2901428,
    "Longitude": -1.5845361,
    "SafetyScore": 48.17748091603053
  },
  {
    "Latitude": 52.29015,
    "Longitude": -1.57997,
    "SafetyScore": 53.945610687022906
  },
  {
    "Latitude": 52.29016,
    "Longitude": -1.5435,
    "SafetyScore": 36.109972250699684
  },
  {
    "Latitude": 52.29019,
    "Longitude": -1.58442,
    "SafetyScore": 53.945610687022906
  },
  {
    "Latitude": 52.2902,
    "Longitude": -1.54262,
    "SafetyScore": 35.663224506963154
  },
  {
    "Latitude": 52.2902,
    "Longitude": -1.5387,
    "SafetyScore": 39.82064664734156
  },
  {
    "Latitude": 52.2902,
    "Longitude": -1.53805,
    "SafetyScore": 40.1060677995017
  },
  {
    "Latitude": 52.2902026,
    "Longitude": -1.5386973,
    "SafetyScore": 44.00580276729115
  },
  {
    "Latitude": 52.29021,
    "Longitude": -1.5418,
    "SafetyScore": 36.041364101490416
  },
  {
    "Latitude": 52.290212,
    "Longitude": -1.5418035,
    "SafetyScore": 40.115791582406445
  },
  {
    "Latitude": 52.29023,
    "Longitude": -1.57507,
    "SafetyScore": 54.00097500653967
  },
  {
    "Latitude": 52.29026,
    "Longitude": -1.58006,
    "SafetyScore": 53.945610687022906
  },
  {
    "Latitude": 52.29031,
    "Longitude": -1.53654,
    "SafetyScore": 32.53722455298129
  },
  {
    "Latitude": 52.29034,
    "Longitude": -1.57535,
    "SafetyScore": 50.02196737295188
  },
  {
    "Latitude": 52.29035,
    "Longitude": -1.58405,
    "SafetyScore": 53.945610687022906
  },
  {
    "Latitude": 52.29037,
    "Longitude": -1.53552,
    "SafetyScore": 49.782364156871296
  },
  {
    "Latitude": 52.2904,
    "Longitude": -1.53484,
    "SafetyScore": 50.13064465346951
  },
  {
    "Latitude": 52.29047,
    "Longitude": -1.58365,
    "SafetyScore": 53.945610687022906
  },
  {
    "Latitude": 52.29051,
    "Longitude": -1.58014,
    "SafetyScore": 53.945610687022906
  },
  {
    "Latitude": 52.29054,
    "Longitude": -1.57827,
    "SafetyScore": 49.96660305343511
  },
  {
    "Latitude": 52.29057,
    "Longitude": -1.58019,
    "SafetyScore": 57.92461832061068
  },
  {
    "Latitude": 52.29061,
    "Longitude": -1.54664,
    "SafetyScore": 40.22654687171504
  },
  {
    "Latitude": 52.29062,
    "Longitude": -1.53807,
    "SafetyScore": 39.807120556367494
  },
  {
    "Latitude": 52.29064,
    "Longitude": -1.58028,
    "SafetyScore": 53.945610687022906
  },
  {
    "Latitude": 52.29071,
    "Longitude": -1.58299,
    "SafetyScore": 53.945610687022906
  },
  {
    "Latitude": 52.2907119,
    "Longitude": -1.5829859,
    "SafetyScore": 42.31393129770992
  },
  {
    "Latitude": 52.290777,
    "Longitude": -1.533494,
    "SafetyScore": 50.07891652579161
  },
  {
    "Latitude": 52.29078,
    "Longitude": -1.57815,
    "SafetyScore": 57.97998264012747
  },
  {
    "Latitude": 52.290809,
    "Longitude": -1.5830862,
    "SafetyScore": 42.31393129770992
  },
  {
    "Latitude": 52.29081,
    "Longitude": -1.58309,
    "SafetyScore": 53.945610687022906
  },
  {
    "Latitude": 52.29081,
    "Longitude": -1.58082,
    "SafetyScore": 53.945610687022906
  },
  {
    "Latitude": 52.29084,
    "Longitude": -1.57659,
    "SafetyScore": 50.02196737295188
  },
  {
    "Latitude": 52.29086,
    "Longitude": -1.58311,
    "SafetyScore": 53.945610687022906
  },
  {
    "Latitude": 52.29092,
    "Longitude": -1.58136,
    "SafetyScore": 53.945610687022906
  },
  {
    "Latitude": 52.29093,
    "Longitude": -1.58276,
    "SafetyScore": 57.92461832061068
  },
  {
    "Latitude": 52.29094,
    "Longitude": -1.58286,
    "SafetyScore": 53.945610687022906
  },
  {
    "Latitude": 52.29094,
    "Longitude": -1.58259,
    "SafetyScore": 49.96660305343511
  },
  {
    "Latitude": 52.29094,
    "Longitude": -1.57684,
    "SafetyScore": 54.00097500653967
  },
  {
    "Latitude": 52.29095,
    "Longitude": -1.58167,
    "SafetyScore": 53.945610687022906
  },
  {
    "Latitude": 52.29097,
    "Longitude": -1.58302,
    "SafetyScore": 53.945610687022906
  },
  {
    "Latitude": 52.2909716,
    "Longitude": -1.5830234,
    "SafetyScore": 42.31393129770992
  },
  {
    "Latitude": 52.29107,
    "Longitude": -1.54668,
    "SafetyScore": 41.37653814319078
  },
  {
    "Latitude": 52.29111,
    "Longitude": -1.57742,
    "SafetyScore": 50.02196737295188
  },
  {
    "Latitude": 52.29114,
    "Longitude": -1.57753,
    "SafetyScore": 57.97998264012747
  },
  {
    "Latitude": 52.29116,
    "Longitude": -1.57764,
    "SafetyScore": 50.02196737295188
  },
  {
    "Latitude": 52.29117,
    "Longitude": -1.57778,
    "SafetyScore": 57.97998264012747
  },
  {
    "Latitude": 52.29117,
    "Longitude": -1.54673,
    "SafetyScore": 41.37653814319078
  },
  {
    "Latitude": 52.2912,
    "Longitude": -1.53811,
    "SafetyScore": 39.35640197696447
  },
  {
    "Latitude": 52.29121,
    "Longitude": -1.57794,
    "SafetyScore": 50.02196737295188
  },
  {
    "Latitude": 52.29122,
    "Longitude": -1.57793,
    "SafetyScore": 50.02196737295188
  },
  {
    "Latitude": 52.29125,
    "Longitude": -1.57803,
    "SafetyScore": 57.97998264012747
  },
  {
    "Latitude": 52.2913,
    "Longitude": -1.57814,
    "SafetyScore": 54.00097500653967
  },
  {
    "Latitude": 52.2913,
    "Longitude": -1.57789,
    "SafetyScore": 54.00097500653967
  },
  {
    "Latitude": 52.2913023,
    "Longitude": -1.5778892,
    "SafetyScore": 42.3692956172267
  },
  {
    "Latitude": 52.29131,
    "Longitude": -1.53673,
    "SafetyScore": 32.58236365534075
  },
  {
    "Latitude": 52.29134,
    "Longitude": -1.57822,
    "SafetyScore": 53.945610687022906
  },
  {
    "Latitude": 52.29134,
    "Longitude": -1.57801,
    "SafetyScore": 54.00097500653967
  },
  {
    "Latitude": 52.29134,
    "Longitude": -1.57799,
    "SafetyScore": 50.02196737295188
  },
  {
    "Latitude": 52.291387,
    "Longitude": -1.5783038,
    "SafetyScore": 42.31393129770992
  },
  {
    "Latitude": 52.29139,
    "Longitude": -1.5783,
    "SafetyScore": 53.945610687022906
  },
  {
    "Latitude": 52.2914,
    "Longitude": -1.57826,
    "SafetyScore": 57.92461832061068
  },
  {
    "Latitude": 52.29140349999999,
    "Longitude": -1.5782611,
    "SafetyScore": 42.31393129770992
  },
  {
    "Latitude": 52.29141,
    "Longitude": -1.57826,
    "SafetyScore": 49.96660305343511
  },
  {
    "Latitude": 52.29147,
    "Longitude": -1.54715,
    "SafetyScore": 42.038245640286206
  },
  {
    "Latitude": 52.2918076,
    "Longitude": -1.5381524,
    "SafetyScore": 43.12051015430029
  },
  {
    "Latitude": 52.29191,
    "Longitude": -1.54761,
    "SafetyScore": 42.082444618129095
  },
  {
    "Latitude": 52.2919643,
    "Longitude": -1.53576,
    "SafetyScore": 44.625774571872945
  },
  {
    "Latitude": 52.29226,
    "Longitude": -1.5382,
    "SafetyScore": 39.548280825458086
  },
  {
    "Latitude": 52.2923339,
    "Longitude": -1.5382023,
    "SafetyScore": 43.13383511691817
  },
  {
    "Latitude": 52.29237,
    "Longitude": -1.54819,
    "SafetyScore": 41.96980323671482
  },
  {
    "Latitude": 52.2923727,
    "Longitude": -1.5481874,
    "SafetyScore": 42.17018491610413
  },
  {
    "Latitude": 52.292597,
    "Longitude": -1.5369774,
    "SafetyScore": 51.214953290808104
  },
  {
    "Latitude": 52.2930159,
    "Longitude": -1.5370596,
    "SafetyScore": 51.044829661239994
  },
  {
    "Latitude": 52.29302,
    "Longitude": -1.53706,
    "SafetyScore": 31.77956248566748
  },
  {
    "Latitude": 52.29311,
    "Longitude": -1.53828,
    "SafetyScore": 38.60124314421011
  },
  {
    "Latitude": 52.2931277,
    "Longitude": -1.5359592,
    "SafetyScore": 43.73197464375409
  },
  {
    "Latitude": 52.2935,
    "Longitude": -1.53832,
    "SafetyScore": 38.595245290238694
  },
  {
    "Latitude": 52.29353,
    "Longitude": -1.53805,
    "SafetyScore": 38.6199058988965
  },
  {
    "Latitude": 52.29359,
    "Longitude": -1.53717,
    "SafetyScore": 39.16987479598208
  },
  {
    "Latitude": 52.2936,
    "Longitude": -1.53702,
    "SafetyScore": 39.08612134321825
  },
  {
    "Latitude": 52.29414,
    "Longitude": -1.53713,
    "SafetyScore": 38.7783679575079
  },
  {
    "Latitude": 52.2948,
    "Longitude": -1.53725,
    "SafetyScore": 36.27001305883122
  },
  {
    "Latitude": 52.29599,
    "Longitude": -1.5374,
    "SafetyScore": 37.72707039929693
  },
  {
    "Latitude": 52.2961,
    "Longitude": -1.53742,
    "SafetyScore": 38.4249348309366
  },
  {
    "Latitude": 52.29612,
    "Longitude": -1.53701,
    "SafetyScore": 38.4249348309366
  },
  {
    "Latitude": 52.29629,
    "Longitude": -1.53701,
    "SafetyScore": 38.4249348309366
  },
  {
    "Latitude": 52.29631,
    "Longitude": -1.537,
    "SafetyScore": 38.4249348309366
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

function degreesToRadians(degrees) {
  return degrees * (Math.PI / 180);
}

function buildKDTree(data) {
  return new kdTree(data, haversineDistance, ["latitude", "longitude"]);
}

export function findNearestSafetyScore(lat, lng, kdtree) {
  let nearest = kdtree.nearest({ latitude: lat, longitude: lng }, 1);
  return nearest[0][0].safetyScore; // Returns the Safety_Score of the nearest point
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

// Plus 5 to SafetyScore for daytime KD tree.
export const daytimeKDTree = buildKDTree(updated_safety_scores.map(item => ({
  latitude: item.Latitude, longitude: item.Longitude, safetyScore: item.SafetyScore+0.011927
})));

// Minus 5 from SafetyScore for evening KD tree.
export const eveningKDTree = buildKDTree(updated_safety_scores.map(item => ({
  latitude: item.Latitude, longitude: item.Longitude, safetyScore: item.SafetyScore-0.011927
})));