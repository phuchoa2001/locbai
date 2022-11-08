import { Steps } from "antd-mobile";
import React from "react";
import styled from "styled-components";

const { Step } = Steps;

const ChooseCardStyles = styled.div`
  .chooseCard img {
    width: 100%;
  }
`;

const ChooseCard = () => (
  <ChooseCardStyles>
    <Steps direction="vertical">
      <Step
        title="B1: Bấm vào số bài 3 - 2"
        description={
          <div className="chooseCard">
            <img src="/image/ChooseCard1.png" alt="" />
          </div>
        }
      />
      <Step
        title="B2 : Chọn bài cần đánh"
        description={
          <div className="chooseCard">
            <img src="/image/ChooseCard2.png" alt="" />
          </div>
        }
      />
    </Steps>
  </ChooseCardStyles>
);
export default ChooseCard;
