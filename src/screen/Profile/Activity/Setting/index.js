import React from "react"; 
import {View, Text, StyleSheet} from 'react-native'
import { colors } from "../../../../assets/colors";
import { SimpleHeader, ActivityItem } from "../../../../component";


const Setting =({navigation})=>{
return (
  <View>
    <SimpleHeader title="Pengaturan Toko" onBack={() => navigation.goBack()} />
    <View style={s.body}>
      <ActivityItem
        title="Atur Jadwal Operasional Toko"
        onPress={() => navigation.navigate("Setting1")}
      />
      <ActivityItem
        title="Atur Layanan Pengiriman"
        onPress={() => navigation.navigate("Setting2")}
      />
      <ActivityItem
        title="Tutup Akun Toko"
        onPress={() => navigation.navigate("Setting3")}
      />
    </View>
  </View>
);
}
export default Setting
const s =StyleSheet.create({
    body :{
        backgroundColor:colors.white,
        width:'100%',
        height:'100%',
        paddingHorizontal:'3%'
    }
})