import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';

export default class Card extends Component {
  render() {
    return (
      <View style={styles.containerStyle} >
      {this.props.children}
     </View>
    );
  }
}

const styles = StyleSheet.create({
    containerStyle: {
        backgroundColor: '#FFF',
        padding: 10,
        marginLeft: 20,
        marginRight: 20,

        marginTop: 20,
        borderRadius: 4,
        borderWidth: 1,
        borderColor: '#d6d7da',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
    
    }
});


module.exports = Card;
/* eslint-disable eol-last */