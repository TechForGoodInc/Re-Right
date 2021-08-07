import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet } from 'react-native';
import ProfileStackNav from '../StackNavs/ProfileStackNav';
import FriendsStackNav from '../StackNavs/FriendsStackNav';
import CreatePostStackNav from '../StackNavs/CreatePostStackNav';
import ChatStackNav from '../StackNavs/ChatStackNav';
import ResearchStackNav from '../StackNavs/ResearchStackNav';
import color from "../../../config/colors";
import darkColors from "../../../config/darkColors";
import '../../../config/global';
import GetSignUp1Style from '../../../config/SignUp1Css';
import { useDeviceOrientation, useDimensions } from '@react-native-community/hooks';

export default function ResearchTabNav({navigation}) {
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
        <BottomTabs.Navigator initialRoute="Research Analytics" tabBarOptions={{ 
            activeBackgroundColor: colors.active_tab,
            inactiveBackgroundColor: colors.inactive_tab,
            keyboardHidesTabBar: true,
            unmountOnBlur: true, 
            tabStyle: TabStyle,
            labelStyle: TabLabelStyle
        }}>
            <BottomTabs.Screen name="Research Analytics" component={ResearchStackNav} options ={{ unmountOnBlur: true}}/>
            <BottomTabs.Screen name="Chat" component={ChatStackNav} options ={{ unmountOnBlur: true}}/>
            <BottomTabs.Screen name="Create Post" component={CreatePostStackNav} options ={{ unmountOnBlur: true}}/>
            <BottomTabs.Screen name="Friends" component={FriendsStackNav} options ={{ unmountOnBlur: true}}/>
            <BottomTabs.Screen name="Profile" component={ProfileStackNav} options ={{ unmountOnBlur: true}}/>
        </BottomTabs.Navigator>
    )
}