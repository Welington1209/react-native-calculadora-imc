import React from "react";
import { View, Text, ScrollView } from "react-native";

import Icon from "react-native-vector-icons/Ionicons";

import styles from "./style";

const Reminders = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.reminderTitle}>Hábitos que vão te ajudar a manter a saúde em dia:</Text>

      <View style={styles.remindersContainer}>
        <Icon name="water" size={40} color="blue" />
        <Text style={styles.textView}>
          Beba bastante água ao longo do dia para manter seu corpo funcionando
          corretamente.
        </Text>
      </View>

      <View style={styles.remindersContainer}>
        <Icon name="barbell-outline" size={40} color="#111" />
        <Text style={styles.textView}>
          Dedique pelo menos 30 minutos por dia a atividades físicas, como
          caminhada, corrida ou yoga, para manter a saúde cardiovascular e o
          bem-estar geral.
        </Text>
      </View>

      <View style={styles.remindersContainer}>
        <Icon name="nutrition-outline" size={40} color="rgb(255, 64, 64)" />
        <Text style={styles.textView}>
          Inclua uma variedade de frutas, vegetais, proteínas magras e grãos
          integrais em suas refeições para garantir que seu corpo receba os
          nutrientes necessários.
        </Text>
      </View>

      <View style={styles.remindersContainer}>
        <Icon name="bed-outline" size={40} color="orange" />
        <Text style={styles.textView}>
          Priorize de 7 a 8 horas de sono por noite para ajudar na recuperação
          física e mental, melhorar a concentração e aumentar a energia ao longo
          do dia.
        </Text>
      </View>
    </ScrollView>
  );
};

export default Reminders;
