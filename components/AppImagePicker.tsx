import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Image,
  TouchableWithoutFeedback,
  Alert,
} from "react-native";
import * as ImagePicker from "expo-image-picker";

import { AntDesign, Ionicons } from "@expo/vector-icons";
import { Colors, themeMode } from "@/constants/Colors";

const AppImagePicker = ({
  imageUri,
  onChangeImage,
}: {
  imageUri: string;
  onChangeImage: (url: string | null) => null | string;
}) => {
  const theme: { mode: themeMode } = { mode: "dark" };
  let activeColor = Colors[theme.mode];

  const handlePress = () => {
    if (!imageUri) {
      selectImage();
    } else {
      Alert.alert(
        "Delete Image",
        "Are you sure you want to delete this image?",
        [
          {
            text: "Yes",
            onPress: () => onChangeImage(""),
          },
          { text: "No" },
        ]
      );
    }
  };

  const selectImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      try {
        onChangeImage(result.assets[0].uri);
      } catch (error) {
        console.log(error);
      }
    }
  };
  return (
    <TouchableWithoutFeedback onPress={handlePress}>
      <View
        style={[
          styles.imageContainer,
          {
            backgroundColor: activeColor.inputBackground,
            borderColor: activeColor.borderolor,
          },
        ]}
      >
        {!imageUri && (
          <Ionicons
            name="camera-outline"
            size={40}
            color={activeColor.tabIconDefault}
          />
        )}
        {imageUri && (
          <Image
            source={{ uri: imageUri }}
            style={styles.image}
            resizeMode="cover"
          />
        )}
      </View>
    </TouchableWithoutFeedback>
  );
};

export default AppImagePicker;

const styles = StyleSheet.create({
  imageContainer: {
    width: "100%",
    height: 200,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
    marginVertical: 5,
    overflow: "hidden",
    borderWidth: 1,
  },
  image: {
    width: "100%",
    height: "100%",
  },
});
