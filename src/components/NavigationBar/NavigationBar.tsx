import { M3Logo } from "../M3Logo/M3Logo";
import styles from "./navigationBar.module.scss";
import m3LogoImg from "./assets/image/Logo-M3Academy.svg";
import { Cart } from "../Cart/Cart";
import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { Enter } from "../Enter/Enter";
const NavigationBar = () => {
  return (
    <>
      <nav
        className="navbar navbar-expand-xpp bg-body-tertiary "
        id="navegador"
      >
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#navbarOffcanvasLg"
            aria-controls="navbarOffcanvasLg"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <a className="navbar-brand" href="#">
            <img
              className="logoM3Img"
              src={m3LogoImg}
              alt="M3 Academy mobile"
            />
          </a>
          <div className="carrinho-wrapper">
            <Cart />
          </div>

          <div
            className="offcanvas offcanvas-end"
            id="navbarOffcanvasLg"
            aria-labelledby="navbarOffcanvasLgLabel"
          >
            <div className="offcanvas-header">
              <div className="entrar_wrapper">
                <Enter></Enter>
              </div>
              <button
                type="button"
                className="btn-close text-reset"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>

            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/cursos">
                  CURSOS
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/cursos">
                  SAIBA MAIS
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/cursos">
                  INSTITUCIONAIS
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  );
};

export { NavigationBar };
