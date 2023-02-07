import React from "react";
import {View,Image, Text, TouchableOpacity, TextInput, StyleSheet} from 'react-native'
import { SimpleHeader } from "../../../component";
import { colors, usedFont } from "../../../assets/colors";

const MyStore = ({navigation}) => {
    const img =
      "https://tse2.mm.bing.net/th?id=OIP.BHDBlhTGI2-TaHhW4enWoAHaFE&pid=Api&P=0";
    
    return (
      <View>
        <SimpleHeader
          onBack={() => {
            navigation.goBack();
          }}
          onSave={() => {
            console.log("SAVED CLICKED");
          }}
          title="Toko Saya"
        />
        <View style={s.body}>
          <View style={s.topContainer}>
            <Image
              source={{ uri: img }}
              style={{ width: 150, height: 150, borderRadius: 70 }}
            />
            <TouchableOpacity style={s.btn}>
              <Text style={s.textBtn}>Ganti Foto Toko</Text>
            </TouchableOpacity>
            <Text style={s.desc}>
              Besar file maks. 10mb dengan format .JPG, JPEG atau PNG.
            </Text>
          </View>
          <View style={s.bottomContainer}>
            <Text style={s.titleData}>Nama Toko</Text>
            <TextInput style={s.input} placeholder="Nama Toko" />
            <Text style={s.titleData}>Deskripsi Toko</Text>
            <TextInput
              style={[s.input,{textAlignVertical:'top'}]}
              placeholder="Deskripsi Toko"
              multiline
              numberOfLines={5}
            />
            <Text style={s.titleData}>Slogan</Text>
            <TextInput style={s.input} placeholder="Slogan Toko" />
          </View>
        </View>
      </View>
    );
}
export default MyStore

const s = StyleSheet.create({
  body: {
    width: "100%",
    height: "100%",
    backgroundColor: colors.white,
  },
  topContainer: {
    justifyContent: "center",
    alignItems: "center",
    paddingVertical :20,
    // backgroundColor:'blue',
    borderBottomColor:colors.lightGrey,
    borderBottomWidth:7,
  },
  btn: {
    backgroundColor: colors.pink,
    width: "40%",
    borderRadius: 10,
    padding: 10,
    marginVertical: 20,
  },
  textBtn: {
    color: colors.main,
    fontFamily: usedFont,
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  desc:{
    color:colors.grey,
    fontFamily:usedFont,
    fontSize:19,
    width :'90%',
    textAlign:'center',
  },
  bottomContainer:{
 marginVertical:0,
 padding :'5%',

  },
  titleData:{
    fontFamily:usedFont,
    fontSize:17,
    color:colors.grey,
  },
  input:{
    backgroundColor:colors.lightGrey,
    fontWeight:'bold',
    fontSize:19,
    color:colors.black,
    padding :15,
    borderRadius:10,
    marginVertical:5,
  }
});