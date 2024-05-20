import {
  StyleSheet,
  Text,
  View,
  TextInput,
  KeyboardTypeOptions,
} from "react-native";

type InputProps = {
  label?: string;
  placeholder?: string;
  secureTextEntry?: boolean;
  keyboardType?: KeyboardTypeOptions;
  inputBorderWidth?: number;
  inputBorderColor?: string;
  inputBackgroundColor?: string;
  hasBorder?: boolean;
};

const CustomTextInput = ({
  label,
  placeholder,
  secureTextEntry,
  keyboardType,
  inputBorderColor = "grey",
  hasBorder = false,
  inputBorderWidth = hasBorder ? StyleSheet.hairlineWidth : 0,
  inputBackgroundColor = hasBorder ? "white" : "#eee",
  ...props
}: InputProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{label}</Text>
      <TextInput
        style={[
          styles.textInput,
          {
            backgroundColor: inputBackgroundColor,
            borderWidth: inputBorderWidth,
            borderColor: inputBorderColor,
          },
        ]}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
        autoComplete="off"
        autoCorrect={false}
        cursorColor={"gray"}
        maxLength={150}
        {...props}
      />
    </View>
  );
};

export default CustomTextInput;

const styles = StyleSheet.create({
  container: {
    marginVertical: 2.5,
  },
  textInput: {
    paddingVertical: 7.5,
    fontSize: 15,
    paddingHorizontal: 10,
    width: "100%",
    borderRadius: 5,
    color: "gray",
    marginVertical: 5,
    alignSelf: "center",
  },

  text: {
    color: "gray",
    fontSize: 14,
    fontFamily: "Poppins-Bold",
  },
});
