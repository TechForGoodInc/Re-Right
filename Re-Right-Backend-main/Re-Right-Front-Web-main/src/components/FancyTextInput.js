import React, { Component } from 'react';
import { TextInput, StyleSheet } from 'react-native';

import colors from '../../config/colors';

export default class FancyTextInput extends Component {
    state = { 
        isFocused: false,
    }
    
    handleFocus = event => {
        this.setState({isFocused: true});

        if (this.props.onFocus) {
            this.props.onFocus(event)
        }
    }
    handleBlur = event => {
        this.setState({isFocused: false});

        if (this.props.onBlur) {
            this.props.onBlur(event);
        }
    }
    render() { 
        const isFocused = this.state;
        const { onFocus, onBlur, ...otherProps } = this.props;
        return (
        <TextInput
            selectionColor={colors.primary}
            underlineColorAndroid={
            isFocused ? colors.primary : colors.primary_light
            }
            onFocus={this.handleFocus}
            onBlur={this.handleBlur}
            style={styles.textInput}
        />
        );
    }
}

const styles = StyleSheet.create({
    textInput: {
      height: 40,
      paddingLeft: 6
    }
  });