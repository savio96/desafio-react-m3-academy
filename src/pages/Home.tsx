import React from "react";
import { Cart } from "../components/Cart/Cart";

const Home = () => {
  const style = { background: "black" };
  return (
    <div style={style}>
      <Cart></Cart>
    </div>
  );
};

export { Home };
