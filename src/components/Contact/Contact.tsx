import React from "react";
import styles from "./contact.module.scss";

const Contact = () => {
  return (
    <ul className={styles["contatosInfo"]}>
      <li>
        <h2>FALE CONOSCO</h2>
      </li>
      <li>
        <p>Atendimento Ao Consumidor</p>
      </li>
      <li>
        <a className={styles["contatoTel"]} href="tel:+551141599504">
          (11) 4159 9504
        </a>
      </li>
      <li>
        <p>Atendimento Online</p>
      </li>
      <li>
        <a className={styles["contatoCel"]} href="tel:+551199433">
          (11) 99433 8825
        </a>
      </li>
    </ul>
  );
};

export { Contact };
