import React, {useEffect, useState} from "react";
import {View, Text, Image, TouchableOpacity, TextInput, StyleSheet, KeyboardAvoidingView, Alert} from 'react-native'
import {
  LeftArrowTail,
  LogoAuth,
  ByEmailIcon,
  ByFBIcon,
  ByGoogleIcon,
  ByPhoneIcon,
  ShowOff,
  ShowOn,

} from "../../assets/img"
import {colors} from '../../assets/colors'
import axios from 'axios'
import { BASE_URL, URL } from "../../service";
import AsyncStorage from "@react-native-async-storage/async-storage";





  const  Login =({navigation, route})=>{
    const [token, setToken] = useState();
    const [byEmail, setByEmail] = useState(true)
    const [showPass, setShowPass] = useState(false)
    const [email,setEmail] = useState()
    const [phone,setPhone] = useState()
    const [password, setPassword] = useState()
    const desc= 'selamat datang kembali pengguna tercinta, silahkan isi nomor handphone yang sudah terdaftar di bawah sini'


    const loginHandler = () =>{
if(!email || !password){
  Alert.alert('oops!', 'Lengkapi Email dan Password')
}else{         axios({
           method: "POST",
           url: `${BASE_URL}${URL.login}`,
           headers: {
             "Access-Control-Allow-Origin": "*",
           },
           data: {
             emailOrPhone: phone ? phone : email,
             password: password,
           },
         })
           .then((res) => {
             if (
               !res.data.data.token ||
               res.data.status !== 200 ||
               res.data.message !== "success"
             ) {
               alert("LOGIN FAILED");
             } else {
              setToken(res.data.data.token);
               const storeData = async() => {
                 try {
                  await AsyncStorage.setItem("token", res.data.data.token)
                 } catch (e) {
                   console.log(e);
                 }
               };
               storeData()
              const getData = async () => {
                try {
                  const value = await AsyncStorage.getItem("token");
                  if (value !== null) {
                    navigation.navigate('MainApp')
                  }
                } catch (e) {
                  // error reading value
                }
              };
                getData()

           }
          })
           .catch((err) => {
          //    console.log(err);
              if (
                err.toString() ===
                "AxiosError: Request failed with status code 401"
              ){
                Alert.alert("Opps!", "Email atau Password Salah");
              }else if(err.toString() ===
                "AxiosError: Request failed with status code 500"){
                  Alert.alert('Opps!', 'Ada Masalah Dengan Server Kami')
                }
           });
    }
  }
    
    return (
      <View>
        <View style={s.header}>
          <View style={s.midleHeader}></View>
          <View style={{ width: "25%" }}>
            <Image source={LogoAuth} style={s.logoHeader} />
          </View>
        </View>
        <View style={s.body}>
            <Text style={s.title}>Masuk</Text>
            <Text style={s.desc}>{byEmail ? "Dengan Email" : ""}</Text>
            <Text style={s.desc}>{desc}</Text>
            <Text style={s.inputTitle}>
              {byEmail ? "Email atau No. Handphone" : "Nomor Handphone"}
            </Text>
            <View style={s.input}>
              <TextInput
                value={byEmail ? email : phone}
                autoCapitalize="none"
                onChangeText={
                  byEmail ? (text) => setEmail(text) : (text) => setPhone(text)
                }
                keyboardType={byEmail ? "email-address" : "numeric"}
                placeholder={
                  byEmail
                    ? "contoh : Syahrul123@gmail.com"
                    : "Contoh : 081234567890"
                }

                style={{width:'100%'}}
              />
            </View>
            <Text style={byEmail ? s.inputTitle : { display: "none" }}>
              Password
            </Text>
            <View style={byEmail ? s.input : { display: "none" }}>
              <TextInput

                placeholder="Masukkan Password yang Sudah dibuat"
                secureTextEntry={showPass == false ? true : false}
                style={{ width: "90%" }}
                value={password}
                autoCapitalize="none"
                onChangeText={(text) => setPassword(text)}
              />
              <TouchableOpacity
                onPress={() => setShowPass(!showPass)}
                style={{ width: "10%" }}
              >
                <Image
                  source={showPass ? ShowOff : ShowOn}
                  style={{ width: 30, height: 30, marginVertical: 10 }}
                />
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              style={s.btn}
              onPress={() => {
                byEmail ? loginHandler() : navigation.navigate("OTP");
              }}
            >
              <Text style={s.btnText}>Masuk</Text>
            </TouchableOpacity>
          <View style={s.bottomContainer}>
            <Text style={s.titleContainer}>Metode Lain</Text>
            <View style={s.underline}>
              <Text style={s.descContainer}>
                masuk melalui metode lainnya, klik salah satu di bawah ini
              </Text>
            </View>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                width: "100%",
                paddingHorizontal: "25%",
                justifyContent: "space-between",
                marginTop: 15,
              }}
            >
              <TouchableOpacity
                onPress={() => {
                  setByEmail(!byEmail);
                  setPassword("");
                }}
              >
                <Image
                  source={byEmail ? ByPhoneIcon : ByEmailIcon}
                  style={s.loginMethod}
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image source={ByGoogleIcon} style={s.loginMethod} />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image source={ByFBIcon} style={s.loginMethod} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    );
  }
  export default Login
const s = StyleSheet.create({
  header: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    backgroundColor: colors.white,
    paddingHorizontal: "3%",
    height: '10%',
    paddingVertical: 5,
  },
  iconHeader: {
    width: 30,
    height: 30,
    marginVertical: 15,
  },
  midleHeader: {
    width: "70%",
  },
  logoHeader: {
    width: 100,
    height: 50,
  },
  body: {
    width: "100%",
    height:'100%',
    backgroundColor: colors.white,
    paddingHorizontal: "3%",
    paddingTop: 10,
  },
  title: {
    fontFamily: "roboto",
    fontWeight: "bold",
    fontSize: 30,
    color: colors.black,
  },
  desc: {
    fontFamily: "roboto",
    fontSize: 12,
    color: colors.black,
    marginBottom: 20,
  },
  input: {
    backgroundColor: colors.lightGrey,
    height: 50,
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 20,
    display: "flex",
    flexDirection: "row",
  },
  inputTitle: {
    color: colors.grey,
    fontFamily: "roboto",
    fontSize: 13,
    fontWeight: "100",
  },
  btn: {
    backgroundColor: colors.main,
    height: 50,
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingTop: 10,
  },
  btnText: {
    color: colors.white,
    fontFamily: "roboto",
    fontSize: 17,
    textAlign: "center",
    fontWeight: "bold",
  },
  bottomContainer: {
    height:'20%',
    marginTop:'10%',
    backgroundColor:colors.white,
  },
  titleContainer: {
    fontFamily: "roboto",
    fontWeight: "bold",
    color: colors.grey,
    textAlign: "center",
    fontSize: 20,
  },
  descContainer: {
    fontFamily: "roboto",
    fontWeight: "100",
    color: colors.grey,
    textAlign: "center",
    fontSize: 12,
  },
  underline: {
    borderBottomColor: colors.lightGrey,
    borderBottomWidth: 2,
    paddingBottom: 15,
  },
  loginMethod: {
    width: 55,
    height: 55,
  },
  fixedBottom: {
    height: '10%',
    display: "flex",
    flexDirection: "row",
    width: "100%",
    justifyContent: "center",
    paddingTop:10,
    backgroundColor: colors.white,
  },
  bottomText: {
    fontFamily: "roboto",
    fontWeight: "100",
    color: colors.black,
    textAlign: "center",
    fontSize: 12,
    textAlign: "center",
  },
  bottomText2: {
    fontFamily: "roboto",
    fontWeight: "bold",
    color: colors.main,
    textAlign: "center",
    fontSize: 12,
    textDecorationLine: "underline",
    textDecorationColor: colors.main,
    textAlign: "center",
  },
});
