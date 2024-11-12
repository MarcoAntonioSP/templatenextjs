import Link from 'next/link';
import Image from 'next/image';
import styles from './portifolio.module.css';

export default function Portifolio() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>Alguns de nossos projetos</h1>
        <h2 className={styles.subtitle}>Conheça nosso trabalho</h2>
      </div>
      <div className={styles.projects}>
        <Link href="/" legacyBehavior>
          <a className={styles.project}>
            <Image src="/banner1.webp" alt="Projeto 1" className={styles.projectImage} width={300} height={200} />
            <h3 className={styles.projectTitle}>Projeto 1</h3>
            <p className={styles.projectDescription}>Descrição breve do Projeto 1</p>
          </a>
        </Link>
        <Link href="/" legacyBehavior>
          <a className={styles.project}>
            <Image src="/banner2.webp" alt="Projeto 2" className={styles.projectImage} width={300} height={200} />
            <h3 className={styles.projectTitle}>Projeto 2</h3>
            <p className={styles.projectDescription}>Descrição breve do Projeto 2</p>
          </a>
        </Link>
        <Link href="/" legacyBehavior>
          <a className={styles.project}>
            <Image src="/banner2.webp" alt="Projeto 3" className={styles.projectImage} width={300} height={200} />
            <h3 className={styles.projectTitle}>Projeto 3</h3>
            <p className={styles.projectDescription}>Descrição breve do Projeto 3</p>
          </a>
        </Link>
      </div>
    </div>
  );
}
