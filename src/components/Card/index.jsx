import styles from "./style.module.css";

// Card Component with information on each workshop

const Card = ({ image, title, descript, link }) => {
  return (
    <div className={styles.card}>
      <img className={styles.card_img} src={image} />
      <h2 className={styles.card_title}>{title}</h2>
      <p className={styles.card_descript}>{descript}</p>
      <a href={link} className={styles.card_button}>
        Learn more
      </a>
    </div>
  );
};

export default Card;
