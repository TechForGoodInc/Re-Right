import React from 'react';
import {SafeAreaView, StyleSheet, TextInput, Text, Pressable, Platform, Alert, View} from 'react-native';

import '../../../config/global';
import color from '../../../config/colors';
import darkColors from '../../../config/darkColors';

export default function ReportAbuseScreen2({ navigation }) {
    const colors = global.isDarkModeEnabled? darkColors: color; 
    const handleSubmitPress = () => {
        if (Platform.OS === 'web') {
            alert("Report Successfully Submitted");
        } else {
            Alert.alert("Success!", "Report Submitted");
        }
        // Resets the reportAbuseStack to the base page
        navigation.reset({
            index: 0,
            routes: [{name: 'Report Abuse'}],
          });
        // Jumps to the Home page of the hamburger menu
        navigation.jumpTo("Home");
    }
    //all styles are here sorry for the mess but we need this for dark mode to work
    const styles = StyleSheet.create({
        screenBackground: {
            justifyContent: 'space-between',
            flex: 1,
            backgroundColor: colors.background_screen,
        },
        pretext:{
            fontSize: 18,
            color: colors.text_general,
            alignSelf: 'center',
        },
        textinput: {
            width: '80%',
            height: '15%',
            alignSelf: 'center',
            backgroundColor: colors.background_post_type,
            color: colors.text_input,
            borderRadius: 15,
            padding: '1%'
        },
        buttonText: {
            fontSize: 16,
            lineHeight: 21,
            fontWeight: 'bold',
            letterSpacing: 0.25,
            color: 'white',
            },
        submitButton: {
            width: "100%",
            height: 50,
            justifyContent: "center",
            alignItems: "center",
        },
        linkText: {
            color: colors.hyperlink,
            fontSize: 18,
            marginTop: '2%',
            marginBottom: '1%',
            alignSelf: 'center',
        },
      });
    return (
        <SafeAreaView style={styles.screenBackground}>
            <Text style={styles.linkText}
                onPress ={() => navigation.navigate('Recap Rights')}>
                    Recap Your Rights?
            </Text>
            <Text style = {styles.pretext}>
                Human Right Violated
            </Text>        
            <TextInput
                style = {styles.textinput}
                placeholder=" Enter the Human Right Violated"
                multiline={true} >
            </TextInput>


            <Text style = {styles.pretext}>
                Location
            </Text>     
            <TextInput style = {styles.textinput}
                placeholder=" Enter the Location of the Violation"
                multiline={true} >
            </TextInput>


            <Text style = {styles.pretext} >
                Date of Occurence
            </Text>   
            <TextInput style = {styles.textinput}
                placeholder=" Enter the Date of the Violation" 
                multiline={true} >
            </TextInput>


            <Text style = {styles.pretext} >
                Offender?
            </Text>   
            <TextInput style = {styles.textinput}
                placeholder=" Describe the Person Who Committed the Crime"
                multiline={true}>
            </TextInput>
            <Pressable style={({pressed}) => [{
                backgroundColor: pressed ? colors.button_pressed : colors.button_submit,},
                styles.submitButton,]}
                onPress={() => handleSubmitPress()}>
                <Text style={styles.buttonText}>Submit</Text>
            </Pressable>
        </SafeAreaView>

    )
}

