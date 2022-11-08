import React from "react";

import { useSelector } from "react-redux";
import styled from "styled-components";

import Card from "../card/Card";

import { HomeIcon } from "../../assets/icon";

const ListMobileStyles = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 8px;
`;

function ListMobileCard(props) {
  const Cards = useSelector((state) => state.Card.TotalCards);
  return (
    <>
    <h3 className="title">
        <HomeIcon />
        Bộ bài còn lại
      </h3>
    <ListMobileStyles>
      {Cards.map((item, index) => (
        <div className="item" key={index}>
          <Card {...item} disabled={!item.amount} />
        </div>
      ))}
    </ListMobileStyles>
    </>
  );
}

export default ListMobileCard;
