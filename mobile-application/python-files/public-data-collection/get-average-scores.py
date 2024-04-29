import pandas as pd

df = pd.read_csv('csv-json-files\\training_set_new.csv')
average_scores = df.groupby(['Latitude', 'Longitude'])['Safety Score'].mean().reset_index()
output_csv = 'training_set_averages.csv'
average_scores.to_csv(output_csv, index=False)
print(f'Average safety scores saved to {output_csv}')
