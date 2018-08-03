/* eslint-disable global-require */

import React, { Component } from 'react';
import { View, StyleSheet, Image, Text, KeyboardAvoidingView, } from 'react-native';
import firebase from 'firebase';
import * as Animatable from 'react-native-animatable';
import Button from '../components/Button';
import TextFiled from '../components/TextField';


export default class Login extends Component {
    state = { email: '', password: '', error: '' };
    componentWillMount() {
        firebase.initializeApp({
            apiKey: 'AIzaSyDx69fXzDPdEja8l2BgjOcqpcD3yzCgl4g',
            authDomain: 'myalbum-70f93.firebaseapp.com',
            databaseURL: 'https://myalbum-70f93.firebaseio.com',
            projectId: 'myalbum-70f93',
            storageBucket: '',
            messagingSenderId: '56849266864'

        });
    }
    onButtonPress() {
        const { email, password } = this.state;
        this.setState({ error: '' });
        firebase.auth().signInWithEmailAndPassword(email, password)
            .catch(() => {
                firebase.auth().createUserWithEmailAndPassword(email, password)
                .catch((error) => {
                    this.setState({ error: error.message });
                    console.log(error);
                });
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
        <View style={styles.errorView}>
          <Text style={styles.errorText}>{this.state.error}</Text>
          </View>
            <TextFiled
                value={this.state.email}
                onChangeText={email => this.setState({ email })}

                placeHold='Enter Username'
                returnKeyType='next'
                autoCapitalize='none'
                onSubmitEditing={() => this.refs.passwordnext.focus()}
               
            />
            <TextFiled 
                value={this.state.password}
                onChangeText={password => this.setState({ password })}

                placeHold='Password' 
                secureTextEntry
                returnKeyType='go'
                autoCapitalize='none'
                autoCorrect={false}
                ref={'passwordnext'}
                onSubmitEditing={this.onButtonPress.bind(this)}

            />
            
            <Button 
                btnText={'LOGIN'}
                onPress={this.onButtonPress.bind(this)}
            />
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
    },
    errorText: {
        color: '#e74c3c',
        paddingTop: 10,
        fontSize: 18,
        fontWeight: 'bold',
      
    }
});


module.exports = Login;
/* eslint-disable eol-last */