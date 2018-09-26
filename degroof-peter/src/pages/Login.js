import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { Actions } from 'react-native-router-flux';

class Login extends Component {
    loginMatch=(userInput)=>{
        let loggedUser= this.props.data.users.map((user)=>{
            return (user.login=== SOMETHING && user.pwd=== SOMETHINGELSE)  
        })
    }

    //this.props.activeUser({ton user})

    render() {
        return (
            <View>
                <Text>
                {this.props.title}
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