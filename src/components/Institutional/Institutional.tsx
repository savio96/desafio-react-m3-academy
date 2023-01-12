import React from "react";
import styles from "./institutional.module.scss";

const Institutional = () => {
  return (
    <ul className={styles["institutionalList"]}>
      <li>
        <a href="/">
          <h2>INSTITUCIONAL</h2>
        </a>
      </li>
      <li>
        <a href="/">Quem somos</a>
      </li>
      <li>
        <a href="/">Política de Privacidade</a>
      </li>
      <li>
        <a href="/">Segurança</a>
      </li>
      <li>
        <a className={styles["revendedor"]} href="/">
          Seja um Revendedor
        </a>
      </li>
    </ul>
  );
};

export { Institutional };
