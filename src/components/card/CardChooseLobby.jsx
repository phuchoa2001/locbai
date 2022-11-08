import React from "react";
import { Col, Row } from "antd";
import { useSelector, useDispatch } from "react-redux";

import { filterChooseLobby } from "../../common/filterCard";

import { GetCardStt } from "../../common/filterCard";

import { deleteCard } from "../../redux/useCard";

import CardChid from "./CardChid";

function CardChooseLobby({ stt, name, setIsModalOpen }) {
  const dispatch = useDispatch();

  const Cards = useSelector((state) => state.Card.TotalCards);
  const list = filterChooseLobby(Cards, stt);

  const handleClick = (value, desc, player) => {
    dispatch(deleteCard({ value, desc, player }));
    setIsModalOpen(false);
  };
  return (
    <Row gutter={16}>
      {list.map((item, index) => (
        <Col span={12} key={index}>
          <CardChid
            name={item.name}
            desc={`Sảnh ${name} đến ${item.name}`}
            onClick={(player) =>
              handleClick(
                GetCardStt(stt - 1, item.stt).reduce(
                  (a, b) => [...a, b.name],
                  []
                ),
                `Sảnh ${name} đến ${item.name}`,
                player
              )
            }
          />
        </Col>
      ))}
    </Row>
  );
}

export default CardChooseLobby;
