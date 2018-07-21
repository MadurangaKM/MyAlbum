import React, { Component } from 'react';
import { View, StyleSheet, StatusBar } from 'react-native';

export default class Statusbar extends Component {
  render() {
    return (
      <View style={styles.statusbar} >
        <StatusBar
           barStyle="light-content" 
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
    statusbar: {
        backgroundColor: '#2980b9',
        height: 25,
    }
});

module.exports = Statusbar;
/* eslint-disable eol-last */