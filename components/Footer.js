import { useState, useEffect } from "react";
import Link from "next/link";
import styles from "../styles/Footer.module.css";
import {
  FaTwitter,
  FaFacebook,
  FaInstagram,
  FaArrowAltCircleDown,
  FaArrowAltCircleUp,
} from "react-icons/fa";

function Footer() {
  const [adviceState, setAdviceState] = useState(false);
  const [servicesState, setServicesState] = useState(false);
  const [aboutState, setAboutState] = useState(false);

  function useWindowSize() {
    // Initialize state with undefined width/height so server and client renders match
    // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
    const [windowSize, setWindowSize] = useState({
      width: undefined,
      height: undefined,
    });
    useEffect(() => {
      // only execute all the code below in client side
      if (typeof window !== "undefined") {
        // Handler to call on window resize
        function handleResize() {
          // Set window width/height to state
          setWindowSize({
            width: window.innerWidth,
            height: window.innerHeight,
          });
        }

        // Add event listener
        window.addEventListener("resize", handleResize);

        // Call handler right away so state gets updated with initial window size
        handleResize();

        // Remove event listener on cleanup
        return () => window.removeEventListener("resize", handleResize);
      }
    }, []); // Empty array ensures that effect is only run on mount
    return windowSize;
  }

  const screenSize = useWindowSize();
  const currentYear = new Date().getFullYear();

  const renderArrowAdvice = adviceState ? (
    <FaArrowAltCircleUp />
  ) : (
    <FaArrowAltCircleDown />
  );

  const renderArrowServices = servicesState ? (
    <FaArrowAltCircleUp />
  ) : (
    <FaArrowAltCircleDown />
  );

  const renderArrowAbout = aboutState ? (
    <FaArrowAltCircleUp />
  ) : (
    <FaArrowAltCircleDown />
  );

  const isSmallScreen = screenSize.width < 1024;

  return (
    <footer className={styles.footer}>
      {/* footer menu */}
      <section className={styles.top}>
        <div className={`${styles.advice} ${styles.intro}`}>
          <div
            onClick={() => isSmallScreen && setAdviceState(!adviceState)}
            className={`${styles.dropdown} ${styles.hello}`}
          >
            <p className={styles.title}>Beratung</p>
            <span className={styles.arrow}>{renderArrowAdvice}</span>
          </div>
          <ul className={`${adviceState ? styles.list_active : styles.list}`}>
            <li>Kaufberatung</li>
            <li>Probefahrt buchen</li>
          </ul>
        </div>
        <div className={`${styles.services} ${styles.intro}`}>
          <div
            onClick={() => isSmallScreen && setServicesState(!servicesState)}
            className={styles.dropdown}
          >
            <p className={styles.title}>Services</p>
            <span className={styles.arrow}>{renderArrowServices}</span>
          </div>
          <ul className={`${servicesState ? styles.list_active : styles.list}`}>
            <li>Service Termin vereinbaren</li>
            <li>Technischer Support</li>
          </ul>
        </div>
        <div className={`${styles.about} ${styles.intro}`}>
          <div
            onClick={() => isSmallScreen && setAboutState(!aboutState)}
            className={styles.dropdown}
          >
            <p className={styles.title}>Über uns</p>
            <span className={styles.arrow}>{renderArrowAbout}</span>
          </div>
          <ul className={`${aboutState ? styles.list_active : styles.list}`}>
            <li>Geschichte</li>
            <li>Kontakt</li>
            <li>Impressum</li>
          </ul>
        </div>
      </section>

      {/* social medias */}
      <section className={styles.bottom}>
        <div className={styles.socials}>
          <Link href="https://twitter.com/">
            <a className={styles.icon__twitter} target="_blank">
              <FaTwitter />
            </a>
          </Link>

          <Link href="https://facebook.com">
            <a className={styles.icon__facebook} target="_blank">
              <FaFacebook />
            </a>
          </Link>

          <Link target="_blank" href="https://www.instagram.com/">
            <a className={styles.icon__instagram} target="_blank">
              <FaInstagram />
            </a>
          </Link>
        </div>
        <div className={styles.notes}>
          <p>Datenschutz</p>
          <p>Rechtliche Hinweise</p>
        </div>
        <div className="styles.copyright">
          <p>&copy; {currentYear} SHCar. Alle Rechte vorbehalten</p>
        </div>
      </section>
    </footer>
  );
}

export default Footer;
