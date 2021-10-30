import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import './shim.js'
import Home from './src/screens/Home';
const appStack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <appStack.Navigator initialRouteName= 'Home' screenOptions = {{headerShown:false}}>
        <appStack.Screen name= 'Home' component={Home} />
      </appStack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
