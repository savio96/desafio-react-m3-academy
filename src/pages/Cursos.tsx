import React from "react";
import { CursosBody } from "../sectors/Body/CursosBody";
import { Caminhos } from "../components/Caminhos/Caminhos";
import { Header } from "../sectors/Header/Header";
const Cursos = (prop: { titulo: string }) => {
  return (
    <div>
      <Header></Header>
      <Caminhos titulo={prop.titulo}></Caminhos>
      <CursosBody></CursosBody>
    </div>
  );
};

export { Cursos };
