import React from 'react';
import { StyleSheet, View, Text, Pressable, TextInput, Keyboard, TouchableWithoutFeedback } from 'react-native';
import axios from 'axios';

/**
 * This page enables a user to post an update so it can be viewed by their friends.
 * Navigation parameter is needed to navigate to other pages and the route parameter is needed to store user details.
 */
export default function PostUpdate({ navigation, route }) {
    
    let [update, setUpdate] = React.useState(''); 
    
    const today = new Date();
    const formattedDate = today.toISOString().substring(0, 10);

    // This function handles sending the update posted by the user to the database via the API endpoint.
    const postUpdate = () => {
        const url = "http://172.25.63.205:3000/updates";

        const today = new Date();
        const formattedDate = today.toISOString().substring(0, 10);

        const update_info = {
          username: route.params, 
          date: formattedDate,
          update: update 
        };

        axios
          .post(url, update_info)
          .then((response) => {
              const result = response.data;
              const {status, data} = result;
              
              if (status !== "SUCCESS") {
                // set some error message...
                console.log("Unsuccessful!");
              } else {
                // not sure if we need to pass data.
                console.log("Success");
              }
            })
          .catch(error => {
            console.log("There is an error.");
            console.log(error);
        })
      }

    // Keyboard is hidden when user touches any other part of the screen.
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
            <Text style={styles.signup_title}> Post Update </Text>
          </View>
        </DismissKeyboardView>

        <DismissKeyboardView>
          <View style = {styles.subtitle_container}>
              <Text style={styles.subtitle}> Update your friends and let them know you are safe! </Text>
          </View>
        </DismissKeyboardView>
        
        <View style={styles.input_container}>
           <TextInput 
            style = {styles.text_input}
            placeholder='Type your update here...'
            keyboardType='ascii-capable'
            multiline
            onChangeText={newText => setUpdate(newText) }
            />  
        </View>

        <View style={styles.button_container}>
          <Pressable 
            style={styles.button}
            onPress={postUpdate}>
            <Text style={styles.buttonText}>Post</Text>
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