import React from "react";
import {
  Image,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  Pressable,
} from "react-native";
//import { useDeviceOrientation, useDimensions } from '@react-native-community/hooks';

import '../../../config/global';
import color from '../../../config/colors';
import darkColors from '../../../config/darkColors';

const mapToolName = "HRV Report Map"
export default function ResearchScreen({navigation}) {
  const colors = global.isDarkModeEnabled? darkColors: color; 
    //styles are here sorry for the mess but we need this for dark mode


    //const { landscape, portrait } = useDeviceOrientation();
    //const {width, height} = useDimensions().window;
    const styles = StyleSheet.create({
        background: {
          flex: 1,
          backgroundColor: colors.background_screen,
        },
        
        title: {
          fontSize: 25,
          alignSelf: 'center',
          fontWeight: 'bold',
          color: colors.text_screen_header,
          
        },

        subtitle: {
          fontSize: 15,
          marginLeft: 25,
          marginRight: 20,
          marginTop: 5,
          marginBottom: 10,
          alignSelf: 'center',
          color: colors.text_subtitle,
          fontWeight: '600'
        },
      
        recapboxes: {
          marginTop: 20,
        },
      
        button: {
          borderColor: "#77ACF1",
          borderRadius:10,
          padding: 10,
          paddingRight: 20,
          alignSelf: "center",
          justifyContent: 'flex-start',
          width: "90%",
          margin: 15,
          borderWidth: 2,
          flexDirection: 'row',
          flex: 1,

          
        },
      
        text: {
          fontSize: 18,
          alignSelf: "flex-start",
          lineHeight: 25,
          color: colors.text_general
        },
        
        arrow: {
          width: 16,
          height: 16,
          alignSelf: 'center',
          tintColor: colors.tintColor
        },
      
        suggestionButton: {
          borderWidth: 0,
          width: '40%',
          borderRadius: 10,
          alignSelf: 'center',
          padding: 10,
          margin: 10,
          
        },
        
        buttonText: {
          alignSelf: 'center',
          color: colors.text_general,
          
        },
      
      });

    const Tools = [
    {
      title: mapToolName,
      description: 'Need to develop a map tool.',
    },

    {
      title: 'More Analytics Tools to Come',
      description: 'Need to develop more tools',
    },

  
  ];
// create button and page for each element in Tools 
  const ToolsList = () => { 
    return Tools.map((element) => {
        if (element.title === mapToolName) {
            return (
                <TouchableOpacity style={styles.button}
                        onPress={() => { navigation.navigate('Map Tool',
                            {title : element.title, description: element.description})}}>
                    <Image style={styles.arrow} source={require('../../../assets/right-arrow.png')}/>
                    <Text style={styles.text}>{element.title}</Text>
                </TouchableOpacity>
            );
        } else {
            return (
                <TouchableOpacity style={styles.button}>
                    <Image style={styles.arrow} source={require('../../../assets/right-arrow.png')}/>
                    <Text style={styles.text}>{element.title}</Text>
                </TouchableOpacity>
            );
        }
        
    });
  };

  return (
    
    <SafeAreaView style={styles.background}>
      <ScrollView style={styles.recapboxes}>
        <Text style = {styles.title}>Tools</Text>
        <Text style = {styles.subtitle}>These tools demonstrate the power of our HRV database to help identify and prevent trends of HRVs </Text>
        {ToolsList()}
        <Pressable style={({pressed}) => [{
            backgroundColor: pressed ? colors.grey : colors.black},
            styles.suggestionButton]} 
            onPress={() => navigation.navigate("Submit Suggestion")} >
            <Text style={styles.buttonText}>Submit a Suggestion</Text>
        </Pressable>
      </ScrollView>
    </SafeAreaView>
    
  );
};