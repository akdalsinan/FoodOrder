import { Col, Input, Form, Row, Button, Checkbox } from "antd";
import FormItem from "antd/es/form/FormItem";
import TextArea from "antd/es/input/TextArea";
import React, { useState } from "react";

function Contact() {
  const [bool, setBool] = useState(false);
  console.log(bool);
  const onFinish = (value) => {
    console.log(value);
  };
  return (
    <div className="mt-5">
      <Row>
        <Col offset={3} span={8}>
          <Form onFinish={onFinish}>
            <FormItem name="nameSurname">
              <Input placeholder="Name Surname" />
            </FormItem>
            <FormItem name="gmail">
              <Input placeholder="Mail" />
            </FormItem>
            <FormItem name="PhoneNumber">
              <Input placeholder="Phone Number" />
            </FormItem>
            <FormItem name="TextArea">
              <TextArea rows={4} placeholder="You can write in this field" />
            </FormItem>

            <FormItem>
              <Button
                disabled
                // style={{display:"none"}}
                type={bool}
                htmlType="submit "
                className="bg-primary text-white hover:text-secondary cursor-pointer"
              >
                SEND
              </Button>
            </FormItem>
          </Form>
        </Col>

        <Col offset={1} span={11}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3058.5961970285825!2d32.82870817496899!3d39.95042118389028!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d34e95e58cebdd%3A0xb0a487ed057c548a!2zQU5LQW1hbGwgQWzEscWfdmVyacWfIE1lcmtlemk!5e0!3m2!1str!2str!4v1696071786663!5m2!1str!2str"
            width="500"
            height="350"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </Col>
      </Row>
    </div>
  );
}

export default Contact;
