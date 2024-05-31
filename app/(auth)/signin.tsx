import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useMutation } from "@tanstack/react-query";

import AccountLinkText from "@/components/AcountLink";
import CustomBtn from "@/components/CustomBtn";
import CustomTextInput from "@/components/CustomTextInput";
import TitleText from "@/components/TitleText";
import usersApi from "@/api/users";
import authApi from "@/api/auth";
import { Login } from "@/utils/types";
import { showMessage } from "react-native-flash-message";
import { router } from "expo-router";
import { Formik } from "formik";
import CustomActivityIndicator from "@/components/CustomActivityIndicator";
import { loginValidationSchema } from "@/utils/validations";
import InputErrorMessage from "@/components/InputErrorMessage";
import { Colors, themeMode } from "@/constants/Colors";

const Sign = () => {
  const theme: { mode: themeMode } = { mode: "dark" };
  let activeColor = Colors[theme.mode];

  // const [isLoading, setIsLoading] = useState(false);

  // const handleSignIn = async ({
  //   username,
  //   password,
  // }: {
  //   username: string;
  //   password: string;
  // }) => {
  //   setIsLoading(true);

  //   const result = await usersApi.loginApi(username, password);

  //   setIsLoading(false);
  //   if (!result.ok) {
  //     showMessage({
  //       message: result.data.detail[0].msg,
  //       type: "danger",
  //       style: {
  //         alignItems: "center",
  //       },
  //     });

  //     return;
  //   }
  // };

  const { error, isSuccess, mutate, isPending, data } = useMutation({
    mutationFn: (user: Login) => usersApi.loginApi(user),
  });

  console.log(data);

  if (error) {
    showMessage({
      message: error.message,
      type: "danger",
      style: {
        alignItems: "center",
      },
    });
    router.replace("signin");
    return;
  }
  if (isSuccess) {
    showMessage({
      message: "Login Successful.",
      type: "success",
      style: {
        alignItems: "center",
      },
    });
    router.replace("(tabs)");
    return;
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View
        style={{
          backgroundColor: activeColor.background,
          flex: 1,
          alignItems: "center",
        }}
      >
        <CustomActivityIndicator visible={isPending} />
        <View
          style={{
            flex: 1,
            width: "100%",
            borderRadius: 10,
            padding: 20,
            backgroundColor: activeColor.background,
          }}
        >
          <TitleText label="Sign In" textColor={activeColor.text} />
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
                    labelColor={activeColor.text}
                    inputBackgroundColor={activeColor.inputBackground}
                    inputTextColor={activeColor.text}
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
                    labelColor={activeColor.text}
                    inputBackgroundColor={activeColor.inputBackground}
                    inputTextColor={activeColor.text}
                  />
                  {touched.password && errors.password && (
                    <InputErrorMessage error={errors.password} />
                  )}
                  <CustomBtn
                    btnColor={Colors.primaryBtnColor}
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
      <StatusBar style="light" backgroundColor={activeColor.background} />
    </SafeAreaView>
  );
};

export default Sign;

const styles = StyleSheet.create({});
