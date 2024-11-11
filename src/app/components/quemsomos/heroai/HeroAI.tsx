import React from 'react';
import Image from 'next/image';
import { FaCheckCircle, FaRocket, FaClipboardList } from 'react-icons/fa';
import { Button } from 'react-bootstrap';
import styles from './HeroAI.module.css';

export default function HeroAI() {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Deixe a IA e o ML fazerem o trabalho pesado</h1>
            <p className={styles.subtitle}>
                Simplifique seu CRO e ofereça aos visitantes uma melhor experiência usando nossas ferramentas de IA e
                insights gerados por mais de dois bilhões de conversões.
            </p>
            <div className="row g-4">
                <div className="col-12 col-md-6">
                    <div className={styles.textContainer}>
                        <div className={styles.textBlock}>
                            <FaCheckCircle className={styles.icon} />
                            <p>
                                Sem desenvolvedor, sem problemas. Com testes A/B integrados, você pode criar rapidamente
                                novas variantes, iniciar testes e analisar resultados com apenas alguns cliques e sem pedir
                                ajuda.
                            </p>
                        </div>
                        <div className={styles.textBlock}>
                            <FaRocket className={styles.icon} />
                            <p>
                                Experimente sem limites. Crie variantes de página ilimitadas para testar tudo, desde títulos
                                e imagens até chamadas para ação, para que você nunca perca uma oportunidade de otimizar.
                            </p>
                        </div>
                        <div className={styles.textBlock}>
                            <FaClipboardList className={styles.icon} />
                            <p>
                                Teste com confiança. Otimize rapidamente usando intervalos de confiança e relatórios em
                                tempo real para identificar claramente as variantes vencedoras para que você possa tomar
                                decisões baseadas em dados.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-6">
                    <div className={styles.imageContainer}>
                        <Image
                            src="/robot.webp" // Substitua pelo caminho da sua imagem
                            alt="Descrição da imagem"
                            width={400} // Largura da imagem
                            height={400} // Altura da imagem
                            className={styles.image}
                        />
                    </div>
                </div>
            </div>
            <Button variant="primary" className={styles.button}>
                Comece Agora
            </Button>
        </div>
    );
}
