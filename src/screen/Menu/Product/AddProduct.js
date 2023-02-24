import React, { useState } from "react";
import {View, Text, Image, StyleSheet, TouchableOpacity, ScrollView, TextInput} from 'react-native'
import {SimpleHeader} from '../../../component'
import { colors, usedFont } from "../../../assets/colors";
import { RedPlus, BlankCamera, AssistantImg } from "../../../assets/img";

const AddProduct = ({navigation, route}) =>{
  const [kategori, setKategori] = useState(0)
  const { uuid } = route.params;

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
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
              marginTop: 10,
            }}
          >
            <ScrollView horizontal>
              <Image source={BlankCamera} style={s.imgCamera} />
              <Image source={BlankCamera} style={s.imgCamera} />
              <Image source={BlankCamera} style={s.imgCamera} />
              <Image source={BlankCamera} style={s.imgCamera} />
            </ScrollView>
          </View>

          <View style={s.redContainer}>
            <Image source={AssistantImg} style={s.imgAssistant} />
            <Text
              style={{
                width: "80%",
                textTransform: "capitalize",
                fontFamily: usedFont,
                fontSize: 15,
                color: colors.white,
              }}
            >
              foto pertama yang kamu pilih akan menjadi cover di tampilan produk
              nantinya.
            </Text>
          </View>
          <Text style={s.title}>Isi Nama Produk Kamu</Text>
          <Text style={s.greyTitle}>Masukkan Nama Produk</Text>
          <TextInput placeholder="Nama Produk" style={s.input} />
          <Text style={[s.title, { marginVertical: 10 }]}>Kategori Produk</Text>
          <View style={s.kategoriContainer}>
            <TouchableOpacity
              style={kategori === 1 ? s.categoryOn : s.categoryOff}
              onPress={() => setKategori(1)}
            >
              <Text
                style={kategori === 1 ? s.textcategoryOn : s.textcategoryOff}
              >
                Hasil Tani
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={kategori === 2 ? s.categoryOn : s.categoryOff}
              onPress={() => setKategori(2)}
            >
              <Text
                style={kategori === 2 ? s.textcategoryOn : s.textcategoryOff}
              >
                Peternakan
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={kategori === 3 ? s.categoryOn : s.categoryOff}
              onPress={() => setKategori(3)}
            >
              <Text
                style={kategori === 3 ? s.textcategoryOn : s.textcategoryOff}
              >
                Buah & Sayur
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={kategori === 4 ? s.categoryOn : s.categoryOff}
              onPress={() => setKategori(4)}
            >
              <Text
                style={kategori === 4 ? s.textcategoryOn : s.textcategoryOff}
              >
                Perikanan
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={kategori === 5 ? s.categoryOn : s.categoryOff}
              onPress={() => setKategori(5)}
            >
              <Text
                style={kategori === 5 ? s.textcategoryOn : s.textcategoryOff}
              >
                Makanan & Minuman
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={kategori === 6 ? s.categoryOn : s.categoryOff}
              onPress={() => setKategori(6)}
            >
              <Text
                style={kategori === 6 ? s.textcategoryOn : s.textcategoryOff}
              >
                Oleh-oleh
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={kategori === 7 ? s.categoryOn : s.categoryOff}
              onPress={() => setKategori(7)}
            >
              <Text
                style={kategori === 7 ? s.textcategoryOn : s.textcategoryOff}
              >
                Serba Elektronik
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={kategori === 8 ? s.categoryOn : s.categoryOff}
              onPress={() => setKategori(8)}
            >
              <Text
                style={kategori === 8 ? s.textcategoryOn : s.textcategoryOff}
              >
                Baju & Fashion
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={kategori === 9 ? s.categoryOn : s.categoryOff}
              onPress={() => setKategori(9)}
            >
              <Text
                style={kategori === 9 ? s.textcategoryOn : s.textcategoryOff}
              >
                Produk UMKN{" "}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={kategori === 10 ? s.categoryOn : s.categoryOff}
              onPress={() => setKategori(10)}
            >
              <Text
                style={kategori === 10 ? s.textcategoryOn : s.textcategoryOff}
              >
                obat dan Kesehatan
              </Text>
            </TouchableOpacity>
          </View>

          <Text style={s.title}>Harga Produk Satuan</Text>
          <Text style={s.greyTitle}>Masukkan Harga Produk</Text>
          <TextInput placeholder="Rp.0" style={s.input} />
          <Text style={s.title}>Stok Produk</Text>
          <Text style={s.greyTitle}>Masukkan Jumlah Produk ynag Tersedia</Text>
          <TextInput placeholder="Stok Produk" style={s.input} />
          <Text style={s.greyTitle}>Masukkan Jumlah Minimum Pemesanan</Text>
          <TextInput placeholder="Minimal Pesanan" style={s.input} />

          <Text style={s.title}>Kondisi Produk</Text>
          <Text style={s.underlineText}>Baru</Text>
          <Text style={s.underlineText}>Bekas</Text>
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
          <TouchableOpacity style={s.btnSubmit}>
            <Text style={s.textBtnSubmit}>Simpan</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </View>
  );
}
export default AddProduct
const s = StyleSheet.create({
  body: {
    width: "100%",
    height: "90%",
    backgroundColor: colors.white,
    paddingHorizontal: "3%",
    paddingTop: 10,
  },
  title: {
    fontFamily: usedFont,
    fontWeight: "bold",
    color: colors.black,
    fontSize: 18,
    width: "60%",
  },
  greyTitle: {
    color: colors.midGrey,
    fontFamily: usedFont,
    fontSize: 15,
    marginTop: 10,
  },
  row: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    backgroundColor: colors.white,
  },
  btnAddImg: {
    backgroundColor: colors.pink,
    display: "flex",
    flexDirection: "row",
    borderRadius: 15,
    padding: 5,
    width: "40%",
  },
  textBtnAddImg: {
    fontFamily: usedFont,
    fontSize: 15,
    fontWeight: "bold",
    color: colors.main,
    marginLeft: "2%",
  },
  redContainer: {
    display: "flex",
    flexDirection: "row",
    borderRadius: 15,
    marginVertical: 10,
    padding: 10,
    backgroundColor: colors.main,
  },
  imgCamera: { width: 100, height: 100, marginHorizontal: 10 },
  imgAssistant: { width: 60, height: 60, marginRight: 10 },
  input: {
    backgroundColor: colors.lightGrey,
    borderRadius: 15,
    padding: 10,
  },

  categoryOn: {
    borderColor: colors.main,
    borderWidth: 2,
    borderRadius: 15,
    width: "30%",
    padding: 5,
    backgroundColor: colors.white,
    marginTop: 10,
  },
  categoryOff: {
    borderColor: colors.grey,
    borderWidth: 2,
    borderRadius: 15,
    padding: 5,
    marginTop: 10,

    backgroundColor: colors.white,
    width: "30%",
  },
  textcategoryOn: {
    color: colors.main,
    fontFamily: usedFont,
    fontSize: 16,
    fontWeight: "bold",
  },
  textcategoryOff: {
    color: colors.grey,
    fontFamily: usedFont,
    fontSize: 16,
  },
  kategoriContainer: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  underlineText:{
    borderBottomColor:colors.grey,
    borderBottomWidth:2,
    marginVertical:10,
    fontFamily:usedFont,
    fontSize:18,
  }, btnSubmit:{
    backgroundColor:colors.main,
    borderRadius:15,
    width:'100%',
    padding :10,
    marginTop:10,
    marginBottom:25,
  }, textBtnSubmit:{
    color:colors.white,
    fontFamily:usedFont,
    fontSize:17,
    fontWeight:'bold',
    textAlign:'center',
  }
});