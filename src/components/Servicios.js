import React from "react";
import Dev from "../img/dev-service.svg";
import Design from "../img/design-service.svg";
import Content from "../img/contenido-service.svg";
import Seo from "../img/seo-service.svg";

export default function Servicios() {
  return (
    <div className="services container">
      <h1 className="text-center">Nuestros servicios</h1>
      <div className="service-dev service">
        <div className="service-content">
          <h2>Desarrollo Web</h2>
          <img className="img-mobile" src={Dev} alt="foto de servicio" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere est
            officiis neque quidem pariatur, reiciendis alias quibusdam.
            Officiis, repudiandae? Repellendus alias itaque nulla suscipit
            praesentium saepe voluptates earum iure repellat.
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
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere est
            officiis neque quidem pariatur, reiciendis alias quibusdam.
            Officiis, repudiandae? Repellendus alias itaque nulla suscipit
            praesentium saepe voluptates earum iure repellat.
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
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere est
            officiis neque quidem pariatur, reiciendis alias quibusdam.
            Officiis, repudiandae? Repellendus alias itaque nulla suscipit
            praesentium saepe voluptates earum iure repellat.
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
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere est
            officiis neque quidem pariatur, reiciendis alias quibusdam.
            Officiis, repudiandae? Repellendus alias itaque nulla suscipit
            praesentium saepe voluptates earum iure repellat.
          </p>
        </div>
        <div className="dev-image">
          <img className="img-desktop" src={Seo} alt="foto de servicio" />
        </div>
      </div>
    </div>
  );
}
