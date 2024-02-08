import HomeScreen from "./screens/HomeScreen.js";
import SignUp from "./screens/SignUp.js";
import MapScreen from "./screens/Map.js";
import FeedbackPage from "./screens/FeedbackPage";
import ResponsePage from "./screens/ReponseScreen.js";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Home"
          component={HomeScreen}
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
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}