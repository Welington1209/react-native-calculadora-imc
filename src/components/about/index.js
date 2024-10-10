import React from "react";
import { useNavigation } from "@react-navigation/native";
import {
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
} from "react-native";

import Icon from "react-native-vector-icons/Ionicons";

import styles from "./style";

const About = () => {

  const navigation = useNavigation();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <ImageBackground
        style={styles.imageBackground}
        source={{
          uri: "https://media.istockphoto.com/id/1582361888/pt/foto/metallic-question-marks-illuminated-by-blue-and-pink-lights-on-blue-and-pink-background.jpg?s=2048x2048&w=is&k=20&c=phEo4Yg_2BnZIz4Ziv_SpjmJ_qBcFMEos1q2yO82sLI=",
        }}
      >
        <View style={styles.overlay}>
          <View>
            <Text style={styles.title}>Boas Vindas!</Text>

            <Text style={styles.text}>
              Olá! 👋 Seja bem-vindo ao nosso app de cálculo de IMC! Estamos
              aqui para te ajudar a entender melhor a sua saúde de forma prática
              e rápida.
            </Text>
          </View>

          <View>
            <Text style={styles.title}>Oque é Imc?</Text>

            <Text style={styles.text}>
              O Índice de Massa Corporal (IMC) é uma maneira simples de avaliar
              se o seu peso está adequado para a sua altura. Ele pode te ajudar
              a identificar se você está no peso ideal e a traçar metas para um
              estilo de vida mais saudável.
            </Text>
          </View>

          <View>
            <Text style={styles.title}>Vamos Começar!</Text>

            <Text style={styles.text}>
              Pronto para descobrir o seu IMC? É fácil e rápido! Clique no botão
              abaixo e inicie sua jornada em direção a uma vida mais saudável!
            </Text>
          </View>

          <Icon style={styles.icon} name="arrow-down" />

          <TouchableOpacity
            style={styles.btn}
            onPress={() => navigation.navigate("Form")}
            accessibilityLabel="Calcular IMC agora"
            accessibilityHint="Abre uma calculadora para você descobrir seu IMC."
          >
            <Text style={styles.textBtn}>Calcular agora!</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </ScrollView>
  );
};

export default About;
