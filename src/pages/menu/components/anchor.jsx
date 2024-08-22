import { Col, Row } from "antd";
import React from "react";
import CardItem from "../../home/components/card";

const AnchorDiv = ({ id, data }) => {
  return (
    <div className="ml-[100px] mt-[50px] " id={id}>
      <Row gutter={[24, 24]}>
        {data.map((items) => (
          <Col key={items.id} span={6}>
            <CardItem
              urunName={items.urunName}
              foodName={items.foodName}
              foodPrice={items.foodPrice}
              foodDesc={items.foodDesc}
              items={items}
            />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default AnchorDiv;
