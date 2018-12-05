/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import Navigation from './src/actions/Navigation';
 import {SignUp}  from './src/components/container/SignUp'

export class App extends Component{
  render() {
    return (
      <Navigation/>
    )

  };
}


