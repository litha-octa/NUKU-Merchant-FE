import React from "react";
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native'
import { colors, usedFont } from "../../assets/colors";
import { IconShare } from "../../assets/img";

const CardProduct = (props) =>{

// list props : 
// img
// name
// stock
// price
//onEdit
//onDelete
//onShare

    return (
      <View
        style={{
          borderRadius: 15,
          borderColor: colors.midGrey,
          borderWidth: 1,
          backgroundColor: colors.white,
          padding: 15,
          width: "100%",
          marginVertical:10,
        }}
      >
        <TouchableOpacity style={s.row} onPress={props.onPress}>
          <View style={{ width: "15%" }}>
            <Image
              source={props.img}
              style={{ width: "100%", height: 60, borderRadius: 15 }}
            />
          </View>
          <View
            style={{
              width: "50%",
              paddingHorizontal: "3%",
            }}
          >
            <Text style={s.boldText}>{props.name}</Text>
            <Text style={s.greyText}>Stock : {props.stock}</Text>
          </View>
          <View style={{ width: "35%" }}>
            <Text style={s.greyText}>Harga Product</Text>
            <Text style={s.boldText}>{props.price}</Text>
          </View>
        </TouchableOpacity>
        <View style={[s.row,{justifyContent:'space-around', marginTop:10,}]}>
          <TouchableOpacity
            style={{
              width: "40%",
              borderColor: colors.main,
              borderWidth: 2,
              backgroundColor: colors.white,
              borderRadius: 10,
              padding: 10,
            }}
            onPress={props.onEdit}
          >
            <Text style={s.textBtn}>Edit Product</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              width: "40%",
              backgroundColor: colors.pink,
              borderRadius: 10,
              padding: 10,
            }}
            onPress={props.onDelete}
          >
            <Text style={s.textBtn}>Hapus Product</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={props.onShare}>
            <Image source={IconShare} style={{width:40,height:40}}/>
          </TouchableOpacity>
        </View>
      </View>
    );
}
export default CardProduct

const s = StyleSheet.create({
  row: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
  },
  greyText: {
    color: colors.grey,
    fontFamily: usedFont,
    fontSize: 16,
  },
  boldText: {
    textTransform: "capitalize",
    fontFamily: usedFont,
    fontWeight: "bold",
    fontSize: 18,
    color: colors.black,
  },
  textBtn: { color: colors.main, textAlign: "center" },
});
