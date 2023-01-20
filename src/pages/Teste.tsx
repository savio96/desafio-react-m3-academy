import React from "react";
import { Header } from "../sectors/Header/Header";
import { Caminhos } from "../components/Caminhos/Caminhos";

const Teste = (prop: { titulo: string }) => {
  return (
    <div>
      <Caminhos titulo={prop.titulo}></Caminhos>
    </div>
  );
};

export { Teste };
