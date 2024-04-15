import React from "react";

function ContactLinks({ name, icon }) {
  return (
    <div className="location flex flex-wrap">
      <div className="mt-1 mr-2">{icon}</div>
      <a className="font-sans hover:text-red-800 cursor-pointer " href="">
        {name}
      </a>
    </div>
  );
}

export default ContactLinks;
