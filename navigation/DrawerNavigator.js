import * as React from 'react'
import {createDrawerNavigator }from '@react-navigation/drawer'
 import { Icon } from "react-native-elements";

import ClientTab from './ClientTab' 
import { Colors } from '../Styling/Style';

import DrawerContent from '../components/DrawerContent';
const Drawer = createDrawerNavigator()
export default function DrawerNavigator({route, ...props }) {
    const { displayName, email } = route.params;
    // const { navigation: parentNavigation } = route.params;
    // console.log("displayName DrawerNavigator", displayName);
    // console.log("email DrawerNavigator", email);
    return (
        <Drawer.Navigator
        drawerContent={props=><DrawerContent {...props} displayName={displayName} email={email}/>}
        >

<Drawer.Screen
    name="ClientTab"
    component={ClientTab}
    options={{
      title:'Client',
      drawerIcon:({focused,size})=>(
        <Icon
          type='material-community'
          name = 'home'
          color={focused ? "#7cc" : Colors.grey1}
          size={size}
        />
      ),
      headerShown: false,
    }}
  /> 

  
        </Drawer.Navigator>
    )
}