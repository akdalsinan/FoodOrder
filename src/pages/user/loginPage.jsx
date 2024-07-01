import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Button, Form, Input } from "antd";
import closeeye from "../../../images/closeeye.png";
import openeye from "../../../images/openeye.png";
import { useNavigate } from "react-router-dom";
import { userLogin } from "../../services/users";
import { setUser } from "../../reducer/userToken";
import { jwtDecode } from "jwt-decode";

const LoginPage = () => {
  const [photo, setPhoto] = useState(openeye);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onFinish = (value) => {
    const createData = { email: value.email, password: value.password };
    userLogin(createData).then((response) => {
      if (response.data.isSuccess) {
        const token = response.data.token;
        sessionStorage.setItem("token", token);
        const decodedToken = jwtDecode(token);

        dispatch(setUser(decodedToken)); // Redux'a kaydet
        navigate("/profile");
      }
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
