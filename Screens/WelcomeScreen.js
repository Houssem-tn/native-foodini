import React from 'react';
import { View, TextInput, Text, StyleSheet, Image, Dimensions } from 'react-native';
import Swiper from 'react-native-swiper'
import * as Animatable from 'react-native-animatable'

import { Colors, Parameters, title } from '../Styling/Style'
import { Icon, colors, Input, Button, SocialIcon } from 'react-native-elements';

const { width, height } = Dimensions.get('window');
const slideHeight = height * 0.4;

export default function WelcomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 3, justifyContent: 'flex-start', alignItems: 'center', paddingTop: height * 0.05 }}>
        <Text style={{ fontSize: width * 0.08, color: Colors.orange, fontWeight: 'bold' }}>Welcome to Foodini</Text>
        <Text style={{ fontSize: width * 0.08, color: Colors.orange, fontWeight: 'bold' }}>Discover our restaurants</Text>
        <Text style={{ fontSize: width * 0.08, color: Colors.orange, fontWeight: 'bold' }}>and meals</Text>
      </View>
      <View style={{ flex: 4 }}>
        <Swiper autoplay={true} height={slideHeight}>
          <View style={styles.slide}>
            <Image source={require('../assets/food1.jpg')} style={{ height: '100%', width: '100%' }} />
          </View>
          <View style={styles.slide}>
            <Image source={require('../assets/food2.jpg')} style={{ height: '100%', width: '100%' }} />
          </View>
          <View style={styles.slide}>
            <Image source={require('../assets/food3.jpg')} style={{ height: '100%', width: '100%' }} />
          </View>
          <View style={styles.slide}>
            <Image source={require('../assets/food4.jpg')} style={{ height: '100%', width: '100%' }} />
          </View>
        </Swiper>
      </View>
      <View style={{ flex: 4, justifyContent: 'flex-end', marginBottom: height * 0.05 }}>
        <View style={{ marginHorizontal: width * 0.05, marginVertical: height * 0.02 }}>
          <Button
            title="Sign in"
            buttonStyle={{ ...Parameters.styledButton, height: height * 0.06 }}
            titleStyle={{ ...Parameters.buttonTitle, fontSize: width * 0.05 }}
            onPress={() => {
              navigation.navigate('SignInScreen')
            }}
          />
        </View>
        <View style={{ marginHorizontal: width * 0.05, marginTop: height * 0.03 }}>
          <Button
            title="Create an account"
            buttonStyle={{ ...styles.createButton, height: height * 0.06 }}
            titleStyle={{ ...styles.createButtonTitle, fontSize: width * 0.05 }}
            onPress={() => {
              navigation.navigate('SignUpScreen')
            }}
          />
        </View>
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
    } ,

})