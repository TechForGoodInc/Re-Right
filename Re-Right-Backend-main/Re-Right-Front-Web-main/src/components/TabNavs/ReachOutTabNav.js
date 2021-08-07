import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet } from 'react-native';

import ReachOutStackNav from '../StackNavs/ReachOutStackNav';
import ProfileStackNav from '../StackNavs/ProfileStackNav';
import FriendsStackNav from '../StackNavs/FriendsStackNav';
import CreatePostStackNav from '../StackNavs/CreatePostStackNav';
import ChatStackNav from '../StackNavs/ChatStackNav';
import color from "../../../config/colors";
import darkColors from "../../../config/darkColors";
import '../../../config/global';
import GetSignUp1Style from '../../../config/SignUp1Css';
import { useDeviceOrientation, useDimensions } from '@react-native-community/hooks';

export default function ReachOutTabNav({navigation}) {
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
    const BottomTabs = createBottomTabNavigator();
    const TabStyle = styles.TabStyle;
    const TabLabelStyle = styles.TabLabelStyle;
    return (
        <BottomTabs.Navigator initialRoute="Reach Out" tabBarOptions={{ 
            unmountOnBlur: true,
            activeBackgroundColor: colors.active_tab,
            inactiveBackgroundColor: colors.inactive_tab,
            keyboardHidesTabBar: true,
            tabStyle: TabStyle,
            labelStyle: TabLabelStyle
        }}>
            <BottomTabs.Screen name="Reach Out" component={ReachOutStackNav}  options={{ unmountOnBlur: true}}/>
            <BottomTabs.Screen name="Chat" component={ChatStackNav} options={{ unmountOnBlur: true}}/>
            <BottomTabs.Screen name="Create Post" component={CreatePostStackNav} options={{ unmountOnBlur: true}}/>
            <BottomTabs.Screen name="Friends" component={FriendsStackNav} options={{ unmountOnBlur: true}}/>
            <BottomTabs.Screen name="Profile" component={ProfileStackNav} options={{ unmountOnBlur: true}}/>
        </BottomTabs.Navigator>
    )
}