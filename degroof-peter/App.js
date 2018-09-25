import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Router, Scene } from 'react-native-router-flux';
import ProjectDetails from './src/pages/ProjectDetails';
import Homescreen from './src/pages/Homescreen';

export default class App extends Component {
  render() {
    return (
      <Router hideNavBar="true">
        <Scene key="root">
          <Scene key="ProjectDetails" component={ProjectDetails} title="ProjectDetails" initial={true} />
          <Scene key="Homescreen" component={Homescreen} title="Homescreen" />
        </Scene>
      </Router>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
