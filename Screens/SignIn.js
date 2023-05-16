import React, { useState,useContext } from 'react';
import { View, TextInput,  Text, StyleSheet,Dimensions,Modal } from 'react-native';
import { getAuth, signInWithEmailAndPassword,GoogleAuthProvider } from "firebase/auth";
import AuthContext from '../navigation/AuthContext';


import Header from '../components/Header';

import * as Animatable from 'react-native-animatable'

import { Colors,Parameters,title } from '../Styling/Style'
import { Icon, colors,Input,Button, SocialIcon,Overlay } from 'react-native-elements';

const SignIn = ({navigation}) => {
  const { user, onSignIn, onSignOut } = useContext(AuthContext);
  const [Assigned, setAssigned] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
 const [textInputFocused,setTextinputFocused]= useState(false)  
 const [modalVisible, setModalVisible] = useState(false);

 const { width, height } = Dimensions.get('window');
const marginLeftPercent = 5; // 5% of screen width
const marginLeft = width * (marginLeftPercent / 100);
const marginTopPercent = 1.5; // 1.5% of screen height
const marginTop = height * (marginTopPercent / 100);
const paddingPercent = 2; // 2% of screen width
const padding = width * (paddingPercent / 100);
const marginPercent = 5; // 5% of screen width
const margin = width * (marginPercent / 100);

const handleEmail=(Newemail)=>{
  setEmail(Newemail)

}
const handlePassword=(NewPassword)=>{
  setPassword(NewPassword)

}

const handleSignIn = () => {
  const auth = getAuth();
  signInWithEmailAndPassword(auth, email, password)
  .then(async (userCredential) => {
    onSignIn(userCredential._tokenResponse.displayName, userCredential._tokenResponse.email);
    navigation.navigate('DrawerNavigator', {
      displayName: userCredential._tokenResponse.displayName,
      email:userCredential._tokenResponse.email
    })
    console.log(userCredential);
    console.log(userCredential._tokenResponse.displayName);
    console.log(userCredential._tokenResponse.email);
  })
  .catch((error) => {
    setError(error.message)
    setModalVisible(true);
    console.log("Error signing in:", error);
  });
};
const signInwithGoogle = ()=>{
  console.log('hello');
  // const provider = new GoogleAuthProvider();
 

  }

  return (
    
    <View >
     {/* {error && <Text style={{ color: 'red' }}>{error}</Text>} */}

<Header title={"My Account"} type={"arrow-left"} navigation={navigation}/>
<View style={{marginLeft:marginLeft,marginTop:marginTop}}>
  <Text style={title}>Sign-in</Text>
</View>
<View style={{alignItems:'center',margin:margin}}>
  
  <Text style={styles.text1}>Please enter the email and password </Text>
  <Text style={styles.text1}>registered your account!</Text>
</View>
<View style={{marginTop:marginTop}}>
<View>
<View style={styles.textInput2}>
  <Animatable.View>
    
   <Icon
   name='email'
   iconStyle={{color:colors.grey3}}
   type='material'
   />
 
  </Animatable.View>
  <TextInput 
  style={{width:'85%'}}
    placeholder='Email'
    onChangeText={handleEmail}
    value={email}
   

    showSoftInputOnFocus={true}
    onFocus={() => setTextinputFocused(true)}
    />
  <Animatable.View>
  
  </Animatable.View>
  </View>
</View>
  <View style={styles.textInput2}>
  <Animatable.View>
    
   <Icon
   name='lock'
   iconStyle={{color:colors.grey3}}
   type='material'
   />
 
  </Animatable.View>
  <TextInput 
  style={{width:'80%'}}
    placeholder='Password'
    secureTextEntry={true}
    onChangeText={handlePassword}
    value={password}
    
    />
  <Animatable.View>
  <Icon
   name='visibility-off'
   iconStyle={{color:colors.grey3}}
   type='material'
   />
  </Animatable.View>
  </View>
</View>
<View style={{marginHorizontal:20,marginVertical:20}}>
<Button title="Sign in"
buttonStyle = {Parameters.styledButton}
titleStyle= {Parameters.buttonTitle}
// onPress={()=>{navigation.navigate('DrawerNavigator')}}
onPress={() => handleSignIn()}
/>
</View>
<View style={{alignItems:"center",marginTop:20}}>
  <Text style={{...styles.text1,textDecorationLine: "underline"}}>Forgot password  ?</Text>
</View>
<View style={{alignItems:"center", marginTop:10,marginBottom:20}}>
  <Text style={{fontSize:20,fontWeight:"bold"}}>Or</Text>
</View>
<View style={{marginHorizontal:10,marginTop:10}}>
  <SocialIcon
  title='Sign in with Facebook'
  button
  type='facebook'
  style={styles.socialicon}
  onPress={()=>{}}
  />
</View>
<View style={{marginHorizontal:10,marginTop:10}}>
  <SocialIcon
  title='Sign in with Google'
  button
  type='google'
  style={styles.socialicon}
  onPress={()=>{}}
  />
</View>
<View style={{alignItems:"center",marginTop:20}}>
  <Text style={{...styles.text1}}>Are you new to FOODINI ?</Text>
</View>
<View style={{alignItems:"flex-end",marginHorizontal:30, marginVertical:30}}>
  <Button
  title="Create an account"
  buttonStyle={styles.createButton}
  titleStyle={styles.createButtonTitle}
  onPress={() => navigation.navigate('SignUpScreen')}
  />
</View>
<Overlay isVisible={modalVisible} onBackdropPress={() => setModalVisible(false)}>
        <Text style={{ color: 'red' }}>{error}</Text>
      </Overlay>
    </View>

  );
};

const styles = StyleSheet.create({
  text1:{
    color:Colors.grey3,
    fontSize:16
  },
  
  socialicon:{
  borderRadius:12,
  height:50,

  },
  underline: {
    textDecorationLine: "underline",
    color: "#2196F3",
    fontSize: 16,
  },

  container: {
    flex: 1,
   
  },
 
 createButton :{
backgroundColor:"white",
alignContent:"center",
justifyContent:"center",
borderRadius:12,
borderWidth:1,
borderColor:"#ff8c52",
height:40,
paddingHorizontal:20,

 },

createButtonTitle:{
color:"#ff8c52",
fontSize:16,
fontWeight:"bold",
alignItems:"center",
justifyContent:"center",
marginTop:-3,
} ,
  
 textInput1 : {
  borderWidth:2,
  borderColor:"#86939e",
  marginHorizontal:20,
  borderRadius:12,
  marginBottom:20,
  paddingLeft:15,
  
 },
 textInput2 :{
  borderWidth:3,
  borderRadius:12,
  marginHorizontal:20,
  borderColor:"#86939e",
  flexDirection:"row",
  justifyContent:"space-between",
  alignContent:"center",
  alignItems:"center",
  paddingLeft:15,
 }
});


export default SignIn;
