import React, { useState, useEffect, useRef } from "react";
import { View, Text, Animated, TouchableOpacity } from "react-native";

import Icon from "react-native-vector-icons/Ionicons";

import styles from "./style";

const ErrorPage = ({ messageResultBmi, onClose }) => {
  const [visible, setVisible] = useState(true);
  const fadeAnim = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: visible ? 1 : 0,
      duration: 700,
      useNativeDriver: true,
    }).start();
  }, [visible]);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible((prev) => !prev);
    }, 800);

    return () => clearInterval(interval);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{messageResultBmi}</Text>

      <Animated.View style={{ opacity: fadeAnim }}>
        <Icon name="alert-circle-outline" size={200} color="#fafafa" />
      </Animated.View>

      <TouchableOpacity style={styles.btn} onPress={onClose}>
        <View style={styles.btnView}>
          <Icon name="arrow-back-circle" size={40} color="orange" />
          <Text style={styles.textBtn}>Voltar</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default ErrorPage;
