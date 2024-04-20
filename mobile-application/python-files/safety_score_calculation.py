import pandas as pd
import numpy as np
import openpyxl

# Function to find the longitude and latitude within a certain radius of a coordinate. 
def get_lat_lon_ranges(lat, lon, radius):
    # Earth's radius in meters
    EARTH_RADIUS = 6378137

    # Convert latitude and longitude from degrees to radians
    lat_rad = np.radians(lat)

    # Calculate deltas
    dLat = radius/EARTH_RADIUS
    dLon = radius/(EARTH_RADIUS * np.cos(lat_rad))

    # Convert deltas from radians to degrees
    dLat_deg = np.degrees(dLat)
    dLon_deg = np.degrees(dLon)

    # Define ranges
    lat_range = (lat - dLat_deg, lat + dLat_deg)
    lon_range = (lon - dLon_deg, lon + dLon_deg)

    return lat_range, lon_range



all_locations = [
    '52.295042,-1.570058',
    '52.295042,-1.562762',
    '52.295042,-1.555381',
    '52.295042,-1.548171',
    '52.295042,-1.540875',
    '52.295042,-1.533494',
    '52.295042,-1.526155',
    '52.295042,-1.518688',
    '52.295042,-1.511564',
    '52.295042,-1.504140',
    '52.295042,-1.497617',
    '52.290777,-1.570058',
    '52.290777,-1.562762',
    '52.290777,-1.555381',
    '52.290777,-1.548171',
    '52.290777,-1.540875',
    '52.290777,-1.533494',
    '52.290777,-1.526155',
    '52.290777,-1.518688',
    '52.290777,-1.511564',
    '52.290777,-1.504140',
    '52.290777,-1.497617',
    '52.286249,-1.570058',
    '52.286249,-1.562762',
    '52.286249,-1.555381',
    '52.286249,-1.548171',
    '52.286249,-1.540875',
    '52.286249,-1.533494',
    '52.286249,-1.526155',
    '52.286249,-1.518688',
    '52.286249,-1.511564',
    '52.286249,-1.504140',
    '52.286249,-1.497617',
    '52.281418,-1.570058',
    '52.281418,-1.562762',
    '52.281418,-1.555381',
    '52.281418,-1.548171',
    '52.281418,-1.540875',
    '52.281418,-1.533494',
    '52.281418,-1.526155',
    '52.281418,-1.518688',
    '52.281418,-1.511564',
    '52.281418,-1.504140',
    '52.281418,-1.497617',
    '52.277348,-1.570058',
    '52.277348,-1.562762',
    '52.277348,-1.555381',
    '52.277348,-1.548171',
    '52.277348,-1.540875',
    '52.277348,-1.533494',
    '52.277348,-1.526155',
    '52.277348,-1.518688',
    '52.277348,-1.511564',
    '52.277348,-1.504140',
    '52.277348,-1.497617',
    '52.272517,-1.570058',
    '52.272517,-1.562762',
    '52.272517,-1.555381',
    '52.272517,-1.548171',
    '52.272517,-1.540875',
    '52.272517,-1.533494',
    '52.272517,-1.526155',
    '52.272517,-1.518688',
    '52.272517,-1.511564',
    '52.272517,-1.504140',
    '52.272517,-1.497617',
    '52.268551,-1.570058',
    '52.268551,-1.562762',
    '52.268551,-1.555381',
    '52.268551,-1.548171',
    '52.268551,-1.540875',
    '52.268551,-1.533494',
    '52.268551,-1.526155',
    '52.268551,-1.518688',
    '52.268551,-1.511564',
    '52.268551,-1.504140',
    '52.268551,-1.497617'   
]

# Function to get a spreadsheet of total crimes in a specified range
def num_crimes_in_range(all_crime_data, long_min, long_max, lat_min, lat_max):
    # Filter the data to only include crimes within the specified ranges
    crimes_in_range = all_crime_data[
        (all_crime_data['Longitude'] >= long_min) & 
        (all_crime_data['Longitude'] <= long_max) & 
        (all_crime_data['Latitude'] >= lat_min) & 
        (all_crime_data['Latitude'] <= lat_max)
    ]
    
    return len(crimes_in_range)

# Convert the strings to tuples of floats
all_coordinates = [(float(lat), float(lon)) for lat, lon in (s.split(',') for s in all_locations)]

all_crime_data = pd.read_csv('C:\\Users\\loisp\\Documents\\Year3\\Dissertation\\Proutect-App\\Proutect-App\\csv-json-files\\crimes_in_range.csv')
all_public_space_data = pd.read_csv('C:\\Users\\loisp\\Documents\\Year3\\Dissertation\\Proutect-App\\Proutect-App\\csv-json-files\\public_spaces_data_500.csv')

# Creates a dictionary where each key is coordinate, value is an empty array.
# Array will be number of crimes within radius, and number of public space within a radius. 
coordinate_dict = dict()
for each in all_coordinates:
    coordinate_dict[each] = []
    # Gets lat/lon range within a 250m radius
    lat_range, lon_range = get_lat_lon_ranges(each[0], each[1], 350)
    # Saves number of crimes of each coordinate to the dictionary, with a 250m radius
    coordinate_dict[each].append(num_crimes_in_range(all_crime_data, lon_range[0], lon_range[1], lat_range[0], lat_range[1]))
    coordinate_dict[each].append(num_crimes_in_range(all_public_space_data, lon_range[0], lon_range[1], lat_range[0], lat_range[1]))
    
# Function to calculate the safety score of a particular coordinate
def calculate_safety_score(m_c, c_s, w_c, p_s, m_p, w_p, d_b):
    print(c_s)
    print(p_s)
    return ((m_c-c_s)/m_c * w_c) + ((p_s/m_p) * w_p) + d_b

def update_safety_scores(coords, scores, m_c, w_c, m_p, w_p):
    all_safety_scores = []
    # Loop through each coordinate in the hash map
    for coordinate, (c_s, p_s) in coords.items():
        latitude = coordinate[0]
        print(latitude)
        longitude = coordinate[1]
        print(longitude)
        
        daytime_score = calculate_safety_score(m_c, c_s, w_c, p_s, m_p, w_p, 10)
        evening_score = calculate_safety_score(m_c, c_s, w_c, p_s, m_p, w_p, -10)

        all_safety_scores.append({'Latitude': latitude, 'Longitude': longitude, 'Daytime Score': daytime_score, 'Evening Score': evening_score})

    new_df = pd.DataFrame(all_safety_scores)
    existing_df = pd.read_csv(scores)
    updated_df = pd.concat([existing_df, new_df], ignore_index=True)
    updated_df.to_csv(output_file, index=False)

output_file = 'C:\\Users\\loisp\\Documents\\Year3\\Dissertation\\Proutect-App\\Proutect-App\\csv-json-files\\safety_scores.csv'

# Defines the crime and public space weight. 
# Add up to 90, with the daytime bonus being 10, this will add up to 100. 
crime_weight = 75
public_space_weight = 15


max_crimes = len(all_crime_data)
max_spaces = len(all_public_space_data)

print(max_crimes)
print(max_spaces)


update_safety_scores(coordinate_dict, output_file, max_crimes, crime_weight, max_spaces, public_space_weight)

# need to have a play around with the formula tomorrow
# maybe can use different weighting/more data
# all safety scores are around the same 
# bit of an issue as all routes will be deemed safe.
# work with chatgpt. 


