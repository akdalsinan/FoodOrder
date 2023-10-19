import React from "react";
import { Flex, Tabs } from "antd";

import LoginPage from "./loginPage";
import SignupPage from "./signupPage";

function User() {
  const items = [
    {
      key: "1",
      label: "Login",
      children: <LoginPage />,
    },
    {
      key: "2",
      label: "Sign Up",
      children: <SignupPage />,
    },
  ];

  return (
    <div className="mt-[5px]">
      <Flex align="center" justify="center">
        <Tabs animated={true} centered={true} items={items} />
      </Flex>
    </div>
  );
}

export default User;
