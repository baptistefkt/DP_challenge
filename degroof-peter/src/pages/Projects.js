import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button, Icon } from 'native-base';
import { Actions } from 'react-native-router-flux';
import Navbar from '../components/Navbar';

export default class Projects extends Component {

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
                    <Button style={styles.navbar} onPress={() => { Actions.ProjectDetail(); }}>
                        <Icon style={styles.icon} name='eye'></Icon>
                    </Button>

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
    container: {
        flex: 1,
        justifyContent: 'flex-end'
    },

    navbar: {
        backgroundColor: 'white',
    },

    icon: {
        color: '#4DE6A1'
    }
})
