import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import foodlogo from '../assets/food.png'
const Footer = () => {
  return (
    <View style={styles.footer}>
      <Image
        source={foodlogo}
        style={styles.logo}
        resizeMode="contain"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    height: 50,
    // backgroundColor: '#f2f2f2',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 100,
    height: 70,
  },
});

export default Footer;
