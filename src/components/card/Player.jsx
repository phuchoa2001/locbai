import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";

import { handlePlayer } from "../../redux/useCard";

const PlayerStyles = styled.div`
  display: flex;
  margin: 10px 0px;
  flex-wrap: wrap;
  .player {
    color: #1890ff;
    display: inline;
    margin-right: 8px;
    padding: 8px;
    font-size: 12px;
    line-height: 20px;
    cursor: pointer;
    border-radius: 2px;
    &.active {
      background: #1890ff;
      color: #fff;
      border: 1px solid #d9d9d9;
    }
  }
`;

function Player(props) {
  const { player } = useSelector((state) => state.Card);
  const dispatch = useDispatch();
  return (
    <PlayerStyles>
      {Array.from(new Array(4)).map((_, index) => (
        <div
          className={`player ${player === index + 1 ? "active" : ""}`}
          key={index}
          onClick={() => dispatch(handlePlayer(index + 1))}
        >
          Người chơi : {index + 1}
        </div>
      ))}
    </PlayerStyles>
  );
}

export default Player;
