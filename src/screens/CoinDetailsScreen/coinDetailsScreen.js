import React from "react";
import { View } from "react-native";

import Coin from "../../../assets/mockData/crypto.json";
import CoinDetailsScreenHeader from "./components/CoinDetailsHeader/coinDetailsScreenHeader";

const CoinDetailsScreen = () => {
  
    // destructuring
  const {
    image: { small },
    name,
    symbol,
    market_data: { market_cap_rank },
  } = Coin;

  return (
    <View>

      {/* Custom Header Bar */}
      <CoinDetailsScreenHeader
        image={small}
        symbol={symbol}
        market_cap_rank={market_cap_rank}
      />

    </View>
  );
};

export default CoinDetailsScreen;
