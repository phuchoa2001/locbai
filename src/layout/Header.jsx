import React from "react";
import { Tooltip } from "antd";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

import { BackIcon, ResetIcon, NextIcon } from "../assets/icon";
import HeaderRight from "./HeaderRight";

import { back, next, reset } from "../redux/useCard";

const HeaderStyles = styled.div`
  height: 100px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  .left {
    display: flex;
    align-items: center;
  }
  .icon {
    padding: 10px;
    cursor: pointer;
    background: #b8b4b4;
    margin-right: 10px;
    border-radius: 10px;
    color: white;
    position: relative;
    &.disabled {
      background: #dddddd;
      pointer-events: none;
      cursor: default;
      text-decoration: none;
    }
  }
  @media only screen and (max-width: 959px) {
    display: none;
  }
  &.show {
    display: flex;
  }
`;

function Header({ show = false }) {
  const dispatch = useDispatch();
  const { History, step } = useSelector((state) => state.Card);
  return (
    <HeaderStyles className={show ? "show" : ""}>
      <div className="left">
        <Tooltip title="Quay lại 1 bước" color={"blue"}>
          <div
            className={`icon ${step > 1 ? "" : "disabled"}`}
            onClick={() => dispatch(back())}
          >
            <BackIcon />
          </div>
        </Tooltip>
        <Tooltip title="Tiến tới 1 bước" color={"blue"}>
          <div
            className={`icon ${History.length > step ? "" : "disabled"}`}
            onClick={() => dispatch(next())}
          >
            <NextIcon />
          </div>
        </Tooltip>
        <Tooltip title="Làm lại ván bài" color={"blue"}>
          <div className="icon" onClick={() => dispatch(reset())}>
            <ResetIcon />
          </div>
        </Tooltip>
      </div>
      <HeaderRight />
    </HeaderStyles>
  );
}

export default Header;
