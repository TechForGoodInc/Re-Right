import 'react-native-gesture-handler';
import React, {useEffect, useState} from 'react';
import { useColorScheme} from 'react-native';
import { StyleSheet } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoggedOutScreen from './screens/LoggedOutScreen';
import LoginScreen from './screens/LoginScreen';
import SignupScreen1 from './screens/SignupScreens/SignupScreen1';
import SignupScreen2 from './screens/SignupScreens/SignupScreen2';
import SignupScreen3 from './screens/SignupScreens/SignupScreen3';
import SignupScreen4 from './screens/SignupScreens/SignupScreen4';
import ForgotPassScreen1 from './screens/ForgetPasswordScreens/ForgotPassScreen1';
import ForgotPassScreen2 from './screens/ForgetPasswordScreens/ForgotPassScreen2';
import ForgotPassScreen3 from './screens/ForgetPasswordScreens/ForgotPassScreen3';
import ForgotPassScreen4 from './screens/ForgetPasswordScreens/ForgotPassScreen4';
import HomeDrawerNav from './components/HomeDrawerNav';
import StackHeaderBackImage from './components/StackHeaderBackImage';

import color from "../config/colors";
import darkColors from "../config/darkColors";
import '../config/global';

const Stack = createStackNavigator();

export default function ReRightApp() {
    const colorScheme = useColorScheme();
    const [isDark, setIsDark] = useState(colorScheme === "dark");
    useEffect(() => {
      setIsDark(colorScheme==="dark");
      global.isDarkModeEnabled = isDark? true : false;
        }, [colorScheme]);
    const colors = global.isDarkModeEnabled ? darkColors : color;
    const AppStyles = StyleSheet.create({
        StackHeaderStyle: { // Currently used by all stack navs
            backgroundColor: colors.background_stack_header,
            borderBottomColor: colors.border,
            borderBottomWidth: 1,
            shadowColor: colors.shadow,
            shadowRadius: 10,
            height: 50,
        },
        ProfileStackHeaderStyle: { // Not used currently, but we can customize individual stacks like this
            backgroundColor: colors.primary,
        },
        StackTitleStyle: {
            fontWeight: 'bold',
            letterSpacing: 0.25,
            fontSize: 20,
            color: colors.text_stack_title,
        },
        StackBackTitleStyle: {
            color: colors.text_stack_back_title,
        },
        TabStyle: {
            borderColor: colors.border,
            borderWidth: 1,
            shadowColor: colors.shadow,
            shadowRadius: 10,
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
    });
    const StackHeaderStyle = AppStyles.StackHeaderStyle;
    const StackTitleStyle = AppStyles.StackTitleStyle;
    const StackBackTitleStyle = AppStyles.StackBackTitleStyle;

    return (
        <NavigationContainer>
            <Stack.Navigator initialRoute="Logged Out" screenOptions={{
                headerStyle: StackHeaderStyle,
                headerTitleStyle: StackTitleStyle,
                headerBackImage: StackHeaderBackImage,
                headerBackTitleStyle: StackBackTitleStyle
            }}>
                <Stack.Screen name="Logged Out" component={LoggedOutScreen} options={{headerShown: false}} />
                <Stack.Screen name="Login" component={LoginScreen} options={{title: "",}} />
                <Stack.Screen name="Signup 1" component={SignupScreen1} options={{title: "",}} />
                <Stack.Screen name="Signup 2" component={SignupScreen2} options={{title: "",}} />
                <Stack.Screen name="Signup 3" component={SignupScreen3} options={{title: "",}} />
                <Stack.Screen name="Signup 4" component={SignupScreen4} options={{title: "",}} />
                <Stack.Screen name="Forgot Password 1" component={ForgotPassScreen1} options={{title: "",}} />
                <Stack.Screen name="Forgot Password 2" component={ForgotPassScreen2} options={{title: "",}} />
                <Stack.Screen name="Forgot Password 3" component={ForgotPassScreen3} options={{title: "",}} />
                <Stack.Screen name="Forgot Password 4" component={ForgotPassScreen4} options={{title: "",}} />
                <Stack.Screen name="Home" component={HomeDrawerNav} options={{headerShown: false}} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}