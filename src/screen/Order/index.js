import React from "react";
import {View,Text, TouchableOpacity, StyleSheet,Image} from 'react-native'
import { colors } from "../../assets/colors";
import {SimpleHeader, OrderCard} from '../../component'


const Order = () => {
    return (
      <View>
        <SimpleHeader title="PesananKu" />
        <View style={s.body}>
          <OrderCard
            name="Nasi Padang"
            amount="1"
            status="Berhasil"
            date="12-03-23"
            price="250.000"
            green
          />
        </View>
      </View>
    );
}

export default Order
const s =StyleSheet.create({
body:{
    width:'100%',
    height:'100%',
    paddingHorizontal:'3%',
    backgroundColor:colors.white,
}
})
