
import React, {Component} from 'react';
import LoginScreen from './LoginScreen';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends Component{
  constructor(props){
  super(props)
  this.state={email:"",
              password:"",
              name:[]
      }
  }
  render(){
    return (
      <View style={styles.container}>
        <LoginScreen />
      </View>
    );
  };
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginHorizontal:5,
    marginTop:120
    // justifyContent: 'center',
  },
});

