// import React from "react";
// import { StyleSheet, View, Text, Dimensions } from "react-native";

// import { FlatList } from "react-native-gesture-handler";

// const { width, height } = Dimensions.get("window");

// const FlatListComponent = ({ listBmi, getBackground, resultBmi }) => {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Últimos resultados</Text>
//       <FlatList
//         data={listBmi}
//         renderItem={({ item }) => {
//           return (
//             <Text style={[styles.text, { color: getBackground(resultBmi) }]}>
//               {item.bmiResult}
//             </Text>
//           );
//         }}
//         keyExtractor={(item) => item.id}
//       ></FlatList>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     borderRadius: 10,
//     backgroundColor: "#fafafa",
//     alignItems: "center",
//     paddingVertical: height * 0.01,
//     paddingHorizontal: width * 0.04,
//     marginVertical: height * 0.01,
//     gap: width * 0.02,
//   },
//   title: {
//     fontSize: width * 0.06,
//     fontWeight: "bold",
//   },
//   text: {
//     flexShrink: 1,
//     fontWeight: "500",
//     fontSize: width * 0.05,
//     color: "#333",
//   },
// });

// export default FlatListComponent;

import React from "react";
import { StyleSheet, View, Text, Dimensions } from "react-native";
import { FlatList } from "react-native-gesture-handler";

const { width, height } = Dimensions.get("window");

const getBackgroundColorByIMC = (resultBmi) => {
  if (resultBmi >= 18.5 && resultBmi < 25) {
    return "rgb(64, 255, 74)"; // Verde
  } else if (resultBmi >= 25 && resultBmi < 30) {
    return "rgb(255, 255, 0)"; // Amarelo
  } else if (resultBmi >= 30) {
    return "rgb(255, 64, 64)"; // Vermelho
  }
  return "rgb(204, 254, 248)"; // Cor padrão
};

const FlatListComponent = ({ listBmi }) => {
  const reversedList = [...listBmi].reverse();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Últimos resultados</Text>
      <FlatList
        data={reversedList}
        renderItem={({ item }) => {
          const color = getBackgroundColorByIMC(parseFloat(item.bmiResult));
          return <Text style={[styles.text, { color }]}>{item.bmiResult}</Text>;
        }}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    backgroundColor: "#000",
    alignItems: "center",
    paddingVertical: height * 0.01,
    paddingHorizontal: width * 0.04,
    marginBottom: height * 0.04,
    gap: width * 0.02,
  },
  title: {
    fontSize: width * 0.06,
    fontWeight: "bold",
    color: "#fafafa",
  },
  text: {
    flexShrink: 1,
    fontWeight: "500",
    fontSize: width * 0.05,
  },
});

export default FlatListComponent;
