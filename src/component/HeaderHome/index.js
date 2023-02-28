import React from "react";
import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native'
import { colors, usedFont } from "../../assets/colors";
import { IconNotif, Star } from "../../assets/img";

const HeaderHome = (props) =>{
// props list = 
//  img
//  name
//  rate
//  onNotif

    return (
      <View style={{
    width:'100%',
    height:'auto',
    padding :10,
    display:'flex',
    flexDirection:'row',
    elevation:props.desc? 0 : 8,
    backgroundColor:colors.white,
    marginBottom:10,
}}>
        <View style={{ width: "15%" }}>
          <Image
            source={props.img}
            style={{ width: 60, height: 60,resizeMode:'contain', borderRadius: 35 }}
          />
        </View>
        <View
          style={{
            width: "70%",
            paddingHorizontal: 10,
          }}
        >
          <Text
            style={{
              fontFamily: usedFont,
              fontWeight: "bold",
              fontSize: 17,
              color: colors.black,
            }}
          >
            {props.name}
          </Text>
          <Text style={
            props.desc? {
              fontFamily:usedFont,
              color:colors.midGrey,
            }
            :{display:'none'}
          }>
            {props.desc}
          </Text>
          <View style={props.rate?{ display: "flex", flexDirection: "row" }:{display:'none'}}>
            <Image source={Star} style={{ width: 20, height: 20 }} />
            <Text
              style={{
                fontFamily: usedFont,
                fontWeight: "bold",
                fontSize: 15,
                color: colors.black,
              }}
            >
              {props.rate}
            </Text>
          </View>
        </View>
        <View style={{ width: "15%" }}>
          <TouchableOpacity onPress={props.onNotif} style={props.onNotif?null:{display:'none'}}>
            <Image source={IconNotif} style={{ width: 50, height: 50 }} />
          </TouchableOpacity>
        </View>
      </View>
    );
}

export default HeaderHome