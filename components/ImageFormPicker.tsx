import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { useFormikContext } from "formik";
import AppImagePicker from "./AppImagePicker";
import InputErrorMessage from "./InputErrorMessage";

const ImagePickerForm = ({ field }) => {
  const { setFieldValue, touched, errors, values } = useFormikContext();

  const handleAdd = (uri: string) => {
    setFieldValue(field, uri);
  };
  return (
    <>
      <AppImagePicker imageUri={values[field]} onChangeImage={handleAdd} />
      <InputErrorMessage error={errors[field]} visible={touched[field]} />
    </>
  );
};

export default ImagePickerForm;

const styles = StyleSheet.create({});
