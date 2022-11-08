import React from "react";
import { useSelector } from "react-redux";
import { Col, Row } from "antd";

import Card from "../card/Card";

import { filterCardSmall } from "../../common/filterCard";

function CardSmall(props) {
  const Cards = useSelector((state) => state.Card.TotalCards);
  const ListCard = filterCardSmall(Cards);
  return (
    <Row gutter={16}>
      {ListCard.map((item, index) => (
        <Col span={4} sm={6} key={index}>
          <Card {...item} disabled={!item.amount} />
        </Col>
      ))}
    </Row>
  );
}

export default CardSmall;
