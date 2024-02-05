import pandas as pd

crime_data_2022 = pd.read_csv('C:\\Users\\loisp\\Documents\\Year3\\Dissertation\\Proutect\\Proutect\\csv-json-files\\crimes_in_range_2022.csv')

unique_values = set(crime_data_2022['Crime type'])

print(unique_values)

