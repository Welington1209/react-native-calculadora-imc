import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    padding: 20,
    gap: 1,
    justifyContent: "center",
  },
  title: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: width * 0.085,
    marginBottom: height * 0.02
  },
  text: {
    fontWeight: "600",
    textAlign: "center",
    fontSize: width * 0.06,
  },
  shareBtn: {
    width: "50%",
    paddingHorizontal: width * 0.04,
    paddingVertical: height * 0.01,
    backgroundColor: "rgb(22, 22, 22)",
    borderRadius: 10,
    margin: "auto",
    marginVertical: height * 0.04
  },
  shareBtnView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 5,
  },
  btn: {
    paddingHorizontal: width * 0.04,
    paddingVertical: height * 0.01,
    backgroundColor: "rgb(22, 22, 22)",
    borderRadius: 10,
  },
  btnView: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  textBtn: {
    fontSize: width * 0.05,
    fontWeight: "bold",
    textAlign: "center",
    color: "#fafafa",
    lineHeight: width * 0.05,
  },
});

export default styles;
