import React from "react";
import resim4 from "../../../images/about.png";
import { Col, Row } from "antd";

import {
  FaXTwitter,
  FaFacebookF,
  FaWhatsapp,
  FaLinkedinIn,
} from "react-icons/fa6";
import SocialButton from "./components/socialButton";

function About() {
  return (
    <div className="mt-8 ">
      <Row justify={"center"}>
        <Col span={10}>
          <h1 className="text-4xl font-dancing"> About </h1>
          <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page editors now use Lorem Ipsum as their default
            model text, and a search for 'lorem ipsum' will uncover many web
            sites still in their infancy. Various versions have evolved over the
            years, sometimes by accident, sometimes on purpose.
          </p>
          <div className="flex flex-wrap gap-5 mt-8">
            <SocialButton icon={<FaFacebookF />} bg={"blue"} />
            <SocialButton icon={<FaXTwitter />} bg={"black"} />
            <SocialButton icon={<FaWhatsapp />} bg={"green"} />
            <SocialButton icon={<FaLinkedinIn />} bg={"blue"} />
          </div>
        </Col>
        <Col offset={1} span={10}>
          <img style={{ width: 300 }} src={resim4} alt="" />
        </Col>
      </Row>
    </div>
  );
}

export default About;
