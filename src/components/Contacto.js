import React, { useState } from "react";
import Logo from "../img/logotench.png";
import { initializeApp } from "firebase/app";
import { getFirestore, addDoc, collection } from "firebase/firestore";
import Swal from "sweetalert2";

export default function Contacto() {
  //Inicación de firebase
  const firebaseApp = initializeApp({
    apiKey: "AIzaSyBvM5i09B_UQoHqE2fcUNVn9t9htisphr4",
    authDomain: "tench-arg.firebaseapp.com",
    projectId: "tench-arg",
    storageBucket: "tench-arg.appspot.com",
    messagingSenderId: "388159337238",
    appId: "1:388159337238:web:2d9431aa61d31ff44dd637",
    measurementId: "G-TME7LQNXMX",
  });
  const db = getFirestore();
  //Hook para almacenar mensaje
  const [data, setData] = useState({
    nombre: "",
    email: "",
    tel: "",
    mensaje: "",
  });

  //Hook para dar estilos cuando no se valida el numero de telefono
  const [styleError, setStyleError] = useState({
    borderBottom: "",
    display: "none",
  });

  //Validación y guardado del mensaje en el estado del componente
  function handleChange(e) {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
    const telValidation = document.getElementById("tel");
    const numeros = /^([0-9])*$/;
    if (telValidation.value.search(numeros)) {
      setStyleError({
        borderBottom: "1px solid red",
        display: "block",
      });
    } else {
      setStyleError({
        borderBottom: "",
        display: "none",
      });
    }
  }

  //Envío del mensaje a firestore
  function handleSubmit(e) {
    e.preventDefault();
    if (data.nombre === "" || data.email === "" || data.mensaje === "") {
      Swal.fire({
        icon: "error",
        title: "Ups, faltó completar algún campo obligatorio!",
        confirmButtonText: "Entendido",
        confirmButtonColor: "#00204a",
      });
    } else {
      try {
        //Guardamos info
        const dbRef = addDoc(collection(db, "mensajes"), {
          data,
        });
        // mensaje de confiración
        Swal.fire({
          icon: "success",
          iconColor: "#005792",
          title: "Tu mensaje se envió correctamente.",
          text: " ¡Te responderemos lo mas rápido posible!",
          showConfirmButton: false,
          timer: 5000,
          timerProgressBar: true,
        });
        //Vaciamos los inputs
        const cleanInputs = document.querySelectorAll(".campo-input");
        cleanInputs.forEach((input) => {
          input.value = "";
        });
      } catch (e) {
        //En caso de un error, aparecera esta mensaje
        Swal.fire({
          icon: "error",
          iconColor: "red",
          title: "Ups, hubo un problema con nuestra base de datos!",
          text: "Vuelve a intentar en unos minutos.",
          confirmButtonText: "Entendido",
          confirmButtonColor: "#00204a",
        });
        console.log(e);
      }
    }
  }

  const styleInput = {
    borderBottom: styleError.borderBottom,
  };
  const styleP = {
    display: styleError.display,
    color: "red",
    margin: "3px 0 0 0",
  };
  return (
    <div className="text-center container contacto" onSubmit={handleSubmit}>
      <img src={Logo} alt="logo tench" />
      <h1>Contactanos</h1>
      <form className="contact-form">
        <div className="campo">
          <label htmlFor="nombre">
            Nombre <strong>*</strong>
          </label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            onChange={handleChange}
            className="campo-input"
          />
        </div>
        <div className="campo">
          <label htmlFor="email">
            Email <strong>*</strong>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            onChange={handleChange}
            className="campo-input"
          />
        </div>
        <div className="campo">
          <label htmlFor="tel">Telefono (opcional)</label>
          <input
            type="text"
            id="tel"
            name="tel"
            onChange={handleChange}
            className="campo-input"
            style={styleInput}
            placeholder="Escribe solo numeros"
          />
          <p style={styleP}>El número de telefono no es válido</p>
        </div>
        <div className="campo">
          <label htmlFor="mensaje">
            ¿En qué te podemos ayudar? <strong>*</strong>
          </label>
          <textarea
            name="mensaje"
            id="mensaje"
            onChange={handleChange}
            className="campo-input"
          ></textarea>
        </div>
        <p>
          Los campos indicados con <strong>*</strong> son obligatorios.
        </p>
        <button type="submit" className="btn">
          Enviar
        </button>
      </form>
    </div>
  );
}
