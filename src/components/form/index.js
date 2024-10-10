import React from "react";
import { useNavigation } from "@react-navigation/native";
import { useState, useEffect } from "react";

import {
  Text,
  View,
  TextInput,
  Modal,
  TouchableOpacity,
  ScrollView,
  Vibration,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
} from "react-native";

import ResultImc from "./ResultImc";
import ErrorPage from "./error";
import { SafeAreaView } from "react-native-safe-area-context";

import Icon from "react-native-vector-icons/Ionicons";

import styles from "./style";
import Reminders from "./reminders";

const Form = ({ onClose }) => {
  const [height, setHeight] = useState(null);
  const [weight, setWeight] = useState(null);

  const [messageBmi, setMessageBmi] = useState(null);
  const [messageState, setMessageState] = useState(null);

  const [bmi, setBmi] = useState(null);
  const [bmiList, setBmiList] = useState([]);
  const [textButton, setTextButton] = useState("Calcular IMC");

  const [modalVisible, setModalVisible] = useState(false);
  const [errorPage, setErrorPage] = useState(false);
  const [showReminders, setShowReminders] = useState(true);

  const navigation = useNavigation();

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      "keyboardDidShow",
      () => {
        setShowReminders(false); // Esconde o componente de lembretes
      }
    );

    const keyboardDidHideListener = Keyboard.addListener(
      "keyboardDidHide",
      () => {
        setShowReminders(true); // Mostra o componente de lembretes
      }
    );

    // Limpeza dos listeners ao desmontar
    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);

  const checkState = (res) => {
    let stateMessage = "";
    if (res < 18.5) {
      stateMessage = "Cuidado! Você está abaixo do peso.";
    } else if (res > 18.5 && res < 25) {
      stateMessage = "Parabéns! Você está no seu peso ideal.";
    } else if (res > 24.9 && res < 29.9) {
      stateMessage = "Cuidado você está acima do seu peso ideal.";
    } else if (res > 29.9 && res < 34.9) {
      stateMessage = "Muito cuidado! Você está com obesidade moderada.";
    } else if (res > 34.9) {
      stateMessage = "Muito cuiado! Você está com obesidade severa.";
    } else if (!res) {
      stateMessage = "";
    }

    setMessageState(stateMessage);
  };

  const bmiCalculator = () => {
    const weightValue = parseFloat(weight);
    const heightValueStr = height.replace(",", ".");
    const heightValue = parseFloat(heightValueStr);

    const res = weightValue / (heightValue * heightValue);

    setBmiList((arr) => [
      ...arr,
      { id: new Date().getTime(), bmiResult: res.toFixed(2) },
    ]);

    checkState(res);

    return res.toFixed(2);
  };

  const handleVibration = () => {
    Vibration.vibrate(600);
  };

  const isValidNumber = (value) => !isNaN(value) && value > 0;

  const setValues = () => {
    setBmi(bmiCalculator());
    setHeight(null);
    setWeight(null);
    setTextButton("Calcular Novamente");
    setModalVisible(true);
    return;
  };

  const validationBmi = () => {
    const formattedHeight = height ? height.replace(",", ".") : null;

    const isWeightValid = isValidNumber(weight);
    const isHeightValid = isValidNumber(formattedHeight);

    if (isWeightValid && isHeightValid) {
      setValues();
      setErrorPage(false);
    } else {
      setBmi(null);

      if (!isWeightValid && !isHeightValid) {
        setMessageBmi(
          "Parece que você esqueceu de preencher seu peso e sua altura."
        );
      } else if (!isWeightValid) {
        setMessageBmi("Parece que você esqueceu de preencher seu peso.");
      } else if (!isHeightValid) {
        setMessageBmi("Parece que você esqueceu de preencher sua altura.");
      }

      setErrorPage(true);
      handleVibration();
    }
  };

  const closeModal = () => {
    setModalVisible(false);
    setErrorPage(false);
  };

  return (
    <SafeAreaView style={styles.SafeArearViewContainer}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={Platform.OS === "ios" ? 100 : 0}
      >
        <ScrollView contentContainerStyle={styles.scrollViewContainer}>
          <View style={styles.container}>
            <View style={styles.inputsControl}>
              <Text style={styles.text}>Altura</Text>
              <TextInput
                placeholder="Digite sua altura. Ex.: 1.75"
                keyboardType="numeric"
                value={height}
                onChangeText={setHeight}
                style={styles.inputText}
                accessibilityLabel="Altura"
                accessibilityHint="Digite sua altura. Exemplo 1.75"
              />

              <Text style={styles.text}>Peso</Text>
              <TextInput
                placeholder="Digite seu peso. Ex.: 70"
                keyboardType="numeric"
                value={weight}
                onChangeText={setWeight}
                style={styles.inputText}
                accessibilityLabel="Peso"
                accessibilityHint="Digite seu peso em quilos. Exemplo 70"
              />
            </View>

            <View style={styles.buttonControl}>
              <TouchableOpacity
                onPress={() => validationBmi()}
                style={styles.btn}
              >
                <Text style={styles.textBtn}>{textButton}</Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => navigation.goBack()}
                style={styles.btnBack}
              >
                <View style={styles.btnView}>
                  <Icon name="arrow-back-circle" size={30} color="orange" />
                  <Text style={styles.textBtnBack}>Voltar</Text>
                </View>
              </TouchableOpacity>
            </View>

            <Modal
              animationType="slide"
              visible={errorPage}
              onRequestClose={() => setErrorPage(false)}
            >
              <ErrorPage messageResultBmi={messageBmi} onClose={closeModal} />
            </Modal>

            <Modal
              animationType="slide"
              visible={modalVisible}
              onRequestClose={() => setModalVisible(false)}
            >
              <View>
                <ResultImc
                  messageResultBmi={messageBmi}
                  messageState={messageState}
                  resultBmi={bmi}
                  onClose={closeModal}
                  flatListBmi={bmiList}
                />
              </View>
            </Modal>
          </View>

          {showReminders && <Reminders />}
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default Form;
