import styles from './herocombo.module.css';
import Image from 'next/image';
import Link from 'next/link';

export default function Herocombo() {
    return (
        <div className={styles.herocombo}>
            <div className={styles.herocombotextleft}>
                <section>
                    <header>
                        <h1>Olá, seja bem-vindo à Aceleração Web :)</h1>
                    </header>
                    <br />
                    <article>
                        <p>
                            Por trás dos <strong className={styles.highlight}>excelentes resultados</strong> de diversas empresas de sucesso em todo
                            o Brasil, estão as <strong className={styles.highlight}>soluções oferecidas pela Aceleração Digital</strong>. São
                            negócios de diferentes tamanhos e setores que confiam na Aceleração Digital para compreender
                            suas demandas e oferecer <em>soluções personalizadas</em>.
                        </p>
                    </article>
                </section>

                <div>
                    <ul className={styles.herolist}>
                        <li className={styles.heroitemli}>
                            <Link href="/link1" className={styles.heroitemLink}>
                                <div>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit elitelitelit.</p>
                                </div>
                                <div className={styles.herocomboimglist}>
                                    <Image
                                        className={styles.image}
                                        src="/eu.webp" // substitua pelo caminho da sua imagem
                                        alt="Imagem de Apresentação"
                                        width={300}
                                        height={200}
                                    />
                                </div>
                            </Link>
                        </li>
                        <li className={styles.heroitemli}>
                            <Link href="/link2" className={styles.heroitemLink}>
                                <div>
                                    <p>Suspendisse potenti. Vestibulum ante ipsum primis in faucibus orci.</p>
                                </div>
                                <div className={styles.herocomboimglist}>
                                    <Image
                                        className={styles.image}
                                        src="/eu.webp" // substitua pelo caminho da sua imagem
                                        alt="Imagem de Apresentação"
                                        width={300}
                                        height={200}
                                    />
                                </div>
                            </Link>
                        </li>
                        <li className={styles.heroitemli}>
                            <Link href="/link3" className={styles.heroitemLink}>
                                <div>
                                    <p>Quisque consequat eros nec felis ultrices, a cursus nisi consequat.</p>
                                </div>
                                <div className={styles.herocomboimglist}>
                                    <Image
                                        className={styles.image}
                                        src="/eu.webp" // substitua pelo caminho da sua imagem
                                        alt="Imagem de Apresentação"
                                        width={300}
                                        height={200}
                                    />
                                </div>
                            </Link>
                        </li>
                        <li className={styles.heroitemli}>
                            <Link href="/link4" className={styles.heroitemLink}>
                                <div>
                                    <p>Aliquam erat volutpat. Nulla facilisi. Integer non odio sit amet </p>
                                </div>
                                <div className={styles.herocomboimglist}>
                                    <Image
                                        className={styles.image}
                                        src="/eu.webp" // substitua pelo caminho da sua imagem
                                        alt="Imagem de Apresentação"
                                        width={300}
                                        height={200}
                                    />
                                </div>
                            </Link>
                        </li>
                    </ul>
                </div>

                <div className={styles.herocombolinkbottom}>
                    <Link href="/" className={`btn btn-warning px-4 ${styles.customButton}`}>
                        aqui
                    </Link>
                </div>
            </div>
            <div className={styles.heroimg}>
                <Image
                    src="/eu.webp" // substitua pelo caminho da sua imagem
                    alt="Imagem de Apresentação"
                    width={800}
                    height={400}
                />
            </div>
        </div>
    );
}
