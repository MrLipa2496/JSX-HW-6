import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import styles from "./Header.module.sass";

const linkStyle = ({ isActive }) =>
  isActive
    ? { backgroundColor: "rgba(154, 58, 237, 0.8)", borderRadius: "20px" }
    : {};

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <div className={styles.headerWrapper}>
        <NavLink className={styles.navLink} to="/">
          <div className={styles.logoWrapper}>
            <p className={styles.logo}>MrLipa</p>
          </div>
        </NavLink>
        <button className={styles.burger} onClick={toggleMenu}>
          <GiHamburgerMenu />
        </button>
        <nav
          className={`${styles.linkWrapper} ${menuOpen ? styles.active : ""}`}
        >
          <li className={styles.navLi}>
            <NavLink className={styles.navLink} to="/" style={linkStyle}>
              Home
            </NavLink>
          </li>
          <li className={styles.navLi}>
            <NavLink
              className={styles.navLink}
              to="/components"
              style={linkStyle}
            >
              Components
            </NavLink>
          </li>
          <li className={styles.navLi}>
            <NavLink className={styles.navLink} to="/about" style={linkStyle}>
              About
            </NavLink>
          </li>
        </nav>
      </div>
    </>
  );
}

export default Header;
