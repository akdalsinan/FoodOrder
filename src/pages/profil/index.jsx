import React from "react";
import axios from "axios";

import { tokenState } from "../../reducer/tokenBoolean";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import {
  Avatar,
  Card,
  Col,
  Flex,
  Popover,
  Row,
  Segmented,
  Tooltip,
  Tabs,
} from "antd";
import {
  EditOutlined,
  ShoppingCartOutlined,
  SettingOutlined,
  CreditCardOutlined,
} from "@ant-design/icons";

import OrderPage from "./orderPage";
import CreditCartInfoPage from "./creditCartInfoPage";
import UserInfo from "./userInfo";

const Index = () => {
  const user = useSelector((state) => state.userToken.user);
  const [avatarImage, setAvatarImage] = useState(
    "../../../images/avatar/4.jpg"
  );
  const [activeKey, setActiveKey] = useState("1");

  const dispatch = useDispatch();

  const sessionToken = sessionStorage.getItem("token");

  const headers = { Authorization: `Bearer ${sessionToken}` };

  // axios
  //   .get("http://localhost:5000/tokenControl", { headers })
  //   .then((res) => {
  //     dispatch(tokenState(res.data));
  //   })
  //   .catch((err) => {
  //     console.log("errr", err);
  //   });

  const onChange = (key) => {
    setActiveKey(key);
  };

  const items = [
    {
      key: "1",
      label: "Siparişlerim",
      children: <OrderPage />,
    },
    {
      key: "2",
      label: "Bilgilerim",
      children: <UserInfo />,
    },
    {
      key: "3",
      label: "Kayıtlı Kredi Kart Bilgileri",
      children: <CreditCartInfoPage />,
    },
  ];

  return (
    <>
      <Row>
        <Col span={1}></Col>
        <Col span={7}>
          <Card
            // bordered="true"
            style={{
              width: 300,
            }}
            cover={
              <img
                className="h-[250px] w-[100px] "
                alt="example"
                src={avatarImage}
              />
            }
            actions={[
              <Tooltip placement="top" title="Avatar Düzenle">
                <Popover
                  placement="bottom"
                  trigger="click"
                  content={
                    <Flex gap="small" align="flex-start" vertical>
                      <Segmented
                        onChange={(value) => setAvatarImage(value)}
                        options={Array.from({ length: 6 }, (_, index) => ({
                          label: (
                            <div key={index + 1}>
                              <Avatar
                                style={{ height: "60px", width: "60px" }}
                                src={`../../../images/avatar/${index + 1}.jpg`}
                              />
                            </div>
                          ),
                          value: `../../../images/avatar/${index + 1}.jpg`,
                        }))}
                      />
                    </Flex>
                  }
                >
                  <EditOutlined key="edit" />
                </Popover>
              </Tooltip>,

              <Tooltip placement="top" title="Siparişlerim">
                <ShoppingCartOutlined
                  key="ellipsis"
                  onClick={() => {
                    setActiveKey("1");
                  }}
                />
              </Tooltip>,

              <Tooltip placement="top" title="Profil Bilgileri">
                <SettingOutlined
                  key="setting"
                  onClick={() => {
                    setActiveKey("2");
                  }}
                />
              </Tooltip>,

              <Tooltip placement="top" title="Kayıtlı Kart Bilgileri">
                <CreditCardOutlined
                  key="ellipsis"
                  onClick={() => {
                    setActiveKey("3");
                  }}
                />
              </Tooltip>,
            ]}
          >
            <div className="flex flex-col">
              <p>{user && user.username}</p>
              <p>{user && user.email}</p>
            </div>
          </Card>
        </Col>
        <Col span={15}>
          <Tabs activeKey={activeKey} items={items} onChange={onChange} />
        </Col>
        <Col span={1}></Col>
      </Row>
    </>
  );
};

export default Index;
