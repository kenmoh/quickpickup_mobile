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

const SenderSignup = () => {
  const { error, isSuccess, mutate, isPending } = useMutation({
    mutationFn: (user: CreateUser) => usersApi.createUser(user),
  });

  if (error?.message == "409") {
    showMessage({
      message: "Field already exists",
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
                <CustomTextInput
                  label="Email"
                  keyboardType="email-address"
                  onChangeText={handleChange("email")}
                  value={values.email}
                />
                {touched.email && errors.email && (
                  <InputErrorMessage error={errors.email} />
                )}
                <CustomTextInput
                  label="Phone Number"
                  keyboardType="phone-pad"
                  onChangeText={handleChange("phoneNumber")}
                  value={values.phoneNumber}
                />
                {touched.phoneNumber && errors.phoneNumber && (
                  <InputErrorMessage error={errors.phoneNumber} />
                )}
                <CustomTextInput
                  label="Username"
                  onChangeText={handleChange("username")}
                  value={values.username}
                />
                {touched.username && errors.username && (
                  <InputErrorMessage error={errors.username} />
                )}
                <CustomTextInput
                  label="Password"
                  secureTextEntry={true}
                  onChangeText={handleChange("password")}
                  value={values.password}
                />
                {touched.password && errors.password && (
                  <InputErrorMessage error={errors.password} />
                )}
                <CustomTextInput
                  label="Confirm Passord"
                  secureTextEntry={true}
                  onChangeText={handleChange("confirmPassword")}
                  value={values.confirmPassword}
                />
                {touched.confirmPassword && errors.confirmPassword && (
                  <InputErrorMessage error={errors.confirmPassword} />
                )}
                <CustomBtn
                  btnColor="#0000CD"
                  label="Sign Up"
                  btnBorderRadius={10}
                  onPress={handleSubmit}
                />
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
      <StatusBar style="dark" />
    </SafeAreaView>
  );
};

export default SenderSignup;

const styles = StyleSheet.create({});
