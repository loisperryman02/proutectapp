import requests
import json

all_locations = [
    '52.295042, -1.570058',
    '52.295042, -1.562762',
    '52.295042,-1.555381',
    '52.295042,-1.548171',
    '52.295042,-1.540875',
    '52.295042,-1.533494',
    '52.295042,-1.526155',
    '52.295042,-1.518688',
    '52.295042,-1.511564',
    '52.295042,-1.504140',
    '52.295042,-1.497617',
    '52.290777, -1.570058',
    '52.290777, -1.562762',
    '52.290777,-1.555381',
    '52.290777,-1.548171',
    '52.290777,-1.540875',
    '52.290777,-1.533494',
    '52.290777,-1.526155',
    '52.290777,-1.518688',
    '52.290777,-1.511564',
    '52.290777,-1.504140',
    '52.290777,-1.497617',
    '52.286249, -1.570058',
    '52.286249, -1.562762',
    '52.286249,-1.555381',
    '52.286249,-1.548171',
    '52.286249,-1.540875',
    '52.286249,-1.533494',
    '52.286249,-1.526155',
    '52.286249,-1.518688',
    '52.286249,-1.511564',
    '52.286249,-1.504140',
    '52.286249,-1.497617',
    '52.281418, -1.570058',
    '52.281418, -1.562762',
    '52.281418,-1.555381',
    '52.281418,-1.548171',
    '52.281418,-1.540875',
    '52.281418,-1.533494',
    '52.281418,-1.526155',
    '52.281418,-1.518688',
    '52.281418,-1.511564',
    '52.281418,-1.504140',
    '52.281418,-1.497617',
    '52.277348, -1.570058',
    '52.277348, -1.562762',
    '52.277348,-1.555381',
    '52.277348,-1.548171',
    '52.277348,-1.540875',
    '52.277348,-1.533494',
    '52.277348,-1.526155',
    '52.277348,-1.518688',
    '52.277348,-1.511564',
    '52.277348,-1.504140',
    '52.277348,-1.497617',
    '52.272517, -1.570058',
    '52.272517, -1.562762',
    '52.272517,-1.555381',
    '52.272517,-1.548171',
    '52.272517,-1.540875',
    '52.272517,-1.533494',
    '52.272517,-1.526155',
    '52.272517,-1.518688',
    '52.272517,-1.511564',
    '52.272517,-1.504140',
    '52.272517,-1.497617',
    '52.268551, -1.570058',
    '52.268551, -1.562762',
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

public_spaces = {
    "Public Transport": {"bus_station", "train_station", "taxi_stand", "light_rail_station"},
    "Food": {"bakery", "cafe", "restaurant", "meal_takeaway", "meal_delivery"},
    "Nightlife": {"bar", "casino", "night_club"},
    "Indoor Public Spaces": {"bowling_alley", "clothing_store", "department_store", "furniture_store", "gas_station", "hardware_store", "supermarket", "shoe_store", "police", "fire_department", "shopping_mall", "liquor_store"},
    "Outdoor Public Spaces": {"park", "cemetry"}
}

def fetch_public_spaces(location, radius, place_type):
    endpoint_url = "https://maps.googleapis.com/maps/api/place/nearbysearch/json"
    results = []
    params = {
        'location': location,
        'radius': radius,
        'type': place_type,
        'key': 'AIzaSyBwPXdbTdxT8cMhVjPxHuvJ3KCaFrF8-Xw'
    }
    response = requests.get(endpoint_url, params=params)
    if response.status_code == 200:
        results.extend(response.json()['results'])
    else:
        raise Exception(f"Error fetching data from Google Places API: {response.status_code}")
    return results
        
all_public_space_data = []
radius = 350

for each_location in all_locations:
    location_data = [] 
    for each_category, place_types in public_spaces.items():
        category_data = fetch_public_spaces(each_location, radius, place_types)
        location_data.extend(category_data)  

    all_public_space_data.append({
        'location': each_location,
        'data': location_data
    })

with open('public_spaces_data_350.json', 'w') as f:
    json.dump(all_public_space_data, f, indent=2)
    