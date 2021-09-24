import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Masters from "../img/masters.svg";
import Grindoil from "../img/grindoil.svg";
import Autoestimeitor from "../img/autoestimeitor.svg";
export default function Works() {
  const [style, setStyle] = useState({
    displayHide: "block",
    displayShow: "none",
  });
  useEffect(() => {
    if (window.location.pathname === "/trabajos") {
      setStyle({
        displayHide: "none",
        displayShow: "block",
      });
    }
  }, []);

  const styleHide = {
    display: style.displayHide,
  };
  const styleShow = {
    display: style.displayShow,
  };

  return (
    <div className="works container">
      <div className="works-title" style={styleHide}>
        <p>
          Nuestro <strong>portafolio</strong>
        </p>
        <h2>Cada trabajo es un nuevo desafío</h2>
      </div>
      <div className="works-cards">
        <div className="work master">
          <img src={Masters} alt="masters app" />
          <div className="btns">
            <h3>Web para club de tenis y salon de eventos</h3>
            <p style={styleShow}>
              Creación de sitio web multipropósito. Esta web muestra contenido
              informativo acerca del club y de las instalaciones, información y
              contacto de los profesores, y además gestiona los turnos para el
              alquiler de las canchas tanto de Tenis como de Paddle.
            </p>
            <div className="btn-container">
              <Link to="/trabajos" className="btn" style={styleHide}>
                Conoce Más
              </Link>
              <a
                href="https://masterstenisbb.web.app/"
                className="btn"
                style={styleShow}
                target="_blank"
                rel="noreferrer"
              >
                Conoce el sitio
              </a>
              <a
                href="https://github.com/martinfrola/webtenis"
                className="btn"
                style={styleShow}
                target="_blank"
                rel="noreferrer"
              >
                Ver repositorio
              </a>
            </div>
          </div>
        </div>
        <div className="work grindoil">
          <img src={Grindoil} alt="" />
          <div className="btns">
            <h3>Web para empresa de la industria aceitera</h3>
            <p style={styleShow}>
              Página web informativa acerca de una empresa aceitera referente en
              la región, consta con información acerca de sus procesos y
              productos, sus clientes y sección de contacto para personas
              interesadas.
            </p>
            <div className="btn-container">
              <Link to="/trabajos" className="btn" style={styleHide}>
                Conoce Más
              </Link>
              <a
                href="https://industriasgrindoil-6aaca.web.app/"
                className="btn"
                style={styleShow}
                target="_blank"
                rel="noreferrer"
              >
                Conoce el sitio
              </a>
              <a
                href="https://github.com/martinfrola/webgrindoil"
                className="btn"
                style={styleShow}
                target="_blank"
                rel="noreferrer"
              >
                Ver repositorio
              </a>
            </div>
          </div>
        </div>
        <div className="work autoestimeitor">
          <img src={Autoestimeitor} alt="" />
          <div className="btns">
            <h3>Juego interactivo para mejorar tu autoestima</h3>
            <p style={styleShow}>
              Autoestimeitor es un página web interactiva, donde podrás jugar a
              juegos y además, tanto recibir como enviarles mensajes a otras
              personas con la finalidad de sacarles una sonrisa.
            </p>
            <div className="btn-container">
              <Link to="/trabajos" className="btn" style={styleHide}>
                Conoce Más
              </Link>
              <a
                href="https://autoestimeitor.web.app/"
                className="btn"
                style={styleShow}
                target="_blank"
                rel="noreferrer"
              >
                Conoce el sitio
              </a>
              <a
                href="https://github.com/martinfrola/autoestimeitor"
                className="btn"
                style={styleShow}
                target="_blank"
                rel="noreferrer"
              >
                Ver repositorio
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
