import React from "react";

import pizzaRun from "../../../images/pizzaRunn.jpg";
import { Button, Col, Row, Space, Typography } from "antd";
import { useNavigate } from "react-router-dom";
function OrderOk() {
  const navigate = useNavigate();
  return (
    <Row>
      <Col span={10}></Col>
      <Col span={4}>
        <img className="mt-20" src={pizzaRun} />
        <Typography.Title type="warning" level={3}>
          {" "}
          SİPARİŞİNİZ ALINDI...
        </Typography.Title>
        <Space>
          <Button onClick={() => navigate("/")}> Anasayfaya Git </Button>
          <Button onClick={() => navigate("/profile")}>
            {" "}
            Siparişlerime Git{" "}
          </Button>
        </Space>
      </Col>

      <Col span={10}></Col>
    </Row>
  );
}

export default OrderOk;
