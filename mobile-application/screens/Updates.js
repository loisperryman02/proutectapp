import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, FlatList, Pressable, TextInput, Image, Keyboard } from 'react-native';
import axios from "axios";

export default function Updates({ navigation, route }) {

    const [updates, setUpdates] = useState([]);
    const username = route.params;

    useEffect(() => {
        const fetchUpdates = async () => {
            
            const response = await axios.get(`http://10.0.0.142:3000/updates/${username}`);
            setUpdates(response.data.updates);
            if (!response) {
                console.log("User does not have any requests!");
            }
            
        };
        fetchUpdates();
    }, []); // Depend on currentUserUsername to re-fetch when it changes
  

    return (
        <View style={styles.background}>

        <View style={styles.top_container}>
            <View style={styles.title_container}>
            <Text style={styles.title_text}>
                Updates
            </Text>
            </View>
        </View>

        <View style={styles.bottom_container}>
          
     
            <FlatList
                data={updates}
                keyExtractor={item => item._id.toString()}
                renderItem={({ item }) => (
                  <View style={styles.update_container}>
                        <Text style={styles.updateText}> Update: {item.update}</Text>
                        <Text style={styles.updateText}> By: {item.username}</Text>
                        <Text style={styles.updateText}> Date: {new Date(item.date).toLocaleDateString()}</Text>
                  </View>
                )}
            />

               
       
        </View>
    
        </View>
    );
}


const styles = StyleSheet.create({
  top_container: {
    height: "15%",
    backgroundColor: 'white'
  },
  bottom_container: {
    height: "85%",
    flexDirection: "column",
    backgroundColor: '#013B1E',
    alignItems: "center",
    width: "100%"
  },
  update_container: {
    height: "20%",
    backgroundColor: "white",
    width: "80%",
    margin: "2.5%",
    borderRadius: "10%",
    paddingTop: "13%",
    marginTop: "5%"
  },
  navigation: {
    height: "20%",
    backgroundColor: "#5EDD9D",
    width: "80%",
    margin: "2.5%",
    borderRadius: "10%",
    paddingTop: "13%",
    marginTop: "5%"
  },
  button_text: {
    color: "white",
    fontFamily: "Arial",
    fontWeight: "bold",
    fontSize: 25,
    textAlign: "center"
  },
  title_text: {
    color: "#013B1E",
    fontFamily: "Arial",
    fontWeight: "bold",
    fontSize: 40,
    textAlign: "center",
    paddingTop: "10%"
  },
  update_container: {
    height: 100,
    backgroundColor: "white",
    width: 300,
    marginTop: "15%",
    borderRadius: "20px",
    paddingLeft: "10%",
    paddingTop: "5%"
  },
  updateText: {
    width: "100%",
    flexWrap: "wrap",
    color: "#013B1E",
    fontFamily: "Arial",
    fontWeight: "bold",
    fontSize: 15,
    padding: "1%"
  }
});