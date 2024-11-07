import styles from "./bloghero.module.css";
import Image from "next/image";

export default function BlogHero() {
  return (
    <div className={styles.bloghero}>
      {/* Área Principal (Esquerda - 60% da tela) */}
      <div className={styles.mainContent}>
        <div className={styles.post}>
          <div className={styles.image}>
            <a href="#" className={styles.link}>
              <Image
                src="/herotwo2.png" // Substitua pelo caminho da sua imagem
                alt="Descrição da imagem"
                width={420} // Largura da imagem
                height={400} // Altura da imagem
                className={styles.image}
              />
            </a>
          </div>
          <div className={styles.text}>
            <a href="#" className={styles.link}>
              <h2 className={styles.title}>Título do Post</h2>
            </a>
            <p className={styles.description}>
              Aqui vai uma breve descrição ou introdução do post.
            </p>
          </div>
          <div className={styles.meta}>
            <span className={styles.date}>Data: 01/11/2024</span>
            <span className={styles.readTime}>Tempo de leitura: 5 min</span>
          </div>
        </div>
        <div className={styles.post}>
          <div className={styles.image}>
            <a href="#" className={styles.link}>
              <Image
                src="/robot.webp" // Substitua pelo caminho da sua imagem
                alt="Descrição da imagem"
                width={420} // Largura da imagem
                height={400} // Altura da imagem
                className={styles.image}
              />
            </a>
          </div>
          <div className={styles.text}>
            <a href="#" className={styles.link}>
              <h2 className={styles.title}>Título do Post</h2>
            </a>
            <p className={styles.description}>
              Aqui vai uma breve descrição ou introdução do post.
            </p>
          </div>
          <div className={styles.meta}>
            <span className={styles.date}>Data: 01/11/2024</span>
            <span className={styles.readTime}>Tempo de leitura: 5 min</span>
          </div>
        </div>
      </div>

      {/* Área Lateral (Direita - 30% da tela) */}
      <div className={styles.sidebar}>
        <div className={styles.advertisement}>
          <a href="#" className={styles.advertisementLink}>
            <Image
              src="/banner2.webp"
              alt="Descrição da imagem"
              width={200}
              height={60}
            />
          </a>
        </div>
        <div className={styles.recentPosts}>
          <ul>
            <li className={styles.recentPostItem}>
              <div className={styles.image}>
                <a href="#" className={styles.link}>
                  <Image
                    src="/robot.webp" // Substitua pelo caminho da sua imagem
                    alt="Descrição da imagem"
                    width={420} // Largura da imagem
                    height={400} // Altura da imagem
                    className={styles.image}
                  />
                </a>
              </div>
              <div>
                <a href="#" className={styles.link}>
                  <p className={styles.description}>Resumo do Post 1</p>
                </a>
                <span className={styles.meta}>Data: 03/11/2024, Leitura: 3 min</span>
              </div>
            </li>
            <li className={styles.recentPostItem}>
              <div className={styles.image}>
                <a href="#" className={styles.link}>
                  <Image
                    src="/teste.webp" // Substitua pelo caminho da sua imagem
                    alt="Descrição da imagem"
                    width={420} // Largura da imagem
                    height={400} // Altura da imagem
                    className={styles.image}
                  />
                </a>
              </div>
              <div>
                <a href="#" className={styles.link}>
                  <p className={styles.description}>Resumo do Post 2</p>
                </a>
                <span className={styles.meta}>Data: 04/11/2024, Leitura: 4 min</span>
              </div>
            </li>
            <li className={styles.recentPostItem}>
              <div className={styles.image}>
                <a href="#" className={styles.link}>
                  <Image
                    src="/section.webp" // Substitua pelo caminho da sua imagem
                    alt="Descrição da imagem"
                    width={420} // Largura da imagem
                    height={400} // Altura da imagem
                    className={styles.image}
                  />
                </a>
              </div>
              <div>
                <a href="#" className={styles.link}>
                  <p className={styles.description}>Resumo do Post 3</p>
                </a>
                <span className={styles.meta}>Data: 05/11/2024, Leitura: 6 min</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
