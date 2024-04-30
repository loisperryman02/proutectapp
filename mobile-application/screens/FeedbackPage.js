import * as React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import axios from 'axios';

/**
 * This screen is displayed after a user finishes their journey. It prompts the user to enter ratings about 
 * different safety aspects on the journey. 
 */
export default function FeedbackPage({ navigation, route }) {
  
  const today = new Date().toISOString();
  IP_ADDRESS = "172.25.63.205:3000";

  const [additionalInfo, setAdditionalInfo] = React.useState({
    coordinates: JSON.stringify(route.params), 
    date: today 
  });

  // Function that sends ratings to correct API endpoint.
  const handleFeedback = () => {
    const url = `http://${IP_ADDRESS}/feedback"`

    const feedbackInfo = {
      ...additionalInfo,
      ...ratings, 
    };
    axios
      .post(url, feedbackInfo)
      .then((response) => {
          const result = response.data;
          const {status, data} = result;
          if (status !== "SUCCESS") {
            console.log("Unsuccessful!");
          } else {
            navigation.navigate("ResponsePage", additionalInfo);
          }
        })
      .catch(error => {
        console.log("There is an error");
        console.log(error);
    })
  }

  const [ratings, setRatings] = React.useState({
    q1: 0,
    q2: 0, 
    q3: 0, 
    q4: 0, 
  });

  const questionsText = [
    "1. How safe did you feel on the route?",
    "2. How well-lit was the route?",
    "3. How exposed was the route to the public?",
    "4. How accessible were emergency services?"
  ];

  const questionLabels = {
    q1: { 1: 'Extremely unsafe', 5: 'Extremely safe' },
    q2: { 1: 'No street lights', 5: 'Many street lights' },
    q3: { 1: 'Extremely isolated', 5: 'Extremely crowded' },
    q4: { 1: 'Not accessible', 5: 'Very accessible' }
  };

  const updateRating = (questionKey, rating) => {
    setRatings(prevRatings => ({ ...prevRatings, [questionKey]: rating }));
  };

  // Function to render the rating button correctly and ensure that it responds correctly to user interaction.
  const renderRatingButton = (questionKey, rating) => {
    const isHighlighted = rating <= ratings[questionKey];
    const originalViewStyle = isHighlighted ? styles.clicked_container: styles.number_container;
    const originalTextStyle = isHighlighted ?  styles.clicked_text : styles.ranking_text;

    const labels = questionLabels[questionKey]|| {};
    const labelText = labels[rating] || "";

    return (
      <View key={`${questionKey}-${rating}`} style={styles.ratingButtonContainer} > 
      <TouchableOpacity
        key={`${questionKey}-${rating}`} 
        onPress={() => updateRating(questionKey, rating)}
        style={originalViewStyle}>
        <Text style={originalTextStyle}>{rating}</Text>
      </TouchableOpacity>
        {labelText && <Text style={styles.labelText}>{labelText}</Text>}
      </View>
    );
  };
  
  return (

    <View style={styles.background}>
    <View style={styles.top_container}>
    
    </View>
    <View style={styles.bottom_container}>
      <View style={styles.title_container}>
        <Text style={styles.signup_title}> Route Feedback </Text>
      </View>
      
      <View style={styles.input_container}>

        {questionsText.map((text, index) => (
          <View key = {`q${index+1}`} 
                style={styles.question_container}> 
                <Text style = {styles.question_text} > {text} </Text>
                <View style = {styles.ranking_container}>
                {[1, 2, 3, 4, 5].map(rating => renderRatingButton(`q${index+1}`, rating))}                                 
                </View>   
          </View>
        ))}
      
    </View>

    <View style={styles.button_container}>
          <TouchableOpacity 
              onPress={() => 
                handleFeedback(ratings)
              }
              style={styles.button}
              >
            <Text style={styles.buttonText}>Next</Text>
          </TouchableOpacity>
        </View>
  </View>

  </View>
   
  );
}

const styles = StyleSheet.create({
  bottom_container: {
    borderTopRightRadius: 100,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 0.9
},
top_container: {
    flex: 0.1,
    backgroundColor: '#013B1E'
},
background: {
    flex: 1,
    backgroundColor: '#013B1E'
},
button_container: {
    width:"100%",
    alignItems:"center",
    justifyContent:"center"
},
button: {
    alignItems: "center",
    backgroundColor: "#013B1E",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    width: "60%",
    height: 40
},
buttonText: {
    color: "#fff",
    fontWeight: "bold"
},
input_container: {
    width:"100%",
    alignItems:"center",
    justifyContent:"space-evenly",
    paddingBottom: "5%"
},
input: {
    height: 40,
    margin: 12,
    borderColor: "#5EDD9D38",
    padding: 10,
    width: "60%",
    borderRadius: 10,
    backgroundColor: "#5EDD9D60",
    marginBottom: "5%"
}, 
title_container: {
    width:"100%",
    alignItems:"center",
    justifyContent:"center",
    marginBottom: "5%",
    marginTop: "-12%",
    paddingTop: "10%"
},
signup_title: {
    color: "#5EDD9D",
    fontFamily: "Arial",
    fontWeight: "bold",
    fontSize: 45,
    paddingBottom: 10
},
number_container: {
  width: 30, 
  height: 30,
  borderWidth: 2,
  borderColor: '#013B1E',
  borderRadius: '50%',
  alignItems: "center",
  paddingTop: "7%"
},
clicked_container: {
  width: 30, 
  height: 30,
  borderWidth: 2,
  borderColor: '#013B1E',
  backgroundColor: '#013B1E',
  borderRadius: '50%',
  alignItems: "center",
  paddingTop: "7%"
},
question_container: {
  width: '100%',
  height: "15%",
  alignItems: "center",
  marginBottom: "5%"
},
question_text: {
  fontSize: 20,
  color: '#013B1E'
},
clicked_text: {
  color: "white"
},
ranking_container: {
  width: '100%',
  justifyContent: 'space-evenly',
  flexDirection: 'row',
  marginTop: 10
},
ratingButtonContainer: {
  height: "auto",
  width: "15%",
  alignItems: "center",
  textAlign: "center"
},
labelText: {
  fontSize: 13,
  textAlign: "center"
}
});