import { setStatusBarBackgroundColor } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, View, Text, Modal, Pressable, TouchableOpacity, Button, Platform, Image, TextInput, Alert } from "react-native";
import colors from "../../../config/colors";



const StylizedPostScreen2 = ({route, navigation}) => {
    // text and the layout of text
    const {backgroundType, solidColor, textureLink, imageLink} = route.params;
    const [postText, setPostText] = useState('');
    const [bold, setBold] = useState(false);
    if(postText.length > 60){
        Alert.alert(
            "Text is too long",
            "Maximum 60 characters are allowed for a stylized post ",
            [
                {
                    text: "Go Back",
                    onPress: () => setPostText(postText.slice(0,postText.length-1,)),
                }
            ]
        )
    }
    return ( 
        <View style = {styles.container}>
        {/* The post is Displayed Here */}
        <View style = {[{alignContent: 'center', justifyContent:'center', backgroundColor: backgroundType === 'solid'? solidColor : 'white'},styles.postView]}>
        <View style ={{ margin: '20%', alignContent: 'center', justifyContent:'center', alignSelf:'center' }}>
            <Text style ={{fontWeight:bold? 'bold': 'normal'}}> {postText}</Text>
        </View>
        </View>
        {/* Background Type Chooser */}
        <View style ={styles.backgroundChooser}>
        
        </View>
        <View style={styles.editor}>
            <Text style ={{padding: '5%', fontWeight:'600'}}> Enter Your Text Here: </Text>
            <TextInput 
                multiline = {true}
                defaultValue ={postText}
                numberOfLines = {5}
                style = {{alignSelf:'center', width: '80%',height: '20%', padding:'2%',}}
                onChangeText = {(text) => setPostText(text)}
                placeholder ="Your Text "/>
            <View style = {{flexDirection:'row'}}>
            <Pressable style = {{borderWidth:1, width:'8%', borderColor:'black',marginLeft: '5%'}}>
                <Text> A </Text>
            </Pressable>
            <Pressable onPress={ ()=> setBold(!bold)} style = {{width:'8%', borderWidth:1, borderColor:'black'}}>
                <Text> B </Text>
            </Pressable>
            </View>
        </View>
    </View>
     );
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        width : '100%',
        flex:1,
        flexDirection: 'column'
    },  
    postView: {
        width: '100%',
        height: '50%',
        borderWidth: 1,
        borderColor: colors.grey
    },
    backgroundChooser: {
        flex:0,
        flexDirection: 'row',
        justifyContent: 'center',
        alignContent: 'center',
        width: '100%',
        height: '5%',
        borderBottomWidth: 1.9,
        borderTopWidth: .9,
        borderColor: colors.light_grey,
        shadowColor: colors.light_grey,
        shadowOpacity: 0.9,
        shadowOffset: {
            width: 2,
            height: 2
          },
    },
    backgroundTypeButton: {
        width: '100%',
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    heading: {
        fontWeight: '600',
        fontSize: 14
    },
    editor: {
        flex:1,
    },
    editorContent: {
        flex:1,
        padding: '6%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    colorBar: {
        width: '93%',
        height: '13%',
        borderWidth: 1,
        borderColor: 'black',
        alignSelf: 'center',
        flexDirection: 'row'
    },
    primaryColorBar: {
        height : '100%'
    },
    secondaryColorBox: {
        width: '93%',
        height: '80%'
    },
    secondaryColor: {
        padding: '5%'
    },
    navigationDotsView: {
       width: '5%',
       height: '3%',
       alignSelf: 'center',
       position: 'absolute',
       flexDirection: 'row',
       justifyContent: 'center',
       bottom: 50,
    },
    closedDot: {
        width: '5%',
        backgroundColor: colors.grey,
        borderColor: colors.grey,
        borderWidth: 1,
        borderRadius: 100,
        margin: 5,
        padding: 5
    },
    openDot: {
        width: '5%',
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 120,
        margin: 5,
        padding: 5
    }
    
})
 
export default StylizedPostScreen2;