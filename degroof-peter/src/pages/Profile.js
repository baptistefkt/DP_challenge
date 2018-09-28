import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import Navbar from '../components/Navbar';

export default class Profile extends Component {

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.cardProfile}>
                    <Text style={styles.name}>Jean Dupont </Text>
                    <Image source={require('../assets/profilePic1.jpg')} style={styles.image}></Image>
                </View>
                <View style={styles.textContainer}>
                    <View style={styles.adress}>
                        <View >
                            <Text style={styles.adressTitle}>Adress : </Text>
                        </View>
                        <View style={styles.adressDetails}>
                            <Text>126 rue de la Glacière</Text>
                            <Text>1000 Bruxelles</Text>
                        </View>
                    </View>
                    <View style={styles.skills}>
                        <Text style={styles.skillsTitle}>
                            Skills :
                        </Text>
                        <Text>IT, HR, Coaching</Text>
                    </View>
                    <View style={styles.hours}>
                        <Text style={styles.hoursTitle}>
                            Total hours for this year :
                        </Text>
                        <Text>14/24</Text>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: "space-between",
        backgroundColor: 'white',
    },

    cardProfile: {
        flex: 1,
        justifyContent: "space-around",
    },

    name: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#4DE6A1',
    },

    image: {
        width: 150,
        height: 150,
        borderRadius: 75,
    },

    textContainer: {
        flex: 1,
        justifyContent: "space-around",
        alignItems: "center",
    },

    adress: {
        flex: 1,
        flexDirection: "row",
        borderBottomWidth: 1,
        borderBottomColor: 'lightgrey',
        borderStyle: 'solid',
        paddingTop: 20

    },

    adressTitle: {
        fontWeight: 'bold',
        color: '#4DE6A1',
        paddingRight: 20
    },

    skills: {
        flex: 1,
        flexDirection: "row",
        borderBottomWidth: 1,
        borderBottomColor: 'lightgrey',
        borderStyle: 'solid',
        paddingTop: 25
    },

    skillsTitle: {
        fontWeight: 'bold',
        color: '#4DE6A1',
        paddingRight: 20
    },

    hours: {
        flex: 1,
        flexDirection: "row",
        paddingTop: 30
    },

    hoursTitle: {
        fontWeight: 'bold',
        color: '#4DE6A1',
        paddingRight: 20
    },
})
