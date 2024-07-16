import React from "react";
import "./style.css";

function Index() {
  return (
    <button class="Btn">
      <div class="sign">
        <svg viewBox="0 0 512 512">
          <path d="M502.3 190.8L327.4 338.4c-4.8 4.3-11 6.5-17.4 6.5s-12.6-2.2-17.4-6.5L9.7 190.8c-8.4-7.5-2.5-22.8 9-22.8H493c11.5 0 17.4 15.3 9 22.8zM493 95H19C8.5 95 0 103.5 0 114v284c0 10.5 8.5 19 19 19H493c10.5 0 19-8.5 19-19V114c0-10.5-8.5-19-19-19zM256 294.6L495 120.4c9-7.5 2.5-22.8-9-22.8H19c-11.5 0-17.4 15.3-9 22.8L256 294.6z" />
        </svg>
      </div>

      <div class="text">Mesaj Gönder...</div>
    </button>
  );
}

export default Index;
