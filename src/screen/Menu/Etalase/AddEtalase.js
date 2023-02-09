import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { colors, usedFont } from "../../../assets/colors";
import { BlankCamera } from "../../../assets/img";
import { SimpleHeader } from "../../../component";

const AddEtalase = ({navigation}) => {
    return (
      <View style={s.body}>
        <SimpleHeader
          title="Tambah Etalase Baru"
          onBack={() => {
            navigation.goBack();
          }}
        />
        <Text style={s.titleText}>Foto Cover Etalase</Text>
        <View style={s.topContainer}>
          <Image
            source={BlankCamera}
            style={{
              width: 150,
              height: 150,
            }}
          />
          <TouchableOpacity style={s.btnUpload}>
            <Text style={s.btnUploadText}>Tambah Foto Etalase</Text>
          </TouchableOpacity>
          <Text style={s.greyText}>
            Besar file maks. 10mb dengan format .JPG, JPEG atau PNG.
          </Text>
        </View>
        <View>
          <Text style={s.titleText}>Isi Detail Etalase</Text>
          <Text style={s.inputTitle}>Masukkan Nama Etalase</Text>
          <TextInput style={s.inputField} placeholder="Masukkan Nama Etalase" />
        </View>
        <TouchableOpacity style={s.btnSimpan}
        onPress={()=>navigation.navigate('Etalase')}
        >
          <Text style={s.btnSimpanText}>Simpan</Text>
        </TouchableOpacity>
      </View>
    );
}

export default AddEtalase

const s = StyleSheet.create({
  body: {
    width: "100%",
    height: "100%",
    backgroundColor: colors.white,
  },
  titleText: {
    fontSize: 19,
    fontWeight: "bold",
    color: colors.black,
    fontFamily: usedFont,
    width: "100%",
    paddingHorizontal: "5%",
    marginBottom: 15,
  },
  topContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 10,
    borderBottomColor: colors.lightGrey,
    borderBottomWidth: 2,
    paddingBottom: 15,
  },
  btnUpload: {
    backgroundColor: colors.pink,
    borderRadius: 10,
    padding: 10,
    width: "40%",
    marginVertical: 10,
  },
  btnUploadText: {
    color: colors.main,
    textAlign: "center",
    fontFamily: usedFont,
    fontWeight: "bold",
    fontSize: 15,
  },
  greyText: {
    fontFamily: usedFont,
    fontSize: 17,
    color: colors.grey,
    width: "80%",
    textAlign: "center",
  },
  inputTitle: {
    color: colors.grey,
    fontFamily: usedFont,
    width: "100%",
    paddingHorizontal: "5%",
    fontSize: 16,
  },
  inputField: {
    backgroundColor: colors.lightGrey,
    fontFamily: usedFont,
    width: "90%",
    marginHorizontal: "5%",
    fontSize: 18,
    padding :10,
    borderRadius:10,
  },
  btnSimpan:{
    position:'absolute',
    bottom:0,
    backgroundColor:colors.main,
    width :'90%',
    marginHorizontal:'5%',
    borderRadius:15,
    height:50,
    justifyContent:'center',
  },
  btnSimpanText:{
    color:colors.white,
    fontFamily:usedFont,
    fontSize:18,
    fontWeight:'bold',
    textAlign:'center',
  }
});