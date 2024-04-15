import React from "react";
import resim4 from "../../../../images/f4.png";
import { Button } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";

import { addBasket } from "../../../reducer/basket";
import { useDispatch } from "react-redux";

function CardItem({ typesName, foodName, price, items }) {
  const dispatch = useDispatch();
  return (
    <div className="relative group cursor-pointer group overflow-hidden  text-gray-50 h-72 w-56 rounded-2xl hover:duration-700 duration-700">
      <div className="w-56 h-72 bg-secondary text-primary flex justify-center items-center">
        <img
          src={resim4}
          style={{ maxHeight: "100%", objectFit: "contain" }}
          alt=""
        />
      </div>
      <div className="absolute bg-primary -bottom-24 w-56 p-3 flex flex-col gap-1 group-hover:-bottom-0 group-hover:duration-600 duration-500">
        <span className="text-secondary font-bold text-xs">{foodName}</span>
        <span className="text-gray-800 font-bold text-2xl">{typesName}</span>
        <p className="text-neutral-800">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          <h1 className="text-secondary text-xl ml-3"> {price}$</h1>
          <div style={{ width: "110px" }}></div>
          <Button
            className="bg-secondary"
            icon={<ShoppingCartOutlined />}
            type="primary"
            shape="circle"
            onClick={() => dispatch(addBasket({ items }))}
          ></Button>
        </div>
      </div>
    </div>
  );
}

export default CardItem;
