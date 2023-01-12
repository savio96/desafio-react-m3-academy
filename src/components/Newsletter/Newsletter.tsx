import React from "react";
import styles from "./newsletter.module.scss";
const Newsletter = () => {
  return (
    <label className={styles["newsForm"]}>
      ASSINE NOSSA NEWSLETTER
      <div className={styles["newsForm-wrapper"]}>
        <input
          className={styles["newsForm-input"]}
          type="text"
          placeholder="E-mail"
        />
        <button className={styles["newsForm-btn"]}>ENVIAR</button>
      </div>
    </label>
  );
};

export { Newsletter };
