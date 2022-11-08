import React, { useState } from "react";
import { Modal } from "antd";
import { useSelector } from "react-redux";
import styled from "styled-components";

import { QuestionIcon } from "../assets/icon/index";

import GuiDe from "../components/guiDe/GuiDe";

const MainHeaderStyles = styled.div`
  .guide {
    cursor: pointer;
  }
  .players {
    display: flex;
    p {
      padding-right: 20px;
      span {
        font-weight: 700;
      }
    }
  }
  @media only screen and (max-width: 959px) {
    .guide {
      display: none;
    }
    .players {
      display: block;
    }
  }
`;

function MainHeader(props) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { History, step, players } = useSelector((state) => state.Card);
  return (
    <MainHeaderStyles>
      <h3>Bạn đang ở bước : {step}</h3>
      <h3>
        Lịch sử :{" "}
        {History.length === 0
          ? "Không có"
          : `Bước ${History[step - 1].step} , xóa ` +
            History[step - 1].title}{" "}
      </h3>
      <h3>Lá bài còn lại : {players.reduce((a, b) => a + b, 0)} </h3>
      <h3 onClick={() => setIsModalOpen(true)} className="guide">
        Hướng dẫn <QuestionIcon />
      </h3>
      <Modal
        title={`Hướng dẫn`}
        open={isModalOpen}
        onCancel={() => setIsModalOpen(false)}
        footer={null}
      >
        <GuiDe />
      </Modal>
      <div className="players">
        <p>
          Người chơi 1 : <span>{players[0]} lá</span>
        </p>
        <p>
          Người chơi 2 : <span>{players[1]} lá</span>
        </p>
        <p>
          Người chơi 3 : <span>{players[2]} lá</span>
        </p>
        <p>
          Người chơi 4 : <span>{players[3]} lá</span>
        </p>
      </div>
    </MainHeaderStyles>
  );
}

export default MainHeader;
