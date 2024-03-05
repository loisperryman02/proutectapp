import React from 'react';
import { StyleSheet, View, Text, Pressable, TextInput, Keyboard } from 'react-native';
import axios from "axios";

export default function SignUp({ navigation }) {
  const [username, onChangeUserName] = React.useState('');
  const [name, onChangeName] = React.useState('');
  const [password, onChangePassword] = React.useState('');
  const [passwordtwo, onChangePasswordTwo] = React.useState('');
  const [keyboardVisible, setKeyboardVisible] = React.useState(false);

  const handleSignUp = () => {
    const url = "http://10.0.0.142:3000/signup";
    let userDetails = {
      name : name,
      username: username,
      password: password
    };

    console.log("user details:");
    console.log(userDetails);
    
    axios
        .post(url, userDetails)
        .then((response) => {
            navigation.navigate("Login");
        })
        .catch(error => {
            if (error.response) {
                // The request was made and the server responded with a status code
                // that falls out of the range of 2xx
                console.log(error.response.data);
                console.log(error.response.status);
                console.log(error.response.headers);
              } else if (error.request) {
                // The request was made but no response was received
                console.log(error.request);
              } else {
                // Something happened in setting up the request that triggered an Error
                console.log('Error', error.message);
              }
      })
  }

  React.useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', () => {
      setKeyboardVisible(true); // Keyboard is visible
    });
    const keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', () => {
      setKeyboardVisible(false); // Keyboard is hidden
    });

    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);

  
  return (
    <View style={styles.background}>

       <View style={!keyboardVisible ? styles.top_container : styles.top_container_sml }>
      
      </View>
      <View style={!keyboardVisible ? styles.bottom_container : styles.bottom_container_exp }>
      <View style={!keyboardVisible ? styles.title_container : styles.title_container_exp }>
          <Text style={styles.signup_title}> Sign up </Text>
        </View>
        
        <View style={styles.input_container}>
            <TextInput
                style={styles.input}
                onChangeText={onChangeName}
                value={name}
                placeholder="Name"
                keyboardType="ascii-capable"
            />
            <TextInput
                style={styles.input}
                onChangeText={onChangeUserName}
                value={username}
                placeholder="Username"
                keyboardType="ascii-capable"
            />
            <TextInput
                secureTextEntry={true}
                style={styles.input}
                onChangeText={onChangePassword}
                value={password}
                placeholder="Password"
                keyboardType="ascii-capable"
            />
            <TextInput
                secureTextEntry={true}
                style={styles.input}
                onChangeText={onChangePasswordTwo}
                value={passwordtwo}
                placeholder="Confirm Password"
                keyboardType="ascii-capable"
            />
        </View>
        <View style={styles.button_container}>
          <Pressable 
            style={styles.button}
            onPress={handleSignUp}>
            <Text style={styles.buttonText}>Register</Text>
          </Pressable>
        </View>
        <View style={styles.links_container}>
          
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
    bottom_container_exp: {
        borderTopRightRadius: 100,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 0.95
    },
    top_container: {
        flex: 0.1,
        backgroundColor: '#013B1E'
    },
    top_container_sml: {
        flex: 0.05,
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
        marginTop: "-20%"
    },
    title_container_exp: {
        width:"100%",
        alignItems:"center",
        justifyContent:"center",
        marginBottom: "5%",
        marginTop: "-55%"
    },
    signup_title: {
        color: "#5EDD9D",
        fontFamily: "Arial",
        fontWeight: "bold",
        fontSize: 45,
        paddingBottom: 10
    }
});