import React from "react";
import styles from "./searchBox.module.scss";
import searchImg from "./assets/image/search_2.png";
const SearchBox = () => {
  return (
    <div className={styles["search-wrapper"]}>
      <input
        className={styles["search-input"]}
        id="title-name"
        name="title-name"
        type="text"
        placeholder="Buscar..."
        required
      />
      <button className={styles["buscaBtn"]}>
        <img
          className={styles["searchImg"]}
          alt="Icone de busca"
          src={searchImg}
        />
      </button>
    </div>
  );
};

export { SearchBox };
