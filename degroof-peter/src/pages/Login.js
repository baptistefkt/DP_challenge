import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, Button, TouchableHighlight } from 'react-native';
import {Input} from '../components/Input';
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
      
            <View style={{backgroundColor: 'white', paddingBottom: 120}}>
                <Text>
                    {this.props.title}
                </Text>
            <Image source={require('../assets/dp.png')}
            style={{width: 300, height: 150, resizeMode: 'contain', alignSelf: 'center'
            }}/>

            <Text
              style={{
                fontWeight: '600',
                fontSize: 30,
                alignSelf: 'center',
                color: '#4DE6A1',
                textAlign: 'center',
                marginBottom: '10%',
                marginTop: '10%'
              }}
            >
              {'Sign In'}
            </Text>
            <Text style={{alignSelf: 'center'}}>
              Email
            </Text>
            <Input
              placeholder='john@example.com'
            />
            <Text style={{alignSelf: 'center'}}>
              Password
            </Text>
            <Input
              placeholder='password'
            />
            <TouchableHighlight
                style ={{
                    height: 40,
                    width:160,
                    borderRadius:10,
                    backgroundColor : "#4DE6A1",
                    marginLeft :50,
                    marginRight:50,
                    marginTop: 50,
                    alignSelf: 'center'
                }}>
            <Button
              title="Login"
              onPress={() => { Actions.Dashboard(); }}
              color='white'
            />
            </TouchableHighlight>
            <View
                style={{
                  borderBottomColor: 'grey',
                  borderBottomWidth: 1,
                  marginTop: 20,
                  width: 300,
                  alignSelf: 'center'
                }}
              >
              </View>
          </View>

        );
    }
}
export default Login;
