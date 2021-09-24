import React, { useEffect } from "react";
import Header from "./Header";
import OurTools from "./OurTools";
import Works from "./Works";

export default function Home(props) {
  useEffect(() => {
    if (props.location.pathname === "/") {
      window.scrollTo(0, 0);
    }
  });
  return (
    <React.Fragment>
      <Header />
      <OurTools />

      <Works />
    </React.Fragment>
  );
}
