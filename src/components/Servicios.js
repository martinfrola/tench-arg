import React, { useEffect } from "react";
import Dev from "../img/dev-service.svg";
import Design from "../img/design-service.svg";
import Content from "../img/contenido-service.svg";
import Seo from "../img/seo-service.svg";

export default function Servicios(props) {
  useEffect(() => {
    if (props.location.pathname === "/servicios") {
      window.scrollTo(0, 0);
    }
  });
  return (
    <div className="services container">
      <h1 className="text-center">Nuestros servicios</h1>
      <div className="service-dev service">
        <div className="service-content">
          <h2>Desarrollo Web</h2>
          <img className="img-mobile" src={Dev} alt="foto de servicio" />
          <p>
            Desarrollamos sitios web utilizando las últimas tecnologías como lo
            es <strong>React.js</strong> , el framework con el que están hechos
            applicaciones como Instagram. Orientamos el desarrollo a la
            <strong> funcionalidad</strong> y buscamos que los usuarios tengan
            que realizar el menor esfuerzo posible para lograr sus objetivos
            dentro de la página web.
          </p>
        </div>
        <div className="dev-image">
          <img className="img-desktop" src={Dev} alt="foto de servicio" />
        </div>
      </div>
      <div className="service-design service">
        <div className="service-content">
          <h2>Diseño Web</h2>
          <img className="img-mobile" src={Design} alt="foto de servicio" />
          <p>
            Diseñamos sitios web enfocados en lo que estamos tratando de
            <strong> comunicar</strong>. Nos detenemos a pensar desde que paleta
            de colores utilizar, hasta la manera en la que nos expresamos en un
            botón. Buscamos que el usuario tenga una experiencia{" "}
            <strong> rápida, intuitiva y eficiente.</strong>
          </p>
        </div>
        <div className="dev-image">
          <img className="img-desktop" src={Design} alt="foto de servicio" />
        </div>
      </div>
      <div className="service-content service">
        <div className="service-content">
          <h2>Creación de contenido</h2>
          <img className="img-mobile" src={Content} alt="foto de servicio" />
          <p>
            Te ayudamos a crear contenido para tu negocio, ya sea{" "}
            <strong>
              fotografías, contenido audiovisual, posteos o historias para tus
              redes,
            </strong>{" "}
            para que puedas lograr la comunidad con tu público que tanto buscás.
            Orientamos el contenido a tus objetivos y las{" "}
            <strong>necesidades de tus clientes</strong> ya que eres que el que
            mejor los conoce.
          </p>
        </div>
        <div className="dev-image">
          <img className="img-desktop" src={Content} alt="foto de servicio" />
        </div>
      </div>
      <div className="service-seo service">
        <div className="service-content">
          <h2>Estrategia SEO Local</h2>
          <img className="img-mobile" src={Seo} alt="foto de servicio" />
          <p>
            A través de un conjunto de{" "}
            <strong>estrategias de optimización</strong> para motores de
            búsqudeda como Google, posicionaremos tu negocio en la región para
            que las personas que estén buscando adquirir productos o servicios
            como los que ofrecés, <strong>te encuentren</strong> en internet.
          </p>
        </div>
        <div className="dev-image">
          <img className="img-desktop" src={Seo} alt="foto de servicio" />
        </div>
      </div>
    </div>
  );
}
