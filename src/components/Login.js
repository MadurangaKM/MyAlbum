/* eslint-disable global-require */

import React, { Component } from 'react';
import { View, StyleSheet, Image, Text, KeyboardAvoidingView } from 'react-native';
import Button from '../components/Button';
import TextFiled from '../components/TextField';

export default class Login extends Component {
  render() {
    return (
        <View style={styles.containerStyle} >
        <View style={styles.containerLogoStyle}>
            <Image 
                source={require('../img/logo.png')}
                style={styles.Image}
            />
        </View>
        <KeyboardAvoidingView
            behavior='padding'
            style={styles.from}
        >
            <TextFiled 
                placeHold='Enter Username'
                returnKeyType='next'
                autoCapitalize='none'
                onSubmitEditing={() => this.refs.passwordnext.focus()}
               
            />
            <TextFiled 
                placeHold='Password' 
                secureTextEntry
                returnKeyType='go'
                autoCapitalize='none'
                autoCorrect={false}
                ref={'passwordnext'}

            />
            
            <Button btnText={'LOGIN'} />
            <Text style={styles.Text}>Copyright by MaduDesign</Text>

        </KeyboardAvoidingView>
     </View>
    );
  }
}


const styles = StyleSheet.create({
    containerStyle: {
        backgroundColor: '#FFFF',
        flex: 1,
    },
    containerLogoStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 0.7,
       
    },
    Image: {
        width: 220,
        height: 140,
        
        
    },
    from: {
        alignItems: 'center',
        margin: 10,
        flex: 0.3,


    },
    Text: {
        marginTop: 10,
        color: '#8B8B8B',
    }
});


module.exports = Login;
/* eslint-disable eol-last */