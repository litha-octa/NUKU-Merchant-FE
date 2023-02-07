import React from "react";
import {View,Text,Image,TouchableOpacity} from 'react-native'
import { colors, usedFont } from "../../assets/colors";
import { LeftArrowTail } from "../../assets/img";

const SimpleHeader= (props)=>{
    return (
      <View
        style={{
          width: "100%",
          height: 60,
          backgroundColor: colors.white,
          display: "flex",
          flexDirection: "row",
          elevation:8,
          marginBottom:7,
        }}
      >
        <TouchableOpacity
          onPress={props.onBack}
          style={props.onBack ? null : { display: "none" }}
        >
          <Image
            source={LeftArrowTail}
            style={{ width: 50, height: 50, resizeMode: "contain" }}
          />
        </TouchableOpacity>
        <Text
          style={{
            textAlignVertical: "center",
            marginHorizontal: 15,
            fontFamily: usedFont,
            fontSize: 19,
            fontWeight: "bold",
            color: colors.black,
            width :'60%',
          }}
        >
          {props.title}
        </Text>
        <TouchableOpacity 
        onPress={props.onSave}
        style={props.onSave?null:{
          display:'none'
        }}>
          <Text
          style={{
            color:colors.main,
            textAlign:'center',
            fontFamily:usedFont,
            fontWeight:'bold',
            fontSize:17,
            marginTop:15,
            
          }}
          >Simpan</Text>
        </TouchableOpacity>
      </View>
    );
}
export default SimpleHeader