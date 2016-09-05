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
  TabBarIOS,
  View
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import HomeApp from './views/HomeApp';
import MyApp from './views/MyApp';

class DropCooperation extends Component {
  static title = '<TabBarIOS>';
  static description = 'Tab-based navigation.';
  static displayName = 'TabBarExample';

  state = {
    selectedTab: 'home'
  };

  render() {
    return (
      <TabBarIOS
        unselectedTintColor="#333"
        tintColor="#0092ff">
        <Icon.TabBarItemIOS
          title="首页"
          iconName="home"
          selected={this.state.selectedTab === 'home'}
          onPress={() => {
            this.setState({
              selectedTab: 'home',
            });
        }}>
          <HomeApp />
        </Icon.TabBarItemIOS>
        <Icon.TabBarItemIOS
          title="我的"
          iconName="user"
          selected={this.state.selectedTab === 'my'}
          onPress={() => {
            this.setState({
              selectedTab: 'my',
            });
        }}>
          <MyApp />
        </Icon.TabBarItemIOS>
      </TabBarIOS>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  f20:{
    fontSize:20
  }
});

AppRegistry.registerComponent('DropCooperation', () => DropCooperation);
