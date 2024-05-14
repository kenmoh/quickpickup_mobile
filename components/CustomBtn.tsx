import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

type CustomBtnProps = {
  btnBorderRadius: number;
  btnColor: string;
  label: string;
  height: number;
  width?: number;
  textColor: string;
  onPress: () => void;
};

const CustomBtn = ({
  btnBorderRadius,
  btnColor,
  label,
  height,
  width,
  textColor,
  onPress = () => {},
  ...props
}: CustomBtnProps) => {
  return (
    <View>
      <Text>CustomBtn</Text>
    </View>
  );
};

export default CustomBtn;

const styles = StyleSheet.create({});
