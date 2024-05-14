import { StyleSheet, Text, View } from "react-native";
import React from "react";

const TitleText = ({ label }: { label: string }) => {
  return <Text style={styles.text}>{label}r</Text>;
};

export default TitleText;

const styles = StyleSheet.create({
  text: {
    fontWeight: "bold",
    fontSize: 20,
    color: "gray",
    marginVertical: 20,
    textAlign: "center",
  },
});
