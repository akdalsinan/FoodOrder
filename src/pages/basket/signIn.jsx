import React from "react";

import oturumAc from "../../../public/images/oturumAc.png";
import { Button, Col, Row, Space, Typography } from "antd";
import { useNavigate } from "react-router-dom";

function SignIn() {
  const navigate = useNavigate();
  return (
    <Row>
      <Col span={11}></Col>
      <Col span={7}>
        <img className="mt-20" src={oturumAc} />
        <Typography.Title type="warning" level={3}>
          {" "}
          Sepete Ürün Eklemek İçin Giriş Yapmanız Gerek
        </Typography.Title>
        <Space>
          <Button onClick={() => navigate("/user")}>Giriş Yap</Button>
        </Space>
      </Col>

      <Col span={6}></Col>
    </Row>
  );
}

export default SignIn;
