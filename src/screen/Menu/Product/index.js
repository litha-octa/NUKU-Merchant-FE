import React from "react";
import {View,Text, ScrollView, Image, TextInput, StyleSheet, Touchable, TouchableOpacity} from 'react-native'
import {CardProduct, SimpleHeader, FloatingBtn} from '../../../component'
import { IconSearch, IconAddProduct } from "../../../assets/img";
import { colors, usedFont } from "../../../assets/colors";
import {product} from './dummy'

const Product = ({navigation}) =>{
    // const product = {
    //   name: "Kue JAhe",
    //   stock: 30,
    //   price: "30.000",
    //   img: "https://tse1.mm.bing.net/th?id=OIP.4nsVrIl5v8YliIk-RwPvGgHaE7&pid=Api&P=0",
    // };
    return (
      <View style={s.body}>
        <SimpleHeader
          onBack={() => navigation.goBack()}
          title="Daftar Product kamu"
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
                  onEdit={() => {
                    console.log("edit");
                  }}
                  onDelete={() => {
                    console.log("delete");
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
       <FloatingBtn title='Tambah Produk' onPress={()=>console.log('clicked !')}/>
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