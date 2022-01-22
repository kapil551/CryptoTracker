import React from "react";
import { FlatList } from "react-native";

import CoinItem from "../../components/CoinItem/coinItem";
// import the mock data from assets/mockData folder
import cryptoCurrencies from '../../../assets/mockData/cryptocurrencies.json';
const HomeScreen = () => {

    // console.log(cryptoCurrencies);
    return (

        <FlatList
        data={cryptoCurrencies}
        renderItem={({ item }) => <CoinItem name={"Bitcoin"} marketCoin={item} />}
        keyExtractor={(item) => item.id}
        />

    );
};

export default HomeScreen;
