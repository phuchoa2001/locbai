import { Steps } from "antd-mobile";
import React from "react";
import styled from "styled-components";

const { Step } = Steps;

const ParameterStyles = styled.div`
  .chooseCard img {
    width: 100%;
  }
`;

const Parameter = () => (
  <ParameterStyles>
    <Steps direction="vertical">
      <Step
        title="Thông số cơ bản"
        description={
          <div className="chooseCard">
            <img src="/image/Parameter1.png" alt="" />
          </div>
        }
      />
    </Steps>
  </ParameterStyles>
);
export default Parameter;
