import pandas as pd
import numpy as np
from datetime import datetime, timedelta, date

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

crime_severity_scores = {
    "Drugs" : 2,
    "Shoplifting" : 2,
    "Burglary" : 5,
    "Theft from the person" : 8,
    "Possession of weapons" : 9,
    "Violence and sexual offences" : 10,
    "Criminal damage and arson" : 7,
    "Vehicle crime" : 4,
    "Bicycle theft " : 2,
    "Other theft" : 1,
    "Public order" : 1,
    "Robbery" : 5, 
    "Anti-social behaviour" : 5,
    "Other crime" : 1
}

# Function to get a spreadsheet of total crimes in a specified range
def get_crimes_in_range(all_crime_data, long_min, long_max, lat_min, lat_max, crime_severity_scores):
    # Filter the data to only include crimes within the specified ranges
    crimes_in_range = all_crime_data[
        (all_crime_data['Longitude'] >= long_min) & 
        (all_crime_data['Longitude'] <= long_max) & 
        (all_crime_data['Latitude'] >= lat_min) & 
        (all_crime_data['Latitude'] <= lat_max)
    ]

    crimes_in_range = crimes_in_range.copy()
    
    crimes_in_range['Severity Score'] = crimes_in_range['Crime type'].map(crime_severity_scores)
   
    # Calculate average severity score for the crimes in the range
    if not crimes_in_range.empty:
        average_severity_score = crimes_in_range['Severity Score'].mean()
        print(average_severity_score)
    else:
        average_severity_score = 0

    return len(crimes_in_range), average_severity_score

def get_public_space_data(public_space_data, latitude, longitude, tolerance=0.0001):
    count = 0

    for index, row in public_space_data.iterrows():
        # Check if both latitude and longitude are within the specified tolerance
        lat, lon = row['Location'].split(",")
        
        if lat == str(latitude) and lon == str(longitude):
            count+=1

    return count


all_coordinates = [(float(lat), float(lon)) for lat, lon in (s.split(',') for s in all_locations)]

crime_data_2021 = pd.read_csv("C:\\Users\\User\\Documents\\GitHub\\proutectapp\\csv-json-files\\crimes_in_range_2021.csv")
crime_data_2022 = pd.read_csv("C:\\Users\\User\\Documents\\GitHub\\proutectapp\\csv-json-files\\crimes_in_range_2022.csv")
crime_data_2023 = pd.read_csv("C:\\Users\\User\\Documents\\GitHub\\proutectapp\\csv-json-files\\crimes_in_range_2023.csv")

all_public_space_data = pd.read_csv("C:\\Users\\User\\Documents\\GitHub\\proutectapp\\csv-json-files\\public_spaces_data_350.csv")

# Gets a dictionary of all crimes, public space data for each coordinate in a 350m radius 
def create_dict(all_crime_data, all_coordinates, coordinate_dict, crime_severity_scores):
    for each in all_coordinates:
        coordinate_dict[each] = [0, 0, 0]
        # Gets lat/lon range within a 350m radius
        lat_range, lon_range = get_lat_lon_ranges(each[0], each[1], 350)
        # Saves the crimes within a 350m radius of each coordinate
        coordinate_dict[each][0], coordinate_dict[each][1] = get_crimes_in_range(all_crime_data, lon_range[0], lon_range[1], lat_range[0], lat_range[1], crime_severity_scores)
        coordinate_dict[each][2] = get_public_space_data(all_public_space_data, each[0], each[1])
    return coordinate_dict
    
# Function to calculate the safety score of a particular coordinate
def calculate_safety_score(m_c, c_s, w_c, s_s, p_s, m_p, w_p, d_b):
    
    safety_score = d_b
  
    # Crime score calculation
    # Checks that m_c and c_s are over 0, to avoid division by 0 errors
    print(s_s)
    if c_s > 0:
        crime_score = ((m_c - c_s) / m_c) * w_c * ((10 - s_s) / 10)
    else:
        crime_score = 80

    safety_score += crime_score

    # Public space score calculation
    if p_s > 0:
        public_space_score = (p_s / m_p) * w_p
    else:
        # If there are no public spaces, then the maximum penalty is applied. 
        public_space_score = -15

    safety_score += public_space_score

    return safety_score
    

# Function to update safety score
def create_training_set(coordinates, scores, total_crimes, crime_weight, total_public_spaces, public_space_weight, year):
    all_safety_scores = []
    all_metrics = []
    # Loop through each coordinate in the hash map
    for coordinate, (crime_num, sev_score, public_spaces_num) in coordinates.items():
        latitude = coordinate[0]
        longitude = coordinate[1]
        
        safety_score = calculate_safety_score(total_crimes, crime_num, crime_weight, sev_score, public_spaces_num, total_public_spaces, public_space_weight, 0)
        
        all_safety_scores.append({
            'Latitude': latitude, 
            'Longitude': longitude,
            'Year': year, 
            'Crime Score': ((total_crimes - crime_num) / total_crimes) * (10 - sev_score) / 10 * 80,
            'Public Space Score': (public_spaces_num / total_public_spaces) * 15,
            'Num Crimes': crime_num,
            'Num Public Space': public_spaces_num,
            'Severity': sev_score,
            "Safety Score": safety_score
        })

    new_df = pd.DataFrame(all_safety_scores)
    existing_df = pd.read_csv(scores)
    updated_df = pd.concat([existing_df, new_df], ignore_index=True)
    updated_df.to_csv(output_file, index=False)


output_file = "C:\\Users\\User\\Documents\\GitHub\\proutectapp\\csv-json-files\\safety_scores_metrics.csv"

# Defines the crime and public space weight. 
# Add up to 90, with the daytime bonus being 10, this will add up to 100. 
crime_weight = 80
public_space_weight = 15

max_spaces = len(all_public_space_data)

coordinate_dict = dict()
data_2021 = create_dict(crime_data_2021, all_coordinates, coordinate_dict, crime_severity_scores)

coordinate_dict = dict()
data_2022 = create_dict(crime_data_2022, all_coordinates, coordinate_dict, crime_severity_scores)

coordinate_dict = dict()
data_2023 = create_dict(crime_data_2023, all_coordinates, coordinate_dict, crime_severity_scores)

max_crimes_21 = len(crime_data_2021)
max_crimes_22 = len(crime_data_2022)
max_crimes_23 = len(crime_data_2023)

create_training_set(data_2021, output_file, max_crimes_21, crime_weight, max_spaces, public_space_weight, 2021)

create_training_set(data_2022, output_file, max_crimes_22, crime_weight, max_spaces, public_space_weight, 2022)

create_training_set(data_2023, output_file, max_crimes_23, crime_weight, max_spaces, public_space_weight, 2023)
