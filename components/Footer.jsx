import styles from "../styles/Footer.module.css";
import Image from "next/legacy/image";

const Footer = () => {
  return (
    <div className={styles.container}>
    <div className={styles.item}>
      <Image src="/img/bg.png" alt="" layout="fill" objectFit="cover" />
    </div>
    <div className={styles.item}>
      <div className={styles.card}>
        <h2 className={styles.motto}>
          OH YES, WE DID.THE SHA1 PIZZA, WELL BAKED SLICE OF PIZZA.
        </h2>
      </div>
      <div className={styles.card}>
        <h1 className={styles.title}>FIND OUR RESTAURANTS</h1>
        <p className={styles.texts}>
          69,Lambo Lasunwon Road
          <br />
          Lagos, 85022
          <br /> (602) 867-1010
        </p>
        <p className={styles.texts}>
          69, Adeyinka Olatokunbo Victoria Island   
          <br />
          Lagos, 85022
          <br /> (602) 867-1010
        </p>
        <p className={styles.texts}>
          69,Lambo Lasunwon Road
          <br />
          Lagos, 85022
          <br /> (602) 867-1010
        </p>
      </div>
      <div className={styles.card}>
        <h1 className={styles.title}>WORKING HOURS</h1>
        <p className={styles.texts}>
            MONDAY UNTIL FRIDAY
            <br/> 9:00 -22:00
        </p>
        <p className={styles.texts}>
            SATURDAY - SUNDAY
            <br/> 12:00 -24:00
        </p>
      </div>
    </div>
  </div>
  );
};

export default Footer;
