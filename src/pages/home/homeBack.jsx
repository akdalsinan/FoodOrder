import React from "react";
import { Carousel } from "antd";
import { Link } from "react-router-dom";

function HomeBack() {
  return (
    <div
      className="relative  bg-cover bg-center"
      style={{
        backgroundImage: "url(/images/ham.jpg)",
        height: "calc(100vh - 88px)",
      }}
    >
      <Carousel
        dotPosition="left"
        // afterChange={onChange}
        style={{
          position: "absolute",
          width: "100%",
          height: 100,
        }}
      >
        <div style={{ height: 100, marginLeft: "100px" }}>
          <h1
            className="text-primary"
            style={{ height: 170, width: 300, marginLeft: "100px" }}
          >
            Doloremque, itaque aperiam facilis rerum, commodi, temporibus
            sapiente ad mollitia laborum quam quisquam esse error unde. Tempora
            ex doloremque, labore, sunt repellat dolore, iste magni quos nihil
            ducimus libero ipsam.
          </h1>
          <Link to="/about" className="hover:text-primary cursor-pointer">
            <button style={{ marginLeft: "100px" }} className="btn-primary">
              {" "}
              Order Now
            </button>
          </Link>
        </div>
        <div style={{ height: 100, marginLeft: "50px" }}>
          <h1
            className="text-primary"
            style={{ height: 170, width: 300, marginLeft: "100px" }}
          >
            Doloremque, itaque aperiam facilis rerum, commodi, temporibus
            sapiente ad mollitia laborum quam quisquam esse error unde. Tempora
            ex doloremque, labore, sunt repellat dolore, iste magni quos nihil
            ducimus libero ipsam.
          </h1>
          <Link to="/about" className="hover:text-primary cursor-pointer">
            <button style={{ marginLeft: "100px" }} className="btn-primary">
              Order Now
            </button>
          </Link>
        </div>
      </Carousel>
    </div>
  );
}

export default HomeBack;
