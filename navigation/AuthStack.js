import React from "react";
import { createStackNavigator,TransitionPresets} from '@react-navigation/stack'
import SignIn from "../Screens/SignIn";
import SignUp from "../Screens/SignUp";
import WelcomeScreen from "../Screens/WelcomeScreen"
import Splash from "../Screens/Splash";
import ProductCard from "../components/ProductCard";
import HelpScreen from "../Screens/HelpScreen";
import Reservation from "../components/Reservation";
import DrawerNavigator from "./DrawerNavigator";
import ReservationScreen from "../Screens/ReservationScreen";
import Comments from "../components/Comments";
import Logout from "../Screens/LogoutScreen";
const Stack = createStackNavigator()

export default function AuthStack (){
    return (
        <Stack.Navigator>
             <Stack.Screen
        name="Splash"
        component={Splash}
        options={{
            headerShown:false,
            ...TransitionPresets.RevealFromBottomAndroid
        }}
        
        />

             <Stack.Screen
        name="WelcomeScreen"
        component={WelcomeScreen}
        options={{
            headerShown:false,
            ...TransitionPresets.RevealFromBottomAndroid
        }}
        
        />
        <Stack.Screen
        name="SignInScreen"
        component={SignIn}
        options={{
            headerShown:false,
            ...TransitionPresets.RevealFromBottomAndroid
        }}
        
        
        />
        <Stack.Screen
        name="LogoutScreen"
        component={Logout}
        options={{
            headerShown:false,
            ...TransitionPresets.RevealFromBottomAndroid
        }}
        
        />
        
        <Stack.Screen
        name="ProductCard"
        component={ProductCard}
        options={{
            headerShown:false,
            ...TransitionPresets.RevealFromBottomAndroid
        }}
        
        />
        <Stack.Screen
        name="Comments"
        component={Comments}
        options={{
          headerShown:false,
          ...TransitionPresets.RevealFromBottomAndroid
        }}
      />
      <Stack.Screen
    name="Reservation"
    component={Reservation}
    options={{
        headerShown:false,
        ...TransitionPresets.RevealFromBottomAndroid
    }}
/>
         <Stack.Screen
        name="DrawerNavigator"
        component={DrawerNavigator}
        options={{
            headerShown:false,
            ...TransitionPresets.RevealFromBottomAndroid
        }}
        
        />
        <Stack.Screen
        name="SignUpScreen"
        component={SignUp}
        options={{
            headerShown:false,
            ...TransitionPresets.RevealFromBottomAndroid
        }}
        
        
        />
        <Stack.Screen
        name="HelpScreen"
        component={HelpScreen}
        options={{
            headerShown:false,
            ...TransitionPresets.RevealFromBottomAndroid
        }}
        
        
        />
        <Stack.Screen
        name="ReservationScreen"
        component={ReservationScreen}
        options={{
            headerShown:false,
            ...TransitionPresets.RevealFromBottomAndroid
        }}
        
        
        />
     

        </Stack.Navigator>
    )
} 