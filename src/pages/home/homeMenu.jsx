import React, { useEffect, useState } from "react";
import { Col, Row, Tabs } from "antd";

import CardItem from "./components/card";
import ViewMoreButton from "./components/viewMoreButton";

import {
  getAllHamburgers,
  getAllMakarnas,
  getAllPizzas,
} from "../../services/food";

function HomeMenu() {
  const [pizzas, setPizzas] = useState([]);
  const [hamburgers, setHamburgers] = useState([]);
  const [makarnas, setMakarnas] = useState([]);

  useEffect(() => {
    getAllPizzas().then((res) => {
      if (res !== undefined) {
        setPizzas(res.data.resultSet);
      }
    });

    getAllHamburgers().then((res) => {
      if (res !== undefined) {
        setHamburgers(res.data.resultSet);
      }
    });

    getAllMakarnas().then((res) => {
      if (res !== undefined) {
        setMakarnas(res.data.resultSet);
      }
    });
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
            {pizzas.slice(0, maxViewCard).map((items) => (
              <Col span={8} key={items.id}>
                <CardItem
                  items={items}
                  urunName={items.urunName}
                  foodName={items.foodName}
                  foodPrice={items.foodPrice}
                  foodDesc={items.foodDesc}
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
            {hamburgers.slice(0, maxViewCard).map((items) => (
              <Col span={8} key={items.id}>
                <CardItem
                  items={items}
                  urunName={items.urunName}
                  foodName={items.foodName}
                  foodPrice={items.foodPrice}
                  foodDesc={items.foodDesc}
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
            {makarnas.slice(0, maxViewCard).map((items) => (
              <Col span={8} key={items.id}>
                <CardItem
                  items={items}
                  urunName={items.urunName}
                  foodName={items.foodName}
                  foodPrice={items.foodPrice}
                  foodDesc={items.foodDesc}
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
