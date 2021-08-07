import { useDeviceOrientation, useDimensions } from '@react-native-community/hooks';
import React, {useEffect, useState} from 'react';
import { useColorScheme} from 'react-native';
import { Platform, View, Text, Button, StyleSheet, Pressable, Image, TextInput } from 'react-native';

import color from "../../config/colors";
import darkColors from "../../config/darkColors";
import '../../config/global';

export default function LoginScreen({navigation}) {
    //getting the dimensions and the orientation
    const colorScheme = useColorScheme();
    const [isDark, setIsDark] = useState(colorScheme === global.default_color_scheme);
    useEffect(() => {
      setIsDark(colorScheme==="dark");
      global.isDarkModeEnabled = isDark? true : false;
        }, [colorScheme]);
    const colors = global.isDarkModeEnabled ? darkColors : color;
    const { landscape, portrait } = useDeviceOrientation();
    const {width, height} = useDimensions().window;
    //styles are here
    const styles = StyleSheet.create({

        background: {
            flex: 1,
            backgroundColor: colors.background_screen,
            flexDirection: 'column',
        },
       
         header: {
             flex: 0.5,
             alignItems: 'center',
             justifyContent: 'center',
         },
       
         inputbar: {
             flex: 1,
             justifyContent: 'center',
             
             ...Platform.select({
                web: {
                    marginLeft: '30%',
                    marginRight: '30%',
                },
                default: {
                    marginLeft: '5%',
                    marginRight: '5%',
                },
             }),
         },
       
         links: {
             justifyContent: 'flex-end',
             alignItems: 'center',
             flex: 0.5, 
             
         },
       
         logo: {
            resizeMode: 'contain', 
            ...Platform.select({
                web: {
                  width: '25%',
                  height: '75%',
                },
                default: {
                  width: (landscape || width > height) ? '100%' : '55%',
                  height: (landscape || width > height) ? '100%': '50%',
                }
            })
         },
       
         inputFields: {
             height: '18%',
             margin: '1%',
             width: '90%',
             borderWidth: 2,
             borderColor: colors.border_input_text,
             alignSelf: 'center',
             fontSize: 16, 
             borderRadius: 10,
             padding: 20,
             color: colors.text_general
         },
      
        
          buttonContainer: {
            flexDirection: 'row',
          },
      
          continueButton: {
            width: "100%",
            height: 50,
            justifyContent: "center",
            alignItems: "center",
            borderColor: colors.border,
            borderTopWidth: 1,
            shadowColor: colors.shadow,
            shadowRadius: 10, 
          },
      
          buttonText: {
            fontSize: 20,
            lineHeight: 21,
            fontWeight: 'bold',
            letterSpacing: 0.25,
            color: 'white',
          },
       
        headertext: {
            fontWeight: '700',
            fontSize: 25, 
            color: colors.text_screen_header,
            marginBottom: '4%',
          },
      
          linkView: {
              alignItems: 'center',
              bottom: '10%',
              width: '100%'
          },
          linkText: {
              color: colors.hyperlink,
              fontSize: 18,
              marginBottom: '2%',
          },
          labels:{
            color: colors.text_general
          }       
      });
  const handleForgotPassRoute = () => {
      navigation.navigate("Forgot Password 1");
  }
  const handleSignUpRoute = () => {
   navigation.navigate("Signup 1");
}
  const handleLoginRoute = () => {
    // When a user logs in, clear the stack and place the Home page on the stack (users shouldn't
    // be able to go back to login/signup/forgot password pages once they log in)
    navigation.reset({
        index: 0,
        routes: [{name: 'Home',}],
      });
        // Need to check if username/email and password are correct
        // Display error messages and don't navigate if info is incorrect / user not found   
  }
  const [username, onChangeUsername] = React.useState(null);
  const [password, onChangePassword] = React.useState(null);
     
  return (
    
    <View style = {styles.background}>
        <View style={styles.header}>
            <Image source={require("../../assets/rerightlogo.png")} style = {styles.logo}/>
        </View>

        <View style = {styles.inputbar}>
            <Text style = {styles.headertext}> Login in with your account: </Text>
            <Text style={styles.labels}> Username/Email:  </Text>
            <TextInput
             style={styles.inputFields}
             onChangeText={onChangeUsername}
             value={username}
             placeholder = ' Username/Email'
             textContentType='username'
             autoCompleteType='email' 
             autoCapitalize='none'
             />
            <Text style={styles.labels} > Password:  </Text>
            <TextInput 
             style={styles.inputFields}
             onChangeText={onChangePassword}
             value={password}
             secureTextEntry={true} 
             autoCompleteType='password' 
             autoCapitalize='none'
             textContentType = 'password'
             placeholder = ' Password'/>
        </View>

        <View style = {styles.links}>
            <View style = {styles.linkView}>
                <Text 
                    style={styles.linkText}
                    onPress={() => handleForgotPassRoute()}>
                    Forgot Password
                </Text>
            </View>
        </View>
        <Pressable style={({pressed}) => [{
            backgroundColor: pressed ? colors.button_pressed : colors.button_login,},
            styles.continueButton,]}
            onPress={() => handleLoginRoute()}>
            <Text style={styles.buttonText}>Log In</Text>
        </Pressable>
    </View>
  );
}
 





