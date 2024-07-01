import { Button, DatePicker, Form, Input, Row, Select } from "antd";
import TextArea from "antd/es/input/TextArea";
import dayjs from "dayjs";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "../../services/users";
import { setUser } from "../../reducer/userToken";
import { jwtDecode } from "jwt-decode";

import "dayjs/locale/tr";

function UserInfo() {
  const dispatch = useDispatch();

  const user = useSelector((state) => state.userToken.user);

  const onFinish = (value) => {
    const createData = {
      ...value,
      dateOfBirth: value.dateOfBirth
        ? dayjs(value.dateOfBirth).format("YYYY-MM-DD ")
        : null,
      userId: user.id,
    };
    updateUser(createData)
      .then((response) => {
        if (response.data.isSuccess) {
          const token = response.data.token;
          sessionStorage.setItem("token", token);
          const decodedToken = jwtDecode(token);
          dispatch(setUser(decodedToken)); // Redux'a kaydet
        }
      })
      .catch((error) => {
        console.error("error ", error);
      });
  };

  const initialValues = {
    username: user.username,
    email: user.email,
    gender: user.gender,
    phoneNumber: user.phoneNumber,
    dateOfBirth: user.dateOfBirth ? dayjs(user.dateOfBirth) : null,
    adress: user.adress,
  };

  return (
    <Row>
      <Form
        labelCol={{
          span: 5,
        }}
        onFinish={onFinish}
        initialValues={initialValues}
      >
        <Form.Item
          label="İsim Soyisim"
          name="username"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input style={{ width: "400px" }} />
        </Form.Item>

        <Form.Item
          label="Email"
          name="email"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input style={{ width: "400px" }} />
        </Form.Item>

        <Form.Item name="gender" label="Gender">
          <Select style={{ width: "400px" }} allowClear>
            <Option value="male">male</Option>
            <Option value="female">female</Option>
            <Option value="other">other</Option>
          </Select>
        </Form.Item>

        <Form.Item label="Telefon Numarası" name="phoneNumber">
          <Input style={{ width: "400px" }} />
        </Form.Item>

        <Form.Item label="Doğum Tarihi" name="dateOfBirth">
          <DatePicker style={{ width: "400px" }} />
        </Form.Item>

        <Form.Item label="Adres" name="adress">
          <TextArea style={{ width: "550px" }} />
        </Form.Item>

        <Form.Item>
          <Button
            className="bg-primary text-secondary hover:text-secondary cursor-pointer "
            htmlType="submit"
          >
            Güncelle
          </Button>
        </Form.Item>
      </Form>
    </Row>
  );
}

export default UserInfo;
