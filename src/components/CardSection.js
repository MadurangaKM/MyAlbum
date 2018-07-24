import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';

export default class CardSection extends Component {
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
        flexDirection: 'row',
        justifyContent: 'flex-start',
        borderBottomColor: '#2980b9',
        borderBottomWidth: 3,
        
    
    }
});


module.exports = CardSection;
/* eslint-disable eol-last */