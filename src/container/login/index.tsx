import React from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import * as GoogleSignIn from "expo-google-sign-in";
import AsyncStorage from "@react-native-async-storage/async-storage";
import LocalAuthentication from "../local-authentication";

class Login extends React.Component {
  componentDidMount() {
    if (this.props.isFirstTimeLogin) {
      this.initAsync();
    }
  }

  initAsync = async () => {
    await GoogleSignIn.initAsync({
      clientId:
        "510522742433-4v46r4rhtgidovihdhohh0fi8cohmnmf.apps.googleusercontent.com",
    });
  };

  signInAsync = async () => {
    try {
      await GoogleSignIn.askForPlayServicesAsync();
      await GoogleSignIn.signInAsync();
      this.storeData();
      this.props.navigateToHome();
    } catch ({ message }) {
      this.storeData();
      this.props.navigateToHome();
    }
  };

  storeData = async () => {
    try {
      await AsyncStorage.setItem("isFirstTimeLogin", "true");
    } catch (e) {}
  };

  render() {
    return (
      <>
        {this.props.isFirstTimeLogin ? (
          <View style={styles.container}>
            <TouchableOpacity
              style={styles.googleButton}
              onPress={() => this.signInAsync()}
            >
              <Image
                source={require("../../../assets/google.png")}
                style={styles.googleIcon}
              />
              <Text style={styles.googleIconText}>Sign In with Google</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <LocalAuthentication navigateToHome={this.props.navigateToHome} />
        )}
      </>
    );
  }
}

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  googleButton: {
    marginHorizontal: 20,
    backgroundColor: "#72688F",
    paddingVertical: 16,
    paddingHorizontal: 24,
    borderRadius: 28,
    flexDirection: "row",
    alignItems: "center",
  },
  googleIcon: {
    width: 20,
    height: 20,
    tintColor: "#fff",
    marginRight: 12,
  },
  googleIconText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "700",
  },
});
