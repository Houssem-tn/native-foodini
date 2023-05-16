import React from 'react'
import {StyleSheet,Text,View,StatusBar , Image} from "react-native";
import { Button } from 'react-native-elements';
import { Colors,Parameters,title } from '../Styling/Style'

export default function Splash ({navigation}){

// setTimeout(()=>{
//     navigation.replace('WelcomeScreen')
// },3000)

return(
    <View style={{flex:1,flexDirection:'column',justifyContent:'center',alignItems:'center',backgroundColor:'white'}}>
<StatusBar barStyle='light-content' hidden={false} backgroundColor="white"/>
<Image source={require('../assets/iconfood.png')} style={{width:50,height:50}}/>
    <Text style={{fontSize:30,color:'red'}}>
    Foodini
    
    </Text>
    <View style={{marginHorizontal:20,marginTop:30}}>
  <Button
  title="Get started"
  buttonStyle={styles.createButton}
  titleStyle={styles.createButtonTitle}
  onPress={()=>{navigation.navigate('WelcomeScreen')}}
  />
  </View>
    
    </View>


)

}
const styles = StyleSheet.create({
    slide1:{
      flex:1,
      justifyContent:'center',
      alignItems:'center',
      backgroundColor:'#9DD6EB' 
    },slide2:{
       flex:1,
      justifyContent:'center',
      alignItems:'center',
      backgroundColor:'#97CAE5' 
    },slide3:{
       flex:1,
      justifyContent:'center',
      alignItems:'center',
      backgroundColor:'#92BBD9' 
    },
   
    createButton :{
       backgroundColor:"white",
       alignContent:"center",
       justifyContent:"center",
       borderRadius:12,
       borderWidth:1,
       borderColor:"#ff8c52",
       height:50,
       paddingHorizontal:20,
       borderColor:Colors.buttons,
        },
       
       createButtonTitle:{
       color:Colors.grey1,
       fontSize:20,
       fontWeight:"bold",
       alignItems:"center",
       justifyContent:"center",
       marginTop:-3,
       fontFamily:'serif'
       } ,
   
   })

