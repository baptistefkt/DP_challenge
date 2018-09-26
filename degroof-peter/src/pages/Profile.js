import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, Button, TouchableHighlight } from 'react-native';
import {Input} from '../components/Input';
import {ButtonHome} from '../components/ButtonHome';
import { Actions } from 'react-native-router-flux';

class Profile extends Component {

    render() {
        return (

            <View>
                <Button
                    title='Go Back'
                    onPress={() => { Actions.pop(); }}>
                    <Text>Goto back</Text>
                </Button>
                <Text>
                    This is Profile page.
                </Text>


            </View>
        );
    }
}

export default Profile;
