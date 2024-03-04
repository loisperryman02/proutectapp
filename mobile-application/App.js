import Login from "./screens/Login.js";
import SignUp from "./screens/SignUp.js";
import MapScreen from "./screens/Map.js";
import FeedbackPage from "./screens/FeedbackPage";
import ResponsePage from "./screens/ReponseScreen.js";
import HomePage from "./screens/HomeScreen.js";
import Friends from "./screens/Friends.js";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Login"
          component={Login}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUp}
        />
        <Stack.Screen
          name="Map"
          component={MapScreen}
        />

        <Stack.Screen
          name="FeedbackPage"
          component={FeedbackPage}
        />

        <Stack.Screen
          name="ResponsePage"
          component={ResponsePage}
        />

        <Stack.Screen
          name="Home"
          component={HomePage}
        />

        <Stack.Screen
          name="Friends"
          component={Friends}
        />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}