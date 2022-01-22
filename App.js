import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import CoinItem from "./src/components/CoinItem/coinItem";

export default function App() {
  return (
    <View style={styles.container}>
      
      {/* coinItem component */}
      <CoinItem name={'Bitcoin'} rank={'1'} />
      <CoinItem name={'Ethereum'} rank={'2'} />
      <CoinItem name={'Binance Coin'} rank={'3'} />

      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
    paddingTop: 50,
  },
});
