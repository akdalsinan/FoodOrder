import { Button } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import { FaLocationDot } from "react-icons/fa6";
import { IoCallSharp, IoMail } from "react-icons/io5";
// import ContactLinks from "./ContactLinks";

function FooterContact() {
  return (
    <div className="mt-4">
      <h4 className="font-dancing mx-auto py-1 text-2xl ">Contact</h4>

      <div>
        {/* <ContactLinks name={"location"} icon={<FaLocationDot />} />
        <ContactLinks name={"555 555 07 55"} icon={<IoCallSharp />} />
        <ContactLinks name={"demo@gmail.com"} icon={<IoMail />} /> */}
      </div>
    </div>
  );
}

export default FooterContact;
