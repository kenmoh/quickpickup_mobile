import { StyleSheet, Text, View } from "react-native";
import React from "react";

const DetailLabel = ({
  lable,
  value,
}: {
  lable: string;
  value: string | number;
}) => {
  return (
    <>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Text style={styles.text}>{lable}</Text>
        <Text style={styles.text}>{value}</Text>
      </View>
    </>
  );
};

export default DetailLabel;

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    color: "grey",
    marginVertical: 7.5,
    textTransform: "capitalize",
  },
});
