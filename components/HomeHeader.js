import React, { useState } from 'react';
import { StyleSheet, Dimensions,Text, View , TextInput,ScrollView, FlatList,TouchableOpacity} from 'react-native';
import { Colors,Parameters } from '../Styling/Style';
import {Icon}from 'react-native-elements'





export default function HomeHeader({navigation}) {
  
  const { width, height } = Dimensions.get('window');
  const marginLeftPercent = 5; // 5% of screen width
  const marginLeft = width * (marginLeftPercent / 100);
  const marginTopPercent = 1.5; // 1.5% of screen height
  const marginTop = height * (marginTopPercent / 100);
  const paddingPercent = 2; // 2% of screen width
  const padding = width * (paddingPercent / 100);
  const marginPercent = 5; // 5% of screen width
  const margin = width * (marginPercent / 100);
  const heightPercent = 10; // 10% of screen height
  const componentHeight = height * (heightPercent / 100);
  
  return (
    <View style={{flexDirection:'row',backgroundColor:Colors.buttons, height : componentHeight }}>
    <View style={{alignItems:'center',justifyContent:'center',marginLeft:marginLeft, marginTop:5}} >
      <Icon
      type='material-community'
      name='menu'
      color={"white"}
      size={40}
      onPress={()=>{navigation.toggleDrawer()}}

      />
     </View>
     <View style={{alignItems:'center',justifyContent:'center'}}>
      <Text style={{color:Colors.cardbackground,fontSize:25,fontWeight:'bold',marginLeft:15}} >Foodini</Text>
     </View>
     <View /*  icon for reservation  */>

     </View>
     </View>
  );
}

const styles = StyleSheet.create({
  header :{
    flexDirection:'row',
    backgroundColor:Colors.buttons,
    

  }
});
