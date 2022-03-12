import React from "react";
import Image from "next/image";
import styles from "../styles/NewsCard.module.css";

function NewsCard({ title, description, image }) {
  return (
    <article className={styles.card}>
      <Image src={image} alt={description} className={styles.card__image} />
      <div className={styles.card__container}>
        <h3 className={styles.card__title}>{title}</h3>
        <p className={styles.card__description}>{description}</p>
      </div>
    </article>
  );
}

export default NewsCard;
