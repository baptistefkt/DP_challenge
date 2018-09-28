import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Applied from '../data/Applied';
import { StyleSheet, View, Text, } from 'react-native';
import Navbar from '../components/Navbar';


export default class Dashboard extends Component {
    render() {
        let latestProjects = this.props.data.projects.map((project, index) => {
            return (
                <View key={"project" + project.projectId}>
                    <Text>{project.name}</Text>
                    <Text>{project.projectName}</Text>
                    <Text>{project.projectRegion}</Text>
                    <Text>{project.fields}</Text>
                    <Text>{project.skillsNeeded}</Text>
                    <Text>{project.hoursNeeded}</Text>
                    <Text>{project.type}</Text>
         
                    <Applied projectId={project.projectId} activeUser={this.props.data.activeUser}/>
                </View>
            )

        })

        return (
            <View style={{flex: 1}}>
                {latestProjects}
                <Navbar/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
    },

    listContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

    navContainer: {
        flex: 1,
        justifyContent: 'flex-end'
    },

    title: {
        color: '#4DE6A1',
        fontSize: 25,
        paddingBottom: 30,
    },

    navbar: {
        backgroundColor: 'white',
    },

    icon: {
        color: '#4DE6A1'
    }
})