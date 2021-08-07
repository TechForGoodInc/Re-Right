import React from 'react';
import { SafeAreaView, Text, StyleSheet } from 'react-native';
import colors from '../../../config/colors';
import '../../../config/global';
import color from '../../../config/colors';
import darkColors from '../../../config/darkColors';

export default function AboutReportAbuseScreen() {
    const colors = global.isDarkModeEnabled? darkColors: color; 
    //styles are here sorry for the mess but we need this for dark mode
    const styles = StyleSheet.create({
        background: {
            backgroundColor: colors.background_screen,
        }
    })
    return (
        <SafeAreaView style={styles.background}>

        </SafeAreaView>
    )
}
