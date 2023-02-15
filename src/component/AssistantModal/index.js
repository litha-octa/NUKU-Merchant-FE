import React, { useState } from "react";
import {View,Text,TouchableOpacity, Modal, Image, StyleSheet, StatusBar} from 'react-native'
import { colors, usedFont } from '../../assets/colors'
import { IconQuest, AssistantImg } from "../../assets/img";

const AssitantModal = (props) =>{
    const [visible,setVisible] = useState(false)

    const textDumm =
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";
    return (
      <View style={s.body}>
        <StatusBar
        barStyle={'dark-content'}
        backgroundColor={visible === true? "rgba(32, 32, 32, 0.6)" : 'white' }
        />
        <TouchableOpacity
          onPress={() => {
            setVisible(!visible);
          }}
        >
          <Image
            source={IconQuest}
            style={{
              width: 35,
              height: 35,
              marginRight: 15,
            }}
          />
        </TouchableOpacity>
        <Text
          style={{
            fontFamily: usedFont,
            fontSize: 16,
            fontWeight: "bold",
            color: colors.main,
            textTransform: "capitalize",
            textAlignVertical: "center",
          }}
        >
          {props.title}
        </Text>
        <Modal animationType="slide" transparent={true} visible={visible}>
          <View
            style={{
              backgroundColor: "rgba(32, 32, 32, 0.6)",
              width :'100%',
              height:'100%',
            }}
          >
            <View style={s.bodyModal}>
              <View style={s.headerModal}>
                <Text
                  style={{
                    width: "95%",
                    fontFamily: usedFont,
                    fontWeight: "bold",
                    fontSize: 15,
                    color: colors.main,
                  }}
                >
                  Info Untuk Kamu
                </Text>
                <TouchableOpacity
                  onPress={() => {
                    setVisible(!visible);
                  }}
                >
                  <Text
                    style={{
                      fontFamily: "roboto",
                      fontWeight: "bold",
                      fontSize: 22,
                      textAlign: "center",
                    }}
                  >
                    x
                  </Text>
                </TouchableOpacity>
              </View>
              <Image
                source={AssistantImg}
                style={{
                  width: 150,
                  height: 130,
                  resizeMode: "contain",
                  alignSelf: "center",
                }}
              />
              <Text
                style={{
                  fontFamily: usedFont,
                  color: colors.midGrey,
                }}
              >
                {props.desc ? props.desc : textDumm}
              </Text>
            </View>
          </View>
        </Modal>
      </View>
    );
}
export default AssitantModal

const s = StyleSheet.create({
  body: {
    display: "flex",
    flexDirection: "row",
    backgroundColor: colors.white,
    with: "100%",
    marginVertical: 10,
  },
  bodyModal: {
    backgroundColor: colors.white,
    width: "80%",
    height: "auto",
    alignSelf: "center",
    elevation: 8,
    marginTop: "40%",
    borderRadius: 20,
    padding: 10,
  },
  headerModal: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
  },
});
