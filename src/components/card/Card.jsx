import React, { useState } from "react";
import { Modal, Tabs } from "antd";
import styled from "styled-components";

import CardSingle from "./CardSingle";
import CardChooseLobby from "./CardChooseLobby";
import CardChooseConsecutivePairs from "./CardChooseConsecutivePairs";

// import Player from "./Player";

const CardStyles = styled.div`
  border: 1px solid #333;
  border-radius: 8px;
  margin: 10px 0px;
  cursor: pointer;
  :hover {
    background: #aea9a9;
  }
  .box {
    & h3,
    & p {
      text-align: center;
    }
    & h3 {
      font-size: 50px;
    }
  }
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 50px 0px;
  &.disabled {
    background: #dddddd;
    pointer-events: none;
    cursor: default;
    text-decoration: none;
  }
  @media only screen and (max-width: 959px) {
    padding: 20px 0px;
    position: relative;
    .amount {
      position: absolute;
      right: 10px;
      bottom: 10px;
      background: #1890ff;
      color: #fff;
      display: block;
      border-radius: 2px;
      padding: 0px 5px;
    }
  }
`;

function Card({ name, amount, stt, disabled = false }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const itemsTow = [
    {
      label: "Lá đơn",
      key: "1",
      children: (
        <CardSingle
          name={name}
          amount={amount}
          setIsModalOpen={setIsModalOpen}
        />
      ),
    },
  ];

  const items = [
    {
      label: "Lá đơn",
      key: "1",
      children: (
        <CardSingle
          name={name}
          amount={amount}
          setIsModalOpen={setIsModalOpen}
        />
      ),
    },
    {
      label: "Sảnh",
      key: "2",
      children: (
        <CardChooseLobby
          name={name}
          stt={stt}
          amount={amount}
          setIsModalOpen={setIsModalOpen}
        />
      ),
    },
    {
      label: "Đôi thông",
      key: "3",
      children: (
        <CardChooseConsecutivePairs
          name={name}
          stt={stt}
          amount={amount}
          setIsModalOpen={setIsModalOpen}
        />
      ),
    },
  ];
  return (
    <>
      <CardStyles
        onClick={() => setIsModalOpen(true)}
        className={disabled ? "disabled" : ""}
      >
        <div className="box">
          <h3>{name}</h3>
          <p className="amount">Còn lại : {amount}</p>
        </div>
      </CardStyles>
      <Modal
        title={`Bạn đã chọn lá ${name}`}
        open={isModalOpen}
        onCancel={handleCancel}
        footer={null}
      >
        <Tabs defaultActiveKey="1" items={name === "2" ? itemsTow : items} />
      </Modal>
    </>
  );
}

export default Card;
