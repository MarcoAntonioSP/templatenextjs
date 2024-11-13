import styles from "./hero.module.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Hero() {
  return (
    <div className={styles.cube}>
      <div className={`${styles.face} ${styles.front}`}>
        <img src="/banner2.webp" alt="Front" className={styles.image} />
      </div>
      <div className={`${styles.face} ${styles.back}`}>
        <img src="banner1.webp" alt="Back" className={styles.image} />
      </div>
      <div className={`${styles.face} ${styles.right}`}>
        <img src="/banner2.webp" alt="Right" className={styles.image} />
      </div>
      <div className={`${styles.face} ${styles.left}`}>
        <img src="/banner3.webp" alt="Left" className={styles.image} />
      </div>
      <div className={`${styles.face} ${styles.top}`}>
        <img src="/banner2.webp" alt="Top" className={styles.image} />
      </div>
      <div className={`${styles.face} ${styles.bottom}`}>
        <img src="/banner2.webp" alt="Bottom" className={styles.image} />
      </div>
    </div>
  );
}
