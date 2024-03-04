import React, { useEffect, useState } from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as SplashScreen from 'expo-splash-screen';
import { useFonts } from 'expo-font';


import HomeScreen from './components/HomeScreen';
import ConnectScreen from './components/ConnectScreen';
import CreateScreen from './components/CreateScreen';
import CreateNumberScreen from './components/CreateNumberScreen';
import GameplayScreen from './components/GameplayScreen';
import GameScreen from './components/GameScreen';
import IntroductionScreen from './components/IntroductionScreen';
import RulesScreen from './components/RulesScreen';


const Stack = createNativeStackNavigator();
// Prevent the splash screen from hiding immediately
SplashScreen.preventAutoHideAsync().catch(() => {
  /* hiding splash screen failed */
});

/**
 * APP FUNCTION
 */
export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);
  let [fontsLoaded] = useFonts({
    'Teko': require('./components/fonts/Teko-VariableFont_wght.ttf'),
    'BlackOpsOne': require('./components/fonts/BlackOpsOne-Regular.ttf'),
    'RussoOne': require('./components/fonts/RussoOne-Regular.ttf'),
  });

  useEffect(() => {
    async function prepare() {
      try {
        // Await for other resources to load (e.g., fonts, images)
        // await loadOtherResources();

      } catch (e) {
        console.warn(e);
      } finally {
        // Tell the application to render
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  useEffect(() => {
    if (appIsReady && fontsLoaded) {
      SplashScreen.hideAsync().catch(() => {
        /* hiding splash screen failed */
      });
    }
  }, [appIsReady, fontsLoaded]);

  if (!appIsReady || !fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Connect" component={ConnectScreen} />
        <Stack.Screen name="Create" component={CreateScreen} />
        <Stack.Screen name="CreateNumber" component={CreateNumberScreen} />
        <Stack.Screen name="Rules" component={RulesScreen} />
        <Stack.Screen name="Introduction" component={IntroductionScreen} />
        <Stack.Screen name="Gameplay" component={GameplayScreen} />
        <Stack.Screen name="gameScreen" component={GameScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}




