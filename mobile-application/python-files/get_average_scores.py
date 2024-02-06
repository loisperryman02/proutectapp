import pandas as pd

# Load the CSV file
df = pd.read_csv('C:\\Users\\loisp\Documents\\Year3\\CS310\\proutectapp\\csv-json-files\\training_set.csv')

# Group the data by 'longitude' and 'latitude' and calculate the mean safety score for each group
average_scores = df.groupby(['Latitude', 'Longitude'])['Safety Score'].mean().reset_index()

# Name of the output CSV file
output_csv = 'training_set_avg.csv'

# Write the averaged scores to a new CSV file
average_scores.to_csv(output_csv, index=False)

print(f'Average safety scores saved to {output_csv}')
