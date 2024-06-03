import { useContext } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { Formik } from "formik";

import AccountLinkText from "@/components/AcountLink";
import CustomBtn from "@/components/CustomBtn";
import CustomTextInput from "@/components/CustomTextInput";
import TitleText from "@/components/TitleText";

import usersApi from "@/api/users";
import { CreateUser } from "@/utils/types";
import { router } from "expo-router";
import { vendorValidationSchema } from "@/utils/validations";
import InputErrorMessage from "@/components/InputErrorMessage";
import { showMessage } from "react-native-flash-message";
import { useMutation } from "@tanstack/react-query";
import CustomActivityIndicator from "@/components/CustomActivityIndicator";
import { Colors, themeMode } from "@/constants/Colors";
import { ThemeContext } from "@/context/themeContext";

const SenderSignup = () => {
  const { theme } = useContext(ThemeContext);
  let activeColor = Colors[theme.mode];
  const { error, isSuccess, mutate, isPending, data } = useMutation({
    mutationFn: (user: CreateUser) => usersApi.createUser(user),
  });
  console.log(data);
  if (error?.message == "409") {
    showMessage({
      message: "data.detail[0].msg",
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
    router.replace("signin");
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
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{
            flex: 1,
            width: "100%",
            borderRadius: 10,
            // padding: 20,
            backgroundColor: activeColor.background,
          }}
        >
          <TitleText label="Signup | Sender" textColor={activeColor.text} />
          <Formik
            initialValues={{
              username: "",
              email: "",
              phoneNumber: "",
              confirmPassword: "",
              password: "",
            }}
            validationSchema={vendorValidationSchema}
            onSubmit={mutate}
          >
            {({ handleChange, handleSubmit, values, errors, touched }) => (
              <>
                <CustomActivityIndicator visible={isPending} />
                <View style={{ padding: 20 }}>
                  <CustomTextInput
                    label="Email"
                    hasBorder={theme.mode !== "dark"}
                    keyboardType="email-address"
                    onChangeText={handleChange("email")}
                    labelColor={activeColor.text}
                    inputBackgroundColor={activeColor.inputBackground}
                    inputTextColor={activeColor.text}
                    value={values.email}
                  />
                  {touched.email && errors.email && (
                    <InputErrorMessage error={errors.email} />
                  )}
                  <CustomTextInput
                    label="Phone Number"
                    hasBorder={theme.mode !== "dark"}
                    keyboardType="phone-pad"
                    onChangeText={handleChange("phoneNumber")}
                    value={values.phoneNumber}
                    labelColor={activeColor.text}
                    inputBackgroundColor={activeColor.inputBackground}
                    inputTextColor={activeColor.text}
                  />
                  {touched.phoneNumber && errors.phoneNumber && (
                    <InputErrorMessage error={errors.phoneNumber} />
                  )}
                  <CustomTextInput
                    label="Username"
                    hasBorder={theme.mode !== "dark"}
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
                    hasBorder={theme.mode !== "dark"}
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
                  <CustomTextInput
                    label="Confirm Passord"
                    hasBorder={theme.mode !== "dark"}
                    secureTextEntry={true}
                    onChangeText={handleChange("confirmPassword")}
                    value={values.confirmPassword}
                    labelColor={activeColor.text}
                    inputBackgroundColor={activeColor.inputBackground}
                    inputTextColor={activeColor.text}
                  />
                  {touched.confirmPassword && errors.confirmPassword && (
                    <InputErrorMessage error={errors.confirmPassword} />
                  )}
                  <View style={{ marginVertical: 25 }}>
                    <CustomBtn
                      btnColor={Colors.btnPrimaryColor}
                      label="Sign Up"
                      btnBorderRadius={10}
                      onPress={handleSubmit}
                    />
                  </View>
                </View>
              </>
            )}
          </Formik>
          <AccountLinkText
            question="Have an account? "
            isLoginSreen={false}
            senderLink="signin"
            senderLabel="Sign In"
          />
        </ScrollView>
      </View>
      <StatusBar style="light" backgroundColor={activeColor.background} />
    </SafeAreaView>
  );
};

export default SenderSignup;

const styles = StyleSheet.create({});
