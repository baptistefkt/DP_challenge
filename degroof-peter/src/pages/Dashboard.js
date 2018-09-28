import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Navbar from '../components/Navbar';


export default class Dashboard extends Component {
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
                    {/* <Applied projectId={project.projectId} activeUser={this.props.data.activeUser}/> */}
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