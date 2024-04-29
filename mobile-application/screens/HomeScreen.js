import React from 'react';
import { StyleSheet, View, Text, Pressable } from 'react-native';

/**
 * This displays the home page after a user logs in.
 * The navigation parameter is required to navigate between pages and the route parameter
 * holds the username to be displayed on the home screen.
 */
export default function HomeScreen({ navigation, route }) {

  const username = route.params.username;

  return (
    <View style={styles.background}>

      <View style={styles.top_container}>
        <View style={styles.title_container}>
          <Text style={styles.title_text}>
             Welcome {username}
          </Text>
        </View>
      </View>

      <View style={styles.bottom_container}>

        <Pressable style={styles.navigation} onPress={() => navigation.navigate("Map")}>
          <Text style={styles.button_text}>
            Go to maps
          </Text>
        </Pressable>

        <Pressable style={styles.navigation} onPress={() => navigation.navigate("PostUpdate", username)}>
          <Text style={styles.button_text}>
            Post an update
          </Text>
        </Pressable>

        <Pressable style={styles.navigation} onPress={() => navigation.navigate("Updates", username)}>
          <Text style={styles.button_text}>
            View updates
          </Text>
        </Pressable>

        <Pressable style={styles.navigation} onPress={() => navigation.navigate("Friends", username)} >
          <Text style={styles.button_text}>
            Add friends
          </Text>
        </Pressable>

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
  }
});