import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, Button, TouchableHighlight } from 'react-native';
// import { Actions } from 'react-native-router-flux';

class Profile extends Component {

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.cardProfile}>
                    <Text style={styles.name}>Prénom Nom</Text>
                    <Image source={require('../assets/becode_logo.jpg')} style={styles.image}></Image>
                </View>
                <View style={styles.textContainer}>
                    <View style={styles.adress}>
                        <Text>
                            Adress : 000 rue de blablabla
                            1000 Bruxelles
                        </Text>
                    </View>
                    <View style={styles.skills}>
                        <Text>
                            Skills : bla, bla, bla
                        </Text>
                    </View>
                    <View style={styles.hours}>
                        <Text>
                            Hours : 14/24
                        </Text>
                    </View>
                </View>

            </View>
        );
    }
}

export default Profile;

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
        fontSize: 24,
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
        flex: 2,

    },

    skills: {
        flex: 1
    },

    hours: {
        flex: 1
    },
})
