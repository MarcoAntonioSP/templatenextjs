import styles from './bloghighlights.module.css';
import Image from "next/image";

export default function BlogHighlight() {
  return (
    <div className={styles.blogHighlight}>
      {/* Destaque Principal (Post em Destaque) */}
      <div className={styles.highlightPost}>
        <a href="#" className={styles.link}>
          <div className={styles.highlightText}>
            <h2 className={styles.highlightTitle}>Post em Destaque</h2>
            <p className={styles.highlightDescription}>
              Uma breve descrição do post em destaque que cativa o leitor.
            </p>
            <span className={styles.highlightDate}>Publicado em 01/11/2024</span>
          </div>
        </a>
      </div>

      {/* Posts Recentes (3 posts abaixo) */}
      <div className={styles.recentPosts}>
        <ul className={styles.recentPostsList}>
          <li className={styles.recentPostItem}>
            <a href="#" className={styles.link}>
              <div className={styles.recentImage}>
                <Image
                  src="/banner2.webp"
                  alt="Post Recente 1"
                  width={300}
                  height={200}
                  className={styles.image}
                />
              </div>
              <div className={styles.recentText}>
                <h3 className={styles.recentTitle}>Post Recente 1</h3>
                <span className={styles.recentDate}>Publicado em 02/11/2024</span>
              </div>
            </a>
          </li>
          <li className={styles.recentPostItem}>
            <a href="#" className={styles.link}>
              <div className={styles.recentImage}>
                <Image
                  src="/banner1.webp"
                  alt="Post Recente 2"
                  width={300}
                  height={200}
                  className={styles.image}
                />
              </div>
              <div className={styles.recentText}>
                <h3 className={styles.recentTitle}>Post Recente 2</h3>
                <span className={styles.recentDate}>Publicado em 03/11/2024</span>
              </div>
            </a>
          </li>
          <li className={styles.recentPostItem}>
            <a href="#" className={styles.link}>
              <div className={styles.recentImage}>
                <Image
                  src="/banner3.webp"
                  alt="Post Recente 3"
                  width={300}
                  height={200}
                  className={styles.image}
                />
              </div>
              <div className={styles.recentText}>
                <h3 className={styles.recentTitle}>Post Recente 3</h3>
                <span className={styles.recentDate}>Publicado em 04/11/2024</span>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
