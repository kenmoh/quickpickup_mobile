import { StyleSheet, View, Platform, ActivityIndicator } from "react-native";

const CustomActivityIndicator = ({ visible }: { visible: boolean }) => {
  if (!visible) return null;
  return (
    <View style={styles.overlay}>
      <ActivityIndicator
        animating={visible}
        size={Platform.OS === "ios" ? "large" : 55}
        color={"grey"}
      />
    </View>
  );
};

export default CustomActivityIndicator;

const styles = StyleSheet.create({
  overlay: {
    width: "100%",
    backgroundColor: "white",
    position: "absolute",
    zIndex: 1,
    opacity: 0.8,
    justifyContent: "center",
    height: "100%",
    alignSelf: "center",
  },
});
