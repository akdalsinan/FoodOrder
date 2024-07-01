import React, { useEffect, useState } from "react";
import Cards from "react-credit-cards-2";
import { Form, Input, Row, Col, Checkbox, Divider, Button } from "antd";
import "react-credit-cards-2/dist/es/styles-compiled.css";
import { useSelector } from "react-redux";
import {
  addCreditCart,
  deleteCreditCar,
  getCreditCartById,
  updateCreditCart,
} from "../../services/userCreditCart";

function CreditCard({ infosOnFinish, page }) {
  const [form] = Form.useForm();
  const user = useSelector((state) => state.userToken.user);

  const [state, setState] = useState({
    number: "",
    expiry: "",
    cvc: "",
    name: "",
    focus: "",
  });

  useEffect(() => {
    getCreditCartById(user.id)
      .then((response) => {
        if (response.data.isSuccess) {
          const { cartNo, cartName, cartExpiry, cartCvc, _id } =
            response.data.data[0];
          setState({
            number: cartNo,
            name: cartName,
            expiry: cartExpiry,
            cvc: cartCvc,
            focus: "",
            id: _id,
          });
          form.setFieldsValue({
            number: cartNo,
            cartName: cartName,
            expiry: cartExpiry,
            cvc: cartCvc,
          });
        }
      })
      .catch((error) => {
        console.error("Error ", error);
      });
  }, [user.id, form]);

  const handleInputChange = (evt) => {
    const { name, value } = evt.target;
    setState((prev) => ({ ...prev, [name]: value }));
    form.setFieldsValue({ [name]: value });
  };

  const handleInputFocus = (evt) => {
    setState((prev) => ({ ...prev, focus: evt.target.name }));
  };

  const handleOnFinish = (values) => {
    const createData = {
      cartId: state.id !== undefined && state.id,
      user: user.id,
      cartName: values.cartName,
      cartNo: values.number,
      cartExpiry: values.expiry,
      cartCvc: values.cvc,
    };

    //eğer kayıtlı kart yoksa ekleme servisi varsa güncelleme servisine gider
    state.id === undefined
      ? addCreditCart(createData)
          .then((response) => {
            if (response.data.isSuccess) {
              form.setFieldsValue({
                number: response.data.creditCart.cartNo,
                cartName: response.data.creditCart.cartName,
                expiry: response.data.creditCart.cartExpiry,
                cvc: response.data.creditCart.cartCvc,
              });
            }
          })
          .catch((error) => {
            console.error("error ", error);
          })
      : updateCreditCart(createData)
          .then((response) => {
            if (response.data.isSuccess) {
              form.setFieldsValue({
                number: response.data.data.cartNo,
                cartName: response.data.data.cartName,
                expiry: response.data.data.cartExpiry,
                cvc: response.data.data.cartCvc,
              });
            }
          })
          .catch((error) => {
            console.error("error ", error);
          });
  };

  //kayıtlı kartı silme fonksiyonu
  const handleDeleteCart = () => {
    deleteCreditCar(state.id)
      .then((response) => {
        if (response.data.isSuccess) {
          form.resetFields();
          setState({
            number: "",
            expiry: "",
            cvc: "",
            name: "",
            focus: "",
          });
        }
      })
      .catch((error) => {
        console.error("Error ", error);
      });
  };

  return (
    <div style={{ marginTop: "35px" }}>
      <Divider />
      <Cards
        number={state.number}
        expiry={state.expiry}
        cvc={state.cvc}
        name={state.name}
        focused={state.focus}
      />
      <Form
        form={form}
        layout="vertical"
        onFinish={infosOnFinish || handleOnFinish}
        initialValues={state}
      >
        <Row style={{ marginTop: "15px" }} gutter={8}>
          <Col span={12}>
            <Form.Item
              name="number"
              rules={[
                { required: true, message: "Lütfen kart numaranızı girin" },
              ]}
            >
              <Input
                name="number"
                placeholder="Kart Numarası"
                value={state.number}
                onChange={handleInputChange}
                onFocus={handleInputFocus}
              />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              name="cartName"
              rules={[{ required: true, message: "Lütfen adınızı girin" }]}
            >
              <Input
                name="name"
                placeholder="Ad Soyad"
                value={state.name}
                onChange={handleInputChange}
                onFocus={handleInputFocus}
              />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              name="expiry"
              rules={[
                {
                  required: true,
                  message: "Lütfen son kullanma tarihini girin",
                },
              ]}
            >
              <Input
                type="tel"
                name="expiry"
                placeholder="AA/YY"
                value={state.expiry}
                onChange={handleInputChange}
                onFocus={handleInputFocus}
              />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              name="cvc"
              rules={[{ required: true, message: "Lütfen CVC kodunu girin" }]}
            >
              <Input
                type="tel"
                name="cvc"
                placeholder="CVC"
                value={state.cvc}
                onChange={handleInputChange}
                onFocus={handleInputFocus}
              />
            </Form.Item>
          </Col>
        </Row>
        {page === "basket" && state.number === "" && (
          <Form.Item name="cartSave" valuePropName="checked">
            <Checkbox>Kart Bilgilerimi Kaydet</Checkbox>
          </Form.Item>
        )}
        {page !== "basket" && (
          <Form.Item>
            <Button
              className="bg-primary text-secondary hover:text-secondary cursor-pointer "
              htmlType="submit"
            >
              {state.id === undefined
                ? "Kart Bilgilerimi Kaydet"
                : "Kart Bilgilerimi Güncelle"}
            </Button>
          </Form.Item>
        )}

        {page !== "basket" && state.id !== undefined && (
          <Form.Item>
            <Button onClick={handleDeleteCart} danger>
              Kayıtlı Kartımı Sil
            </Button>
          </Form.Item>
        )}
      </Form>
    </div>
  );
}

export default CreditCard;
