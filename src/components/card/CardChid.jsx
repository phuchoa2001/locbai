import React from "react";
import styled from "styled-components";

const CardStyles = styled.div`
  border: 1px solid #333;
  border-radius: 8px;
  margin: 10px 0px;
  cursor: pointer;
  position: relative;
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
  .player {
    position: absolute;
    top: 10px;
    right: 10px;
    background: #1890ff;
    height: 30px;
    width: 30px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    font-weight: 700;
    p {
      margin: 0px;
      padding: 0px;
    }
  }
  .chooseCard {
    position: absolute;
    width: 0px;
    height: 0px;
    top: 0;
    left: 0;
    overflow: hidden;
    transition: all 0.3s ease;
    display: flex;
    flex-wrap: wrap;
    .Card {
      width: 50%;
      display: flex;
      align-items: center;
      padding: 0px 5px;
      text-align: center;
      justify-content: center;
      font-size: 30px;
      box-sizing: border-box;
      border: 1px solid #333;
      :hover {
        color: #1890ff;
      }
    }
  }
  :hover .chooseCard {
    width: 100%;
    height: 100%;
    background: #fff;
    z-index: 1000;
  }
`;

function CardChid({ name, desc, onClick }) {
  return (
    <CardStyles>
      <div className="box">
        <h3>{name}</h3>
        <p> {desc}</p>
      </div>
      <div className="chooseCard">
        <div className="Card" onClick={() => onClick(1)}>
          1
        </div>
        <div className="Card" onClick={() => onClick(2)}>
          2
        </div>
        <div className="Card" onClick={() => onClick(3)}>
          3
        </div>
        <div className="Card" onClick={() => onClick(4)}>
          4
        </div>
      </div>
    </CardStyles>
  );
}

export default CardChid;
