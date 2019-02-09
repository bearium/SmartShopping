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


class App extends Component
{

  render() {
    return (
        <Provider store={createStore(reducers,{},applyMiddleware(ReduxThunk))}>
          <Router/>
        </Provider>
    );
  }
}


export default App