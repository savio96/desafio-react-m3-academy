import homeImg from "./assets/image/home.png";
import styles from "./caminhos.module.scss";
import { Link, Outlet } from "react-router-dom";
import { Home } from "../../pages/Home";
import React, { useState } from "react";

const Caminhos = (prop: { titulo: string }) => {
  return (
    <>
      <nav>
        <ul className={styles["caminhos-itens"]}>
          <li className={styles["caminhos-item"]}>
            <Link to="/">
              <img
                className={styles["home_img"]}
                src={homeImg}
                alt="Home image"
              />
            </Link>
          </li>
          <li className={styles["caminhos-item"]}>
            <p>&gt;</p>
          </li>
          <li className={styles["caminhos-item"]}>
            <p>{prop.titulo}</p>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  );
};
export { Caminhos };
