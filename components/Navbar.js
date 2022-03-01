import React, { useRef } from "react";
import Link from "next/link";
import { IoClose } from "react-icons/io5";
import styles from "../styles/Navbar.module.css";

function Navbar({ setIsOpen, isOpen }) {
  return (
    <nav
      className={`bg-gradient-to-b from-indigo-200 to-gray-200 ${styles.nav} ${
        isOpen && styles.active
      }`}
    >
      <IoClose
        onClick={() => setIsOpen(false)}
        className={styles.nav__closeIcon}
      />

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
