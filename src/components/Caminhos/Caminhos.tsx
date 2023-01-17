import homeImg from "./assets/image/home.png";
import styles from "./caminhos.module.scss";
import { Link, Outlet } from "react-router-dom";
import { Home } from "../../pages/Home";
import React, { useState } from "react";

const Caminhos = (prop: { titulo: string }) => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">
              <img src={homeImg} alt="Home image" />
            </Link>
          </li>
          <li>
            <p>&gt;</p>
            <p>{prop.titulo}</p>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  );
};
export { Caminhos };
