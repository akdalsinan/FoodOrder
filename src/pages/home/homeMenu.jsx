import React, { useEffect } from "react";
import { Col, Row, Space, Tabs } from "antd";

import CardItem from "./components/card";
import ViewMoreButton from "./components/viewMoreButton";

import { useDispatch, useSelector } from "react-redux";
import {
  getAllHamburger,
  getAllPizza,
  getAllMakarna,
} from "../../actions/foodActions";

function HomeMenu() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.foods);

  useEffect(() => {
    dispatch(getAllHamburger());
    dispatch(getAllPizza());
    dispatch(getAllMakarna());
  }, []);

  const maxViewCard = 6;

  const items = [
    {
      label: (
        <div className="font-sans text-secondary hover:text-red-500 cursor-pointer font-bold">
          Pizza
        </div>
      ),
      key: "1",
      children: (
        <div style={{ marginLeft: 200, marginRight: 200 }}>
          <Row gutter={[16, 24]}>
            {data.pizza.slice(0, maxViewCard).map((items) => (
              <Col span={8} key={items.id}>
                <CardItem
                  typesName={items.typesname}
                  foodName={"Pizza"}
                  price={items.price}
                />
              </Col>
            ))}

            <Col span={24}>
              <ViewMoreButton linkPath={"/menu"} />
            </Col>
          </Row>
        </div>
      ),
    },
    {
      label: (
        <div className="font-sans text-secondary hover:text-red-500 cursor-pointer font-bold">
          Hamburger
        </div>
      ),
      key: "2",
      children: (
        <div style={{ marginLeft: 200, marginRight: 200 }}>
          <Row gutter={[16, 24]}>
            {data.hamburger.slice(0, maxViewCard).map((items) => (
              <Col span={8} key={items.id}>
                <CardItem
                  typesName={items.typesname}
                  foodName={"Hamburger"}
                  price={items.price}
                />
              </Col>
            ))}

            <Col span={24}>
              <ViewMoreButton linkPath={"/menu"} />
            </Col>
          </Row>
        </div>
      ),
    },
    {
      label: (
        <div className="font-sans text-secondary hover:text-red-500 cursor-pointer font-bold">
          Makarna
        </div>
      ),
      key: "3",
      children: (
        <div style={{ marginLeft: 200, marginRight: 200 }}>
          <Row gutter={[16, 24]}>
            {data.makarna.slice(0, maxViewCard).map((items) => (
              <Col span={8} key={items.id}>
                <CardItem
                  typesName={items.typesname}
                  foodName={"Makarna"}
                  price={items.price}
                />
              </Col>
            ))}

            <Col span={24}>
              <ViewMoreButton linkPath={"/menu"} />
            </Col>
          </Row>
        </div>
      ),
    },
  ];
  return (
    <div
      style={{
        marginTop: 50,
        marginBottom: 50,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <h1 className="font-dancing text-6xl mx-auto text-secondary">Our Menu</h1>
      <Tabs
        style={{
          marginTop: 20,
          justifyContent: "center",
          alignItems: "center",
        }}
        type="card"
        defaultActiveKey="1"
        items={items}
      />
    </div>
  );
}

export default HomeMenu;
