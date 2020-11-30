import React from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import * as LocalAuthentication from "expo-local-authentication";

const LocalAuthenticationScreen = (props: { navigateToHome: Function }) => {
  const authenticate = async () => {
    LocalAuthentication.authenticateAsync({
      promptMessage: "For better security",
    })
      .then(() => {
        props.navigateToHome();
      })
      .catch(() => {
        props.navigateToHome();
      });
  };

  return (
    <View style={styles.container}>
      <View style={styles.faceContainer}>
        <Image
          source={require("../../../assets/faceid.png")}
          style={styles.faceImage}
        />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.loginText}>Login in with Face ID</Text>
        <Text style={styles.descriptionText}>
          Use your Face ID for faster, easier access to sign in.
        </Text>
      </View>
      <View style={styles.flex}>
        <TouchableOpacity style={styles.faceBtn} onPress={authenticate}>
          <Text style={styles.faceText}>Use Face ID</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.notBtn}>
          <Text style={styles.notText}>Not Now</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LocalAuthenticationScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
    justifyContent: "space-between",
    backgroundColor: "#fff",
  },
  faceContainer: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  faceImage: {
    width: 140,
    height: 140,
    tintColor: "black",
  },
  textContainer: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  loginText: {
    color: "#423175",
    fontSize: 16,
    fontWeight: "500",
  },
  descriptionText: {
    color: "#000",
    fontSize: 12,
    fontWeight: "300",
    marginTop: 8,
  },
  flex: {
    flex: 1,
  },
  faceBtn: {
    backgroundColor: "#423175",
    borderRadius: 4,
    alignItems: "center",
    marginHorizontal: 20,
    padding: 16,
  },
  faceText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "700",
  },
  notBtn: {
    borderColor: "#423175",
    borderWidth: 1,
    borderRadius: 4,
    alignItems: "center",
    marginHorizontal: 20,
    padding: 16,
    marginTop: 8,
  },
  notText: {
    color: "#423175",
    fontSize: 16,
    fontWeight: "700",
  },
});
