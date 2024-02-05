import json
import csv

# Function to load data from JSON file
def load_data_from_json(json_file):
    with open(json_file, 'r') as f:
        return json.load(f)

# Function to write data to CSV
def write_to_csv(csv_file, data):
    with open(csv_file, mode='w', newline='', encoding='utf-8') as file:
        writer = csv.writer(file)
        writer.writerow(['Location', 'Place Name', 'Place Type', 'Latitude', 'Longitude'])
        
        for item in data:
            location = item['location']
            for place in item['data']:
                place_name = place.get('name')
                place_types = ', '.join(place.get('types', []))
                latitude = place['geometry']['location']['lat']
                longitude = place['geometry']['location']['lng']
            
                writer.writerow([location, place_name, place_types, latitude, longitude])

all_public_space_data = load_data_from_json('C:\\Users\\loisp\\Documents\\Year3\\Dissertation\\Proutect-App\\Proutect-App\\public_spaces_data_350.json')

write_to_csv('public_spaces_data_350.csv', all_public_space_data)