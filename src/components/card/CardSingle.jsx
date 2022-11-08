import React from "react";
import { Col, Row } from "antd";

import { useDispatch } from "react-redux";

import CardChid from "./CardChid";

import { deleteCard } from "../../redux/useCard";

function CardSingle({ name, amount, setIsModalOpen }) {
  const dispatch = useDispatch();
  const handleClick = (value, desc , player) => {
    dispatch(deleteCard({ value, desc , player }));
    setIsModalOpen(false);
  };
  return (
    <Row gutter={16}>
      {Array.from(new Array(4)).map(
        (_, index) =>
          index + 1 <= amount && (
            <Col span={12} key={index}>
              <CardChid
                name={name}
                desc={`${index + 1} lá ${name}`}
                onClick={(player) =>
                  handleClick(
                    Array.from(new Array(index + 1)).reduce(
                      (a, b) => [...a, name],
                      []
                    ),
                    `${index + 1} lá ${name}` , player
                  )
                }
              />
            </Col>
          )
      )}
    </Row>
  );
}

export default CardSingle;
