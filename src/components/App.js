import React, { Component } from 'react';
import { View } from 'react-native';
import AppNavigation from './AppNavigation';

export default class MyAlbum extends Component {

  render() {
    return (
      <View style={{ flex: 1 }} >
       
         {/* <Header headerText={'MyAlbum'} />
          <AlbumList /> */}
         {/* <Login /> */}
         {/* {this.renderContent()} */}
         <AppNavigation />
         {/* <Splash /> */}
      </View>
    );
  }
}
