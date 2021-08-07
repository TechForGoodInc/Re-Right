import SamplePost from './SamplePost';
import React from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import colors from '../../../config/colors';

export default function PostPreview({navigation}) {
return (<SafeAreaView style={{
          flex: 6,
          backgroundColor: colors.background_screen,
          flexDirection: "column",
          width: '100%',
          height: '100%',
          padding: 10
        }}>
          <ScrollView direction alLockEnabled = 'true'>
          <SamplePost/>
          </ScrollView>
        </SafeAreaView>
    );
}