import { StyleSheet } from "react-native";
import { withLayoutContext } from "expo-router";

import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

const TopTabBar = withLayoutContext(createMaterialTopTabNavigator().Navigator);

const TopTabLayout = () => {
  return (
    <TopTabBar>
      <TopTabBar.Screen name="index" options={{ title: "Orders" }} />
      <TopTabBar.Screen name="myOrder" options={{ title: "My Orders" }} />
      <TopTabBar.Screen
        name="completedOrders"
        options={{ title: "Delivered" }}
      />
    </TopTabBar>
  );
};

export default TopTabLayout;

const styles = StyleSheet.create({});
