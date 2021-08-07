import React from 'react';
import { StyleSheet, Text, Image, View, TouchableOpacity} from 'react-native';
import colors from '../../../config/colors';

export default function SampleFriend ({navigation}) {
    return ( 
        <TouchableOpacity style = {styles.friend}
            onPress={() => navigation.navigate("Friend Profile")}> 
                <Image style = {styles.friendpfp} source = { require("../../../assets/man.png") }/>
                <View style = {styles.textContainer}>
                    <Text style = {styles.text}>
                        John Smith
                    </Text>
                </View>
                <Image style={styles.arrow} source={require('../../../assets/right-arrow.png')}/>
        </TouchableOpacity>  
     );
}
const styles = StyleSheet.create({
    friend:{
        flexDirection: 'row',
        paddingTop: '4%',
        paddingLeft: '1%',
        paddingBottom: '4%',
        borderBottomWidth: 1,
        borderColor: colors.border,
        backgrounColor: colors.background_friend,
    },
    friendpfp:{ 
        flexDirection: 'row',
        backgroundColor: 'white',
        height:'100%',
        width: '11%',
        resizeMode: 'contain',
        borderRadius: 500 / 2,
    },
    textContainer:{
        flex: 7,
        paddingLeft:'2%',
        flexDirection: 'column',
    },
    text:{
        fontWeight: 'bold',
    },
    textcontents:{
        paddingTop: '2%',
    },
    arrow:{
        alignSelf: 'center',
        opacity: 0.5,
        height:'40%',
        width:'5%',
        right: '3%'
    }
})