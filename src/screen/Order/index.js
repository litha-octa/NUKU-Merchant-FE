import React from "react";
import {View,Text, TouchableOpacity, StyleSheet,Image} from 'react-native'
import {SimpleHeader, OrderCard} from '../../component'


const Order = () => {
    return(
<View>
    <SimpleHeader title='PesananKu'/>
    <Text>
        Order PAGE
    </Text> 
    <OrderCard 
    name='Nasi Padang'
    amount='1'
    />
</View>
)
}

export default Order
const s =StyleSheet.create({

})
