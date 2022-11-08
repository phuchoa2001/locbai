import React, { useState } from "react";
import styled from "styled-components";
import { InputNumber } from "antd";
import { useSelector } from "react-redux";

import { filterConsecutivePairsCards } from "../../common/filterCard";

const LobbyStyles = styled.div`
  .BoxInput span {
    margin: 0px 5px;
    font-weight: 600;
  }
  .BoxInput span:nth-child(1) {
    margin-left: 0px;
  }
  .list {
    display: flex;
    flex-wrap: wrap;
    .item {
      width: 50%;
      padding-right: 10px;
      margin: 10px 0px;
    }
  }
`;

function ConsecutivePairsCards(props) {
  const [number, setNumber] = useState(3);
  const Cards = useSelector((state) => state.Card.TotalCards);
  const arrNew = filterConsecutivePairsCards(number, Cards);

  const handleChange = (value) => setNumber(value);
  return (
    <LobbyStyles>
      <div className="action">
        <div className="BoxInput">
          <InputNumber min={3} max={6} value={number} onChange={handleChange} />
          <span> đôi thông có </span>
        </div>
      </div>
      <div className="list">
        {arrNew.map((item, index) => (
          <p key={index} className="item">
            [{item.to}] đến [{item.end}] còn lại : {item.amount}
          </p>
        ))}
      </div>
    </LobbyStyles>
  );
}

export default ConsecutivePairsCards;
