import React, { useEffect, useState } from "react";
import {View, Text, TextInput, StyleSheet, Image, TouchableOpacity, Alert, ScrollView, KeyboardAvoidingView} from 'react-native'
import { colors, usedFont } from "../../../assets/colors";
import { IconMoney, IconDefaultEtalase } from "../../../assets/img";
import {AssistantModal, ListItem, SimpleHeader} from '../../../component'

const TarikTunai = ({navigation}) =>{
    const [index, setIndex]=useState(0)
    const [nominal, setNominal] = useState(0)
    const [saldo,setSaldo] = useState(50000);
    const [method, setMethod] = useState(null)


    const ItemList = (props) => {
      return (
        <TouchableOpacity
          style={{
            display: "flex",
            flexDirection: "row",
            width: "100%",
            backgroundColor: colors.white,
            elevation: 8,
            padding: 10,
            borderRadius: 15,
            marginVertical: 10,
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
          <View style={{ width: "75%", marginLeft: "5%" }}>
            <Text
              style={{
                color: colors.black,
                fontFamily: usedFont,
                fontSize: 17,
                fontWeight: "bold",
                marginTop: 10,
              }}
            >
              {props.name}
            </Text>
          </View>
        </TouchableOpacity>
      );
    };

    const NominalCard = (props) => {
      return (
        <TouchableOpacity
        onPress={props.onPress}
          style={{
            width: "45%",
            display: "flex",
            flexDirection: "row",
            backgroundColor: colors.white,
            elevation: 8,
            borderColor: colors.grey,
            borderWidth: 1,
            alignItems:'center',
            alignContent:'center',
            borderRadius:15,
            padding :10,
            marginVertical:5,
          }}
        >
          <Text
            style={{
              fontFamily: usedFont,
              fontWeight: "bold",
              fontSize: 22,
              color: colors.black,
            }}
          >
            {props.nominal}
          </Text>
          <Text
            style={{
              fontFamily: usedFont,
              fontWeight: "bold",
              fontSize: 13,
              color: colors.black,
            }}
          >
            Ribu
          </Text>
        </TouchableOpacity>
      );
    };

    return (
      <View>
        <View
          style={
            index === 0
              ? { width: "100%", height: "100%" }
              : { display: "none" }
          }
        >
          <SimpleHeader
            title="Tarik Tunai"
            onBack={() => navigation.goBack()}
          />
          <View style={s.container}>
            <ScrollView>
              <View style={s.greenContainer}>
                <Image
                  source={IconMoney}
                  style={{ width: 150, height: 150, resizeMode: "contain" }}
                />
                <View style={s.row}>
                  <Text style={s.greenText}>Jumlah Saldo : </Text>
                  <Text
                    style={[
                      s.greenText,
                      { fontSize: 21, textAlign: "left", width: "60%" },
                    ]}
                  >
                    Rp. {saldo}
                  </Text>
                </View>
              </View>
              <AssistantModal title="Pilihan Nominal" />
              <View style={s.cardContainer}>
                <NominalCard
                  nominal="25"
                  onPress={() => {
                    setNominal(25000);
                  }}
                />
                <NominalCard
                  nominal="50"
                  onPress={() => {
                    setNominal(50000);
                  }}
                />
                <NominalCard
                  nominal="100"
                  onPress={() => {
                    setNominal(100000);
                  }}
                />
                <NominalCard
                  nominal="200"
                  onPress={() => {
                    setNominal(200000);
                  }}
                />
                <NominalCard
                  nominal="300"
                  onPress={() => {
                    setNominal(300000);
                  }}
                />
                <NominalCard
                  nominal="400"
                  onPress={() => {
                    setNominal(400000);
                  }}
                />
              </View>
              
                <View>
                  <KeyboardAvoidingView style={{marginBottom:100}}>
                  <TextInput
                    placeholder="Ketik Sendiri Nominal"
                    style={s.customnominal}
                    onChangeText={(text) => setNominal(parseInt(text))}
                    keyboardType="numeric"
                    value={nominal}
                  />
                  </KeyboardAvoidingView>
                </View>
            </ScrollView>
          </View>
          <TouchableOpacity
            style={
              nominal > saldo
                ? [s.bottomBtn, { backgroundColor: colors.grey }]
                : s.bottomBtn
            }
            onPress={() => {
              nominal === null || nominal === 0 || nominal === "0"
                ? Alert.alert("Pilih atau Masukkan Nominal Penarikan")
                : nominal > saldo
                ? Alert.alert("Saldo Tidak Mencukupi !")
                : setIndex(1);
            }}
          >
            <Text
              style={
                nominal > saldo
                  ? [s.bottomBtnText, { color: colors.main }]
                  : s.bottomBtnText
              }
            >
              {nominal > saldo
                ? "Saldo Tidak Mencukupi !"
                : "Pilih Metode Penarikan"}
            </Text>
          </TouchableOpacity>
        </View>
        <View style={index === 1 ? null : { display: "none" }}>
          <SimpleHeader
            title="Tarik Tunai"
            onBack={() => setIndex(index - 1)}
          />
          <View style={s.container}>
            <Text style={s.redTitle}> Pilih Metode Penarikan </Text>
            <ListItem
              img={IconMoney}
              title="Rekening Bank"
              onPress={() => {
                setMethod(1);
                setIndex(2);
              }}
            />
            <ListItem
              img={IconMoney}
              title="Minimarket"
              onPress={() => {
                setMethod(1);
                setIndex(2);
              }}
            />
          </View>
        </View>
        <View style={index === 2 ? null : { display: "none" }}>
          <SimpleHeader
            title={method === 1 ? "Pilih Bank Tujuan" : "Tarik Tunai"}
            onBack={() => setIndex(index - 1)}
          />
          <View style={method === 1 ? s.container : { display: "none" }}>
            <ScrollView>
              <Text style={[s.redTitle, { textTransform: "capitalize" }]}>
                {method === 1 ? "Daftar Bank" : "Minimarket"}
              </Text>
              <ItemList name="Bank Mandiri" />
              <ItemList name="Bank Negara Indonesia" />
              <ItemList name="Bank Central Asia" />
              <ItemList name="Bank Syariah Indonesia" />
            </ScrollView>
          </View>
        </View>
      </View>
    );
}
 const s = StyleSheet.create({
    container:{
        backgroundColor:colors.white,
        width :'100%',
        height:'100%',
        paddingHorizontal:'3%',
    },
    greenContainer:{
        backgroundColor:colors.greenBg,
        width:'100%',
        height:200,
        borderRadius:15,
        padding :10,
        alignItems:'center',
    },
    greenText:{
        fontFamily:usedFont,
        fontWeight:'bold',
        color:colors.green,
        width :'40%',
        textAlign:'right',
    },
    row:{
        display:'flex',
        flexDirection:'row',
        width:'100%',
    },
    cardContainer:{
      display:'flex',
      flexDirection:'row',
      flexWrap:'wrap',
      justifyContent:'space-around',
    },
    customnominal:{
      backgroundColor:colors.grey,
      borderRadius:15,
      padding :5,
      textAlign:'center',
      fontFamily:usedFont,
      color:colors.black,
      marginVertical:10,
      },
      bottomBtn:{
        position:'absolute',
        borderRadius:15,
        backgroundColor:colors.main,
        padding :10,
        // bottom : 30,
        top :'90%',
        width :'100%',
        alignSelf:'center',
      },
      bottomBtnText:{
        textAlign:'center',
        color:colors.white,
        fontFamily:usedFont,
        fontWeight:'bold',
        fontSize:16,
      },
      redTitle:{
        fontFamily:usedFont,
        fontSize:17,
        fontWeight:'bold',
        color:colors.main,
      }
 })


export default TarikTunai

