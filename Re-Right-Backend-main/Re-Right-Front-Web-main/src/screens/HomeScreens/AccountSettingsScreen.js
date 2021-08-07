import { useDeviceOrientation, useDimensions } from "@react-native-community/hooks";
import React, {useState} from "react";
import { Button, Image, Pressable, ScrollView, SwitchComponent, Text, View,Switch, StyleSheet, TextInput, SafeAreaView } from 'react-native'
import colors from "../../../config/colors";
import colorsTest from "../../../config/colorsTest";
import "../../../config/global.js";
import GetSignUp1Style from "../../../config/SignUp1Css";
import SearchBar from "./UsableSearchBar";

const AccountSettings = ({navigation}) => {
    const [bioIsEnabled, setbioIsEnabled] = useState(false);
    const togglebioSwitch = () => setbioIsEnabled(previousState => !previousState);
    const [discoverIsEnabled, setdiscoverIsEnabled] = useState(false);
    const togglediscoverSwitch = () => setdiscoverIsEnabled(previousState => !previousState);
    const [darkIsEnabled, setdarkIsEnabled] = useState(global.isDarkModeEnabled);
    const toggledarkSwitch = () => {
        global.isDarkModeEnabled = !global.isDarkModeEnabled;
        setdarkIsEnabled(global.isDarkModeEnabled);
        navigation.navigate( 'Profile', {isItDark: global.isDarkModeEnabled});
    }
   
    const handleUserNamePress = () => {
        navigation.navigate("ChangeUserName")
    }
    const handleEmailPress = () => {
        navigation.navigate("ChangeEmail")
    }
    const handlePasswordPress = () => {
        navigation.navigate("ChangePassword")
    }
    const [searchedSetting, setSearchedSetting] = useState('');

    return ( 
        <SafeAreaView> 
        <ScrollView style= {{backgroundColor: darkIsEnabled? '#181818' : 'rgb(239,239,239)'}}>
            <View style = {styles.searchBar}>
                        <Image style={styles.searchIcon} source={require('../../../assets/search.png')}/>
                        <TextInput style = {styles.searchInput}
                                    placeholder= "Search Settings"
                                    onChangeText = {(text) => setSearchedSetting(text)}
                                     /> 
            </View>
            <View style={{marginBottom: 20,width: '100%',padding:'2%'}}>
            <Text style={{color: darkIsEnabled? 'white' : colors.black, marginTop: 20, marginLeft:'5%', fontSize: 20, fontWeight: '600'}}> Account Details </Text>
                <View style={{ height: '21%', marginTop: 10, width: '92%', flexDirection: 'column', alignContent: 'center',backgroundColor:colors.white, alignSelf: 'center', borderRadius: 20}}>
                <Pressable onPress={() => handleUserNamePress()} style={ ({pressed}) => [ {  height: '140%',backgroundColor: darkIsEnabled===false?(pressed? colors.light_grey: 'white'):(pressed? colors.grey: '#212121'), paddingVertical: 0, width: '100%', textAlignVertical: 'center',flexDirection: 'row',paddingLeft: 10, borderBottomWidth: 1,borderTopStartRadius:15, paddingTop: 15,borderTopEndRadius:15, borderColor: colors.light_grey}]}>
                    <View style= {{ marginTop: '2%',marginBottom: '2%', flex:1, flexDirection: 'row', textAlignVertical: 'center'}}>
                        <Image style={{ tintColor: darkIsEnabled? colors.blue: "#1E3473", alignItems: "flex-start", width: 24, height: 24,marginRight: 2}} source={require('../../../assets/user.png')} />
                        <Text style = {[{ paddingLeft: '3%' ,textAlignVertical: 'center', color: darkIsEnabled? 'white' : colors.black, flex: 1, fontWeight: "400"},styles.subtitle]}> Change Username </Text>
                        <Image style={{tintColor: darkIsEnabled? 'grey': 'grey', width: 12, height: 12, marginTop:0,marginRight: 20}} source={require('../../../assets/right-arrow.png')} />
                    </View>
                </Pressable>
                <Pressable onPress={() => handleEmailPress()} style={ ({pressed}) => [ { height: '140%',backgroundColor: darkIsEnabled===false?(pressed? colors.light_grey: 'white'):(pressed? colors.grey: '#212121'), paddingVertical: 0, width: '100%', textAlignVertical: 'center',flexDirection: 'row',paddingLeft: 10, borderBottomWidth: 1,borderTopStartRadius:0, paddingTop: 15,borderTopEndRadius:0, borderColor: colors.light_grey}]}>
                    <View style= {{ marginTop: '2%',marginBottom: '2%',flex:1, flexDirection: 'row', textAlignVertical: 'center'}}>
                        <Image style={{ tintColor: darkIsEnabled? colors.blue: "#1E3473",alignItems: "flex-start", width: 24, height: 24,marginRight: 2}} source={require('../../../assets/email.png')} />
                        <Text style = {[{ paddingLeft: '3%' ,color: darkIsEnabled? 'white' : colors.black,textAlignVertical:'center', flex: 1, alignItems: "flex-start", fontWeight: "400"},styles.subtitle]}> Change Email </Text>
                        <Image style={{tintColor: darkIsEnabled? 'grey': 'grey',alignItems: "flex-end", width: 12, height: 12, marginTop:0,marginRight: 20}} source={require('../../../assets/right-arrow.png')} />
                    </View>
                </Pressable>
                <Pressable onPress={() => handlePasswordPress()} style={ ({pressed}) => [ { height: '140%',backgroundColor: darkIsEnabled===false?(pressed? colors.grey: 'white'):(pressed? colors.grey: '#212121'), paddingVertical: 0, width: '100%', textAlignVertical: 'center',flexDirection: 'row',paddingLeft: 10, borderBottomWidth: 0,borderBottomStartRadius:15, paddingTop: 15,borderBottomEndRadius:15,  borderColor: colors.light_grey}]}>
                    <View style= {{ marginTop: '2%', marginBottom: '2%',flex:1, flexDirection: 'row', textAlignVertical: 'center'}}>
                        <Image style={{ tintColor: darkIsEnabled? colors.blue: "#1E3473",alignItems: "flex-start", width: 24, height: 24,marginRight: 2}} source={require('../../../assets/padlock.png')} />
                        <Text style = {[{ paddingLeft: '3%' , color: darkIsEnabled? 'white' : colors.black,textAlignVertical:'center', flex: 1, alignItems: "flex-start", fontWeight: "400"},styles.subtitle]}> Change Password </Text>
                        <Image style={{tintColor: darkIsEnabled? 'grey': 'grey',alignItems: "flex-end", width: 12, height: 12, marginTop:0,marginRight: 20}} source={require('../../../assets/right-arrow.png')} />
                    </View>
                </Pressable>
                </View>
            </View>
            <View style={{width: '100%',padding:'2%'}}>
            <Text style={{color: darkIsEnabled? 'white' : colors.black,marginTop: 20, marginLeft:'5%', fontSize: 20, fontWeight: '600'}}> Privacy and Security</Text>
            <View style={{ height: '25%', marginTop: 10,width: '92%', flexDirection: 'column', alignContent: 'center',backgroundColor:colors.white, alignSelf: 'center', borderRadius: 20}}>
                <Pressable style={ ({pressed}) => [ {  height: '95%',backgroundColor: darkIsEnabled===false?(pressed? colors.background_list_item: colors.background_list_item):(pressed? '#212121': '#212121'), paddingVertical: 0, width: '100%', textAlignVertical: 'center',flexDirection: 'row',paddingLeft: 10, borderBottomWidth: 1,borderTopStartRadius:15, paddingTop: 15,borderTopEndRadius:15, borderColor: colors.light_grey}]}>
                <View style= {{ marginTop: '1%',marginBottom: '2%',flex:1, flexDirection: 'row', textAlignVertical: 'center'}}>
                        <Image style={{ width: 24, height: 24,marginRight: 2}} source={require('../../../assets/research.png')} />
                        <Text style = {[{ paddingLeft: '3%' ,color: darkIsEnabled? 'white' : colors.black,textAlignVertical:'center', flex: 1, alignItems: "flex-start", fontWeight: "400"},styles.subtitle]}> Show My Bio </Text>
                        <Switch style = {{marginRight: 12, marginBottom: 10 }}
                                trackColor={{ false: "grey", true: "light_green" }}
                                thumbColor={bioIsEnabled ? "white" : "white"}
                                ios_backgroundColor="grey"
                                onValueChange={togglebioSwitch}
                                value={bioIsEnabled} />
                </View>
                </Pressable>
                <Pressable style={ ({pressed}) => [ { height: '95%',backgroundColor: darkIsEnabled===false?(pressed? colors.background_list_item: colors.background_list_item):(pressed? '#212121': '#212121'), paddingVertical: 0, width: '100%', textAlignVertical: 'center',flexDirection: 'row',paddingLeft: 10, borderBottomWidth: 1,borderTopStartRadius:0, paddingTop: 15,borderTopEndRadius:0, borderColor: colors.light_grey}]}>
                    <View style= {{ marginTop: '1%',marginBottom: '2%',flex:1, flexDirection: 'row', textAlignVertical: 'center'}}>
                        <Image style={{ tintColor: darkIsEnabled? '#007F7F': '#144F4B',alignItems: "flex-start", width: 24, height: 24,marginRight: 2}} source={require('../../../assets/private.png')} />
                        <Text style = {[{ paddingLeft: '3%' ,color: darkIsEnabled? 'white' : colors.black,textAlignVertical:'center', flex: 1, alignItems: "flex-start", fontWeight: "400", paddingRight: 4},styles.subtitle]}> Allow Profile Discovery </Text>
                        <Switch style = {{marginRight: 12}}
                                trackColor={{ false: "grey", true: "light_green" }}
                                thumbColor={discoverIsEnabled ? "white" : "white"}
                                ios_backgroundColor="grey"
                                onValueChange={togglediscoverSwitch}
                                value={discoverIsEnabled} />
                    </View>
                </Pressable>
                <Pressable onPress={() => navigation.navigate("Social Media Tracking",{signedIn:true})}  style={ ({pressed}) => [ { height: '95%',backgroundColor: darkIsEnabled===false?(pressed? colors.light_grey: 'white'):(pressed? colors.grey: '#212121'), paddingVertical: 0, width: '100%', textAlignVertical: 'center',flexDirection: 'row',paddingLeft: 10, borderBottomWidth: 1,borderTopStartRadius:0, paddingTop: 15,borderTopEndRadius:0, borderColor: colors.light_grey}]}>
                    <View style= {{ marginTop: '1%',marginBottom: '2%',flex:1, flexDirection: 'row', textAlignVertical: 'center'}}>
                        <Image style={{ tintColor: darkIsEnabled? '#007F7F': '#144F4B',alignItems: "flex-start", width: 24, height: 24,marginRight: 2}} source={require('../../../assets/user.png')} />
                        <Text style = {[{ paddingLeft: '3%' , color: darkIsEnabled? 'white' : colors.black,textAlignVertical:'center', flex: 1, alignItems: "flex-start", fontWeight: "400"},styles.subtitle]}> Social Media Tracking </Text>
                        <Image style={{tintColor: darkIsEnabled? 'grey': 'grey',alignItems: "flex-end", width: 12, height: 12, marginTop:0,marginRight: 20}} source={require('../../../assets/right-arrow.png')} />
                    </View>
                </Pressable>
                <Pressable style={ ({pressed}) => [ { height: '95%',backgroundColor: darkIsEnabled===false?(pressed? colors.grey: 'white'):(pressed? colors.grey: '#212121'), paddingVertical: 0, width: '100%', textAlignVertical: 'center',flexDirection: 'row',paddingLeft: 10, borderBottomWidth: 0,borderBottomStartRadius:15, paddingTop: 15,borderBottomEndRadius:15,  borderColor: colors.light_grey}]}>
                    <Image style={{ tintColor: darkIsEnabled? '#007F7F': '#144F4B',alignItems: "flex-start", width: 24, height: 24,marginRight: 2}} source={require('../../../assets/private.png')} />
                    <Text style = {[{ paddingLeft: '3%' , color: darkIsEnabled? 'white' : colors.black,textAlignVertical:'center', flex: 1, alignItems: "flex-start", fontWeight: "400"},styles.subtitle]}> Other Settings</Text>
                    <Image style={{tintColor: darkIsEnabled? 'grey': 'grey',alignItems: "flex-end", width: 12, height: 12, marginTop:0,marginRight: 20}} source={require('../../../assets/right-arrow.png')} />
                </Pressable>
                </View>
            </View>
            <View style={{width: '100%',padding:'2%', marginTop: '5%'}}>
            <Text style={{color: darkIsEnabled? 'white' : colors.black,marginTop: 20, marginLeft:'5%', fontSize: 20, fontWeight: '600'}}> Display </Text>
                <View style={{marginTop: 10,width: '92%', flexDirection: 'column', alignContent: 'center',backgroundColor: darkIsEnabled? colors.grey:colors.white, alignSelf: 'center', borderRadius: 20}}>
                <Pressable style={ ({pressed}) => [ { backgroundColor: darkIsEnabled===false?(pressed? 'white': 'white'):(pressed? '#212121': '#212121'), paddingVertical: 15, width: '100%', textAlignVertical: 'center',flexDirection: 'row',paddingLeft: 10, borderBottomWidth: 1,borderTopStartRadius:15, paddingTop: 15,borderTopEndRadius:15, borderColor: colors.light_grey}]}>
                    <Image style={{ alignItems: "flex-start", width: 24, height: 24,marginRight: 2}} source={require('../../../assets/research.png')} />
                    <Text style = {[{ paddingLeft: '3%' , color: darkIsEnabled? 'white' : colors.black,textAlignVertical:'center', flex: 1, alignItems: "flex-start", fontWeight: "400", paddingRight: 4},styles.subtitle]}> Dark Mode </Text>
                    <Switch style = {{marginRight: 12}}
                            trackColor={{ false: "grey", true: "light_green" }}
                            thumbColor={darkIsEnabled ? "white" : "white"}
                            ios_backgroundColor="grey"
                            onValueChange={toggledarkSwitch}
                            value={darkIsEnabled} />
                </Pressable>
                <Pressable style={ ({pressed}) => [ { backgroundColor: darkIsEnabled===false?(pressed? colorsTest.light_grey: 'white'):(pressed? colors.grey: '#212121'), paddingVertical: 15, width: '100%', textAlignVertical: 'center',flexDirection: 'row',paddingLeft: 10, borderBottomWidth: 0,borderBottomStartRadius:15, paddingTop: 15,borderBottomEndRadius:15,  borderColor: colors.light_grey}]}>
                     <Image style={{ tintColor: darkIsEnabled? 'white': 'black',alignItems: "flex-start", width: 24, height: 24,marginRight: 2}} source={require('../../../assets/private.png')} />
                     <Text style = {[{ paddingLeft: '3%' , color: darkIsEnabled? 'white' : colors.black,textAlignVertical:'center', flex: 1, alignItems: "flex-start", fontWeight: "400", paddingRight: 4},styles.subtitle]}> Custom Modes</Text>                   
                    <Image style={{tintColor: darkIsEnabled? 'white': 'black',alignItems: "flex-end",alignContent: "flex-end",alignSelf: "flex-end", width: 12, height: 12, marginTop:0,marginRight: 20}} source={require('../../../assets/right-arrow.png')} />
                </Pressable>
                </View>
            </View>
        </ScrollView>
        </SafeAreaView>
     );
}
 
const styles = StyleSheet.create({
    subtitle: {
        fontSize: 18,
        fontWeight: '500',
    },
    searchBar: {
        flexDirection: 'row',
        width: '90%',
        marginTop: '4%',
        marginLeft: '5%',
        height: 1,
        flex: 1,
        borderRadius: 10,
        borderWidth: 0.2,
        borderColor: colors.border,
        backgroundColor: colors.lighter_grey
    },
    searchIcon: {
        position: 'absolute',
        alignSelf: 'center',
        marginLeft: 5,
        tintColor: colors.tintColor,
        paddingRight: 10,
    },
    searchInput: {
        paddingLeft: 40
    }
})
export default AccountSettings;

