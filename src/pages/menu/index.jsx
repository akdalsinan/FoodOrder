import React, { useEffect, useState } from "react";
import { Anchor, Col, Row } from "antd";

import AnchorDiv from "./components/anchor";
import AnchorTitle from "./components/anchorTitle";

import hamburgerMenu from "../../../images/hamburgerMenu.png";
import makarnaMenu from "../../../images/makarnaMenu.jpg";
import pizzaMenu from "../../../images/pizzaMenu.jpg";

import Loading from "../../components/loading";

import {
  getAllHamburgers,
  getAllMakarnas,
  getAllPizzas,
} from "../../services/food";

function Menu() {
  const [pizzas, setPizzas] = useState([]);
  const [hamburgers, setHamburgers] = useState([]);
  const [makarnas, setMakarnas] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    getAllPizzas().then((res) => {
      if (res !== undefined) {
        setPizzas(res.data.resultSet);
        setLoading(false);
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
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <Row>
          <Col span={22}>
            <AnchorDiv id={"part-1"} data={pizzas} foodName={"pizza"} />
            <AnchorDiv id={"part-2"} data={hamburgers} foodName={"hamburger"} />
            <AnchorDiv id={"part-3"} data={makarnas} foodName={"makarna"} />
          </Col>
          <Col span={2}>
            <Anchor
              items={[
                {
                  key: "part-1",
                  href: "#part-1",
                  title: <AnchorTitle foodName={"pizza"} img={pizzaMenu} />,
                },
                {
                  key: "part-2",
                  href: "#part-2",
                  title: (
                    <AnchorTitle foodName={"hamburger"} img={hamburgerMenu} />
                  ),
                },
                {
                  key: "part-3",
                  href: "#part-3",
                  title: <AnchorTitle foodName={"makarna"} img={makarnaMenu} />,
                },
              ]}
            />
          </Col>
        </Row>
      )}
    </>
  );
}

export default Menu;
