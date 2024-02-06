import { kdTree } from 'kd-tree-javascript';
// import { safety_scores } from 'C:/Users/loisp/Documents/Year3/Dissertation/Proutect/Proutect/csv-json-files/safety_scores.json';

let safety_scores = 
[
  {
    "Latitude": 52.295042,
    "Longitude": -1.570058,
    "Safety_Score": 34.75617548
  },
  {
    "Latitude": 52.295042,
    "Longitude": -1.562762,
    "Safety_Score": 37.47437414
  },
  {
    "Latitude": 52.295042,
    "Longitude": -1.555381,
    "Safety_Score": 51.17941121
  },
  {
    "Latitude": 52.295042,
    "Longitude": -1.548171,
    "Safety_Score": 40.83982702
  },
  {
    "Latitude": 52.295042,
    "Longitude": -1.540875,
    "Safety_Score": 41.23211333
  },
  {
    "Latitude": 52.295042,
    "Longitude": -1.533494,
    "Safety_Score": 42.12779
  },
  {
    "Latitude": 52.295042,
    "Longitude": -1.526155,
    "Safety_Score": 49.68727485
  },
  {
    "Latitude": 52.295042,
    "Longitude": -1.518688,
    "Safety_Score": 51.99333174
  },
  {
    "Latitude": 52.295042,
    "Longitude": -1.511564,
    "Safety_Score": 65
  },
  {
    "Latitude": 52.295042,
    "Longitude": -1.50414,
    "Safety_Score": 65
  },
  {
    "Latitude": 52.295042,
    "Longitude": -1.497617,
    "Safety_Score": 65
  },
  {
    "Latitude": 52.290777,
    "Longitude": -1.570058,
    "Safety_Score": 35.35878829
  },
  {
    "Latitude": 52.290777,
    "Longitude": -1.562762,
    "Safety_Score": 36.12713487
  },
  {
    "Latitude": 52.290777,
    "Longitude": -1.555381,
    "Safety_Score": 48.05143435
  },
  {
    "Latitude": 52.290777,
    "Longitude": -1.548171,
    "Safety_Score": 42.92508593
  },
  {
    "Latitude": 52.290777,
    "Longitude": -1.540875,
    "Safety_Score": 39.48168896
  },
  {
    "Latitude": 52.290777,
    "Longitude": -1.533494,
    "Safety_Score": 36.65256418
  },
  {
    "Latitude": 52.290777,
    "Longitude": -1.526155,
    "Safety_Score": 49.53344717
  },
  {
    "Latitude": 52.290777,
    "Longitude": -1.518688,
    "Safety_Score": 48.13210801
  },
  {
    "Latitude": 52.290777,
    "Longitude": -1.511564,
    "Safety_Score": 40.05803734
  },
  {
    "Latitude": 52.290777,
    "Longitude": -1.50414,
    "Safety_Score": 65
  },
  {
    "Latitude": 52.290777,
    "Longitude": -1.497617,
    "Safety_Score": 65
  },
  {
    "Latitude": 52.286249,
    "Longitude": -1.570058,
    "Safety_Score": 24.92953872
  },
  {
    "Latitude": 52.286249,
    "Longitude": -1.562762,
    "Safety_Score": 29.61224022
  },
  {
    "Latitude": 52.286249,
    "Longitude": -1.555381,
    "Safety_Score": 45.77085818
  },
  {
    "Latitude": 52.286249,
    "Longitude": -1.548171,
    "Safety_Score": 41.7879732
  },
  {
    "Latitude": 52.286249,
    "Longitude": -1.540875,
    "Safety_Score": 43.26450022
  },
  {
    "Latitude": 52.286249,
    "Longitude": -1.533494,
    "Safety_Score": 44.46903615
  },
  {
    "Latitude": 52.286249,
    "Longitude": -1.526155,
    "Safety_Score": 43.38158554
  },
  {
    "Latitude": 52.286249,
    "Longitude": -1.518688,
    "Safety_Score": 45.95528764
  },
  {
    "Latitude": 52.286249,
    "Longitude": -1.511564,
    "Safety_Score": 54.23350885
  },
  {
    "Latitude": 52.286249,
    "Longitude": -1.50414,
    "Safety_Score": 52.97672429
  },
  {
    "Latitude": 52.286249,
    "Longitude": -1.497617,
    "Safety_Score": 65
  },
  {
    "Latitude": 52.281418,
    "Longitude": -1.570058,
    "Safety_Score": 36.30534706
  },
  {
    "Latitude": 52.281418,
    "Longitude": -1.562762,
    "Safety_Score": 29.70780289
  },
  {
    "Latitude": 52.281418,
    "Longitude": -1.555381,
    "Safety_Score": 44.93095057
  },
  {
    "Latitude": 52.281418,
    "Longitude": -1.548171,
    "Safety_Score": 31.45452163
  },
  {
    "Latitude": 52.281418,
    "Longitude": -1.540875,
    "Safety_Score": 41.3181885
  },
  {
    "Latitude": 52.281418,
    "Longitude": -1.533494,
    "Safety_Score": 44.66683332
  },
  {
    "Latitude": 52.281418,
    "Longitude": -1.526155,
    "Safety_Score": 44.33938808
  },
  {
    "Latitude": 52.281418,
    "Longitude": -1.518688,
    "Safety_Score": 47.28850202
  },
  {
    "Latitude": 52.281418,
    "Longitude": -1.511564,
    "Safety_Score": 50.68346859
  },
  {
    "Latitude": 52.281418,
    "Longitude": -1.50414,
    "Safety_Score": 39.85644741
  },
  {
    "Latitude": 52.281418,
    "Longitude": -1.497617,
    "Safety_Score": 24.93154202
  },
  {
    "Latitude": 52.277348,
    "Longitude": -1.570058,
    "Safety_Score": 31.80100731
  },
  {
    "Latitude": 52.277348,
    "Longitude": -1.562762,
    "Safety_Score": 19.63106852
  },
  {
    "Latitude": 52.277348,
    "Longitude": -1.555381,
    "Safety_Score": 26.17393639
  },
  {
    "Latitude": 52.277348,
    "Longitude": -1.548171,
    "Safety_Score": 30.61961651
  },
  {
    "Latitude": 52.277348,
    "Longitude": -1.540875,
    "Safety_Score": 47.89837702
  },
  {
    "Latitude": 52.277348,
    "Longitude": -1.533494,
    "Safety_Score": 43.9006417
  },
  {
    "Latitude": 52.277348,
    "Longitude": -1.526155,
    "Safety_Score": 45.81767758
  },
  {
    "Latitude": 52.277348,
    "Longitude": -1.518688,
    "Safety_Score": 49.87733459
  },
  {
    "Latitude": 52.277348,
    "Longitude": -1.511564,
    "Safety_Score": 49.34601798
  },
  {
    "Latitude": 52.277348,
    "Longitude": -1.50414,
    "Safety_Score": 27.13373756
  },
  {
    "Latitude": 52.277348,
    "Longitude": -1.497617,
    "Safety_Score": 42.70023667
  },
  {
    "Latitude": 52.272517,
    "Longitude": -1.570058,
    "Safety_Score": 30.31005762
  },
  {
    "Latitude": 52.272517,
    "Longitude": -1.562762,
    "Safety_Score": 18.97672429
  },
  {
    "Latitude": 52.272517,
    "Longitude": -1.555381,
    "Safety_Score": 50.91962903
  },
  {
    "Latitude": 52.272517,
    "Longitude": -1.548171,
    "Safety_Score": 52.66927704
  },
  {
    "Latitude": 52.272517,
    "Longitude": -1.540875,
    "Safety_Score": 35.2322024
  },
  {
    "Latitude": 52.272517,
    "Longitude": -1.533494,
    "Safety_Score": 42.6177286
  },
  {
    "Latitude": 52.272517,
    "Longitude": -1.526155,
    "Safety_Score": 47.62157741
  },
  {
    "Latitude": 52.272517,
    "Longitude": -1.518688,
    "Safety_Score": 55.29427079
  },
  {
    "Latitude": 52.272517,
    "Longitude": -1.511564,
    "Safety_Score": 55.04617527
  },
  {
    "Latitude": 52.272517,
    "Longitude": -1.50414,
    "Safety_Score": 64.95892521
  },
  {
    "Latitude": 52.272517,
    "Longitude": -1.497617,
    "Safety_Score": 61.73380904
  },
  {
    "Latitude": 52.268551,
    "Longitude": -1.570058,
    "Safety_Score": 65
  },
  {
    "Latitude": 52.268551,
    "Longitude": -1.562762,
    "Safety_Score": 65
  },
  {
    "Latitude": 52.268551,
    "Longitude": -1.555381,
    "Safety_Score": 52.7757695
  },
  {
    "Latitude": 52.268551,
    "Longitude": -1.548171,
    "Safety_Score": 36.1596127
  },
  {
    "Latitude": 52.268551,
    "Longitude": -1.540875,
    "Safety_Score": 42.0889239
  },
  {
    "Latitude": 52.268551,
    "Longitude": -1.533494,
    "Safety_Score": 44.81617516
  },
  {
    "Latitude": 52.268551,
    "Longitude": -1.526155,
    "Safety_Score": 45.18627671
  },
  {
    "Latitude": 52.268551,
    "Longitude": -1.518688,
    "Safety_Score": 54.80885649
  },
  {
    "Latitude": 52.268551,
    "Longitude": -1.511564,
    "Safety_Score": 65
  },
  {
    "Latitude": 52.268551,
    "Longitude": -1.50414,
    "Safety_Score": 65
  },
  {
    "Latitude": 52.268551,
    "Longitude": -1.497617,
    "Safety_Score": 65
  },
  {
    "Latitude": 52.295042,
    "Longitude": -1.570058,
    "Safety_Score": 32.38721309
  },
  {
    "Latitude": 52.295042,
    "Longitude": -1.562762,
    "Safety_Score": 32.44066522
  },
  {
    "Latitude": 52.295042,
    "Longitude": -1.555381,
    "Safety_Score": 44.46058865
  },
  {
    "Latitude": 52.295042,
    "Longitude": -1.548171,
    "Safety_Score": 38.60608761
  },
  {
    "Latitude": 52.295042,
    "Longitude": -1.540875,
    "Safety_Score": 43.71380643
  },
  {
    "Latitude": 52.295042,
    "Longitude": -1.533494,
    "Safety_Score": 43.00753166
  },
  {
    "Latitude": 52.295042,
    "Longitude": -1.526155,
    "Safety_Score": 51.83949193
  },
  {
    "Latitude": 52.295042,
    "Longitude": -1.518688,
    "Safety_Score": 80.04672897
  },
  {
    "Latitude": 52.295042,
    "Longitude": -1.511564,
    "Safety_Score": 65
  },
  {
    "Latitude": 52.295042,
    "Longitude": -1.50414,
    "Safety_Score": 65
  },
  {
    "Latitude": 52.295042,
    "Longitude": -1.497617,
    "Safety_Score": 65
  },
  {
    "Latitude": 52.290777,
    "Longitude": -1.570058,
    "Safety_Score": 35.0149581
  },
  {
    "Latitude": 52.290777,
    "Longitude": -1.562762,
    "Safety_Score": 31.31411982
  },
  {
    "Latitude": 52.290777,
    "Longitude": -1.555381,
    "Safety_Score": 43.77444601
  },
  {
    "Latitude": 52.290777,
    "Longitude": -1.548171,
    "Safety_Score": 44.23922591
  },
  {
    "Latitude": 52.290777,
    "Longitude": -1.540875,
    "Safety_Score": 39.87300355
  },
  {
    "Latitude": 52.290777,
    "Longitude": -1.533494,
    "Safety_Score": 36.15124053
  },
  {
    "Latitude": 52.290777,
    "Longitude": -1.526155,
    "Safety_Score": 48.89961242
  },
  {
    "Latitude": 52.290777,
    "Longitude": -1.518688,
    "Safety_Score": 46.78558114
  },
  {
    "Latitude": 52.290777,
    "Longitude": -1.511564,
    "Safety_Score": 33.71122639
  },
  {
    "Latitude": 52.290777,
    "Longitude": -1.50414,
    "Safety_Score": 65
  },
  {
    "Latitude": 52.290777,
    "Longitude": -1.497617,
    "Safety_Score": 65
  },
  {
    "Latitude": 52.286249,
    "Longitude": -1.570058,
    "Safety_Score": 24.28548005
  },
  {
    "Latitude": 52.286249,
    "Longitude": -1.562762,
    "Safety_Score": 24.16777371
  },
  {
    "Latitude": 52.286249,
    "Longitude": -1.555381,
    "Safety_Score": 47.48153372
  },
  {
    "Latitude": 52.286249,
    "Longitude": -1.548171,
    "Safety_Score": 40.30456013
  },
  {
    "Latitude": 52.286249,
    "Longitude": -1.540875,
    "Safety_Score": 42.66549334
  },
  {
    "Latitude": 52.286249,
    "Longitude": -1.533494,
    "Safety_Score": 44.48850945
  },
  {
    "Latitude": 52.286249,
    "Longitude": -1.526155,
    "Safety_Score": 44.24717998
  },
  {
    "Latitude": 52.286249,
    "Longitude": -1.518688,
    "Safety_Score": 43.06582265
  },
  {
    "Latitude": 52.286249,
    "Longitude": -1.511564,
    "Safety_Score": 41.74361022
  },
  {
    "Latitude": 52.286249,
    "Longitude": -1.50414,
    "Safety_Score": 32.96690226
  },
  {
    "Latitude": 52.286249,
    "Longitude": -1.497617,
    "Safety_Score": 65
  },
  {
    "Latitude": 52.281418,
    "Longitude": -1.570058,
    "Safety_Score": 43.06146276
  },
  {
    "Latitude": 52.281418,
    "Longitude": -1.562762,
    "Safety_Score": 33.3011175
  },
  {
    "Latitude": 52.281418,
    "Longitude": -1.555381,
    "Safety_Score": 40.13352766
  },
  {
    "Latitude": 52.281418,
    "Longitude": -1.548171,
    "Safety_Score": 29.30972485
  },
  {
    "Latitude": 52.281418,
    "Longitude": -1.540875,
    "Safety_Score": 42.42845437
  },
  {
    "Latitude": 52.281418,
    "Longitude": -1.533494,
    "Safety_Score": 48.52348903
  },
  {
    "Latitude": 52.281418,
    "Longitude": -1.526155,
    "Safety_Score": 44.58960727
  },
  {
    "Latitude": 52.281418,
    "Longitude": -1.518688,
    "Safety_Score": 47.57265398
  },
  {
    "Latitude": 52.281418,
    "Longitude": -1.511564,
    "Safety_Score": 46.86657758
  },
  {
    "Latitude": 52.281418,
    "Longitude": -1.50414,
    "Safety_Score": 38.32538725
  },
  {
    "Latitude": 52.281418,
    "Longitude": -1.497617,
    "Safety_Score": 34.96552319
  },
  {
    "Latitude": 52.277348,
    "Longitude": -1.570058,
    "Safety_Score": 26.09321053
  },
  {
    "Latitude": 52.277348,
    "Longitude": -1.562762,
    "Safety_Score": 29.51764474
  },
  {
    "Latitude": 52.277348,
    "Longitude": -1.555381,
    "Safety_Score": 33.83026633
  },
  {
    "Latitude": 52.277348,
    "Longitude": -1.548171,
    "Safety_Score": 26.70065843
  },
  {
    "Latitude": 52.277348,
    "Longitude": -1.540875,
    "Safety_Score": 49.9879596
  },
  {
    "Latitude": 52.277348,
    "Longitude": -1.533494,
    "Safety_Score": 51.67518455
  },
  {
    "Latitude": 52.277348,
    "Longitude": -1.526155,
    "Safety_Score": 51.22373259
  },
  {
    "Latitude": 52.277348,
    "Longitude": -1.518688,
    "Safety_Score": 41.74656778
  },
  {
    "Latitude": 52.277348,
    "Longitude": -1.511564,
    "Safety_Score": 41.88161436
  },
  {
    "Latitude": 52.277348,
    "Longitude": -1.50414,
    "Safety_Score": 38.85106016
  },
  {
    "Latitude": 52.277348,
    "Longitude": -1.497617,
    "Safety_Score": 55.63135395
  },
  {
    "Latitude": 52.272517,
    "Longitude": -1.570058,
    "Safety_Score": 28.16276504
  },
  {
    "Latitude": 52.272517,
    "Longitude": -1.562762,
    "Safety_Score": 29.1056613
  },
  {
    "Latitude": 52.272517,
    "Longitude": -1.555381,
    "Safety_Score": 49.92813055
  },
  {
    "Latitude": 52.272517,
    "Longitude": -1.548171,
    "Safety_Score": 47.94144767
  },
  {
    "Latitude": 52.272517,
    "Longitude": -1.540875,
    "Safety_Score": 46.34193612
  },
  {
    "Latitude": 52.272517,
    "Longitude": -1.533494,
    "Safety_Score": 52.13877772
  },
  {
    "Latitude": 52.272517,
    "Longitude": -1.526155,
    "Safety_Score": 58.44544541
  },
  {
    "Latitude": 52.272517,
    "Longitude": -1.518688,
    "Safety_Score": 59.59402188
  },
  {
    "Latitude": 52.272517,
    "Longitude": -1.511564,
    "Safety_Score": 57.12996494
  },
  {
    "Latitude": 52.272517,
    "Longitude": -1.50414,
    "Safety_Score": 39.35311153
  },
  {
    "Latitude": 52.272517,
    "Longitude": -1.497617,
    "Safety_Score": 48.80933452
  },
  {
    "Latitude": 52.268551,
    "Longitude": -1.570058,
    "Safety_Score": 65
  },
  {
    "Latitude": 52.268551,
    "Longitude": -1.562762,
    "Safety_Score": 34.23128196
  },
  {
    "Latitude": 52.268551,
    "Longitude": -1.555381,
    "Safety_Score": 51.41491093
  },
  {
    "Latitude": 52.268551,
    "Longitude": -1.548171,
    "Safety_Score": 44.90224497
  },
  {
    "Latitude": 52.268551,
    "Longitude": -1.540875,
    "Safety_Score": 57.28573693
  },
  {
    "Latitude": 52.268551,
    "Longitude": -1.533494,
    "Safety_Score": 52.23866245
  },
  {
    "Latitude": 52.268551,
    "Longitude": -1.526155,
    "Safety_Score": 56.05072001
  },
  {
    "Latitude": 52.268551,
    "Longitude": -1.518688,
    "Safety_Score": 63.17781814
  },
  {
    "Latitude": 52.268551,
    "Longitude": -1.511564,
    "Safety_Score": 16.99448371
  },
  {
    "Latitude": 52.268551,
    "Longitude": -1.50414,
    "Safety_Score": 65
  },
  {
    "Latitude": 52.268551,
    "Longitude": -1.497617,
    "Safety_Score": 65
  },
  {
    "Latitude": 52.295042,
    "Longitude": -1.570058,
    "Safety_Score": 42.7669791
  },
  {
    "Latitude": 52.295042,
    "Longitude": -1.562762,
    "Safety_Score": 48.45919118
  },
  {
    "Latitude": 52.295042,
    "Longitude": -1.555381,
    "Safety_Score": 49.60713324
  },
  {
    "Latitude": 52.295042,
    "Longitude": -1.548171,
    "Safety_Score": 29.91081178
  },
  {
    "Latitude": 52.295042,
    "Longitude": -1.540875,
    "Safety_Score": 43.95289676
  },
  {
    "Latitude": 52.295042,
    "Longitude": -1.533494,
    "Safety_Score": 41.40072328
  },
  {
    "Latitude": 52.295042,
    "Longitude": -1.526155,
    "Safety_Score": 48.39738977
  },
  {
    "Latitude": 52.295042,
    "Longitude": -1.518688,
    "Safety_Score": 80.04672897
  },
  {
    "Latitude": 52.295042,
    "Longitude": -1.511564,
    "Safety_Score": 65
  },
  {
    "Latitude": 52.295042,
    "Longitude": -1.50414,
    "Safety_Score": 65
  },
  {
    "Latitude": 52.295042,
    "Longitude": -1.497617,
    "Safety_Score": 65
  },
  {
    "Latitude": 52.290777,
    "Longitude": -1.570058,
    "Safety_Score": 39.40711405
  },
  {
    "Latitude": 52.290777,
    "Longitude": -1.562762,
    "Safety_Score": 36.93040369
  },
  {
    "Latitude": 52.290777,
    "Longitude": -1.555381,
    "Safety_Score": 47.17599321
  },
  {
    "Latitude": 52.290777,
    "Longitude": -1.548171,
    "Safety_Score": 37.03627249
  },
  {
    "Latitude": 52.290777,
    "Longitude": -1.540875,
    "Safety_Score": 36.45421669
  },
  {
    "Latitude": 52.290777,
    "Longitude": -1.533494,
    "Safety_Score": 33.03799349
  },
  {
    "Latitude": 52.290777,
    "Longitude": -1.526155,
    "Safety_Score": 44.60616391
  },
  {
    "Latitude": 52.290777,
    "Longitude": -1.518688,
    "Safety_Score": 35.42806761
  },
  {
    "Latitude": 52.290777,
    "Longitude": -1.511564,
    "Safety_Score": 40.86824193
  },
  {
    "Latitude": 52.290777,
    "Longitude": -1.50414,
    "Safety_Score": 65
  },
  {
    "Latitude": 52.290777,
    "Longitude": -1.497617,
    "Safety_Score": 65
  },
  {
    "Latitude": 52.286249,
    "Longitude": -1.570058,
    "Safety_Score": 24.59478046
  },
  {
    "Latitude": 52.286249,
    "Longitude": -1.562762,
    "Safety_Score": 25.20263952
  },
  {
    "Latitude": 52.286249,
    "Longitude": -1.555381,
    "Safety_Score": 47.69123611
  },
  {
    "Latitude": 52.286249,
    "Longitude": -1.548171,
    "Safety_Score": 31.07835257
  },
  {
    "Latitude": 52.286249,
    "Longitude": -1.540875,
    "Safety_Score": 35.89523893
  },
  {
    "Latitude": 52.286249,
    "Longitude": -1.533494,
    "Safety_Score": 44.34332771
  },
  {
    "Latitude": 52.286249,
    "Longitude": -1.526155,
    "Safety_Score": 45.29514761
  },
  {
    "Latitude": 52.286249,
    "Longitude": -1.518688,
    "Safety_Score": 46.75048492
  },
  {
    "Latitude": 52.286249,
    "Longitude": -1.511564,
    "Safety_Score": 53.47623246
  },
  {
    "Latitude": 52.286249,
    "Longitude": -1.50414,
    "Safety_Score": 65
  },
  {
    "Latitude": 52.286249,
    "Longitude": -1.497617,
    "Safety_Score": 65
  },
  {
    "Latitude": 52.281418,
    "Longitude": -1.570058,
    "Safety_Score": 14.95767942
  },
  {
    "Latitude": 52.281418,
    "Longitude": -1.562762,
    "Safety_Score": 38.92405116
  },
  {
    "Latitude": 52.281418,
    "Longitude": -1.555381,
    "Safety_Score": 47.7100335
  },
  {
    "Latitude": 52.281418,
    "Longitude": -1.548171,
    "Safety_Score": 30.1306609
  },
  {
    "Latitude": 52.281418,
    "Longitude": -1.540875,
    "Safety_Score": 37.33554617
  },
  {
    "Latitude": 52.281418,
    "Longitude": -1.533494,
    "Safety_Score": 46.6900664
  },
  {
    "Latitude": 52.281418,
    "Longitude": -1.526155,
    "Safety_Score": 46.60988795
  },
  {
    "Latitude": 52.281418,
    "Longitude": -1.518688,
    "Safety_Score": 47.74651317
  },
  {
    "Latitude": 52.281418,
    "Longitude": -1.511564,
    "Safety_Score": 46.85550814
  },
  {
    "Latitude": 52.281418,
    "Longitude": -1.50414,
    "Safety_Score": 36.60675596
  },
  {
    "Latitude": 52.281418,
    "Longitude": -1.497617,
    "Safety_Score": 30.96755422
  },
  {
    "Latitude": 52.277348,
    "Longitude": -1.570058,
    "Safety_Score": 34.27243872
  },
  {
    "Latitude": 52.277348,
    "Longitude": -1.562762,
    "Safety_Score": 39.60673603
  },
  {
    "Latitude": 52.277348,
    "Longitude": -1.555381,
    "Safety_Score": 33.44768533
  },
  {
    "Latitude": 52.277348,
    "Longitude": -1.548171,
    "Safety_Score": 31.53546412
  },
  {
    "Latitude": 52.277348,
    "Longitude": -1.540875,
    "Safety_Score": 46.90389702
  },
  {
    "Latitude": 52.277348,
    "Longitude": -1.533494,
    "Safety_Score": 47.68647184
  },
  {
    "Latitude": 52.277348,
    "Longitude": -1.526155,
    "Safety_Score": 48.9594511
  },
  {
    "Latitude": 52.277348,
    "Longitude": -1.518688,
    "Safety_Score": 49.20649248
  },
  {
    "Latitude": 52.277348,
    "Longitude": -1.511564,
    "Safety_Score": 45.81577953
  },
  {
    "Latitude": 52.277348,
    "Longitude": -1.50414,
    "Safety_Score": 38.88538177
  },
  {
    "Latitude": 52.277348,
    "Longitude": -1.497617,
    "Safety_Score": 51.7918977
  },
  {
    "Latitude": 52.272517,
    "Longitude": -1.570058,
    "Safety_Score": 34.27243872
  },
  {
    "Latitude": 52.272517,
    "Longitude": -1.562762,
    "Safety_Score": 32.26246445
  },
  {
    "Latitude": 52.272517,
    "Longitude": -1.555381,
    "Safety_Score": 54.3162618
  },
  {
    "Latitude": 52.272517,
    "Longitude": -1.548171,
    "Safety_Score": 41.62464946
  },
  {
    "Latitude": 52.272517,
    "Longitude": -1.540875,
    "Safety_Score": 18.68698803
  },
  {
    "Latitude": 52.272517,
    "Longitude": -1.533494,
    "Safety_Score": 48.14272058
  },
  {
    "Latitude": 52.272517,
    "Longitude": -1.526155,
    "Safety_Score": 55.45279713
  },
  {
    "Latitude": 52.272517,
    "Longitude": -1.518688,
    "Safety_Score": 56.30998722
  },
  {
    "Latitude": 52.272517,
    "Longitude": -1.511564,
    "Safety_Score": 59.31739314
  },
  {
    "Latitude": 52.272517,
    "Longitude": -1.50414,
    "Safety_Score": 41.54675836
  },
  {
    "Latitude": 52.272517,
    "Longitude": -1.497617,
    "Safety_Score": 55.48619477
  },
  {
    "Latitude": 52.268551,
    "Longitude": -1.570058,
    "Safety_Score": 65
  },
  {
    "Latitude": 52.268551,
    "Longitude": -1.562762,
    "Safety_Score": 42.70883857
  },
  {
    "Latitude": 52.268551,
    "Longitude": -1.555381,
    "Safety_Score": 55.25831083
  },
  {
    "Latitude": 52.268551,
    "Longitude": -1.548171,
    "Safety_Score": 35.01307763
  },
  {
    "Latitude": 52.268551,
    "Longitude": -1.540875,
    "Safety_Score": 39.39096347
  },
  {
    "Latitude": 52.268551,
    "Longitude": -1.533494,
    "Safety_Score": 50.30858755
  },
  {
    "Latitude": 52.268551,
    "Longitude": -1.526155,
    "Safety_Score": 51.83798631
  },
  {
    "Latitude": 52.268551,
    "Longitude": -1.518688,
    "Safety_Score": 56.97368189
  },
  {
    "Latitude": 52.268551,
    "Longitude": -1.511564,
    "Safety_Score": 64.95767942
  },
  {
    "Latitude": 52.268551,
    "Longitude": -1.50414,
    "Safety_Score": 65
  },
  {
    "Latitude": 52.268551,
    "Longitude": -1.497617,
    "Safety_Score": 65
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

export function findNearestPoints(lat, lng, kdtree, numPoints = 4) {
  // Find the 'numPoints' nearest points to the given latitude and longitude
  let nearest = kdtree.nearest({ latitude: lat, longitude: lng }, numPoints)
  
  // Map the results to an array of objects with latitude, longitude, and safetyScore
  let returned_points = nearest.map(entry => {
    // Each 'entry' is an array: [point, distance]
    const point = entry[0]; // The point object
    const avg_safetyScore = getAverageSafetyScore(point.latitude, point.longitude, safety_scores);
    
    return {
      latitude: point.latitude,
      longitude: point.longitude,
      safetyScore: avg_safetyScore
    };
  });

  // Map the results to an array of objects with latitude, longitude, and safetyScore
  return returned_points
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




