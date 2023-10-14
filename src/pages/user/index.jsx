import React, { useState } from "react";
import { Button, Form, Input, Flex, Tabs, Checkbox } from "antd";
import FormItem from "antd/es/form/FormItem";

import closeeye from "../../../public/images/closeeye.png";
import openeye from "../../../public/images/openeye.png";
import bgImage from "../../../public/images/bgimage.jpg";
import puzzleImage from "../../../public/images/puzzleurl.png";

import ReCAPTCHA from "react-google-recaptcha";
import { createRef } from "react";

import SliderCaptcha from "rc-slider-captcha";
import { data } from "autoprefixer";

function User() {
  const recaptchaRef = createRef();
  const [checked, setchecked] = useState(false);
  const [slider, setSlider] = useState(false);
  const [photo, setPhoto] = useState(openeye);
  const onchange = (e) => {
    setchecked(e.target.checked);
  };
  const onFinish = (value) => {
    console.log(value);
  };
  const handleRecaptchaChange = (value) => {
    console.log("reCAPTCHA value:", value);
  };
console.log("slider",slider)
console.log("checked",checked)
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
            {/* <ReCAPTCHA
              ref={recaptchaRef}
              sitekey={"6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"}
              onChange={handleRecaptchaChange}
             // grecaptcha={grecaptchaObject}
            ></ReCAPTCHA> */}

            <SliderCaptcha
              placement="asdasdadsadasdas"
              mode="float"
              request={async () => {
                // await sleep();
                return {
                  bgUrl: bgImage,
                  puzzleUrl: puzzleImage,
                };
              }}
              onVerify={async (data) => {
                // console.log(data.errorCount);
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
                disabled={!(checked && slider) }
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
