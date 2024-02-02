import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Alert,
} from "react-native";
import AvatarUploader from "../../components/AvatarUploader";

const Home = () => {
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  const validateEmail = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePhoneNumber = () => {
    const phoneRegex = /^\+375 \d{2} \d{3}-\d{2}-\d{2}$/;
    return phoneRegex.test(phoneNumber);
  };

  const validatePassword = () => {
    return password.length >= 6;
  };

  const handleNextPress = () => {
    if (
      !isChecked ||
      !validateEmail() ||
      !validatePhoneNumber() ||
      !validatePassword()
    ) {
      Alert.alert(
        "Validation Error",
        "Please check your inputs and try again."
      );
    } else {
      Alert.alert("Are you sure?", "", [
        { text: "No", style: "cancel" },
        { text: "Yes", onPress: () => console.log("User pressed Yes") },
      ]);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>Welcome to Y</Text>
      <AvatarUploader />

      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
        keyboardType="email-address"
        autoCompleteType="email"
        onBlur={() => validateEmail()}
      />

      <TextInput
        style={styles.input}
        placeholder="+375 (XX) XXX-XX-XX"
        value={phoneNumber}
        onChangeText={(text) => setPhoneNumber(text)}
        keyboardType="phone-pad"
        autoCompleteType="tel"
        onBlur={() => validatePhoneNumber()}
      />

      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={(text) => setPassword(text)}
        secureTextEntry={!showPassword}
        autoCompleteType="password"
        onBlur={() => validatePassword()}
      />
      <View style={styles.textArea}>
        <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
          <Text>Show/Hide Password</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.checkboxContainer,
            { backgroundColor: isChecked ? "#3740ff" : "#ccc" },
          ]}
          onPress={() => setIsChecked(!isChecked)}
        >
          <Text
            style={[
              styles.checkboxText,
              { color: isChecked ? "#fff" : "#000" },
            ]}
          >
            {isChecked ? "✔" : ""} I accept the Privacy policy
          </Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        style={[
          styles.button,
          {
            backgroundColor:
              isChecked &&
              validateEmail() &&
              validatePhoneNumber() &&
              validatePassword()
                ? "#3740ff"
                : "#ccc",
          },
        ]}
        onPress={handleNextPress}
        disabled={
          !isChecked ||
          !validateEmail() ||
          !validatePhoneNumber() ||
          !validatePassword()
        }
      >
        <Text style={styles.buttonText}>Next</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  logo: {
    fontSize: 30,
    color: "#3740ff",
    fontWeight: "bold",
    fontStyle: "italic",
    textAlign: "center",
    textShadowColor: "#fff",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
    letterSpacing: 1,
    lineHeight: 30,
  },
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    margin: 10,
    width: 200,
    paddingHorizontal: 10,
  },
  button: {
    width: 100,
    height: 40,
    justifyContent: "center",
    borderRadius: 4,
    marginBottom: 12,
  },
  buttonText: {
    textAlign: "center",
    fontSize: 15,
    color: "#fff",
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  checkboxText: {
    textDecorationLine: "underline",
  },
  textArea: {
    marginBottom: 10,
    alignItems: "center",
  },
});

export default Home;
