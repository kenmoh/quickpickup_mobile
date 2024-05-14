import {
  StyleSheet,
  Text,
  DimensionValue,
  TouchableOpacity,
  Dimensions,
} from "react-native";

type CustomBtnProps = {
  btnBorderRadius: number;
  btnColor: string;
  label: string;
  btnHeight?: number;
  btnWidth?: number;
  onPress: () => void;
};

const { width } = Dimensions.get("window");

const CustomBtn = ({
  btnBorderRadius,
  btnColor,
  label,
  btnHeight = 45,
  btnWidth = width * (90 / 100),
  onPress = () => {},
  ...props
}: CustomBtnProps) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={onPress}
      style={[
        styles.btn,
        {
          borderRadius: btnBorderRadius,
          backgroundColor: btnColor,
          width: btnWidth,
          height: btnHeight,
        },
        { ...props },
      ]}
    >
      <Text style={styles.text}>{label}</Text>
    </TouchableOpacity>
  );
};

export default CustomBtn;

const styles = StyleSheet.create({
  btn: {
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    marginVertical: 20,
  },
  text: {
    textTransform: "uppercase",
    fontWeight: "bold",
    color: "white",
    fontSize: 18,
  },
});
