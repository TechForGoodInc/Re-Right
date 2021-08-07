import React from 'react';
import colors from '../../config/colors';
import { Pressable, View, StyleSheet, Text, Button, SafeAreaView, TextInput } from 'react-native';
import { useDeviceOrientation, useDimensions } from '@react-native-community/hooks';
import CheckBoxHybrid from '../components/CheckBoxHybrid';

import '../../config/global';
import color from '../../config/colors';
import darkColors from '../../config/darkColors';

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

export default function ReachOutScreen1({navigation}) {
    const colors = global.isDarkModeEnabled? darkColors: color; 
    //getting the dimensions and the orientation
    const { landscape, portrait } = useDeviceOrientation();
    const {width, height} = useDimensions().window;
    //styles are here sorry for the mess
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
            borderColor: colors.light_grey,
            borderRadius: viewConstants.textBoxBorderRadius,
            textAlign: 'center',
            padding: viewConstants.textBoxPadding,
            fontSize:  ( landscape|| width>height) ? viewConstants.textSizeLandscape : viewConstants.textSize,
            marginHorizontal: viewConstants.textBoxPadding,
        },
        inputParagraph: {
            borderWidth: viewConstants.textBoxBorderWidth,
            height: ( landscape|| width>height) ? 100 : 200,
            borderColor: colors.light_grey,
            borderRadius: viewConstants.textBoxBorderRadius,
            textAlign: 'center',
            padding: viewConstants.textBoxPadding,
            fontSize:  ( landscape|| width>height) ? viewConstants.textSizeLandscape : viewConstants.textSize,
            marginHorizontal: viewConstants.textBoxPadding,
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
        submitButton: {
            width: "100%",
            height: ( landscape|| width>height) ? 45 : 70,
            justifyContent: "center",
            alignItems: "center",
            borderColor: colors.border,
            borderWidth: 1,
            shadowColor: colors.shadow,
            shadowRadius: 10, 
        },
        linkText: {
            color: colors.hyperlink,
            fontSize: 18,
            marginBottom: '2%',
        },
        checkBox: {
            
        },
        checkBoxContainer: {
            flexDirection: 'row',
            justifyContent: 'space-between',
        }
    })
    const handleConnectPress = () => {
        navigation.navigate("Chats")
        // Submit suggestion to a suggestion database ?
    }

    return ( 
        <View style={styles.screenBackground}>
            <SafeAreaView style = { styles.container} > 
                <View style = {styles.header}>
                        <Text style = {styles.headerTitle}>Match with people who...</Text>
                </View>
                <View style={styles.inputForm}>
                    <View style={styles.checkBoxContainer}>
                        <Text style={styles.label}>Have Similar Bio Tags</Text>
                        <CheckBoxHybrid style={styles.checkBox}/>
                    </View>
                    <View style={styles.checkBoxContainer}>
                        <Text style={styles.label}>Have Similar Biographies</Text>
                        <CheckBoxHybrid style={styles.checkBox}/>
                    </View>
                    <View style={styles.checkBoxContainer}>
                        <Text style={styles.label}>Have Submitted HRV Reports</Text>
                        <CheckBoxHybrid style={styles.checkBox}/>
                    </View>
                    <View style={styles.checkBoxContainer}>
                        <Text style={styles.label}>Are near my location</Text>
                        <CheckBoxHybrid style={styles.checkBox}/>
                    </View>
                    
                </View>

            </SafeAreaView>
            <Pressable style={({pressed}) => [{
                backgroundColor: pressed ? colors.button_pressed : colors.button_connect,},
                styles.submitButton,]}
                onPress={() => handleConnectPress()}>
                <Text style={styles.buttonText}>Connect</Text>
            </Pressable>
        </View>
        
     );
}
