import React from "react";
import {View,Image,TouchableOpacity,Text} from 'react-native'
import {RightGreyArrow} from '../../assets/img'
import { colors, usedFont } from "../../assets/colors";

const ActivityItem = (props) => {
    return (
      <TouchableOpacity
      onPress={props.onPress}
        style={{
            marginVertical:10,
          width: "100%",
          height: 50,
          borderBottomColor: colors.grey,
          borderBottomWidth: 2,
          display: "flex",
          flexDirection: "row",
          paddingBottom: 10,
          paddingHorizontal:'3%',
        }}
      >
        <Image source={props.icon} style={{ width: 40, height: 40 }} />
        <Text
          style={{
            textAlignVertical: "center",
            fontSize: 17,
            fontWeight: "bold",
            width: "80%",
            paddingHorizontal: "5%",
            color: colors.midGrey,
          }}
        >
          {props.title}
        </Text>
        <Image
          source={RightGreyArrow}
          style={{
            width: 40,
            height: 40,
            resizeMode: "contain",
          }}
        />
      </TouchableOpacity>
    );
}
export default ActivityItem