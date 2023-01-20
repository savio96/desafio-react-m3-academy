import React from "react";
import whatsappImg from "./assets/image/whatsapp.png";
import styles from "./whatsapp.module.scss";

const Whatsapp = () => {
  return (
    <div className={styles["whatsapp-wrapper"]}>
      <a href="https://wa.me/11994338825" target="_blank">
        <img src={whatsappImg} alt="Whatsapp" />
      </a>
    </div>
  );
};

export { Whatsapp };
