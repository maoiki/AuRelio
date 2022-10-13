import { useFonts, Inter_400Regular, Inter_500Medium } from '@expo-google-fonts/inter';
import * as SplashScreen from 'expo-splash-screen';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { theme } from './src/theme/theme'

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
        <Stack.Navigator initialRouteName="HomeScreen" screenOptions={{ headerStyle: { backgroundColor: theme.colors.background } }}>

          <Stack.Screen 
            name="HomeScreen" 
            component={HomeScreen}
            options={{headerShown: false}} />

          <Stack.Screen 
            name="DogDetails" 
            component={DogDetails}
            options={{
              headerShown: true,
              title: 'Details',
              }}/>

        </Stack.Navigator>
    </NavigationContainer>  );
}

