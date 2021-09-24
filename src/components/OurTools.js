import React, { useEffect } from "react";
import { useState } from "react";
import ShowTools from "./ShowTools";

export default function WorksPrueba() {
  const [tool, setTool] = useState({
    currentTool: "Desarrollo Web",
  });

  function handleClick(e) {
    setTool({
      currentTool: e.target.textContent,
    });
  }

  useEffect(() => {
    const bgTool = document.querySelectorAll(".tool");
    bgTool.forEach((selectedTool) => {
      if (selectedTool.textContent === tool.currentTool) {
        selectedTool.classList.add("selected-tool");
      } else {
        selectedTool.classList.remove("selected-tool");
      }
    });
  });
  return (
    <div className="tools container">
      <div className="title-tools">
        <p>
          ¿Qué hacemos en <strong>Tench?</strong>
        </p>
        <h2>
          Utilizamos distintas herramientas para que tu negocio tome vuelo y
          genere un gran impacto
        </h2>
      </div>
      <div className="tools-content">
        <div className="tools-types">
          <ul>
            <li className="tool" onClick={handleClick}>
              Desarrollo Web
            </li>
            <li className="tool" onClick={handleClick}>
              Diseño Web
            </li>
            <li className="tool" onClick={handleClick}>
              Contenido Digital
            </li>
            <li className="tool" onClick={handleClick}>
              SEO Local
            </li>
          </ul>
        </div>
        <ShowTools tool={tool} />
      </div>
    </div>
  );
}
