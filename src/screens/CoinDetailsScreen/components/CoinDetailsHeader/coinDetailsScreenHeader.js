import React from "react";
import { View, Text, Image } from "react-native";

import { Ionicons, EvilIcons } from "@expo/vector-icons";

import styles from "./coinDetailsScreenHeaderStyles";

const CoinDetailsScreenHeader = (props) => {

  const { 
      image, 
      symbol, 
      market_cap_rank, 
  } = props;

  return (
    <View style={styles.headerContainer}>
      {/* Custom Header Bar */}
      <Ionicons name="chevron-back-sharp" size={30} color="white" />

      <View style={styles.tickerContainer}>
        <Image source={{ uri: image }} style={{ width: 25, height: 25 }} />
        <Text style={styles.tickerTitle}> {symbol.toUpperCase()} </Text>

        <View style={styles.rankContainer}>
          <Text style={{ color: "white", fontWeight: "bold", fontSize: 15 }}>
            {" "}
            #{market_cap_rank}{" "}
          </Text>
        </View>
      </View>

      <EvilIcons name="user" size={30} color="white" />
    </View>
  );
};

export default CoinDetailsScreenHeader;
