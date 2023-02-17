import React from "react";
import {View,Text, StyleSheet, ScrollView, Image,TouchableOpacity} from 'react-native'
import {colors, usedFont} from '../../../assets/colors'
import {AssistantModal, ListItem, SimpleHeader, WalletContainer} from '../../../component'
import { IconDate, IconPoin, IconSaldoRed } from "../../../assets/img";


const Dompet = ({navigation})=>{

    const MiniContainer = (props)=>{
        return (
          <View style={{
            backgroundColor:colors.white,
            width:'47.5%',
            borderRadius:15,
            elevation:8,
            padding :10,
            height:100,
          }}>
            <View style={{
                display:'flex',
                flexDirection:'row',
                width:'100%',
                marginBottom:15,
                }}> 
              <Image
                source={props.img}
                style={{
                  width: 30,
                  height: 30,
                }}
              />
              <Text
              style={{
                fontFamily:usedFont,
                fontWeight:'bold',
                fontSize:17,
                textTransform:'capitalize',
                marginHorizontal:5,
              }}
              >{props.title}</Text>
            </View>
            <Text style={{
                fontFamily:usedFont,
                fontSize:20,
                fontWeight:'bold',
                color:props.colorValue
            }}>
                {props.value}
            </Text>
          </View>
        );
    }
    return (
      <View>
        <SimpleHeader onBack={() => navigation.goBack()} title="Dompet" />
        <View style={s.body}>
          <ScrollView>
            <WalletContainer
              onScan={() => console.log("scan")}
              onTopup={() => console.log("Top Up")}
              onSend={() => console.log("Kirim")}
              onReceive={() => console.log("minta")}
            />

            <View style={s.row}>
              <MiniContainer
                img={IconSaldoRed}
                title="saldo"
                value="Rp. 30.000"
                colorValue={colors.main}
              />
              <MiniContainer
                img={IconPoin}
                title="poin kamu"
                value="50"
                colorValue={colors.yellow}
              />
            </View>
            <TouchableOpacity style={s.tariksaldo} onPress={()=>navigation.navigate('TarikTunai')}>
              <Text style={s.txtTariksaldo}>Tarik Saldo</Text>
            </TouchableOpacity>
            <AssistantModal title="riwayat transaksi" />
            <ListItem title="01 Des 2022 - 20 Des 2022"  img={IconDate}/>
          </ScrollView>
        </View>
      </View>
    );
}
export default Dompet

const s = StyleSheet.create({
    body:{
        backgroundColor:colors.white,
        width :'100%',
        height:'100%',
        paddingHorizontal:'3%',
        paddingVertical:10,
    },
    tariksaldo:{
        backgroundColor:colors.main,
        borderRadius:15,
        width :'100%',
        justifyContent:'center',
        padding :10,
        marginVertical:5,
    },
    txtTariksaldo:{
        textAlign:'center',
        fontFamily:usedFont,
        fontSize:17,
        fontWeight:'bold',
        color:colors.white,
    },
    row:{
        display:'flex',
        flexDirection:'row',
        width:'100%',
        justifyContent:'space-around',
        marginVertical:10,
    }
})