import pandas as pd
import numpy as np

# Long/Lat ranges for total area of analysis in Leamington Spa.
total_lat_range = (52.268551, 52.295043)
total_long_range = (-1.497617, -1.570058)

# Function to get a spreadsheet of total crimes in a specified range
def get_crimes_in_range(all_crime_data, long_min, long_max, lat_min, lat_max):
    # Filter the data to only include crimes within the specified ranges
    crimes_in_range = all_crime_data[
        (all_crime_data['Longitude'] >= long_min) & 
        (all_crime_data['Longitude'] <= long_max) & 
        (all_crime_data['Latitude'] >= lat_min) & 
        (all_crime_data['Latitude'] <= lat_max)
    ]
    # Save the filtered data to a new CSV file with the same headers
    crimes_in_range.to_csv('C:\\Users\\loisp\\Documents\\Year3\\Dissertation\\Proutect\\Proutect\\csv-json-files\\crimes_in_range_2021.csv', index=False)

all_crime_data = pd.read_csv('C:\\Users\\loisp\\Documents\\Year3\\Dissertation\\Proutect\\Proutect\\csv-json-files\\all_crime_data_2021.csv')
get_crimes_in_range(all_crime_data, -1.570058, -1.497617, 52.268551, 52.295043)



