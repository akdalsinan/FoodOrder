import React from "react";

import oturumAc from "../../../public/images/basketEmpty.png";
import { Button, Col, Row, Space, Typography } from "antd";
import { useNavigate } from "react-router-dom";

export default function basketEmpty() {
  const navigate = useNavigate();
  return (
    <Row>
      <Col span={11}></Col>
      <Col span={7}>
        <img className="mt-20" src={oturumAc} />
        <Typography.Title type="warning" level={3}>
          {" "}
          Acele Et!! Sepetine Ürün Ekle,Güzel Lezzetleri Kaçırma.
        </Typography.Title>
        <Space>
          <Button onClick={() => navigate("/menu")}>Menüye Git..</Button>
        </Space>
      </Col>

      <Col span={6}></Col>
    </Row>
  );
}
