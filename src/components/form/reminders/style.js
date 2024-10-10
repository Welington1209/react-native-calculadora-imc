import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "rgb(62, 163, 231)",
    borderRadius: 10,
  },
  remindersContainer: {
    flexDirection: "row",
    borderRadius: 10,
    alignItems: "center",
    paddingVertical: height * 0.01,
    paddingHorizontal: width * 0.04,
    marginVertical: height * 0.01,
    gap: width * 0.04,
    backgroundColor: "#fafafa",
  },
  reminderTitle: {
    fontSize: width * 0.05,
    fontWeight: "bold",
    marginBottom: height * 0.015,
  },
  textView: {
    flexShrink: 1,
    fontWeight: "500",
    fontSize: width * 0.04,
    color: "#333",
  },
});

export default styles;
