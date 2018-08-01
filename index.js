import React, { Component } from 'react';
import { AppRegistry, View, } from 'react-native';
import Statusbar from '../MyAlbum/src/components/Statusbar';
//import Header from '../MyAlbum/src/components/Header';
//import AlbumList from '../MyAlbum/src/components/AlbumList';
import Login from '../MyAlbum/src/components/Login';

export default class MyAlbum extends Component {
  render() {
    return (
      <View style={{ flex: 1 }} >
        <Statusbar />
         {/* <Header headerText={'MyAlbum'} />
          <AlbumList /> */}
         <Login />
      </View>
    );
  }
}


AppRegistry.registerComponent('MyAlbum', () => MyAlbum);
