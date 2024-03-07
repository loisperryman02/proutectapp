import React from 'react';
import { StyleSheet, View, Text, Pressable, TextInput, Keyboard, TouchableWithoutFeedback } from 'react-native';
import axios from 'axios';

export default function ResponsePage({ navigation, route }) {
    
    let [tempInput, setTempInput] = React.useState(''); 

    // note: IP address changes. 
    const handleFeedback = () => {
        const url = "http://172.25.11.245:3000/response";
        console.log("trying server.");
        const responseInfo = {
          coordinates: route.params.coordinates, // Spreads the coordinates and date
          date: route.params.date,
          response: tempInput // adds the reponse from text input.
        };
        axios
          .post(url, responseInfo)
          .then((response) => {
              const result = response.data;
              const {status, data} = result;
              if (status !== "SUCCESS") {
                // set some error message...
                console.log("Unsuccessful!");
              } else {
                // not sure if we need to pass data.
                navigation.navigate("Map");
              }
            })
          .catch(error => {
            console.log("There is an error1");
          console.log(error);
        })
      }

    const DismissKeyboardView = ({ children }) => (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            {children}
        </TouchableWithoutFeedback>
    );

  return (
   
    <View style={styles.background}>
      <View style={styles.top_container}>
      </View>

      
      <View style={styles.bottom_container}>
        <DismissKeyboardView>
          <View style={styles.title_container}>
            <Text style={styles.signup_title}> Route Feedback</Text>
          </View>
        </DismissKeyboardView>

        <DismissKeyboardView>
          <View style = {styles.subtitle_container}>
              <Text style={styles.subtitle}>If you have any additional comments or feedback about the route, then write them in the box below.</Text>
          </View>
        </DismissKeyboardView>

        
        <View style={styles.input_container}>
           <TextInput 
            style = {styles.text_input}
            placeholder='Enter more feedback here...'
            keyboardType='ascii-capable'
            multiline
            onChangeText={newText => setTempInput(newText) }
            />  
        </View>

        <View style={styles.button_container}>
          <Pressable 
            style={styles.button}
            onPress={handleFeedback}>
            <Text style={styles.buttonText}>Return to Map</Text>
          </Pressable>
        </View>
        <View style={styles.links_container}>
          
        </View>
      </View>
    </View>
    
  );
}

const styles = StyleSheet.create({
    text_input: {
        height: "100%",
        width: "100%",
        padding: "5%",
        marginTop: "10%"
    },
    bottom_container: {
        borderTopRightRadius: 100,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 0.9
    },
    top_container: {
        flex: 0.1,
        backgroundColor: '#013B1E',
        flexDirection: "column"
    },
    background: {
        flex: 1,
        backgroundColor: '#013B1E'
    },
    button_container: {
        width:"100%",
        alignItems:"center",
        justifyContent:"center",
        paddingTop: "3%",
        flex: 0.2
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
        width:"80%",
        height: "40%",
        alignItems:"center",
        justifyContent:"center",
        paddingBottom: "5%",
        borderWidth: 2,
        borderRadius: "20%",
        flex: 0.5
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
        flex: 0.15
    },
    subtitle_container: {
        width: "90%",
        justifyContent: "center",
        flex: 0.15
    },
    signup_title: {
        color: "#5EDD9D",
        fontFamily: "Arial",
        fontWeight: "bold",
        fontSize: 45,
        marginTop: "5%"
    }, 
    subtitle: {
        color: "#013B1E",
        fontFamily: "Arial",
        fontWeight: "bold",
        fontSize: 17,
        textAlign: "center",
        marginTop: "-10%"
    }
});