import { Switch } from "@rneui/base";
import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, Image, ImageBackground, TouchableOpacity, ScrollView } from "react-native";
import { colors, usedFont } from "../../../../assets/colors";
import { MapBanner } from "../../../../assets/img";
import { SimpleHeader } from "../../../../component";
import { CheckBox } from "@rneui/base";

const DeliveryService = ({navigation}) => {
const[kota,setKota]= useState()
const[postalCode, setPostalCode]=useState()
const[address,setAddress]=useState()

const [list, setList] = useState({
  delivery1: true,
  delivery2: true,
  delivery3: true,
  delivery4: true,
  delivery5: true,
});

  return (
    <View>
      <SimpleHeader
        title={"Pengaturan Pengiriman"}
        onBack={() => navigation.goBack()}
      />
      <View style={s.body}>
        <ScrollView>
          <View style={s.greyContainer}>
            <Text style={s.boldTitle}>Lokasi Toko</Text>
            <Text style={s.greyTitle}>Kota</Text>
            <TextInput style={s.input} onChangeText={(text) => setKota(text)} />
            <Text style={s.greyTitle}>Kode Pos</Text>
            <TextInput
              style={s.input}
              onChangeText={(text) => setPostalCode(text)}
            />
          </View>
          <View style={s.greyContainer}>
            <Text style={s.boldTitle}>Lokasi Pickup</Text>
            <Text style={s.greyTitle}>Alamat Toko</Text>
            <TextInput
              style={s.input}
              onChangeText={(text) => setAddress(text)}
            />
            <ImageBackground
              source={MapBanner}
              // resizeMode="cover"
              style={{
                width: "100%",
                height: 120,
                borderRadius: 25,
                marginVertical: 10,
                resizeMode: "contain",
              }}
            >
              <TouchableOpacity>
                <Text style={s.redBtn}>Atur Lokasi Lewat Peta</Text>
              </TouchableOpacity>
            </ImageBackground>
          </View>
          <Text style={s.boldTitle}>Pilih Layanan Pengiriman</Text>
          <Text style={[s.greyTitle, { color: colors.black }]}>
            Atur layanan pengiriman sesuai produk yang akan kamu jual
          </Text>
          <View style={s.deliveryService}>
            <Text style={s.deliveryServiceText}>Driver Toko</Text>
            <CheckBox
              checked={list.delivery1 === true}
              onPress={() => setList({ ...list, delivery1: !list.delivery1 })}
              checkedIcon="dot-circle-o"
              checkedColor={colors.main}
              uncheckedIcon="circle-o"
            />
          </View>
          <View style={s.deliveryService}>
            <Text style={s.deliveryServiceText}>NUKU Delivery</Text>
            <CheckBox
              checked={list.delivery2 === true}
              onPress={() => setList({ ...list, delivery2: !list.delivery2 })}
              checkedIcon="dot-circle-o"
              checkedColor={colors.main}
              uncheckedIcon="circle-o"
            />
          </View>
          <View style={s.deliveryService}>
            <Text style={s.deliveryServiceText}>Antar Aja</Text>
            <CheckBox
              checked={list.delivery3 === true}
              onPress={() => setList({ ...list, delivery3: !list.delivery3 })}
              checkedIcon="dot-circle-o"
              checkedColor={colors.main}
              uncheckedIcon="circle-o"
            />
          </View>
          <View style={s.deliveryService}>
            <Text style={s.deliveryServiceText}>Si Cepat Reg</Text>
            <CheckBox
              checked={list.delivery4 === true}
              onPress={() => setList({ ...list, delivery4: !list.delivery4 })}
              checkedIcon="dot-circle-o"
              checkedColor={colors.main}
              uncheckedIcon="circle-o"
            />
          </View>
          <View style={s.deliveryService}>
            <Text style={s.deliveryServiceText}>JNE Reg</Text>
            <CheckBox
              checked={list.delivery5 === true}
              onPress={() => setList({ ...list, delivery5: !list.delivery5 })}
              checkedIcon="dot-circle-o"
              checkedColor={colors.main}
              uncheckedIcon="circle-o"
            />
          </View>
          <TouchableOpacity style={s.btnSimpan}>
            <Text style={s.textBtnSimpan}>Simpan</Text>
          </TouchableOpacity>
          <View style={{ height: 120 }}></View>
        </ScrollView>
      </View>
    </View>
  );
};

export default DeliveryService

const s = StyleSheet.create({
  body:{
    width:'100%',
    height:'100%',
    backgroundColor:colors.white,
    paddingHorizontal:'3%',
    paddingVertical:'5%',
  },
  boldTitle:{
    fontFamily:usedFont,
    fontWeight:'bold',
    fontSize:18,
    color:colors.black,
  },
  greyContainer:{
    backgroundColor:colors.lightGrey,
    width:'100%',
    borderRadius:15,
    padding :10,
    marginVertical:10,
  },
  greyTitle:{
    color:colors.midGrey,
    fontFamily:usedFont,
    fontSize:15,
    marginTop:10,
  },
  input:{
    borderBottomColor:colors.midGrey,
    borderBottomWidth:2,
    width:'96%',
    marginHorizontal:'2%',
  },
  redBtn:{
    backgroundColor:colors.main,
    borderRadius:15,
    padding :10,
    width:'55%',
    textAlign:'center',
    color:colors.white,
    fontFamily:usedFont,
    fontWeight:'bold',
    marginTop:'10%',
    alignSelf:'center',
  },
   deliveryService:{
    borderBottomWidth:2,
    borderBottomColor:colors.lightGrey,
    display:'flex',
    flexDirection:'row',
    marginVertical:5,
    width:'100%'
  },
  deliveryServiceText:{
    width:'80%',
   fontFamily:usedFont,
   fontSize:17,
   color:colors.black,
  },
  btnSimpan:{
    width:'100%',
    padding : 15,
    borderRadius:15,
    backgroundColor:colors.main,
    marginVertical:10,
  },
  textBtnSimpan:{
    textAlign:'center',
    fontFamily:usedFont,
    fontSize:18,
    fontWeight:'bold',
    color:colors.white,
  }
})
