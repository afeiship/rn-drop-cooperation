import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  View,
  AlertIOS,
  ListView,
  Dimensions,
  Image,
  TouchableOpacity,
  ScrollView
} from 'react-native';
import listData from './list.json';
import styles from './styles';


export default class HomeList extends Component{
  constructor(props) {
    super(props);
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(listData.data),
    };
  }
  _rowPress(rowData){
    AlertIOS.alert('tst',JSON.stringify(rowData))
  }
  _renderRow(rowData){
    return (
      <TouchableOpacity style={styles.row}  onPress={()=>this._rowPress(rowData)}>
        <View style={[styles.px10,styles.py10,styles.bd]}>
          <View style={styles.col1}>
            <Image style={{width:64,height:64}} source={{uri:rowData.thumb}} />
          </View>
          <View style={styles.col3}>
            <Text style={[styles.f14,styles.c3,styles.lh20]}>
              {rowData.title}
            </Text>
            <Text style={[styles.f12,styles.c6,styles.lh20]}>
              <Text style={[styles.f12,styles.c3]}>预存</Text>
              <Text style={[styles.f12,styles.orange]}>{rowData.depositEntry}</Text>
              <Text style={[styles.f12,styles.c3]}>最高可获取</Text>
              <Text style={[styles.f12,styles.orange]}>{rowData.paymentMax}</Text>
            </Text>
            <Text style={[styles.f12,styles.c9,styles.lh20]}>
              {`保障范围：${rowData.advertisement}`}
            </Text>
            <Text style={[styles.f12,styles.c9,styles.lh20]}>
              {`已有：${rowData.salesVolume}人加入`}
            </Text>
          </View>
        </View>
        <View style={[styles.px10,styles.ft]}>
          <View style={styles.col10}>
            <Text style={styles.c3}>
              {rowData.advertisement}
            </Text>
          </View>
          <View  style={styles.col4}>
            <TouchableOpacity style={[styles.py5,styles.bgBlue,styles.radius5]}>
              <Text style={styles.white}>查看详情</Text>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
  render(){
    return (
      <ListView dataSource={this.state.dataSource} renderRow={this._renderRow.bind(this)} />
    );
  }
}
