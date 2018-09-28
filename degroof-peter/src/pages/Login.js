import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, Button, TouchableHighlight } from 'react-native';
import { Input } from '../components/Input';
import { Actions } from 'react-native-router-flux';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state={
      loginValueHolder:"",
      pwdValueHolder:"",
    }
  }

  getValues(){
    const loginValueHolder=this.state.loginValueHolder;
    const pwdValueHolder=this.state.pwdValueHolder;
    let isConnected = false;
    this.props.data.users.map((user)=>{

     if (user.login === loginValueHolder && user.pwd === pwdValueHolder  && loginValueHolder!="" && pwdValueHolder!="" ) {
        isConnected = true;
        this.props.activeUser(user);
      } 
    })
    if(!isConnected){
      alert('login error!') 
    }
    else{
      setTimeout(()=>{
        Actions.Dashboard()
      },200)
    }
  }

  render() {
    return (

      <View style={styles.main}>
        <Image source={require('../assets/dp.png')}
          style={styles.imagelogo} />

        <Text style={styles.text}>
          Email
            </Text>
        <Input
          placeholder='john@example.com'
          value={this.state.loginValueHolder}
          onChangeText={loginValueHolder => this.setState({ loginValueHolder })}
        />
        <Text style={styles.text}>
          Password
            </Text>
        <Input
          placeholder='password'
          value={this.state.pwdValueHolder}
          onChangeText={pwdValueHolder => this.setState({ pwdValueHolder })}
        />
        <TouchableHighlight
          style={styles.buttonlogin}>
          <Button
            title="Login"
            onPress={this.getValues.bind(this)}
            color='#4DE6A1'
          />
        </TouchableHighlight>
        <View style={styles.line}></View>
        <Text style={styles.textaccount}>
          Dont have an account? Register <Text style={styles.here}>HERE</Text>
        </Text>
      </View>

    );
  }
}

const styles = StyleSheet.create({
  text: {
    alignSelf: 'center',
    fontSize: 20, color: "#4DE6A1",
    marginTop: 20,
    marginBottom: 10
  },
  line: {
    borderBottomColor: 'lightgrey',
    borderBottomWidth: 1,
    marginTop: 30,
    width: 300,
    alignSelf: 'center'
  },
  buttonlogin: {
    height: 40,
    width: 160,
    borderRadius: 10,
    marginLeft: 50,
    marginRight: 50,
    marginTop: 50,
    marginBottom: 20,
    alignSelf: 'center'
  },
  textaccount: {
    alignSelf: 'center',
    fontSize: 10,
    color: 'lightgrey',
    marginTop: 20
  },
  imagelogo: {
    width: 300,
    height: 150,
    resizeMode: 'contain',
    alignSelf: 'center',
    paddingTop: 30,
    marginBottom: 30,
  },
  main: {
    backgroundColor: 'white',
    paddingBottom: 120,
    paddingTop: 50
  },
  here: {
    color: 'grey'
  }
});
export default Login;