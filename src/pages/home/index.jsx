import React from "react";
import { Button, Form, Popover, Radio, Space } from "antd";

import { SmileOutlined, FrownOutlined, SendOutlined } from "@ant-design/icons";
import HomeAbout from "./homeAbout";
import HomeBack from "./homeBack";
import HomeMenu from "./homeMenu";
import pizza from "../../../images/helppizza.png";
import TextArea from "antd/es/input/TextArea";
import { useSelector } from "react-redux";
import { addFeedback } from "../../services/feedBack";
import MyNotification from "../../components/myNotification";

import UserChat from "./chat/userChat";

function Home() {
  const user = useSelector((state) => state.userToken.user);

  const sendFeedBack = (value) => {
    if (user === null) {
      MyNotification("warning", "Görüş ve Öneri İçin Giriş Yapın");
    } else {
      const createData = {
        ...value,
        user: user.id,
        userName: user.username,
        userEmail: user.email,
      };
      addFeedback(createData)
        .then((response) => {
          if (response.data.isSuccess) {
          }
        })
        .catch((error) => console.log("error", error));
    }
  };
  return (
    <>
      <div
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          zIndex: "1000",
        }}
      >
        <Popover
          style={{ backgroundColor: "red" }}
          placement="leftBottom"
          content={
            <>
              <Form onFinish={sendFeedBack}>
                <Form.Item name="feedBack">
                  <TextArea placeholder="Görüş ve Öneriler" rows={4} />
                </Form.Item>
                <Space size={100}>
                  <Form.Item name="status">
                    <Radio.Group size="large">
                      <Radio.Button value="notHapy">
                        <FrownOutlined
                          style={{ fontSize: "24px", color: "red" }}
                        />
                      </Radio.Button>
                      <Radio.Button value="happy">
                        <SmileOutlined
                          style={{ fontSize: "24px", color: "green" }}
                        />
                      </Radio.Button>
                    </Radio.Group>
                  </Form.Item>

                  <Form.Item>
                    <Button
                      size="large"
                      icon={<SendOutlined />}
                      htmlType="submit"
                    ></Button>
                  </Form.Item>
                </Space>
              </Form>
            </>
          }
          trigger="click"
        >
          <button
            style={{
              height: 100,
              width: 100,
              position: "relative",
              zIndex: "1000",
            }}
          >
            <img src={pizza} alt="" />
          </button>
        </Popover>
      </div>
      <HomeBack />
      <HomeMenu />
      <HomeAbout />
      <div style={{ height: "50px" }} />
    </>
  );
}

export default Home;
