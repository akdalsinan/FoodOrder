import { Col, Row } from "antd";
import React from "react";
import CardItem from "../../home/components/card";

const AnchorDiv = ({ id, data, foodName }) => {
  console.log("data", data);
  return (
    <div className="ml-[100px] mt-[50px] " id={id}>
      <Row gutter={[24, 24]}>
        {data.map((items) => (
          <Col key={items.id} span={8}>
            <CardItem
              typesName={items.typesname}
              foodName={foodName}
              price={items.price}
            />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default AnchorDiv;
