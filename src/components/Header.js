import React from "react";
import "../backgrounds.css";
import cohete from "../img/cohete.svg";
import wp from "../img/whatsapp.svg";
import ig from "../img/instagram.svg";
import fb from "../img/facebook.svg";
import gh from "../img/github.svg";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="header">
      <div className="container header-content">
        <h1 className="title">Desarrollo y Diseño Web</h1>
        <p className="title-content">
          Impulsamos tu <strong>negocio</strong> en el mundo digital para que
          llegues a <strong>miles</strong> de personas
        </p>
        <div className="btn-header">
          <Link to="/contacto" className="btn">
            Contactanos
          </Link>
        </div>
      </div>
      <div className="social-media">
        <a
          href="https://www.instagram.com/tench_arg/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={ig} alt="logo de instagram" />
        </a>
        <a
          href="https://www.facebook.com/profile.php?id=100057531594346&show_switched_toast=true"
          target="_blank"
          rel="noreferrer"
        >
          <img src={fb} alt="logo de facebook" />
        </a>
        <a href="https://wa.link/mnwv1p" target="_blank" rel="noreferrer">
          <img src={wp} alt="logo de whatsapp" />
        </a>
        <a
          href="https://github.com/martinfrola"
          target="_blank"
          rel="noreferrer"
        >
          <img src={gh} alt="logo de github" />
        </a>
      </div>
      <img className="cohete-icon" src={cohete} alt="imagen de cohete" />
    </div>
  );
}
