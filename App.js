import react from 'react';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ScaneScreen from './Screens/ScaneScreen';
import {createBottomTabNavigator} from 'react-navigation';
import {createAppContainer} from 'react-navigation';

export default class App extends React.Component {
  render(){
  
  return (
    <AppContainer/>
  );
  }
}

const tabNavigator=createBottomTabNavigator({
  ScaneScreen:{screen:ScaneScreen},
})

const AppContainer=createAppContainer(tabNavigator)