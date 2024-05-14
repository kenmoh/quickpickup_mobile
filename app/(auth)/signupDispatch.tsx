import CustomTextInput from "@/components/CustomTextInput";
import TitleText from "@/components/TitleText";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const SignUpDispatch = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ backgroundColor: "#fff", flex: 1, alignItems: "center" }}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{
            flex: 1,
            width: "100%",
            borderRadius: 10,
            padding: 20,
            backgroundColor: "#fff",
          }}
        >
          <TitleText label="Signup | Rider" />
          <CustomTextInput label="Email" keyboardType="email-address" />
          <CustomTextInput label="Phone Number" keyboardType="phone-pad" />
          <CustomTextInput label="Company Name" />
          <CustomTextInput label="Company Reg No." />
          <CustomTextInput label="Password" secureTextEntry={true} />
          <CustomTextInput label="Confirm Passord" secureTextEntry={true} />
        </ScrollView>
      </View>
      <StatusBar style="dark" />
    </SafeAreaView>
  );
};

export default SignUpDispatch;

const styles = StyleSheet.create({});
