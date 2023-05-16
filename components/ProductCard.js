import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, FlatList } from 'react-native';

import { Colors } from '../Styling/Style';
import { Icon, colors, Input, Button, SocialIcon, Overlay } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';

const ProductCard = ({route}) => {
  const { idRestaurent,restaurentEmail,restaurentNumber } = route.params;
  // console.log(idRestaurent ,"id");
  const [restaurantDetails, setRestaurantDetails] = useState([]);
  const navigation = useNavigation();
  const handleButton1Press = () => {
    navigation.navigate('Reservation',{restaurentEmail,restaurentNumber,idRestaurent})
  };

  const handleButton2Press = (idPosts) => {
    navigation.navigate('Comments',{restaurantDetails, idRestaurent, idPosts});
  };
 
  useEffect(() => {
    const getRestaurantDetails = async () => {
      try {
        const response = await fetch(`http://192.168.100.13:3000/user/get/postRestaurant/${idRestaurent}`);
        const data = await response.json();
        console.log(idRestaurent,"idResto")
        setRestaurantDetails(data);
        console.log(restaurantDetails,"resto details")
      } catch (error) {
        console.error('Failed to fetch restaurant details:', error);
      }
    };

    getRestaurantDetails();
  }, [idRestaurent])
  return (
    <View style={{flex: 1}}>
      <FlatList
        style={{flex: 1}}
        data={restaurantDetails}
        renderItem={({ item }) => (
          <View style={styles.container}>
            <Image source={{uri : item.PostsImage}} style={styles.image} />
            <Text style={styles.description}>{item.PostsDescription}</Text>
            <Text style={styles.price}>Price: {item.price}</Text>
            <Text style={styles.category}>Category: {item.category}</Text>
            {/* <Text style={styles.category}>ID: {item.idPosts}</Text> */}
            <Text style={styles.category}>Contact us on: {restaurentNumber}</Text>
            <View style={styles.buttonsContainer}>
              <Button
                title="Feedback"
                buttonStyle={styles.createButton}
                titleStyle={styles.createButtonTitle}
                onPress={() => handleButton2Press(item.idPosts)}
              />
            </View>
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
      <View>
        <Button
          title="Reservation"
          buttonStyle={styles.createButton}
          titleStyle={styles.createButtonTitle}
          onPress={handleButton1Press}
        />
      </View>
    </View>
  );
};




export default ProductCard;

const styles = StyleSheet.create({
  container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: Colors.pagebackground,
      padding: 20,
      marginBottom: 20,
      borderRadius: 10,
      shadowColor: "#000",
      shadowOffset: {
          width: 0,
          height: 2,
      },
      shadowOpacity: 0.23,
      shadowRadius: 2.62,
      elevation: 4,
  },
  image: {
      width: '100%',
      height: 200,
      marginBottom: 10,
      borderRadius: 10,
      resizeMode: 'cover'
  },
  description: {
      fontSize: 20,
      fontWeight: 'bold',
      marginBottom: 5,
      color: Colors.buttons
  },
  price: {
      fontSize: 16,
      color: 'gray',
      marginBottom: 5,
  },
  category: {
      fontSize: 16,
      color: 'gray',
  },
  buttonsContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 10,
  },
  button: {
      width: '70%',
  },
  createButton :{
      backgroundColor: Colors.buttons,
      alignContent: "center",
      justifyContent: "center",
      borderRadius: 12,
      borderWidth: 1,
      height: 50,
      paddingHorizontal: 20,
      marginVertical: 10,
  },
  createButtonTitle: {
      color: Colors.pagebackground,
      fontSize: 20,
      fontWeight: "bold",
      fontFamily: 'serif'
  }
});

