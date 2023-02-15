import React, { useState } from "react";
import {View,Text, TouchableOpacity, StyleSheet,Image, TextInput, ScrollView} from 'react-native'
import { colors, usedFont } from "../../assets/colors";
import { IconSearch, IconLatePayment, IconDelete, IconFilterOrder } from "../../assets/img";
import {SimpleHeader, OrderCard} from '../../component'


const Order = ({navigation}) => {
  const [search, setSearch] = useState('')
  const [index, setIndex] = useState(0)

    return (
      <View>
        <SimpleHeader title="PesananKu" />
        <View style={s.header}>
          <View style={s.input}>
            <Image source={IconSearch} style={s.iconSearch} />
            <TextInput
              style={{ width: "80%" }}
              onChangeText={(text) => {
                setSearch(text);
              }}
              value={search}
            />
          </View>
          <TouchableOpacity style={{ width: "15%" }}>
            <Image
              source={IconLatePayment}
              style={{ width: 40, height: 40, alignSelf: "flex-end" }}
            />
          </TouchableOpacity>
        </View>
        <View
          style={[
            s.header,
            {
              justifyContent: "space-between",
              paddingHorizontal: "2%",
              borderStyle: "dashed",
              borderBottomColor: colors.lightGrey,
              borderBottomWidth: 3,
              paddingBottom: 15,
            },
          ]}
        >
          <TouchableOpacity
          onPress={()=>{
            setIndex(0)
          }}
          >
            <Image
              source={IconFilterOrder}
              style={[s.iconSearch, { resizeMode: "contain" }]}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              s.btn,
              index === 1
                ? { borderColor: colors.main }
                : { borderColor: colors.grey },
            ]}
            onPress={() => {
              setIndex(1);
            }}
          >
            <Text
              style={[
                s.textBtn,
                index === 1
                  ? {
                      color: colors.main,
                    }
                  : {
                      color: colors.grey,
                    },
              ]}
            >
              Sudah Selesai
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              s.btn,
              index === 2
                ? { borderColor: colors.main }
                : { borderColor: colors.grey },
            ]}
            onPress={() => {
              setIndex(2);
            }}
          >
            <Text
              style={[
                s.textBtn,
                index === 2
                  ? {
                      color: colors.main,
                    }
                  : {
                      color: colors.grey,
                    },
              ]}
            >
              Dibatalkan
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              s.btn,
              index === 3
                ? { borderColor: colors.main }
                : { borderColor: colors.grey },
            ]}
            onPress={() => {
              setIndex(3);
            }}
          >
            <Text
              style={[
                s.textBtn,
                index === 3
                  ? {
                      color: colors.main,
                    }
                  : {
                      color: colors.grey,
                    },
              ]}
            >
              Sedang Berjalan
            </Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <Image
              source={IconDelete}
              style={[s.iconSearch, { resizeMode: "contain" }]}
            />
          </TouchableOpacity>
        </View>
        
          <View style={s.body}>
            <ScrollView>
            
            <OrderCard
              name="Nasi Padang"
              amount="1"
              status="Berhasil"
              date="12-03-23"
              price="250.000"
              green
            />
            <View style={{height:200,}}></View>
            </ScrollView>
          </View>
      </View>
    );
}

export default Order
const s = StyleSheet.create({
  body: {
    width: "100%",
    height: "85%",
    paddingHorizontal: "3%",
    backgroundColor: colors.white,
  },
  header: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    backgroundColor: "white",
    paddingHorizontal: "5%",
    paddingVertical:10,
  },
  input: {
    backgroundColor: colors.lightGrey,
    padding: 6,
    borderRadius: 15,
    width: "85%",
    display: "flex",
    flexDirection: "row",
  },
  iconSearch: {
    width: 30,
    height: 30,
    marginHorizontal:5,
  },
  btn:{
    borderWidth:2,
    padding :5,
    borderRadius:10,
    height:35,
    marginHorizontal:5,
  },
  textBtn:{
    fontFamily:usedFont,
    fontSize:13,
    textTransform:'capitalize',
  }
});
