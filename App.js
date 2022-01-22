import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";

// import HomeScreen from "./src/screens/HomeScreen/homeScreen";
import CoinDetailsScreen from "./src/screens/CoinDetailsScreen/coinDetailsScreen";

export default function App() {

  // console.log(cryptoCurrencies);

  return (
    <View style={styles.container}>

      {/* HomeScreen of the app */}
      {/* <HomeScreen /> */}

      {/* CoinDetailsScreen of the app */}
      <CoinDetailsScreen />

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
