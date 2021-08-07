import React from 'react';
import { StyleSheet, TouchableOpacity, Image } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import StackHeaderBackImage from '../StackHeaderBackImage';
import color from "../../../config/colors";
import darkColors from "../../../config/darkColors";
import '../../../config/global';
import { useState } from 'react';
import GetSignUp1Style from '../../../config/SignUp1Css';
import { useDeviceOrientation, useDimensions } from '@react-native-community/hooks';
import ReachOutScreen2 from '../../screens/ReachOutScreen2';

const Stack = createStackNavigator();

export default function ChatStackNav({navigation}) {
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
    const StackHeaderStyle = styles.StackHeaderStyle;
    const StackTitleStyle = styles.StackTitleStyle;
    const StackBackTitleStyle = styles.StackBackTitleStyle;
    
    const handleHamburgerPress = () => {
        navigation.openDrawer();
    }
    return (
        <Stack.Navigator initialRoute="Chat" screenOptions={{
            headerStyle: StackHeaderStyle,
            headerTitleStyle: StackTitleStyle,
            headerBackImage: StackHeaderBackImage,
            headerBackTitleStyle: StackBackTitleStyle }}>
            <Stack.Screen name="Chat" component={ReachOutScreen2}
                options={{title: "Chat", headerLeft: () => (
                    <TouchableOpacity activeOpacity = { .5 } onPress={ handleHamburgerPress }>
                        <Image source={require('../../../assets/HMIcon.png')} style = {styles.menuicon} />
                    </TouchableOpacity>
                    )}} />
        </Stack.Navigator>
    )    
}
const styles = StyleSheet.create({
    menuicon: {
      width: 50,
      height: 50,
      resizeMode: "contain",
    },
  });




