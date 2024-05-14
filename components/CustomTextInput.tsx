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
};

const CustomTextInput = ({
  label,
  placeholder,
  secureTextEntry,
  keyboardType,
  ...props
}: InputProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{label}</Text>
      <TextInput
        style={styles.textInput}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
        autoComplete="off"
        autoCorrect={false}
        cursorColor={"gray"}
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
    backgroundColor: "#eee",
    width: "100%",
    borderRadius: 5,
    color: "gray",
    marginVertical: 5,
  },

  text: { color: "gray", fontSize: 14, fontWeight: "bold" },
});
