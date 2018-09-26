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
    handleSubmit=(e)=>{
      e.preventDefault();
      let name=e.target.name.value;  // va chercher la valeur de l'input name
      let description=e.target.description.value ;// idem avec input description
      let newBar={name, description};
      this.props.addBar(newBar);  //comme this a été bindé dans App, il utilisé le contexte où il est appelé, càd Forms
  }


    render() {
        return (
          <View style={styles.main}>
            <Image source={require('../assets/dp.png')}
            style={styles.imagelogo}/>

            <Text style={styles.text}>
              Email
            </Text>
            <Input
              placeholder='john@example.com'
            />
            <Text style={styles.text}>
              Password
            </Text>
            <Input
              placeholder='password'
            />
            <TouchableHighlight
                style ={styles.buttonlogin}>
            <Button
              title="Login"
              onPress={() => { Actions.Dashboard(); }}
              color='white'
            />
            </TouchableHighlight>
            <View style={styles.line}>
             </View>
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
    fontFamily:'Palatino',
    fontSize:20, color: "#4DE6A1",
    marginTop:20,
    marginBottom:10
  },
  line: {
    borderBottomColor: 'lightgrey',
    borderBottomWidth: 1,
    marginTop: 30,
    width: 300,
    alignSelf: 'center'
  },
  buttonlogin:{
    height: 40,
    width:160,
    borderRadius:10,
    backgroundColor : "#4DE6A1",
    marginLeft :50,
    marginRight:50,
    marginTop: 50,
    marginBottom:20,
    alignSelf: 'center'
  },
  textaccount:{
    alignSelf: 'center', fontSize:10, color: 'lightgrey', marginTop:20
  },
  imagelogo:{
    width: 300, height: 150, resizeMode: 'contain', alignSelf: 'center'
  },
  main:{
    backgroundColor: 'white', paddingBottom: 120
  },
  here:{
    color:'grey'
  }
});
