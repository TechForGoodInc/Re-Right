import React from 'react';
import { StyleSheet } from 'react-native';
import color from './colors';
import darkColors from './darkColors';
import './global'

const AppStyles = () => {
    const colors = global.isDarkModeEnabled ? darkColors : color;
    return {
        StackHeaderStyle: { // Currently used by all stack navs
            backgroundColor: colors.background_stack_header,
            borderBottomColor: colors.header_border,
            borderBottomWidth: 1,
            shadowColor: colors.header_shadow,
            shadowRadius: 10,
        },
        ProfileStackHeaderStyle: { // Not used currently, but we can customize individual stacks like this
            backgroundColor: colors.primary,
        },
        StackTitleStyle: {
            fontWeight: 'bold',
            letterSpacing: 0.25,
            fontSize: 19,
            color: colors.text_stack_title,
        },
        StackBackTitleStyle: {
            color: colors.text_stack_back_title,
        },
        TabStyle: {
            // borderColor: colors.border,
            // borderWidth: 1,
            shadowColor: colors.shadow,
            shadowRadius: 10,
            // backgroundColor: colors.tab_background
        },
        TabLabelStyle: {
            fontWeight: 'bold',
            letterSpacing: 0.25,
            fontSize: 16,
            color: colors.text_tab_label, 
        },
        ScreenBackground: {
            backgroundColor: colors.background_screen,
            flex: 1,
            alignItems: 'center',
        }
    }
}

