import React from 'react';
import { Text, TouchableWithoutFeedback, View, StyleSheet, Pressable, Alert, Keyboard, SafeAreaView } from 'react-native';
import { KeycodeInput } from 'react-native-keycode';
import { useDimensions, useDeviceOrientation } from '@react-native-community/hooks';

import color from "../../../config/colors";
import darkColors from "../../../config/darkColors";
import '../../../config/global';

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

const CODE_LENGTH = 6;

export default function ForgotPassScreen2({navigation}) {
    var colors = global.isDarkModeEnabled ? darkColors : color;
    const { landscape, portrait } = useDeviceOrientation();
    const {width, height} = useDimensions().window;
    //styles are here
    const styles = StyleSheet.create( {
        container: {
            marginHorizontal: viewConstants.containerHorizontalMargins,
            marginTop: '8%',
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
        },
        linkText: {
            textDecorationLine: 'underline',
            paddingVertical: '3%',
            fontSize: ( landscape|| width>height) ? viewConstants.textSizeLandscape : viewConstants.textSize,
        },
        inputView: {
            flex:1,
            flexDirection: 'column',
            marginHorizontal: 40
        },
        label: {
            fontSize: ( landscape|| width>height) ? viewConstants.textSizeLandscape : viewConstants.textSize,
            padding: viewConstants.labelPadding,
            marginHorizontal: ( landscape|| width>height)? viewConstants.labelPadding : 0,
            color: colors.text_general,
        },
        inputText: {
            borderWidth: viewConstants.textBoxBorderWidth,
            borderColor: colors.border_input_text,
            borderRadius: viewConstants.textBoxBorderRadius,
            textAlign: 'center',
            padding: viewConstants.textBoxPadding,
            fontSize:  ( landscape|| width>height) ? viewConstants.textSizeLandscape : viewConstants.textSize,
            marginHorizontal: viewConstants.textBoxPadding,
            color: colors.text_input,
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
            height: 50,
            justifyContent: "center",
            alignItems: "center",
            borderTopColor: colors.border,
            borderTopWidth: 1,
            shadowColor: colors.shadow,
            shadowRadius: 10, 
        },
    })
    const handleContinuePress = () => {
        //Alert.alert("You entered: " + this.state.code, "Code must match one sent through email to proceed.");
        navigation.navigate("Forgot Password 3");
    }
    const handleCodeComplete = (code) => {
        console.log(code);
        navigation.navigate("Forgot Password 3");
    }
    return (
        <View style={styles.screenBackground}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <SafeAreaView style={styles.container}>
                    <View style = {styles.header}>
                        <Text style = {styles.headerTitle}>
                            Enter Code Sent to Email
                        </Text>
                    </View>
                    <View style={styles.inputView}>
                        <KeycodeInput numeric={true}
                            length={CODE_LENGTH}
                            onComplete={(code) => handleCodeComplete(code)}/>
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