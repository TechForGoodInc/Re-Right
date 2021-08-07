//Friends Page
import React, {Component, useState} from 'react';
import { View,StyleSheet, Text, Image, FlatList, TextInput, TouchableOpacity, Pressable} from 'react-native';

import '../../../config/global';
import color from '../../../config/colors';
import darkColors from '../../../config/darkColors';

const data = [
    { id: '0', title: 'Abhinav Gupta', mutual: '25' },
    { id: '1', title: 'Nyun Ei Hlaing', mutual: '23' },
    { id: '2', title: 'Nicolas Prate', mutual: '12' },
    { id: '3', title: 'Nathan Cook', mutual: '30' },
    { id: '4', title: 'Abhinav Gupta', mutual: '25' },
    { id: '5', title: 'Nyun Ei Hlaing', mutual: '23' },
    { id: '6', title: 'Nicolas Prate', mutual: '12' },
    { id: '7', title: 'Nathan Cook', mutual: '30' },
    { id: '8', title: 'Abhinav Gupta', mutual: '25' },
    { id: '9', title: 'Nyun Ei Hlaing', mutual: '23' },
    { id: '10', title: 'Nicolas Prate', mutual: '12' },
    { id: '11', title: 'Nathan Cook', mutual: '30' },
    { id: '12', title: 'Abhinav Gupta', mutual: '25' },
    { id: '13', title: 'Nyun Ei Hlaing', mutual: '23' },
    { id: '14', title: 'Nicolas Prate', mutual: '12' },
    { id: '15', title: 'Nathan Cook', mutual: '30' },
]

export default class RecommendedFriendsScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {friendsList: data};
    }
    render() {
        const colors = global.isDarkModeEnabled? darkColors: color; 
        //all the styles are here sorry for the mess but we need this for dark mode to work
        const styles = StyleSheet.create({
            screenContainer: {
              flex: 1,
              alignItems: 'center',
              backgroundColor: colors.background_screen,
            },
            headerContainer: {
                marginTop: '2%',
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
            },
            searchIcon: {
                position: 'absolute',
                alignSelf: 'center',
                marginLeft: 5,
                tintColor: colors.tintColor
            },
            headerText: {
                fontSize: 18,
                fontWeight: 'bold',
                color: colors.text_screen_header,
            },
            friendsContainer: {
                width: '100%',
                marginTop: "2%",
                flex: 20,
                backgroundColor: colors.background_list_item,
            },
            friendsNum: {
                alignSelf: 'flex-start',
                fontSize: 20,
                marginLeft: '5%',
                color: colors.text_general,
            },
            listItem: {
                borderBottomWidth: 0.5,
                paddingTop: 30,
                paddingBottom: 20,
                width: '100%',
                flexDirection: 'row',
                flex: 1,
            },
            profilePic: {
                width: '10%',
                height: '200%',
                resizeMode: 'contain',
                borderRadius: 100,
                marginLeft: '5%',
                alignSelf: 'center',
            },
            friendButton : {
                flex: 1,
                margin: 20,
                backgroundColor: colors.button_request_friend,
                borderRadius: 10,
                alignSelf: 'center',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'absolute',
                right: 0,
                padding: '1%',
            },
            newRecommendationsButton: {
                width: "40%",
                backgroundColor: colors.button_new_recommendations,
                alignSelf: 'center',
                alignItems: 'center',
                justifyContent: 'center',
                borderColor: colors.border,
                borderWidth: 1,
                borderRadius: 10,
                shadowColor: colors.shadow,
                shadowRadius: 10, 
                padding: '1%',
            },
            changeCriteriaButton: {
                width: "40%",
                backgroundColor: colors.button_change_criteria,
                alignSelf: 'center',
                alignItems: 'center',
                justifyContent: 'center',
                borderColor: colors.border,
                borderWidth: 1,
                borderRadius: 10,
                shadowColor: colors.shadow,
                shadowRadius: 10,
                padding: '1%',
            },
            buttonContainer: {
                width: '100%',
                flexDirection: 'row',
                justifyContent: 'space-evenly',
                marginTop: '2%',
            },
            buttonText: {
                flexDirection: 'row',
                fontSize: 16,
                fontWeight: 'bold',
                letterSpacing: 0.25,
                color: colors.text_button,
            },
          });
        const handleRemoveFriend = (id) => {
            var newFriendsList = this.state.friendsList;
            var indexToRemove = 0;
            for (var i = 0; i < this.state.friendsList.length; i++) {
                if (this.state.friendsList[i].id === id) {
                    indexToRemove = i;
                }
            }
            newFriendsList.splice(indexToRemove,1);
            this.setState({friendsList: newFriendsList});
            console.log(JSON.stringify(this.state.friendsList));
            console.log(id);
        }
        return (
            <View style={styles.screenContainer}>
                {/* <View style = {styles.headerContainer}>
                    <Text style={styles.headerText}>
                        Recommended Friends
                    </Text>
                </View> */}
                <View style={styles.buttonContainer}>
                    <Pressable style={({pressed}) => [{
                        backgroundColor: pressed ? colors.button_pressed : colors.button_new_recommendations,},
                        styles.newRecommendationsButton,]}
                        onPress={() => handleRecommendedPress()}>
                        <Text style={styles.buttonText}>See New Users</Text>
                    </Pressable>
                    <Pressable style={({pressed}) => [{
                        backgroundColor: pressed ? colors.button_pressed : colors.button_change_criteria,},
                        styles.changeCriteriaButton,]}
                        onPress={() => handleRecommendedPress()}>
                        <Text style={styles.buttonText}>Change Criteria</Text>
                    </Pressable>
                </View>
                
                <View style ={styles.friendsContainer}>
                    <Text style = {styles.friendsNum}>{this.state.friendsList.length} Recommended Friends</Text>
                    <FlatList
                        data={this.state.friendsList}
                        keyExtractor={item => item.id}
                        renderItem={({ item }) => (
                            <View style={styles.listItem}>
                                <Image style = {styles.profilePic} source = { require("../../../assets/userpfp.png") }/>
                                <View style = {{marginLeft:'3%'}}>
                                    <Text style= {{fontSize:15, color: colors.text_general, fontWeight: '700' }}>{item.title}</Text>
                                    <Text style={{paddingTop: 5, color: colors.text_subtitle}}>{item.mutual} mutual friends</Text>
                                </View>
                                <TouchableOpacity
                                    onPress={()=> handleRemoveFriend(item.id)}
                                    style={styles.friendButton}>
                                    <Text style = {styles.buttonText}>Request Friend</Text>
                                </TouchableOpacity>
    
                            </View>
                        )}
                    />
                </View> 
            
          </View>
        ); 
    }
}