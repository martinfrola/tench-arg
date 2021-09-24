import React from "react";
import wp from "../img/whatsapp.svg";
import ig from "../img/instagram.svg";
import fb from "../img/facebook.svg";
import gh from "../img/github.svg";
import { Link } from "react-router-dom";

export default function Footer() {
  const date = new Date();
  const añoActual = date.getFullYear();
  console.log(añoActual);
  return (
    <div className="footer text-center ">
      <div className="footer-content container">
        <div className="media-footer">
          <h3>¡Seguinos!</h3>
          <div className="media-icons">
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
        </div>
        <div className="footer-services">
          <h3>Nuestros servicios</h3>
          <Link to="/servicios">Desarrollo Web</Link>
          <Link to="/servicios">Diseño Web</Link>
          <Link to="/servicios">Creación de contenido</Link>
          <Link to="/servicios">Estrategia SEO</Link>
        </div>
        <div className="footer-contact">
          <h3>Contactanos</h3>
          <p>+542914419494</p>
          <p>tencharg@gmail.com</p>
        </div>
      </div>
      <p>Copyright&copy; Tench. Todos los derechos reservados {añoActual}.</p>
      <p className="copy">Powered by Tench.</p>
    </div>
  );
}
