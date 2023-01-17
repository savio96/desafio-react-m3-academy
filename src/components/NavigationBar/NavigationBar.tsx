import { M3Logo } from "../M3Logo/M3Logo";
import styles from "./navigationBar.module.scss";
import m3LogoImg from "./assets/image/Logo-M3Academy.svg";
import { Cart } from "../Cart/Cart";
const NavigationBar = () => {
  return (
    <nav
      className="navbar navbar-expand-xpp bg-body-tertiary navbar-dark bg-dark"
      id="navegador"
    >
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <a className="navbar-brand" href="#">
          <img className="logoM3Img" src={m3LogoImg} alt="M3 Academy mobile" />
        </a>
        <div className="carrinho-wrapper">
          <Cart />
        </div>

        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link " aria-current="page" href="#">
                CURSOS
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                SAIBA MAIS
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                INSTITUCIONAIS
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export { NavigationBar };
