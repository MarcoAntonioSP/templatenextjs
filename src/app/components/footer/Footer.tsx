import Image from 'next/image';
import styles from './footer.module.css';

export default function Footer() {
  return (
    <div className={styles.footerContainer}>
      <div className={styles.footerSection}>
        
        {/* Redes Sociais */}
        <div className={styles.socialSection}>
          <h3>Redes Sociais</h3>
          <ul>
            <li>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <Image src="/facebookicon.png" alt="Facebook" width={48} height={30} />
              </a>
            </li>
            <li>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <Image src="/instagranicon.png" alt="Instagram" width={48} height={30} />
              </a>
            </li>
            <li>
              <a href="https://wa.me" target="_blank" rel="noopener noreferrer">
                <Image src="/whatsapp.png" alt="WhatsApp" width={48} height={30} />
              </a>
            </li>
            <li>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <Image src="/linkdinicon.png" alt="LinkedIn" width={60} height={30} />
              </a>
            </li>
          </ul>
        </div>
        
        {/* Destaques */}
        <div className={styles.destaquesSection}>
          <h3>Destaques</h3>
          <ul>
            <li><a href="/home"><span className={styles.circlecheck}></span> Home</a></li>
            <li><a href="/sobre"><span className={styles.circlecheck}></span> Sobre Nós</a></li>
            <li><a href="/produtos"><span className={styles.circlecheck}></span> Produtos</a></li>
            <li><a href="/blog"><span className={styles.circlecheck}></span> Blog</a></li>
            <li><a href="/trabalhe-conosco"><span className={styles.circlecheck}></span> Trabalhe Conosco</a></li>
            <li><a href="/politica-de-privacidade"><span className={styles.circlecheck}></span> Política de Privacidade</a></li>
          </ul>
        </div>
        
        {/* Contato */}
        <div className={styles.contatoSection}>
          <h3>Contato</h3>
          <p>Telefone: (15) 3359-1400</p>
          <p>Email: <a href="mailto:contato@eripack.com.br">contato@eripack.com.br</a></p>
        </div>

        {/* Endereço */}
        <div className={styles.enderecoSection}>
          <h3>Endereço</h3>
          <p>Sorocaba / SP</p>
          <p>Av. Georg Schaeffer, 1150, Sorocaba - SP, CEP: 18087-175</p>
        </div>
      </div>

      {/* Rodapé */}
      <div className={styles.footerBottom}>
        <p>&copy; {new Date().getFullYear()} Eripack - Todos os direitos reservados</p>
        <p>Desenvolvimento por <a href="https://logotipodigital.com.br" target="_blank" rel="noopener noreferrer">Logotipo Digital Nerd RGB</a></p>
      </div>
    </div>
  );
}
