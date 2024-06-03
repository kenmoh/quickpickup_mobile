import { StyleSheet, ScrollView, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Formik } from "formik";
import ImagePickerForm from "@/components/ImageFormPicker";

import CustomBtn from "@/components/CustomBtn";
import { Colors, themeMode } from "@/constants/Colors";
import CustomTextInput from "@/components/CustomTextInput";
import { orderValidationSchema } from "@/utils/orderValidation";
import InputErrorMessage from "@/components/InputErrorMessage";

import { ThemeContext } from "@/context/themeContext";
import { useContext } from "react";

export default function HomeScreen() {
  const { theme } = useContext(ThemeContext);
  let activeColor = Colors[theme.mode];
  return (
    <View
      style={{
        backgroundColor: activeColor.background,
        flex: 1,
        justifyContent: "center",
      }}
    >
      <StatusBar style="inverted" />
      <View style={styles.mainContainer}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Formik
            initialValues={{
              name: "",
              description: "",
              origin: "",
              destination: "",
              distance: "",
              orderPhotoUrl: "",
            }}
            onSubmit={() => {}}
            validationSchema={orderValidationSchema}
          >
            {({ handleChange, handleSubmit, values, errors, touched }) => (
              <>
                <View style={styles.container}>
                  <View style={{ flex: 1, paddingHorizontal: 5 }}>
                    <CustomTextInput
                      onChangeText={handleChange("origin")}
                      value={values.origin}
                      labelColor={activeColor.text}
                      label="Pickup Location"
                      hasBorder={theme.mode !== "dark"}
                      inputBackgroundColor={activeColor.inputBackground}
                      inputTextColor={activeColor.text}
                    />
                    {touched.origin && errors.origin && (
                      <InputErrorMessage error={errors.origin} />
                    )}
                    <CustomTextInput
                      onChangeText={handleChange("destination")}
                      value={values.destination}
                      labelColor={activeColor.text}
                      label="Destination"
                      hasBorder={theme.mode !== "dark"}
                      inputBackgroundColor={activeColor.inputBackground}
                      inputTextColor={activeColor.text}
                    />
                    {touched.destination && errors.destination && (
                      <InputErrorMessage error={errors.destination} />
                    )}
                    <CustomTextInput
                      onChangeText={handleChange("distance")}
                      value={values.distance}
                      labelColor={activeColor.text}
                      label="Distance"
                      hasBorder={theme.mode !== "dark"}
                      editable={false}
                      inputBackgroundColor={activeColor.inputBackground}
                      inputTextColor={activeColor.text}
                    />
                    {touched.distance && errors.distance && (
                      <InputErrorMessage error={errors.distance} />
                    )}
                  </View>
                </View>
                <View style={styles.container}>
                  <View style={{ flex: 1, paddingHorizontal: 5 }}>
                    <CustomTextInput
                      onChangeText={handleChange("name")}
                      value={values.name}
                      label="Name"
                      hasBorder={theme.mode !== "dark"}
                      inputBackgroundColor={activeColor.inputBackground}
                      inputTextColor={activeColor.text}
                      labelColor={activeColor.text}
                    />
                    {touched.name && errors.name && (
                      <InputErrorMessage error={errors.name} />
                    )}
                    <CustomTextInput
                      label="Description"
                      onChangeText={handleChange("description")}
                      value={values.desription}
                      hasBorder={theme.mode !== "dark"}
                      multiline
                      numberOfLines={4}
                      textAlignVertical="top"
                      inputBackgroundColor={activeColor.inputBackground}
                      inputTextColor={activeColor.text}
                      labelColor={activeColor.text}
                    />
                    {touched.description && errors.description && (
                      <InputErrorMessage error={errors.description} />
                    )}
                    <ImagePickerForm field={"orderPhotoUrl"} />

                    <View style={styles.btnContainer}>
                      <CustomBtn
                        label="submit"
                        btnBorderRadius={5}
                        btnColor="orange"
                        onPress={handleSubmit}
                      />
                    </View>
                  </View>
                </View>
              </>
            )}
          </Formik>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
  },
  mainContainer: {
    flex: 1,
    flexDirection: "row",
    padding: 10,
    alignItems: "center",
  },
  text: {
    fontSize: 16,
    color: "gray",
    marginVertical: 10,
    textTransform: "uppercase",
    fontFamily: "Poppins-Regular",
  },
  btnContainer: {
    marginVertical: 20,
  },
});
