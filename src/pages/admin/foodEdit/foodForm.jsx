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
import ImgCrop from "antd-img-crop";
import { addFood, updateFood } from "../../../services/food";
import "./style.css";

function FoodForm({ selectedRow, form, handleOk, getAllFoods }) {
  const apiUrl = import.meta.env.VITE_API_URI;

  const [fileList, setFileList] = useState([]);

  const onFinish = (value) => {
    if (value.urunName === "pizza") {
      var createDataUrunName = 1;
    } else if (value.urunName === "hamburger") {
      var createDataUrunName = 2;
    } else if (value.urunName === "makarna") {
      var createDataUrunName = 3;
    }

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
      console.log("selectedRow", selectedRow);
      setFileList([
        {
          uid: "1",
          name: selectedRow.foodImage
            ? selectedRow.foodImage.split("/").pop()
            : "image.png",
          status: "done",
          url: `${apiUrl}uploads/${selectedRow.foodImage}`,
        },
      ]);
      form.setFieldsValue({
        foodName: selectedRow.foodName,
        foodDesc: selectedRow.foodDesc,
        foodPrice: selectedRow.foodPrice,
        urunName: selectedRow.urunName,
      });
    } else {
      form.resetFields();
      setFileList([]);
    }
  }, [selectedRow, form]);

  const handleFileChange = ({ fileList }) => {
    setFileList(fileList);
  };

  const uploadButton = (
    <button
      style={{
        borderRadius: "solid",
        borderColor: "red",
        border: 1,
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
        Resim Yükle
      </div>
    </button>
  );

  const onPreview = async (file) => {
    let src = file.url;
    if (!src) {
      src = await new Promise((resolve) => {
        const reader = new FileReader();
        reader.readAsDataURL(file.originFileObj);
        reader.onload = () => resolve(reader.result);
      });
    }
    const image = new Image();
    image.src = src;
    const imgWindow = window.open(src);
    imgWindow?.document.write(image.outerHTML);
  };

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
                  message: "Lütfen Yemek İsmi Girin",
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
                  message: "Lütfen Yemek Türü Girin",
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
                  message: "Lütfen Yemek Fiyatı Girin",
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
                  message: "Lütfen Yemek Açıklama Girin",
                },
              ]}
            >
              <Input.TextArea />
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={16}>
          <Col span={24}>
            <Form.Item name="foodImage" label="Yemek Resmi">
              <ImgCrop
                modalClassName="modals"
                // className="custom-img-crop"
                modalOk="Yükle"
                modalCancel="İptal"
                modalTitle="Resmi Düzenle"
                rotationSlider
                aspectSlider
              >
                <Upload
                  listType="picture"
                  beforeUpload={() => false}
                  fileList={fileList}
                  onChange={handleFileChange}
                  onPreview={onPreview}
                >
                  {fileList.length < 1 && uploadButton}
                </Upload>
              </ImgCrop>
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
