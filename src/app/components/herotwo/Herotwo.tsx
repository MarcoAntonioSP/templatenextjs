import Image from "next/image";
import Link from "next/link";
import styles from "./herotwo.module.css";

export default function Herotwo() {
  return (
    <div className={styles.herocontainer}>
      <div style={{ textAlign: "center", color: "white" }}>
        <h1>
          <Link href="/presenca-digital">Impulsione Seu Negócio com a Aceleração Digital</Link>
        </h1>
      </div>

      <div className={styles.herotwo}>
        <div className={styles.herotwoleft}>
          <div className={styles.herotwoimg}>
            <Link href="/aceleracao-digital">
              <Image
                className={styles.image}
                src="/section1.jpg" // substitua pelo caminho da sua imagem
                alt="Imagem de Apresentação"
                width={500}
                height={400}
              />
            </Link>
            <div className={styles.herotwotextleft}>
              <h1>
                <Link href="/aceleracao-digital">Aceleração Digital</Link>
              </h1>
            </div>
          </div>

          <div className={styles.herotwotextbottom}>
            <h2>
              <Link href="/sites-profissionais">Sites que Geram Resultados</Link>
            </h2>
            <p>
              <Link href="/sobre-nos">
                Na Aceleração Digital, criamos sites que são verdadeiras ferramentas de venda. Nossa missão é elevar sua presença online com sites estrategicamente projetados para converter visitantes em clientes fiéis.
              </Link>
            </p>
          </div>
        </div>

        <div className={styles.herotworigth}>
          {[
            { text: "Soluções Personalizadas para Alavancar seu Negócio", link: "/solucoes-personalizadas" },
            { text: "Design Responsivo e Eficiente para Impactar seu Público", link: "/design-responsivo" },
            { text: "SEO Avança", link: "/seo-avancado" },
            { text: "Experiência Digital Sob Medida para sua Marca", link: "/experiencia-digital" },
          ].map((item, index) => (
            <div key={index} className={styles.herotwotextrigth}>
              <div className={styles.herotworigtharticles}>
                <div>
                  <h4>
                    <Link href={item.link}>{item.text}</Link>
                  </h4>
                  <br />
                  <p>Publicado recentemente</p>
                </div>
              </div>
              <div className={styles.herotworigtharticlesimg}>
                <Link href={item.link}>
                  <Image
                    className={styles.image2}
                    src="/section1.jpg" // substitua pelo caminho da sua imagem
                    alt="Imagem de Apresentação"
                    width={100}
                    height={0}
                  />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
