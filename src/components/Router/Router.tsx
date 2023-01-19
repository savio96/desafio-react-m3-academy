import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import { Home } from "../../pages/Home";
import { Teste } from "../../pages/Teste";
import { Cursos } from "../../pages/Cursos";
/*
import Home from "./Home";
import Sobre from "./Sobre";
import Usuario from "./Usuario";
<Route component={Home} path="/" exact />
      <Route component={Sobre} path="/sobre" />
      <Route component={Usuario} path="/usuario" />
*/

const RoutesUrl = () => {
  return (
    <Routes>
      <Route path="/" element={<Home titulo="Home" />}></Route>
      <Route path="/cursos" element={<Cursos titulo="Cursos" />} />
    </Routes>
  );
};

export { RoutesUrl };
