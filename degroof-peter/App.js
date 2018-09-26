import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';
import Login from './src/pages/Login';
import Dashboard from './src/pages/Dashboard';
import Projects from './src/pages/Projects';

export default class App extends Component {
  render() {
    return (
      <Router>
        <Scene key="root">
          <Scene key="Login" component={Login} title="Login" titleStyle = {{color: "#4FBC83"}} initial={true} />
          <Scene key="Dashboard" component={Dashboard} title="Dashboard" titleStyle = {{color: "#4FBC83"}}/>
          <Scene key="Projects" component={Projects} title="Projects" titleStyle = {{color: "#4FBC83"}}/>
          <Scene key="Profile" component={Projects} title="Profile" titleStyle = {{color: "#4FBC83"}}/>
        </Scene>
      </Router>
    );
  }
}