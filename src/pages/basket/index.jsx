import { Button } from "antd";
import React, { useState } from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";

import { removeBasket } from "../../reducer/basket";
import { useDispatch } from "react-redux";

function Index() {
  const [total, setTotal] = useState(0);
  const basketUrun = useSelector((state) => state.basket.value);
  const dispatch = useDispatch();
  console.log("basketUrun", basketUrun);
  let totalPrice = 0;
  return (
    <div>
      {basketUrun.map((item) => {
        totalPrice += item.price * item.quantity; // Toplam fiyatı güncelle
        return (
          <div key={item.id}>
            <div>
              {item.typesname} {item.price}
              <Button onClick={() => dispatch(removeBasket({ item }))}>
                sil
              </Button>
            </div>
            <div>toplam: {totalPrice}</div>{" "}
            {/* Her öğe için toplam fiyatı göster */}
          </div>
        );
      })}
      <>{totalPrice}</>
    </div>
  );
}

export default Index;
// description: "Pizza loaded with fresh vegetables like bell peppers, mushrooms, and olives.";
// id: 3;
// image: "vegetarian.jpg";
// price: 11.99;
// typesname: "Vegetarian";
