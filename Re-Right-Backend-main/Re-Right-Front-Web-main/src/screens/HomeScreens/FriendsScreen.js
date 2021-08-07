//Friends Page
import React, {Component} from 'react';
import { View,StyleSheet, Text, Image, FlatList, TouchableOpacity, Pressable, Alert, Platform} from 'react-native';
import SearchBar from './UsableSearchBar';
import '../../../config/global';
import color from '../../../config/colors';
import darkColors from '../../../config/darkColors';

const data = [
    { id: '0', title: 'Abhinav Gupta', mutual: '25', bio: "I love food. I enjoy breathing. And human rights are cool!" },
    { id: '1', title: 'Nyun Ei Hlaing', mutual: '23', bio: "I hate food, don't mind breathing, and hope to learn more about human rights!"},
    { id: '2', title: 'Nicolas Prate', mutual: '12', bio: "I am mysterious. Ask me a question and I will respond with two."},
    { id: '3', title: 'Nathan Cook', mutual: '30', bio: "I have so much to say that my biography is super duper uber luber long. I like to flex my wordcount and don't write ANYTHING that can fit on a single line. HAHHAHAHAHA I hope your code can handle my impecable wordy strings! Oh, I almost forgot HELLO WORLD! :) need longerneed longerneed longerneed longerneed longerneed longerneed longerneed longerneed longerneed longerneed longerneed longerneed longerneed longerneed longerneed longerneed longerneed longerneed longerneed longerneed longerneed longerneed longerneed longer"},
    { id: '4', title: 'Abhinav Gupta', mutual: '25', bio: "I am mysterious. Ask me a question and I will respond with two."},
    { id: '5', title: 'Nyun Ei Hlaing', mutual: '23', bio: "I love food. I enjoy breathing. And human rights are cool!" },
    { id: '6', title: 'Nicolas Prate', mutual: '12', bio: "I have so much to say that my biography is super duper uber luber long. I like to flex my wordcount and don't write ANYTHING that can fit on a single line. HAHHAHAHAHA I hope your code can handle my impecable wordy strings! Oh, I almost forgot HELLO WORLD! :)HELLO WORLD! :)HELLO WORLD! :)HELLO WORLD! :)HELLO WORLD! :)HELLO WORLD! :)HELLO WORLD! :)HELLO WORLD! :)HELLO WORLD! :)HELLO WORLD! :)HELLO WORLD! :)HELLO WORLD! :)HELLO WORLD! :)HELLO WORLD! :)HELLO WORLD! :)HELLO WORLD! :)HELLO WORLD! :)HELLO WORLD! :)HELLO WORLD! :)HELLO WORLD! :)HELLO WORLD! :)HELLO WORLD! :)HELLO WORLD! :)HELLO WORLD! :)HELLO WORLD! :)HELLO WORLD! :)HELLO WORLD! :)HELLO WORLD! :)HELLO WORLD! :)HELLO WORLD! :)HELLO WORLD! :)HELLO WORLD! :)HELLO WORLD! :)" },
    { id: '7', title: 'Nathan Cook', mutual: '30', bio: "I am mysterious. Ask me a question and I will respond with two."},
    { id: '8', title: 'Abhinav Gupta', mutual: '25', bio: "I love food. I enjoy breathing. And human rights are cool!" },
    { id: '9', title: 'Nyun Ei Hlaing', mutual: '23', bio: "I hate food, don't mind breathing, and hope to learn more about human rights!" },
    { id: '10', title: 'Nicolas Prate', mutual: '12', bio: "I am mysterious. Ask me a question and I will respond with two."},
    { id: '11', title: 'Nathan Cook', mutual: '30', bio: "I love food. I enjoy breathing. And human rights are cool!" },
    { id: '12', title: 'Abhinav Gupta', mutual: '25', bio: "I am mysterious. Ask me a question and I will respond with two."},
    { id: '13', title: 'Nyun Ei Hlaing', mutual: '23', bio: "I have so much to say that my biography is super duper uber luber long. I like to flex my wordcount and don't write ANYTHING that can fit on a single line. HAHHAHAHAHA I hope your code can handle my impecable wordy strings! Oh, I almost forgot HELLO WORLD! :)" },
    { id: '14', title: 'Nicolas Prate', mutual: '12', bio: "I love food. I enjoy breathing. And human rights are cool!" },
    { id: '15', title: 'Nathan Cook', mutual: '30', bio: "I am mysterious. Ask me a question and I will respond with two."},
]

export default class FriendsScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {friendsList: data};
    }
    render() {
        const colors = global.isDarkModeEnabled? darkColors: color; 
        const styles = StyleSheet.create({
            container: {
              flex: 1,
              alignItems: 'center',
              backgroundColor: colors.background_screen,
            },
            searchBar: {
                flexDirection: 'row',
                width: '90%',
                marginTop: '2%',
                flex: 1,
                borderRadius: 20,
                borderWidth: 0.2,
                borderColor: colors.border
            },
            searchIcon: {
                position: 'absolute',
                alignSelf: 'center',
                marginLeft: 5,
                tintColor: colors.tintColor
            },
            inputBar: {
                flex: 1,
                padding: 10,
                paddingLeft: 30,  
                color: colors.text_general   
            },
            friendsContainer: {
                width: '100%',
                marginTop: '2%',
                flex: 20,
                backgroundColor: colors.background_list_item,
            },
            friendsNum: {
                width: '100%',
                alignSelf: 'flex-start',
                fontSize: 20,
                paddingLeft: '5%',
                color: colors.text_general,
                borderBottomWidth: 0.5,
            },
            listItem: {
                width: '100%',
                height: 75,
                borderBottomWidth: 0.5,
                paddingLeft: '1%',
                paddingRight: '1%',
                flexDirection: 'row',
                //backgroundColor: "white", used to help visualize layouts
            },
            profilePicNameContainer: {
                width: Platform.OS === 'web' ? '30%' : '50%',
                flexDirection: 'row',
                justifyContent: 'flex-start',
                //backgroundColor: 'yellow', used to help visualize layouts
            },
            bioContainer: {
                width: Platform.OS === 'web' ? '60%' : '30%',
                height: '100%',
                justifyContent: 'center',
                //backgroundColor: "green", used to help visualize layouts
            },
            removeButton : {
                width: Platform.OS === 'web' ? '10%' : '20%',
                height: '50%',
                backgroundColor: colors.button_delete,
                borderRadius: 10,
                alignSelf: 'center',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '1%',
            },
            buttonText: {
                fontSize: 16,
                fontWeight: 'bold',
                letterSpacing: 0.25,
                alignContent: 'center',
                color: colors.text_button,
            },
            recommendedButton: {
                flex: 1,
                backgroundColor: colors.button_recommended_friends,
                marginTop: '2%',
                alignSelf: 'center',
                alignItems: 'center',
                justifyContent: 'center',
                borderColor: colors.border,
                borderWidth: 1,
                borderRadius: 10,
                shadowColor: colors.shadow,
                shadowRadius: 10, 
                padding: '1%',
                margin: '1%',
            },
            profileNameContainer: {
                width: '70%',
                justifyContent: 'center',
            },
            profilePic: {
                width: '30%',
                height: '90%',
                resizeMode: 'contain',
                borderRadius: 100,
                alignSelf: 'center',

            },
            profileNameText: {
                color: colors.text_general,
                fontWeight: '700',
            },
            mutualFriendsText: {
                fontSize:15,
                color: colors.text_general,
                fontWeight: '700',
                paddingTop: '1%',
            },
            
            bioText: {
                fontSize: 12,
                letterSpacing: 0.25,
                color: colors.text_subtitle,
                paddingLeft: '2%',
                paddingRight: '1%',
            }
          });

        const removeFriendAlert = (id,name) => {
            if (Platform.OS === 'web') {
                const confirmed = window.confirm("Unfriend "+name+"?\n"+
                    "This action is irreversable and will remove you from "+name+"'s friend list as well.");
                if (confirmed) {
                    handleRemoveFriend(id);
                }
                
            } else {
                Alert.alert(
                    "Unfriend "+name+"?",
                    "This action is irreversable and will remove you from "+name+"'s friend list as well.",
                    [
                      { text: "Cancel"},
                      {
                        text: "Confirm",
                        onPress: () => {handleRemoveFriend(id)},
                      },
                    ]
                );
            }
            
        }
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
        const handleRecommendedPress = () => {
            console.log("Handling press");
            this.props.navigation.navigate("Recommended Friends");
        }

        return (
            <View style={styles.container}>
                <Pressable style={({pressed}) => [{
                    backgroundColor: pressed ? colors.button_pressed : colors.button_recommended_friends,},
                    styles.recommendedButton,]}
                    onPress={() => handleRecommendedPress()}>
                    <Text style={styles.buttonText}>Recommended Friends</Text>
                </Pressable>
                <View style = {styles.searchBar}>
                    <Image style={styles.searchIcon} source={require('../../../assets/search.png')}/>
                    <SearchBar/>
                </View>

                <View style ={styles.friendsContainer}>
                    <Text style = {styles.friendsNum}>{this.state.friendsList.length} Friends</Text>
                    <FlatList
                        data={this.state.friendsList}
                        keyExtractor={item => item.id}
                        renderItem={({ item }) => (
                            
                        <View style={styles.listItem}>

                            <View style={styles.profilePicNameContainer}>
                                <Image style = {styles.profilePic} source = { require("../../../assets/userpfp.png") }/>
                                <View style = {styles.profileNameContainer}>
                                    <Text style= {styles.profileNameText}>{item.title}</Text>
                                    <Text style={styles.mutualFriendsText}>{item.mutual} mutual friends</Text>
                                </View>
                            </View>

                            <View style={styles.bioContainer}>
                                <Text style={styles.bioText} numberOfLines={2}>{"\""+item.bio+"\""}</Text>
                            </View>
                            
                            <TouchableOpacity
                                onPress={()=> removeFriendAlert(item.id, item.title)}
                                style={styles.removeButton}>
                                <Text style={styles.buttonText}>Unfriend</Text>
                            </TouchableOpacity>
                        </View>
                        )}
                    />
                </View> 
          </View>
        ); 
    }
}