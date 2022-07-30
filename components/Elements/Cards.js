import styles from "./Card.module.css";

const Card = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.heading}>Foobar</div>
      </div>
    </div>
  );
};

export default Card;
