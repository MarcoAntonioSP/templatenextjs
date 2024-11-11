import Image from "next/image";
import Link from "next/link";
import styles from "./herotwo.module.css";

export default function Herotwo() {
  return (
    <div className={styles.herocontainer}>
      <div style={{ textAlign: "center" }}>
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
                src="/section1.webp"
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
                Na Aceleração Digital, oferecemos soluções em websites que não apenas atraem visitantes, mas os convertem em clientes fiéis. Com design inovador, otimização para SEO e integração completa com seu branding, nossa missão é potencializar sua presença digital de forma estratégica.
              </Link>
            </p>
          </div>
        </div>

        <div className={styles.herotworigth}>
          {[
            { text: "Soluções Personalizadas para Alavancar seu Negócio", link: "/solucoes-personalizadas", description: "Criamos estratégias sob medida para cada cliente, proporcionando crescimento digital e visibilidade." },
            { text: "Design Responsivo e Eficiente para Impactar seu Público", link: "/design-responsivo", description: "Desenvolvemos sites que oferecem uma experiência intuitiva e fluida em todos os dispositivos." },
            { text: "SEO Avançado para Posicionar sua Marca", link: "/seo-avancado", description: "Com técnicas de SEO de ponta, garantimos que seu site se destaque nos mecanismos de busca." },
            { text: "Experiência Digital Sob Medida para sua Marca", link: "/experiencia-digital", description: "Cada detalhe do design é planejado para refletir a identidade e os valores de sua marca." },
          ].map((item, index) => (
            <div key={index} className={styles.herotwotextrigth}>
              <div className={styles.herotworigtharticles}>
                <div>
                  <h4>
                    <Link href={item.link}>{item.text}</Link>
                  </h4>
                  <p>{item.description}</p>
                </div>
              </div>
              <div className={styles.herotworigtharticlesimg}>
                <Link href={item.link}>
                  <Image
                    className={styles.image2}
                    src="/section1.webp"
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
