import React, { useState } from "react";
import {View, Text, Image, StyleSheet, TouchableOpacity, ScrollView} from 'react-native'
import {SimpleHeader} from '../../../component'
import { colors, usedFont } from "../../../assets/colors";
import { RedPlus } from "../../../assets/img";

const AddProduct = ({navigation}) =>{
    const [uuid, setUuid] = useState('111')
    
    return (
      <View>
        <SimpleHeader
          title={uuid !== null ? "Edit Produk" : "Tambah Produk"}
          onBack={() => navigation.goBack()}
        />
        <View style={s.body}>
          <ScrollView>
            <View style={s.row}>
              <Text style={s.title}>Foto Produk</Text>
              <TouchableOpacity style={s.btnAddImg}>
                <Image
                  source={RedPlus}
                  style={{ width: 15, height: 15, marginHorizontal: "5%" }}
                />
                <Text style={s.textBtnAddImg}>Tambah Foto</Text>
              </TouchableOpacity>
            </View>
            <Text style={s.title}>Isi Nama Produk Kamu</Text>
            <Text style={s.title}>Kategori Produk</Text>
            <Text style={s.title}>Harga Produk Satuan</Text>
            <Text style={s.title}>Harga Produk</Text>
            <Text style={s.title}>Detail Produk</Text>
            <View style={s.row}>
              <Text style={s.title}>Etalase </Text>
              <TouchableOpacity style={s.btnAddImg}>
                <Image
                  source={RedPlus}
                  style={{ width: 15, height: 15, marginHorizontal: "5%" }}
                />
                <Text style={s.textBtnAddImg}>Tambah</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
      </View>
    );
}
export default AddProduct
const s = StyleSheet.create({
    body:{
        width:'100%',
        height:'100%',
        backgroundColor:colors.white,
        paddingHorizontal:'3%',
        paddingTop:10,
    },
    title:{
        fontFamily:usedFont,
        fontWeight:'bold',
        color:colors.black,
        fontSize:18,
        width :'60%',
    },
    row:{
        display:'flex',
        flexDirection:'row',
        width:'100%',
        backgroundColor:colors.white,
    },
    btnAddImg:{
        backgroundColor:colors.pink,
        display:'flex',
        flexDirection:'row',
        borderRadius:15,
        padding :5,
        width:'40%'
    },
    textBtnAddImg:{
        fontFamily:usedFont,
        fontSize:15,
        fontWeight:'bold',
        color:colors.main,
        marginLeft:'2%',
    }
})