import React, { useState } from "react";
import {View,Text, ScrollView, Image, TextInput, StyleSheet, Modal, StatusBar,TouchableOpacity} from 'react-native'
import {CardProduct, SimpleHeader, FloatingBtn, AssistantModal} from '../../../component'
import { IconSearch, IconAddProduct } from "../../../assets/img";
import { colors, usedFont } from "../../../assets/colors";
import {product} from './dummy'

const Product = ({navigation, route}) =>{
    const [visible,setVisible] = useState(false)
    


    return (
      <View style={s.body}>
        <SimpleHeader
          onBack={() => navigation.goBack()}
          title="Daftar Product kamu"
        />
        <AssistantModal 
        visible={visible} 
        sadFace 
        desc ='Apakah kamu yakn ingin menghapus produk ini ?' 
        confirm='Hapus'
        onClose={()=>setVisible(!visible)}
        onCancel={()=>setVisible(!visible)}
        />
        <View
          style={{
            borderBottomWidth: 2,
            borderBottomColor: colors.lightGrey,
            marginBottom: 5,
          }}
        >
          <View style={s.searchbar}>
            <View style={{ width: "10%" }}>
              <Image
                source={IconSearch}
                style={{
                  width: 35,
                  height: 35,
                }}
              />
            </View>
            <TextInput placeholder="Cari Produk" style={{ width: "90%" }} />
          </View>
        </View>
        <View style={{ width: "94%", marginHorizontal: "3%" }}>
          <ScrollView>
            {product?.map((item, index) => {
              return (
                <CardProduct
                  key={item.name}
                  name={item.name}
                  stock={item.stock}
                  price={item.price}
                  img={{ uri: item.img }}
                  onPress={() => {
                    navigation.navigate("DetailProduct", {
                      data: product[index],
                    });
                  }}
                  onEdit={() => {
                    navigation.navigate("AddProduct", { uuid: item.name });
                  }}
                  onDelete={() => {
                    setVisible(!visible)
                  }}
                  onShare={() => {
                    console.log("share");
                  }}
                />
              );
            })}
            <View style={{ height: 250 }}></View>
          </ScrollView>
        </View>
        <FloatingBtn
          title="Tambah Produk"
          onPress={() => {
            navigation.navigate("AddProduct", {
              uuid: null,
            });
          }}
        />
      </View>
    );
}

export default Product
const s = StyleSheet.create({
    body:{
        width:'100%',
        height:'100%',
        backgroundColor:colors.white,
    },
    searchbar:{
        width:'96%',
        backgroundColor:colors.lightGrey,
        borderRadius:25,
        display:'flex',
        flexDirection:'row',
        marginVertical:15,
        marginHorizontal:'2%',
        padding:10,
    },
    
})