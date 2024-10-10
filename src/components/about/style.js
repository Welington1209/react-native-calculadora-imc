import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    minHeight: "100%",
  },
  imageBackground: {
    justifyContent: "center",
    minHeight: "100%",
  },
  title: {
    fontSize: 24,
    paddingVertical: 10,
    color: "#fafafa",
  },
  text: {
    fontSize: 19,
    lineHeight: 26,
    color: "#fafafa",
    fontWeight: "600",
  },
  icon: {
    textAlign: "center",
    fontSize: 40,
    color: "#fafafa",
    marginVertical: 10,
  },
  btn: {
    backgroundColor: "rgb(62, 163, 231)",
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  textBtn: {
    lineHeight: 25,
    fontSize: 25,
    color: "#fafafa",
    fontWeight: "bold",
    textAlign: "center",
  },

  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.85)",
    padding: 20,
    justifyContent: "space-around",
    minHeight: "100%",
  },
});

export default styles;
