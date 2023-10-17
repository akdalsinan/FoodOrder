import React, { useState } from "react";
import { Button, Form, Input, Flex, Tabs, Checkbox } from "antd";
import FormItem from "antd/es/form/FormItem";
import SliderCaptcha from "rc-slider-captcha";

import closeeye from "../../../images/closeeye.png";
import openeye from "../../../images/openeye.png";
import bgImage from "../../../images/bgimage.jpg";
import puzzleImage from "../../../images/puzzleurl.png";

function User() {
  const [checked, setchecked] = useState(false);
  const [slider, setSlider] = useState(false);
  const [photo, setPhoto] = useState(openeye);

  const onchange = (e) => {
    setchecked(e.target.checked);
  };

  const onFinish = (value) => {
    console.log(value);
  };

  const customTipText = "asdasda"

  console.log("slider", slider);
  console.log("checked", checked);
  const items = [
    {
      key: "1",
      label: "Login",
      children: (
        <div className="flex">
          <Form className=" w-[300px]" onFinish={onFinish}>
            <FormItem name="nameSurname">
              <Input placeholder="Name Surname" />
            </FormItem>
            <FormItem name="password">
              <Input
                placeholder="password"
                onFocus={() => setPhoto(closeeye)}
                onBlur={() => setPhoto(openeye)}
              />
            </FormItem>

            <FormItem>
              <Button
                htmlType="submit "
                className="bg-primary text-white hover:text-secondary cursor-pointer"
              >
                LOGIN
              </Button>
            </FormItem>
          </Form>
          <img src={photo} className="w-[200px] h-[250px] " alt="" />
        </div>
      ),
    },
    {
      key: "2",
      label: "Sign Up",
      children: (
        <div className="flex  ">
          <Form className=" w-[300px] " onFinish={onFinish}>
            <FormItem name="nameSurname">
              <Input placeholder="Name Surname" />
            </FormItem>
            <FormItem name="email">
              <Input placeholder="Mail" />
            </FormItem>
            <FormItem name="password">
              <Input.Password
                placeholder="password"
                onFocus={() => setPhoto(closeeye)}
                onBlur={() => setPhoto(openeye)}
              />
            </FormItem>
            <Checkbox onChange={onchange}></Checkbox>
            <h className="text-gray-500">
              Kişisel Verilerimin İşlenmesine Yönelik{" "}
              <a className="">Aydınlatma Metnini</a>
              Okudum
            </h>

            <SliderCaptcha
              tipText={customTipText}
              mode="float"
              request={async () => {
                return {
                  bgUrl: bgImage,
                  puzzleUrl: puzzleImage,
                };
              }}
              onVerify={async (data) => {
                if (data?.x && data.x > 87 && data.x < 93) {
                  setSlider(true);
                  return Promise.resolve();
                }
                setSlider(false);
                return Promise.reject();
              }}
            />

            <FormItem>
              <Button
                disabled={!(checked && slider)}
                htmlType="submit "
                className="bg-primary text-white hover:text-secondary cursor-pointer"
              >
                SİGN UP
              </Button>
            </FormItem>
          </Form>
          <img src={photo} className="w-[200px] h-[250px] " alt="" />
        </div>
      ),
    },
  ];

  return (
    <div className="mt-[5px]">
      <Flex align="center" justify="center">
        <Tabs animated={true} centered={true} items={items} />
      </Flex>
    </div>
  );
}

export default User;
