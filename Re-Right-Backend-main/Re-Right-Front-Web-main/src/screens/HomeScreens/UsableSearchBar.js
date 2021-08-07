import React, {useState} from 'react';
import {TextInput, StyleSheet} from 'react-native';
import color from '../../../config/colors';
import darkColors from '../../../config/darkColors';

export default function SearchBar(){
    const colors = global.isDarkModeEnabled? darkColors: color; 
    const styles = StyleSheet.create({
        inputBar: {
            flex: 1,
            padding: 10,
            paddingLeft: 30,  
            color: colors.text_general   
        }
    });
    const [searchTerm, setSearchTerm] = useState('')

    const handleSearchBar = () =>{
        console.log(searchTerm);
    }
    return(
        <TextInput 
            style= {styles.inputBar}
            placeholder = "Search"
            onChangeText = { searchTerm => setSearchTerm(searchTerm) }
            onChange = {() => handleSearchBar()}>
        </TextInput>
    )
}
