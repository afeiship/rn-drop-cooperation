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
import MyContent from './my-content/index';

export default class MyApp extends Component {
  render(){
    return (
      <NavigatorIOS
        style={baseStyles.container}
        initialRoute={{
          title : '我的中心',
          component: MyContent,
          passProps:{ navigator: this }
         }}
      />
    );
  }
}
