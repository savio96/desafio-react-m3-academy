import React from "react";
import { Header } from "../sectors/Header/Header";
import { Address } from "../components/Address/Address";
import { Payments, VtexPci } from "../components/Payments/Payments";
const Home = () => {
  return (
    <div>
      {
        //<Header />
        //<Address />
      }
      <Payments></Payments>

      <VtexPci></VtexPci>
    </div>
  );
};

export { Home };
