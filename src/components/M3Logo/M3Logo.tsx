import React from "react";
import m3LogoImg from "./assets/image/Logo-M3Academy.svg";
import styles from "./m3logo.module.scss";
const M3Logo = () => {
  return (
    <img
      className={styles["M3LogoImg"]}
      src={m3LogoImg}
      alt="M3 Academy logo"
    />
  );
};

export { M3Logo };
