import React, { Component } from 'react';
import { View, } from 'react-native';
import firebase from 'firebase';
import Statusbar from '../components/Statusbar';
import Header from '../components/Header';
import AlbumList from '../components/AlbumList';
import Login from '../components/Login';
import Loading from '../components/Loading';


export default class Home extends Component {
  state = { loginIn: null };
  componentWillMount() {
    firebase.initializeApp({
        apiKey: 'AIzaSyDx69fXzDPdEja8l2BgjOcqpcD3yzCgl4g',
        authDomain: 'myalbum-70f93.firebaseapp.com',
        databaseURL: 'https://myalbum-70f93.firebaseio.com',
        projectId: 'myalbum-70f93',
        storageBucket: '',
        messagingSenderId: '56849266864'

    });
    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
            this.setState({ loginIn: true });
        } else {
            this.setState({ loginIn: false });
        }
    });
}
renderContent() {
  switch (this.state.loginIn) {
    case true:
      return (
        <View style={{ flex: 1 }}>
         <Header headerText={'MyAlbum'} />
        <AlbumList />
        </View>
        
       );
    case false:
      return <Login />;
    default:
      return <Loading />;
  }
}

  render() {
    return (
      <View style={{ flex: 1 }} >
        <Statusbar />
         {/* <Header headerText={'MyAlbum'} />
          <AlbumList /> */}
         {/* <Login /> */}
          {this.renderContent()}
         
         {/* <Splash /> */}
      </View>
    );
  }
}
