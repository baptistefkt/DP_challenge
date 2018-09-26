import React, { Component } from 'react';
import { StyleSheet, View, Button, } from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class Navbar extends Component {
    render() {
        return(
            <View style={{flex: 1}}>
                <View style = {styles.navbar}>
                    <View style = {styles.buttonView}>
                        <Button color = "#4FBC83" onPress={() => { Actions.Dashboard(); }} title = "Dashboard" style = {styles.button}/>
                    </View>
                    <View style = {styles.buttonView}>
                        <Button color = "#4FBC83" onPress={() => { Actions.Projects(); }} title = "Projects" style = {styles.button}/>
                    </View>
                    <View style = {styles.buttonView}>
                        <Button color = "#4FBC83" onPress={() => { Actions.Profile(); }} title = "Profile" style = {styles.button}/>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    navbar: {
        flexDirection: 'row',
        position: 'absolute',
        bottom: 0,
    },
    
    buttonView: {
        width: "33.333333%",
        height: 35,
        
    },

    button: {
        height: "100%",
        width: "100%",
    }
})