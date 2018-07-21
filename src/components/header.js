import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';

export default class Header extends Component {
  render() {
    return (
      <View style={styles.hearder} >
        <Text style={styles.title}> MyAlbum</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
    hearder: {
        backgroundColor: '#3498db',
        height: 60,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
    },

    title: {
        fontSize: 25,
        color: '#fff',
        fontWeight: '600',
        textAlign: 'center',
        paddingTop: 13,
    }
});

module.exports = Header;
/* eslint-disable eol-last */