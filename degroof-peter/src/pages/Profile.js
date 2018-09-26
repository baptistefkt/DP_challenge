import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, Button, TouchableHighlight } from 'react-native';
import {Input} from '../components/Input';
import {ButtonHome} from '../components/ButtonHome';
import { Actions } from 'react-native-router-flux';

class Profile extends Component {

    render() {
        return (
<<<<<<< HEAD:degroof-peter/src/pages/Homescreen.js
          <View style={{backgroundColor: 'white', paddingBottom: 120}}>
            <Image source={require('../assets/dp.png')}
            style={{width: 300, height: 150, resizeMode: 'contain', alignSelf: 'center'
            }}/>

            <Text
              style={{
                fontWeight: '600',
                fontSize: 30,
                alignSelf: 'center',
                color: '#4DE6A1',
                textAlign: 'center',
                marginBottom: '10%',
                marginTop: '10%'
              }}
            >
              {'Sign In'}
            </Text>
            <Text style={{alignSelf: 'center'}}>
              Email
            </Text>
            <Input 
              placeholder='john@example.com'
            />
            <Text style={{alignSelf: 'center'}}>
              Password
            </Text>
            <Input
              placeholder='password'
            />
            <TouchableHighlight
                style ={{
                    height: 40,
                    width:160,
                    borderRadius:10,
                    backgroundColor : "#4DE6A1",
                    marginLeft :50,
                    marginRight:50,
                    marginTop: 50,
                    alignSelf: 'center'
                }}>
            <Button
              title="Go to Projects"
              onPress={() => { Actions.pop(); }}
              color='white'
            />
            </TouchableHighlight>
            <View
                style={{
                  borderBottomColor: 'grey',
                  borderBottomWidth: 1,
                  marginTop: 20,
                  width: 300,
                  alignSelf: 'center'
                }}
              >
              </View>
          </View>

        );
    }
}
=======
            <View>
                <Button
                    title='Go Back'
                    onPress={() => { Actions.pop(); }}>
                    <Text>Goto back</Text>
                </Button>
                <Text>
                    This is Profile page.
                </Text>


            </View>
        );
    }
}

export default Profile;
>>>>>>> 50ac4a9cc3cdce3390656ffd683773ce744dde1f:degroof-peter/src/pages/Profile.js
