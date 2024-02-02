import { StatusBar } from "expo-status-bar";
import { ImageBackground, SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import background from "./assets/background.jpg";
import Home from "./pages/Home";

export default function App() {
  return (
    <SafeAreaView >
      <ScrollView>
        <View style={styles.container}>
          <ImageBackground
            source={background}
            resizeMode="cover"
            style={styles.image}
          >
            <Home></Home>
            <StatusBar style="auto" />
          </ImageBackground>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 820
  },
  image: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
