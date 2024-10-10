import React from "react";
import Icon from "react-native-vector-icons/Ionicons";
import { Text, View } from "react-native";
import styles from "./style";

const Title = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>IMC Calculator</Text>
      <Icon name="color-filter-outline" size={60} color="#000" />
    </View>
  );
};

export default Title;
