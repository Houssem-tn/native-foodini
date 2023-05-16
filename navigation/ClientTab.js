import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Icon } from "react-native-elements";
import { SafeAreaView, StyleSheet } from "react-native";
import { Colors } from "../Styling/Style";
import HomeScreen from "../Screens/HomeScreen";
import SearchScreen from "../Screens/SearchScreen";
import AccountScreen from "../Screens/AccountScreen";

const ClientTabs = createBottomTabNavigator();

export default function ClientTab() {
  return (
    <SafeAreaView style={styles.container}>
      <ClientTabs.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;
            if (route.name === "Home") {
              iconName = "home";
            } else if (route.name === "Search") {
              iconName = "search";
            } else if(route.name === "MyAccount"){
                iconName="person"
            }
            return (
              <Icon
                name={iconName}
                type="material"
                color={color}
                size={size}
              />
            );
          },
          tabBarActiveTintColor: Colors.buttons
        })}
      >
        <ClientTabs.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerShown: false
          }}
        />
        <ClientTabs.Screen
          name="Search"
          component={SearchScreen}
          options={{
            headerShown: false 
          }}
        />
        <ClientTabs.Screen
          name="MyAccount"
          component={AccountScreen}
          options={{
            headerShown: false 
          }}
        />
      </ClientTabs.Navigator>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "stretch"
  }
});
