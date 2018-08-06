import React, { Component } from 'react';
import { Text, View, StyleSheet, Image, Linking } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';


export default class AlbumDetail extends Component {
    render() {
    return (
      <Card >
      
        <CardSection>
          <View style={styles.imageContainer}>
            <Image 
            style={styles.thumbmail}
            source={{ uri: this.props.album.thumbnail_image }} 
            />
          </View>
          <View style={styles.textContainer}>
            <Text
            style={styles.albumTitle}
            >{this.props.album.title}</Text>
            <Text
            style={styles.albumArtist}
            >{this.props.album.artist}</Text>
          </View>
        </CardSection>
        <View style={styles.albumImageContainer} >
          <Image 
          source={{ uri: this.props.album.image }}
          style={styles.albumImage} 
          />
        <Button 
          onPress={() => Linking.openURL(this.props.album.url)}
          btnText={'BUY NOW'}
        />
        </View>
      </Card>
    );
  }
}

const styles = StyleSheet.create({
  textContainer: {
    flexDirection: 'column',
   // justifyContent: 'space-around',
  },
  thumbmail: {
    width: 50,
    height: 50
  },
  imageContainer: {
    margin: 5,
    marginRight: 10
  },
  albumTitle: {
    fontSize: 20,
    fontWeight: '800',
  },
  albumArtist: {
    fontSize: 16,
    paddingTop: 3,
  },
  albumImage: {
    width: 300,
    height: 300,
  },
  albumImageContainer: {
    paddingTop: 10,
    alignItems: 'center',
  }
});
module.exports = AlbumDetail;
/* eslint-disable eol-last */