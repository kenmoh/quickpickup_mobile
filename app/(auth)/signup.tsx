import AccountLinkText from "@/components/AcountLink";
import CustomBtn from "@/components/CustomBtn";
import CustomTextInput from "@/components/CustomTextInput";
import TitleText from "@/components/TitleText";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const SenderSignup = () => {
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
          <TitleText label="Signup | Sender" />
          <CustomTextInput label="Email" keyboardType="email-address" />
          <CustomTextInput label="Phone Number" keyboardType="phone-pad" />
          <CustomTextInput label="Username" />
          <CustomTextInput label="Password" secureTextEntry={true} />
          <CustomTextInput label="Confirm Passord" secureTextEntry={true} />
          <CustomBtn
            btnColor="#0000CD"
            label="Sign Up"
            btnBorderRadius={10}
            onPress={() => {}}
          />
          <AccountLinkText
            question="Have an account? "
            isLoginSreen={false}
            senderLink="signin"
            senderLabel="Sign In"
          />
        </ScrollView>
      </View>
      <StatusBar style="dark" />
    </SafeAreaView>
  );
};

export default SenderSignup;

const styles = StyleSheet.create({});
