import styles from "../../styles/Product.module.css";
import Image from "next/legacy/image";
import { useState } from "react";

const Product = () => {
    const [priceIndex, setPriceIndex] = useState(0)
  const pizza = {
    id: 1,
    img: "/img/pizza.png",
    name: "CAMPAGNOLA",
    price: [19.9, 23.9, 27.9],
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis arcu purus, rhoncus fringilla vestibulum vel, dignissim vel ante. Nulla facilisi. Nullam a urna sit amet tellus pellentesque egestas in in ante.",
  };

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.imgContainer}>
          <Image src={pizza.img} alt="" layout="fill" objectFit="contain"/>
        </div>
      </div>
      <div className={ styles.right}>
        <h1 className={ styles.title}>{ pizza.name}</h1>
        <span className={ styles.price}>${pizza.price[priceIndex]}</span>
        <p className={ styles.desc}>{pizza.desc}</p>
        <h3 className={ styles.choose}>Choose your price</h3>
         <div className={ styles.pricess}>
            <div className={ styles.prices} onClick={() => setPriceIndex(0)}>
                <Image src="/img/size.png" alt="" layout="fill"/>
                <span className={ styles.number}>Small</span>
            </div>
            <div className={ styles.prices} onClick={() => setPriceIndex(1)}>
                <Image src="/img/size.png" alt="" layout="fill"/>
                <span className={ styles.number}>Medium</span>
            </div>
            <div className={ styles.prices} onClick={() => setPriceIndex(2)}>
                <Image src="/img/size.png" alt="" layout="fill"/>
                <span className={ styles.number}>Large</span>
            </div>
         </div>
         <h3 className={styles.choose}>Choose additional ingredients</h3>
           <div className={styles.ingredients}>
            <div className={ styles.option}>
                <input   className={styles.checkbox} type="checkbox" name="double" id="double"/>
                <label htmlFor="double">Double Ingredients</label>
            </div>
            <div className={ styles.option}>
                <input   className={styles.checkbox} type="checkbox" name="cheese" id="cheese"/>
                <label htmlFor="cheese">Extra Cheese</label>
            </div>
            <div className={ styles.option}>
                <input  className={styles.checkbox} type="checkbox" name="spicy" id="spicy"/>
                <label htmlFor="spicy">Spicy Sauce</label>
            </div>
            <div className={ styles.option}>
                <input className={styles.checkbox} type="checkbox" name="garlic" id="garlic"/>
                <label htmlFor="garlic">Garlic Sauce</label>
            </div>
        </div>
        <div className={ styles.add}>
            <input type="number" className={styles.quantity} defaultValue={1}/>
            <button  className={ styles.button}>Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default Product;
