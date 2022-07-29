import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "../../styles/Hero.module.css";

function Hero({ title }) {
  return (
    <div className={styles.hero}>
      <Image
        src={"/sklogo.png"}
        width={700}
        height={400}
        alt="sklogo"
        className={styles.bigLogo}
      />

      <div className={styles.title}>
        <h1>{title}</h1>

        <div className={styles.buttons}>
          <Link href={"#contact"}>
            <button>Contact</button>
          </Link>
          <Link href={"https://www.beatstars.com/realskproductions"}>
            <button>Buy now</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Hero;
