import React, { useState } from "react";
import { TabBar, Badge } from "antd-mobile";
import styled from "styled-components";

import ListMobileCard from "../components/listMobileCard/ListMobileCard";
import Parameter from "../components/parameter/Parameter";
import FilterCard from "../components/filterCard/FilterCard";
import GuiDe from "../components/guiDe/GuiDe";

import {
  AppOutline,
  UnorderedListOutline,
  HistogramOutline,
  QuestionCircleOutline,
} from "antd-mobile-icons";

const SideBarStyles = styled.div`
  display: none;
  @media only screen and (max-width: 959px) {
    /* IPAD  */
    display: block;
    width: 100%;
    .TabBar {
      position: fixed;
      width: 100%;
      bottom: 0px;
      left: 0px;
      box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
      padding: 10px;
      background: #fff;
      z-index: 999;
    }
  }
  .title {
    text-align: center;
    padding: 10px 0px;
    display: flex;
    width: 100%;
    justify-content: center;
  }
`;

function SidebarMobile(props) {
  const [active, setActive] = useState("card");

  const tabs = [
    {
      key: "card",
      title: "Bộ bài",
      icon: <AppOutline />,
      badge: Badge.dot,
    },
    {
      key: "parameter",
      title: "Thông số",
      icon: <HistogramOutline />,
    },
    {
      key: "filterCard",
      title: "Lọc bài",
      icon: <UnorderedListOutline />,
    },
    {
      key: "guiDe",
      title: "Hướng dẫn",
      icon: <QuestionCircleOutline />,
    },
  ];

  const handleChange = (value) => {
    setActive(value);
  };
  return (
    <SideBarStyles>
      {
        {
          card: <ListMobileCard />,
          parameter: <Parameter />,
          filterCard: <FilterCard />,
          guiDe: <GuiDe />,
        }[active]
      }
      <div className="TabBar">
        <TabBar activeKey={active} onChange={handleChange}>
          {tabs.map((item) => (
            <TabBar.Item
              key={item.key}
              icon={item.icon}
              title={item.title}
              badge={item.badge}
            />
          ))}
        </TabBar>
      </div>
    </SideBarStyles>
  );
}

export default SidebarMobile;
