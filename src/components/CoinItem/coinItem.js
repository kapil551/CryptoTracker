import React from "react";
import { Image, View, Text } from "react-native";

import { AntDesign } from "@expo/vector-icons";

import styles from "./coinItemStyles";

// accessing the props using destructuring
const CoinItem = ({ marketCoin }) => {
  // console.log(marketCoin);

  // destructuring 
  const {
    name,
    symbol,
    current_price,
    market_cap_rank,
    price_change_percentage_24h,
    market_cap,
    image
  } = marketCoin;

  return (
    <View style={styles.coinContanier}>
      <Image
        source={{
          uri: image,
        }}
        style={{
          height: 30,
          width: 30,
          marginRight: 10,
          alignSelf: "center",
        }}
      />
      <View>
        <Text style={styles.title}> { name } </Text>

        <View style={{ flexDirection: "row" }}>
          <View style={styles.rankContainer}>
            <Text style={styles.coinRank}> { market_cap_rank } </Text>
          </View>
          <Text style={styles.text}> { symbol.toUpperCase() } </Text>
          <AntDesign
            name="caretdown"
            size={14}
            color="white"
            style={{ alignSelf: "center", marginRight: 5 }}
          />
          <Text style={styles.text}> { price_change_percentage_24h.toFixed(2) }% </Text>
        </View>
      </View>

      <View style={{ marginLeft: "auto", alignItems: 'flex-end' }}>
        <Text style={styles.title}> { current_price } </Text>
        <Text style={{ color: 'white'}}> MCap { market_cap } </Text>
      </View>
    </View>
  );
};

export default CoinItem;
