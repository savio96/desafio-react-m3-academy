import React from "react";
import styles from "./doubts.module.scss";

const Doubts = () => {
  return (
    <ul className={styles["doubtsList"]}>
      <li>
        <a href="/">
          <h2>DÚVIDAS</h2>
        </a>
      </li>
      <li>
        <a href="/">Entrega</a>
      </li>
      <li>
        <a href="/">Pagamento</a>
      </li>
      <li>
        <a href="/">Trocas e Devoluções</a>
      </li>
      <li>
        <a className={styles["duvidasFreq"]} href="/">
          Dúvidas Frequentes
        </a>
      </li>
    </ul>
  );
};

export { Doubts };
