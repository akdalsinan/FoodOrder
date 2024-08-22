import React from "react";
import resim4 from "../../../../images/f4.png";
import { Button, Space } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";

import { useDispatch, useSelector } from "react-redux";
import { addBasket } from "../../../services/basket";
import MyNotification from "../../../components/myNotification";
import { basketCount } from "../../../reducer/basket";
import { formatPrice } from "../../../components/helper";
import { useNavigate } from "react-router-dom";

function CardItem({ urunName, foodName, foodPrice, items, foodDesc }) {
  const apiUrl = import.meta.env.VITE_API_URI;

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = useSelector((state) => state.userToken.user);

  const handleAddBasket = () => {
    if (user === null) {
      MyNotification("warning", "Sepete Ürün Eklemek İçin Giriş Yapın");
    } else {
      const createData = { userId: user.id, foodId: items._id, quantity: 1 };

      addBasket(createData).then((response) => {
        if (response.data.message === "Product added to cart") {
          const basketLength = response.data.cart.items.length;

          dispatch(basketCount(basketLength));
          const description = (
            <Button
              className="bg-primary text-secondary hover:text-secondary cursor-pointer "
              htmlType="submit"
              onClick={() => navigate("/shopbasket")}
            >
              Sepete Git
            </Button>
          );
          MyNotification("success", "Ürün Sepete Eklendi", description);
        }
      });
    }
  };

  return (
    <div className="relative group cursor-pointer overflow-hidden text-gray-50 h-72 w-56 rounded-2xl duration-700">
      <div className="w-56 h-72 bg-secondary text-primary flex justify-center items-center">
        <img
          src={items.foodImage ? `${apiUrl}uploads/${items.foodImage}` : resim4}
          className="object-contain h-full mb-[65px]"
          alt=""
        />
      </div>
      <div className="absolute bg-primary -bottom-24 w-56 p-3 flex flex-col gap-1 group-hover:bottom-0 group-hover:duration-600 duration-500">
        <span className="text-secondary font-bold text-xs">{urunName}</span>
        <span className="text-gray-800 font-bold text-2xl h-20 overflow-hidden whitespace-nowrap overflow-ellipsis">
          {foodName}
        </span>
        <p className="text-neutral-800 max-h-5 overflow-hidden group-hover:max-h-20 duration-500 transition-all">
          {foodDesc}
        </p>
        <div className="flex items-center justify-between">
          <h1 className="text-secondary text-xl">{formatPrice(foodPrice)}</h1>
          <Button
            className="bg-secondary"
            icon={<ShoppingCartOutlined />}
            type="primary"
            shape="circle"
            onClick={handleAddBasket}
          />
        </div>
      </div>
    </div>
  );
}

export default CardItem;
