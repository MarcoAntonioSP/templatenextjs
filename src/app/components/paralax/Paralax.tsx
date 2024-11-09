import styles from "./paralax.module.css";
import Image from "next/image";
import Link from "next/link"; // Importando corretamente o Link do Next.js
import {
  FaRocket,
  FaChartLine,
  FaUsers,
  FaMobileAlt,
  FaCog,
  FaLock,
  FaDollarSign,
} from "react-icons/fa"; // Ícones

export default function Paralax() {
  return (
    <div className={styles.paralax}>
      <div className={styles.paralaxbackgroundimgleft}>
        <Image
          src="/robopalarax.png" // Substitua pelo caminho da sua imagem
          alt="Descrição da imagem"
          width={420} // Largura da imagem
          height={100} // Altura da imagem
          style={{ marginTop: "-60px" }}
          className={styles.image} // Classe para aplicar a animação de pêndulo
        />
        <div className={styles.buttonparalax}>
          <Link href="/your-target-page" className="btn btn-primary">
            Button
          </Link>
        </div>
      </div>

      <div className={styles.listContainer}>
        <ul className={styles.advantageList}>
          <li>
            <FaRocket className={styles.icon} />
            <div>
              <h2 className={styles.advantageTitle}>Impulso de Visibilidade</h2>
              <p className={styles.advantageText}>
                Alcance novos públicos e expanda a presença digital do seu
                negócio. Criar uma visibilidade online não é apenas uma
                tendência, mas uma necessidade no mercado atual. Com a ajuda das
                melhores estratégias digitais, seu negócio será encontrado por
                mais pessoas e alcançará novos patamares de sucesso.
              </p>
            </div>
          </li>
          <li>
            <FaChartLine className={styles.icon} />
            <div>
              <h2 className={styles.advantageTitle}>Crescimento de Vendas</h2>
              <p className={styles.advantageText}>
                Estratégias digitais que convertem visitantes em clientes. Ao
                aplicar táticas bem definidas e dados de análise, podemos
                otimizar cada ponto de contato, garantindo que seu investimento
                seja convertido em resultados concretos. O crescimento das
                vendas está ao seu alcance!
              </p>
            </div>
          </li>
          <li>
            <FaUsers className={styles.icon} />
            <div>
              <h2 className={styles.advantageTitle}>Alcance de Clientes</h2>
              <p className={styles.advantageText}>
                Conecte-se com seu público-alvo de forma mais eficaz. Seja por
                meio das redes sociais, marketing de conteúdo ou anúncios
                direcionados, nós ajudamos a construir uma conexão real com as
                pessoas que realmente importam para o seu negócio, aumentando
                sua base de clientes.
              </p>
            </div>
          </li>
          <li>
            <FaMobileAlt className={styles.icon} />
            <div>
              <h2 className={styles.advantageTitle}>Design Responsivo</h2>
              <p className={styles.advantageText}>
                Sites otimizados para todos os dispositivos, oferecendo uma
                experiência perfeita. A navegação perfeita em celulares, tablets
                ou desktops é fundamental. O design responsivo garante que seus
                visitantes tenham a melhor experiência, independentemente do
                dispositivo.
              </p>
            </div>
          </li>
          <li>
            <FaCog className={styles.icon} />
            <div>
              <h2 className={styles.advantageTitle}>Fácil de Gerenciar</h2>
              <p className={styles.advantageText}>
                Administração simplificada para atualizações rápidas e
                eficientes. Não perca tempo com ferramentas complexas. Com nosso
                sistema, você poderá gerenciar seu site facilmente, mantendo-o
                atualizado em apenas alguns cliques, sem complicações.
              </p>
            </div>
          </li>
          <li>
            <FaLock className={styles.icon} />
            <div>
              <h2 className={styles.advantageTitle}>Segurança Avançada</h2>
              <p className={styles.advantageText}>
                Proteção confiável para garantir a segurança dos dados do seu
                site. A segurança online é uma prioridade. Implementamos as mais
                recentes práticas de segurança para proteger seus dados e os
                dados de seus clientes, garantindo um ambiente online seguro e
                confiável.
              </p>
            </div>
          </li>
          <li>
            <FaDollarSign className={styles.icon} />
            <div>
              <h2 className={styles.advantageTitle}>
                Retorno sobre o Investimento
              </h2>
              <p className={styles.advantageText}>
                Aumente a lucratividade com um site que gera resultados. Cada
                centavo investido em marketing digital deve trazer retorno.
                Ajudamos você a maximizar sua rentabilidade com um site
                projetado para gerar leads, conversões e aumentar suas vendas.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
