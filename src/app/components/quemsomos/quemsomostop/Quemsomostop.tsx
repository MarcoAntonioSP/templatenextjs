import styles from './quemsomos.module.css';
import { FaRegHandPaper, FaSearch, FaMobileAlt, FaHeadset } from 'react-icons/fa';
import Link from 'next/link'; // Importando Link do Next.js

export default function Quemsomostop() {
    return (
        <div className={styles.container}>
          <div className={styles.triangleOne}></div>
          <div className={styles.triangleTwo}></div>
          <div className={styles.triangleThree}></div>
          <div className={styles.triangleFour}></div>
          <div className={styles.content}>
            <Link href="/criacao-de-sites" className={`${styles.item} animate__animated animate__fadeInUp`}>
              <FaRegHandPaper className={styles.icon} />
              <h2 className={styles.title}>Criação de Sites</h2>
              <p className={styles.text}>
                Transforme suas <span className={styles.highlight}>ideias</span> em um site incrível e funcional. 
                Nossa equipe se dedica a criar experiências <span className={styles.highlight}>únicas</span> e interativas.
              </p>
            </Link>
            <Link href="/otimizacao-seo" className={`${styles.item} animate__animated animate__fadeInUp`}>
              <FaSearch className={styles.icon} />
              <h2 className={styles.title}>Otimização SEO</h2>
              <p className={styles.text}>
                Melhore sua <span className={styles.highlight}>visibilidade online</span> e atraia mais clientes. 
                Usamos as melhores práticas de SEO para garantir que seu site seja facilmente encontrado.
              </p>
            </Link>
            <Link href="/design-responsivo" className={`${styles.item} animate__animated animate__fadeInUp`}>
              <FaMobileAlt className={styles.icon} />
              <h2 className={styles.title}>Design Responsivo</h2>
              <p className={styles.text}>
                Sites que se adaptam a qualquer dispositivo, aumentando a <span className={styles.highlight}>acessibilidade</span> e a experiência do usuário.
              </p>
            </Link>
            <Link href="/suporte-continua" className={`${styles.item} animate__animated animate__fadeInUp`}>
              <FaHeadset className={styles.icon} />
              <h2 className={styles.title}>Suporte Contínuo</h2>
              <p className={styles.text}>
                Estamos aqui para ajudar você a <span className={styles.highlight}>crescer</span> e manter seu site sempre atualizado. 
                Nosso suporte é <span className={styles.highlight}>dedicado</span> e sempre disponível.
              </p>
            </Link>
          </div>
        </div>
    );
}
