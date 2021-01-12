import React from 'react'
import {Text, TouchableOpacity, View, Image, ImageBackground} from 'react-native'

export default class WelcomeScreen extends React.Component{
    render(){
        return(
            
                <ImageBackground style={{justifyContent: 'center', alignItems: 'center', flex: 1, resizeMode:'cover'}} source={require('../assets/BackgroundWelcome.png')}>
                <Text style={{fontWeight:'bold', fontFamily:'Arial, Helvetica, sans-serif', fontSize:30, marginTop:50, color:'red'}}> 
                    PLAN D 
                </Text>
                <Text style={{fontFamily:'Arial, Helvetica, sans-serif', fontSize:20, marginTop:70, color:'cyan'}}>
                    All cooking solutions in just one app; That's our PlanD 
                </Text>
                <TouchableOpacity style={{width: "80%", height:50, justifyContent: "center", alignItems: "center", borderRadius:25, backgroundColor: 'orange', shadowColor: "#000", marginTop:200, marginBottom:200, shadowOffset: {width: 0, height: 8}, shadowOpacity: 0.3, shadowRadius: 10.32, elevation: 16}} onPress={()=>{this.props.navigation.navigate("LogIn")}}>
                    <Text style={{fontWeight:'bold', color:'white', fontSize:25}}>
                        Get Started
                    </Text>


                </TouchableOpacity>
                </ImageBackground>
                
        )
    }
}