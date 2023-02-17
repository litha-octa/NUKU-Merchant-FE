import React, { useEffect, useState } from "react";
import {View, Text, TextInput, StyleSheet, Image, TouchableOpacity} from 'react-native'
import { colors, usedFont } from "../../../assets/colors";
import { IconMoney } from "../../../assets/img";
import {AssistantModal, SimpleHeader} from '../../../component'

const TarikTunai = ({navigation}) =>{
    const [index, setIndex]=useState(0)
    const  [text, setText] = useState("");
    const [saldo,setSaldo] = useState(0);

    const NominalCard = (props) => {
      return (
        <View style={{
            width :'48%',
            display:'flex',
            flexDirection:'row',
            backgroundColor:colors.white,
            elevation:8,
            borderColor:colors.grey,
            borderWidth:2, 
        }}>
          <Text>{nominal}</Text>
          <Text>Ribu</Text>
        </View>
      );
    };

    return (
      <View>
        <View style={index === 0 ? null : { display: "none" }}>
          <SimpleHeader
            title="Tarik Tunai"
            onBack={() => navigation.goBack()}
          />
          <View style={s.container}>
            <View style={s.greenContainer}>
              <Image
                source={IconMoney}
                style={{ width: 150, height: 150, resizeMode: "contain" }}
              />
              <View style={s.row}>
                <Text style={s.greenText}>Jumlah Saldo : </Text>
                <Text style={[s.greenText,{fontSize:21, textAlign:'left', width :'60%'}]}>Rp. {saldo}</Text>
              </View>
            </View>
            <AssistantModal title = 'Pilihan Nominal'/>
            <TextInput
              onChangeText={(text) => {
                setText(text);
              }}
              value={text}
            />
          </View>
        </View>
      </View>
    );
}
 const s = StyleSheet.create({
    container:{
        backgroundColor:colors.white,
        width :'100%',
        height:'100%',
        paddingHorizontal:'3%',
    },
    greenContainer:{
        backgroundColor:colors.greenBg,
        width:'100%',
        height:200,
        borderRadius:15,
        padding :10,
        alignItems:'center',
    },
    greenText:{
        fontFamily:usedFont,
        fontWeight:'bold',
        color:colors.green,
        width :'40%',
        textAlign:'right',
    },
    row:{
        display:'flex',
        flexDirection:'row',
        width:'100%',
    }
 })


export default TarikTunai

