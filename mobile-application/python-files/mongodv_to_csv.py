# import json
# import csv

# with open('C:\\Users\\User\\Documents\\GitHub\\proutectapp\\csv-json-files\\joinedfeedback.json') as json_file:
#     data = json.load(json_file)

# # Function to convert JSON to CSV
# def json_to_csv(data, csv_file_path):
    
#     # Column headers as specified
#     headers = ['Latitude', 'Longitude', 'q1', 'q2', 'q3', 'q4', 'feedback date list', 'responseList', 'dateList']
    
#     with open(csv_file_path, mode='w', newline='') as file:
#         writer = csv.DictWriter(file, fieldnames=headers)
#         writer.writeheader()
        
#         for item in data:
#             # Extracting required information
#             latitude = item['_id']['latitude']
#             longitude = item['_id']['longitude']
#             q1 = item['q1']
#             q2 = item['q2']
#             q3 = item['q3']
#             q4 = item['q4']
#             feedback_dates = [date['$date'] for date in item['feedbackDateList']]
#             # Assuming there's only one response per item for simplicity
#             response_list = item['responses'][0]['responseList']
#             date_list = [date['$date'] for date in item['responses'][0]['dateList']]
            
#             # Writing the row to the CSV file
#             writer.writerow({
#                 'Latitude': latitude,
#                 'Longitude': longitude,
#                 'q1': q1,
#                 'q2': q2,
#                 'q3': q3,
#                 'q4': q4,
#                 'feedback date list': '; '.join(feedback_dates),
#                 'responseList': '; '.join(response_list),
#                 'dateList': '; '.join(date_list)
#             })

# # Replace 'path/to/your/csvfile.csv' with the desired path where the CSV file should be saved
# csv_file_path = 'C:\\Users\\User\\Documents\\GitHub\\proutectapp\\csv-json-files\\joinedfeedback.csv'
# json_to_csv(data, csv_file_path)

import json
import csv

# Load JSON data
def load_json_data(json_file_path):
    with open(json_file_path) as json_file:
        return json.load(json_file)

# Load existing CSV data into a dictionary
def load_existing_csv_data(csv_file_path):
    data = {}
    try:
        with open(csv_file_path, mode='r', newline='', encoding='utf-8') as csv_file:
            reader = csv.DictReader(csv_file)
            for row in reader:
                key = (row['Latitude'], row['Longitude'])
                data[key] = row
    except FileNotFoundError:
        pass  # If file does not exist, we just start with an empty dictionary
    return data

# Update or add new entries from JSON data to the CSV data dictionary
def update_csv_data(csv_data, json_data):
    for item in json_data:
        latitude = item['_id']['latitude']
        longitude = item['_id']['longitude']
        key = (latitude, longitude)
        
        feedback_dates = '; '.join([date['$date'] for date in item['feedbackDateList']])
        response_list = '; '.join(item['responses'][0]['responseList'])
        date_list = '; '.join([date['$date'] for date in item['responses'][0]['dateList']])
        
        if key in csv_data:
            # Existing entry found, update it
            current_q1 = float(csv_data[key]['q1'])
            current_q2 = float(csv_data[key]['q2'])
            current_q3 = float(csv_data[key]['q3'])
            current_q4 = float(csv_data[key]['q4'])
            
            # Calculate the average of ratings
            csv_data[key]['q1'] = str((current_q1 + item['q1']) / 2)
            csv_data[key]['q2'] = str((current_q2 + item['q2']) / 2)
            csv_data[key]['q3'] = str((current_q3 + item['q3']) / 2)
            csv_data[key]['q4'] = str((current_q4 + item['q4']) / 2)
            
            # Append new feedback dates, response lists, and date lists
            csv_data[key]['feedback date list'] += '; ' + feedback_dates
            csv_data[key]['responseList'] += '; ' + response_list
            csv_data[key]['dateList'] += '; ' + date_list
        else:
            # New entry, add it
            csv_data[key] = {
                'Latitude': latitude,
                'Longitude': longitude,
                'q1': str(item['q1']),
                'q2': str(item['q2']),
                'q3': str(item['q3']),
                'q4': str(item['q4']),
                'feedback date list': feedback_dates,
                'responseList': response_list,
                'dateList': date_list
            }

# Write updated CSV data to file
def write_csv_data(csv_file_path, csv_data):
    headers = ['Latitude', 'Longitude', 'q1', 'q2', 'q3', 'q4', 'feedback date list', 'responseList', 'dateList']
    with open(csv_file_path, mode='w', newline='', encoding='utf-8') as file:
        writer = csv.DictWriter(file, fieldnames=headers)
        writer.writeheader()
        for key in csv_data.values():
            writer.writerow(key)

# Main process
csv_file_path = 'C:\\Users\\User\\Documents\\GitHub\\proutectapp\\csv-json-files\\joinedfeedback.csv'
json_file_path1 = 'C:\\Users\\User\\Documents\\GitHub\\proutectapp\\csv-json-files\\joinedfeedback.json'
json_file_path2 = 'C:\\Users\\User\\Documents\\GitHub\\proutectapp\\csv-json-files\\joinedfeedback2.json'  # Path to the new JSON file

# Load existing CSV data
csv_data = load_existing_csv_data(csv_file_path)

# Load and update with the first JSON file
json_data1 = load_json_data(json_file_path1)
update_csv_data(csv_data, json_data1)

# Load and update with the second JSON file (if applicable)
json_data2 = load_json_data(json_file_path2)
update_csv_data(csv_data, json_data2)

# Write the final updated CSV data back to the file
write_csv_data(csv_file_path, csv_data)
