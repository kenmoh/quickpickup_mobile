import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Colors } from "@/constants/Colors";

const InputErrorMessage = ({ error }: { error: string }) => {
  return (
    <View style={{ alignSelf: "flex-start" }}>
      <Text style={styles.error}>{error}</Text>
    </View>
  );
};

export default InputErrorMessage;

const styles = StyleSheet.create({
  error: {
    color: Colors.error,
    fontSize: 12,
    marginVertical: 1.5,
  },
});
