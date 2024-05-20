import AccountLinkText from "@/components/AcountLink";
import CustomBtn from "@/components/CustomBtn";
import CustomTextInput from "@/components/CustomTextInput";
import TitleText from "@/components/TitleText";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { showMessage } from "react-native-flash-message";
import { useMutation } from "@tanstack/react-query";

import { dispatchValidationSchema } from "@/utils/validations";
import InputErrorMessage from "@/components/InputErrorMessage";
import CustomActivityIndicator from "@/components/CustomActivityIndicator";
import usersApi from "@/api/users";
import { CreateDispatch } from "@/utils/types";
import { router } from "expo-router";
import { Formik } from "formik";

const SignUpDispatch = () => {
  const { error, isSuccess, mutate, isPending } = useMutation({
    mutationFn: (user: CreateDispatch) => usersApi.createDispatch(user),
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
          <TitleText label="Signup | Rider" />
          <Formik
            initialValues={{
              companyName: "",
              email: "",
              phoneNumber: "",
              companyRegNum: "",
              confirmPassword: "",
              password: "",
            }}
            validationSchema={dispatchValidationSchema}
            onSubmit={mutate}
          >
            {({ handleChange, handleSubmit, values, errors, touched }) => (
              <>
                <CustomActivityIndicator visible={isPending} />
                <CustomTextInput
                  label="Email"
                  autoCapitalize="none"
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
                  label="Company Name"
                  onChangeText={handleChange("companyName")}
                  value={values.companyName}
                />
                {touched.companyName && errors.companyName && (
                  <InputErrorMessage error={errors.companyName} />
                )}
                <CustomTextInput
                  label="Company Reg No."
                  onChangeText={handleChange("companyRegNum")}
                  value={values.companyRegNum}
                />
                {touched.companyRegNum && errors.companyRegNum && (
                  <InputErrorMessage error={errors.companyRegNum} />
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

export default SignUpDispatch;

const styles = StyleSheet.create({});
