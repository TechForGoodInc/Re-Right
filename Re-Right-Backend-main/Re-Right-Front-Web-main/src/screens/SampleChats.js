import React from 'react';
import { StyleSheet, Text, Image, View, TouchableOpacity} from 'react-native';
import '../../config/global';
import color from '../../config/colors';
import darkColors from '../../config/darkColors';

export default function SampleChats ({navigation}) {
    const colors = global.isDarkModeEnabled? darkColors: color; 
    const styles = StyleSheet.create({
        people:{
            flexDirection: 'row',
            paddingTop: '4%',
            paddingLeft: '1%',
            paddingBottom: '4%',
            borderBottomWidth: 1,
            borderColor: colors.border,
            backgroundColor: colors.background_list_item
        },
        friendpfp:{ 
            flexDirection: 'row',
            backgroundColor: 'white',
            height:'100%',
            width: '11%',
            resizeMode: 'contain',
            borderRadius: 500 / 2,
        },
        textmessage:{
            flex: 7,
            paddingLeft:'2%',
            flexDirection: 'column',
            color : colors.text_general
        },
        names:{
            fontWeight: 'bold',
            color : colors.text_general
        },
        textcontents:{
            paddingTop: '2%',
            color : colors.text_general
        },
        arrow:{
            alignSelf: 'center',
            opacity: 0.5,
            height:'40%',
            width:'5%',
            right: '3%',
            tintColor: colors.tintColor
        }
    })
    return ( 
        <TouchableOpacity 
        style = {styles.people}
        onPress={() => navigation.navigate("Texting")}> 
                <Image style = {styles.friendpfp} source = { require("./../../assets/man.png") }
                />
                <View style = {styles.textmessage}>
                    <Text style = {styles.names}>
                        John Smith
                    </Text>
                    <Text style = {styles.textcontents}>
                        Hi!
                    </Text>
                </View>
                <Image style={styles.arrow} source={require('./../../assets/right-arrow.png')}
      />
        </TouchableOpacity>  
     );
}
