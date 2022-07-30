import Card from "../../Elements/Cards";
import styles from "./HomePage.module.css";

const HomePage = () => {
  return (
    <div>
      <div className={styles.content}>
        <Card className={styles.items} />
        <Card className={styles.items} />
        <Card className={styles.items} />
      </div>
    </div>
  );
};

export default HomePage;
