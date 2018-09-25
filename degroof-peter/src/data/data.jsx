import React, {Component} from 'react';

class Data extends Component{
    constructor(props) {
        super(props);
        this.state={
            users:[
                {
                    userId:1,
                    firstName:"Jean-Michel",
                    lastName: "React",
                    city: "Bruxelles",
                    zipCode:1130,
                    phone:0477123456,
                    totalHours:12,
                    skills:["accounting", "finances"],
                },
                {
                    userId:2,
                    firstName:"Odile",
                    lastName: "Deray",
                    city: "Charleroi",
                    zipCode: 7000,
                    phone:0477456754,
                    totalHours:12,
                    skills:["IT", "finances"],
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
    

}