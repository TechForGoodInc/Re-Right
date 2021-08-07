import React, { useState } from 'react';
import colors from '../../../config/colors';
import { Platform, Pressable, TouchableWithoutFeedback,Keyboard, View, StyleSheet, Text, SafeAreaView, TextInput, KeyboardAvoidingView, Alert } from 'react-native';
import GetSignUp1Style from '../../../config/SignUp1Css';
import { useDeviceOrientation, useDimensions } from '@react-native-community/hooks';

export default function ChangePasswordScreen() {
    
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
    const [newPassword, setNewPassword] = useState('');
    const [confirmNewPassword, setConfirmNewPassword] = useState('')
    const [password, confirmPassword] = useState('');

    //checking if user exists and showing an error if it does
    const handleNewPasswordChecks = (newPassword) => {
        const isNewPasswordInUse = false;
        //query the database to find the newPassword, if it exists set isnewPasswordInUse to true
        return isNewPasswordInUse;
    }

    const handleContinuePress = () => {
        //checking for empty fields
        const newPasswordIsInUse = handleNewPasswordChecks(newPassword);
        if (newPassword==="" || confirmNewPassword =="" || password==="" ) {
            if (Platform.OS === 'web'){
                alert("Kindly fill all the fields to continue")
            }else {
                Alert.alert(
                    "All fields are compulsory",
                    "Kindly fill all the fields to continue",
                    [
                        {
                            text: "Go Back",
                            onPress: () => console.log(newPassword +confirmNewPassword + password)
                        }
                    ]
                )
            }
        }else if (newPassword != confirmNewPassword) {
            if (Platform.OS === 'web'){
                alert("Passwords do not match")
            }else {
                Alert.alert(
                    "Passwords do not match",
                    "Please make sure that the two Password fields match",
                    [
                        {
                            text: "Enter Password Again",
                            onPress: () => console.log('Passwords Do Not Match')
                        }
                    ]
                )
            }
        }else {
            alert("Password Successfully Updated");
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
                            Change Password
                        </Text>
                    </View>
                    <View styles = { styles.details }>
                        <View>
                            <Text 
                                style={styles.label}>
                                Enter your newly desired Password: 
                            </Text>
                            <TextInput 
                                style={styles.inputText} 
                                onChangeText = { newPassword => setNewPassword(newPassword) }
                                defaultValue = {newPassword}
                                enablesReturnKeyAutomatically = {true}
                                keyboardType = 'newPassword-address'     // Works on all platforms
                                textContentType = 'newPasswordAddress'  // Only for iOS
                                autoCompleteType='newPassword'         // Only for Android
                                autoCapitalize='none'           // Works on all platforms
                                returnKeyType="next"
                                // onSubmitEditing={() => { this.secondTextInput.focus() }}
                                placeholder="New Password" />
                        </View>
                        <View>
                            <Text 
                                style={styles.label} >
                                Confirm your new Password: 
                            </Text>
                            <TextInput 
                                style={styles.inputText} 
                                onChangeText = { newPassword => setConfirmNewPassword(newPassword) }
                                defaultValue = {confirmNewPassword}
                                enablesReturnKeyAutomatically = {true}
                                keyboardType = 'newPassword-address'     // Works on all platforms
                                textContentType = 'newPasswordAddress'  // Only for iOS
                                autoCompleteType='newPassword'         // Only for Android
                                autoCapitalize='none'           // Works on all platforms
                                returnKeyType="next"
                                placeholder="Confirm new Password" />
                        </View>
                    </View>
                    <View styles = { styles.password }>
                        <View>
                            <Text 
                                style={styles.label}>
                                Enter Previous Password to ensure changes: 
                            </Text>
                            <TextInput 
                                enablesReturnKeyAutomatically = {true}
                                secureTextEntry={true} 
                                onChangeText = { newPassword => confirmPassword(newPassword) }
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

