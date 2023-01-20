import React from "react";
import styles from "./styles.module.scss";
import { M3Logo } from "../../../components/M3Logo/M3Logo";

import { SearchBox } from "../../../components/SearchBox/SearchBox";
import { Enter } from "../../../components/Enter/Enter";
import { Cart } from "../../../components/Cart/Cart";
const TopHeader = () => {
  return (
    <div className="top_header">
      <M3Logo></M3Logo>
      <div className="search_box">
        <SearchBox></SearchBox>
      </div>
      <div className="sign_up">
        <Enter></Enter>
        <Cart></Cart>
      </div>
    </div>
  );
};

export { TopHeader };
