import styles from "../styles/Home.module.css";
import Image from "next/image";
import HeroImage from "../public/images/HeroImage.jpg";

export default function Home() {
  return (
    <main>
      <section className={styles.hero}>
        <div className={styles.hero__container}>
          <div className={styles.hero__description}>
            <h1 className={styles.hero__title}>Willkommen bei SH-Car</h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur
            </p>
          </div>
          <div className={styles.hero__cta}>
            <button className={`${styles.hero__btn_details} ${styles.btn}`}>
              Details
            </button>
            <button className={`${styles.hero__btn_cars} ${styles.btn}`}>
              Fahrzeuge
            </button>
          </div>
        </div>
      </section>

      <section className={styles.news}>
        <div>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam repellat reprehenderit quisquam quas aperiam praesentium. Veniam quaerat eos quasi laborum!</p>
        </div>
        <div>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam repellat reprehenderit quisquam quas aperiam praesentium. Veniam quaerat eos quasi laborum!</p>
        </div>
        <div>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam repellat reprehenderit quisquam quas aperiam praesentium. Veniam quaerat eos quasi laborum!</p>
        </div>
      </section>

      <section className={styles.cars}>

      </section>
    </main>
  );
}
