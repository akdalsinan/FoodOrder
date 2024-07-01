import { Button, Checkbox, Col, Flex, Form, Input, Row } from "antd";
import React from "react";
import MyNotification from "../../components/myNotification";
import { useSelector } from "react-redux";

function DrawerForm({ setCampaignCode, infosOnFinish, form }) {
  const user = useSelector((state) => state.userToken.user);

  const campingOnFinish = (value) => {
    if (value.campaignCode === "KPN25") {
      setCampaignCode(true);
    } else {
      setCampaignCode(false);
      MyNotification("warning", "Böyle Bir Kod Bulunmamakta");
    }
  };

  const campaignCodeOnChange = (value) => {
    if (value.target.value === "") {
      setCampaignCode(false);
    }
  };

  const initialValues = {
    name: user.username,
    adress: user.adress,
  };

  return (
    <>
      <Form
        form={form}
        onFinish={infosOnFinish}
        layout="vertical"
        initialValues={initialValues}
      >
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              name="name"
              label="Ad Soyad :"
              rules={[
                {
                  required: true,
                  message: "Lütfen ad soyad girin",
                },
              ]}
            >
              <Input />
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={16}>
          <Col span={18}>
            <Flex gap="large" align="center" wrap>
              <Form.Item name="orderNote" label="Sipariş Notu :">
                <Input />
              </Form.Item>

              <Form.Item name="dontRing" valuePropName="checked" label=" ">
                <Checkbox>Zili Çalma</Checkbox>
              </Form.Item>
              <Form.Item name="doorOK" valuePropName="checked" label=" ">
                <Checkbox>Siparişi Kapıma Bırak</Checkbox>
              </Form.Item>
            </Flex>
          </Col>
        </Row>

        <Row gutter={16}>
          <Col span={24}>
            <Form.Item
              name="adress"
              label="Adres :"
              rules={[
                {
                  required: true,
                  message: "Lütfen adres girin",
                },
              ]}
            >
              <Input.TextArea rows={4} />
            </Form.Item>
          </Col>
        </Row>
      </Form>

      <Form layout="inline" onFinish={campingOnFinish}>
        <Form.Item name="campaignCode" label="Kampanya Kodu">
          <Input allowClear onChange={campaignCodeOnChange} />
        </Form.Item>

        <Form.Item>
          <Button htmlType="submit">Uygula</Button>
        </Form.Item>
      </Form>
    </>
  );
}

export default DrawerForm;
