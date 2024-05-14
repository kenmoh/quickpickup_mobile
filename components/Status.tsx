import { StyleSheet, Text, View } from "react-native";

type StatusProps = {
  text: string;
  pillWidth: number;
  pVertical: number;
  pHorizontal: number;
  textColor: string;
  backgroundColor: string;
};

const Status = ({
  backgroundColor,
  pHorizontal,
  pVertical,
  pillWidth,
  textColor,
  text,
}: StatusProps) => {
  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor,
          width: pillWidth,
          paddingHorizontal: pHorizontal,
          paddingVertical: pVertical,
        },
      ]}
    >
      <Text style={{ color: textColor, textTransform: "capitalize" }}>
        {text}
      </Text>
    </View>
  );
};

export default Status;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 500,
  },
});
