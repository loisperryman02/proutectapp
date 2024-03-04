import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Pressable, TextInput, Image, Keyboard } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import axios from "axios";

export default function Friends({ navigation, route }) {

    const [request, setRequest] = useState('');

    const sendFriendRequest = () => {
        const url = "http://192.168.4.15:3000/friend";

        // Sets details of the username that is being requested. 
        const request_user = {
            username: route.params,
            friend_username: request
        }

        console.log(request_user);

        axios
            .post(url, request_user)
            .then((response) => {
              const result = response.data;
            //   handleHomeNavigation(details); 
              
            })
            .catch(error => {
              
              if (error.response) {
                // The request was made and the server responded with a status code
                // that falls out of the range of 2xx
                console.log(error.response.data);
                console.log(error.response.status);
                console.log(error.response.headers);
                console.log("there is an error!!");
              } else if (error.request) {
                // The request was made but no response was received
                console.log(error.request);
                console.log("there is an error!!");
              } else {
                // Something happened in setting up the request that triggered an Error
                console.log('Error', error.message);
              }
          })
      }

  return (
    <View style={styles.background}>

      <View style={styles.top_container}>
        <View style={styles.title_container}>
          <Text style={styles.title_text}>
             Friends
          </Text>
        </View>
      </View>

      <View style={styles.bottom_container}>
        <View style={styles.search_friends_container}>
            <View style={styles.request_title}> 
                <Text style={styles.button_text}>
                    Add friends:
                </Text>
            </View>
            <View style = {styles.searchBarContainer}> 
            <Icon style={styles.searchIcon} name="search" />
                <TextInput 
                    style = {styles.searchInput}
                    placeholder='Search for a user'
                    value={request}
                    onChangeText={setRequest}>
                </TextInput>
            </View>
            <Pressable style={styles.button} onPress={sendFriendRequest}>
                <Text style={styles.buttonText}> Send friend request </Text>
            </Pressable>
        </View>

        <View style={styles.requests_container}>
          <View style={styles.request_title}>          
            <Text style={styles.button_text}>
                Current requests:
            </Text>
          </View>
        </View>
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
    alignItems: "center"
  },
  requests_container: {
    height: "40%",
    backgroundColor: "white",
    width: "80%",
    margin: "2.5%",
    borderRadius: "10%",
    paddingTop: "13%",
    marginTop: "5%",
    alignItems: "center"
  },
  button_text: {
    color: "#013B1E",
    fontFamily: "Arial",
    fontWeight: "bold",
    fontSize: 20,
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
  request_title: {
    borderBottomColor: "#013B1E",
    borderBottomWidth: 2,
    width: "60%",
    paddingBottom: "2.5%",
    marginTop: "-10%"
  },
  searchBarContainer: {
    height: '25%',
    backgroundColor: '#E2E4F1',
    borderRadius: '70%',
    width: '70%',
    alignItems: 'left',
    flexDirection: 'row',
    paddingHorizontal: 10,
    marginTop: "8%"
  },
  searchInput : {
    fontSize: 20,
    marginTop: 7,
    paddingLeft: 10,
    color: "#013B1E",
    opacity: 0.8,
    fontFamily: "Arial"
  },
  searchIcon: {
    fontSize: 23,
    marginTop: 7,
    color: "#013B1E",
    opacity: 0.8,
    fontFamily: "Arial"
  },
  search_friends_container: {
    height: "30%",
    backgroundColor: "white",
    width: "80%",
    margin: "2.5%",
    borderRadius: "10%",
    paddingTop: "13%",
    marginTop: "5%",
    alignItems: "center"
  },
  button: {
    alignItems: "center",
    backgroundColor: "#013B1E",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    width: "60%",
    height: 40,
    marginTop: "7%"
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold"
  }
});