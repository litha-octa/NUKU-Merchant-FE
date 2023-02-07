import React from "react";
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native'
import { colors, usedFont } from "../../assets/colors";

const OrderCard =(props)=>{ 
    const img =
      "https://tse3.mm.bing.net/th?id=OIP.cvDadD_4JfQUoc5x1V-btAHaFl&pid=Api&P=0";

    return (
      <View>
        <View
          style={{
            width: "100%",
            padding: 10,
            display: "flex",
            flexDirection: "row",
            backgroundColor: colors.white,
            elevation: 8,
          }}
        >
          <View style={{ width: "15%" }}>
            <Image
              source={{ uri: img }}
              style={{ height: 55, width: 55, borderRadius: 15 }}
            />
          </View>
          <View style={{ width: "60%"}}>
            <Text
              style={{
                fontFamily: usedFont,
                fontWeight: "bold",
                fontSize: 17,
                color: colors.black,
              }}
            >
              {props.name}
            </Text>
            <Text
              style={{
                fontFamily: usedFont,
                fontSize: 16,
                color: colors.grey,
              }}
            >
              {props.amount} Barang
            </Text>
          </View>
        </View>
      </View>
    );
}
export default OrderCard