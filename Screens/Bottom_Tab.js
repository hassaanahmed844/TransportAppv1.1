import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/AntDesign";
import ProfileScreen from "./Profile_Screen";
import NotificationScreen from "./Notification_Screen";
import HomeScreen from "./Home_Screen";
import SchoolList from "./SchoolList_Screen";
import Find_Driver from "./Find_Driver_Screen";
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const Bottom_Tab = ({ navigation }) => {
  return (
    <Tab.Navigator initialRouteName={"Home"}>
      <Tab.Screen
        name="Notification"
        component={NotificationScreen}
        options={{
          tabBarBadge: 3,
          tabBarIcon: ({ color, size }) => (
            <Icon name="notification" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Icon name="home" color={color} size={size} />
          ),
        }}
      />

      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="user" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Bottom_Tab;
