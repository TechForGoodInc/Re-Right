//Chat Page
import React from 'react';
import { Text, View } from 'react-native';
import '../../../config/global';
import color from '../../../config/colors';
import darkColors from '../../../config/darkColors';

export default function ChatScreen() {
    const colors = global.isDarkModeEnabled? darkColors: color; 
    return (
        <View style={{backgroundColor: colors.background_screen, height: '100%'}}>
            <Text style={{color: colors.text_screen_header}}> Chat Screen</Text>
        </View>
        
    );
}