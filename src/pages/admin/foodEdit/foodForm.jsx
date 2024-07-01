import { Button, Checkbox, Col, Flex, Form, Input, Row, Select } from "antd";
import React from "react";
import { useEffect } from "react";

import { addFood, updateFood } from "../../../services/food";

function FoodForm({ selectedRow, form, handleOk, getAllFoods }) {
  const onFinish = (value) => {
    console.log("value", value);

    if (value.urunName === "pizza") {
      var createDataUrunName = 1;
    } else if (value.urunName === "hamburger") {
      var createDataUrunName = 2;
    } else if (value.urunName === "makarna") {
      var createDataUrunName = 3;
    }

    const createData = {
      foodId: selectedRow && selectedRow._id,
      ...value,
      urunId: createDataUrunName,
    };
    handleOk();

    selectedRow
      ? updateFood(createData)
          .then((response) => {
            if (response.data.isSuccess) {
              getAllFoods();
            }
          })
          .catch((error) => console.log("error", error))
      : addFood(createData)
          .then((response) => {
            if (response.data.isSuccess) {
              getAllFoods();
            }
          })
          .catch((error) => console.log("error", error));
  };

  useEffect(() => {
    if (selectedRow) {
      form.setFieldsValue({
        foodName: selectedRow.foodName,
        foodDesc: selectedRow.foodDesc,
        foodPrice: selectedRow.foodPrice,
        urunName: selectedRow.urunName,
      });
    } else {
      form.resetFields();
    }
  }, [selectedRow, form]);

  return (
    <>
      <Form form={form} onFinish={onFinish} layout="horizontal">
        <Row gutter={16}>
          <Col span={24}>
            <Form.Item
              name="foodName"
              label="Yemek İsmi:"
              rules={[
                {
                  required: true,
                  message: "Lütfen adres girin",
                },
              ]}
            >
              <Input />
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={16}>
          <Col span={24}>
            <Form.Item
              name="urunName"
              label="Yemek Türü:"
              rules={[
                {
                  required: true,
                  message: "Lütfen adres girin",
                },
              ]}
            >
              <Select>
                <Select.Option value="pizza">Pizza</Select.Option>
                <Select.Option value="hamburger">Hamburger</Select.Option>
                <Select.Option value="makarna">Makarna</Select.Option>
              </Select>
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={16}>
          <Col span={24}>
            <Form.Item
              name="foodPrice"
              label="Yemek Fiyatı:"
              rules={[
                {
                  required: true,
                  message: "Lütfen adres girin",
                },
              ]}
            >
              <Input />
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={16}>
          <Col span={24}>
            <Form.Item
              name="foodDesc"
              label="Yemek Açıklama:"
              rules={[
                {
                  required: true,
                  message: "Lütfen adres girin",
                },
              ]}
            >
              <Input.TextArea />
            </Form.Item>
          </Col>
        </Row>

        <Form.Item>
          <Button htmlType="submit">Uygula</Button>
        </Form.Item>
      </Form>
    </>
  );
}

export default FoodForm;
