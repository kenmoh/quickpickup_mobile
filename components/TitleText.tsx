import { StyleSheet, Text, View } from "react-native";
import React from "react";

const TitleText = ({
  label,
  textColor,
}: {
  label: string;
  textColor?: string;
}) => {
  return <Text style={[styles.text, { color: textColor }]}>{label}</Text>;
};

export default TitleText;

const styles = StyleSheet.create({
  text: {
    fontWeight: "bold",
    fontSize: 20,
    marginVertical: 20,
    textAlign: "center",
  },
});
