import React from "react";
import {View,TouchableOpacity,Text, Image,} from 'react-native'
import {colors, usedFont} from '../../assets/colors'
import { RightRedArrow } from "../../assets/img";
 
const Insight = (props) =>{
 return(
<View
style={{
    width:props.width? props.width:'100%',
    backgroundColor:'white',
    elevation:8,
    borderRadius:15,
    padding:10,
    
}}
>
    <Text
    style={{
        fontFamily:usedFont,
        fontSize:15,
        color:colors.black,
        textTransform:'capitalize',
    }}
    >
       {props.title}
    </Text>
    <Text
    style={{
        width:'100%',
        backgroundColor:props.green? colors.greenBg : colors.lightGrey,
        borderRadius:10,
        fontSize:22,
        fontWeight:'bold',
        height:50,
        marginVertical:10,
        padding :10,
        color:props.green? colors.green : colors.black,
    }}
    >
        {props.value}
    </Text>
    <TouchableOpacity
    style={{
        display:'flex',
        flexDirection:'row',
        width:'100%',
    }}
    >
        <Text
        style={{fontFamily:usedFont,fontSize:14, color:colors.main,width :'90%'}}
        >Lihat Semua</Text>
        <Image source={RightRedArrow} 
        style={{width :15,height:15, resizeMode:'contain'}}/>
    </TouchableOpacity>
</View>
 )   
}

export default Insight