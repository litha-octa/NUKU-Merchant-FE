import React, {useEffect, useState} from "react";
import { View, Text, Image, StyleSheet, StatusBar, SafeAreaView } from "react-native";
import { LogoSplash } from "../../assets/img";
import {colors, usedFont} from '../../assets/colors'
import AsyncStorage from "@react-native-async-storage/async-storage";

const Splash = ({navigation}) => {
const getData = async () => {
  try {
    const value = await AsyncStorage.getItem("token");
    if (value !== null) {
      setTimeout(() => {
        navigation.replace("MainApp");
      }, 3000);
    }else{
        setTimeout(() => {
          navigation.replace("Login");
        }, 3000);
      }
  } catch (e) {
    console.log(e);
  }
};

useEffect(() => {
//    setTimeout(() => {
//         navigation.replace("MainApp");
//       }, 3000);
getData()
}, []);

    return (
      <SafeAreaView>
        <StatusBar backgroundColor={colors.main} />

        <View style={styles.body}>
          <Image source={LogoSplash} style={styles.logo} />
          <Text style={styles.title}>Merchant</Text>
        </View>
      </SafeAreaView>
    );
}

export default Splash;

const styles =StyleSheet.create({
    body:{
        backgroundColor: colors.main,
        width:'100%',
        height:'100%',
    },
    logo:{
        width:'50%',
        height:'40%',
        resizeMode:'contain',
        alignSelf:'center',
        marginTop:'45%', 
    },
    title:{
        color:colors.white,
        fontFamily:usedFont,
        fontWeight:'bold',
        fontSize:30,
        textAlign:'center',
        width:'100%',
    }
})