import React from "react";

import { BarIcon } from "../../assets/icon";

import LobbyCards from "../lobbyCards/lobbyCards";
import ConsecutivePairsCards from "../ConsecutivePairsCards/ConsecutivePairsCards";
import FourOfAKind from "../fourOfAKind/FourOfAKind";

function FilterCard(props) {
  return (
    <div>
      <h3 className="title">
        {" "}
        <BarIcon />
        Lọc Sảnh , Đôi thông , ...
      </h3>
      <LobbyCards />
      <ConsecutivePairsCards />
      <FourOfAKind />
    </div>
  );
}

export default FilterCard;
