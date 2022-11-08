import { Steps } from "antd-mobile";
import React from "react";
import styled from "styled-components";

const { Step } = Steps;

const FilterCardStyles = styled.div`
  .chooseCard img {
    width: 100%;
  }
`;

const FilterCard = () => (
  <FilterCardStyles>
    <Steps direction="vertical">
      <Step
        title="Thông số cơ bản"
        description={
          <div className="chooseCard">
            <img src="/image/filterCard1.png" alt="" />
          </div>
        }
      />
    </Steps>
  </FilterCardStyles>
);
export default FilterCard;
