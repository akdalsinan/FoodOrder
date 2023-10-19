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
  const dispatch = useDispatch();
  const data = useSelector((state) => state.foods);

  useEffect(() => {
    dispatch(getAllHamburger());
    dispatch(getAllPizza());
    dispatch(getAllMakarna());
  }, []);

  return (
    <div>
      <Row>
        <Col span={22}>
          <AnchorDiv id={"part-1"} data={data.pizza} foodName={"pizza"} />       
          <AnchorDiv id={"part-2"} data={data.hamburger} foodName={"hamburger"} />
          <AnchorDiv id={"part-3"} data={data.makarna} foodName={"makarna"} /> 
        </Col>
        <Col span={2}>
          <Anchor
            items={[
              {
                key: "part-1",
                href: "#part-1",
                title: (
                  <AnchorTitle foodName={"pizza"} img={pizzaMenu} />
                ),
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
                title: (
                  <AnchorTitle foodName={"makarna"} img={makarnaMenu} />
                ),
              },
            ]}
          />
        </Col>
      </Row>
    </div>
  );
}

export default Menu;
