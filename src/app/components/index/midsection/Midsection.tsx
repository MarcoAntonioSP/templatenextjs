import styles from "./midsection.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Image from "next/image";
import { FaRegStar } from "react-icons/fa"; // Exemplo de ícone do Bootstrap

export default function Midsection() {
  return (
    <div>
      <div className={styles.titletop}>
        <h1 className={styles.texttitle}>Somos os melhores em css</h1>
      </div>
      <div className={styles.container}>
        <div className={styles.containerleft}>
          <div className={`${styles.title} ${styles.animation}`}>
            <FaRegStar className={styles.icon} />
            <h2>Título 1</h2>
          </div>
          <p className={styles.textanimation}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam nemo
            quas eligendi animi dolorum illo fuga hic, saepe velit ipsa
            necessitatibus. Temporibus nobis blanditiis nihil nam rem eveniet,
            totam rerum?
          </p>
          <Image
            src="/teste.webp"
            alt="Descrição da imagem"
            width={420}
            height={400}
            className={styles.image}
          />
          <div className={`${styles.title} ${styles.animation}`}>
            <FaRegStar className={styles.icon} />
            <h2>Título 3</h2>
          </div>
          <p className={styles.textanimation}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam nemo
            quas eligendi animi dolorum illo fuga hic, saepe velit ipsa
            necessitatibus. Temporibus nobis blanditiis nihil nam rem eveniet,
            totam rerum?
          </p>
          <Image
            src="/banner2.webp"
            alt="Descrição da imagem"
            width={420}
            height={400}
            className={styles.image}
          />
        </div>

        <div className={styles.containerright}>
          <Image
            src="/teste.webp"
            alt="Descrição da imagem"
            width={420}
            height={400}
            className={styles.image}
          />
          <div className={`${styles.title} ${styles.animationright}`}>
            <FaRegStar className={styles.icon} />
            <h2>Título 1</h2>
          </div>
          <p className={styles.textanimationright}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam nemo
            quas eligendi animi dolorum illo fuga hic, saepe velit ipsa
            necessitatibus. Temporibus nobis blanditiis nihil nam rem eveniet,
            totam rerum?
          </p>

          <div className={`${styles.title} ${styles.animationright}`}>
            <FaRegStar className={styles.icon} />
            <h2>Título 2</h2>
          </div>
          <p className={styles.textanimationright}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam nemo
            quas eligendi animi dolorum illo fuga hic, saepe velit ipsa
            necessitatibus. Temporibus nobis blanditiis nihil nam rem eveniet,
            totam rerum?
          </p>
          <Image
            src="/banner2.webp"
            alt="Descrição da imagem"
            width={420}
            height={400}
            className={styles.image}
          />
        </div>
      </div>
    </div>
  );
}
