import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "../../styles/Hero.module.css";

function Hero({ title, ctaButton, secondaryButton, heroLogo }) {
  return (
    <div className={styles.hero}>
     
        <Image priority src={heroLogo} width={700} height={350} alt="site logo" />

        <div className={styles.dim}>
      </div>
      <div className={styles.title}>
        <h1>{title}</h1>

        <div className={styles.buttons}>
          <Link href={"#contact"}>
            <button>{secondaryButton}</button>
          </Link>
          <Link href={"https://www.beatstars.com/realskproductions"}>
            <button>{ctaButton}</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Hero;
