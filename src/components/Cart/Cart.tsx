import styles from "./cart.module.scss";
import cartImg from "./assets/image/cart.png";

const Cart = () => {
  return (
    <a className={styles["cartLink"]} href="/">
      <img
        className={styles["cartImg"]}
        src={cartImg}
        alt="Carrinho de compras"
      />
    </a>
  );
};

export { Cart };
