import React from "react";
import {View,Text,Image} from 'react-native'
import {SimpleHeader} from '../../../component'

const Iklan =({navigation})=>{
    return(
<View>
    <SimpleHeader title ='Iklan & Promosi' onBack={()=>navigation.goBack()}/>
</View>
    )
} 
export default Iklan
