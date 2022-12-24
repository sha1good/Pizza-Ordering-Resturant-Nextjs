import styles from "../styles/Cart.module.css";
import Image from "next/legacy/image";

const Cart = () => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <table className={styles.table}>
          <thead>
            <tr className={styles.trTitle}>
              <th>Product</th>
              <th>Name</th>
              <th>Extras</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            <tr className={styles.tr}>
              <td>
                <div className={styles.imgContainer}>
                  <Image
                    src="/img/pizza.png"
                    alt=""
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
              </td>
              <td>
                <span className={styles.name}> CORALZO</span>
              </td>
              <td>
                <span className={styles.extras}>
                  Double ingredient, spicy sauce
                </span>
              </td>
              <td>
                <span className={styles.price}>$19.90</span>
              </td>
              <td>
                <span className={styles.quantity}>2</span>
              </td>
              <td>
                <span className={styles.total}>$39.80</span>
              </td>
            </tr>
            <tr className={styles.tr}>
              <td>
                <div className={styles.imgContainer}>
                  <Image
                    src="/img/pizza.png"
                    alt=""
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
              </td>
              <td>
                <span className={styles.name}> CORALZO</span>
              </td>
              <td>
                <span className={styles.extras}>
                  Double ingredient, spicy sauce
                </span>
              </td>
              <td>
                <span className={styles.price}>$19.90</span>
              </td>
              <td>
                <span className={styles.quantity}>2</span>
              </td>
              <td>
                <span className={styles.total}>$39.80</span>
              </td>
            </tr>
            <tr className={styles.tr}>
              <td>
                <div className={styles.imgContainer}>
                  <Image
                    src="/img/pizza.png"
                    alt=""
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
              </td>
              <td>
                <span className={styles.name}> CORALZO</span>
              </td>
              <td>
                <span className={styles.extras}>
                  Double ingredient, spicy sauce
                </span>
              </td>
              <td>
                <span className={styles.price}>$19.90</span>
              </td>
              <td>
                <span className={styles.quantity}>2</span>
              </td>
              <td>
                <span className={styles.total}>$39.80</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className={styles.right}>
        <div className={styles.wrapper}>
          <h1 className={styles.title}> CART TOTAL</h1>
          <div className={styles.totalText}>
            <b className={styles.totalTitleText}>Subtotal:</b> $39.80
          </div>
          <div className={styles.totalText}>
            <b className={styles.totalTitleText}>Discount:</b> $0.00
          </div>
          <div className={styles.totalText}>
            <b className={styles.totalTitleText}>Total:</b> $39.80
          </div>
          <button className={styles.button}>CHECKOUT NOW!</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
