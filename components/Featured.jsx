import styles from "../styles/Featured.module.css";
import Image from "next/legacy/image";
import { useState } from "react";

const Featured = () => {
  const [sliderIndex, setSliderindex] = useState(0);

  const images = ["/img/pizza.png","https://i.ibb.co/DG69bQ4/2.png","/img/pizza.png"];

  const handleArrow = (direction) => {
    if (direction==="l") {
      setSliderindex(sliderIndex !== 0 ? sliderIndex - 1 : 2);
    }
    if(direction==="r") {
      setSliderindex(sliderIndex !== 2 ? sliderIndex + 1 : 0);
    }
  };

  console.log(sliderIndex)
  return (
    <div className={styles.container}>
      <div className={styles.arrowContainer} style={{ left: 0 }} onClick={()=>handleArrow("l")}>
        <Image src="/img/arrowl.png" alt="" layout="fill" objectFit="contain"/>
      </div>
      <div className={styles.wrapper} style={{transform:`translateX(${-100*sliderIndex}vw)`}}>
        {images.map((img, i) => (
          <div className={styles.imgContainer} key={i}>
            <Image src={img} alt="" layout="fill" objectFit="contain" />
          </div>
        ))}
      </div>
      <div className={styles.arrowContainer} style={{ right: 0 }} onClick={()=>handleArrow("r")}>
        <Image src="/img/arrowr.png" layout="fill" alt="" objectFit="contain"/>
      </div>
    </div>
  );
};

export default Featured;
