import React from "react";
import { SearchBox } from "../components/SearchBox/SearchBox";

const Home = () => {
  const style = { background: "white" };
  return (
    <div style={style}>
      <SearchBox></SearchBox>
    </div>
  );
};

export { Home };
