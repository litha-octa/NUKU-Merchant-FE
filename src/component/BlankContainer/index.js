import React from "react";
import {View, Text, Image} from 'react-native'
import { EmptyState } from "../../assets/img";
import { colors, usedFont } from "../../assets/colors";

const BlankContainer = (props) =>{
    return (
      <View
        style={{
          width: "90%",
          height: "70%",
          marginTop:'10%',
          marginHorizontal: "5%",
          alignItems: "center",
          // justifyContent: "center",
        }}
      >
        <Image
          source={EmptyState}
          style={{
            width: 200,
            resizeMode: "contain",
            height: 200,
          }}
        />
        <Text
          style={{
            color: colors.midGrey,
            fontSize: 18,
            fontFamily: usedFont,
            fontWeight: "bold",
            textTransform: "capitalize",
            width: "100%",
            textAlign: "center",
          }}
        >
          {props.title}
        </Text>

        <Text
          style={{
            textAlign: "center",
            color: colors.grey,
            fontSize: 16,
            fontFamily: usedFont,
            fontWeight: "bold",
            textTransform: "capitalize",
            width: "100%",
          }}
        >
          {props.desc}
        </Text>
      </View>
    );
}

export default BlankContainer