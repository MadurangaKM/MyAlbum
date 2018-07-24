import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

export default class AlbumList extends Component {
    state = { albums: [] }
    componentWillMount() {
        axios.get('https://rallycoding.herokuapp.com/api/music_albums')
            .then(responce => this.setState({ albums: responce.data }));
    }

    renderAlbums() {
        return this.state.albums.map(album => 
        <AlbumDetail key={album.title} album={album} />);
    }

  render() {
    return (
      <ScrollView >
        {this.renderAlbums()}
      </ScrollView>
    );
  }
}
module.exports = AlbumList;
/* eslint-disable eol-last */