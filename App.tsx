import React, { useState, useEffect } from "react";
import { StyleSheet, View } from "react-native";
import Login from "./src/container/login";
import Stocks from "./src/container/stocks";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as firebase from "firebase";
import { firebaseConfig } from "./src/firebase";

export default function App() {
  const [isFirstTimeLogin, setIsFirstTimeLogin] = useState(true);
  const [showHome, setShowHome] = useState(false);

  useEffect(() => {
    getData();
    firebase.initializeApp(firebaseConfig);
  }, []);

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem("isFirstTimeLogin");
      if (value !== null) {
        setIsFirstTimeLogin(false);
      }
    } catch (e) {}
  };

  return (
    <View style={styles.container}>
      {!showHome ? (
        <Login
          navigateToHome={() => setShowHome(true)}
          isFirstTimeLogin={isFirstTimeLogin}
        />
      ) : (
        <Stocks />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#423175",
  },
});
