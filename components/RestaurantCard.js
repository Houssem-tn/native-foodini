import React from "react";
import { Text,View,TouchableOpacity,StyleSheet,Image } from "react-native";
import { Icon } from "react-native-elements";
import { Colors,Parameters } from "../Styling/Style";


export default function RestaurantCard({
    screenWidth,
    restaurantName,
    restaurentSpecialite,
    restaurentAddress,
    restaurentImage,
    restaurentsNumberRates,
    restaurentRates,
    navigation,
    idRestaurent,
    restaurentEmail,
    restaurentNumber

}){
    // console.log(idRestaurent);
const handlePress=()=>{
    navigation.navigate('ProductCard',{idRestaurent,restaurentEmail,restaurentNumber})
}
return(

    <TouchableOpacity onPress={handlePress}>
        <View>
        <Image
  style={{...styles.image,width:screenWidth}}
//   source={restaurentImage}
source={{ uri: restaurentImage }}
/>


        </View>
        <View>
            <View>
                <Text style={styles.restaurantName}>{restaurantName}</Text>
            </View>
            <View style={{flex:1,flexDirection:'row'}}>
<View style={styles.restaurantSpeciality}>
<Icon
name='restaurant'
type="material"
color= "red"
size={18}
iconStyle={{marginTop:3}}
/>
<Text style={styles.Spec}>{restaurentSpecialite}</Text>
</View>
<View style={{flex:9,flexDirection:'row'}}>
    <Text style={styles.Adress}>{restaurentAddress}</Text>

</View>
</View>
<View style={styles.review}>
    <Text style={styles.avgrev}>{restaurentRates}⭐</Text>
    <Text>{restaurentsNumberRates}Reviews</Text>
</View>
        </View>
    </TouchableOpacity>
)


}
const styles = StyleSheet.create({
cardView :{
marginHorizontal:9,
borderTopRightRadius:5,
borderTopLeftRadius:5,
borderWidth:1,
borderColor:Colors.grey4,
borderBottomLeftRadius:5,
borderBottomRightRadius:5,

},
image:{
    borderTopLeftRadius:5,
    borderTopRightRadius:5,
    height:100,
    width:60
},
restaurantName :{
    fontSize:17,
    fontWeight:"bold",
    color:Colors.grey1,
    marginTop:5
},
restaurantSpeciality:{
flex:4,
flexDirection:'row',
borderRightColor:Colors.grey4,
paddingHorizontal:5,
borderRightWidth:1

}, Spec : {
    fontSize: 12,
    fontWeight: 'bold',
    paddingTop: 5,
    color: Colors.grey3
  }
  ,
Adress : {
    fontSize:12,
    paddingTop:5,
    color:Colors.grey2,
    paddingHorizontal:10
},
review:{
    position:"absolute",
    top:0,
    right:10,
    backgroundColor:'rgba(52,  52,  57,0.3)',
    padding:2,
    justifyContent:'center',
    alignItems:'center',
    borderTopRightRadius:5,
    borderBottomLeftRadius:12
},
avgrev:{
    color:'white',
    fontSize:20,
    fontWeight:'bold',
    marginTop:-3
}
})