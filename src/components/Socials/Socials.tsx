import React from "react";
import styles from "./socials.module.scss";
import facebookImg from "./assets/images/Facebook.png";
import instagramImg from "./assets/images/Instagram.png";
import twitterImg from "./assets/images/Twitter.png";
import youtubeImg from "./assets/images/Youtube.png";
import linkedinImg from "./assets/images/Linkedin.png";

const Socials = () => {
  return (
    <div className={styles["socials-wrapper"]}>
      <ul className={styles["socialsList"]}>
        <li className={styles["socials-item"]}>
          <a href="">
            <img src={facebookImg} alt="Facebook" />
          </a>
        </li>
        <li className={styles["socials-item"]}>
          <a href="">
            <img src={instagramImg} alt="Instagram" />
          </a>
        </li>
        <li className={styles["socials-item"]}>
          <a href="">
            <img src={twitterImg} alt="Twitter" />
          </a>
        </li>
        <li className={styles["socials-item"]}>
          <a href="">
            <img src={youtubeImg} alt="Youtube" />
          </a>
        </li>
        <li className={styles["socials-item"]}>
          <a href="">
            <img src={linkedinImg} alt="Linkedin" />
          </a>
        </li>
      </ul>
      <a className={styles["siteLink"]} href="/">
        www.loremipsum.com
      </a>
    </div>
  );
};

export { Socials };
