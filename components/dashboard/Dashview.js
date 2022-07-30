import Leftnav from "./Leftnav";
import Rightpart from "./Rightpart";
import styles from "./Dashview.module.css";

const Dashboard = ({ children, title }) => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <Leftnav />
      </div>
      <div className={styles.right}>
        <Rightpart items={children} id={title} />
      </div>
    </div>
  );
};

export default Dashboard;
