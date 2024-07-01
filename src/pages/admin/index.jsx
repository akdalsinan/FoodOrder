import { Flex, Tabs } from "antd";
import React from "react";
import FoodEdit from "./foodEdit/foodEdit";
import OrderView from "./orderView/orderView";
import FeedBack from "./feedBack";

const Index = () => {
  const items = [
    {
      key: "1",
      label: "Ürünleri Düzenle",
      children: <FoodEdit />,
    },
    {
      key: "2",
      label: "Siparişleri Görüntüle",
      children: <OrderView />,
    },
    {
      key: "3",
      label: "Görüş ve Öneriler",
      children: <FeedBack />,
    },
  ];

  return (
    <div className="mt-[5px]">
      <Tabs
        tabPosition="left"
        type="card"
        animated={true}
        centered={true}
        items={items}
      />
    </div>
  );
};

export default Index;
