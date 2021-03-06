import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Router, Scene } from 'react-native-router-flux';
import Login from './src/pages/Login';
import Dashboard from './src/pages/Dashboard';
import Projects from './src/pages/Projects';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state={
        activeUser:{},
        users:[
            {
                userId:1,
                firstName:"Jean-Michel",
                lastName: "React",
                city: "Bruxelles",
                zipCode:1130,
                phone:"0477123456",
                totalHours:12,
                skills:["accounting", "finances"],
                applications:[],
                selections:[],
                login:"",
                pwd:"",
            },
            {
                userId:2,
                firstName:"Odile",
                lastName: "Deray",
                city: "Charleroi",
                zipCode: 7000,
                phone:"0477456754",
                totalHours:12,
                skills:["IT", "finances"],
                applications:[],
                selections:[],
                login:"",
                pwd:"",
            }
        ],
        projects:[
            {
                projectId:1,
                projectName:"Loupiote",
                projectRegion:"Bruxelles",
                fields:["education","social"],
                skillsNeeded:["IT", "accounting"],
                hoursNeeded:15,
                type:"coaching",
                mission:"Mise à jour du site Internet et révision de la compta pour soumission au pouvoir subsidiant ",
            },
            {
                projectId:2,
                projectName:"Carabistouille",
                projectRegion:"Hainaut",
                fields:["social"],
                skillsNeeded:["accounting"],
                hoursNeeded:15,
                type:"mentoring",
                mission:"Révision du budget pour demande de subside européen ",
            }
        ],
        fields:[
            "education",
            "social",
            "environnement",
            "entrepreneurship",
        ],
        skills:[
            "accounting",
            "IT",
            "HR",
            "finances"
        ]
      }
  }
  login =() =>{
    let newActiveUser=this.props.
    this.setState({
      activeUser:newActiveUser
    })
  }

  activeUser(user){
    this.setState({activeUser: user})
  }

  render() {
    return (
      <Router hideNavBar="true">
        <Scene key="root">
          <Scene key="Login" component={Login} title="Login" initial={true} data={this.state} />
          <Scene key="Dashboard" component={Dashboard} title="Dashboard" data={this.state}/>
          <Scene key="Projects" component={Projects} title="Projects" data={this.state}/>
          <Scene key="Profile" component={Projects} title="Profile" />

        </Scene>
      </Router>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
