import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { Actions } from 'react-native-router-flux';

class Projects extends Component {

    render() {
        return (
            <View>
                <Button
                    title='Go Back'
                    onPress={() => { Actions.pop(); }}>
                    <Text>Goto back</Text>
                </Button>
                <Text>
                    This is Projects page.
                </Text>


            </View>
        );
    }
}

export default Projects;