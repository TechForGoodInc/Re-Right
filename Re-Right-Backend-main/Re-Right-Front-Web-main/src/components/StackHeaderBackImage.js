import React from 'react';
import { Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function StackHeaderBackImage() {
    return (
        Platform.OS === 'ios' ?
            <Ionicons name="chevron-back" size={24} color="black"/> :
            <Ionicons name="arrow-back-outline" size={24} color="black" />
    )
}