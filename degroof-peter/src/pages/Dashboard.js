import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Applied from '../data/Applied';


export default class Dashboard extends Component {
    render() {
        let latestProjects= this.props.data.projects.map((project,index)=>{
            alert('dash ' + this.props.data.activeUser)
            alert('user ' + this.props.data.activeUser.user)
            alert('appli ' + this.props.data.activeUser.applications);
            return (
                <View key={"project"+ project.projectId}> 
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
            <View>
               
                {latestProjects}
                <Button
                    title='Go Back'
                    onPress={() => { Actions.pop(); }}>
                    <Text>Goto back</Text>
                </Button>
                <Text>
                    This is Dashboard page.
                </Text>
                <Button
                    title='Go to Projects'
                    onPress={() => { Actions.Projects(); }}>
                    <Text>Goto Projects page</Text>
                </Button>
                <Button
                    title='Go to Profile'
                    onPress={() => { Actions.Profile(); }}>
                    <Text>Goto Profile</Text>
                </Button>
            </View>
        );
    }
}