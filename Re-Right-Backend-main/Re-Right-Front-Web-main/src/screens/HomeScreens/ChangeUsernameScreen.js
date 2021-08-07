import React, { useState } from 'react';
import { Platform, Pressable, TouchableWithoutFeedback,Keyboard, View, StyleSheet, Text, SafeAreaView, TextInput, KeyboardAvoidingView, Alert } from 'react-native';
import GetSignUp1Style from '../../../config/SignUp1Css';
import { useDeviceOrientation, useDimensions } from '@react-native-community/hooks';
import colors from '../../../config/colors';

export default function ChangeUserNameScreen() {
    
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
    const [username, setUsername] = useState('');
    const [confirmUsername, setConfirmUsername] = useState('')
    const [password, confirmPassword] = useState('');

    //checking if user exists and showing an error if it does
    const handleUsernameChecks = (username) => {
        const isUsernameInUse = false;
        //query the database to find the username, if it exists set isusernameInUse to true
        return isUsernameInUse;
    }

    const handleContinuePress = () => {
        //checking for empty fields
        const usernameIsInUse = handleUsernameChecks(username);
        if (username==="" || confirmUsername =="" || password==="" ) {
            if (Platform.OS === 'web'){
                alert("Kindly fill all the fields to continue")
            }else {
                Alert.alert(
                    "All fields are compulsory",
                    "Kindly fill all the fields to continue",
                    [
                        {
                            text: "Go Back",
                            onPress: () => console.log(username +confirmUsername + password)
                        }
                    ]
                )
            }
        } else if (usernameIsInUse) {
            if (Platform.OS === 'web'){
                alert("An account is already registered with the same username address")
            }else {
                Alert.alert(
                    "Username Already In Use",
                    "An account is already registered with the same username address",
                    [
                        {
                            text: "Enter username Again",
                            onPress: () => console.log('Used username')
                        }
                    ]
                )
            }
        }else if (username != confirmUsername) {
            if (Platform.OS === 'web'){
                alert("Usernames do not match")
            }else {
                Alert.alert(
                    "Usernames do not match",
                    "Please make sure that the two username fields match",
                    [
                        {
                            text: "Enter username Again",
                            onPress: () => console.log('Usernames Do Not Match')
                        }
                    ]
                )
            }
        }else {
            alert("Username Successfully Updated");
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
                            Change Username
                        </Text>
                    </View>
                    <View styles = { styles.details }>
                        <View>
                            <Text 
                                style={styles.label}>
                                Enter your newly desired Username: 
                            </Text>
                            <TextInput 
                                style={styles.inputText} 
                                onChangeText = { username => setUsername(username) }
                                defaultValue = {username}
                                enablesReturnKeyAutomatically = {true}
                                keyboardType = 'username-address'     // Works on all platforms
                                textContentType = 'usernameAddress'  // Only for iOS
                                autoCompleteType='username'         // Only for Android
                                autoCapitalize='none'           // Works on all platforms
                                returnKeyType="next"
                                // onSubmitEditing={() => { this.secondTextInput.focus() }}
                                placeholder="New Username" />
                        </View>
                        <View>
                            <Text 
                                style={styles.label} >
                                Confirm your new Username: 
                            </Text>
                            <TextInput 
                                style={styles.inputText} 
                                onChangeText = { username => setConfirmUsername(username) }
                                defaultValue = {confirmUsername}
                                enablesReturnKeyAutomatically = {true}
                                keyboardType = 'username-address'     // Works on all platforms
                                textContentType = 'usernameAddress'  // Only for iOS
                                autoCompleteType='username'         // Only for Android
                                autoCapitalize='none'           // Works on all platforms
                                returnKeyType="next"
                                placeholder="Confirm new Username" />
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
                                onChangeText = { username => confirmPassword(username) }
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

