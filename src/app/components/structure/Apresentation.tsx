'use client';
import { useInView } from "react-intersection-observer";
import { useState, useEffect } from "react";
import styles from './apstructure.module.css';
import Image from "next/image";
import Link from "next/link";

export default function Apresentation() {
  const { ref, inView } = useInView({ threshold: 0.7 });
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    if (inView) setAnimate(true); // Animação só é aplicada após a visualização inicial
  }, [inView]);

  return (
    <div
      ref={ref}
      className={`${styles.apstructurest} ${animate ? styles.visible : ""} container-fluid py-5`}
    >
      <div className="row align-items-center justify-content-center">
        <div className="col-md-6 col-12 text-center text-md-left">
          <h1 className={styles.title}>Transforme Sua Presença Online</h1>
          <p className={styles.description}>
            Amplie seu alcance e conquiste novos clientes com um site profissional e otimizado. Garanta visibilidade e destaque para seu negócio.
          </p>
          <Link href="/contato">
            <button className="btn btn-primary btn-lg mt-3">Fale Conosco</button>
          </Link>
        </div>
        <div className="col-md-3 d-none d-md-block text-center">
          <Image 
            src="/section1.jpg" // substitua pelo caminho da sua imagem
            alt="Imagem de Apresentação"
            width={500} 
            height={300} 
            className={`${styles.imgleft} img-fluid`}
          />
        </div>
      </div>
    </div>
  );
}
