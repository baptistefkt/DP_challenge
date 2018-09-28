import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, Button, TouchableHighlight } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Navbar from '../components/Navbar';

export default class Profile extends Component {

    render() {
        return (
            <View style={{flex: 1}}>
                <Navbar/>
            </View>
        );
    }
}    