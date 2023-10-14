import React from "react";
import { Link } from "react-router-dom";

const ViewMoreButton = ({linkPath}) => {
  return (
    <Link to={linkPath} className="hover:text-primary cursor-pointer">
      <button className="btn-primary disabled">View More</button>
    </Link>
  );
};

export default ViewMoreButton;
