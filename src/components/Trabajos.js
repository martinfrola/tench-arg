import React, { useEffect } from "react";
import Works from "./Works";

export default function Trabajos(props) {
  useEffect(() => {
    if (props.location.pathname === "/trabajos") {
      window.scrollTo(0, 0);
    }
  });
  return (
    <div className="trabajos ">
      <h1 className="text-center trabajos-title">Nuestros trabajos</h1>
      <Works />
    </div>
  );
}
