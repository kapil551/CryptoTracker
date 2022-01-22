import React from "react";
import { View, Text } from "react-native";

import Coin from "../../../assets/mockData/crypto.json";
import CoinDetailsScreenHeader from "./components/CoinDetailsHeader/coinDetailsScreenHeader";

import styles from "./cointDetailsScreenStyles";

import { AntDesign } from "@expo/vector-icons";

const CoinDetailsScreen = () => {
  // destructuring
  const {
    image: { small },
    name,
    symbol,
    market_data: {
      market_cap_rank,
      current_price,
      price_change_percentage_24h,
    },
  } = Coin;

  const percentageChangeColor = price_change_percentage_24h < 0 ? '#ea3943' : '#16c784';

  const IconName = price_change_percentage_24h < 0 ? "caretdown" : "caretup";

  return (
    <View style={{ paddingHorizontal: 10 }}>
      {/* Custom Header Bar */}
      <CoinDetailsScreenHeader
        image={small}
        symbol={symbol}
        market_cap_rank={market_cap_rank}
      />

      {/* price tag component */}
      <View style={styles.priceContainer}>
        <View>
          <Text style={styles.coinName}>{name}</Text>
          <Text style={styles.currentPrice}>{`${current_price.usd} US$`}</Text>
        </View>
        <View style={{ backgroundColor: percentageChangeColor, borderRadius: 5, paddingHorizontal: 8, paddingVertical: 4, flexDirection: "row" }}>
            <AntDesign
                name={IconName}
                size={14}
                color={ "white" }
                style={{ alignSelf: "center", marginRight: 5 }}
            />
            <Text style={styles.pricePercentageChange}>
                {price_change_percentage_24h.toFixed(2)}%
            </Text>
        </View>
      </View>
    </View>
  );
};

export default CoinDetailsScreen;
