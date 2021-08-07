import React, { Component } from 'react';
import { Pressable, TouchableWithoutFeedback,Keyboard, View, StyleSheet, Text, Button, SafeAreaView, TextInput } from 'react-native';
import { useDeviceOrientation, useDimensions } from '@react-native-community/hooks';

import '../../../config/global';
import color from '../../../config/colors';
import darkColors from '../../../config/darkColors';

const viewConstants = {
    containerTopMargin: '10%',
    containerBottomMargin: '16%',
    containerHorizontalMargins: '7%',
    headingFontSize: 34,
    headingFontSizeLandscape: 50,
    headerBottomMargin: 18,
    textSize: 15,
    textSizeLandscape: 18,
    headerTextLandscapePadding: 80,
    labelPadding: 10,
    textBoxBorderWidth: 2,
    textBoxBorderRadius: 10,
    textBoxPadding: 10
}

const SignupScreen2 = ({navigation}) => {
    const colors = global.isDarkModeEnabled ? darkColors : color;
    //getting the dimensions and the orientation
    const { landscape, portrait } = useDeviceOrientation();
    const {width, height} = useDimensions().window;
    //styles are here
    const styles = StyleSheet.create( {
        container: {
            marginHorizontal: viewConstants.containerHorizontalMargins,
            flex: 1,
            justifyContent: 'center',
            flexDirection: ( landscape|| width>height)? 'row' : null,
        },
        header: {
           marginBottom: viewConstants.headerBottomMargin,
           flex: (landscape|| width>height) ? 1 : 0,
           flexDirection: 'column',
           width: ( landscape|| width>height) ? '50%' : '100%',
        },
        headerTitle: {
            fontWeight: '800',
            fontSize: ( landscape|| width>height) ? viewConstants.headingFontSizeLandscape: viewConstants.headingFontSize,
            color: colors.text_screen_header,
            paddingVertical: ( landscape|| width>height) ? 0 : '3%',
            paddingTop: ( landscape|| width>height) ? '5%' : 0
        },
        headerText: {
            fontSize: ( landscape|| width>height) ? viewConstants.textSizeLandscape : viewConstants.textSize,
            marginEnd: ( landscape|| width>height) ? viewConstants.headerTextLandscapePadding: 0,
            paddingTop: ( landscape|| width>height) ? '5%' : 0,
            color: colors.text_general
        },
        linkText: {
            textDecorationLine: 'underline',
            paddingVertical: '3%',
            fontSize: ( landscape|| width>height) ? viewConstants.textSizeLandscape : viewConstants.textSize,
        },
        inputForm: {
            flex:( landscape|| width>height) ? 1 : 0
        },
        label: {
            fontSize: ( landscape|| width>height) ? viewConstants.textSizeLandscape : viewConstants.textSize,
            padding: viewConstants.labelPadding,
            marginHorizontal: ( landscape|| width>height)? viewConstants.labelPadding : 0,
            color: colors.text_general
        },
        inputText: {
            borderWidth: viewConstants.textBoxBorderWidth,
            borderColor: colors.border_input_text,
            borderRadius: viewConstants.textBoxBorderRadius,
            textAlign: 'center',
            padding: viewConstants.textBoxPadding,
            fontSize:  ( landscape|| width>height) ? viewConstants.textSizeLandscape : viewConstants.textSize,
            marginHorizontal: viewConstants.textBoxPadding,
            color: colors.text_general
        },
        screenBackground: {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'flex-end',
            backgroundColor: colors.background_screen,
        },
        buttonText: {
            fontSize: 16,
            lineHeight: 21,
            fontWeight: 'bold',
            letterSpacing: 0.25,
            color: 'white',
          },
        continueButton: {
            width: "100%",
            height: ( landscape|| width>height) ? 45 : 70,
            justifyContent: "center",
            alignItems: "center",
            borderTopColor: colors.border,
            borderTopWidth: 1,
            shadowColor: colors.shadow,
            shadowRadius: 10, 
        },
    })
    const handleContinuePress = () => {
        navigation.navigate("Signup 3");
    }
    return ( 
        <View style={styles.screenBackground}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <SafeAreaView style = { styles.container} > 
                <View style = {styles.header}>
                        <Text style = {styles.headerTitle}>Security Questions</Text>
                        <Text style = {styles.headerText} >Answer a couple of security questions to help you get back into your account if you ever forget your password.</Text>
                        
                </View>
                <View style ={styles.inputForm}>
                    <View>
                        <Text style={styles.label}>Security Question 1: </Text>
                        <TextInput style={styles.inputText} placeholder="Dropdowm SQ and input " autoCapitalize='none'/>
                    </View>
                    <View>
                        <Text style={styles.label} >Security Question 2: </Text>
                        <TextInput style={styles.inputText} placeholder="Dropdowm SQ and input " />
                    </View>
                    <View style = {styles.lastInput}>
                        <Text style={styles.label}>Security Question 3: </Text>
                        <TextInput style={styles.inputText} placeholder="Dropdowm SQ and input " />
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
        
        </View>
        
     );
}
 
export default SignupScreen2;

