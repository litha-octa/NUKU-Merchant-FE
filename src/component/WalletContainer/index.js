import React from "react";
import {View, Text, Image, TouchableOpacity} from 'react-native'
import {colors} from '../../assets/colors'
import {
     IconBtnDom1,
  IconBtnDom2,
  IconBtnDom3,
  IconBtnDom4,
} from '../../assets/img'

const WalletContainer =(props)=>{
    const icon = {
        width:75,
        height:75,
    }
    return (
      <View
        style={{
          backgroundColor: colors.pink,
          width: "100%",
          borderRadius: 15,
          justifyContent: "space-around",
          padding :15,
          display:'flex',
          flexDirection:'row',
        }}
      >
        <TouchableOpacity onPress={props.onScan}>
          <Image source={IconBtnDom1} style={icon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={props.onTopup}>
          <Image source={IconBtnDom2} style={icon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={props.onSend}>
          <Image source={IconBtnDom3} style={icon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={props.onReceive}>
          <Image source={IconBtnDom4} style={icon} />
        </TouchableOpacity>
      </View>
    );
}
export default WalletContainer;