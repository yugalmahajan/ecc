/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Index from './index.js';

export default class ecc extends Component {
  render() {
    return (
      <Index/>
    );
  }
}

AppRegistry.registerComponent('ecc', () => ecc);
