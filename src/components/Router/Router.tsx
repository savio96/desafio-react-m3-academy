import React from "react";
import { Route, BrowserRouter } from "react-router-dom";
import { Home } from "../../pages/Home";
/*
import Home from "./Home";
import Sobre from "./Sobre";
import Usuario from "./Usuario";
<Route component={Home} path="/" exact />
      <Route component={Sobre} path="/sobre" />
      <Route component={Usuario} path="/usuario" />
*/
const Routes = () => {
  return (
    <BrowserRouter>
      <Route path="/" element={<Home />} />
    </BrowserRouter>
  );
};

export { Routes };
