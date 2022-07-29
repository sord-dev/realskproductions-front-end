import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "../../styles/About.module.css";


function About({text}) {
  return (
    <div className={styles.about} id={"about"}>
      <div>
        <h1>@realskproductions</h1>
        <p>
          {text}
        </p>
      </div>

      <div>
        <h1>contact us</h1>

        <div className={styles.links} id='contact'>
          <span>  <Image src='/email.svg' width='25px' height='25px' alt='email icon'/> <Link href={'mailto:realskproductions@gmail.com'}> realskproductions@gmail.com </Link> </span>
          <span>  <Image src='/instagram.svg' width='25px' height='25px' alt='instagram icon'/> <Link href={'https://www.instagram.com/realskproductions/'}> @realskproductions </Link> </span>
          <span> <Image src='/snapchat.svg' width='25px' height='25px' alt='snapchat icon'/>  <Link href={'https://www.snapchat.com/add/realskprod?share_id=zD5bjooDD58&locale=en-GB'}>  realskproductions </Link> </span>
        </div>
      </div>
    </div>
  );
}

export default About;
