import React, {Component} from 'react';
import { View, Text, Button} from 'react-native';


export default class ButtonHome extends Component {
    render() {
        return (
<Button
  title="Go to Projects"
  onPress={() => { Actions.pop(); }}
  style={{
    height: 60,
    margin: 10,
    paddingTop: 5,
    paddingBottom: 5,
    width: '40%',
    alignSelf: 'center',
    marginTop: 50,
    backgroundColor: '#4DE6A1',
    fontSize: 20,
    color: 'white'
  }}>

</Button>
);
}
}
