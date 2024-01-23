import React from "react";
import axios from "axios";

import { tokenState } from "../../reducer/tokenBoolean";
import { useDispatch } from "react-redux";
import { useState } from "react";
import {
  Avatar,
  Card,
  Col,
  Flex,
  Popconfirm,
  Popover,
  Row,
  Segmented,
  Tooltip,
} from "antd";
import {
  EditOutlined,
  ShoppingCartOutlined,
  SettingOutlined,
} from "@ant-design/icons";

// import avatarImage from "../../../images/avatar/2.jpg";

const Index = () => {
  const [avatarImage, setAvatarImage] = useState("../../../images/f6.png");

  const dispatch = useDispatch();

  // const sessionToken = sessionStorage.getItem("token");
  // const headers = { Authorization: `Bearer ${sessionToken}` };
  // console.log("token",header)
  // axios
  //   .get("http://localhost:3000/users/profile", { headers })
  //   .then((res) => {
  //     dispatch(tokenState({ token: true }));
  //     console.log("res.dataaa", res.data);
  //   })
  //   .catch((err) => {
  //     ERROR(ERR)
  //     ERR.
  //     if (err.request.status === 401) {
  //       dispatch(tokenState({ token: false }));
  //     }
  //     console.log("errr", err.request.status);
  //   });

  const id = 2;
  return (
    <>
      <Row>
        <Col span={12}>
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
              <Tooltip placement="top" title="Profil Edit">
                <SettingOutlined key="setting" />
              </Tooltip>,

              <Tooltip placement="top" title="Avatar Edit">
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

              <Tooltip placement="top" title="My Orders">
                <ShoppingCartOutlined key="ellipsis" />
              </Tooltip>,
            ]}
          >
            <div className="flex flex-col">
              <p>Ad Soyad</p>
              <p>Mail</p>
            </div>
          </Card>
        </Col>
        <Col span={12}>
          <Col span={6}>safdsafd</Col>
          <Col span={6}>adad</Col>
        </Col>
      </Row>
    </>
  );
};

export default Index;
