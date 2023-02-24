import React, { useState } from "react";
import {View,Text,TouchableOpacity, Modal, Image, StyleSheet, StatusBar} from 'react-native'
import { colors, usedFont } from '../../assets/colors'
import { IconQuest, AssistantImg, AssistantSad } from "../../assets/img";

const AssitantModal = (props) =>{
    const [visible,setVisible] = useState(false)

    const textDumm =
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";
    return (
      <View style={props.title ? s.body : null}>
        <StatusBar
          barStyle={"dark-content"}
          backgroundColor={
            props.visible === true || visible === true
              ? "rgba(32, 32, 32, 0.6)"
              : "white"
          }
        />
        <TouchableOpacity
          style={props.title ? null : { display: "none" }}
          onPress={() => {
            setVisible(!visible);
          }}
        >
          <Image
            source={IconQuest}
            style={{
              width: 25,
              height: 25,
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
        <Modal
          animationType="slide"
          transparent={true}
          visible={props.visible ? props.visible : visible}
        >
          <View
            style={{
              backgroundColor: "rgba(32, 32, 32, 0.6)",
              width: "100%",
              height: "100%",
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
                  onPress={
                    props.onClose ? props.onClose : () => setVisible(!visible)
                  }
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
                source={props.sadFace ? AssistantSad : AssistantImg}
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
              <View
                style={
                  props.confirm
                    ? {
                        display: "flex",
                        flexDirection: "row",
                        width: "100%",
                        justifyContent: "space-around",
                      }
                    : { display: "none" }
                }
              >
                <TouchableOpacity style={s.btnConfirm} onPress={props.onCancel}>
                  <Text style={s.textBtnConfirm}>Batal</Text>
                </TouchableOpacity>
                <TouchableOpacity style={s.btnConfirm} onPress={props.onConfirm}>
                  <Text style={s.textBtnConfirm}>
                    {props.confirm ? props.confirm : "Ok !"}
                  </Text>
                </TouchableOpacity>
              </View>
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
  btnConfirm:{
    width:'40%',
    borderRadius:15,
    padding :10,
    marginVertical:10,
    backgroundColor:'pink',
  },
  textBtnConfirm:{
    textAlign:'center',
    fontFamily:usedFont,
    fontSize:16,
    fontWeight:'bold',
    color:colors.main,
  }
});
