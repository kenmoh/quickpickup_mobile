import { StyleSheet } from "react-native";
import { withLayoutContext } from "expo-router";

import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

const TopTabBar = withLayoutContext(createMaterialTopTabNavigator().Navigator);

const TopTabLayout = () => {
  return (
    <TopTabBar
      screenOptions={{
        tabBarAndroidRipple: { borderless: false },
        tabBarPressColor: "red",
        tabBarStyle: {
          borderBottomColor: "#eee",
          borderBottomWidth: StyleSheet.hairlineWidth,
          elevation: 0,
          shadowOpacity: 0,
        },
      }}
    >
      <TopTabBar.Screen name="index" options={{ title: "Orders" }} />
      <TopTabBar.Screen name="myOrder" options={{ title: "My Orders" }} />
      <TopTabBar.Screen
        name="completedOrder"
        options={{ title: "Delivered" }}
      />
    </TopTabBar>
  );
};

export default TopTabLayout;

const styles = StyleSheet.create({});
