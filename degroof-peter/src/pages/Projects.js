import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { Actions } from 'react-native-router-flux';

class Projects extends Component {

    render() {
        let latestProjects= this.props.data.projects.map((project,index)=>{
            return (
                <View key={"project"+ project.projectId}> 
                    <Text>{project.name}</Text>
                    <Text>{project.projectName}</Text>
                    <Text>{project.projectRegion}</Text>
                    <Text>{project.fields}</Text>
                    <Text>{project.skillsNeeded}</Text>
                    <Text>{project.hoursNeeded}</Text>
                    <Text>{project.type}</Text>
                    
                </View>
            )

        })
        return (
            <View>
                <Button
                    title='Go Back'
                    onPress={() => { Actions.pop(); }}>
                    <Text>Goto back</Text>
                </Button>
                <Text>
                    This is Projects page.
                </Text>


            </View>
        );
    }
}

export default Projects;