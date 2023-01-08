import React from "react";
import styles from "./styles.module.scss";
import logoAcademy from "./assets/images/Logo-M3Academy 1.svg";
import searchImg from "./assets/images/search_2.png";
import cartImg from "./assets/images/cart_1.png";

const TopHeader = () => {
  return (
    <div className={styles["TopHeader"]}>
      <img
        className={styles["logoAcademyImg"]}
        alt="LogoM3Academy"
        src={logoAcademy}
      />
      <div className={styles["search-wrapper"]}>
        <input
          className={styles["search-input"]}
          id="title-name"
          name="title-name"
          type="text"
          placeholder="Buscar"
          required
        />
        <img
          className={styles["searchImg"]}
          alt="LogoM3Academy"
          src={searchImg}
        />
      </div>
      <a className={styles["loginLink"]} href="/">
        ENTRAR
      </a>
      <a className={styles["cartLink"]} href="/">
        <img className={styles["cartImg"]} src={cartImg} alt="ImagemCarrinho" />
      </a>
    </div>
  );
};

export { TopHeader };
