import React from "react";
import { View, StyleSheet } from "react-native";

import About from "../about";

const Main = () => {
  return (
    <View style={styles.container}>
      <About />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Main;
