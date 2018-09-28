import React, { Component } from 'react';
import { StyleSheet, Text } from 'react-native';
import { Container, Content, Footer, FooterTab, Button, Icon } from 'native-base';
import { Actions } from 'react-native-router-flux';

export default class Navbar extends Component {
    render() {
        return (
            <Footer>
                <FooterTab style = {styles.navbar}>
                    <Button vertical onPress={() => { Actions.Dashboard(); }} title = "Dashboard">
                        <Icon style = {styles.tabIcon} name = "apps"/>
                        <Text style = {styles.tabText}>Dashboard</Text>
                    </Button>
                    <Button vertical onPress={() => { Actions.Projects(); }} title = "Projects">
                        <Icon style = {styles.tabIcon} name = "list"/>
                        <Text style = {styles.tabText}>Projects</Text>
                    </Button>
                    <Button vertical onPress={() => { Actions.Profile(); }} title = "Profile">
                        <Icon style = {styles.tabIcon} name = "person"/>
                        <Text style = {styles.tabText}>Profile</Text>
                    </Button>
                </FooterTab>
            </Footer>
        );
    }
}

const styles = StyleSheet.create({
    navbar: {
        backgroundColor: "white",
        borderWidth: 1,
        borderColor: "lightgrey",
    },

    tabText: {
        color: "#4FBC83",
    },

    tabIcon: {
        color: "#4FBC83",
    },
});    