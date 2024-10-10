import {
    StyleSheet,
  } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 10,
      backgroundColor: "rgb(255, 65, 50)",
      alignItems: "center",
      justifyContent: "space-evenly",
    },
    text: {
      fontSize: 25,
      color: "#fafafa",
      textAlign: "center",
      fontWeight: "600"
    },
    btn: {
      paddingHorizontal: 10,
      paddingVertical: 5,
      backgroundColor: "rgb(22, 22, 22)",
      borderRadius: 10,
    },
    btnView: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      gap: 20,
    },
    textBtn: {
      fontSize: 20,
      fontWeight: "bold",
      textAlign: "center",
      color: "#fafafa",
    },
  });

  export default styles