import React from "react";
import {View,Text,TouchableOpacity,StyleSheet,Image, ScrollView} from 'react-native'
import { colors, usedFont } from "../../assets/colors";
import {SimpleHeader, AssistantModal} from '../../component'
import {
  BtnHelp,
  BtnNotif,
  BtnSettingChat,
  DefaultChatPic,
} from "../../assets/img";


const Chat =()=>{

    const ChatCard =(props)=>{
        return (
          <TouchableOpacity style={s.bodyCard}>
            <Image
              source={props.img ? props.img : DefaultChatPic}
              style={{
                width: 50,
                height: 50,
              }}
            />
            <View
              style={{
                width: "70%",
                paddingHorizontal: "4%",
              }}
            >
              <Text
                style={{
                  fontFamily: usedFont,
                  fontWeight: "bold",
                  fontSize: 18,
                  color: colors.black,
                }}
              >
                {props.sender}
              </Text>
              <Text
                style={{
                  fontFamily: usedFont,
                  fontSize: 15,
                  color: colors.grey,
                  marginTop: 5,
                }}
              >
                {props.chat}
              </Text>
            </View>
            <View
              style={{
                width: "20%",
                paddingHorizontal: "2%",
              }}
            >
              <Text
                style={{
                  fontFamily: usedFont,
                  fontSize: 13,
                  color: colors.grey,
                    textAlign:'center',
                }}
              >
                {props.date}
              </Text>
              <Text
              style={{
                backgroundColor:colors.main,
                fontSize:18,
                color:colors.white,
                fontFamily:usedFont,
                fontWeight:'bold',
                width : 30,
                borderRadius:13,
                textAlign:'center',
                marginTop:5,

              }}
              >{props.chatCount}</Text>
            </View>
          </TouchableOpacity>
        );
    }
    return (
      <View>
        <SimpleHeader title="Chat" />
        <View style={s.body}>
          <ScrollView>
            <AssistantModal title="Layanan" />
            <View style={s.topContainer}>
              <TouchableOpacity
                onPress={() => {
                  console.log("button notif clicked");
                }}
              >
                <Image source={BtnNotif} style={s.serviceBtn} />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  console.log("button help clicked");
                }}
              >
                <Image source={BtnHelp} style={s.serviceBtn} />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  console.log("button setting clicked");
                }}
              >
                <Image source={BtnSettingChat} style={s.serviceBtn} />
              </TouchableOpacity>
            </View>
            <AssistantModal title="Chat Kamu" />
            <ChatCard
              sender="Fauzi Reziyanto"
              chat="Apa Barang Ready?"
              date="11-12-22"
              chatCount="6"
            />
            <ChatCard
              sender="Litha Fathurohman"
              chat="Bisa Dikirim Hari ini?"
              date="11-12-22"
              chatCount="11"
            />
            <ChatCard
              sender="Syahrul Octa Delistia"
              chat="Min, kurir nyasar ?"
              date="11-12-22"
              chatCount="66"
            />
            <ChatCard
              sender="Reza Ramdan"
              chat="Barangnya baguss?"
              date="11-12-22"
              chatCount="3"
            />
            <ChatCard
              sender="Fauzi Reziyanto"
              chat="Apa Barang Ready?"
              date="11-12-22"
              chatCount="6"
            />
            <ChatCard
              sender="Litha Fathurohman"
              chat="Bisa Dikirim Hari ini?"
              date="11-12-22"
              chatCount="11"
            />
            <ChatCard
              sender="Syahrul Octa Delistia"
              chat="Min, kurir nyasar ?"
              date="11-12-22"
              chatCount="66"
            />
            <ChatCard
              sender="Reza Ramdan"
              chat="Barangnya baguss?"
              date="11-12-22"
              chatCount="3"
            />
          </ScrollView>
        </View>
      </View>
    );
}
export default Chat
const s = StyleSheet.create({

    body :{
        width:'100%',
        height:'88%',
        backgroundColor:colors.white, 
        paddingHorizontal:'5%',  
    },
    topContainer:{
        display:'flex',
        flexDirection:'row',
        width:'100%',
        justifyContent:'space-around',
    },
    serviceBtn:{
        width:100,
        height:100,
    },
    bodyCard:{
        display:'flex',
        flexDirection:'row',
        width:'100%',
        padding :5,
        marginVertical:7,

    }
})