import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  coinName: {
    color: "white",
    fontSize: 15,
  },
  currentPrice: {
    color: "white",
    fontSize: 30,
    fontWeight: "600",
    letterSpacing: 1,
  },
  priceContainer: {
    padding: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  pricePercentageChange: {
    color: "white",
    fontSize: 17,
    fontWeight: "500",
  },
});

export default styles;
