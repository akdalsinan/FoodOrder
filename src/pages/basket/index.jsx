import { Button } from "antd";
import React from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";

import { removeBasket } from "../../reducer/basket";
import { useDispatch } from "react-redux";

function Index() {
  const basketUrun = useSelector((state) => state.basket.value);
  const dispatch = useDispatch();
  console.log("basketUrun", basketUrun);
  return (
    <div>
      {basketUrun.map((item) => (
        <>
          <div>
            {item.typesname} {item.price}{" "}
            <Button onClick={() => dispatch(removeBasket({ item }))}>
              sil
            </Button>
          </div>
          <div> </div>
        </>
      ))}
    </div>
  );
}

export default Index;
// description: "Pizza loaded with fresh vegetables like bell peppers, mushrooms, and olives.";
// id: 3;
// image: "vegetarian.jpg";
// price: 11.99;
// typesname: "Vegetarian";
