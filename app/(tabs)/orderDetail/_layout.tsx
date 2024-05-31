import { Stack, withLayoutContext } from "expo-router";

import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { StyleSheet } from "react-native";

const OrderDetailTopTab = withLayoutContext(
  createMaterialTopTabNavigator().Navigator
);

const OrderDetailLayout = () => {
  return (
    <Stack
      screenOptions={{
        // tabBarAndroidRipple: { borderless: false },
        // tabBarPressColor: "white",
        // tabBarStyle: {
        //   borderBottomWidth: StyleSheet.hairlineWidth,
        //   borderBlockColor: "red",
        //   elevation: 0,
        //   shadowOpacity: 0,
        // },
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="[id]"
        // options={{ title: "order details", headerTransparent: true }}
      />
    </Stack>
  );
};

export default OrderDetailLayout;
