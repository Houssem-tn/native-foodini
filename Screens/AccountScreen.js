import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert,StyleSheet,TouchableOpacity } from 'react-native';
import { getAuth, updateProfile, EmailAuthProvider, reauthenticateWithCredential, updatePassword as firebaseUpdatePassword } from "firebase/auth";
import { useNavigation } from '@react-navigation/native';
const AccountScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const navigation = useNavigation();


  const updateUserProfile = () => {
    const auth = getAuth();
    const user = auth.currentUser;

    updateProfile(user, {
        displayName: username,
    })
      .then(() => {
        Alert.alert('Username updated!');
        navigation.navigate('SignInScreen')
      })
      .catch((error) => {
        Alert.alert('Error', error.message);
      });
  };

  const handlePasswordUpdate = () => {
    const auth = getAuth();
    const user = auth.currentUser;
  
    // re-authenticate the user
    const credential = EmailAuthProvider.credential(user.email, password);
  
    reauthenticateWithCredential(user, credential)
      .then(() => {
        // User successfully reauthenticated
        return firebaseUpdatePassword(user, newPassword);
      })
      .then(() => {
        Alert.alert('Password updated!');
        navigation.navigate('SignInScreen')
      })
      .catch((error) => {
        console.log(error); 
        Alert.alert('Error', error.message);
      });
  };
  

  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Update Username</Text>
      <TextInput
        style={styles.input}
        value={username}
        onChangeText={text => setUsername(text)}
        placeholder="New username"
      />

      <TouchableOpacity style={styles.button} onPress={updateUserProfile}>
        <Text style={styles.buttonText}>Update Username</Text>
      </TouchableOpacity>

      <Text style={styles.title}>Reset Password</Text>
      <TextInput
        style={styles.input}
        value={password}
        onChangeText={text => setPassword(text)}
        placeholder="Current password"
        secureTextEntry
      />
      <TextInput
        style={styles.input}
        value={newPassword}
        onChangeText={text => setNewPassword(text)}
        placeholder="New password"
        secureTextEntry
      />

      <TouchableOpacity style={styles.button} onPress={handlePasswordUpdate}>
        <Text style={styles.buttonText}>Reset Password</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
    borderRadius: 5,
  },
  button: {
    backgroundColor: '#ff8c52',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
export default AccountScreen;
