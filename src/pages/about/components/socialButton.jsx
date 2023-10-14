import React from "react";

function SocialButton({icon,bg}) {
  return (
    <button style={{backgroundColor:bg}} class="cursor-pointer group block px-5 py-2 rounded-md text-white text-2xl font-bold shadow-2xl hover:scale-110 transition active:scale-90">
      {icon}
    </button>
  );
}

export default SocialButton;
