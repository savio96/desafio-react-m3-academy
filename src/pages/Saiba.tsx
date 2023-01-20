import React from "react";
import { SaibaBody } from "../sectors/Body/SaibaBody";
import { Caminhos } from "../components/Caminhos/Caminhos";
const Saiba = (prop: { titulo: string }) => {
  return (
    <div>
      <Caminhos titulo={prop.titulo}></Caminhos>
      <SaibaBody></SaibaBody>
    </div>
  );
};

export { Saiba };
