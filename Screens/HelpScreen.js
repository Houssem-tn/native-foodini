import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Colors, Parameters, title } from '../Styling/Style';

export default function HelpScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.description}>
        Welcome to Foodini! Our app is designed to bring you the best dining experiences directly to your fingertips. 
        With Foodini, you have the ability to browse through a variety of restaurant products and meals. 
        Whether you are craving for a rich Italian pasta, a spicy Kafteji, or a classic  burger, 
        Foodini has got you covered. Our user-friendly interface makes it easy for you to find exactly what you're 
        looking for. We strive to provide you with a convenient and enjoyable way to explore culinary delights. 
        Enjoy your journey through taste with Foodini!
      </Text>
      <Text style={styles.explanation}>
        It's pretty easy to navigate through our app, you simply search for what you wish by passing the name of the product or the
        restaurant name you can also TAP on the restaurant to see what its offers so you can make a reservation and the restaurant owner will handle the rest! 
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20, 
    backgroundColor: Colors.background, 
  },
  description: {
    fontSize: 18, 
    lineHeight: 24, 
    textAlign: 'justify', 
    color: Colors.primary, 
  },
  explanation: {
    fontSize: 16, 
    lineHeight: 22, 
    textAlign: 'justify',
    color: Colors.text, 
    marginTop: 20, 
    padding: 10, 
  }
});
