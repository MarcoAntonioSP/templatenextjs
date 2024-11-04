import React from 'react';
import Image from 'next/image'; // Importa o componente de imagem do Next.js
import { FaCheckCircle } from 'react-icons/fa'; // Ícone do Bootstrap
import { Button } from 'react-bootstrap'; // Importa o componente de botão do Bootstrap
import styles from './heroquemsomos.module.css';

export default function Heroquemsomos() {
    return (
        <div className={styles.presentationContainer}>
            <div className={styles.textContainer}>
                <h1 className={styles.title}>PRODUTIVIDADE EM ESCALA</h1>
                <p>
                    <FaCheckCircle className={styles.icon} /> Atenda às necessidades da sua organização com ferramentas poderosas para produtividade
                </p>
                <p>
                    <FaCheckCircle className={styles.icon} /> Automatize tarefas rotineiras e dedique mais tempo às atividades mais importantes
                </p>
                <p>
                    <FaCheckCircle className={styles.icon} /> Veja o que acontece em toda a organização com facilidade pelo Atlas do Slack, nossa ferramenta integrada de diretório de equipes.
                </p>
                <p>
                    <FaCheckCircle className={styles.icon} /> Visualize a produtividade da equipe e mensure a adesão à pilha de tecnologia com análise avançada
                </p>
                <p>
                    <FaCheckCircle className={styles.icon} /> Saiba mais sobre o Slack em grande escala
                </p>
                <blockquote>
                    “O Slack tem sido o martelo que nos ajuda a quebrar as paredes de silos. Ele é o sistema operacional de colaboração em 194 países e 171 escritórios, nos unindo como nada antes conseguiu.”
                </blockquote>
                <p><strong>Jeff Dow, Vice-presidente executivo, operações de mídia e transmissão</strong></p>
                <p><strong>Logotipo da FOX</strong></p>
                <Button variant="primary" className={styles.button}>
                    Saiba Mais
                </Button>
            </div>
            <div className={styles.imageContainer}>
                <Image
                    src="/eu.webp" // Substitua pelo caminho da sua imagem
                    alt="Descrição da imagem"
                    layout="responsive" // Torna a imagem responsiva
                    width={300} // Largura da imagem
                    height={300} // Altura da imagem
                />
            </div>
        </div>
    );
}
