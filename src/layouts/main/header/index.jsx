import React, { useState } from "react";

import { FaShoppingCart, FaUserAlt, FaSearch } from "react-icons/fa";
import Logo from "./logo";
import { Link } from "react-router-dom";
import ModalSearch from "./modalSearch";

function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
    console.log("tıklandı", isModalOpen);
  };

  return (
    <div className="h-[5.5rem]  bg-secondary ">
      <div className=" mx-auto bg-secondary flex justify-between h-full">
        <Logo />

        <nav>
          <ul className="flex text-white  justify-between">
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
              to="/booktable"
              className="font-sans px-[8px] py-[14px] uppercase hover:text-primary cursor-pointer"
            >
              contact
            </Link>
          </ul>
        </nav>
        <div className="py-[auto] text-white flex gap-x-4 items-center">
          <Link to="/user" className="hover:text-primary cursor-pointer">
            <FaUserAlt />
          </Link>

          <Link to="/shopbasket" className="hover:text-primary cursor-pointer">
            <FaShoppingCart />
          </Link>

          <a className="hover:text-primary cursor-pointer">
            <button onClick={showModal}>
              <FaSearch />
            </button>
          </a>
          <Link to="/shopbasket" className="hover:text-primary cursor-pointer">
            <button className="btn-primary"> sipariş ver</button>
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
