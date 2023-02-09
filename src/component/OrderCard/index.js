import React from "react";
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native'
import { colors, usedFont } from "../../assets/colors";

const OrderCard =(props)=>{ 
    const img =
      "https://tse3.mm.bing.net/th?id=OIP.cvDadD_4JfQUoc5x1V-btAHaFl&pid=Api&P=0";
  
      const ColorText = (props)=>{
         if(props.green){
          return colors.green
         }else if(props.yellow){ 
          return colors.yellow
         }else if(props.red){
          return colors.main
         }
      }
      const ColorBg = (props) => {
        if (props.green) {
          return colors.greenBg;
        } else if (props.yellow) {
          return colors.yellowBg;
        } else if (props.red) {
          return colors.pink;
        }
      };
  
    return (
      <View
        style={s.body}
      >
        <View
          style={[
            s.row,
            { borderBottomColor: colors.lightGrey, borderBottomWidth: 2 },
          ]}
        >
          <View style={{ width: "15%" }}>
            <Image
              source={{ uri: img }}
              style={{ height: 55, width: 55, borderRadius: 15 }}
            />
          </View>
          <View style={{ width: "50%", paddingLeft:'5%' }}>
            <Text style={s.bold}>{props.name}</Text>
            <Text style={s.grey}>{props.amount} Barang</Text>
          </View>
          <View style={{ width: "35%" }}>
            <Text
              style={{
                fontFamily: usedFont,
                fontSize: 16,
                color: ColorText(props),
                backgroundColor: ColorBg(props),
                pading: 10,
                borderRadius: 15,
                textAlign: "center",
                textTransform: "capitalize",
                fontWeight: "bold",
              }}
            >
              {props.status}
            </Text>
            <Text
              style={{
                fontFamily: usedFont,
                fontSize: 16,
                color: colors.grey,
                textAlign: "right",
              }}
            >
              {props.date}
            </Text>
          </View>
        </View>
        <View style={s.row}>
          <View style={{ width: "60%" }}>
            <Text style={s.grey}>Total Belanja</Text>
            <Text style={s.bold}>Rp. {props.price}</Text>
          </View>
          <TouchableOpacity style={s.btnDetail} onPress={props.onPress}>
            <Text style={s.btnDetailText}>Lihat Detail Pesanan</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
}
export default OrderCard

const s = StyleSheet.create({
  body:{ 
    elevation: 8, 
    backgroundColor: colors.white, 
    width: "100%", 
  borderRadius:20,
  marginVertical:10,

  },
  row: {
    width: "96%",
    marginHorizontal: "2%",
    padding: 10,
    display: "flex",
    flexDirection: "row",
  },
  bold: {
    fontFamily: usedFont,
    fontWeight: "bold",
    fontSize: 17,
    color: colors.black,
  },
  grey: {
    fontFamily: usedFont,
    fontSize: 16,
    color: colors.grey,
  },
  btnDetail:{
    backgroundColor:colors.main,
    borderRadius:25,
    width :'40%',
    height:35,
    marginTop:5,
    justifyContent:'center',
  },
  btnDetailText:{
    color:colors.white,
    fontFamily:usedFont,
    fontSize:14,
    fontWeight:'bold',
    textAlign:'center',
  }
});