import styles from './herocombo.module.css';
import Image from 'next/image';
import Link from 'next/link';

export default function Herocombo() {
    return (
        <div className={styles.herocombo}>
            <div className={styles.herocombotextleft}>
                <section>
                    <header>
                        <h1>Olá, seja bem-vindo à Aceleração Digital!</h1>
                        <h2>"Seu impulso para o digital."</h2>
                    </header>
                    <br />
                    <article>
                        <p>
                            Por trás dos <strong className={styles.highlight}>excelentes resultados</strong> de diversas empresas em todo o Brasil, estão as <strong className={styles.highlight}>soluções da Aceleração Digital</strong>. São negócios de todos os tamanhos que confiam em nossa expertise para <em>expandir suas operações online</em> e alcançar resultados impactantes.
                        </p>
                    </article>
                </section>

                <div>
                    <ul className={styles.herolist}>
                        <li className={styles.heroitemli}>
                            <Link href="/servicos/criacao-sites" className={styles.heroitemLink}>
                                <div>
                                    <p>Sites Institucionais, Landing Pages, e E-commerce, com design responsivo e foco em conversão.</p>
                                </div>
                                <div className={styles.herocomboimglist}>
                                    <Image
                                        className={styles.image}
                                        src="/herotwo1.png"
                                        alt="Serviço de Criação de Sites"
                                        width={300}
                                        height={200}
                                    />
                                </div>
                            </Link>
                        </li>
                        <li className={styles.heroitemli}>
                            <Link href="/servicos/trafego-pago" className={styles.heroitemLink}>
                                <div>
                                    <p>Campanhas de Google e Facebook Ads, com estratégias para atingir o público ideal.</p>
                                </div>
                                <div className={styles.herocomboimglist}>
                                    <Image
                                        className={styles.image}
                                        src="/herotwo2.png"
                                        alt="Serviço de Tráfego Pago"
                                        width={300}
                                        height={200}
                                    />
                                </div>
                            </Link>
                        </li>
                        <li className={styles.heroitemli}>
                            <Link href="/servicos/consultoria-marketing" className={styles.heroitemLink}>
                                <div>
                                    <p>Consultoria e planejamento estratégico para campanhas de marketing digital eficazes.</p>
                                </div>
                                <div className={styles.herocomboimglist}>
                                    <Image
                                        className={styles.image}
                                        src="/herotwo3.png"
                                        alt="Serviço de Consultoria de Marketing"
                                        width={300}
                                        height={200}
                                    />
                                </div>
                            </Link>
                        </li>
                        <li className={styles.heroitemli}>
                            <Link href="/servicos/suporte-pos-lancamento" className={styles.heroitemLink}>
                                <div>
                                    <p>Suporte contínuo e otimização para garantir o melhor desempenho de seu projeto digital.</p>
                                </div>
                                <div className={styles.herocomboimglist}>
                                    <Image
                                        className={styles.image}
                                        src="/herotwo4.png"
                                        alt="Suporte Pós-Lançamento"
                                        width={300}
                                        height={200}
                                    />
                                </div>
                            </Link>
                        </li>
                    </ul>
                </div>

                <div className={styles.herocombolinkbottom}>
                    <Link href="/consultoria-gratuita" className={`btn btn-warning px-4 ${styles.customButton}`}>
                        Solicite uma Consultoria Gratuita
                    </Link>
                </div>
            </div>
            <div className={styles.heroimg}>
                <Image
                    src="/eu.jpeg"
                    alt="Imagem de Apresentação"
                    width={800}
                    height={400}
                />
            </div>
        </div>
    );
}
