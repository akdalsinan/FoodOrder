import { Flex, Tabs } from "antd";
import React from "react";

const Index = () => {
  const items = [
    {
      key: "1",
      label: "Login",
      children: <>SADASD</>,
    },
    {
      key: "2",
      label: "Sign Up",
      children: <>ASDASD</>,
    },
  ];

  return (
    <div className="mt-[5px]">
        <Tabs   tabPosition="left" type="card" animated={true} centered={true} items={items} />
    
    </div>
  );
};

export default Index;
