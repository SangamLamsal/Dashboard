import styles from "./Leftnav.module.css";
import Image from "next/image";
import Link from "next/link";

const Leftnav = () => {
  const items = ["Home", "Projects", "Team"];
  return (
    <div className={styles.left}>
      <div className={styles.leftContainer}>
        <div className={styles.logo}>CanWeBe</div>
        <div className={styles.attributes}>
          {items.map((item, i) => {
            return (
              <div key={i} className={styles.item}>
                <Link href={`/portion/${item}`}>
                  <a className={styles.align}>
                    <span className={styles.icons}>
                      <Image
                        width={25}
                        height={25}
                        src={`/static/icons/${item}.svg`}
                        alt={`${item}`}
                        className={styles.denoter}
                      />
                    </span>
                    {item}
                  </a>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Leftnav;
