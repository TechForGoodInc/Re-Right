import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import color from '../../../config/colors';
import darkColors from '../../../config/darkColors';
import '../../../config/global';

export default function FriendProfileScreen() {
    var colors = global.isDarkModeEnabled ? darkColors : color;
    const styles = StyleSheet.create({
        screenBackground: {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'flex-end',
            backgroundColor: colors.background_screen,
        },
    })
    return (
        <View style={styles.ScreenBackground}>
            <Text>Friend Profile Screen</Text>
        </View>
    )
}