import React from "react"; 
import {View, Text,Image,TouchableOpacity, StyleSheet, SafeAreaView, ScrollView, StatusBar} from 'react-native'
import {SaldoInfo, HeaderHome, CardMenu, Insight} from '../../component'
import { colors, usedFont } from "../../assets/colors";
import {
  IconCallCenter,
  IconEtalase,
  IconIklan,
  IconProduk,
  IconStatistik,
  IconStatusPenjualan,
} from "../../assets/img";

const Home =()=>{
const merchant = {
  name: "Toko Sembako Jaya",
  img :'https://tse2.mm.bing.net/th?id=OIP.BHDBlhTGI2-TaHhW4enWoAHaFE&pid=Api&P=0',
  rate : '4.5',
  saldo : 'Rp. 4.000'
};
    return (
      <SafeAreaView>
        <StatusBar backgroundColor={colors.white} barStyle={"dark-content"} />
        <HeaderHome
          name={merchant?.name}
          img={{ uri: merchant?.img }}
          rate={merchant?.rate}
          onNotif={()=>{console.log('Notif Clicked !')}}
        />
        <View>
          <ScrollView>
            <View style={s.body}>
              <SaldoInfo saldo={merchant?.saldo} />
              <View style={s.cardContainer}>
                <CardMenu img={IconProduk} menuName="Produk Kamu" />
                <CardMenu img={IconEtalase} menuName="Etalase" />
                <CardMenu
                  img={IconStatusPenjualan}
                  menuName="Status Penjualan"
                />
                <CardMenu img={IconStatistik} menuName="Statistik Toko" />
                <CardMenu img={IconIklan} menuName="Iklan & Promosi" />
                <CardMenu img={IconCallCenter} menuName="Call Center" />
              </View>
              <View style={s.insightContainer}>
                <Insight width="48%" title="kunjungi toko" value="1,2 Rb" />
                <Insight width="48%" title="produk terlihat" value="326" />
              </View>
              <View style={s.insightContainer}>
                <Insight width="100%" title="total penjualan" value="Rp. 11.463.287" green />
              </View>
              <View style={s.insightContainer}>
                <Insight width="48%" title="jumlah produk" value="50" />
                <Insight width="48%" title="produk terjual" value="250" />
              </View>
            </View>
            <View style={{ height: 100 }}></View>
          </ScrollView>
        </View>
      </SafeAreaView>
    );
}
export default Home

const s = StyleSheet.create({
body : {
    width:'100%',
    paddingBottom:100,
    backgroundColor:colors.white,
    paddingHorizontal:'3%',
},
cardContainer:{
    marginVertical:15,
    width:'100%',
    paddingHorizontal:'3%',
    display:'flex',
    flexWrap:'wrap',
    flexDirection:'row',
    justifyContent:'space-around',
},
insightContainer:{
    width:'100%',
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-around',
    paddingVertical:10,
}
})