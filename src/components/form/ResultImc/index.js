import React from "react";
import { Text, View, TouchableOpacity, Share } from "react-native";

import Reminders from "../reminders";

import Icon from "react-native-vector-icons/Ionicons";

import styles from "./style";
import FlatListComponent from "./FlatList";

const getBackgroundColorByIMC = (resultBmi) => {
  if (resultBmi >= 18.5 && resultBmi < 25) {
    return "rgb(64, 255, 74)";
  } else if (resultBmi >= 25 && resultBmi < 30) {
    return "rgb(255, 255, 0)";
  } else if (resultBmi >= 30) {
    return "rgb(255, 64, 64)";
  }
  return "rgb(204, 254, 248)";
};

const ResultImc = ({ resultBmi, messageState, onClose, flatListBmi }) => {
  const handleShare = async () => {
    try {
      await Share.share({
        message: `Meu IMC é ${resultBmi}! 💪 Confira como está sua saúde e calcule o seu também. Baixe o app e comece sua jornada! 📲 https://expo.dev/artifacts/eas/jVy9mgaeG5pqhPo6zKhSQK.apk`,
        url: "https://expo.dev/artifacts/eas/jVy9mgaeG5pqhPo6zKhSQK.apk",
        title: "Compartilhando meu Imc",
      });
    } catch (error) {
      alert("Erro ao compartilhar" + error.message);
    }
  };

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: getBackgroundColorByIMC(resultBmi) },
      ]}
    >
      <Text style={styles.title}>Seu IMC é: {resultBmi}</Text>

      <Text style={styles.text}>{messageState}</Text>

      <TouchableOpacity
        style={styles.shareBtn}
        onPress={() => handleShare(resultBmi)}
        accessibilityLabel="Compartilhar"
        accessibilityHint="Abre opções para compartilhar seu resultado"
      >
        <View style={styles.shareBtnView}>
          <Icon name="logo-whatsapp" size={30} color="#fafafa" />
          <Text style={styles.textBtn}>Compartilhar</Text>
        </View>
      </TouchableOpacity>

      <FlatListComponent listBmi={flatListBmi} />

      {/* <Reminders /> */}

      <TouchableOpacity
        style={styles.btn}
        onPress={onClose}
        accessibilityLabel="Voltar"
        accessibilityHint="Retorna para a tela anterior"
      >
        <View style={styles.btnView}>
          <Icon name="arrow-back-circle" size={40} color="orange" />
          <Text style={styles.textBtn}>Voltar</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default ResultImc;
