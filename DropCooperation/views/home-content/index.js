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
  ScrollView
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles';
import Swiper from 'react-native-swiper';
export default class HomeContent extends Component {
  render(){
    return (
      <ScrollView style={styles.container}>
        <Swiper style={styles.wrapper} height={140}>
          <View style={styles.slide1}>
            <Text style={styles.text}>Hello Swiper</Text>
          </View>
          <View style={styles.slide2}>
            <Text style={styles.text}>Beautiful</Text>
          </View>
          <View style={styles.slide3}>
            <Text style={styles.text}>And simple</Text>
          </View>
        </Swiper>
      </ScrollView>
    );
  }
}
