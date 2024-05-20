import { StyleSheet, Text, View } from "react-native";
import { Redirect } from "expo-router";

const welcome = () => {
  return (
    <View style={styles.container}>
      <Redirect href={"/"} />
      <Text style={styles.text}>welcome</Text>
    </View>
  );
};

export default welcome;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    backgroundColor: "white",
  },
  text: {
    fontSize: 30,
    fontWeight: "900",
  },
});
