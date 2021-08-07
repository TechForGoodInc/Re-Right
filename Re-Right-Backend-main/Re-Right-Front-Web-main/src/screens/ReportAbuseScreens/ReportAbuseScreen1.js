import React from 'react';
import {SafeAreaView, Text, TextInput, Pressable, StyleSheet} from 'react-native';

import '../../../config/global';
import color from '../../../config/colors';
import darkColors from '../../../config/darkColors';

export default function ReportAbuseScreen1({ navigation }) {
    const colors = global.isDarkModeEnabled? darkColors: color; 
    const handleContinuePress = () => {
        navigation.navigate("Incident Info")
    }
    const styles = StyleSheet.create({
        title: {
            fontSize: 25,
            alignSelf: 'center',
            fontWeight: 'bold',
            color: colors.text_screen_header,
            
          },
        textInput: {
            backgroundColor: colors.background_post_type,
            padding: '1%',
            width: '90%',
            height: '70%',
            alignSelf: 'center',
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: '2%',
            color: colors.text_input,
            borderRadius: 15,
        },
        prompt: {
            padding: '5%',
            color: colors.text_screen_header,
            fontSize: 23,
        },
        screenBackground: {
            justifyContent: 'space-between',
            flex: 1,
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
        },
    });
    return (
        <SafeAreaView style={styles.screenBackground}>        
            <Text style={styles.title}>
            Please Explain What Happened: 
            </Text>
            <TextInput style={styles.textInput}
                multiline={true}
                placeholder="Let us know your story..." 
            />
            <Pressable style={({pressed}) => [{
                backgroundColor: pressed ? colors.button_pressed : colors.button_continue,},
                styles.continueButton,]}
                onPress={() => handleContinuePress()}>
                <Text style={styles.buttonText}>Continue</Text>
            </Pressable>
        </SafeAreaView>

    )
}

