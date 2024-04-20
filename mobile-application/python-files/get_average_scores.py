import pandas as pd

# Load the CSV file
df = pd.read_csv('csv-json-files\\training_set_new.csv')

# Group the data by 'longitude' and 'latitude' and calculate the mean safety score for each group
average_scores = df.groupby(['Latitude', 'Longitude'])['Safety Score'].mean().reset_index()

# Name of the output CSV file
output_csv = 'training_set_averages.csv'

# Write the averaged scores to a new CSV file
average_scores.to_csv(output_csv, index=False)

print(f'Average safety scores saved to {output_csv}')
