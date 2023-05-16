import React, { useState,useContext,useEffect } from 'react';
import { View, TextInput, Button, Text, StyleSheet, Platform, Alert } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import DateTimePicker from '@react-native-community/datetimepicker';
import AuthContext from '../navigation/AuthContext';


const Reservation = ({route}) => {
  const { idRestaurent,restaurentEmail,restaurentNumber } = route.params;
  const { user } = useContext(AuthContext);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [quantity, setQuantity] = useState('');
  const [date, setDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(`http://192.168.100.13:3000/user/get/postRestaurant/${idRestaurent}`);
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Failed to fetch products:', error);
      }
    };
  
    fetchProducts();
  }, []);

  const handleReservation = () => {
    const totalPrice = parseFloat(selectedProduct.price) * quantity;
    Alert.alert(
      "Reservation Details",
      `Product: ${selectedProduct.PostsDescription}\nQuantity: ${quantity}\nTotal Price: ${selectedProduct.price * quantity}\nDate: ${date}`
    );
  
    fetch('http://192.168.100.13:3000/sendemail', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        to: "r.houssem123@gmail.com",
        subject: 'New Reservation',
        text: `New reservation from ${user.email}:\n\nReservation name by : ${user.displayName}\n\nProduct: ${selectedProduct.PostsDescription}\nQuantity: ${quantity}\nTotal Price: ${selectedProduct.price * quantity} DT\nDate: ${date.toISOString().slice(0,10)}`
      }),
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch((error) => {
      console.error('Error:', error);
    });
  
    console.log(user);
  };
  
  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShowDatePicker(Platform.OS === 'ios');
    setDate(currentDate);
  };

  return (
    <View style={styles.container} >
      <Picker 
        selectedValue={selectedProduct}
        onValueChange={(itemValue, itemIndex) => setSelectedProduct(products[itemIndex])}
        style={styles.input}
      >
        {products.map((product, index) => (
          <Picker.Item
            key={index}
            label={product.PostsDescription}
            value={product}
          />
        ))}
      </Picker>
      <TextInput
        placeholder="Quantity (1-5)"
        value={quantity}
        onChangeText={setQuantity}
        keyboardType="numeric"
        style={styles.input}
      />
      <Button title="Select Date" onPress={() => setShowDatePicker(true)} color="#ff8c52"/>
      {showDatePicker && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={'date'}
          display="default"
          onChange={onChange}
        />
      )}
     <Text style={styles.totalPrice}>Total Price: {selectedProduct ? parseFloat(selectedProduct.price) * quantity : 0}</Text>

<Button title="Submit Reservation" onPress={handleReservation} color="#ff8c52" />
</View>
);
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    borderRadius: 5,
    paddingLeft: 10,
  },
  totalPrice: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default Reservation;
