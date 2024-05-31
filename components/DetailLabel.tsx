import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Colors, themeMode } from "@/constants/Colors";

const DetailLabel = ({
  lable,
  value,
}: {
  lable: string;
  value: string | number;
}) => {
  const theme: { mode: themeMode } = { mode: "dark" };
  let activeColor = Colors[theme.mode];
  return (
    <>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Text style={[styles.text, { color: activeColor.tabIconDefault }]}>
          {lable}
        </Text>
        <Text style={[styles.text, { color: activeColor.tabIconDefault }]}>
          {value}
        </Text>
      </View>
    </>
  );
};

export default DetailLabel;

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    marginVertical: 7.5,
    textTransform: "capitalize",
  },
});
