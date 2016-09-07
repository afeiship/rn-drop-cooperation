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
import bannerData from './banner-list.json';
import styles from './styles';
import Swiper from 'react-native-swiper';


export default class Slider extends Component{
  getSlides(){
    let slides = [];
    let winWidth = Dimensions.get('window').width;

    bannerData.data.forEach(function(item,index) {
      slides.push(
        <View style={styles.slide} key={index}>
          <Image style={{ width:winWidth,height:133}} source={{uri: item.imgUrl}}/>
        </View>
      );
    });
    return slides;
  }

  render(){
    return (
      <Swiper style={styles.wrapper} height={133}>
        {this.getSlides()}
      </Swiper>
    );
  }
}
