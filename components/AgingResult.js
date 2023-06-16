import React, { useState } from 'react';
import { Text, View, StyleSheet} from 'react-native';
import tw from 'twrnc';





export default function AgingResult() {
//Aging result
const [outputValue, setOutputValue] = useState('- -');
const [outputValue1, setOutputValue1] = useState('- -');
const [outputValue2, setOutputValue2] = useState('- -');
return (
<View style={tw`flex-row`}>
        <View style={tw`w-650px flex-col`}>
            <View style={tw`h-120px bg-white flex-row`}>
                <Text 
                  style={styles.sossatx2}
                  value={outputValue}
                >{outputValue}</Text>
                <Text style={styles.sossat}>years</Text>
            </View>

            <View style={tw`h-120px bg-white flex-row`}>
            <Text 
              style={styles.sossatx2}
              value={outputValue1}
              >{outputValue1}</Text>
                <Text style={styles.sossat}>months</Text>
            </View>

            <View style={tw`h-158px bg-white flex-row rounded-bl-3xl`}>
                <Text 
                style={styles.sossatx2}
                value={outputValue2}
                >{outputValue2}</Text>
                <Text style={styles.sossat}>days</Text>
            </View>
        </View>
        <View style={tw`w-190px h-1/1 bg-white rounded-br-full`}>
        </View>
      </View>)
}

const styles = StyleSheet.create({
    sossat:{
        marginLeft: '5px',
        fontFamily: 'Poppins',
        fontSize: 70
      },
      sossatx2:{
        color: '#B999FF',
        marginLeft: '60px',
        fontFamily: 'Poppins',
        fontSize: 70
      },
  });