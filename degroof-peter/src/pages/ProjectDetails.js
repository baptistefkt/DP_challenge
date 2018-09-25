import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { Actions } from 'react-native-router-flux';
// import HeaderBar from '../components/HeaderBar';

class ProjectDetails extends Component {

    render() {
        return (
            <View>
                <Text>
                    This is Page One, Press button to goto page two
            </Text>

                <Button
                    title='Go to Homescreen'
                    onPress={() => { Actions.Homescreen(); }}>
                    <Text>Goto Page 2</Text>
                </Button>
            </View>
        );
    }
}

export default ProjectDetails;