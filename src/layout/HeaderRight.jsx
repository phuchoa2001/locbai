import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { HistoryIcon } from "../assets/icon";
import styled from "styled-components";

import { goStep } from "../redux/useCard";

const RightStyles = styled.div`
  display: flex;
  align-items: center;
  cursor: default;
  .note {
    margin: 0px;
    margin-bottom: 5px;
  }
  .icon {
    padding: 10px;
    cursor: pointer;
    background: #b8b4b4;
    margin-right: 10px;
    border-radius: 10px;
    color: white;
    position: relative;
    .top {
      display: none;
      height: 10px;
      width: 400px;
      background: transparent;
      position: absolute;
      top: 100%;
      right: 0px;
    }
    .submenu {
      display: none;
      width: 400px;
      height: 500px;
      position: absolute;
      top: calc(100% + 10px);
      z-index: 9999;
      right: 0px;
      background: #fff;
      box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
      text-align: center;
      color: black;
      overflow-y: auto;
      .item {
        padding: 5px 0px;
        :hover {
          color: #40a9ff;
        }
      }
    }
    :hover .submenu,
    :hover .top {
      display: block;
    }
  }
  @media only screen and (max-width: 539px) {
    .icon .submenu {
      width: 350px;
    }
  }
`;

function HeaderRight() {
  const { History } = useSelector((state) => state.Card);
  const dispatch = useDispatch();

  const handleClick = (step) => dispatch(goStep(step));
  return (
    <RightStyles>
      <div className="icon">
        <HistoryIcon />
        <div className="top"></div>
        <div className="submenu">
          <h3>Lịch sử bị xóa</h3>
          <p className="note">Bấm vào danh sách để quay lại bước đó</p>
          <ul className="list">
            {History.map((item, index) => (
              <div
                key={index}
                className="item"
                onClick={() => handleClick(item.step)}
              >
                - Bước{item.step},{item.title}
              </div>
            ))}
          </ul>
        </div>
      </div>
    </RightStyles>
  );
}

export default HeaderRight;
