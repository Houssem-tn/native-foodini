import React from "react";
import { View,StyleSheet,Text,Dimensions } from "react-native";
import {Colors,Parameters} from '../Styling/Style.js'
import { Icon } from "react-native-elements";
export default function Header ({title,type,navigation}) {
  const { width,height } = Dimensions.get('window');
  const marginLeftPercent = 5; 
const marginLeft = width * (marginLeftPercent / 100);
const marginTopPercent = 1.5; 
const marginTop = height * (marginTopPercent / 100);
const paddingPercent = 2; 
const padding = width * (paddingPercent / 100);
const marginPercent = 5; 
const margin = width * (marginPercent / 100);
    const styles = StyleSheet.create({
      header: {
        flexDirection: "row",
        backgroundColor: Colors.buttons,
        height: Parameters.headerHeight
      },
      headerText :{color :Colors.headerText ,fontSize:22,fontWeight:"bold",marginLeft: marginLeft}
    });
  
    return (
      <View style={styles.header}>
        <View style={{marginLeft:marginLeft}}>
<Icon 
type="material community"
name={type}
color={Colors.headerText}
size={30}
onPress={()=>{navigation.goBack()}}
/>

        </View>
        <View>
    <Text style={styles.headerText}>{title}</Text>
</View>
      </View>
    );
  }


