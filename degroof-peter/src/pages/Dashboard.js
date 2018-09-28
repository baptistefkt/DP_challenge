import React, { Component } from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import { Button, Icon } from 'native-base';
import Navbar from '../components/Navbar';


export default class Dashboard extends Component {
    render() {
        let latestProjects = this.props.data.projects.map((project, index) => {
            return (
                <View key={"project" + project.projectId} style={styles.container}>
                    <View style={styles.paper}>
                        <View>
                            <Text>{project.name}</Text>
                            <Text>{project.projectName}</Text>
                            <Text>{project.projectRegion}</Text>
                            <Text>{project.fields}</Text>
                            <Text>{project.skillsNeeded}</Text>
                            <Text>{project.hoursNeeded}</Text>
                            <Text>{project.type}</Text>
                            {/* <Applied projectId={project.projectId} activeUser={this.props.data.activeUser}/> */}
                        </View>
                        <View style={styles.detail}>
                            <Button style={styles.btn} onPress={() => { Actions.ProjectDetail(); }}>
                                <Icon style={styles.icon} name='eye'></Icon>
                            </Button>
                        </View>  
                    </View>
                </View>
            )

        })

        return (
            <View style = {styles.content} >
                <ScrollView>    
                    {latestProjects}
                </ScrollView>
                <Navbar/>   
            </View>
        );
    }
}

const styles = StyleSheet.create({

    content:{
        paddingTop: 30,
        flex: 1,
        backgroundColor: "#c5ecc5"
    },
    
    mainContainer: {
        flex: 1,
    },

    btn: {
        backgroundColor: 'white',
    },

    paper:{
        flex: 1,
        flexDirection: 'row',
        backgroundColor: "white",
        marginTop: 5,
        marginBottom:5,
        marginLeft: 5,
        marginRight: 5,
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 10,
        paddingRight: 10,
        backgroundColor: "white",
        borderWidth: 1,
        borderColor: "lightgrey",
        borderRadius: 3,
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

    detail: {
        backgroundColor: 'transparent',
        flex: 1,
        alignItems: 'flex-end',
        alignSelf: 'flex-end',
        position: 'absolute', 
        right: -240,
        top: 10,
        width: 300,
    },

    icon: {
        color: '#4DE6A1'
    }
})