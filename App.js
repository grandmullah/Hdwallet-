import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as SecureStore from 'expo-secure-store';
import './shim.js'

import Home from './src/screens/Home';
import Intro from './src/screens/introScreens/introSlider.js';
import Account from './src/screens/introScreens/account';


const appStack = createNativeStackNavigator()





export default function App() {
  const [hasLaunched, setLaunchCondition ]  = React.useState(false)

  React.useEffect(()=>{
     getValueFor('mnemonic')
    // console.log(status)
   
  },[])

  const getValueFor = async (key) => {
    let result = await SecureStore.getItemAsync(key);
    console.log(result)
    if (result) {
      setLaunchCondition(result)
    } else {
      setLaunchCondition(false)
    }
  }
  
  

  if(hasLaunched == false) {
    return (
      <NavigationContainer>
        <appStack.Navigator initialRouteName= 'Intro' screenOptions = {{headerShown:false}}>
          <appStack.Screen name= 'Intro' component={Intro} />
          <appStack.Screen name ='account' component={Account}/>
          <appStack.Screen name= 'Home' component={Home} />
        </appStack.Navigator>
      </NavigationContainer>
    ); 
  } else {
    return (
      <NavigationContainer>
        <appStack.Navigator initialRouteName= 'Home' screenOptions = {{headerShown:false}}>
          <appStack.Screen name= 'Home' component={Home} />
        </appStack.Navigator>
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
