import { NavigationContainer, StackActions } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Intro from './screens/intro';
import Home from './screens/home';
import Candle from './screens/candle';


import {useFonts, Jost_500Medium, Jost_500Medium_Italic} from "@expo-google-fonts/jost";
import AppLoading from 'expo-app-loading';

import { LogBox } from 'react-native';
LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs();//Ignore all log notifications

const Stack = createNativeStackNavigator();

export default function App() {

  let [fontsLoaded] = useFonts({
    Jost_500Medium,
    Jost_500Medium_Italic
  });

  if (!fontsLoaded) {
    return <AppLoading/>
  } else {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Home'>
          <Stack.Screen
            name='Home'
            component={Home}
            options={{title: 'Home'}}
          />
          <Stack.Screen
            name='Candle'
            component={Candle}
            options={{title: 'Candle'}}
          />
          <Stack.Screen
            name='Intro'
            component={Intro}
            options={{title: 'Introduction'}}
          />

        </Stack.Navigator>
      </NavigationContainer>
    );
  }
 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
