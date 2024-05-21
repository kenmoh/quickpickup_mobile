import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useMutation } from "@tanstack/react-query";

import AccountLinkText from "@/components/AcountLink";
import CustomBtn from "@/components/CustomBtn";
import CustomTextInput from "@/components/CustomTextInput";
import TitleText from "@/components/TitleText";
import usersApi from "@/api/users";
import { Login } from "@/utils/types";
import { showMessage } from "react-native-flash-message";
import { router } from "expo-router";
import { Formik } from "formik";
import CustomActivityIndicator from "@/components/CustomActivityIndicator";
import { loginValidationSchema } from "@/utils/validations";
import InputErrorMessage from "@/components/InputErrorMessage";

const SignUpDispatch = () => {
  const { error, isSuccess, mutate, isPending, data } = useMutation({
    mutationFn: (user: Login) =>
      usersApi.loginApi(user.username, user.password),
  });

  console.log(data);
  console.log(error);

  if (error) {
    showMessage({
      message: "Invalid credentials",
      type: "danger",
      style: {
        alignItems: "center",
      },
    });
    return;
  }
  if (isSuccess) {
    showMessage({
      message: "Registration Successful.",
      type: "success",
      style: {
        alignItems: "center",
      },
    });
    router.replace("(tabs)");
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ backgroundColor: "#fff", flex: 1, alignItems: "center" }}>
        <CustomActivityIndicator visible={isPending} />
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
          <Formik
            initialValues={{ username: "", password: "" }}
            validationSchema={loginValidationSchema}
            onSubmit={mutate}
          >
            {({ handleChange, handleSubmit, values, errors, touched }) => (
              <>
                <View>
                  <CustomTextInput
                    label="Email"
                    autoCapitalize="none"
                    keyboardType="email-address"
                    onChangeText={handleChange("username")}
                    value={values.username}
                  />
                  {touched.username && errors.username && (
                    <InputErrorMessage error={errors.username} />
                  )}
                  <CustomTextInput
                    label="Password"
                    autoCapitalize="none"
                    secureTextEntry={true}
                    onChangeText={handleChange("password")}
                    value={values.password}
                  />
                  {touched.password && errors.password && (
                    <InputErrorMessage error={errors.password} />
                  )}
                  <CustomBtn
                    btnColor="#0000CD"
                    label="Sign Up"
                    btnBorderRadius={10}
                    onPress={handleSubmit}
                  />
                </View>
              </>
            )}
          </Formik>

          <AccountLinkText
            isLoginSreen={true}
            question="Sign up as a "
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
