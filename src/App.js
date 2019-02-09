/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import { Provider } from "react-redux";
import {createStore, applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from "./reducers";
import Router from "./Router"
import firebase from "firebase"


class App extends Component
{
    componentWillMount() {
        const config = {
            apiKey: 'AIzaSyBR4FTGiOcTZ5OBNi6thE0KhCDR3PaOtQM',
            authDomain: 'manager-2328b.firebaseapp.com',
            databaseURL: 'https://manager-2328b.firebaseio.com',
            storageBucket: 'manager-2328b.appspot.com',
            messagingSenderId: '193075244299'
        };

        firebase.initializeApp(config);
    }

  render() {
    return (
        <Provider store={createStore(reducers,{},applyMiddleware(ReduxThunk))}>
          <Router/>
        </Provider>
    );
  }
}



export default App
