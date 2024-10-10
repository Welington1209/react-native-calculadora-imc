import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fafafa",
    alignItems: "center",
    margin: "auto",
    borderRadius: 5,
    padding: width * 0.06,
  },
  title: {
    fontSize: 40,
    fontWeight: "bold",
    textAlign: "center",
    paddingVertical: width * 0.02,
    maxWidth: "70%",
  },
});

export default styles;
