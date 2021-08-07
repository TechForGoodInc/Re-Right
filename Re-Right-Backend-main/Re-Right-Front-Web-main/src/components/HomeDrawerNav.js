import React, {useEffect, useState} from 'react';
import { useColorScheme} from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { StyleSheet } from 'react-native';
import { AntDesign, MaterialIcons, FontAwesome, MaterialCommunityIcons, FontAwesome5 } from '@expo/vector-icons';

import HomeTabNav from './TabNavs/HomeTabNav';
import RecapRightsTabNav from './TabNavs/RecapRightsTabNav';
import ReportAbuseStackNav from './StackNavs/ReportAbuseStackNav';
import ResearchStackNav from './StackNavs/ResearchStackNav';
import ProfileStackNav from './StackNavs/ProfileStackNav';
import ReachOutStackNav from './StackNavs/ReachOutStackNav';

import HomeDrawer from './HomeDrawer';
import color from '../../config/colors';
import darkColors from '../../config/darkColors';
import '../../config/global';
import LoggedOutScreen from '../screens/LoggedOutScreen';
import ReRightApp from '../ReRightApp';

const Drawer = createDrawerNavigator();


export default function HomeDrawerNav({navigation}) {
    const colors = global.isDarkModeEnabled ? darkColors : color;
    return (
        <Drawer.Navigator initialRoute="Home"
            drawerType="slide"
            drawerStyle={{
                backgroundColor: colors.background_drawer,
                }}
            drawerContent={HomeDrawer}
            drawerContentOptions={{
                // activeBackgroundColor: colors.active_tab,
                activeBackgroundColor: colors.background_list_item,
                // inactiveBackgroundColor: colors.inactive_tab,
                inactiveBackgroundColor: colors.background_screen,
                itemStyle: {
                    shadowRadius: 5,
                    shadowColor: colors.shadow,
                    borderColor: colors.background_screen,
                    borderWidth: 2,
                    borderRadius: 10,
                    backgroundColor: colors.background_list_item,
                    color: colors.text_stack_title
                },
                labelStyle: {
                    color: colors.text_stack_title
                },
                contentContainerStyle: {
                    justifyContent: 'center',
                    alignContent: 'center',
                },
                style: {
                    borderColor: colors.border,
                    borderRightWidth: 1,
                    backgroundColor: colors.background_drawer
                },
                
            }}>

            <Drawer.Screen name="Home" component={HomeTabNav} options={{
                unmountOnBlur: true,  drawerIcon: () => <AntDesign name="home" size={24} color={colors.tintColor} />
            }}/>
            <Drawer.Screen name="Recap Rights" component={RecapRightsTabNav} options={{
                unmountOnBlur: true, drawerIcon: () => <FontAwesome name="book" size={24} color={colors.tintColor} />
            }}/>
            <Drawer.Screen name="Report Abuse" component={ReportAbuseStackNav} options={{
                unmountOnBlur: true, drawerIcon: () => <MaterialIcons name="report" size={24} color={colors.tintColor}/>
            }}/>
            <Drawer.Screen name="Reach Out" component={ReachOutStackNav} options={{
                unmountOnBlur: true, drawerIcon: () => <AntDesign name="wechat" size={24} color={colors.tintColor} />
            }}/>
            <Drawer.Screen name="Research Analytics" component={ResearchStackNav} options={{
                unmountOnBlur: true, drawerIcon: () => <MaterialCommunityIcons name="brain" size={24} color={colors.tintColor} />
            }}/>
            <Drawer.Screen name="Profile" component={ProfileStackNav} options={{
                unmountOnBlur: true, drawerIcon: () => <FontAwesome5 name="user" size={24} color={colors.tintColor} />
            }}/>
            <Drawer.Screen name="Log Out" component={LoggedOutScreen} labelStyle={styles.logoutLabelStyle} options={{
                unmountOnBlur: true, drawerIcon: () => <MaterialCommunityIcons name="exit-run" size={24} color={colors.tintColor} />
            }}/>
        </Drawer.Navigator>
    )
}

const styles = StyleSheet.create({
    logoutLabelStyle: {
        alignSelf: 'center',
        fontWeight: 'bold',
        letterSpacing: 0.25,
        fontSize: 16,
    }
  });