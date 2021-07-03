import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import axios from "axios";

import Charts from "./components/Charts";
import Navbar from "./components/Navbar";
import Toolbar from "./components/Toolbar";

import "./styles.scss";

const App = () => {
   const [coinData, setCoinData] = useState([]);
   const [filteredData, setFilteredData] = useState([]);
   const [dataFilter, setDataFilter] = useState("all");

   const filterProps = {
      coinData,
      dataFilter,
      setDataFilter
   };

   useEffect(() => {
      axios
         .get(
            "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=true"
         )
         .then(res => setCoinData(res.data))
         .catch(err => console.log(err));
   }, []);

   useEffect(() => {
      console.log(`Data Filter changed to: '${dataFilter}'`);
      let newData = [];
      
      if (coinData.length > 0) {
         if (dataFilter === "all") {
            newData = [...coinData];
         } else {
            newData = coinData.filter(coin => coin.symbol === dataFilter);
         }
   
         // console.log(`New Data: `, JSON.stringify(newData, null, 3));
         setFilteredData(newData);
      }
   }, [dataFilter, coinData]);

   return (
      <div className="App">
         <Navbar />
         <Toolbar {...filterProps} />
         <Charts coinData={filteredData} />
      </div>
   );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
