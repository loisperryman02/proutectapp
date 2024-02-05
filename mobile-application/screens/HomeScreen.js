import * as React from 'react';
import { StyleSheet, View, Text, Pressable, TextInput, Image } from 'react-native';

export default function HomeScreen({ navigation }) {
  const [email, onChangeEmail] = React.useState('');
  const [password, onChangePassword] = React.useState('');
  return (
    <View style={styles.background}>
      <View style={styles.top_container}>
        <View style={styles.image_container}>
          <Image style={styles.image} resizeMode="contain" source={require('../assets/Protrekt.png')}/>
        </View>
      </View>
      <View style={styles.bottom_container}>
        <View style={styles.title_container}>
          <Text style={styles.login_title}> Login </Text>
          <Text style={styles.login_subtitle}> Sign in to start your journey. </Text>
        </View>
        <View style={styles.input_container}>
          <TextInput
            style={styles.input}
            onChangeText={onChangeEmail}
            value={email}
            placeholder="Username"
          />
          <TextInput
            secureTextEntry={true}
            style={styles.input}
            onChangeText={onChangePassword}
            value={password}
            placeholder="Password"
          />
        </View>
        <View style={styles.button_container}>
          <Pressable style={styles.button}
          onPress={() => navigation.navigate("Map")} >
            <Text style={styles.buttonText}> Login </Text>
          </Pressable>
        </View>
        <View style={styles.links_container}>
          <Text style={styles.login_subtitle}> Forgot password? </Text>
          <Pressable
          onPress={() => navigation.navigate("SignUp")}> 
            <Text style={styles.login_subtitle}>
              Register now! 
            </Text>
          </Pressable>
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
    flex: 0.60
  },
  top_container: {
    flex: 0.40,
    backgroundColor: '#013B1E'
  },
  image_container: {
    borderRadius: 20,
    width: "50%",
    aspectRatio: 1/1,
    marginTop: "15%",
    marginLeft: "25%",
    backgroundColor: "#fff",
    padding: 6
  },
  image: {
    width: "100%",
    height: "100%"
  },
  background: {
    flex: 1,
    backgroundColor: '#013B1E'
  },
  login_title: {
    color: "#5EDD9D",
    fontFamily: "Arial",
    fontWeight: "bold",
    fontSize: 45,
    paddingBottom: 10
  },
  login_subtitle: {
    color: "#8F8E8E",
    fontFamily: "Arial",
    fontSize: 15,
    paddingBottom: 10
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
  input: {
    height: 40,
    margin: 12,
    borderColor: "#5EDD9D38",
    padding: 10,
    width: "60%",
    borderRadius: 10,
    backgroundColor: "#5EDD9D60"
  }, 
  title_container: {
    width:"100%",
    alignItems:"center",
    justifyContent:"center",
    paddingBottom: "3%"
  },
  input_container: {
    width:"100%",
    alignItems:"center",
    justifyContent:"center"
  },
  button_container: {
    width:"100%",
    alignItems:"center",
    justifyContent:"center",
    paddingTop: "3%"
  },
  links_container: {
    width:"100%",
    alignItems:"center",
    justifyContent:"center",
    marginTop: "10%"
  }
});