import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFunnelDollar} from "@fortawesome/free-solid-svg-icons";

export default function Toolbar ({coinData, dataFilter, setDataFilter}) {
   return (
      <label className="toolbar">
         <FontAwesomeIcon icon={faFunnelDollar} size="2x" />
         <select value={dataFilter} onChange={event => setDataFilter(event.target.value)}>
            <option key={0} value="all" defaultValue>All Coins</option>
            {coinData.map(coin => <option key={coin.name} value={coin.symbol}>{coin.name}</option>)}
         </select>
      </label>
   );
}