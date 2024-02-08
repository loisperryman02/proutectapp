import React from 'react';
import { StyleSheet, View, Text, Pressable, TextInput, Image } from 'react-native';

export default function SignUp({ navigation }) {
  
  return (
    <View style={styles.background}>
      <View style={styles.top_container}>
      
      </View>
      <View style={styles.bottom_container}>
        <View style={styles.title_container}>
          <Text style={styles.signup_title}> Route Feedback</Text>
        </View>

        <View style = {styles.subtitle_container}>
            <Text style={styles.subtitle}>If you have any additional comments or feedback about the route, then write them in the box below.</Text>
        </View>
        
        <View style={styles.input_container}>
           
           <TextInput 
            style = {styles.text_input}
            placeholder='Enter more feedback here.'
            keyboardType='ascii-capable'
            />  
           
        </View>

        <View style={styles.button_container}>
          <Pressable 
            style={styles.button}
            onPress={() => navigation.navigate("Map")}>
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
        height: "40%",
        borderWidth: 2,
        width: "80%",
        padding: "5%"
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
        backgroundColor: '#013B1E'
    },
    background: {
        flex: 1,
        backgroundColor: '#013B1E'
    },
    button_container: {
        width:"100%",
        alignItems:"center",
        justifyContent:"center",
        paddingTop: "3%"
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
        justifyContent:"center",
        paddingBottom: "5%",
        backgroundColor: "blue"
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
        marginTop: "-20%"
    },
    subtitle_container: {
        width: "80%",
        justifyContent: "center",
        marginLeft: "5%"
    },
    signup_title: {
        color: "#5EDD9D",
        fontFamily: "Arial",
        fontWeight: "bold",
        fontSize: 45
    }, 
    subtitle: {
        color: "#013B1E",
        fontFamily: "Arial",
        fontWeight: "bold",
        fontSize: 15,
        textAlign: "center"
    }
});