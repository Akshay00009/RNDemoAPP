/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {SignUp} from './src/components/signUp/SignUp'
// import SignUp  from './src/components/signup'

export class App extends Component{
  render() {
    return (
    <SignUp/>
    )
  };
}


