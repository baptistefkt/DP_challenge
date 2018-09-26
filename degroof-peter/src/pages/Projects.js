import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Navbar from '../components/Navbar';

export default class Projects extends Component {

    render() {
        return (
            <View style={{flex: 1}}>
                <Navbar/>
            </View>
        );
    }
}