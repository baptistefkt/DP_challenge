import React, {Component} from 'react';
import {View, Text,} from 'react-native';


class Applied extends React.Component{
 
    render(){
        let userApps = this.props.activeUser.applications;
        //let checkApply=userApps.some((appl)=>{return appl=this.props.projectId});
        //let projectApplied=checkApply? "you have appplied for this project" : "";

        return (
            <View>
                <Text>
                    
                 {/* {this.props.activeUser.applications}
                 {this.props.projectId}
                 {checkApply}   
                 {projectApplied} */}
                </Text>
            </View>
        )
   
    }

}

export default Applied;
