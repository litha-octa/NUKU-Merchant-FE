import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  Splash,
  Login,
  Home,
  Profile,
  Chat,
  Order,
  MyStore,
  Product,
  Etalase,
  AddEtalase,
  ProductInEtalase,
  Dompet,
  TarikTunai,
  Iklan,
  DetailProduct,
  AddProduct,
  Setting,
  OperationalTime,
  DeliveryService,
  CloseAccount,
  Statistik,
  RegisterMerchant,
} from "../screen";
import {
  HomeOff,
  HomeOn,
  ChatOff,
  ChatOn,
  OrderOff,
  OrderOn,
  ProfileOff,
  ProfileOn,
  MainLogo,
} from '../assets/img'
import { colors } from "../assets/colors";
import { TouchableOpacity, Image, Text, View, } from "react-native";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MainApp = ({ navigation }) => {
  return (
    <Tab.Navigator
      initialRouteName={MainApp}
      screenOptions={({ route }) => ({
        tabBarOptions: {
          showLabel: false,
        },
        tabBarStyle: {
          height: 70,
        },
        tabBarIcon: ({ focused }) => {
          let iconName;
          let labelName;
          let labelStyle;
          if (route.name === "Home") {
            labelName = "Beranda";
            iconName = focused ? HomeOn : HomeOff;
            labelStyle = focused
              ? { color: colors.main, alignText: "center" }
              : { color: colors.grey, alignText: "center" };
          } else if (route.name === "Order") {
            iconName = focused ? OrderOn : OrderOff;
            labelName = "Pesanan";
            labelStyle = focused
              ? { color: colors.main, alignText: "center" }
              : { color: colors.grey, alignText: "center" };
          } else if (route.name === "Chat") {
            iconName = focused ? ChatOn : ChatOff;
            labelName = "Chat";
            labelStyle = focused
              ? { color: colors.main, alignText: "center" }
              : { color: colors.grey, alignText: "center" };
          } else if (route.name === "Profile") {
            iconName = focused ? ProfileOn : ProfileOff;
            labelName = "Lainnya";
            labelStyle = focused
              ? { color: colors.main, alignText: "center" }
              : { color: colors.grey, alignText: "center" };
          } else if (route.name === "Qris") {
            iconName = MainLogo;
            topBorder = focused
              ? { borderTopColor: colors.RED_MAIN, borderTopWidth: 3 }
              : null;
          }
          return (
            <>
              <TouchableOpacity onPress={() => navigation.navigate(route.name)}>
                <Image
                  source={iconName}
                  style={
                    iconName === MainLogo
                      ? { width: 70, height: 70, marginBottom: 55 }
                      : {
                          width: 30,
                          height: 30,
                          marginVertical: 5,
                          alignSelf: "center",
                        }
                  }
                />
                <Text style={labelStyle}>{labelName}</Text>
              </TouchableOpacity>
            </>
          );
        },
      })}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false, tabBarShowLabel: false }}
      />
      <Tab.Screen
        name="Order"
        component={Order}
        options={{ headerShown: false, tabBarShowLabel: false }}
      />
      <Tab.Screen
        name="Chat"
        component={Chat}
        options={{ headerShown: false, tabBarShowLabel: false }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{ headerShown: false, tabBarShowLabel: false }}
      />
    </Tab.Navigator>
  );
};

const Router = ({navigation}) => {
    return (
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen
          name="Splash"
          component={Splash}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="MainApp"
          component={MainApp}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Activity1"
          component={MyStore}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Activity2"
          component={Dompet}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Activity5"
          component={Setting}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Setting1"
          component={OperationalTime}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Setting2"
          component={DeliveryService}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Setting3"
          component={CloseAccount}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="TarikTunai"
          component={TarikTunai}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Statistik"
          component={Statistik}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Product"
          component={Product}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="AddProduct"
          component={AddProduct}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="DetailProduct"
          component={DetailProduct}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Iklan"
          component={Iklan}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Etalase"
          component={Etalase}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="AddEtalase"
          component={AddEtalase}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ItemEtalase"
          component={ProductInEtalase}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="CreateMerchant"
          component={RegisterMerchant}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    );
}

export default Router