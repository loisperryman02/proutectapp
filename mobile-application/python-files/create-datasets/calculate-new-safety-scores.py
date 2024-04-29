import numpy as np 
import pandas as pd

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

    if not crimes_in_range.empty:
        average_severity_score = crimes_in_range['Severity Score'].mean()
    else:
        average_severity_score = 0

    return len(crimes_in_range), average_severity_score

def get_public_spaces_in_range(all_public_spaces, long_min, long_max, lat_min, lat_max):
    # Filter the data to only include crimes within the specified ranges
    places_in_range = all_public_spaces[
        (all_public_spaces['Longitude'] >= long_min) & 
        (all_public_spaces['Longitude'] <= long_max) & 
        (all_public_spaces['Latitude'] >= lat_min) & 
        (all_public_spaces['Latitude'] <= lat_max)
    ]

    return len(places_in_range)


all_feedback = pd.read_csv('C:\\Users\\User\\Documents\\GitHub\\proutectapp\\csv-json-files\\joinedfeedback.csv')
ratings = all_feedback.loc[:, ['Latitude', 'Longitude', 'q1', 'q2', 'q3', 'q4']]
responses =  all_feedback.loc[:, ['Latitude', 'Longitude', 'responseList']]

crime_data_2021 = pd.read_csv("C:\\Users\\User\\Documents\\GitHub\\proutectapp\\csv-json-files\\crimes_in_range_2021.csv")
crime_data_2022 = pd.read_csv("C:\\Users\\User\\Documents\\GitHub\\proutectapp\\csv-json-files\\crimes_in_range_2022.csv")
crime_data_2023 = pd.read_csv("C:\\Users\\User\\Documents\\GitHub\\proutectapp\\csv-json-files\\crimes_in_range_2023.csv")
all_public_space_data = pd.read_csv("C:\\Users\\User\\Documents\\GitHub\\proutectapp\\csv-json-files\\public_spaces_data_350.csv")

def get_coords(dataframe):
    all_locations = [f"{row['Latitude']}, {row['Longitude']}" for index, row in dataframe.iterrows()]
    return [(float(lat), float(lon)) for lat, lon in (s.split(', ') for s in all_locations)]

coords = get_coords(all_feedback)

def create_dict(all_crime_data, all_public_space_data, all_coordinates, crime_severity_scores):
    coordinate_dict = {}
    for each in all_coordinates:
        coordinate_dict[each] = [0, 0, 0]
        lat_range, lon_range = get_lat_lon_ranges(each[0], each[1], 250)
        coordinate_dict[each][0], coordinate_dict[each][1] = get_crimes_in_range(all_crime_data, lon_range[0], lon_range[1], lat_range[0], lat_range[1], crime_severity_scores)
        coordinate_dict[each][2] = get_public_spaces_in_range(all_public_space_data, lon_range[0], lon_range[1], lat_range[0], lat_range[1])
    return coordinate_dict

data_2021 = create_dict(crime_data_2021, all_public_space_data, coords, crime_severity_scores)
data_2022 = create_dict(crime_data_2021, all_public_space_data, coords, crime_severity_scores)
data_2023 = create_dict(crime_data_2021, all_public_space_data, coords, crime_severity_scores)

survey_weightings = {
    "crime": 95.9,
    "emergency": 80.2,
    "crowded": 78.2,
    "lighting": 85.4,
    "public_spaces": 74.5,
    "pos_keywords": 10,  
    "neg_keywords": -10, 
    "daytime_bonus": 5
}

total_weight = sum(survey_weightings.values())
normalized_weights = {k: v / total_weight for k, v in survey_weightings.items()}

# Function to calculate the safety score of a particular coordinate
def calculate_safety_score(max_crime, num_crime, emergency_rating, crowd_rating, 
                           unlit_rating, public_spaces, max_spaces, severity, weightings, keywords, pos_keywords, neg_keywords):
    
    safety_score = 0

    if num_crime > 0:
        safety_score += ((max_crime - num_crime) / max_crime) * weightings["crime"] * ((10 - severity) / 10)
    else:
        safety_score += weightings["crime"]

    if public_spaces > 0:
        safety_score += ((public_spaces / max_spaces) * weightings["public_spaces"])
    else: 
        safety_score + weightings["public_spaces"]

    if emergency_rating > 0:
        safety_score += (emergency_rating * weightings["emergency"])
    else: 
        safety_score -= weightings["emergency"]

    if crowd_rating > 0:
        safety_score += (crowd_rating * weightings["crowded"])
    else: 
        safety_score -= weightings["crowded"]

    if unlit_rating > 0:
        safety_score += (unlit_rating * weightings["lighting"])
    else: 
        safety_score -= weightings["lighting"]

    pos_count = sum(keywords.count(word) for word in pos_keywords)
    neg_count = sum(keywords.count(word) for word in neg_keywords)

    pos_ratio = 0
    neg_ratio = 0
    if pos_count > 0:
        pos_ratio = pos_count / len(pos_keywords)
        safety_score += (pos_ratio * weightings["pos_keywords"])

    if neg_count > 0:
        neg_ratio = neg_count / len(neg_keywords)
        safety_score += (neg_ratio * weightings["neg_keywords"])

    return safety_score * 100, pos_ratio, neg_ratio


def get_safety_scores(coords, max_crime, max_spaces, user_feedback, weightings, 
                      pos_keywords, neg_keywords, year, current_scores, output_file, 
                      output_metrics, current_metrics):
    safety_scores = []

    metrics = []
    for coordinate, (crime_num, severity, public_spaces) in coords.items():
        lat = coordinate[0]
        lon = coordinate[1]

        emergency_rating = 0
        crowd_rating = 0
        unlit_rating = 0
        matching_rows = user_feedback[(user_feedback["Longitude"] == lon) & (user_feedback["Latitude"] == lat)]

        if not matching_rows.empty:
            unlit_rating = matching_rows["q2"].iloc[0]
            crowd_rating = matching_rows["q3"].iloc[0]
            emergency_rating = matching_rows["q4"].iloc[0]
            total_keywords = matching_rows["Keywords V"].iloc[0]
            keywords = [keyword[0] for keyword in total_keywords]            

        safety_score, pos_ratio, neg_ratio = calculate_safety_score(max_crime, crime_num, emergency_rating, 
                                              crowd_rating, unlit_rating, public_spaces, max_spaces, severity, 
                                              weightings, keywords, pos_keywords, neg_keywords)
        
        safety_scores.append({
            "Latitude": lat,
            "Longitude": lon,
            "Lighting Rating": (unlit_rating) * weightings["lighting"],
            "Crowd Rating": (crowd_rating) * weightings["crowded"],
            "Emergency Rating": (emergency_rating) * weightings["emergency"],
            "Crime Rate": ((max_crime - crime_num) / max_crime) * weightings["crime"],
            "Severity Score": (10 - severity) / 10,
            "Public Space Score": (public_spaces / max_spaces) * weightings["public_spaces"],
            "Feedback Bonus": (pos_ratio * weightings["pos_keywords"]) + (neg_ratio * weightings["neg_keywords"]),
            "Year": year,
            "Safety Score": safety_score
        })

        metrics.append({
            "Latitude": lat,
            "Longitude": lon,
            "Lighting Rating": unlit_rating,
            "Crowd Rating": crowd_rating,
            "Emergency Rating": emergency_rating,
            "Crimes": crime_num,
            "Severity Score": severity,
            "Public Spaces": public_spaces,
            "Keywords": keywords,
            "Safety Score": safety_score
        })

    metrics_df = pd.DataFrame(metrics)
    existing_metrics = pd.read_csv(current_metrics)
    joined_metrics = pd.concat([existing_metrics, metrics_df], ignore_index=True)
    joined_metrics.to_csv(output_metrics, index=False)

    safety_df = pd.DataFrame(safety_scores)
    existing_df = pd.read_csv(current_scores)
    joined_df = pd.concat([existing_df, safety_df], ignore_index=True)
    joined_df.to_csv(output_file, index=False)

output_file = "C:\\Users\\User\\Documents\\GitHub\\proutectapp\\csv-json-files\\training_set_after.csv"
output_metrics = "C:\\Users\\User\\Documents\\GitHub\\proutectapp\\csv-json-files\\training_set_after_metrics.csv"
max_spaces = len(all_public_space_data)
top_safe_words = ['safe', 'many restaurants', 'residential', 'ease', 'public spaces', 'good street lighting', 'busy', 'afternoons', 'daytime', 'park']

top_unsafe_words = ['quiet', 'unsafe', 'drunk people', 'terrible', 'dark', 'night', 'isolated', 'back streets', 'little lighting', 'unlit roads']

combined_data = pd.read_csv("C:\\Users\\User\\Documents\\GitHub\\proutectapp\\csv-json-files\\combined_feedback.csv")

output_df = get_safety_scores(data_2021, len(crime_data_2021), max_spaces, combined_data, normalized_weights, 
                  top_safe_words, top_unsafe_words, 2021, output_file, output_file, output_metrics, output_metrics)

output_df2 = get_safety_scores(data_2022, len(crime_data_2022), max_spaces, combined_data, normalized_weights, 
                  top_safe_words, top_unsafe_words, 2022, output_file, output_file, output_metrics, output_metrics)

get_safety_scores(data_2023, len(crime_data_2023), max_spaces, combined_data, normalized_weights, 
                  top_safe_words, top_unsafe_words, 2023, output_file, output_file, output_metrics, output_metrics)

output = pd.read_csv(output_file)