/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  View,
  AlertIOS,
  Image,
  Dimensions,
  ScrollView
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Slider from '../../components/slider/index';
import HomeList from '../../components/home-list/index';
import styles from './styles';


export default class HomeContent extends Component {
  render(){
    return (
      <ScrollView style={styles.container}>
        <Slider />
        <HomeList />
      </ScrollView>
    );
  }
}
