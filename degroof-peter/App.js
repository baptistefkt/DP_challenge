import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Router, Scene, Actions } from 'react-native-router-flux';
import Login from './src/pages/Login';
import Dashboard from './src/pages/Dashboard';
import Projects from './src/pages/Projects';
import Profile from './src/pages/Profile';

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
                login:"jean",
                pwd:"Aaa",
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
                applications:[1],
                selections:[],
                login:"odile.deray@gmail.com",
                pwd:"odilederay",
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

  activeUser(user){
    Actions.Projects();
    this.setState({activeUser: user})
  }

  render() {
    return (
      <Router>
        <Scene key="root">
          <Scene key="Login" component={Login} title="Login" titleStyle = {{color: "#4FBC83"}} initial={true} />
          <Scene key="Dashboard" component={Dashboard} title="Dashboard" titleStyle = {{color: "#4FBC83"}}/>
          <Scene key="Projects" component={Projects} title="Projects" titleStyle = {{color: "#4FBC83"}}/>
          <Scene key="Profile" component={Projects} title="Profile" titleStyle = {{color: "#4FBC83"}}/>
        </Scene>
      </Router>
    );
  }
}