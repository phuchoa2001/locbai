import React from "react";
import styled from "styled-components";
import { Col, Row } from "antd";

import CardSmall from "../components/cardSmall/CardSmall";
import CardBig from "../components/cardBig/CardBig";
import OfferCardComponents from "../components/offerCard/OfferCard";

import SidebarMobile from "./SidebarMobile";

import LobbyCards from "../components/lobbyCards/lobbyCards";
import FourOfAKind from "../components/fourOfAKind/FourOfAKind";
import MainHeader from "./MainHeader";
import ConsecutivePairsCards from "../components/ConsecutivePairsCards/ConsecutivePairsCards";

import { BarIcon, HomeIcon } from "../assets/icon";

const MainStyles = styled.div`
  width: 100%;
  .title {
    font-size: 20px;
    display: flex;
    align-items: center;
    & svg {
      margin-right: 10px;
    }
  }
  @media only screen and (max-width: 959px) {
    /* IPAD  */
    .MainPc {
      display: none;
    }
  }
`;
function Main(props) {
  return (
    <MainStyles>
      <div className="MainPc">
        <MainHeader />
        <Row gutter={16}>
          <Col span={16}>
            <h3 className="title">
              <HomeIcon />
              Bộ bài còn lại
            </h3>
            <CardBig />
            <CardSmall />
          </Col>
          <Col span={8}>
            <h3 className="title">
              {" "}
              <BarIcon />
              Lọc Sảnh , Đôi thông , ...
            </h3>
            <LobbyCards />
            <ConsecutivePairsCards />
            <FourOfAKind />
          </Col>
        </Row>
      </div>
      <OfferCardComponents />
      <SidebarMobile />
    </MainStyles>
  );
}

export default Main;
