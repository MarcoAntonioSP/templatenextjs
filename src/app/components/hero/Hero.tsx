'use client';
import { useEffect, useRef } from "react";
import styles from "./hero.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Link from "next/link";

export default function Hero() {
  const cubeRef = useRef(null);
  const heroRef = useRef(null); // Ref para a seção hero

  useEffect(() => {
    const cube = cubeRef.current;
    const hero = heroRef.current;
    let posY = Math.random() * (hero.clientHeight - 100); // Posição inicial aleatória dentro da hero
    let speed = 1; // Velocidade do cubo
    let direction = 1; // Direção do movimento (1 = para baixo, -1 = para cima)

    const animateCube = () => {
      // Atualiza a posição do cubo
      posY += speed * direction;

      // Verifica se o cubo atingiu as bordas da sectionhero
      if (posY + cube.offsetHeight > hero.clientHeight || posY < 0) {
        direction *= -1; // Inverte a direção
      }

      cube.style.transform = `translateY(${posY}px)`; // Move o cubo apenas no eixo Y
      requestAnimationFrame(animateCube);
    };

    animateCube();
  }, []);

  return (
    <div ref={heroRef} className={`${styles.hero} container-fluid`}>
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
          <Link href="/cubo" className={styles.cubeLink}> {/* Link para a página desejada */}
        <div ref={cubeRef} className={styles.cube}>
          <div className={`${styles["cube-face"]} ${styles["cube-face--front"]}`}>A</div>
          <div className={`${styles["cube-face"]} ${styles["cube-face--back"]}`}>D</div>
          <div className={`${styles["cube-face"]} ${styles["cube-face--left"]}`}>A</div>
          <div className={`${styles["cube-face"]} ${styles["cube-face--right"]}`}>D</div>
          <div className={`${styles["cube-face"]} ${styles["cube-face--top"]}`}>A</div>
          <div className={`${styles["cube-face"]} ${styles["cube-face--bottom"]}`}>D</div>
        </div>
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
