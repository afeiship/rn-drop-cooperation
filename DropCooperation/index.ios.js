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

class DropCooperation extends Component {
  static title = '<TabBarIOS>';
  static description = 'Tab-based navigation.';
  static displayName = 'TabBarExample';

  state = {
    selectedTab: 'redTab',
    notifCount: 0,
    presses: 0,
  };

  _renderContent = (color: string, pageText: string, num?: number) => {
    return (
      <View style={styles.container}>
        <Text style={styles.f20}>I am tab content!!! {pageText}</Text>
        <Icon name="camera" size={50} color="#ddd" />
      </View>
    );
  };

  render() {
    return (
      <TabBarIOS
        unselectedTintColor="#333"
        tintColor="#0092ff">
        <Icon.TabBarItemIOS
          title="首页"
          iconName="home"
          selected={this.state.selectedTab === 'blueTab'}
          onPress={() => {
            this.setState({
              selectedTab: 'blueTab',
            });
        }}>
          {this._renderContent('#414A8C', '首页页面tab')}
        </Icon.TabBarItemIOS>
        <Icon.TabBarItemIOS
          title="我的"
          iconName="user"
          selected={this.state.selectedTab === 'redTab'}
          onPress={() => {
            this.setState({
              selectedTab: 'redTab',
            });
        }}>
          {this._renderContent('#414A8C', '我的页面tab')}
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
