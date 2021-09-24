import React from "react";
import logoTench from "../img/logotench.png";
import { Link } from "react-router-dom";
export default function Nav() {
  function handleClick() {
    const menuBtn = document.querySelector(".menu-btn");
    menuBtn.classList.toggle("open");
    const optionsMobile = document.querySelector(".options-mobile");
    optionsMobile.classList.toggle("view");
  }

  function closeNav() {
    const menuBtn = document.querySelector(".menu-btn");
    const optionsMobile = document.querySelector(".options-mobile");
    menuBtn.classList.remove("open");
    optionsMobile.classList.remove("view");
  }

  window.addEventListener("resize", () => {
    const menuBtn = document.querySelector(".menu-btn");
    const optionsMobile = document.querySelector(".options-mobile");

    if (window.innerWidth > 768) {
      menuBtn.classList.remove("open");
      optionsMobile.classList.remove("view");
    }
  });
  // const [style, setStyle] = useState({
  //   home: "",
  //   servicios: "",
  //   trabajos: "",
  //   blog: "",
  //   contacto: "",
  //   padding: ''
  // });
  // function handleBorder() {
  //   const location = window.location.pathname;
  //   console.log(location);
  //   const options = document.querySelectorAll(".option");
  //   options.forEach((option) => {
  //     const optionContent = option.textContent.toLowerCase();
  //     if (`/${optionContent}` === location) {
  //       setStyle({
  //         [optionContent]: "2px solid #00204a",
  //         padding: "5px",
  //       });
  //       console.log("igual", optionContent, location);
  //     } else {
  //       setStyle({
  //         home: "2px solid #00204a",
  //       });
  //     }
  //   });
  // }
  // const borderInicio = {
  //   borderBottom: style.home,
  //   paddingBottom: "5px",
  // };
  // const borderServicios = {
  //   borderBottom: style.servicios,
  //   paddingBottom: "5px",
  // };
  // const borderTrabajos = {
  //   borderBottom: style.trabajos,
  //   paddingBottom: "5px",
  // };
  // const borderBlog = {
  //   borderBottom: style.blog,
  //   paddingBottom: "5px",
  // };
  // const borderContacto = {
  //   borderBottom: style.contacto,
  //   paddingBottom: "5px",
  // };

  return (
    <div className="nav-bg">
      <div className="nav container">
        <a href="/">
          <img src={logoTench} alt="logo de la marca" />
        </a>

        <div className="nav-content">
          <button className="menu-btn" onClick={handleClick}>
            <span className="top-line"></span>
            <span className="mid-line"></span>
            <span className="bottom-line"></span>
          </button>
          <div className="options">
            <Link to="/">Inicio</Link>
            <Link to="/servicios">Servicios</Link>
            <Link to="/trabajos">Trabajos</Link>
            <Link to="/blog">Blog</Link>
            <Link to="/contacto">Contacto</Link>
          </div>
          <div className="options-mobile">
            <Link to="/" onClick={closeNav}>
              Inicio
            </Link>
            <Link to="/servicios" onClick={closeNav}>
              Servicios
            </Link>
            <Link to="/trabajos" onClick={closeNav}>
              Trabajos
            </Link>
            <Link to="/blog" onClick={closeNav}>
              Blog
            </Link>
            <Link to="/contacto" onClick={closeNav}>
              Contacto
            </Link>
          </div>
        </div>
        <div className="blank-space"></div>
      </div>
    </div>
  );
}
