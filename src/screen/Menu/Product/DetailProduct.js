import React from "react";
import {View, Text, Image, StyleSheet, ScrollView, TouchableOpacity} from 'react-native';
import { colors, usedFont } from "../../../assets/colors";
import { RightGreyArrow, IconRedShare } from "../../../assets/img";
import { SimpleHeader } from "../../../component";

const DetailProduct = ({navigation, route}) => {
    const {data} = route.params
    console.log(data)
    const desc =
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
    return (
      <View style={{ backgroundColor: colors.white }}>
        <SimpleHeader
          title="Rincian Produk"
          onBack={() => navigation.goBack()}
        />

        <ScrollView>
          <View style={s.body1}>
            <View style={s.body}>
              <Image source={{ uri: data.img }} style={s.img} />

              <Text style={s.name}>Rp. {data.price}</Text>
              <Text style={s.price}>{data.name}</Text>
            </View>
            <View style={s.body}>
              <View style={s.borderBottom}>
                <Text style={[s.name, { width: "100%", fontSize: 15 }]}>
                  Detail Produk
                </Text>
              </View>
              <View style={s.borderBottom}>
                <Text style={s.detailLeft}>Kondisi</Text>
                <Text style={s.detailRight}>Baru</Text>
              </View>
              <View style={s.borderBottom}>
                <Text style={s.detailLeft}>Min.Pemesanan</Text>
                <Text style={s.detailRight}>1 Pcs</Text>
              </View>
              <View style={s.borderBottom}>
                <Text style={s.detailLeft}>Stok</Text>
                <Text style={s.detailRight}>{data.stock}</Text>
              </View>
              <View style={s.borderBottom}>
                <Text style={s.detailLeft}>Etalase</Text>
                <Text style={s.detailRight}>Kerajinan</Text>
              </View>
              <View style={s.borderBottom}>
                <Text style={s.detailLeft}>Kategori</Text>
                <Text style={s.detailRight}>Produk UMKM</Text>
              </View>
              <View style={s.borderBottom}>
                <Text>{desc}</Text>
              </View>
            </View>
            <View style={s.body}>
              <Text style={[s.name, { fontSize: 19, marginBottom: 10 }]}>
                Ongkir Rp.20.000
              </Text>
              <View style={s.row}>
                <Text style={[s.detailLeft, { width: "auto" }]}>
                  Dikirim Ke
                </Text>
                <Text
                  style={[s.detailRight, { width: "auto", marginLeft: 10 }]}
                >
                  Kantor Syahrul Ramdan
                </Text>
              </View>
              <Text style={[s.detailLeft, { width: "auto" }]}>
                Estimasi Tiba Hari Ini
              </Text>
              <View style={s.row}>
                <Text style={[s.detailLeft, { width: "auto" }]}>
                  Pengiriman :
                </Text>
                <View style={{ width: "65%" }}>
                  <TouchableOpacity
                    style={{
                      width: "50%",
                      backgroundColor: colors.pink,
                      marginHorizontal: 5,
                      padding: 5,
                      borderRadius: 5,
                    }}
                  >
                    <Text
                      style={{
                        color: colors.main,
                        fontWeight: "bold",
                        fontSize: 15,
                        textAlignVertical: "center",
                      }}
                    >
                      Nuku Delivery
                    </Text>
                  </TouchableOpacity>
                </View>
                <TouchableOpacity>
                  <Image
                    source={RightGreyArrow}
                    style={{ width: 40, height: 30 }}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View
            style={{ backgroundColor: colors.lightGrey, height: 130 }}
          ></View>
        </ScrollView>
        <View style={s.btmContainer}>
          <TouchableOpacity
            style={{
              backgroundColor: colors.main,
              borderRadius: 15,
              width: "45%",
              padding: 10,
            }}
            onPress={()=>navigation.navigate('AddProduct',{uuid:data.name})}
          >
            <Text
              style={{
                color: colors.white,
                fontFamily: usedFont,
                fontSize: 18,
                fontWeight: "bold",
                textAlign: "center",
              }}
            >
              Edit Produk
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: colors.pink,
              borderRadius: 15,
              width: "45%",
              padding: 10,
              display: "flex",
              flexDirection: "row",
            }}
          >
            <Image
              source={IconRedShare}
              style={{
                marginHorizontal: 10,
                width: 20,
                height: 20,
                resizeMode: "contain",
              }}
            />
            <Text
              style={{
                color: colors.main,
                fontFamily: usedFont,
                fontSize: 18,
                fontWeight: "bold",
                textAlign: "center",
              }}
            >
              Share Produk
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
}
export default DetailProduct

const s = StyleSheet.create({
  body1: {
    width: "100%",
    height: "90%",
    backgroundColor: colors.lightGrey,
    marginBottom:100,
  },
  body: {
    width: "100%",
    height: "auto",
    padding: 10,
    backgroundColor: colors.white,
    paddingHorizontal: "3%",
    marginBottom: 7,
  },
  img: {
    width: "100%",
    height: 300,
    borderRadius: 15,
    marginVertical: 10,
    backgroundColor: "white",
  },
  name: {
    fontFamily: usedFont,
    fontWeight: "bold",
    fontSize: 22,
    color: colors.black,
  },
  price: {
    fontFamily: usedFont,
    fontSize: 16,
    color: colors.black,
  },
  borderBottom: {
    display: "flex",
    flexDirection: "row",
    borderBottomColor: colors.lightGrey,
    borderBottomWidth: 2,
    paddingBottom: 5,
    marginVertical:5,
  },
  detailLeft: {
    fontFamily: usedFont,
    fontSize: 15,
    color: colors.black,
    width: "50%",
    textAlign: "left",
  },
  detailRight: {
    fontFamily: usedFont,
    fontWeight: "bold",
    fontSize: 15,
    color: colors.black,
    width: "50%",
    textAlign: "right",
  },
  row:{
    display:'flex',
    flexDirection:'row',
    width:'100%',
    marginVertical:10,
  },
  btmContainer:{
    position:'absolute',
    bottom:70,
    backgroundColor:colors.white,
    width:'100%',
    height:70,
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-around',
    elevation:8,
    padding :10,

  }
});