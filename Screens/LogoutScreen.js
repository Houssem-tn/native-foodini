import React, { useEffect, useRef } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import LottieView from 'lottie-react-native';
import { useNavigation } from '@react-navigation/native';
import { Colors } from '../Styling/Style';

const Logout = () => {
  const navigation = useNavigation();
  const animationRef = useRef(null);

  useEffect(() => {
    animationRef.current.play();
  }, []);

  return (
    <View style={styles.container}>
      <LottieView
        ref={animationRef}
        source={require('../assets/data.json')}
        style={{ width: 200, height: 200 }}
      />
      <Text style={styles.text}>Visit us again!</Text>
      <View style={styles.buttonContainer}>
        <Button title="Bye bye!" onPress={() => navigation.navigate('WelcomeScreen')} color="#ff8c52" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "white",
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#333',
    paddingHorizontal: 20,
  },
  buttonContainer: {
    marginTop: 20,
    width: '80%',
  },
});

export default Logout;
