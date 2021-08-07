import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet } from 'react-native';

import ReportAbuseStackNav from '../StackNavs/ReportAbuseStackNav';
import AboutReportAbuseScreen from '../../screens/ReportAbuseScreens/AboutReportAbuseScreen';
import color from "../../../config/colors";
import darkColors from "../../../config/darkColors";
import '../../../config/global';
import GetSignUp1Style from '../../../config/SignUp1Css';
import { useDeviceOrientation, useDimensions } from '@react-native-community/hooks';

export default function ReportAbuseTabNav({navigation}) {
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
        <BottomTabs.Navigator initialRoute="Report Abuse" tabBarOptions={{ 
            activeBackgroundColor: colors.active_tab,
            inactiveBackgroundColor: colors.inactive_tab,
            keyboardHidesTabBar: true,
            tabStyle: TabStyle,
            unmountOnBlur: true, 
            labelStyle: TabLabelStyle
        }}>
            <BottomTabs.Screen name="Report Abuse" component={ReportAbuseStackNav} options ={{ unmountOnBlur: true}}/>
            <BottomTabs.Screen name="About" component={AboutReportAbuseScreen} options ={{ unmountOnBlur: true}}/>

        </BottomTabs.Navigator>
    )
}