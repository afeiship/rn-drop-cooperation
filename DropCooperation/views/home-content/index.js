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
  ScrollView
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import bannerData from '../../assets/apis/banner-list.json';
import styles from './styles';
import Swiper from 'react-native-swiper';
export default class HomeContent extends Component {
  render(){
    var slides = [];
    bannerData.data.forEach(function(item,index) {
      slides.push(
        <View style={styles.slide} key={index}>
          <Image style={{ width:375,height:133}} source={{uri: item.imgUrl}}/>
        </View>
      );
    })
    return (
      <ScrollView style={styles.container}>
        <Swiper style={styles.wrapper} height={133}>
          {slides}
        </Swiper>
      </ScrollView>
    );
  }
}
