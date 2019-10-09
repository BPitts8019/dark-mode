import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFunnelDollar} from "@fortawesome/free-solid-svg-icons";

export default function Toolbar () {
   return (
      <label className="toolbar">
         <FontAwesomeIcon icon={faFunnelDollar} size="2x" />
         <select>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
         </select>
      </label>
   );
}