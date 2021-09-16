import React from "react";
import BlogError from "../img/blog-error.svg";

export default function Blog() {
  return (
    <div className="blog container text-center">
      <img src={BlogError} alt="Actualmente esta creando nuevos blogs" />
      <h1>¡Pronto vas a poder disfrutar de nuestros Blogs!</h1>
      <p>
        Para no perderte nada podés ver nuestro contenido diário en {""}
        <a
          href="https://www.instagram.com/tench_arg/"
          target="_blank"
          rel="noreferrer"
        >
          Instagram
        </a>
      </p>
    </div>
  );
}
