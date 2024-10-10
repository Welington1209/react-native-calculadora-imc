import React, { useEffect } from "react";
import { Text, View, ActivityIndicator} from "react-native";

import Title from "../../title";

import styles from "./style";

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace("Main");
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Title />

      <ActivityIndicator style={styles.load} size="large" color="#ffffff" />

      <Text style={styles.text}>Developed by Welington Silva</Text>
    </View>
  );
};

export default SplashScreen;
