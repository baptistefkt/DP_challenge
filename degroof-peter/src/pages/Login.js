import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, Button, TouchableHighlight } from 'react-native';
import {Input} from '../components/Input';
import { Actions } from 'react-native-router-flux';

class Login extends Component {
  constructor(props){
    super(props);
    this.state={
      loginValueHolder="",
      pwdValueHolder="",
    }
  }

    //this.props.activeUser({ton user})
    



  getValues=()=>{
    const loginValueHolder=this.state.loginValueHolder;
    const pwdValueHolder=this.state.pwdValueHolder;
    let loggedUser= this.props.data.users.map((user)=>{
      if (user.login=== loginValueHolder && user.pwd=== pwdValueHolder) {
        return user
      } 
      else {
        return Actions.Login()
      }
  });
     {this.props.activeUser({loggedUser})};


    Actions.Dashboard();
  }

    render() {
        return (
      
          <View style={{backgroundColor: 'white', paddingBottom: 120}}>
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
              onChangeText={loginValueHolder => this.setState({loginValueHolder})}
            />
            <Text style={{alignSelf: 'center'}}>
              Password
            </Text>
            <Input
              placeholder='password'
              onChangeText={pwdValueHolder => this.setState({pwdValueHolder})}
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
              onPress={this.getValues}
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
