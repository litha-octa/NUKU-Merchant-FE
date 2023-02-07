import React from "react";
import {View, Text, Image, TouchableOpacity} from 'react-native'
import { colors } from "../../assets/colors";

const CardMenu = (props) => {
  return (
    <View
      style={{
        width: "30%",
        height: "50%",
      }}
    >
      <TouchableOpacity
        style={{
          backgroundColor: colors.white,
          borderRadius: 20,
          elevation: 8,
          width: "100%",
          padding: 20,
        }}
        onPress={props.onPress}
      >
        <Image source={props.img} style={{ width: 80, height: 80 }} />
      </TouchableOpacity>
      <Text style={{ textAlign: "center", marginVertical: 10 }}>
        {props.menuName}
      </Text>
    </View>
  );
};

export default CardMenu