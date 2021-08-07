import React, { useState } from 'react';
import colors from '../../../config/colors';
import { Platform, Form, Pressable, TouchableWithoutFeedback,Keyboard, View, StyleSheet, Text, Button, SafeAreaView, TextInput, KeyboardAvoidingView, Alert } from 'react-native';
import GetSignUp1Style from '../../../config/SignUp1Css';
import KeyboardViewStyles from '../styles/KeyboardViewStyles';
import { useDeviceOrientation, useDimensions } from '@react-native-community/hooks';

export default function SignupScreen1() {
    
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
    const [confirmEmail, setConfirmEmail] = useState('');
    const [password, confirmPassword] = useState('');

    //checking if user exists and showing an error if it does
    const handleEmailChecks = (email) => {
        const isEmailInUse = false;
        //query the database to find the email, if it exists set isEmailInUse to true
        return isEmailInUse;
    }

    const handleContinuePress = () => {
        //checking for empty fields
        const emailIsInUse = handleEmailChecks(email);
        if (email==="" || confirmEmail =="" || password==="" ) {
            if (Platform.OS === 'web'){
                alert("Kindly fill all the fields to continue")
            }else {
                Alert.alert(
                    "All fields are compulsory",
                    "Kindly fill all the fields to continue",
                    [
                        {
                            text: "Go Back",
                            onPress: () => console.log(email +confirmEmail + password)
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
        }else if (email != confirmEmail) {
            if (Platform.OS === 'web'){
                alert("An account is already registered with the same email address")
            }else {
                Alert.alert(
                    "Emails do not match",
                    "Please make sure that the two email fields match",
                    [
                        {
                            text: "Enter Email Again",
                            onPress: () => console.log('Used Email')
                        }
                    ]
                )
            }
        }else {
            alert("Email Successfully Updated");
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
                            Change Email
                        </Text>
                    </View>
                    <View styles = { styles.details }>
                        <View>
                            <Text 
                                style={styles.label}>
                                Enter your newly desired Email: 
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
                                placeholder="New Email" />
                        </View>
                        <View>
                            <Text 
                                style={styles.label} >
                                Confirm your new Email: 
                            </Text>
                            <TextInput 
                                style={styles.inputText} 
                                onChangeText = { email => setConfirmEmail(email) }
                                defaultValue = {confirmEmail}
                                enablesReturnKeyAutomatically = {true}
                                keyboardType = 'email-address'     // Works on all platforms
                                textContentType = 'emailAddress'  // Only for iOS
                                autoCompleteType='email'         // Only for Android
                                autoCapitalize='none'           // Works on all platforms
                                returnKeyType="next"
                                placeholder="Confirm new Email" />
                        </View>
                    </View>
                    <View styles = { styles.password }>
                        <View>
                            <Text 
                                style={styles.label}>
                                Enter Password to ensure changes: 
                            </Text>
                            <TextInput 
                                enablesReturnKeyAutomatically = {true}
                                secureTextEntry={true} 
                                onChangeText = { email => confirmPassword(email) }
                                returnKeyType="next"
                                defaultValue = {password}
                                textContentType = "newPassword" 
                                autoCompleteType='password' 
                                style={styles.inputText} 
                                placeholder="Password" 
                                autoCapitalize='none'/>
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

