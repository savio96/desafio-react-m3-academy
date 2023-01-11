import React from "react";
import styles from "./contact.module.scss";

const Contact = () => {
  return (
    <div className={styles["contatosInfo"]}>
      <h2>FALE CONOSCO</h2>
      <p>Atendimento Ao Consumidor</p>
      <a href="tel:+551141599504">(11) 4159 9504</a>
      <p>Atendimento Online</p>
      <a className={styles["contatoCel"]} href="tel:+551199433">
        (11) 99433 8825
      </a>
    </div>
  );
};

export { Contact };
