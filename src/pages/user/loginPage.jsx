import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { Button, Form, Input } from "antd";


import { loginUser } from "../../actions/userAction";

import closeeye from "../../../images/closeeye.png";
import openeye from "../../../images/openeye.png";
import MyNotification from "../../components/myNotification";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const LoginPage = () => {

  const [photo, setPhoto] = useState(openeye);
  const dispatch = useDispatch();
  const navigate=useNavigate()



  const onFinish = (value) => {
    dispatch(
      loginUser({
        email: value.email,
        password: value.password,
      })
    ).then((e) => {
      if (e.payload.message === "Giris basarili") {
        MyNotification("success", e.payload.message);
        navigate("/shopbasket")   
       
      } 
      else if((e.payload === "Hatalı şifre")) {
        MyNotification("info", e.payload);
      } else if ((e.payload === "Kullanıcı bulunamadı")) {
        MyNotification("warning", e.payload);
      }
      else (MyNotification("warning", e.payload))
    });
  };



  return (
    <div className="flex">
      <Form className=" w-[300px]" onFinish={onFinish}>
        <Form.Item name="email">
          <Input placeholder="Email" />
        </Form.Item>
        <Form.Item name="password">
          <Input.Password
            placeholder="password"
            onFocus={() => setPhoto(closeeye)}
            onBlur={() => setPhoto(openeye)}
          />
        </Form.Item>

        <Form.Item>
          <Button
            htmlType="submit "
            className="bg-primary text-white hover:text-secondary cursor-pointer"
          >
            LOGIN
          </Button>
        </Form.Item>
      </Form>
      <img src={photo} className="w-[200px] h-[250px] " alt="" />
    </div>
  );
};

export default LoginPage;
