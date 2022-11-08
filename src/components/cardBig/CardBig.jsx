import React from "react";
import { useSelector } from "react-redux";
import { Col, Row } from "antd";

import Card from "../card/Card";
import { filterCardBig } from "../../common/filterCard";

function CardBig(props) {
  const Cards = useSelector((state) => state.Card.TotalCards);
  const ListCard = filterCardBig(Cards);
  return (
    <Row gutter={16}>
      {ListCard.map((item, index) => (
        <Col span={5} key={index}>
          <Card {...item} disabled={!item.amount} />
        </Col>
      ))}
      <Col span={9}>
        <Card
          name={Cards[Cards.length - 1].name}
          amount={Cards[Cards.length - 1].amount}
          stt={Cards[Cards.length - 1].stt}
          disabled={!Cards[Cards.length - 1].amount}
        />
      </Col>
    </Row>
  );
}

export default CardBig;
