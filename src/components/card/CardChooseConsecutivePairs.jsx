import React from "react";
import { Col, Row } from "antd";
import { useSelector, useDispatch } from "react-redux";

import { filterChooseConsecutivePairs } from "../../common/filterCard";

import CardChid from "./CardChid";

import { deleteCard } from "../../redux/useCard";
import { GetCardStt } from "../../common/filterCard";

function CardChooseConsecutivePairs({ stt, name, setIsModalOpen }) {
  const dispatch = useDispatch();
  const Cards = useSelector((state) => state.Card.TotalCards);
  const list = filterChooseConsecutivePairs(Cards, stt);

  const handleClick = (value, desc, player) => {
    dispatch(deleteCard({ value, desc, player }));
    setIsModalOpen(false);
  };
  return (
    <Row gutter={16}>
      {list.map((item, index) => {
        const ArrNew = GetCardStt(stt - 1, item.stt).reduce(
          (a, b) => [...a, b.name],
          []
        );
        return (
          <Col span={12} key={index}>
            <CardChid
              name={item.name}
              desc={`${item.stt - stt + 1} đôi thông ${name} đến ${item.name}`}
              onClick={(player) =>
                handleClick(
                  [...ArrNew, ...ArrNew],
                  `${item.stt - stt + 1} đôi thông ${name} đến ${item.name}`,
                  player
                )
              }
            />
          </Col>
        );
      })}
    </Row>
  );
}

export default CardChooseConsecutivePairs;
