import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import tw from 'twrnc';

// You can import from local files
import AssetExample from './components/AssetExample';


export default function App() {
  return (
  <View style={tw`bg-[#eeeeee] h-960px w-1440px`}>
    <View style={tw`mx-4`}>
        <AssetExample />
    </View>
  </View>
  );
}

const styles = StyleSheet.create({
    
});
