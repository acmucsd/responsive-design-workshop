import { useState } from 'react';
import styles from "./style.module.css";

const Navbar = () => {

  // State to determine if navbar is open when hamburger menu is added
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <div className={styles.nav_bar}>
      <div className={styles.logo_bar}>
        <img className={styles.logo} src="./assets/acmlogo.png" />
        <h1 className={styles.title}>The ACM Times</h1>
        {/* Hamburger Menu */}
        <div className={styles.hamburger} onClick={() => setNavbarOpen((prev) => !prev)}>
        <svg viewBox="0 0 100 80" width="40" height="40">
          <rect width="100" height="20" rx="8"></rect>
          <rect y="30" width="100" height="20" rx="8"></rect>
          <rect y="60" width="100" height="20" rx="8"></rect>
        </svg>
      </div>
      </div>
      <div className={styles[`links${navbarOpen ? '_show': ''}`]}>
        <a href="#home">Home</a>
        <a href="#account">Account</a>
        <a href="#contact">Contact Us</a>
      </div>
    </div>
  );
};

export default Navbar;
