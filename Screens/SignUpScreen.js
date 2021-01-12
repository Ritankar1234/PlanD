import React from 'react'
import {Text, TouchableOpacity, View, Image, ImageBackground, StyleSheet, TextInput, Modal, Alert, ScrollView} from 'react-native'
import { RFValue } from "react-native-responsive-fontsize";

export default class SignUpScreen extends React.Component{
    constructor() {
        super();
        this.state = {
            emailId: "",
      password: "",
      firstName: "",
      lastName: "",
      address: "",
      contact: "",
      confirmPassword: "",
      isModalVisible: "false"
          };
        }
        userSignUp = (emailId, password, confirmPassword) => {
            if (password !== confirmPassword) {
              return Alert.alert("password doesn't match\Check your password.");
            } else {
              firebase
                .auth()
                .createUserWithEmailAndPassword(emailId, password)
                .then(() => {
                  db.collection("users").add({
                    first_name: this.state.firstName,
                    last_name: this.state.lastName,
                    contact: this.state.contact,
                    email_id: this.state.emailId,
                    address: this.state.address,
                    IsBookRequestActive: false,
                  });
                  return Alert.alert("User Added Successfully", "", [
                    {
                      text: "OK",
                      onPress: () => this.setState({ isModalVisible: false }),
                    },
                  ]);
                })
                .catch((error) => {
                  // Handle Errors here.
                  var errorCode = error.code;
                  var errorMessage = error.message;
                  return Alert.alert(errorMessage);
                });
            }
          };

    render(){
        
        return(
            <ImageBackground style={{justifyContent: 'center', alignItems: 'center', flex: 1, resizeMode:'cover'}} source={require('../assets/signUpPic.jpg')}>
            <ScrollView style={styles.scrollview}>
          <View style={styles.signupView}>
            <Text style={styles.signupText}> SIGN UP </Text>
          </View>
              <View style={{flex:0.95}}>
                  <Text style={styles.label}>First Name </Text>
                  <TextInput
                    style={styles.formInput}
                    placeholder={"First Name"}
                    maxLength={12}
                    onChangeText={(text) => {
                      this.setState({
                        firstName: text,
                      });
                    }}
                  />

                  <Text style={styles.label}>Last Name </Text>
                  <TextInput
                    style={styles.formInput}
                    placeholder={"Last Name"}
                    maxLength={12}
                    onChangeText={(text) => {
                      this.setState({
                        lastName: text,
                      });
                    }}
                  />

                  <Text style={styles.label}>Contact </Text>
                  <TextInput
                    style={styles.formInput}
                    placeholder={"Contact"}
                    maxLength={10}
                    keyboardType={"numeric"}
                    onChangeText={(text) => {
                      this.setState({
                        contact: text,
                      });
                    }}
                  />

                  <Text style={styles.label}> Address </Text>
                  <TextInput
                    style={styles.formInput}
                    placeholder={"Address"}
                    multiline={true}
                    onChangeText={(text) => {
                      this.setState({
                        address: text,
                      });
                    }}
                  />

                  <Text style={styles.label}>Email </Text>
                  <TextInput
                    style={styles.formInput}
                    placeholder={"Email"}
                    keyboardType={"email-address"}
                    onChangeText={(text) => {
                      this.setState({
                        emailId: text,
                      });
                    }}
                  />

                  <Text style={styles.label}> Password </Text>
                  <TextInput
                    style={styles.formInput}
                    placeholder={"Password"}
                    secureTextEntry={true}
                    onChangeText={(text) => {
                      this.setState({
                        password: text,
                      });
                    }}
                  />

                  <Text style={styles.label}>Confirm Password</Text>
                  <TextInput
                    style={styles.formInput}
                    placeholder={"Confrim Password"}
                    secureTextEntry={true}
                    onChangeText={(text) => {
                      this.setState({
                        confirmPassword: text,
                      });
                    }}
                  />
              </View>

            <View style={{flex:0.2,alignItems:'center'}}>
              <TouchableOpacity
                style={styles.registerButton}
                onPress={() =>
                  this.userSignUp(
                    this.state.emailId,
                    this.state.password,
                    this.state.confirmPassword
                  )
                }
              >
                <Text style={styles.registerButtonText}>Register</Text>
              </TouchableOpacity>
              <Text
               style={styles.cancelButtonText}
               onPress={() => {
                 this.setState({ isModalVisible: false });
               }}
              >
              Cancel
              </Text>
              <TouchableOpacity style={styles.button} onPress={()=>{this.props.navigation.navigate('LogIn')}}>
                    <Text> LogIn </Text>
                  </TouchableOpacity>
            </View>
        </ScrollView>
        </ImageBackground>
    );
  };
  }
const styles=StyleSheet.create({
    registerButtonText: {
        fontSize: RFValue(23),
        fontWeight: "bold",
        color: "#fff",
      },
      cancelButtonText:{
        fontSize : RFValue(20),
        fontWeight:'bold',
        color: "#32867d",
        marginTop:RFValue(10)
      }, 
      scrollview:{
        flex: 1,
        backgroundColor: "#fff"
      },
      signupView:{
        flex:0.05,
        justifyContent:'center',
        alignItems:'center'
    },
    signupText:{
      fontSize:RFValue(20),
      fontWeight:"bold",
      color:"#32867d"
    },
    label:{
        fontSize:RFValue(13),
        color:"#717D7E",
        fontWeight:'bold',
        paddingLeft:RFValue(10),
        marginLeft:RFValue(20)
      },
      formInput: {
        width: "90%",
        height: RFValue(45),
        padding: RFValue(10),
        borderWidth:1,
        borderRadius:2,
        borderColor:"grey",
        paddingBottom:RFValue(10),
        marginLeft:RFValue(20),
        marginBottom:RFValue(14)
      },
      registerButton: {
        width: "75%",
        height: RFValue(50),
        marginTop:RFValue(20),
        justifyContent: "center",
        alignItems: "center",
        borderRadius: RFValue(3),
        backgroundColor: "#32867d",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 8,
        },
        shadowOpacity: 0.44,
        shadowRadius: 10.32,
        elevation: 16,
        marginTop: RFValue(10),
      }
})