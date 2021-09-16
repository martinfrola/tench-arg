import React, { lazy, Suspense } from "react";
import cohete from "./img/cohete.svg";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  const Home = lazy(() => import("./components/Home"));
  const Footer = lazy(() => import("./components/Footer"));
  const GotopBtn = lazy(() => import("./components/GotopBtn"));
  const Servicios = lazy(() => import("./components/Servicios"));
  const Trabajos = lazy(() => import("./components/Trabajos"));
  const Blog = lazy(() => import("./components/Blog"));
  const Contacto = lazy(() => import("./components/Contacto"));
  const Nav = lazy(() => import("./components/Nav"));

  return (
    <Suspense
      fallback={<img src={cohete} alt="loading..." className="loading-icon" />}
    >
      <BrowserRouter>
        <Nav />
        <Switch>
          <Route path="/servicios" component={Servicios} />
          <Route path="/contacto" component={Contacto} />
          <Route path="/trabajos" component={Trabajos} />
          <Route path="/blog" component={Blog} />
          <Route exact path="/" component={Home} />
        </Switch>
        <Footer />
      </BrowserRouter>
      <GotopBtn />
    </Suspense>
  );
}

export default App;
