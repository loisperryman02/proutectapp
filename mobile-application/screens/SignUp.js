import React from 'react';
import { StyleSheet, View, Text, Pressable, TextInput, Image } from 'react-native';

export default function SignUp({ navigation }) {
  const [username, onChangeUserName] = React.useState('');
  const [name, onChangeName] = React.useState('');
  const [email, onChangeEmail] = React.useState('');
  const [password, onChangePassword] = React.useState('');
  const [passwordtwo, onChangePasswordTwo] = React.useState('');
  return (
    <View style={styles.background}>
      <View style={styles.top_container}>
      
      </View>
      <View style={styles.bottom_container}>
        <View style={styles.title_container}>
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
                style={styles.input}
                onChangeText={onChangeEmail}
                value={email}
                placeholder="Email"
                keyboardType="email-address"
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
            onPress={() => navigation.navigate("Home")}>
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
    signup_title: {
        color: "#5EDD9D",
        fontFamily: "Arial",
        fontWeight: "bold",
        fontSize: 45,
        paddingBottom: 10
    }
});