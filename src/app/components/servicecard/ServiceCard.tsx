'use client';
import { useInView } from "react-intersection-observer";
import { useState, useEffect } from "react";
import styles from './servicecard.module.css';
import Image from "next/image";
import Link from "next/link";

export default function ServiceCard() {
  const { ref, inView } = useInView({ threshold: 0.3 });
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(inView);
  }, [inView]);

  return (
    <div
      ref={ref}
      className={`${styles.apstructurest} ${animate ? styles.visible : ""} container-fluid py-5`}
    >
      <div className="row align-items-center justify-content-center">
        <div className="col-md-4 d-none d-md-block text-center">
          <Image
            className={`${styles.imgleft} img-fluid`}
            src="/section1.jpg"
            alt="Venda de Sites para Advogados"
            width={400}
            height={400}
          />
        </div>
        <div className="col-md-6 col-12 text-center text-md-left">
          <h4 className="text-warning">Profissionalismo, Visibilidade, Resultados</h4>
          <h1 className={`${styles.title} text-primary`}>Transforme sua Prática com um Site Personalizado</h1>
          <h2 className="text-secondary">Atraia mais clientes e destaque-se na advocacia com um site de alta qualidade</h2>
          <p className={`${styles.description} text-muted`}>
            Oferecemos soluções de criação de sites sob medida para advogados, focando em design atrativo e funcionalidade otimizada. 
            Com um site profissional, você não apenas melhora sua visibilidade online, mas também transmite confiança e credibilidade aos seus clientes.
            Nossas plataformas são responsivas e otimizadas para SEO, garantindo que você seja encontrado por quem realmente importa.
          </p>
          <h5 className="text-primary">Entre em contato agora e descubra como podemos ajudar sua carreira a prosperar!</h5>
          <Link href="https://api.whatsapp.com/send?l=pt&phone=5511996016574" target="_blank" className={styles.ctaButton}>
            <button className="btn btn-primary btn-lg mt-4">Fale Conosco</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
