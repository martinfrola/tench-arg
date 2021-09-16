import React, { useEffect } from "react";
import Dev from "../img/dev-service.svg";
import Design from "../img/design-service.svg";
import Content from "../img/contenido-service.svg";
import Seo from "../img/seo-service.svg";
import { Link } from "react-router-dom";

export default function ShowTools(props) {
  const show = props.tool.currentTool;
  useEffect(() => {
    const desarrollo = document.querySelector("#desarrollo");
    const diseño = document.querySelector("#diseño");
    const contenido = document.querySelector("#contenido");
    const seo = document.querySelector("#seo");

    if (show === "Desarrollo Web") {
      desarrollo.classList.add("show-tool");
    } else {
      desarrollo.classList.remove("show-tool");
    }

    if (show === "Diseño Web") {
      diseño.classList.add("show-tool");
    } else {
      diseño.classList.remove("show-tool");
    }

    if (show === "Contenido Digital") {
      contenido.classList.add("show-tool");
    } else {
      contenido.classList.remove("show-tool");
    }

    if (show === "SEO Local") {
      seo.classList.add("show-tool");
    } else {
      seo.classList.remove("show-tool");
    }
  });
  return (
    <div className="current-tool">
      <div id="desarrollo" className="tool-option">
        <img src={Dev} alt="" />
        <div className="tool-description">
          <p>
            ¡Creamos tu sitio web con las tecnologías mas usadas de la web! Tus
            páginas van a ser veloces además de funcionales.
          </p>
          <div className="btn-servicios">
            <Link to="servicios" className="btn">
              Más Información
            </Link>
          </div>
        </div>
      </div>
      <div id="diseño" className="tool-option">
        <img src={Design} alt="" />
        <div className="tool-description">
          <p>
            Diseñamos tu web enfocados en la experiencia de usuario, para que
            quieran utilizarla una y otra vez.
          </p>
          <div className="btn-servicios">
            <Link to="servicios" className="btn">
              Más Información
            </Link>
          </div>
        </div>
      </div>
      <div id="contenido" className="tool-option">
        <img src={Content} alt="" />
        <div className="tool-description">
          <p>
            Enfcados en tus necesidades, creamos contenido de fotos, videos,
            posteos para tus redes y mucho más
          </p>
          <div className="btn-servicios">
            <Link to="servicios" className="btn">
              Más Información
            </Link>
          </div>
        </div>
      </div>
      <div id="seo" className="tool-option">
        <img src={Seo} alt="" />
        <div className="tool-description">
          <p>
            Posicionamos tu sitio web en Google, para que llegues a cada rincón
            del mundo!{" "}
          </p>
          <div className="btn-servicios">
            <Link to="servicios" className="btn">
              Más Información
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
