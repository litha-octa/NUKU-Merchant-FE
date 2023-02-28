import React, {useState, useEffect} from "react";
import {View, Text, StyleSheet, Image,TextInput, TouchableOpacity, ScrollView} from 'react-native'
import {SimpleHeader, FloatingBtn, BlankContainer} from '../../../component'
import {colors, usedFont} from '../../../assets/colors'
import { IconDefaultEtalase, IconSearch } from "../../../assets/img";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { BASE_URL, URL } from "../../../service";
import { useIsFocused} from "@react-navigation/native";

const Etalase = ({navigation}) =>{
  const [list,setList] = useState(null)
  const [token, setToken] = useState();

  const isFocused = useIsFocused

  const getToken = async () => {
    try {
      const value = await AsyncStorage.getItem("token");
      if (value !== null) {
        console.log(value)
        listEtalase(value)
        setToken(value)
      }
    } catch (e) {
      console.log(e);
    }
  };


  const listEtalase = (token) => {
    axios.get(
      `${BASE_URL}${URL.listEtalase}?search=&page=1&size=20&sortBy=&sortDir=&is_active=`,
      {
        headers:{
          Authorization:`Bearer ${token}`,
        },
      }
    )
    .then((res)=>{
      console.log(res.data.data)
      setList(res.data.data)
    }  
      )
    .catch((err)=>{console.log(err)})
  }

  useEffect(()=>{
    getToken()
    if(isFocused){
    listEtalase(token)
    }
  },[navigation, isFocused])

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
              textTransform:'capitalize',
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
                key={item.uuid}
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