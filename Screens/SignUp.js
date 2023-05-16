import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, ImageBackground, Image } from 'react-native';
import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { app } from '../FirebaseConfig';

export default function SignUp() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [address, setAddress] = useState('');
  const [password, setPassword] = useState('');

  const handleNameChange = (text) => {
    setName(text);
  };

  const handleNumberChange = (text) => {
    setNumber(text);
  };

  const handleAddressChange = (text) => {
    setAddress(text);
  };

  const handleSubmit = () => {
    // handle form submission
  };

  const handlePasswordChange = (Password) => {
    setPassword(Password);
  };

  const handleSignUp = () => {
    const auth = getAuth(app);
    createUserWithEmailAndPassword(auth, address, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(userCredential, 'first');
        console.log("Number:", number);
        // Update the user's profile with the display name
        updateProfile(user, {
          displayName: name,
          phoneNumber: number
        })
          .then(() => {
            console.log("User profile updated successfully");
            console.log(userCredential.user.uid);
            
            // Continue with your desired navigation or actions
          })
          .catch((error) => {
            console.log("Error updating user profile:", error);
          });
      })
      .catch((error) => {
        console.log("Error creating user:", error);
      });
  };

  return (
    <ImageBackground source={require('../assets/bckgr.jpg')} style={styles.background}>
      <View style={styles.container}>
        <View style={styles.logoContainer}>
               <Image style={styles.logo} source={require('../assets/baba.jpg')} />
        </View>
        <Text style={styles.title}>Sign Up</Text>
        <TextInput
          style={styles.input}
          onChangeText={handleNameChange}
          value={name}
          placeholder="Username"
          placeholderTextColor='white'

        />
        <TextInput
          style={styles.input}
          onChangeText={handleNumberChange}
          value={number}
          placeholder="Phonenumber"
          placeholderTextColor='white'

        />
        <TextInput
          style={styles.input}
          onChangeText={handleAddressChange}
          value={address}
          placeholder="E-mail"
          placeholderTextColor='white'

        />
         <TextInput
          style={styles.input}
          onChangeText={handlePasswordChange}
          value={password}
          secureTextEntry={true}
          placeholder="Password"
          placeholderTextColor='white'

        />
        <TouchableOpacity style={styles.button} onPress={handleSignUp}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  logo: {
    width: 200,
    height: 150,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: 'white',
    color: 'white', // add this line to change text color to white
    padding: 8,
    margin: 10,
    width: 350,
  },
  button: {
    backgroundColor: 'orange',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});


























