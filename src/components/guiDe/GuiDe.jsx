import React from "react";
import styled from "styled-components";
import { Tabs } from "antd";

import ChooseCard from "./ChooseCard";
import Parameter from "./Parameter";
import FilterCard from "./FilterCard";

const GuiDeStyles = styled.div`
  span {
    font-weight: 700;
  }
`;

function GuiDe(props) {
  const onChange = (key) => {
    console.log(key);
  };
  return (
    <GuiDeStyles>
      <h3>
        <span>Giới thiệu ứng dụng : </span>
        Xin chào các bạn đây ứng dụng đếm lá , kiểm soát 100% bộ bài . Khi lập
        thành công thì trải nghiệm nó . 15 giây mà xóa 3 lần là rất khó . Hãy
        coi đây là bản Demo và mong có giải pháp trong tương lai giải quyết vấn
        đề này . Trải nghiêm người dùng quá tệ . Cảm ơn bạn đã vào xem
      </h3>
      <Tabs
        defaultActiveKey="1"
        onChange={onChange}
        items={[
          {
            label: `Hướng dẫn đánh bài`,
            key: "1",
            children: <ChooseCard />,
          },
          {
            label: `Thông số cơ bản`,
            key: "2",
            children: <Parameter />,
          },
          {
            label: `Lọc bài`,
            key: "3",
            children: <FilterCard />,
          },
        ]}
      />
    </GuiDeStyles>
  );
}

export default GuiDe;
