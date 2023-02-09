import React from "react";
import {View, Text, TouchableOpacity, Image ,StyleSheet} from 'react-native'
import { colors, usedFont } from "../../assets/colors";
import { IconAddProduct } from "../../assets/img";

const FloatingBtn = (props) =>{
    return (
      <TouchableOpacity style={s.addBtn} onPress={props.onPress}>
        <Image
          source={IconAddProduct}
          style={{
            width: 40,
            height: 40,
          }}
        />
        <Text style={s.addBtnText}>{props.title}</Text>
      </TouchableOpacity>
    );
}
export default FloatingBtn

const s = StyleSheet.create({
  addBtn: {
    backgroundColor: colors.main,
    width: "45%",
    position: "absolute",
    bottom: 30,
    right: 5,
    display: "flex",
    flexDirection: "row",
    padding: 10,
    borderRadius: 30,
  },
  addBtnText: {
    color: colors.white,
    textAlignVertical: "center",
    textAlign: "center",
    fontFamily: usedFont,
    fontSize: 16,
    fontWeight: "bold",
  },
});