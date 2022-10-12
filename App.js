import { useFonts, Inter_400Regular, Inter_500Medium } from '@expo-google-fonts/inter';
import * as SplashScreen from 'expo-splash-screen';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "./screens/HomeScreen";
import DogDetails from "./screens/DogDetails";



export default function App() {

  const Stack = createStackNavigator();

  SplashScreen.preventAutoHideAsync();
  
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
  });

  if (!fontsLoaded) {
    return null;
  }

  SplashScreen.hideAsync();
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="HomeScreen">

          <Stack.Screen 
            name="HomeScreen" 
            component={HomeScreen}
            options={{headerShown: false}} />

          <Stack.Screen 
            name="Detalhes" 
            component={DogDetails}
            options={{headerShown: true}}/>

        </Stack.Navigator>
    </NavigationContainer>  );
}

