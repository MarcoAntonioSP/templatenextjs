'use client';
import styles from "./hero.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Link from "next/link";

export default function Hero() {
  return (
    <div className={`${styles.hero} container-fluid`}>
      <div className={`${styles.sectionhero} row align-items-center`}>
        <div className="col-md-5">
          <h1 data-reflection="QUEM SOMOS" className={styles.glow}>
            Transforme Sua Presença Online
          </h1>
          <br />
          <p>
            Impulsione seu negócio com um site que conecta, inspira e converte! Sites rápidos, funcionais e focados no seu sucesso.
          </p>
          <p>
            Da estratégia ao design, criamos soluções que elevam sua marca e atraem clientes para o seu negócio.
          </p>
          <p>
            Seja visto. Seja lembrado. Escolha a transformação digital que fará sua empresa crescer. Entre em contato agora e descubra o futuro do seu negócio!
          </p>
          <div className={styles.buttonsContainer}>
            <Link href="/cubo" className={styles.cubeLink}>
              {/* Removido o conteúdo do cubo 3D */}
              <div className={styles.cubePlaceholder}>A</div>
            </Link>
          </div>
        </div>
        <div className={`col-md-6 ${styles.imagemhero}`}>
          <div className={styles.overlay}>
            <h2>Descubra o Futuro do Seu Negócio</h2>
            <Link href="/orcamento" className="btn btn-warning px-4">
              Comece Agora
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
