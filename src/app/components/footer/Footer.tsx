// Footer.js
import styles from './footer.module.css';

export default function Footer() {
  return (
    <div className={styles.footerContainer}>
      <div className={styles.footerSection}>
        <div className={styles.linksSection}>
          <h3>Links Rápidos</h3>
          <ul>
            <li><a href="/sobre">Sobre Nós</a></li>
            <li><a href="/servicos">Serviços</a></li>
            <li><a href="/contato">Contato</a></li>
            <li><a href="/blog">Blog</a></li>
          </ul>
        </div>

        <div className={styles.textSection}>
          <h3>Sobre a Aceleração Digital</h3>
          <p>Na Aceleração Digital, estamos comprometidos em transformar a presença online de nossos clientes com sites de alta qualidade que convertem visitantes em clientes.</p>
        </div>

        <div className={styles.ctaSection}>
          <h3>Entre em Contato</h3>
          <p>Pronto para acelerar seu negócio?</p>
          <button className={styles.ctaButton}>Solicitar Orçamento</button>
          <button className={styles.ctaButton}>Falar com um Especialista</button>
        </div>
      </div>

      <div className={styles.footerBottom}>
        <p>&copy; {new Date().getFullYear()} Aceleração Digital. Todos os direitos reservados.</p>
      </div>
    </div>
  );
}
