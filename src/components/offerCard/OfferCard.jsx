import React, { useEffect, useState } from "react";
import { Modal, Button } from "antd";
import { Col, Row } from "antd";

import { useSelector, useDispatch } from "react-redux";

import { offerCard } from "../../common/filterCard";

import CardChid from "../card/CardChid";

import { deleteCard, resetOffer } from "../../redux/useCard";

function OfferCardComponents(props) {
  const { offer, TotalCards } = useSelector((state) => state.Card);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const dispatch = useDispatch();

  const List = offerCard(TotalCards, offer);

  useEffect(() => {
    offer.status !== "nothing" && !!List.length
      ? setIsModalOpen(true)
      : setIsModalOpen(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [offer.status , offer.arr]);

  const handleCancel = () => {
    dispatch(resetOffer());
    setIsModalOpen(false);
  };
  return (
    <Modal
      title={`Đề xuất bài`}
      open={isModalOpen}
      onCancel={handleCancel}
      footer={
        <Button type="primary" danger onClick={handleCancel}>
          Bỏ lướt
        </Button>
      }
    >
      <Row gutter={16}>
        {List.map((item, index) => (
          <Col span={12} key={index}>
            <CardChid
              name={item.name}
              desc={item.desc}
              onClick={(player) =>
                dispatch(
                  deleteCard({ value: item.arr, desc: item.desc, player })
                )
              }
            />
          </Col>
        ))}
      </Row>
    </Modal>
  );
}

export default OfferCardComponents;
