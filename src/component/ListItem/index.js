import React from "react";
import {View, Text, Image, TouchableOpacity} from 'react-native'
import { usedFont } from "../../assets/colors";
import { RightGreyArrow } from "../../assets/img";
import { colors } from "../../assets/colors";

const ListItem = (props) =>{
    return (
      <TouchableOpacity
      onPress={props.onPress}
        style={{
          display: "flex",
          flexDirection: "row",
          width: "98%",
          marginHorizontal: "1%",
          elevation: 8,
          padding: 10,
          borderRadius: 10,
          backgroundColor: colors.white,
          marginVertical: 10,
        }}
      >
        <View style={{ width: "10%" }}>
          <Image source={props.img} style={{ width: 40, height: 40 }} />
        </View>
        <Text
          style={{
            fontFamily: usedFont,
            fontSize: 16,
            fontWeight: "bold",
            width: "80%",
            paddingLeft: "3%",
            marginTop: 5,
          }}
        >
          {props.title}
        </Text>
        <View style={{ width: "10%" }}>
          <Image source={RightGreyArrow} style={{ width: 40, height: 40 }} />
        </View>
      </TouchableOpacity>
    );
}
export default ListItem