import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  SafeArearViewContainer: {
    flex: 1,
  },
  scrollViewContainer: {
    flexGrow: 1,
    minWidth: "100%",
  },
  container: {
    flex: 1,
    alignItems: "center",
    height: "100%",
    paddingHorizontal: width * 0.02,

    paddingVertical: 10,
  },
  text: { fontSize: width * 0.06, marginVertical: height * 0.01 },

  inputsControl: { width: "100%", marginBottom: height * 0.03 },
  inputText: {
    fontSize: width * 0.05,
    borderWidth: 2,
    borderColor: "#999",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    borderRadius: 5,
    backgroundColor: "rgb(238,238,238)",
    textAlign: "center",
    marginBottom: height * 0.04,
  },

  buttonControl: {
    flexDirection: "row-reverse",
    width: "100%",
    justifyContent: "space-between",
    marginBottom: height * 0.06,
  },

  btn: {
    backgroundColor: "rgb(62, 163, 231)",
    borderRadius: 10,
    paddingHorizontal: width * 0.05,
    alignItems: "center",
    justifyContent: "center",
  },
  textBtn: {
    lineHeight: width * 0.05,
    fontSize: width * 0.05,
    color: "#fafafa",
    fontWeight: "bold",
    textAlign: "center",
  },

  btnBack: {
    backgroundColor: "rgb(22, 22, 22)",
    borderRadius: 10,
    alignSelf: "flex-start",
    paddingHorizontal: width * 0.03,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: height * 0.012,
  },
  btnView: {
    flexDirection: "row",
    gap: width * 0.01,
    alignItems: "center",
  },
  textBtnBack: {
    fontSize: width * 0.05,
    lineHeight: width * 0.05,
    fontWeight: "bold",
    color: "#fafafa",
  },
});

export default styles;
