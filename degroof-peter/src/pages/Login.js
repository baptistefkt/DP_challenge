import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { Actions } from 'react-native-router-flux';

class Login extends Component {

    render() {
        return (
            <View>
                <Text>
                    This is Log in page.
            </Text>

                <Button
                    title='Go to Dashboard'
                    onPress={() => { Actions.Dashboard(); }}>
                    <Text>Goto Dashboard</Text>
                </Button>
            </View>
        );
    }
}

export default Login;