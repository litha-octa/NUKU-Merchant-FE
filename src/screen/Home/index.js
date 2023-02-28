import React,{useState, useEffect} from "react"; 
import {View, Text,Image,TouchableOpacity, StyleSheet, SafeAreaView, ScrollView, StatusBar} from 'react-native'
import {SaldoInfo, HeaderHome, CardMenu, Insight, AssistantModal} from '../../component'
import { colors, usedFont } from "../../assets/colors";
import {
  IconCallCenter,
  IconEtalase,
  IconIklan,
  IconProduk,
  IconStatistik,
  IconStatusPenjualan,
} from "../../assets/img";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { BASE_URL, URL } from "../../service";

const Home =({navigation})=>{
 const [merchant, setMerchant]=useState()
 const [balance, setBalance] = useState()

 const getToken = async () =>{
  try {
    const value = await AsyncStorage.getItem("token");
    if (value !== null) {
      console.log(value);
      dataToko(value)
      getBalance(value)
    }
  } catch (e) {
    console.log(e);
  }
 }

 const dataToko = (token) =>{
  axios.get(`${BASE_URL}${URL.getProfile}`,{
    headers:{
      'Authorization': `Bearer ${token}`
    }
  },)
  .then((res)=>{
    console.log(res.data.data.merchant)
    if (res.data.data.merchant === null){
      navigation.navigate('CreateMerchant')
    }else{
      setMerchant(res.data.data.merchant)
    }
  })
  .catch((err)=>{
    console.log(err)
  })
 }

 const getBalance =(token)=>{
  axios.get(`${BASE_URL}${URL.balance}`,{
    headers:{
      'Authorization':`Bearer ${token}`
    }
  })
  .then((res)=>{
    console.log(res.data.data)
    setBalance(res.data.data.balance_total_label)
  })
  .catch((err)=>{console.log(err)})
 }



 useEffect(()=>{
getToken()
 },[])


// const merchant = {
//   name: "Toko Sembako Jaya",
//   img :'https://tse2.mm.bing.net/th?id=OIP.BHDBlhTGI2-TaHhW4enWoAHaFE&pid=Api&P=0',
//   rate : '4.5',
//   saldo : 'Rp. 4.000'
// };
    return (
      <SafeAreaView>
        <StatusBar backgroundColor={colors.white} barStyle={"dark-content"} />
        <HeaderHome
          name={merchant?.name}
          desc={merchant?.about}
          img={{ uri: `${BASE_URL}${URL.file}${merchant?.logo_thumb_link}` }}
          rate={'4.7'}
          onNotif={() => {
            console.log("Notif Clicked !");
          }}
        />
        <View>
          <ScrollView>
            <View style={s.body}>
              <SaldoInfo saldo={balance} />
              <AssistantModal title={"Dashboard Kamu"} />
              <View style={s.cardContainer}>
                <CardMenu
                  img={IconProduk}
                  menuName="Produk Kamu"
                  onPress={() => navigation.navigate("Product")}
                />
                <CardMenu
                  img={IconEtalase}
                  menuName="Etalase"
                  onPress={() => navigation.navigate("Etalase")}
                />
                <CardMenu
                  img={IconStatusPenjualan}
                  menuName="Status Penjualan"
                />
                <CardMenu
                  img={IconStatistik}
                  menuName="Statistik Toko"
                  onPress={() => navigation.navigate("Statistik")}
                />
                <CardMenu
                  img={IconIklan}
                  menuName="Iklan & Promosi"
                  onPress={() => navigation.navigate("Iklan")}
                />
                <CardMenu img={IconCallCenter} menuName="Call Center" />
              </View>
              <AssistantModal title={"Insight Toko"} />
              <View style={s.insightContainer}>
                <Insight width="48%" title="kunjungi toko" value="1,2 Rb" />
                <Insight width="48%" title="produk terlihat" value="326" />
              </View>
              <AssistantModal title={"Total Pendapatan"} />
              <View style={s.insightContainer}>
                <Insight
                  width="100%"
                  title="total penjualan"
                  value="Rp. 11.463.287"
                  green
                />
              </View>
              <AssistantModal title={"Insight Toko"} />
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