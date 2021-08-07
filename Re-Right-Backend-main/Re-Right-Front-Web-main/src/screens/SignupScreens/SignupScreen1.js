import React, { useState } from 'react';
import colors from '../../../config/colors';
import { Platform, Form, Pressable, TouchableWithoutFeedback,Keyboard, View, StyleSheet, Text, Button, SafeAreaView, TextInput, KeyboardAvoidingView, Alert } from 'react-native';
import GetSignUp1Style from '../../../config/SignUp1Css';
import KeyboardViewStyles from '../styles/KeyboardViewStyles';
import { useDeviceOrientation, useDimensions } from '@react-native-community/hooks';

export default function SignupScreen1({navigation}) {
    
    const { landscape } = useDeviceOrientation();
    const {width, height} = useDimensions().window;
    //styles are in a sperate folder 
    const [styles,setStyles] = useState(StyleSheet.create( 
        GetSignUp1Style(landscape, width, height) 
    ));

    if (landscape || width > height ){
        () => {
        setStyles(StyleSheet.create( 
            GetSignUp1Style(landscape, width, height) 
        ))
    }} 
    //setting up the user input variables
    const [email, setEmail] = useState('');
    const [username, setUSername] = useState('');
    const [dob, setDob] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('')
    //checking if user exists and showing an error if it does
    const handleEmailChecks = (email) => {
        const isEmailInUse = false;
        //query the database to find the email, if it exists set isEmailInUse to true
        return isEmailInUse;
    }
    const handleUsernameChecks = (username) => {
        const isUsernameInUse = false;
        //query the database to find if the username is in use
        return isUsernameInUse;
    }
    //
    const handleContinuePress = () => {
        //checking for empty fields
        const emailIsInUse = handleEmailChecks(email);
        const usernameIsInUse = handleUsernameChecks(username);
        if (email==="" || username==="" || password==="" || dob === "" || confirmPassword === "") {
            if (Platform.OS === 'web'){
                alert("Kindly fill all the fields to continue")
            }else {
                Alert.alert(
                    "All fields are compulsory",
                    "Kindly fill all the fields to continue",
                    [
                        {
                            text: "Go Back",
                            onPress: () => console.log(email + password + dob +confirmPassword + username)
                        }
                    ]
                )
            }
        } else if (emailIsInUse) {
            if (Platform.OS === 'web'){
                alert("An account is already registered with the same email address")
            }else {
                Alert.alert(
                    "Email Already In Use",
                    "An account is already registered with the same email address",
                    [
                        {
                            text: "Enter Email Again",
                            onPress: () => console.log('Used Email')
                        }
                    ]
                )
            }
        }else if (usernameIsInUse) {
            //Set up with backend database
            if (Platform.OS === 'web'){
                alert("This username has already been used by someone else")
            }else {
                Alert.alert(
                "Invalid Username",
                "This username has already been used by someone else ",
                    [
                        {
                            text: "Set a new username",
                            onPress: () => console.log('Used Username')
                        }
                    ]
                )
            }
        }else if (confirmPassword!=password){
            if (Platform.OS === 'web'){
                alert("Passwords Don't Match")
            }else {
                Alert.alert(
                    "Passwords Don't Match",
                    "Kindly ensure that your passwords match",
                    [
                        {
                            text: "Edit Password",
                            onPress: () => console.log('Password error')
                        }
                    ]
                )
            }
        }else if (password.length<8){
            if (Platform.OS === 'web'){
                alert("Please make sure that the password has atleast 8 characters")
            }else {
                Alert.alert(
                    "Passwords Too Short",
                    "Please make sure that the password has atleast 8 characters",
                    [
                        {
                            text: "Edit Password",
                            onPress: () => console.log('Password error')
                        }
                    ]
                )
            }
        }else {
            navigation.navigate("Signup 2");
        }
    }

    return (
        <KeyboardAvoidingView style={styles.screenBackground}>
            {/*  Wrapping the code with TouchableWithoutFeedback dismisses the keyboard when the user taps out of the input box*/}
            <TouchableWithoutFeedback onPress={ Keyboard.dismiss}>
                <SafeAreaView style = { styles.container} > 
                    <View style = {styles.header}>
                        <Text 
                            style = {styles.headerTitle}>
                            Getting Started
                        </Text>
                        <Text 
                            style = {styles.headerText} >
                            Welcome to Re-Right. Create a free account to access all of the amazing features this app has :)
                        </Text>
                        <Text 
                            style = {styles.linkText} 
                            onPress={() => navigation.navigate("Login")} >
                            Already have an account?
                        </Text>
                    </View>
                    <View styles = { styles.details }>
                        <View>
                            <Text 
                                style={styles.label}>
                                Email: 
                            </Text>
                            <TextInput 
                                style={styles.inputText} 
                                onChangeText = { email => setEmail(email) }
                                defaultValue = {email}
                                enablesReturnKeyAutomatically = {true}
                                keyboardType = 'email-address'     // Works on all platforms
                                textContentType = 'emailAddress'  // Only for iOS
                                autoCompleteType='email'         // Only for Android
                                autoCapitalize='none'           // Works on all platforms
                                returnKeyType="next"
                                // onSubmitEditing={() => { this.secondTextInput.focus() }}
                                placeholder="Enter Your Email ID" />
                        </View>
                        <View>
                            <Text 
                                style={styles.label} >
                                Username: 
                            </Text>
                            <TextInput 
                                enablesReturnKeyAutomatically = {true}
                                returnKeyType="next"
                                onChangeText = { username => setUSername(username) }
                                defaultValue = {username}
                                style={styles.inputText} 
                                textContentType='username'   // Only for iOS
                                autoCompleteType="username" // Only for Android
                                
                                autoCapitalize='none'
                                placeholder="Create a Username" />
                        </View>
                        <View>
                            <Text 
                                enablesReturnKeyAutomatically = {true}
                                style={styles.label}>
                                Date of Birth: 
                                </Text>
                            <TextInput 
                                onChangeText = { dob => setDob(dob) }
                                returnKeyType="next"
                                defaultValue = {dob}
                                style={styles.inputText} 
                                placeholder="Date of Birth" />
                        </View>
                    </View>
                    <View styles = { styles.password }>
                        <View>
                            <Text 
                                style={styles.label}>
                                Password: 
                            </Text>
                            <TextInput 
                                enablesReturnKeyAutomatically = {true}
                                secureTextEntry={true} 
                                returnKeyType="next"
                                onChangeText = { password => setPassword(password) }
                                defaultValue = {password}
                                textContentType = "newPassword" 
                                autoCompleteType='password' 
                                style={styles.inputText} 
                                placeholder="Create a Password" 
                                autoCapitalize='none'/>
                        </View>
                        <View>
                            <Text 
                                style={styles.label}>
                                Confirm Password: 
                            </Text>
                            <TextInput 
                                enablesReturnKeyAutomatically = {true}
                                secureTextEntry={true} 
                                returnKeyType= "done"
                                onChangeText = { confirmPassword => setConfirmPassword(confirmPassword) }
                                defaultValue = {confirmPassword}
                                textContentType = "newPassword" 
                                autoCompleteType='password' 
                                autoCapitalize='none'
                                style={styles.inputText} 
                                onSubmitEditing = { handleContinuePress} 
                                placeholder="Confirm your Password"/>
                        </View>
                    </View>
                </SafeAreaView>
            </TouchableWithoutFeedback>
            <Pressable style={({pressed}) => [{
                backgroundColor: pressed ? colors.button_pressed : colors.button_continue,},
                styles.continueButton,]}
                onPress={() => handleContinuePress()}>
                <Text style={styles.buttonText}>Continue</Text>
            </Pressable>
        </KeyboardAvoidingView>
    );
    
}

