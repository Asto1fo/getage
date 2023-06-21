import * as React from 'react';
import { Text, View, StyleSheet,Dimensions } from 'react-native';
import {BrowserView, MobileView} from 'react-device-detect';
import Constants from 'expo-constants';
import tw from 'twrnc';

// You can import from local files
import AssetExample from './components/AssetExample';
import AssetExampleMobile from './components/AssetExampleMobile';


const { width, height } = Dimensions.get('window');

export default function App() {
  const isMobile = width < 768;
  return (
    <View>
    {isMobile ? (
      <View style={tw`bg-[#eeeeee] w-768px`}>
      <View style={tw`h-812px w-365px mt--50px ml--280px`}>
          <AssetExampleMobile/>
      </View>
    </View>
    ) : (
      <View style={tw`bg-[#eeeeee]`}>
    <View style={tw`mx-4 h-960px w-1440px`}>
        <AssetExample/>
    </View>
  </View>
    )}
  </View>
  );
}

const styles = StyleSheet.create({
    
});
