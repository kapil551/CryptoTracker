import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, FlatList } from "react-native";
import CoinItem from "./src/components/CoinItem/coinItem";

// import the mock data from assets/mockData folder
import cryptoCurrencies from './assets/mockData/cryptocurrencies.json';


export default function App() {

  // console.log(cryptoCurrencies);

  return (
    <View style={styles.container}>

      <FlatList 
        data={cryptoCurrencies}
        renderItem={({ item }) => (

          <CoinItem name={'Bitcoin'} marketCoin={item} />

        )}
        keyExtractor={item => item.id}
      />

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
