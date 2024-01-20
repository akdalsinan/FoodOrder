import React from "react";
import FooterContact from "./components/footerContact";
import FooterOpenHour from "./components/footerOpenHour";
import FooterCalender from "./components/footerCalender";

function Footer() {
  // fetch("http://localhost:8080/api/getAll")
  //   .then((response) => response.json())
  //   .then(function (todos) { console.log(todos)
  //     // todos.map((todo) => {
  //   console.log(todo.name); //Başlıkları console' a yazdırma
  // }
  // );
  // });
  return (
    <div className="bg-secondary text-primary flex flex-wrap justify-center mt-auto text-center gap-40 ">
      <FooterContact />
      <FooterCalender />
      <FooterOpenHour />
    </div>
  );
}

export default Footer;
