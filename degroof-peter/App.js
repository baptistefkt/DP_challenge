import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Router, Scene } from 'react-native-router-flux';
import Login from './src/pages/Login';
import Dashboard from './src/pages/Dashboard';
import Projects from './src/pages/Projects';

export default class App extends Component {
  render() {
    return (
      <Router hideNavBar="true">
        <Scene key="root">
          <Scene key="Login" component={Login} title="Login" initial={true} />
          <Scene key="Dashboard" component={Dashboard} title="Dashboard" />
          <Scene key="Projects" component={Projects} title="Projects" />
          <Scene key="Profile" component={Projects} title="Profile" />

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
