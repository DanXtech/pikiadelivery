import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { NavigationContainer, useIsFocused } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

import HomeIcon from "@/assets/TabIcons/HomeIcon";
import TripsIcon from "@/assets/TabIcons/TripsIcon";
import RatingIcon from "@/assets/TabIcons/RatingIcon";
import EarningIcon from "@/assets/TabIcons/EarningIcon";
import MessageIcon from "@/assets/TabIcons/MessageIcon";

import { Colors } from "@/constants/Colors";
import { ReactElement } from "react"; // Import ReactElement
import trips from "./trips";
import index from "./index";
import reviews from "./reviews";
import earnings from "./earnings";
import message from "./message";

const Tab = createBottomTabNavigator();

const TabBarIcon = ({ focused, icon }: { focused: boolean; icon: ReactElement }) => {
  return React.cloneElement(icon, {
    color: focused ? "#22B573" : "#D9D9D9",
  });
};

export default function Index() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarIconStyle: {
          marginVertical: hp("1%"), 
          width: wp("10%"), 
          height: hp("5%"),
        },
        tabBarStyle: {
          backgroundColor: "white",
          height: hp("12%"), 
          paddingBottom: hp("2.5%"), 
          paddingTop: hp("0.5%"), 
          borderTopColor: "#FFF",
          borderTopWidth: hp(".1%"),
          shadowColor: "#000",
          shadowOffset: { width: 0, height: -4 }, 
          shadowOpacity: 0.2,
          shadowRadius: 6,
          // Elevation for Android
          elevation: 8,
        },
        tabBarItemStyle: {
          justifyContent: "center", 
          alignItems: "center",
        },
        tabBarActiveTintColor: "#22B573", 
        tabBarInactiveTintColor: "#D9D9D9", 
      }}
    >
      {[
        { name: "index", component: index, icon: <HomeIcon />, label: "Home" },
        { name: "trips", component: trips, icon: <TripsIcon />, label: "Trips" },
        { name: "reviews", component: reviews, icon: <RatingIcon />, label: "Reviews" },
        { name: "earnings", component: earnings, icon: <EarningIcon />, label: "Earnings" },
        { name: "message", component: message, icon: <MessageIcon />, label: "Messages" },
      ].map((tab, index) => (
        <Tab.Screen
          key={index}
          name={tab.name}
          component={tab.component}
          options={{
            tabBarIcon: ({ focused }) => (
              <TabBarIcon focused={focused} icon={tab.icon} />
            ),
            tabBarLabel: ({ focused }) => (
              <Text
                style={[
                  styles.tabLabel,
                  {
                    color: focused ? "#22B573" : "#D9D9D9",
                    // marginBottom: hp("0%"), // Add some space between icon and label
                  },
                ]}
              >
                {tab.label}
              </Text>
            ),
          }}
        />
      ))}
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  tabLabelContainer: {
    alignItems: "center", // Center the label text below the icon
  },
  tabLabel: {
    fontSize: hp("1.5%"),
    fontWeight: "400",
  },
});
