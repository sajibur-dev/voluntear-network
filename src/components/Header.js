import React from "react";
import logo from "../assets/logo/brand.png";
import styles from "../styles/Header.module.css";

const Header = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.imgContainer}>
        <img src={logo} alt="brand-logo" />
      </div>
      <ul className={styles.linkContainer}>
        <a href="/">home</a>
        <a href="/">Donation</a>
        <a href="/">Events</a>
        <a href="/">Blog</a>
      </ul>
    </nav>
  );
};

export default Header;
