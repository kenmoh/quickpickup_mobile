import AccountLinkText from "@/components/AcountLink";
import CustomBtn from "@/components/CustomBtn";
import CustomTextInput from "@/components/CustomTextInput";
import TitleText from "@/components/TitleText";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const SignUpDispatch = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ backgroundColor: "#fff", flex: 1, alignItems: "center" }}>
        <View
          style={{
            flex: 1,
            width: "100%",
            borderRadius: 10,
            padding: 20,
            backgroundColor: "#fff",
          }}
        >
          <TitleText label="Sign In" />
          <CustomTextInput label="Email" keyboardType="email-address" />
          <CustomTextInput label="Password" secureTextEntry={true} />

          <CustomBtn
            btnColor="#0000CD"
            label="Sign Up"
            btnBorderRadius={10}
            onPress={() => {}}
          />
          <AccountLinkText
            isLoginSreen={true}
            question="Don't have an account? Sign up as a "
            senderLabel="Sender"
            senderLink="/signup"
            riderLink="signupDispatch"
            riderLabel="Rider"
          />
        </View>
      </View>
      <StatusBar style="dark" />
    </SafeAreaView>
  );
};

export default SignUpDispatch;

const styles = StyleSheet.create({});
