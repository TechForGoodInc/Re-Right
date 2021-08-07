import React, { useState ,useEffect}  from "react";
import { StyleSheet, View, Text, Modal, Pressable, TouchableOpacity, Button, Platform, Image, ImageBackground } from "react-native";
import '../../../config/global';
import color from '../../../config/colors';
import darkColors from '../../../config/darkColors';
import ImagePicker from 'react-native-image-picker';

const colorBarColors = [ 
    {primaryColor: 'white',
     secondaryColors: ["white","#DCDCDC","#C8C8C8","#B8B8B8","#A9A9A9","#888888"]},
    { primaryColor: "#C00000" ,
    secondaryColors: ["#C00000","#913831","#770737","#800000","#7B1818","#800020"]},
    { primaryColor: "#FF0000",
    secondaryColors: ["#FF0000","#E34234","#FF2400","#FF4433","#E0115F","#DE3163"]},
    { primaryColor: "#FFC000",
    secondaryColors: ["#FFC000","#F08000","#FF7518","#D96829","#EC5800","#FF5F1F"]},
    { primaryColor: "#FFFF00",
    secondaryColors: ["#FFFF00","#fff42e","#c8ff00","#dbd81d","#d5e625","#fffc40"]},
    { primaryColor: "#92D050",
    secondaryColors: ["#92D050","#93C572","#88c999","#33ff68","#0cfa4a","#5ebf0a"]},
    { primaryColor: "#00B050",
    secondaryColors: ["#00B050","#009142","#0a7a3d","#1a5703","#00B050","#00B050"]},
    { primaryColor: "#00B0F0",
    secondaryColors: ["#00B0F0","#94f1ff","#33d1f5","#1fbcff","#0099ff","#00B0F0"]},
    { primaryColor: "#0070C0",
    secondaryColors: ["#0070C0","#025d9e","#0070C0","#2d6bcf","#0070C0","#0048ff"]},
    { primaryColor: "#002060",
    secondaryColors: ["#002060","#041840","#040f61","#21117a","#0f0054","#0c0142"]},
    { primaryColor: "#7030A0",
    secondaryColors: ["#7030A0","#7030A0","#580078","#600069","#4a0144","#2f0533"]},
    { primaryColor: 'black',
    secondaryColors: ["black","#242323","#332f2f","#383838","#363333","#525252"]},
    ]

const numberOfPrimaryColors = colorBarColors.length
const StylizedPostScreen = ({navigation}) => {
    const colors = global.isDarkModeEnabled? darkColors: color; 
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
            borderColor: colors.background_screen
        },
        backgroundChooser: {
            flex:0,
            flexDirection: 'row',
            justifyContent: 'center',
            alignContent: 'center',
            width: '100%',
            height: '5%',
            borderBottomWidth: .9,
            borderTopWidth: .4,
            borderColor: colors.grey,
            shadowColor: colors.light_grey,
            shadowOpacity: 0.9,
            backgroundColor: colors.background_list_item,
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
            fontSize: 14,
            color: colors.text_general
        },
        editor: {
            flex:1,
            backgroundColor: colors.background_screen
        },
        editorContent: {
            flex:1,
            paddingTop: '2%',
            paddingLeft: '5%',
            paddingRight: '5%',
            paddingBottom: '5%',
            alignItems: 'center',
            justifyContent: 'center'
        },
        colorBar: {
            width: '93%',
            height: '13%',
            borderWidth: 1,
            borderColor: 'black',
            alignSelf: 'center',
            flexDirection: 'row',
            marginBottom: '4%'
        },
        primaryColorBar: {
            height : '100%',
        },
        secondaryColorBox: {
            width: '93%',
            height: '60%'
        },
        secondaryColor: {
            padding: '3%',
            borderRadius: 8,
            height: '90%',
            width: '30%'
        },
        navigationDotsView: {
           width: '5%',
           height: '3%',
           alignSelf: 'center',
           position: 'absolute',
           flexDirection: 'row',
           justifyContent: 'center',
           bottom: '10%',
           paddingTop: '4%'
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
            borderColor: colors.border,
            borderWidth: 1,
            borderRadius: 120,
            margin: 5,
            padding: 5
        }
        
    })
    // setting up all the variables that can be changed by the user
    const [backgroundType, setBackgroundType] = useState ('solid');
    // different background types
    const [solidBackground, setSolidBackground] = useState('white');
    const [currentPrimaryColor, setCurrentPrimaryColor] = useState('white');
    const [currentSecondaryColor, setCurrentSecondaryColor] = useState('white');
    const [textureBackground, setTextureBackground] = useState('none');
    const [imageBackground, setImageBackground] = useState('none');
    //Setting up the next button in header 
    
    const handleStylizedNextPress = () => {
        navigation.navigate('Stylized Post Screen 2',{backgroundType: backgroundType, solidColor: solidBackground, textureLink: textureBackground, imageLink: imageBackground })
    }
    useEffect(() => { 
        navigation.setOptions({ 
            headerRight: () => (
                <TouchableOpacity activeOpacity = { .5 } onPress={ handleStylizedNextPress }>
                    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center'}}> 
                        <Text style= {{ fontSize: 17,paddingRight: 9, alignSelf: 'center', color: colors.text_general, paddingHorizontal: 2}}> 
                            Next {'>'}
                        </Text> 
                    </View>
                </TouchableOpacity>
                )
        }) 
    }, [solidBackground])
    
    // Editor for solid backgrounds
    const [solidEditorOn,setSolidEditorOn] = useState(true)
    const enterSolidMode = () => {setSolidEditorOn(true); setTextureEditorOn(false);setImageEditorOn(false)}
    const SolidBackgroundEditor = () => {
        const [colorIndex,setColorIndex] = useState(()=>colorBarColors.findIndex((colorCombo)=> colorCombo.primaryColor === solidBackground || colorCombo.secondaryColors[colorCombo.secondaryColors.findIndex((secondarycolor)=> secondarycolor===currentSecondaryColor)] === solidBackground));
        const primaryColorBar = colorBarColors.map((colorCombo) => 
        { const currentColorIndex = colorBarColors.findIndex((color)=>color===colorCombo);
            return(
                    
                    <TouchableOpacity 
                        onPress={()=> {setColorIndex(currentColorIndex);setBackgroundType('solid');setSolidBackground(colorCombo.primaryColor);setCurrentPrimaryColor(colorCombo.primaryColor)}}
                        key={colorBarColors.indexOf(colorCombo)} 
                        style = {[{backgroundColor:colorCombo.primaryColor,width: 100/colorBarColors.length + '%'}]}>
                    </TouchableOpacity>  
                    
            );
        });
        const secondaryColorBar = colorBarColors.map((colorCombo)=> 
        {
            const [currentColorIndex,setCurrentColorIndex] = useState(colorBarColors.findIndex((color)=>color===colorCombo));
            return( 
                <View key={colorBarColors.indexOf(colorCombo)} 
                      style={{display: colorIndex===currentColorIndex?'flex':'none',flex:1,flexDirection:'column',alignSelf:'center',height:'70%',width:'93%'}}>
                    <View style={{flex:1,flexDirection:'row',height:'10%',width:'100%',padding:'1.2%'}}>
                        <TouchableOpacity 
                            onPress={()=> { setBackgroundType('solid') ; setSolidBackground(colorCombo.secondaryColors[0]);setCurrentSecondaryColor(colorCombo.secondaryColors[0])}}
                            style={[{ margin: '1%',backgroundColor:colorCombo.secondaryColors[0]},styles.secondaryColor]}>
                        </TouchableOpacity>
                        <TouchableOpacity 
                            onPress={()=> { setBackgroundType('solid') ;setSolidBackground(colorCombo.secondaryColors[1]);setCurrentSecondaryColor(colorCombo.secondaryColors[1])}}
                            style={[{margin: '1%',backgroundColor:colorCombo.secondaryColors[1]},styles.secondaryColor]}>
                        </TouchableOpacity> 
                        <TouchableOpacity 
                            onPress={()=> { setBackgroundType('solid') ;setSolidBackground(colorCombo.secondaryColors[2]);setCurrentSecondaryColor(colorCombo.secondaryColors[2])}}
                            style={[{margin: '1%',backgroundColor:colorCombo.secondaryColors[2]},styles.secondaryColor]}>
                        </TouchableOpacity>
                    </View>
                    <View style={{flex:1,flexDirection:'row'}}>
                        <TouchableOpacity 
                            onPress={()=> { setBackgroundType('solid') ;setSolidBackground(colorCombo.secondaryColors[3]);setCurrentSecondaryColor(colorCombo.secondaryColors[3])}}
                            style={[{margin: '1%',backgroundColor:colorCombo.secondaryColors[3]},styles.secondaryColor]}>
                        </TouchableOpacity>
                        <TouchableOpacity 
                            onPress={()=> { setBackgroundType('solid') ;setSolidBackground(colorCombo.secondaryColors[4]);setCurrentSecondaryColor(colorCombo.secondaryColors[4])}}
                            style={[{margin: '1%',backgroundColor:colorCombo.secondaryColors[4]},styles.secondaryColor]}>
                        </TouchableOpacity>
                        <TouchableOpacity 
                            onPress={()=> { setBackgroundType('solid') ;setSolidBackground(colorCombo.secondaryColors[5]);setCurrentSecondaryColor(colorCombo.secondaryColors[5])}}
                            style={[{margin: '1%',backgroundColor:colorCombo.secondaryColors[5]},styles.secondaryColor]}>
                        </TouchableOpacity>
                    </View>
                </View>
        );}
        );
        return(
            <View style ={{ flex:1, display: solidEditorOn? 'flex' : 'none'}}>
                <View style = {styles.editorContent}>
                        
                        {/* add an arrow that changes position according to color index  */}
                        <View style={{width:'100%',height:'10%'}}>
                        <Image style ={{width:'10%',height:'100%', paddingBottom: '10%',marginLeft: (colorIndex) * 7.99 + '%', tintColor: currentPrimaryColor}} source = {require('../../../assets/download.png')}/>
                        </View> 
                        <View style={styles.colorBar}>
                            {primaryColorBar}
                        </View>
                        <View style ={styles.secondaryColorBox}>
                            {secondaryColorBar}
                        </View>
                </View>
                <View style={styles.navigationDotsView}>
                        <View style= {styles.closedDot}></View>
                        <Pressable onPress={enterTextureMode}> 
                        <View style={styles.openDot}></View>
                        </Pressable>
                        <Pressable onPress={enterImageMode}> 
                        <View style={styles.openDot}></View>
                        </Pressable>
                </View>
            </View>
        );
    }
    // Editor for texture backgrounds
    const [textureEditorOn,setTextureEditorOn] = useState(false)
    const enterTextureMode = () => {setSolidEditorOn(false); setTextureEditorOn(true);setImageEditorOn(false)}
    const TextureBackgroundEditor = () => {
        return(
            <View style ={{ flex:1, display: textureEditorOn? 'flex' : 'none'}}>
                <View style = {styles.editorContent}> 
                    <Text style = {{ color: colors.text_general}}> Texture Editor</Text>
                    {/* <ScrollView  directionalLockEnabled = 'true' style = {{ height: '50%'}}> */}
                    {/* <View style={{ flex:1, flexDirection: 'row'}}> 
                        <View style = {{ width : '28%', height: '60%'}}}> <Image style = {styles.secondaryColor} source= {require('../../../assets/textures/brick_wall.png')}/>  </View>
                    </View> */}

                    {/* </ScrollView> */}
                </View>
                <View style={styles.navigationDotsView}>
                        <Pressable onPress={enterSolidMode}> 
                        <View style= {styles.openDot}></View>
                        </Pressable>
                        <View style={styles.closedDot}></View>
                        <Pressable onPress={enterImageMode}> 
                        <View style={styles.openDot}></View>
                        </Pressable>
                </View>
            </View>
        );
    }
    // Editor for image backgrounds
    const [filePath, setFilePath] = useState({});
    const chooseFile = () => {
    let options = {
      title: 'Select Image',
      customButtons: [
        {
          name: 'customOptionKey',
          title: 'Choose Photo from Custom Option'
        },
      ],
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    ImagePicker.showImagePicker(options, (response) => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log(
          'User tapped custom button: ',
          response.customButton
        );
        alert(response.customButton);
      } else {
        let source = response;
        // You can also display the image using data:
        // let source = {
        //   uri: 'data:image/jpeg;base64,' + response.data
        // };
        setFilePath(source);
          }
       });
    };
    const [imageEditorOn,setImageEditorOn] = useState(false)
    const enterImageMode = () => {setSolidEditorOn(false); setTextureEditorOn(false);setImageEditorOn(true)}

    const ImageBackgroundEditor = () => {
        return(
            <View style ={{ flex:1, display: imageEditorOn? 'flex' : 'none'}}>
                <View style = {styles.editorContent}> 
                    <Text> Image Editor</Text>
                    <TouchableOpacity
                        activeOpacity={0.5}
                        style={styles.buttonStyle}
                        onPress={()=> { setBackgroundType('image'); chooseFile}}>
                        <Text style={styles.textStyle}>
                        Choose Image
                        </Text>
                        <Text style={styles.textStyle}>
          {filePath.uri}
        </Text>
        
                        </TouchableOpacity>
                        </View>
                        <View style={styles.navigationDotsView}>
                        <Pressable onPress={enterSolidMode}> 
                        <View style= {styles.openDot}></View>
                        </Pressable>
                        <Pressable onPress={enterTextureMode}> 
                        <View style={styles.openDot}></View>
                        </Pressable>
                        <View style={styles.closedDot}></View>
                </View>
            </View>
        );
    }
    return ( 
        <View style = {styles.container}>
            
            {/* The post is Displayed Here */}
            <View style = {[{backgroundColor: backgroundType === 'solid'? solidBackground : 'black'},styles.postView]}>
            <Image source = {{uri: backgroundType === "image" ? filePath.path : ''}}/>
            </View>
            {/* Background Type Chooser */}
            <View style ={styles.backgroundChooser}>
                <View style={{width:'33%'}}>
                    <TouchableOpacity
                        onPress = {enterSolidMode}
                        style ={styles.backgroundTypeButton}>
                            <Text style= {styles.heading}> Solid Fill </Text>
                    </TouchableOpacity>
                </View>
                <View style={{width:'33%'}}>
                    <TouchableOpacity 
                        onPress = {enterTextureMode}
                        style ={styles.backgroundTypeButton}>
                            <Text style= {styles.heading}> Texture</Text>
                    </TouchableOpacity>
                </View>
                <View style={{width:'33%'}}>
                    <TouchableOpacity 
                        onPress = {enterImageMode}
                        style ={styles.backgroundTypeButton}>
                            <Text style= {styles.heading}> Image </Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.editor}>
                <SolidBackgroundEditor/>
                <TextureBackgroundEditor/>
                <ImageBackgroundEditor/>
            </View>
        </View>
     );
}


 

export default StylizedPostScreen;

// const styles  = StyleSheet.create({

// });