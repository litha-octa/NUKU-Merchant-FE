import React, {useState} from "react";
import {View, Text, TouchableOpacity, StyleSheet, Switch,Image, ScrollView} from  'react-native'
import {SimpleHeader, HeaderHome, ActivityItem, AssistantModal} from '../../component'
import {colors, usedFont} from '../../assets/colors'
import {
  IconDompet,
    IconFaq,
    IconModal,
    IconSetting,
    IconToko,
    IconUlasan,
    Watermark,
} from '../../assets/img'


const Profile = ({navigation}) =>{
  const [isOpen, setIsOpen] = useState()
    const merchant = {
      name: "Toko Sembako Jaya",
      img: "https://tse2.mm.bing.net/th?id=OIP.BHDBlhTGI2-TaHhW4enWoAHaFE&pid=Api&P=0",
      rate: "4.5",
      saldo: "Rp. 4.000",
      desc :'Toko lengkap murah serba ada',
      operational:'08:00 - 21:00'
    };
    return (
      <View>
        <SimpleHeader title="Lainnya" />
        <HeaderHome
          name={merchant?.name}
          img={{ uri: merchant?.img }}
          desc={merchant?.desc}
        />
        <ScrollView>
          <View style={s.body}>
            <View style={s.statusMerchant}>
              <Text
                style={
                  isOpen === true
                    ? {
                        fontFamily: usedFont,
                        width: "80%",
                        fontSize: 19,
                        color: colors.green,
                        textAlignVertical: "center",
                        fontWeight: "bold",
                      }
                    : {
                        fontFamily: usedFont,
                        width: "80%",
                        fontSize: 19,
                        color: colors.grey,
                        textAlignVertical: "center",
                        fontWeight: "bold",
                      }
                }
              >
                {isOpen === true ? "Toko Buka" : "Toko Tutup"}
              </Text>
              <Switch
                trackColor={{ false: colors.midGrey, true: colors.greenBg }}
                thumbColor={isOpen ? colors.green : colors.grey}
                onValueChange={() => {
                  setIsOpen(!isOpen);
                }}
                value={isOpen}
              />
            </View>
            <View style={s.greyContainer}>
              <View
                style={{
                  width: "45%",
                  borderRightColor: colors.grey,
                  borderRightWidth: 2,
                }}
              >
                <Text style={s.greyContTitle}>{merchant?.rate}</Text>
                <Text style={s.greyContDesc}>Rating Toko Anda</Text>
              </View>
              <View style={{ width: "45%" }}>
                <Text style={s.greyContTitle}>{merchant?.operational}</Text>
                <Text style={s.greyContDesc}>Jam Operasional</Text>
              </View>
            </View>
            <View style={{ marginHorizontal: "3%" }}>
              <AssistantModal title="Aktifitas Saya" />
            </View>
            <ActivityItem
              icon={IconToko}
              title="Toko Anda"
              onPress={() => navigation.navigate("Activity1")}
            />
            <ActivityItem
              icon={IconDompet}
              title="Dompet"
              onPress={() => navigation.navigate("Activity2")}
            />
            <ActivityItem
              icon={IconModal}
              title="Modal Kerja"
              onPress={() => console.log("Modal")}
            />
            <ActivityItem
              icon={IconUlasan}
              title="Ulasan"
              onPress={() => console.log("ulasan")}
            />
            <ActivityItem
              icon={IconSetting}
              title="Pengaturan"
              onPress={() => navigation.navigate("Activity5")}
            />
            <ActivityItem
              icon={IconFaq}
              title="FAQ"
              onPress={() => console.log("FAQ")}
            />
          </View>
          <Image
            source={Watermark}
            style={{ width: 500, height: 500, resizeMode: "contain" }}
          />
          <View style={{ height: 150 }}></View>
        </ScrollView>
      </View>
    );
}
export default Profile

const s = StyleSheet.create({
  body: {
    widt: "100%",
    height: "100%",
    backgroundColor: colors.white,
  },
  statusMerchant: {
    width: "96%",
    marginHorizontal: "2%",
    borderRadius: 15,
    elevation: 8,
    display: "flex",
    flexDirection: "row",
    padding: 20,
    height:80,
    marginTop:10,
    backgroundColor:colors.white,
  },
  greyContainer: {
    backgroundColor: colors.lightGrey,
    width: "100%",
    display: "flex",
    flexDirection: "row",
    padding :20,
    height:90,
    marginVertical:10,
  },
  greyContDesc: {
    color: colors.grey,
    fontSize: 15,
    fontFamily: usedFont,
    textAlign: "center",
  },
  greyContTitle: {
    fontFamily: usedFont,
    fontSize: 19,
    fontWeight: "bold",
    color: colors.black,
    textAlign: "center",
  },
});