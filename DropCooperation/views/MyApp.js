/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import baseStyles from '../assets/styles/app.base';


export default class MyApp extends Component {
  render(){
    return (
      <View style={baseStyles.container}>
        <Text>My page!</Text>
      </View>
    );
  }
}
