/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React, {Component} from 'react';
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
            apiKey: "AIzaSyBubBsFMONE-WohDsvGgG6Kg-m3-HC9shU",
            authDomain: "smartshopper-cc2c0.firebaseapp.com",
            databaseURL: "https://smartshopper-cc2c0.firebaseio.com",
            projectId: "smartshopper-cc2c0",
            storageBucket: "smartshopper-cc2c0.appspot.com",
            messagingSenderId: "925667531658"
        };

        if (!firebase.apps.length) {
            firebase.initializeApp({});
        }
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
