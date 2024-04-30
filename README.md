# proutectapp

This project presents a mobile application "Proutect" which returns the safest walking route to a destination in Leamington Spa. React Native has been used to build the user interface, NodeJS has been used to code the API and backend server, and MongoDB Atlas has been used for Database System. Python and JavaScript have been used to code algorithms and data structures used within the application and for data analysis. 

# Code Structure 

# mobile-application folder
Contains the main components needed to run the mobile application, including the user interface, the backend components, external services and data structures.

# screens folder
Stores each page of this application coded in React Native.
Contains the __tests__ folder which has all unit tests written for this component.

# python-files folder
Contains files that have been used for machine learning, data analysis and creating the datasets. These files are not needed to directly run the application, but instead have been used throughout development to improve the accuracy of the mobile application and data analysis. 

# node_modules folder
Automatically created folder which stores all Node Package Manager (npm) creates when npm packages are installed. All packages needed to run this project are stored in this directory. 
 
# data-structures folder
Contains the code for KD trees and A* search algorithm, both required to run the application. 

# backend-server folder
Contains all folders and files required to run the backend system of the code, including the API. 

# api folder
Contains the api.js file, containing all API endpoints and their corresponding functions to handle data.

# config folder 
Contains the db.js file, required to connect to MongoDB Atlas.

# models 
Contains the collections, similar to schemas, for MongoDB Atlas.
Contains the __tests__ folder which has all unit tests for the database collections.

# services
Contains JavaScript files that handle Join queries for MongoDB collections. These are not required to run the application but were used when creating the dataset. 

# Instructions to run the application on your local. 

# Prerequisites

1. MongoDB Atlas

The database MongoDB Atlas is deployed and managed on the cloud. Therefore, a MongoDB Atlas account is required to set up the database system initially. An account can be registered by following this link https://www.mongodb.com/cloud/atlas/register. Once creating a database, a unique link must be assigned to the MONGODB_URI file in:
..\\proutectapp\\mobile-application\\backend-server\\.env
This will then update the URI where it is used. 

Next, you must ensure that your IP address has permission to be connected to your database. This can be managed through your personal account. Then, your IP address must be assigned to the const variable in these files:
- FeedbackPage.js
- Friends.js
- Login.js
- PostUpdate.js
- ResponseScreen.js
- SignUp.js
- Updates.js

And test files:
- Updates.test.js
- ResponseScreen.test.js

Now, the database should be set up. Note that your IP address may change and you have to regularly update this in your database permissions.

2. Google Maps API Key

To generate the routes for this project, you must have a unique Google Maps API Key. This can be set up using this link https://developers.google.com/maps. Once you have created a project and generated a unique API key, you must update the variable GOOGLE_MAPS_API key in the Maps.js file. 

3. Running the App

- If you have a MacBook and have Xcode installed, then you can run the application using this command: npx react-native run-ios
- If you do not have a MacBook then you must install Android simulator and run the command: npx react-native run-android
- If you want to run the application directly from an iOS device, then you must install the Expo Go app on your iOS device and run the command: npx expo start

4. Install the packages

There are two package.json files that must be used to install dependencies. 
1. "..\\proutectapp\\mobile-application\\package.json"
2. "..\\proutectapp\\package.json"

Run the command "npm install" in these directories then all packages should be installed to run the application.

# Instructions to run the application. 

1. Install the software needed to run the mobile app. 
2. Install all dependencies. 
3. Set up Google Maps API key and MongoDB as instructed.
4. Run the relevant command and the mobile app.