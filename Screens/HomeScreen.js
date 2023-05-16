import { Colors,Parameters,title } from '../Styling/Style'
import HomeHeader from "../components/HomeHeader";
import { Image,Text,View,StyleSheet,ScrollView,FlatList,Pressable,Dimensions, Button } from "react-native";
import { dummy, restaurantData } from '../Styling/Dummy';
import React ,{ useState,useEffect } from 'react';
import RestaurantCard from '../components/RestaurantCard';
import axios from 'axios';
import { log } from 'react-native-reanimated';

const SCREEN_WIDTH=Dimensions.get("window").width
export default function HomeScreen ({navigation}){
const [restaurant,setRestaurants]= useState([])
const [indexCheck,setIndexCheck]= useState('0')


// console.log(restaurant,"resto")




  useEffect(() => {
    const getRestaurants = async () => {
      try {
        const response = await fetch('http://192.168.100.13:3000/user/getRestaurants');
        const data = await response.json();
        setRestaurants(data);
      } catch (error) {
        console.error('Failed to fetch restaurants:', error);
      }
    };

    getRestaurants();
  }, []);
return(
    
<View style = {styles.container} >
{/* <Text>{console.log(restaurant[0].idRestaurent)}</Text> */}
<HomeHeader navigation = {navigation}/>

<ScrollView
stickyHeaderIndices={[0]}
showsVerticalScrollIndicator={true}
>
<View style={styles.headerTextView}>
    <Text style={styles.headerText}>What we are offering</Text>
</View>
<View>
   <FlatList
   horizontal={true}
   showsHorizontalScrollIndicator={true}
   data = {dummy}
   keyExtractor={(item)=>item.id}
   extraData={indexCheck}
   renderItem={({item,index})=>(
    <Pressable
    onPress={()=>{setIndexCheck(item.id)}}
    >
        <View style={indexCheck===item.id? {...styles.smalllCardSelected}:{...styles.smalllCard }}>
<Image
style={{height:60,width:60,borderRadius:30}}
source={item.image}
/>
<View>
    <Text style={indexCheck===item.id ? {...styles.smalllCardTextSelected}:{...styles.smalllCardText}}>{item.name}</Text>
</View>
        </View>
    </Pressable>
   )}
   />
</View>
<View style={styles.headerTextView}>
    <Text style={styles.headerText}>Our restuarants</Text>
</View>
<View>
    { restaurant ? 
            <FlatList
            style={{marginTop:0,marginBottom:0}}
            horizontal={false}
            data={restaurant}
            keyExtractor={(item,index)=>index.toString()}
            renderItem={({item})=>(
              
                <View  >
                    <RestaurantCard 
                    navigation={navigation}
                    screenWidth={SCREEN_WIDTH*0.9}
                    restaurentImage={item.restaurentImage}
                    restaurantName={item.restaurentName}
                    restaurentAddress={item.restaurentAddress}
                    restaurentSpecialite={item.restaurentSpecialite}
                    restaurentsNumberRates={item.restaurentsNumberRates}
                    restaurentRates={item.restaurentRates}
                     idRestaurent={item.idRestaurent}
                     restaurentNumber={item.restaurentNumber}
                     restaurentTiming={item.restaurentTiming}
                     restaurentEmail={item.restaurentEmail}
        
                    />
                </View> 
            )}
            /> : null
    }

</View>

</ScrollView>
</View>
)
}
const styles = StyleSheet.create ({
    container : {
       flex: 1,
       backgroundColor: "white",
       padding: 10, 
    }, 
    headerText :{
       color: Colors.grey1,
       fontSize: 26, 
       fontWeight: 'bold',
       paddingLeft: 20,
       textShadowColor: 'rgba(0, 0, 0, 0.75)',
       textShadowOffset: {width: -1, height: 1},
       textShadowRadius: 10
    },
    headerTextView :{
       backgroundColor: Colors.grey5,
       paddingVertical: 5,
    },
    smalllCard: {
       borderRadius: 30,
       backgroundColor: Colors.grey5,
       justifyContent: 'center',
       padding: 10, 
       width: 90, 
       margin: 10,
       height: 120, 
       shadowColor: '#000',
       shadowOffset: { width: 0, height: 3 }, 
       shadowOpacity: 0.25,
       shadowRadius: 3, 
       elevation: 2, 
    },
    smalllCardSelected : {
       borderRadius: 30,
       backgroundColor: Colors.buttons,
       justifyContent: 'center',
       padding: 10,
       width: 90,
       margin: 10,
       height: 120,
       shadowColor: '#000',
       shadowOffset: { width: 0, height: 3 },
       shadowOpacity: 0.25,
       shadowRadius: 3,
       elevation: 2,
    },
    smalllCardTextSelected :{
       fontWeight: "bold",
       color: Colors.cardbackground,
       fontSize: 16, 
    },
    smalllCardText :{
       fontWeight: "bold",
       color: Colors.grey2,
       fontSize: 16, 
    }
})

   