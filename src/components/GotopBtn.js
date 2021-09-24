import React from "react";
import arrow from "../img/arrow.svg";

export default function GotopBtn() {
  window.onscroll = function () {
    if (document.documentElement.scrollTop > 400) {
      const showBtn = document.querySelector(".top-btn");
      showBtn.classList.add("show");
    } else {
      const showBtn = document.querySelector(".top-btn");
      showBtn.classList.remove("show");
    }
  };

  function handleClick() {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <div className="scroll-top">
      <button className="top-btn" onClick={handleClick}>
        <img src={arrow} alt="icono de flecha" />
      </button>
    </div>
  );
}
