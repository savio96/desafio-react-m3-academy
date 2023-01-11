import React from "react";
import masterImg from "./assets/image/Master.png";
import visaImg from "./assets/image/Visa.png";
import dinersImg from "./assets/image/Diners.png";
import eloImg from "./assets/image/Elo.png";
import hiperImg from "./assets/image/Hiper.png";
import paypalImg from "./assets/image/Paypal.png";
import boletoImg from "./assets/image/Boleto.png";
import vtexImg from "./assets/image/vtex-pci-200.png";
import styles from "./payments.module.scss";

const Payments = () => {
  return (
    <ul className={styles["paymentsList"]}>
      <li className={styles["paymentsItem"]}>
        <img src={masterImg} alt="masterCard" />
      </li>
      <li className={styles["paymentsItem"]}>
        <img src={visaImg} alt="visaCard" />
      </li>
      <li className={styles["paymentsItem"]}>
        <img src={dinersImg} alt="dinersCard" />
      </li>
      <li className={styles["paymentsItem"]}>
        <img src={eloImg} alt="eloCard" />
      </li>
      <li className={styles["paymentsItem"]}>
        <img src={hiperImg} alt="hiperCard" />
      </li>
      <li className={styles["paymentsItem"]}>
        <img src={paypalImg} alt="paypalCard" />
      </li>
      <li className={styles["paymentsItem"]}>
        <img src={boletoImg} alt="boletoCard" />
      </li>
    </ul>
  );
};

const VtexPci = () => {
  return <img src={vtexImg} alt="vtx Pci" />;
};

export { Payments, VtexPci };
