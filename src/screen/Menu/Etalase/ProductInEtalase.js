import React, { useState } from "react";
import {View, Text, StyleSheet, Image} from 'react-native'
import { colors, usedFont } from "../../../assets/colors";
import { SimpleHeader, CardProduct, BlankContainer, FloatingBtn } from "../../../component";
import { EmptyState } from "../../../assets/img";

const ProductInEtalase = ({navigation, route}) =>{
    const {EtalaseName} = route.params
    const [list, setList] = useState(null)

    return(
        <View style={s.body}>
            <SimpleHeader title = {EtalaseName} onBack={()=>navigation.goBack()}/>
            {list === null ? 
            <BlankContainer title='belum ada produk yang ditambahkan' desc ='tambahkan produk ke dalam etalase ini ! '/>
            :
            <CardProduct/>
        }
           <FloatingBtn title='tambahkan produk'/>
        </View>
    )
}
export default ProductInEtalase

const s = StyleSheet.create({
    body:{
        backgroundColor:colors.white,
        width :'100%',
        height:'100%',
    }
})