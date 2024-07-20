import {
  Button,
  Checkbox,
  Col,
  Flex,
  Form,
  Input,
  Row,
  Select,
  Upload,
} from "antd";
import {
  UploadOutlined,
  LoadingOutlined,
  PlusOutlined,
} from "@ant-design/icons";
import React, { useState } from "react";
import { useEffect } from "react";

import { addFood, updateFood } from "../../../services/food";

function FoodForm({ selectedRow, form, handleOk, getAllFoods }) {
  const onFinish = (value) => {
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

    const urunId = createDataUrunName;
    const foodId = selectedRow && selectedRow._id;

    const formData = new FormData();

    formData.append("urunId", urunId);
    formData.append("foodId", foodId);
    formData.append("urunName", value.urunName);
    formData.append("foodName", value.foodName);
    formData.append("foodPrice", value.foodPrice);
    formData.append("foodDesc", value.foodDesc);
    formData.append("foodImage", fileList[0].originFileObj);

    handleOk();

    console.log("formData", formData);

    selectedRow
      ? updateFood(formData)
          .then((response) => {
            if (response.data.isSuccess) {
              getAllFoods();
            }
          })
          .catch((error) => console.log("error", error))
      : addFood(formData)
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

  const [fileList, setFileList] = useState([]);

  const handleFileChange = ({ fileList }) => setFileList(fileList);

  console.log("fileList", fileList);

  const uploadButton = (
    <button
      style={{
        border: 0,
        background: "none",
      }}
      type="button"
    >
      <PlusOutlined />
      <div
        style={{
          marginTop: 8,
        }}
      >
        Upload
      </div>
    </button>
  );

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

        <Row gutter={16}>
          <Col span={24}>
            <Form.Item
              label="Yemek Resmi"
              rules={[
                { required: true, message: "Please upload a food image!" },
              ]}
            >
              <Upload
                listType="picture"
                beforeUpload={() => false}
                fileList={fileList}
                onChange={handleFileChange}
              >
                {uploadButton}
              </Upload>
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
