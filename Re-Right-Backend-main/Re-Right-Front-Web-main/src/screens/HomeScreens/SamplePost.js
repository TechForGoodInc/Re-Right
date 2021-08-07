
import React, { useState } from 'react';
import color from '../../../config/colors';
import darkColors from '../../../config/darkColors';
import { RefreshControl, View, StyleSheet, Text, Image, SafeAreaView, ScrollView, Pressable, Touchable } from 'react-native';

import '../../../config/global';

const usernames = ["@davidgross", "@hanyyacoub","@malavmevada", "@mariamatthews","@matthewdeangelo","@moisesvenouziou","@nathancook","@nicolasprate","@nyuneihlaing","@prachipatel","@shaylingzhao","@yacoubabulubad","@zeelpatel","@tarafishman","@abhinavgupta" ];
const comments = ["Did you click that??","Terrific post!","WoW!!!","I admire you","You are inspirational","There's so much positivity on this app","Beautiful!","I'm so glad I met you on this app!","You're the best! Such a nice post :)","Stay strong! Your posts are the best!","Amazing picture","Please be my friend","Sending positive vibes to you","Never change! You're amazing", "This is the best thing I've seen all day!","Thanks for spreading positive energy","You made my day better","This post is what I needed today, Thank you so much", "I love Re-Right"]
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
const getUsername = () => {
  const index = getRandomInt(usernames.length);
  return usernames[index];
}
const getName = () => {
  const index = getRandomInt(usernames.length);
  const user = usernames[index];
  return user.substr(1);
}
const getComment = () => {
  const index = getRandomInt(comments.length);
  return comments[index];
}
const getImage = () => {
    const postnumber = getRandomInt(600);
    const link = 'https://picsum.photos/' + String(postnumber);
    return {postNumber: postnumber, url: link};
}

const SamplePost = () => {
  const colors = global.isDarkModeEnabled? darkColors: color; 
  const [isItDark, setIsItDark] = useState(global.isDarkModeEnabled)

  const styles = StyleSheet.create({
    menuicon: {
      width: 75,
      height: 75,
      resizeMode: "contain",
    },
    feed: {
      flex:1,
      alignItems:'center',
      alignContent: 'center',
      alignSelf: 'center',
      width: '90%',
    },
    post: {
      flex:1,
      flexDirection: 'row',
      width: '100%',
    },
    postHeader: {
      flex:1,
      flexDirection: 'row',
      width: '90%',
      textAlign: 'right',
      color: colors.text_general
    },
    postUsername: {
      flexDirection: 'column',
      alignSelf:'flex-start',
      color: colors.text_general
    },
    postDots: {
      flexDirection: 'column',
      textAlign: 'right'
    },
    postContainer: {
      alignSelf: 'center',
      borderColor: 'black',
      marginVertical: 20,
      borderWidth: 1,
      padding: 20,
      flexDirection: 'column',
      width: '95%',
      backgroundColor: colors.background_post_type,
    },
    likeBar: {
      paddingTop: 10,
      flex: 1,
      flexDirection: 'row',
      alignContent: 'flex-start'
    },
    likeCount : {
      color: colors.text_general
    },
    CommentBar: {
        width: '100%'
    },
    wholeComment: {
      flexDirection: 'row',
      paddingVertical: 2
    },
    name: {
      fontWeight: '700',
      flexDirection: 'column',
      color: colors.text_general
    },
    comment: {
      flexDirection: 'column',
      color: colors.text_general
    },
    likeHeartComment: {
      padding: 20,
      marginHorizontal: 10,
      width: '12%',
      height: 39,
      flexDirection: 'column',
      tintColor: colors.text_general
    },
  });

    return ( 
        <View style={styles.postContainer}>
            <View style = {styles.postHeader}>
              <Text 
                style = {styles.postUsername} > { getUsername() }                                                          
              </Text>   
            </View>
                <Image style = {styles.post} 
                source = { { 
                    uri: getImage().url,
                    width: '100%',
                    height: 400,} }
                  />
            <View style={styles.likeBar}>
                  <Pressable>
                    <Image tintColor= {colors.text_general}  style = {styles.likeHeartComment} source= {require('../../../assets/like.png')}
                  />
                  </Pressable>
                  <Pressable >
                  <Image tintColor= {colors.text_general}  style = {styles.likeHeartComment} source= {require('../../../assets/heart.png')}
                  />
                  </Pressable>
                  <Pressable>
                    <Image tintColor= {colors.text_general} style = {styles.likeHeartComment} source = { { 
                    uri: 'https://static.thenounproject.com/png/638755-200.png' ,
                    width: '16%',
                    height: 60,} }
                  />
                  </Pressable>
            </View>
            <Text style = {styles.likeCount}> {getRandomInt(99999)} likes</Text>
            <View style = {styles.CommentBar} >
                <View style = {styles.wholeComment} >
                    <Text numberOfLines = {3} style = {styles.comment}> 
                    <Text style = {styles.name} > 
                        { getName() } : 
                    </Text>  
                        {getComment()} 
                    </Text>
                </View>
                    <View style = {styles.wholeComment} >
                    <Text numberOfLines = {3} style = {styles.comment}> 
                    <Text style = {styles.name} > 
                        { getName() } : 
                    </Text>  
                        {getComment()} 
                    </Text>
                </View>
                    <View style = {styles.wholeComment} >
                    <Text numberOfLines = {3} style = {styles.comment}> 
                    <Text style = {styles.name} > 
                        { getName() } : 
                    </Text>  
                        {getComment()} 
                    </Text>
                </View>
            </View>
          </View>
     );
}
export default SamplePost;