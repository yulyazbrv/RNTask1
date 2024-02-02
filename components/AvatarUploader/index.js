import React, { useState } from "react";
import { View, Image, TouchableOpacity, StyleSheet, Text } from "react-native";
import { launchImageLibrary } from "react-native-image-picker";
import * as ImagePicker from "expo-image-picker";

const AvatarUploader = () => {
  const [avatar, setAvatar] = useState(require("./assets/favicon.png")); // Import or use any default avatar icon
  const [resourcePath, setResourcePath] = useState({});
  const [image, setImage] = useState(null);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <View style={styles.container}>
      {image ? (
        <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />
      ) : (
        <Image source={avatar} style={{ width: 50, height: 50 }} />
      )}
      <Text style={{ alignItems: "center" }}>{resourcePath.uri}</Text>
      <TouchableOpacity onPress={pickImage} style={styles.button}>
        <Text style={styles.buttonText}>Select File</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    borderRadius: 4,
    width: 200,
  },
  button: {
    width: 200,
    height: 40,
    backgroundColor: "#3740ff",
    justifyContent: "center",
    borderRadius: 4,
  },
  buttonText: {
    textAlign: "center",
    fontSize: 15,
    color: "#fff",
  },
});

export default AvatarUploader;
