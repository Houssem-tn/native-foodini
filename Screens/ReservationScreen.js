import { Colors,Parameters,title } from '../Styling/Style'

import { Image,Text,View,StyleSheet,ScrollView,FlatList,Pressable,Dimensions, Button } from "react-native";

import React  from 'react';

export default function ReservationScreen(){

    return (
        <View style={styles.container}>
            <Text>Reservation</Text>
        </View>
    )
}
const styles=StyleSheet.create({
    container : {flex:1,
        alignItems:'center',
justifyContent:'center'}
 })