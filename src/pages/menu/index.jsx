import React, { useEffect } from "react";
import { Anchor, Col, Row } from "antd";

import AnchorDiv from "./components/anchor";
import AnchorTitle from "./components/anchorTitle";

import {
  getAllHamburger,
  getAllPizza,
  getAllMakarna,
} from "../../actions/foodActions";

import { useDispatch, useSelector } from "react-redux";

import hamburgerMenu from "../../../images/hamburgerMenu.png";
import makarnaMenu from "../../../images/makarnaMenu.jpg";
import pizzaMenu from "../../../images/pizzaMenu.jpg";

function Menu() {
  // const dispatch = useDispatch();
  // const data = useSelector((state) => state.foods);

  // useEffect(() => {
  //   dispatch(getAllHamburger());
  //   dispatch(getAllPizza());
  //   dispatch(getAllMakarna());
  // }, []);
  const pizzaData = [
    { id: 1, typesname: "Margherita", price: 10.99 },
    { id: 2, typesname: "Pepperoni", price: 12.99 },
    { id: 3, typesname: "Vegetarian", price: 11.99 },
  ];

  const hamburgerData = [
    { id: 1, typesname: "Cheeseburger", price: 8.99 },
    { id: 2, typesname: "Bacon Burger", price: 9.99 },
    { id: 3, typesname: "Mushroom Swiss Burger", price: 10.99 },
  ];

  const makarnaData = [
    { id: 1, typesname: "Spaghetti Bolognese", price: 11.99 },
    { id: 2, typesname: "Fettuccine Alfredo", price: 12.99 },
    { id: 3, typesname: "Penne Arrabiata", price: 10.99 },
  ];

  const data = {
    pizza: pizzaData,
    hamburger: hamburgerData,
    makarna: makarnaData,
  };
  return (
    <div>
      <Row>
        <Col span={22}>
          <AnchorDiv id={"part-1"} data={data.pizza} foodName={"pizza"} />
          <AnchorDiv
            id={"part-2"}
            data={data.hamburger}
            foodName={"hamburger"}
          />
          <AnchorDiv id={"part-3"} data={data.makarna} foodName={"makarna"} />
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
    </div>
  );
}

export default Menu;
