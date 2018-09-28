import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Container, Footer, FooterTab, Button, Left, Right, Icon } from 'native-base';

class Projects extends Component {

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
            <Container style={styles.container}>
                {latestProjects}
                <Footer style={styles.footer}>
                    <FooterTab style={styles.navbar}>
                        <Button onPress={() => { Actions.Projects(); }}>
                            <Icon name="list" style={styles.icon} />
                        </Button>
                        <Button onPress={() => { Actions.Dashboard(); }}>
                            <Icon name="apps" style={styles.icon} />
                        </Button>
                        <Button onPress={() => { Actions.Profile(); }}>
                            <Icon name="person" style={styles.icon} />
                        </Button>
                    </FooterTab>
                </Footer>
            </Container>
        );
    }
}

export default Projects;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-end'
    },

    footer: {

    },

    navbar: {
        backgroundColor: 'white',
    },

    icon: {
        color: '#4DE6A1'
    }
})