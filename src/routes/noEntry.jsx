import React from "react";
import { useNavigate } from "react-router-dom";
import noEntryImage from "../../images/no_entry.jpg";

function NoEntry() {
  const navigate = useNavigate();

  const goToHome = () => {
    navigate("/");
  };

  return (
    <div className="flex flex-col items-center justify-center  ">
      <img src={noEntryImage} alt="No Entry" className="w-1/4   " />
      <h1 className="text-2xl mb-4">YETKİSİZ KULLANICI</h1>
      <button
        onClick={goToHome}
        className="bg-primary text-white px-4 py-2 rounded hover:bg-secondary transition"
      >
        Anasayfaya Dön
      </button>
    </div>
  );
}

export default NoEntry;
