import React, { Component } from 'react';
import { StyleSheet, View, Text, } from 'react-native';
import { Container, Footer, FooterTab, Button, Left, Right, Icon } from 'native-base';
import { Actions } from 'react-native-router-flux';


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
                    {/* <Applied projectId={project.projectId} activeUser={this.props.data.activeUser}/> */}
                </View>
            )

        })

        return (

            <Container style={styles.mainContainer}>
                <Container style={styles.listContainer}>
                    <Text style={styles.title}>DASHBOARD</Text>
                    {latestProjects}
                </Container>
                <Container style={styles.navContainer}>
                    <Footer style={styles.footer}>
                        <FooterTab style={styles.navbar}>
                            <Button onPress={() => { Actions.Projects(); }}>
                                <Icon name="list" style={styles.icon} />
                            </Button>
                            <Button >
                                <Icon name="apps" style={styles.icon} />
                            </Button>
                            <Button onPress={() => { Actions.Profile(); }}>
                                <Icon name="person" style={styles.icon} />
                            </Button>
                        </FooterTab>
                    </Footer>
                </Container>
            </Container>


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