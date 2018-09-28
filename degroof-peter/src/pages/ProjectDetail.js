import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, Button, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';

class ProjectDetail extends Component {

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.cardProfile}>
                    <Text style={styles.name}>BeCode</Text>
                    <Image source={require('../assets/becode_logo.jpg')} style={styles.image}></Image>
                </View>
                <View style={styles.textContainer}>
                    <View style={styles.adress}>
                        <View >
                            <Text style={styles.adressTitle}>Region : </Text>
                        </View>
                        <View style={styles.adressDetails}>
                            <Text>Bruxelles</Text>
                        </View>
                    </View>
                    <View style={styles.skills}>
                        <Text style={styles.skillsTitle}>
                            Skills needed :
                        </Text>
                        <Text>IT, HR</Text>
                    </View>
                    <View style={styles.hours}>
                        <Text style={styles.hoursTitle}>
                            Hours needed :
                        </Text>
                        <Text>4h</Text>
                    </View>
                    <View style={styles.description}>
                        <Text style={styles.descriptionTitle}>
                            Mission description :
                        </Text>
                        <Text style={styles.descriptionText}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi perferendis placeat fugiat quaerat nisi modi aperiam quibusdam repellat amet iure.
                        </Text>
                    </View>
                </View>
                <View style={styles.btn}>
                    <Button color='#4DE6A1' title='Apply to this mission' onPress={() => { Actions.pop(); }}>
                    </Button>
                </View>

            </View>
        );
    }
}

export default ProjectDetail;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: "space-between",
        backgroundColor: 'white',
    },

    cardProfile: {
        flex: 2,
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
        flex: 2,
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
        paddingTop: 20
    },

    skillsTitle: {
        fontWeight: 'bold',
        color: '#4DE6A1',
        paddingRight: 20
    },

    hours: {
        flex: 1,
        flexDirection: "row",
        paddingTop: 20,

    },

    hoursTitle: {
        fontWeight: 'bold',
        color: '#4DE6A1',
        paddingRight: 20
    },

    description: {
        flex: 3,
        paddingTop: 20,
    },

    descriptionTitle: {
        fontWeight: 'bold',
        color: '#4DE6A1',
        paddingLeft: 20,
        paddingBottom: 20
    },

    descriptionText: {
        paddingLeft: 20,
        paddingRight: 20,
        color: 'grey',
    },

    btn: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingBottom: 30
    }

})


