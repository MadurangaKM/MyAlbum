import React, { Component } from 'react';
import { ScrollView, ActivityIndicator, View, StyleSheet, Text } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';


export default class AlbumList extends Component {
   
  constructor(props) {
    super(props);
    this.state = { albums: [], isLoading: true };
  }
    

    componentWillMount() {
        axios.get('https://rallycoding.herokuapp.com/api/music_albums')
            .then(responce => this.setState({ albums: responce.data, isLoading: false }));
    }

    renderAlbums() {
      if (this.state.isLoading) {
        return (
        <View style={styles.containerStyle}> 
            <ActivityIndicator size="large" color="#0000ff" />
            <Text style={styles.containerStyle}>Loading Data</Text>
        </View>
        );
      }  
        return this.state.albums.map(album => 
            <AlbumDetail key={album.title} album={album} />
        );
    }

  render() {
    return (
      <ScrollView >
        {this.renderAlbums()}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
    containerStyle: {
        paddingTop: 20,
        textAlign: 'center',
    },
});
module.exports = AlbumList;
/* eslint-disable eol-last */