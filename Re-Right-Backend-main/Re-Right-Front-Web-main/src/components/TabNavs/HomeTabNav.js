import React, { useState, useEffect } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeStackNav from '../StackNavs/HomeStackNav';
import ProfileStackNav from '../StackNavs/ProfileStackNav';
import FriendsStackNav from '../StackNavs/FriendsStackNav';
import CreatePostStackNav from '../StackNavs/CreatePostStackNav';
import ChatStackNav from '../StackNavs/ChatStackNav';
import { Platform, StyleSheet } from 'react-native';
import color from "../../../config/colors";
import darkColors from "../../../config/darkColors";
import '../../../config/global';
import GetSignUp1Style from '../../../config/SignUp1Css';
import { useDeviceOrientation, useDimensions } from '@react-native-community/hooks';
import { MaterialCommunityIcons } from '@expo/vector-icons';
export default function HomeTabNav() {
    const colors = global.isDarkModeEnabled ? darkColors : color;
    const { landscape } = useDeviceOrientation();
    const {width, height} = useDimensions().window;
    //styles are in a sperate folder 
    const [styles,setStyles] = useState(StyleSheet.create( 
        GetSignUp1Style(landscape, width, height) 
    ));
    if (landscape || width > height ){
        () => {
        setStyles(StyleSheet.create( 
            GetSignUp1Style(landscape, width, height) 
        ))
    }} 
    const [isDarkModeEnabled, setIsDarkModeEnabled] = useState(global.isDarkModeEnabled);
    const BottomTabs = createBottomTabNavigator();
    const TabStyle = styles.TabStyle;
    const TabLabelStyle = styles.TabLabelStyle;
    useEffect(() => {
        setIsDarkModeEnabled(global.isDarkModeEnabled);
        }, []);
    return (
        <BottomTabs.Navigator initialRoute="Home" 
            unmountOnBlur= {true}
            initialParams={{isItDark: isDarkModeEnabled}}
            params = {{ isItDark: isDarkModeEnabled }}
            barStyle= {{ backgroundColor: 'black' }}
            tabBarOptions={{ 
            style :{
                backgroundColor: colors.background_stack_header
            },
            unmountOnBlur: true,
            keyboardHidesTabBar: true,
            activeTintColor: colors.active_tab,
            tabStyle: TabStyle,
            labelStyle: TabLabelStyle,
            showIcon: true,
            showLabel: Platform.OS === 'web' ? true: true,
        }}>
            <BottomTabs.Screen name="Home" component={HomeStackNav} 
                initialParams={{isItDark: isDarkModeEnabled}}
                params = {{ isItDark: isDarkModeEnabled }}
                options={{   
                unmountOnBlur: true,
                tabBarLabel: 'Home',
                tabBarIcon: ({color, size}) => (<MaterialCommunityIcons name = "home" size={size} color = {color} />),
            }}/>
            <BottomTabs.Screen name="Chat" component={ChatStackNav} options={{
                unmountOnBlur: true,
                tabBarLabel: 'Chat',
                tabBarIcon: ({color, size}) => <MaterialCommunityIcons name = "chat" size={size} color = {color} />
            }}/>
            <BottomTabs.Screen name="Create Post" component={CreatePostStackNav}
                options={{title: "Create Post",
                    unmountOnBlur: true,
                    tabBarLabel: 'Post',
                    tabBarIcon: ({color, size}) => <MaterialCommunityIcons name = "plus-circle" size={size} color = {color} />
            }}/>
            <BottomTabs.Screen name="Friends" component={FriendsStackNav} options={{
                unmountOnBlur: true,
                tabBarLabel: 'Friends',
                tabBarIcon: ({color, size}) => <MaterialCommunityIcons name = "account-group" size={size} color = {color} />
            }}/>
            <BottomTabs.Screen name="Profile" component={ProfileStackNav} options={{
                unmountOnBlur: true,
                tabBarLabel: 'Profile',
                tabBarIcon: ({color, size}) => <MaterialCommunityIcons name = "account" size={size} color = {color} />
            }}/>
        </BottomTabs.Navigator>
    )
}
const styles = StyleSheet.create({
    menuicon: {
      width: 50,
      height: 50,
      resizeMode: "contain",
    },
  });