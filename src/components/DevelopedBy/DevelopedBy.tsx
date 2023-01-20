import React from "react";
import m3Logo from "./assets/image/m3Logo.png";
import styles from "./developedBy.module.scss";
const DevelopedBy = () => {
  return (
    <div className={styles["developed-wrapper"]}>
      <p>Developed by</p>
      <img src={m3Logo} alt="m3Logo" />
    </div>
  );
};

export { DevelopedBy };
