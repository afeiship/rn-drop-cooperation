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
import styles from './styles';
import Swiper from 'react-native-swiper';
export default class HomeContent extends Component {
  render(){
    return (
      <ScrollView style={styles.container}>
        <Swiper style={styles.wrapper} height={133}>
          <Slider />
        </Swiper>
      </ScrollView>
    );
  }
}
