/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
 import {SignUp}  from './src/components/container/SignUp'
 import {Login} from './src/components/container/Login'
 import Navigation from './src/actions/Navigation'

export class App extends Component{
  render() {
    return (
      <Navigation/>
    )
  };
}


