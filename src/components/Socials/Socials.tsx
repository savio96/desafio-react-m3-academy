import React from "react";
import styles from "./socials.module.scss";
import facebookImg from "./assets/images/Facebook.png";
import instagramImg from "./assets/images/Instagram.png";
import twitterImg from "./assets/images/Twitter.png";
import youtubeImg from "./assets/images/Youtube.png";
import linkedinImg from "./assets/images/Linkedin.png";
import whatsappImg from "./assets/images/whatsapp.png";

const Socials = () => {
  return (
    <div className={styles["socials-wrapper"]}>
      <ul className={styles["socialsList"]}>
        <li className={styles["socials-item"]}>
          <img src={facebookImg} alt="Facebook" />
        </li>
        <li className={styles["socials-item"]}>
          <img src={instagramImg} alt="Instagram" />
        </li>
        <li className={styles["socials-item"]}>
          <img src={twitterImg} alt="Twitter" />
        </li>
        <li className={styles["socials-item"]}>
          <img src={youtubeImg} alt="Youtube" />
        </li>
        <li className={styles["socials-item"]}>
          <img src={linkedinImg} alt="Linkedin" />
        </li>
        <li className={styles["socials-item"]}>
          <img src={whatsappImg} alt="Whatsapp" />
        </li>
      </ul>
      <a className={styles["siteLink"]} href="/">
        www.loremipsum.com
      </a>
    </div>
  );
};

export { Socials };
