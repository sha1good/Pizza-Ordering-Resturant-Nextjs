import styles from "../../styles/Orders.module.css";
import Image from "next/legacy/image";

const Orders = () => {
  const status = 0;

  const statusClass = (index) => {
    if (index - status < 1) return styles.done;
    if (index - status === 1) return styles.inProgress;
    if (index - status > 1) return styles.undone;
  };
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.row}>
          <table className={styles.table}>
            <thead>
              <tr className={styles.trTitle}>
                <th>Order ID</th>
                <th>Customer</th>
                <th>Address</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              <tr className={styles.tr}>
                <td>
                  <span className={styles.id}>123646468</span>
                </td>
                <td>
                  <span className={styles.name}>Sheriff Adebisi</span>
                </td>
                <td>
                  <span className={styles.address}>
                    69,Lambo Lasunwon Road, Ikorodu
                  </span>
                </td>
                <td>
                  <span className={styles.total}>$39.80</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className={styles.row}>
          <div className={statusClass(0)}>
            <Image src="/img/paid.png" alt="" width={30} height="30" />
            <span>Payment</span>
            <div className={styles.checkedIcon}>
              <Image  src="/img/checked.png" alt="" width={30} height={30} />
            </div>
          </div>
          <div className={statusClass(1)}>
            <Image src="/img/bake.png" alt="" width={30} height="30" />
            <span>Preparing</span>
            <div className={styles.checkedIcon}>
              <Image  src="/img/checked.png" alt="" width={30} height={30} />
            </div>
          </div>
          <div className={statusClass(2)}>
            <Image src="/img/bike.png" alt="" width={30} height="30" />
            <span>On the way</span>
            <div className={styles.checkedIcon}>
              <Image  src="/img/checked.png" alt="" width={30} height={30} />
            </div>
          </div>
          <div className={statusClass(3)}>
            <Image src="/img/delivered.png" alt="" width={30} height="30" />
            <span>Delivered</span>
            <div className={styles.checkedIcon}>
              <Image  src="/img/checked.png" alt="" width={30} height={30} />
            </div>
          </div>
        </div>
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
          <button disabled className={styles.button}>
            PAID!
          </button>
        </div>
      </div>
    </div>
  );
};

export default Orders;
