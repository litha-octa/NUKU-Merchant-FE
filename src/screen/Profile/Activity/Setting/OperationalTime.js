import React from "react";
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native'
import { colors, usedFont } from "../../../../assets/colors";
import { IconDate, IconEdit } from "../../../../assets/img";
import { SimpleHeader } from "../../../../component";


const OperationalTime = ({navigation}) =>{
    const desc = ' Disini kamu bisa mengatur jadwal tokomu kapan mau buka atau tidak,secara rutin agar terhindar dari pesanan diluar jam operasional kamu'
    return (
      <View>
        <SimpleHeader
          onBack={() => navigation.goBack()}
          title="Jadwal Operasional Toko"
        />
        <View style={s.body}>
          <View style={s.row}>
            <Text style={s.boldText}>Atur Jam Operasional Toko</Text>
            <TouchableOpacity>
              <Image source={IconEdit} style={{ width: 40, height: 40 }} />
            </TouchableOpacity>
          </View>
          <Text style={s.desc}>{desc}</Text>
          <View
            style={[
              s.row,
              {
                borderBottomWidth: 2,
                borderBottomColor: colors.grey,
                justifyContent: "space-between",
                paddingVertical: 10,
              },
            ]}
          >
            <Image source={IconDate} style={{ width: 40, height: 40 }} />
            <Text
              style={{ fontFamily: usedFont, color: colors.grey, fontSize: 16 }}
            >
              Senin - Minggu
            </Text>
            <Text
              style={{
                fontFamily: usedFont,
                color: colors.main,
                fontSize: 16,
                fontWeight: "bold",
              }}
            >
              Buka 24 Jam
            </Text>
          </View>
        </View>
      </View>
    );
}

export default OperationalTime

const s = StyleSheet.create({
  body: {
    backgroundColor: colors.white,
    width: "100%",
    height: "100%",
    paddingHorizontal: "3%",
  },
  row: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
  },
  boldText: {
    fontFamily: usedFont,
    fontSize: 18,
    fontWeight: "bold",
    width: "90%",
    color: colors.black,
  },
  desc: {
    fontFamily: usedFont,
    fontSize: 16,
    width: "100%",
    color: colors.black,
  },
});