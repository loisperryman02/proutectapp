import Login from "./screens/Login.js";
import SignUp from "./screens/SignUp.js";
import MapScreen from "./screens/Map.js";
import FeedbackPage from "./screens/FeedbackPage";
import ResponsePage from "./screens/ReponseScreen.js";
import HomePage from "./screens/HomeScreen.js";
import Friends from "./screens/Friends.js";
import PostUpdate from "./screens/PostUpdate.js";
import Updates from "./screens/Updates.js";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

/**
 * This page is essential to enable navigation throughout the application. 
 * The Stack Navigator enables new screens to be pushed onto the stack, and when users navigate to another screen
 * it is pushed onto the stack, and when users return to a previous screen the current screen is popped off of the stack.
 */
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

        <Stack.Screen
          name="PostUpdate"
          component={PostUpdate}
        />

        <Stack.Screen
          name="Updates"
          component={Updates}
        />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}