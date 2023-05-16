import React, { useState } from 'react';
import { StyleSheet, Text, View , TextInput,ScrollView, StatusBar,TouchableOpacity} from 'react-native';

import {Colors} from './Styling/Style'
import WelcomeScreen from './Screens/WelcomeScreen';
import AuthContext from './navigation/AuthContext';
import RootNavigator from './navigation/RootNavigator';

export default function App() {
  const [user, setUser] = React.useState(null);

 
  const onSignIn = (displayName, email) => {
    setUser({ displayName, email });
  };

  const onSignOut = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, onSignIn, onSignOut }}>
      <View style={styles.container}>
        <StatusBar barStyle="light-content" backgroundColor={Colors.statusbar} />
        <RootNavigator />
      </View>
    </AuthContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
