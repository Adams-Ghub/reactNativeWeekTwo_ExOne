import React, {Component} from 'react';

import {TextInput, View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default class LoginScreen extends Component{
    state={username:"",
                password:""}

                // this.handlePasswordChange=this.handlePasswordChange.bind(this),
                // this.handleUsernameChange=this.handleUsernameChange.bind(this)
    
    // handleUsernameChange(e){
    //     this.setstate({username:e.target.value})
    // }

    // handlePasswordChange(e){
    //     this.setstate({password:e.target.value})
    // }
    render(){
       
        return (
            <View style={styles.container}>
                <View style={styles.loginTextcontainer}>
                    <Text style={styles.login}>Log in</Text>
                </View>
                <View style={styles.textInputContainer}>
                    <TextInput style={styles.textInput} 
                        placeholder="Username"
                        placeholderTextColor="#aaaaaa"
    
                        value={this.state.username}
                        // onChangeText={this.handleUsernameChange()}
                        />
                    <TextInput style={styles.textInput} 
                        placeholder="Password"
                        placeholderTextColor="#aaaaaa"
                        secureTextEntry
                        value={this.state.password}
                        // onChangeText={this.handlePasswordChange()} 
                        />
                    <Text style={styles.forgotText}>Forgot password ?</Text>
                </View>

                <View>
                    <TouchableOpacity /*onClick={}*/ style={styles.buttonContainer}>
                        <Text style={styles.buttonText}>Login</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.signupContainer} >
                    <Text style={styles.dontHaveText}>Don't have an account ?</Text>
                    <Text style={styles.signupText}>Signup</Text>
                </View>
            </View>
        );
    }

   
};

const styles = StyleSheet.create({
    container:{
        marginHorizontal:50,
    },
    login:{
        fontSize:70,
        color:"#5100ad"
    },
    loginTextcontainer:{
        marginBottom:50,
    },
    textInput:{
        fontSize:25,
        borderColor:"#5100ad",
        borderBottomWidth:3,
        paddingTop:30,
        paddingBottom:15
    },
    textInputContainer:{
        marginVertical:30,
    },
    forgotText:{
        textAlign:"right",
        paddingVertical:4,
        fontSize:17,
        color:"#41A7CC"
    },
    buttonContainer:{
        backgroundColor:"#5100ad",
        height:50,
        borderRadius:10,
        justifyContent:"center",
        alignItems:"center",
        marginVertical:40,

    },
    buttonText:{
        color:"white",
        fontSize:20,
        fontWeight:"bold"
    },
    signupContainer:{
        flexDirection:"row",
        justifyContent:"center"

    },
    dontHaveText:{
        paddingRight:15,
        fontSize:16
    },
    signupText:{
        color:"#5100ad",
        fontSize:16
    }
})
