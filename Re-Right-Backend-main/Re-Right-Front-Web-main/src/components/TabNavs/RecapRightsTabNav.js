import React, {useState} from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';
import { StyleSheet } from 'react-native';

import RecapRightsStackNav from '../StackNavs/RecapRightsStackNav';
import RecapQuiz from '../../screens/RecapRightsScreens/RecapQuiz';
import color from "../../../config/colors";
import darkColors from "../../../config/darkColors";
import '../../../config/global';
import GetSignUp1Style from '../../../config/SignUp1Css';
import { useDeviceOrientation, useDimensions } from '@react-native-community/hooks';

export default function RecapRightsTabNav({navigation}) {
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
        <BottomTabs.Navigator initialRoute="Recap Rights" tabBarOptions={{ 
            style: {
                backgroundColor: colors.background_stack_header
            },
            activeTintColor: colors.active_tab,
            unmountOnBlur: true, 
            keyboardHidesTabBar: true,
            tabStyle: TabStyle,
            labelStyle: TabLabelStyle
        }}>
            <BottomTabs.Screen name="Recap Rights" component={RecapRightsStackNav} options={{
                unmountOnBlur: true,  tabBarIcon: ({color, size}) => <FontAwesome name="book" size={size} color={color} />
            }}/>
            <BottomTabs.Screen name="Quiz" component={RecapQuiz} options={{
                 unmountOnBlur: true,   tabBarIcon: ({color,size}) => <MaterialCommunityIcons name="brain" size={size} color={color} />
            }}/>
        </BottomTabs.Navigator>
    )
}