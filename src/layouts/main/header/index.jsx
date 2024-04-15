import React, { useEffect, useState } from "react";

import { FaShoppingCart, FaUserAlt, FaSearch } from "react-icons/fa";
import { ShoppingCartOutlined } from "@ant-design/icons";
import Logo from "./logo";
import { Link } from "react-router-dom";
import ModalSearch from "./modalSearch";
import { Avatar, Badge, Button, Dropdown } from "antd";
import { useSelector } from "react-redux";

function Header() {
  const tokendeğeri = useSelector((state) => state.tokenBool.bool);
  const basketUrun = useSelector((state) => state.basket.value);

  const items = [
    {
      key: "1",
      label: (
        <Link to="/profile" className="hover:text-primary cursor-pointer">
          Profil
        </Link>
      ),
    },
    {
      key: "2",
      label: (
        <Link to="/user" className="hover:text-primary cursor-pointer">
          Çıkış Yap
        </Link>
      ),
    },
  ];

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [sessionToken, setSessionToken] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
    console.log("tıklandı", isModalOpen);
  };
  // const token = sessionStorage.getItem("token");
  // if (token ) {
  //   console.log("token false oldu");
  // } else {
  //   console.log("token true oldu");
  // }
  // useEffect(() => {
  //   if (token === false) {
  //     setSessionToken(false);
  //   } else {
  //     setSessionToken(true);
  //   }
  // }, [token]);

  // console.log("tokenSet", sessionToken);

  return (
    <div className="h-[5.5rem]  bg-secondary ">
      <div className=" mx-auto bg-secondary flex justify-between h-full px-20">
        <Logo />

        <nav className="flex justify-center">
          <ul className="flex items-center text-white justify-between">
            <Link
              to="/"
              className="font-sans px-[8px] py-[14px] uppercase hover:text-primary cursor-pointer "
            >
              home
            </Link>
            <Link
              to="about"
              className="font-sans px-[8px] py-[14px] uppercase hover:text-primary cursor-pointer"
            >
              about
            </Link>
            <Link
              to="/menu"
              className="font-sans px-[8px] py-[14px] uppercase hover:text-primary cursor-pointer"
            >
              menu
            </Link>
            <Link
              to="/contact"
              className="font-sans px-[8px] py-[14px] uppercase hover:text-primary cursor-pointer"
            >
              contact
            </Link>
          </ul>
        </nav>
        <div className="py-[auto] text-white flex gap-x-4 items-center">
          {tokendeğeri === true ? (
            <Dropdown menu={{ items }} placement="bottom">
              <button className="hover:text-primary cursor-pointer">
                <FaUserAlt />
              </button>
            </Dropdown>
          ) : (
            <Link to="/user" className="hover:text-primary cursor-pointer">
              <FaUserAlt />
            </Link>
          )}

          <Link to="/shopbasket" className="hover:text-primary cursor-pointer">
            <div>
              <div className="ml-2 rounded-full bg-red-500 text-white text-xs px-1">
                {basketUrun.length}
              </div>
              <div className="mb-4">
                <FaShoppingCart />
              </div>
            </div>
          </Link>

          <a className="hover:text-primary cursor-pointer">
            <button onClick={showModal}>
              <FaSearch />
            </button>
          </a>
          <Link to="/shopbasket" className="hover:text-primary cursor-pointer">
            <button className="btn-primary"> Order Now</button>
          </Link>
        </div>
        <ModalSearch
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
        />
      </div>
    </div>
  );
}

export default Header;
