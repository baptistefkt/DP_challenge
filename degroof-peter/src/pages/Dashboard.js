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
            //  <View>
            //      {latestProjects}
            //     <Button
            //         title='Go Back'
            //         onPress={() => { Actions.pop(); }}>
            //         <Text>Goto back</Text>
            //     </Button>
            //     <Text>
            //         This is Dashboard page.
            //     </Text>
            //     <Button
            //         title='Go to Projects'
            //         onPress={() => { Actions.Projects(); }}>
            //         <Text>Goto Projects page</Text>
            //     </Button>
            //     <Button
            //         title='Go to Profile'
            //         onPress={() => { Actions.Profile(); }}>
            //         <Text>Goto Profile</Text>
            //     </Button>

            <Container style={styles.container}>
                {latestProjects}
                <Footer style={styles.footer}>
                    <FooterTab style={styles.navbar}>
                        <Button >
                            <Icon name="apps" style={styles.icon} />
                        </Button>
                        <Button onPress={() => { Actions.Projects(); }}>
                            <Icon name="list" style={styles.icon} />
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