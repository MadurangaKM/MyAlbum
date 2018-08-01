/* eslint-disable global-require */

import React, { Component } from 'react';
import { View, StyleSheet, Image, Text, KeyboardAvoidingView, } from 'react-native';
import firebase from 'firebase';
import * as Animatable from 'react-native-animatable';
import Button from '../components/Button';
import TextFiled from '../components/TextField';


export default class Login extends Component {
    componentWillMount() {
        firebase.initializeApp({
            apiKey: 'AIzaSyCOtM8gfFm1EUbISLurBjM-q2ro1OeTUKk',
            authDomain: 'myalbum-73ff9.firebaseapp.com',
            databaseURL: 'https://myalbum-73ff9.firebaseio.com',
            projectId: 'myalbum-73ff9',
            storageBucket: 'myalbum-73ff9.appspot.com',
            messagingSenderId: '31964886502'


        });
    }
  render() {
    return (
        <View style={styles.containerStyle} >
        <Animatable.View 
            animation="zoomIn" iterationCount={1}
            style={styles.containerLogoStyle}

        >
            <Image 
                source={require('../img/logo.png')}
                style={styles.Image}
            />
        </Animatable.View >
        
        <KeyboardAvoidingView
            behavior='padding'


        >
        <Animatable.View
            animation="slideInUp" iterationCount={1}
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
            </Animatable.View>

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
        flex: 0.97,
       
    },
    Image: {
        width: 220,
        height: 140,
        
        
    },
    from: {
        alignItems: 'center',
        margin: 10,
    },
    Text: {
        marginTop: 10,
        color: '#818181',
    }
});


module.exports = Login;
/* eslint-disable eol-last */