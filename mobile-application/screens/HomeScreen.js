// import * as React from 'react';
// import { StyleSheet, View, Text, Pressable, TextInput, Image, KeyboardAvoidingView } from 'react-native';

// export default function HomeScreen({ navigation }) {
//   const [email, onChangeEmail] = React.useState('');
//   const [password, onChangePassword] = React.useState('');
//   const [inputPressed, onInputPressed] = React.useState(false);
//   return (
//     <View style={styles.background}>
//       <View style={styles.top_container}>
//         <View style={[ !inputPressed ? styles.image_container : styles.image_container_after]}>
//           <Image style={styles.image} resizeMode="contain" source={require('../assets/Protrekt.png')}/>
//         </View>
//       </View>

      
//       <KeyboardAvoidingView 
//         behavior={Platform.OS === "ios" ? "padding" : "height"} 
//         style={styles.bottom_container}>
        
//           <View style={styles.title_container}>
//             <Text style={styles.login_title}> Login </Text>
//             <Text style={styles.login_subtitle}> Sign in to start your journey. </Text>
            
//           </View>
        
//         <View style={styles.input_container}>
 
//           <TextInput
//             style={styles.input}
//             onChangeText={onChangeEmail}
//             value={email}
//             placeholder="Username"
//             onFocus={() => onInputPressed(!inputPressed)}
//           /> 
  
//           <TextInput
//             secureTextEntry={true}
//             style={styles.input}
//             onChangeText={onChangePassword}
//             value={password}
//             placeholder="Password"
//             onFocus={() => onInputPressed(!inputPressed)}
//           />
//         </View>
//         <View style={styles.button_container}>
//           <Pressable style={styles.button}
//           onPress={() => navigation.navigate("Map")} >
//             <Text style={styles.buttonText}> Login </Text>
//           </Pressable>
//         </View>
//         <View style={styles.links_container}>
//           <Text style={styles.login_subtitle}> Forgot password? </Text>
//           <Pressable
//           onPress={() => navigation.navigate("SignUp")}> 
//             <Text style={styles.login_subtitle}>
//               Register now! 
//             </Text>
//           </Pressable>
//         </View>
//       </KeyboardAvoidingView>
//     </View>
//   );
// }

import React, { useState, useEffect } from 'react';
import {
  StyleSheet, View, Text, Pressable, TextInput, Image, Keyboard,
} from 'react-native';

export default function HomeScreen({ navigation }) {
  const [email, onChangeEmail] = useState('');
  const [password, onChangePassword] = useState('');
  const [keyboardVisible, setKeyboardVisible] = useState(false);

  useEffect(() => {
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
      {/* Conditionally render the top container based on keyboard visibility */}
      
      <View style={!keyboardVisible ? styles.top_container : styles.top_container_smaller }>
        {!keyboardVisible && (
          <View style={styles.image_container}>

            <Image style={styles.image} resizeMode="contain" source={require('../assets/Protrekt.png')} />
          </View>
           )}
        </View>
     

      {/* Adjust the bottom container's flex based on keyboard visibility */}
      <View style={!keyboardVisible ? styles.bottom_container : styles.bottom_container_expanded }>
        <View style={!keyboardVisible ? styles.title_container : styles.title_container_expand }>
          <Text style={styles.login_title}>Login</Text>
          <Text style={styles.login_subtitle}>Sign in to start your journey.</Text>
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
          <Pressable style={styles.button} onPress={() => navigation.navigate("Map")}>
            <Text style={styles.buttonText}>Login</Text>
          </Pressable>
        </View>
        <View style={styles.links_container}>
          <Text style={styles.login_subtitle}>Forgot password?</Text>
          <Pressable onPress={() => navigation.navigate("SignUp")}>
            <Text style={styles.login_subtitle}>
              Register now!
            </Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}

// const styles = StyleSheet.create({
//   // Existing styles...
//   bottom_container_expanded: {
//     flex: 0.70, // Increase the height of the bottom container
//   },
//   // Add your existing styles here
// });



const styles = StyleSheet.create({
  bottom_container_expanded: {
    borderTopRightRadius: 100,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 0.8
  },
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
  top_container_smaller: {
    flex: 0.2,
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
  image_container_after: {
    borderRadius: 20,
    width: "50%",
    aspectRatio: 1/1,
    marginTop: "0%",
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
    paddingBottom: "3%",
  },
  title_container_expand: {
    width:"100%",
    alignItems:"center",
    justifyContent:"center",
    paddingBottom: "3%",
    marginTop: "-55%"
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