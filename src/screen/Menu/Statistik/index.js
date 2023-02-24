import React from "react";
import {View, Text} from 'react-native'
import {SimpleHeader} from '../../../component'

const Statistik = ({navigation}) =>{
    return (
        <View>
            <SimpleHeader title='Statistik Toko' onBack={()=>{navigation.onBack()}}/>
            <Text>
                statistik pge
            </Text>
        </View>
    )
}

export default Statistik