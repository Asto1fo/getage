import React, { useState } from 'react';
import { Text, View, StyleSheet, Image, TextInput, TouchableOpacity, Button } from 'react-native';
import tw from 'twrnc';
import { useFonts } from 'expo-font';
import arr_icn from '../assets/icon-arrow.svg';
import moment, { duration } from 'moment';
import Agingresult from './AgingResult'



export default function AssetExampleMobile() {
  //Imput fields
  const [inputValue, setInputValue] = useState('');
  const [inputValue1, setInputValue1] = useState('');
  const [inputValue2, setInputValue2] = useState('')

  //Aging result
  const [outputValue, setOutputValue] = useState('- -');
  const [outputValue1, setOutputValue1] = useState('- -');
  const [outputValue2, setOutputValue2] = useState('- -');

  //Error msg under textimput fields show
  const [shouldShow, setShouldShow] = useState(false);
  const [shouldShowday, setShouldShowday] = useState(false);
  const [shouldShowmonth, setShouldShowmonth] = useState(false);
  const [shouldShowyear, setShouldShowyear] = useState(false);

  //Error msg text
  const [errMsg1, seterrMsg1] = useState('');
  const [errMsg2, seterrMsg2] = useState('');
  const [errMsg3, seterrMsg3] = useState('');
  

  const [buttonPressed, setButtonPressed] = useState(false);
  const [buttonPressed1, setButtonPressed1] = useState(false);

  // Style object for the element
  const textStyle = buttonPressed ? styles.textPressed : styles.textNormal;
  const imputStyle = buttonPressed ? styles.imputPressed : styles.imputNormal;


  

  

  
  const [loaded] = useFonts({
    Poppins: require('../assets/fonts/Poppins-ExtraBoldItalic.ttf'),
  });

  if (!loaded) {
    return null;
  }
  const test = () =>{
    
    if (inputValue ==''){
      setShouldShow(true);
      setShouldShowday(true);
      setShouldShowmonth(true);
      setShouldShowyear(true);
      seterrMsg1('This field is required');
      setButtonPressed(false);
    }

    if (inputValue1==''){
      setShouldShow(true);
      setShouldShowday(true);
      setShouldShowmonth(true);
      setShouldShowyear(true);
      seterrMsg2('This field is required');
      setButtonPressed(false);
    }

    if (inputValue2==''){
      setShouldShow(true);
      setShouldShowday(true);
      setShouldShowmonth(true);
      setShouldShowyear(true);
      seterrMsg3('This field is required');
      setButtonPressed(false);
    }
 
    
    // replace with blank instead of should show
    if (parseInt(inputValue)>31 ){
      seterrMsg1('Must be a valid day')
      setShouldShow(true);
      setShouldShowday(true);
      setShouldShowmonth(true);
      setShouldShowyear(true);
      setButtonPressed(false);
    }
    if (parseInt(inputValue)<=31 ){
      seterrMsg1('')
      setShouldShow(!shouldShow);
      setShouldShowday(false);
      setButtonPressed(false);
    }
    if (parseInt(inputValue1)>12 ){
      seterrMsg2('Must be a valid month')
      setShouldShow(!shouldShow);
      setShouldShowday(true);
      setShouldShowmonth(true);
      setShouldShowyear(true);
      setButtonPressed(false);
    }
    if (parseInt(inputValue1)<=12 ){
      seterrMsg2('')
      setShouldShow(!shouldShow);
      setShouldShowmonth(false);
      setButtonPressed(false);
    }
    if (parseInt(inputValue2)>new Date().getFullYear()){
      seterrMsg3('Must be in the past');
      setShouldShow(!shouldShow);
      setShouldShowday(true);
      setShouldShowmonth(true);
      setShouldShowyear(true);
      setButtonPressed(false);
    }
    if (parseInt(inputValue2)<new Date().getFullYear()){
      seterrMsg3('');
      setShouldShow(!shouldShow);
      setShouldShowyear(false);
    }
    if (parseInt(inputValue)<=31 && parseInt(inputValue1)<=12 && parseInt(inputValue2)<new Date().getFullYear()){
      setButtonPressed(false);
      setShouldShow(!shouldShow);
      setShouldShowday(false);
      setShouldShowmonth(false);
      setShouldShowyear(false);
      var ddmmyyyy = inputValue2+"-"+inputValue1+"-"+inputValue; 
      const birth = moment(ddmmyyyy);
      const now = moment(Date.now());
      const elapsed = moment.duration(now.diff(birth));
    
    
      const elapsedyears = elapsed.years();
      const elapsedmonth = elapsed.months();
      const elapseddays = elapsed.days();

      setOutputValue(elapsedyears);
      setOutputValue1(elapsedmonth);
      setOutputValue2(elapseddays);
    }
    else{
      setShouldShow(true);
      setShouldShowday(true);
      setShouldShowmonth(true);
      setShouldShowyear(true);
      setButtonPressed(true);
    }
    
    
    
  }




  

  return (
    // <View style={tw`h-550px w-840px bg-red-500 rounded-t-3xl mt-15 mx-300px`}>
    <View style={tw`h-486px w-343px bg-[#eeeeee] rounded-t-3xl mt-15 mx-300px`}>
      <View style={tw`rounded-t-3xl`}>


        {/* Day Month Year Contaier */}
        <View style={tw`h-160px w-343px bg-white flex-row rounded-t-3xl`}>
          {/* Day block */}
          <View style={tw`h-81px w-85px  ml-24px  mt-53px rounded-lg`}>
            <Text style={textStyle}>DAY</Text>
            <TextInput 
              style={imputStyle} 
              placeholder={'DD'}
              onChangeText={text => setInputValue(text)}
              />
          </View>
          {/* Month block */}
          <View style={tw`h-81px w-85px ml-16px  mt-57px rounded-lg`}>
            <Text style={textStyle}>MONTH</Text>
            <TextInput 
              style={imputStyle} 
              placeholder={'MM'}
              value={inputValue1}
              onChangeText={text => setInputValue1(text)}
              />
          </View>
          {/* Year block */}
          <View style={tw`h-81px w-85px ml-16px mr-24px  mt-57px rounded-lg`}>
            <Text style={textStyle}>YEAR</Text>
            <TextInput 
              style={imputStyle} 
              placeholder={'YYYY'}
              value={inputValue2}
              onChangeText={text => setInputValue2(text)}
              />
          </View>
        </View>


        
        {shouldShow ? (
        <View style={tw`h-30px flex-row bg-white`}>
          {shouldShowday ? (
          <View style={tw`w-85px ml-24px mt--30px`}>
            <Text style={tw`text-[#FF5757] italic`}>{errMsg1}</Text> 
          </View>
        ) : null}
          {shouldShowmonth ? ( 
            <View style={tw`w-85px ml-16px mt--30px`}>
              <Text style={tw`text-[#FF5757] italic`}>{errMsg2}</Text>  
            </View>
        ) : null}
          {shouldShowyear ? (   
            <View style={tw`w-85px ml-16px mt--30px`}>
              <Text style={tw`text-[#FF5757] italic`}>{errMsg3}</Text>           
            </View>
        ) : null}
        </View>
        ) : null}
    
      </View>
      
 
      <View style={tw`h-63px bg-white flex-row`}>
        <View style={tw`ml-24px bg-blue-200 h-2px w-294px mt-30px`}></View>
        {/* <TouchableOpacity style={tw`bg-black h-96px w-96px rounded-full flex justify-center items-center h-screen`}> */}
        <TouchableOpacity style={tw`bg-[#B999FF] h-63px w-63px ml--178px rounded-full flex justify-center items-center h-screen`}
                          onPress={test}> 
            <Image style={{ 
                width: 24, 
                height: 24,
                }}
            source = {arr_icn} />
        </TouchableOpacity>
      </View>

      
        <View style={styles.bootomView}>
            <View style={tw`h-1/3 bg-white flex-row`}>
                <Text 
                  style={styles.yearsText}
                  value={outputValue}
                >{outputValue}</Text>
                <Text style={styles.sossat}>years</Text>
            </View>

            <View style={tw`h-1/3 bg-white flex-row`}>
            <Text 
              style={styles.sossatx2}
              value={outputValue1}
              >{outputValue1}</Text>
                <Text style={styles.sossat}>months</Text>
            </View>

            <View style={styles.bootomView2}>
                <Text 
                style={styles.sossatx2}
                value={outputValue2}
                >{outputValue2}</Text>
                <Text style={styles.sossat}>days</Text>
            </View>
        </View>
        {/* <View style={tw`w-190px h-1/1 bg-white rounded-br-full`}>
        </View> */}
      

    </View>
  );
}

const styles = StyleSheet.create({
  sossat:{
      marginLeft: '5px',
      fontFamily: 'Poppins',
      fontSize: 50,
      height: '46px',
      paddingBottom: '70px'
    },
    sossatx2:{
      color: '#B999FF',
      marginLeft: '25px',
      fontFamily: 'Poppins',
      fontSize: 50
    },
    yearsText:{
      color: '#B999FF',
      marginLeft: 25,
      fontFamily: 'Poppins',
      fontSize: 50,
      marginTop: 10
    },
    yearsNum:{
      marginLeft: '5px',
      fontFamily: 'Poppins',
      fontSize: 50
    },
    
    
    
     

    textNormal: {
      color: '#707070', //text-[#707070]
      height: 12, //h-28px 
      fontWeight: 800, //font-extrabold 
      letterSpacing: 2, //tracking-3px
      marginBottom: 9
    },

    textPressed: {
      color: '#FF5757', //text-[#FF5757]
      height: 12, //h-28px 
      fontWeight: 800, //font-extrabold 
      letterSpacing: 2, //tracking-3px
      marginBottom: 9
    },

    imputNormal: {
      height: 53,
      paddingLeft: 16,
      borderRadius: '0.5rem',
      border: '1px solid #d7d7d7',
      fontsize: '1.875rem', /* 16px */
      lineheight: '2.25rem', /* 24px */
      fontWeight: '800',
      color: '#707070'
    },
    imputPressed: {
      height: 53,
      paddingLeft: 16,
      borderRadius: '0.5rem',
      border: '1px solid #FF5757',
      ontsize: '1.875rem', /* 16px */
      lineheight: '2.25rem', /* 24px */
      fontWeight: '800',
      color: '#707070'
    },
    //w-343px flex-col
    bootomView:{
      flexDirection: 'column',
      width: '343px',
      height: '266px'
    },
    //h-158px bg-white flex-row rounded-bl-3xl
    bootomView2:{
      flexDirection: 'row',
      height: '1/3',
      backgroundColor: 'white',
      borderBottomRightRadius: 100,
      borderBottomLeftRadius: 24
    }
});
