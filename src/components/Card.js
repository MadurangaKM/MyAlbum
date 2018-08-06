import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import * as Animatable from 'react-native-animatable';

export default class Card extends Component {
  render() {
    return (
      <Animatable.View 
        style={styles.containerStyle} 
        animation="zoomIn" iterationCount={1}
      >
      {this.props.children}
     </Animatable.View>
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