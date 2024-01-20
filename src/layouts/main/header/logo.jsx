import React from "react";
import { Link } from "react-router-dom";

function Logo() {
  return (
    <Link to="/">
      <div className="font-dancing text-6xl text-white">Logo</div>
    </Link>
  );
}

export default Logo;
