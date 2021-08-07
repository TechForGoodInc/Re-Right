//Rename to App.js to run
import React, { useState } from 'react';
import { RefreshControl, View, StyleSheet, Text, Image, SafeAreaView, ScrollView, Pressable, Touchable, Platform, ActivityIndicator, FlatList } from 'react-native';
import SamplePost from './SamplePost';
import { useEffect } from 'react';
import '../../../config/global';
import color from '../../../config/colors';
import darkColors from '../../../config/darkColors';
const pad = 10;
const feedflex = 6;

const wait = (timeout) => {
  return new Promise(resolve => setTimeout(resolve, timeout));
}

export default function HomeScreen({route,navigation}) {
    //getting the darkmode from the stackNav
    const colors = global.isDarkModeEnabled? darkColors: color; 
    const [{isItDark},setIsItDark] = useState(route.params);
    const [refreshing, setRefreshing] = React.useState(false);
    const onRefresh = React.useCallback(() => {
      setRefreshing(true);
      wait(2000).then(() => setRefreshing(false));
    }, []);
    useEffect(() => {
      setRefreshing(true);
      wait(2000).then(() => setRefreshing(false));
      }, []);

    //fetching posts from API (not done yet, still need to fetch comments)
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);

    const getPostsFromAPI = () => {
        return fetch('http://10.0.2.2:8000/papi/post-list/')

        .then((response) => response.json())
        .then((json) => {
            setData(json.posts)
            setLoading(false)
        })
        .catch((error) => {
            console.error(error);
        });

    };

    useEffect(() => {
        getPostsFromAPI();
    }, []);
    return (

        <SafeAreaView style={{
          flex: feedflex,
          padding: pad,
          backgroundColor: "white",
          flexDirection: "column",
          width: '98%',
          height: '100%',
          alignSelf: "center",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: 'white'
        }}>
          <ScrollView
          style={{backgroundColor: 'white'}}
          direction alLockEnabled = 'true'
          refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
          /> }
          > /* This is for displaying the posts after fetching them */
          { loading ? <ActivityIndicator/> : (
            <FlatList
                data = {data}
                keyExtractor = {({ id }, index) => id}
                renderItem = {({ item }) => (
                  <View style={styles.postContainer}>
                  <View style = {styles.postHeader}>
                    <Text
                      style = {styles.postUsername} > { item.author }
                    </Text>
                  </View>
                      <Image style = {styles.post}
                      source = { {
                          uri: item.image,
                          width: '100%',
                          height: 400,} }
                        />
                  <View style={styles.likeBar}>
                        <Pressable>
                          <Image  tintColor='white' style = {styles.likeHeartComment} source = { {
                          uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPkns6lML4oMFvmxMM_H0055UCIPsEk152dw&usqp=CAU' ,
                          width: '12%',
                          height: 39,} }
                        />
                        </Pressable>
                        <Pressable >
                          <Image style = {styles.likeHeartComment} source = { {
                          uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT45bKRsJCXqu3xgT5ydfKRJJRV0VK5Ms6jVg&usqp=CAU' ,
                          width: '12%',
                          height: 39,} }
                        />
                        </Pressable>
                        <Pressable>
                          <Image tintColor='black' style = {styles.likeHeartComment} source = { {
                          uri: 'https://static.thenounproject.com/png/638755-200.png' ,
                          width: '12%',
                          height: 49,} }
                        />
                        </Pressable>
                  </View>
                  <Text> {item.no_of_likes} likes</Text>
                  <View style = {styles.CommentBar} >
                      <View style = {styles.wholeComment} >
                          <Text numberOfLines = {item.no_of_comments} style = {styles.comment}>
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
                )}
            />
          )}
          <SamplePost/>
          <SamplePost/>
          <SamplePost/>
          <SamplePost/>
          <SamplePost/>
          <SamplePost/>
          <SamplePost/>
          <SamplePost/>
          <SamplePost/>
          <SamplePost/>
          <SamplePost/>
          <SamplePost/>
          <SamplePost/>
          <SamplePost/>
          <SamplePost/>
          <SamplePost/>
          <SamplePost/>
          <SamplePost/>
          <SamplePost/>
          <SamplePost/>
          <SamplePost/>
          <SamplePost/>
          <SamplePost/>
          <SamplePost/>
          </ScrollView>
        </SafeAreaView>
    );
}



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
    width: '10%',
  },
  posts: {
    flex:1,
    flexDirection: 'column',
    width: '100%',
  },

});


