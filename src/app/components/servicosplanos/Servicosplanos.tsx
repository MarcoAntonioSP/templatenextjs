import styles from "./servicosplano.module.css";
import { FaLaptopCode, FaBullhorn, FaChartBar, FaCheck } from 'react-icons/fa';
import Link from 'next/link';

export default function Servicosplanos() {
  return (
    <div className={styles.servicesplanos}>
      <div className={styles.servicesplanostitle}>
        <h1>Potencialize Seu Negócio com Nossos Planos Exclusivos</h1>
      </div>

      <div className={styles.servicesplanossection}>
        <div className={styles.servicesplanosright}>
          <div className={styles.planCard}>
            <FaLaptopCode className={styles.icon} />
            <h2>Plano Início Digital</h2>
            <p className="f-500">
              Comece com uma presença online estratégica para conquistar novos clientes.
            </p>
            <ul className={styles.serviceList}>
              <li><FaCheck className={styles.checkIcon} /> Website institucional personalizado</li>
              <li><FaCheck className={styles.checkIcon} /> Design moderno e responsivo</li>
              <li><FaCheck className={styles.checkIcon} /> Conexão direta com redes sociais</li>
              <li><FaCheck className={styles.checkIcon} /> SEO básico para visibilidade</li>
              <li><strong className={styles.priceHighlight}>R$ 3.000,00</strong> (pagamento único)</li>
            </ul>
            <Link href="/planos/inicio-digital" className={styles.btncustom}>Saiba Mais</Link>
          </div>
        </div>

        <div className={styles.servicesplanosright}>
          <div className={styles.planCard}>
            <FaBullhorn className={styles.icon} />
            <h2>Plano Expansão</h2>
            <p className="f-500">
              Perfeito para empresas que desejam aumentar sua presença digital com e-commerce e campanhas.
            </p>
            <ul className={styles.serviceList}>
              <li><FaCheck className={styles.checkIcon} /> E-commerce completo e customizável</li>
              <li><FaCheck className={styles.checkIcon} /> Landing pages com foco em conversão</li>
              <li><FaCheck className={styles.checkIcon} /> Gestão de anúncios no Google e Facebook</li>
              <li><FaCheck className={styles.checkIcon} /> SEO avançado e estratégias de marketing digital</li>
              <li><strong className={styles.priceHighlight}>R$ 8.000,00</strong> (pagamento único)</li>
            </ul>
            <Link href="/planos/expansao" className={styles.btncustom}>Saiba Mais</Link>
          </div>
        </div>

        <div className={styles.servicesplanosright}>
          <div className={styles.planCard}>
            <FaChartBar className={styles.icon} />
            <h2>Plano Domínio Digital</h2>
            <p className="f-500">
              O pacote completo para empresas que buscam uma presença digital robusta e completa.
            </p>
            <ul className={styles.serviceList}>
              <li><FaCheck className={styles.checkIcon} /> Criação de websites institucionais e e-commerce</li>
              <li><FaCheck className={styles.checkIcon} /> Landing pages com alta taxa de conversão</li>
              <li><FaCheck className={styles.checkIcon} /> Gestão estratégica de Google Ads e Facebook Ads</li>
              <li><FaCheck className={styles.checkIcon} /> Consultoria em marketing digital e SEO avançado</li>
              <li><strong className={styles.priceHighlight}>R$ 15.000,00</strong> (pagamento único)</li>
            </ul>
            <Link href="/planos/dominio-digital" className={styles.btncustom}>Saiba Mais</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
