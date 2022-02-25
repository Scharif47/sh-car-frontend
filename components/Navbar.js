import React from "react";
import Link from "next/link";
import { IoClose } from "react-icons/io5";
import styles from "../styles/Navbar.module.css";

function Navbar({ isOpen }) {
  return (
    <nav
      className={`bg-gradient-to-b from-indigo-200 to-gray-200 ${styles.nav} ${
        isOpen && styles.active
      }`}
    >
      <div className={styles.burger_div}>
        <IoClose className={styles.burger_closeIcon} />
      </div>

      <ul className={styles.nav__content}>
        <Link href="/">
          <a>Modelle</a>
        </Link>
        <Link href="/">
          <a>Kontakt</a>
        </Link>
        <Link href="/">
          <a>Services</a>
        </Link>
        <Link href="/">
          <a>Über Uns</a>
        </Link>
      </ul>
    </nav>
  );
}

export default Navbar;
