import React, {useState} from "react";
import {View, Text, StyleSheet, Image,TextInput, TouchableOpacity, ScrollView} from 'react-native'
import {SimpleHeader, FloatingBtn, BlankContainer} from '../../../component'
import {colors, usedFont} from '../../../assets/colors'
import { IconDefaultEtalase, IconSearch } from "../../../assets/img";

const Etalase = ({navigation}) =>{

  // const [list,setList] = useState(null)
const list = [
  {
    id: 1,
    name: "Makanan",
  },
  {
    id: 2,
    name: "Minuman",
  },
  {
    id: 3,
    name: "Pakaian Wanita",
  },
];

const ItemList =(props)=>{
    return (
      <TouchableOpacity
        style={{
          display: "flex",
          flexDirection: "row",
          width: "100%",
          backgroundColor: colors.white,
          elevation: 8,
          padding :10,
          borderRadius:15,
          marginVertical:10,
        }}
        onPress={props.onPress}
      >
        <View style={{ width: "15%" }}>
          <Image
            source={props.img ? props.img : IconDefaultEtalase}
            style={{
              width: 50,
              height: 50,
              borderRadius: 15,
            }}
          />
        </View>
        <View style={{ width: "75%", marginLeft:'5%' }}>
          <Text
            style={{
              color: colors.black,
              fontFamily: usedFont,
              fontSize: 17,
              fontWeight: "bold",
              marginTop:10,
            }}
          >
            {props.name}
          </Text>
        </View>
      </TouchableOpacity>
    );
}

    return (
      <View style={s.body}>
        <SimpleHeader
          onBack={() => navigation.goBack()}
          title="Etalase Produk"
        />
        <View
          style={list !== null ?{
            borderBottomWidth: 2,
            borderBottomColor: colors.lightGrey,
            marginBottom: 5,
          }:{display:'none'}}
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
            <TextInput placeholder="Cari Etalase" style={{ width: "90%" }} />
          </View>
        </View>
        <View style={{ width: "94%", marginHorizontal: "3%" }}>
          <ScrollView>
            {list !== null? list.map((item)=>{
              return (
                <ItemList
                key={item.id}
                  name={item.name}
                  onPress={() => {
                    navigation.navigate("ItemEtalase", {
                      EtalaseName: item.name,
                    });
                  }}
                />
              );
            }):<BlankContainer title='Belum ada Etalase' desc='Buat Etalase Baru !'/>}
           
          </ScrollView>
        </View>
        <FloatingBtn
          title="Tambah Etalase"
          onPress={() => navigation.navigate('AddEtalase')}
        />
      </View>
    );
}
export default Etalase

const s = StyleSheet.create({
    body :{
        width:'100%',
        height:'100%',
        backgroundColor:colors.white,   
    },
  searchbar: {
    width: "96%",
    backgroundColor: colors.lightGrey,
    borderRadius: 25,
    display: "flex",
    flexDirection: "row",
    marginVertical: 15,
    marginHorizontal: "2%",
    padding: 10,
  },
});