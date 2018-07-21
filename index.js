import React, { Component } from 'react';
import { AppRegistry, View, } from 'react-native';
import Statusbar from '../MyAlbum/src/components/statusbar';
import Header from '../MyAlbum/src/components/header';

export default class MyAlbum extends Component {
  render() {
    return (
      <View>
         <Statusbar />
         <Header headerText={'MyAlbum'} />
      </View>
    );
  }
}

AppRegistry.registerComponent('MyAlbum', () => MyAlbum);
