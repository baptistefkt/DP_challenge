import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { Actions } from 'react-native-router-flux';
export default class Homescreen extends Component {
    render() {
        return (
            <View>
                <Text>
                    This is Page One, Press button to goto page two
                </Text>
                <Button
                    title='Go to Projects'
                    onPress={() => { Actions.pop(); }}>
                    <Text>Goto Page 1</Text>
                </Button>
            </View>
        );
    }
}