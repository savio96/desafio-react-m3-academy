import React from "react";
import vtexLogo from "./assets/image/vtexLogo.png";
import styles from "./poweredBy.module.scss";
const PoweredBy = () => {
  return (
    <div className={styles["powered-wrapper"]}>
      <p>Powered by</p>
      <img src={vtexLogo} alt="vtexLogo" />
    </div>
  );
};

export { PoweredBy };
