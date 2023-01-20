import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import { Home } from "../../pages/Home";
import { Teste } from "../../pages/Teste";
import { Cursos } from "../../pages/Cursos";
import { Institucionais } from "../../pages/Institucionais";
import { Saiba } from "../../pages/Saiba";
const RoutesUrl = () => {
  return (
    <Routes>
      <Route path="/" element={<Home titulo="Home" />}></Route>
      <Route path="/cursos" element={<Cursos titulo="Cursos" />} />
      <Route
        path="/institucionais"
        element={<Institucionais titulo="Institucional" />}
      />
      <Route path="/saiba" element={<Saiba titulo="Saiba mais" />} />
    </Routes>
  );
};

export { RoutesUrl };
