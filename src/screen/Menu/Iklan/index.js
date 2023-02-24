import React from "react";
import {View,Text,ImageBackground, Image,StyleSheet, TouchableOpacity, ScrollView} from 'react-native'
import {SimpleHeader} from '../../../component'
import {
     IconAds,
  IconBroadcast,
  IconSosmed,
  IconVoucher,
  backgroundGradient,
} from '../../../assets/img'
import { colors, usedFont } from "../../../assets/colors";

const Iklan =({navigation})=>{
const Item =(props)=>{
    return (
      <View
        style={{
          backgroundColor: colors.white,
          borderRadius: 20,
          width: "90%",
          padding: 10,
          elevation: 8,
          marginTop: 40,
          alignSelf:'center'
        }}
      >
        <View style={{
            display:'flex',
            flexDirection:'row',
            width:'100%',
        }}>
            <Image source={props.img} style={{
            height:60,
            width:60,
            position:'absolute',
            top :-30,
            left:-30,
            }}/>
          <Text style={{
            width:'90%',
            textAlign:'right',
            fontFamily:usedFont,
            fontSize:20,
            fontWeight:'bold',
            color:colors.main,
          }}>{props.title}</Text>
        </View>
        <Text
        style={{
            marginVertical:15,
            fontFamily:usedFont,
            fontSize:16,
            color:colors.black,
        }}
        >{props.desc}</Text>
        <TouchableOpacity onPress={props.onPress}
        style={{
            backgroundColor:colors.main,
            borderRadius:15,
            width:'100%',
            padding :10,

        }}
        >
          <Text style={{
            fontFamily:usedFont,
            fontSize:20,
            fontWeight:'bold',
            color:colors.white,
            textAlign:'center',
          }}>Mulai</Text>
        </TouchableOpacity>
      </View>
    );
}

    return (
      <View>
        <SimpleHeader
          title="Iklan & Promosi"
          onBack={() => navigation.goBack()}
        />
        <ImageBackground source={backgroundGradient} style={s.body}>
          <ScrollView>
            <View>
              <Text style={s.title}>Promosikan Toko & Produk mu</Text>
              <Text style={[s.title, { fontSize: 15, fontWeight: "normal" }]}>
                pasang promosi produk agar bisa meningkatkan penjualan dan
                peforma toko mu.
              </Text>
            </View>
            <Item
              title="Nuku Ads"
              desc="Iklan produkmu untuk mendapatkan lebih banyak penjualan"
              img={IconAds}
            />
            <Item
              title="Broadcast"
              desc="Tingkatkan penjualan dengan kirim pesan promosi ke pembeli"
              img={IconBroadcast}
            />
            <Item
              title="Voucher Toko"
              desc="Tambah minat pembelian untuk berbelanja lebih ditokomu"
              img={IconVoucher}
            />
            <Item
              title="Social Media"
              desc="kami akan posting dan sebarkan luas produkmu kepada pembeli"
              img={IconSosmed}
            />
            <View style={{height:150}}></View>
          </ScrollView>
        </ImageBackground>
      </View>
    );
} 
export default Iklan

const s =StyleSheet.create({
    body:{
        height:'100%',
        body:'100%',
        padding:'3%',
    },
    title:{
        fontFamily:usedFont,
        fontSize:20,
        fontWeight:'bold',
        color:colors.white,
    }
})
