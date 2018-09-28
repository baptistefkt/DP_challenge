import React, {Component} from 'react';
import {View, Text,} from 'react-native';


class Applied extends React.Component{
    constructor(props){
        super(props);
        this.appStatus="";
    }
 
    
    
    displayApplication=(applications)=>{
        if (applications.length==0){
            return this.appStatus="";
        }
        else {
            return this.appStatus = "You have applied for this project";
        }
    }

    render(){

        let appliedProjects=this.props.activeUser.applications.map((applied)=>{
            return (
                applied=this.props.projectId
            )
        })

        return (
            <View>
            <Text>
                {this.displayAppplication.bind(this, appliedProjects)}
            </Text>
        </View>
        )
   
    }

}

export default Applied;
