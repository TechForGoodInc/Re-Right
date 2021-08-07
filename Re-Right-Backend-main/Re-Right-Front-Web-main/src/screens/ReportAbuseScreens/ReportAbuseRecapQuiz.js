import React from 'react'
import {
    View,
     Text,
     StyleSheet,
} from "react-native";
import '../../../config/global';
import color from '../../../config/colors';
import darkColors from '../../../config/darkColors';

export default function ReportAbuseRecapQuiz() {
    const colors = global.isDarkModeEnabled? darkColors: color; 
    const styles = StyleSheet.create({
        background: {
            backgroundColor: colors.background_screen,
        }
    })
    return (
        <View style={styles.background}>
            <Text style = {{color: colors.text_general}}>
                Test your Knowledge!
            </Text>
        </View>
    )
}

