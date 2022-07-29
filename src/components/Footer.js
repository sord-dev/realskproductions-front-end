import React from "react";
import styles from "../../styles/Footer.module.css";
import SocialsList from "./SocialsList";

function Footer() {
  return (
    <div className={styles.footer}>
      <div className={`${styles.container} ${styles.center}`}>
        <SocialsList />
        <p> &copy; realskproductions</p>
      </div>
    </div>
  );
}

export default Footer;
