import { Colors, themeMode } from "@/constants/Colors";
import { StyleSheet, View, Platform, ActivityIndicator } from "react-native";

const CustomActivityIndicator = ({ visible }: { visible: boolean }) => {
  const theme: { mode: themeMode } = { mode: "dark" };
  let activeColor = Colors[theme.mode];
  if (!visible) return null;
  return (
    <View
      style={[styles.overlay, { backgroundColor: activeColor.inputBackground }]}
    >
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
    position: "absolute",
    zIndex: 1,
    opacity: 0.8,
    justifyContent: "center",
    height: "100%",
    alignSelf: "center",
  },
});
