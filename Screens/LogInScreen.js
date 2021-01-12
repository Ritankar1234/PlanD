import React from 'react'
import {Text, TouchableOpacity, View, Image, ImageBackground, StyleSheet, TextInput} from 'react-native'
import { RFValue } from "react-native-responsive-fontsize";
import firebase from 'firebase';

export default class LogInScreen extends React.Component{
    constructor() {
        super();
        this.state = {
            emailId: "",
            password: ""
            
          };
        }
        userLogin = (emailId, password) => {
            firebase
              .auth()
              .signInWithEmailAndPassword(emailId, password)
              .then(() => {
                //this.props.navigation.navigate("DonateBooks");
                return Alert.alert("User logged in successfully")
              })
              .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                return Alert.alert(errorMessage);
              });
          };
        
          render() {
            return (
              <View style={styles.container}>
                
                <View style={{ flex: 0.45 }}>
        
                  <View style={styles.TextInput}>
                  <Text style={styles.buttonText}>Login</Text>
                  <TextInput
                    style={styles.loginBox}
                    placeholder="abc@example.com"
                    placeholderTextColor="gray"
                    keyboardType="email-address"
                    onChangeText={(text) => {
                      this.setState({
                        emailId: text,
                      });
                    }}
                  />
                  <TextInput
                    style={[styles.loginBox,{marginTop:RFValue(15)}]}
                    secureTextEntry={true}
                    placeholder="Enter Password"
                    placeholderTextColor="gray"
                    onChangeText={(text) => {
                      this.setState({
                        password: text,
                      });
                    }}
                  />
                  </View>
                  <View style={{flex:0.5,  alignItems:"center",}}>
                  <TouchableOpacity
                    style={styles.button}
                    onPress={() => {
                      this.userLogin(this.state.emailId, this.state.password);  
                    }}
                  >
                    <Text style={styles.buttonText}>Login</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.button} onPress={()=>{this.props.navigation.navigate('SignUpScreen')}}>
                    <Text> SignUp </Text>
                  </TouchableOpacity>
        
                  
        
                  </View>
                </View>
        
                
              </View>
            );
          }
        
}
const styles=StyleSheet.create({
    loginBox: {
        width: "80%",
        height: RFValue(50),
        borderWidth: 1.5,
        borderColor: "#ffffff",
        fontSize: RFValue(20),
        paddingLeft: RFValue(10),
      },
      TextInput:{
        flex:0.5,
        alignItems:"center",
        justifyContent:"center"
      },
      button: {
        width: "80%",
        height: RFValue(50),
        justifyContent: "center",
        alignItems: "center",
        borderRadius: RFValue(25),
        backgroundColor: "#ffff",
        shadowColor: "#000",
        marginBottom:RFValue(10),
        shadowOffset: {
          width: 0,
          height: 8,
        },
        shadowOpacity: 0.3,
        shadowRadius: 10.32,
        elevation: 16,
      }
})