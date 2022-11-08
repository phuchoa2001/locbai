import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

import { filterFourOfAKind } from "../../common/filterCard";

const LobbyStyles = styled.div`
  .heading {
    font-weight: 600;
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

function FourOfAKind(props) {
  const Cards = useSelector((state) => state.Card.TotalCards);
  const arrNew = filterFourOfAKind(Cards);

  return (
    <LobbyStyles>
      <p className="heading">Tứ quý</p>
      <div className="list">
        {arrNew.map((item, index) => (
          <p key={index} className="item">
            lá [{item.name}] còn lại : {item.amount / 4}
          </p>
        ))}
      </div>
    </LobbyStyles>
  );
}

export default FourOfAKind;
