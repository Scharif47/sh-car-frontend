import styles from "../styles/Home.module.css";
import NewsCard from "../components/NewsCard";
import ecar from "../public/images/eCar.jpg";
import porsche from "../public/images/porsche.jpg";
import mustangs from "../public/images/mustangs.jpg";

export default function Home() {
  return (
    <main className="home">
      <section className={styles.hero}>
        <div className={styles.hero__container}>
          <div className={styles.hero__description}>
            <h1 className={styles.hero__title}>Willkommen bei SH-Car</h1>
            <p>Lorem, ipsum dolor sit amet consectetur</p>
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

      <section className={`${styles.news}`}>
        <h2>Unsere Empfehlungen</h2>
        <div
          className={`${styles.news__cards} flex space-x-10 sm:space-x-20 px-8 sm:px-16 overflow-x-scroll scrollbar-hide`}
        >
          <NewsCard
            image={ecar}
            title="Card 1"
            description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique doloremque nesciunt eveniet enim nemo."
          />
          <NewsCard
            image={porsche}
            title="Card 2"
            description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique doloremque nesciunt eveniet enim nemo."
          />
          <NewsCard
            image={mustangs}
            title="Card 3"
            description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique doloremque nesciunt eveniet enim nemo."
          />
        </div>
      </section>
      <section className={styles.cars}></section>
    </main>
  );
}
