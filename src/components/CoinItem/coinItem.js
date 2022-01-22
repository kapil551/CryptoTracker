import React from "react";
import { Image, View, Text } from "react-native";

import { AntDesign } from "@expo/vector-icons";

import styles from "./coinItemStyles";

        // accessing the props using destructuring
const CoinItem = ({ name, rank }) => {

  // console.log(name);
  // console.log(rank);

  return (

    <View style={styles.coinContanier}>
      <Image
        source={{
          uri: "https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579",
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
            <Text style={styles.coinRank}> { rank } </Text>
          </View>
          <Text style={styles.text}> BTC </Text>
          <AntDesign
            name="caretdown"
            size={14}
            color="white"
            style={{ alignSelf: "center", marginRight: 5 }}
          />
          <Text style={styles.text}> 0.63% </Text>
        </View>
      </View>

      <View style={{ marginLeft: "auto" }}>
        <Text style={styles.title}> 56265.09 </Text>
        <Text style={styles.text}> MCap 10.76 T</Text>
      </View>
    </View>

  );
};


export default CoinItem;
