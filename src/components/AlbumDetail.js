import React, { Component } from 'react';
import { View, Text } from 'react-native';


export default class AlbumDetail extends Component {
    render() {
    return (
      <View>
          <Text>{this.props.album.title}</Text>
      </View>
    );
  }
}
module.exports = AlbumDetail;
/* eslint-disable eol-last */