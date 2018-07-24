import React, { Component } from 'react';
import { AppRegistry, View, } from 'react-native';
import Statusbar from '../MyAlbum/src/components/Statusbar';
import Header from '../MyAlbum/src/components/Header';
import AlbumList from '../MyAlbum/src/components/AlbumList';

export default class MyAlbum extends Component {
  render() {
    return (
      <View style={{ flex: 1 }} >
         <Statusbar />
         <Header headerText={'MyAlbum'} />
         <AlbumList />
      </View>
    );
  }
}


AppRegistry.registerComponent('MyAlbum', () => MyAlbum);
