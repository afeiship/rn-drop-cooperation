/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  NavigatorIOS,
  Text,
  View
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import baseStyles from '../assets/styles/app.base';
import HomeContent from './home-content/index';
let styles= StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F00'
  }
});

export default class HomeApp extends Component {
  render(){
    return (
      <NavigatorIOS
        style={styles.container}
        initialRoute={{
          title : '首页',
          component: HomeContent,
          passProps:{ navigator: this }
         }}
      />
    );
  }
}
