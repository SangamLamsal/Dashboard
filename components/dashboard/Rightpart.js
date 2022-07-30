import styles from "./Rightpart.module.css";
import Image from "next/image";
import { useState } from "react";
import HomePage from "./portion/HomePage";

const Rightpart = ({ items, id }) => {
  const [arrowhead, setarrowHead] = useState(false);

  return (
    <div className={styles.container}>
      <div className={styles.right}>
        <div className={styles.sitthere}>
          <div className={styles.top}>
            <div className={styles.left}>{id}</div>
            <div
              className={styles.righter}
              onClick={() => setarrowHead(!arrowhead)}
            >
              <div className={styles.circle}></div>
              {!arrowhead && (
                <Image
                  width={40}
                  height={30}
                  objectFit="contain"
                  alt="Functions-key"
                  src={`/static/icons/arrow-down.svg`}
                  className={styles.arrowalignment}
                />
              )}
              {arrowhead && (
                <Image
                  width={40}
                  height={30}
                  objectFit="contain"
                  alt="Functions-key"
                  src={`/static/icons/arrow-down.svg`}
                  className={styles.arrowalign}
                />
              )}
            </div>
          </div>
        </div>
        <div className={styles.bottom}>
          <div className={styles.content}>{items}</div>
        </div>
      </div>
    </div>
  );
};
export default Rightpart;
