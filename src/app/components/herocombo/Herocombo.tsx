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
      Por trás dos <strong>excelentes resultados</strong> de diversas empresas de sucesso em todo o Brasil, estão as <strong>soluções oferecidas pela Aceleração Digital</strong>. São negócios de diferentes tamanhos e setores que confiam na Aceleração Digital para compreender suas demandas e oferecer <em>soluções personalizadas</em>.
    </p>
    <p>
      Por trás dos <strong>excelentes resultados</strong> de diversas empresas de sucesso em todo o Brasil, estão as <strong>soluções oferecidas pela Aceleração Digital</strong>. São negócios de diferentes tamanhos e setores que confiam na Aceleração Digital para compreender suas demandas e oferecer <em>soluções personalizadas</em>.
    </p>
  </article>
</section>

				<div>
					<ul className={styles.herolist}>
						<li className={styles.heroitemli}>
							<div>
								<p>lorem patins claro e vivo</p>
							</div>
							<div className={styles.herocomboimglist}>
								<Image
									className={styles.image}
									src="/eu.jpeg" // substitua pelo caminho da sua imagem
									alt="Imagem de Apresentação"
									width={300}
									height={200}
								/>
							</div>
						</li>
                        <li className={styles.heroitemli}>
							<div>
								<p>lorem patins claro e vivo</p>
							</div>
							<div className={styles.herocomboimglist}>
								<Image
									className={styles.image}
									src="/eu.jpeg" // substitua pelo caminho da sua imagem
									alt="Imagem de Apresentação"
									width={300}
									height={200}
								/>
							</div>
						</li>
                        <li className={styles.heroitemli}>
							<div>
								<p>lorem patins claro e vivo</p>
							</div>
							<div className={styles.herocomboimglist}>
								<Image
									className={styles.image}
									src="/eu.jpeg" // substitua pelo caminho da sua imagem
									alt="Imagem de Apresentação"
									width={300}
									height={200}
								/>
							</div>
						</li>
                        <li className={styles.heroitemli}>
							<div>
								<p>lorem patins claro e vivo</p>
							</div>
							<div className={styles.herocomboimglist}>
								<Image
									className={styles.image}
									src="/eu.jpeg" // substitua pelo caminho da sua imagem
									alt="Imagem de Apresentação"
									width={300}
									height={200}
								/>
							</div>
						</li>
				
					</ul>
				</div>
				<div className={styles.herocombolinkbottom}>
					<Link href="/" className="btn btn-warning px-4 ">
						aqui
					</Link>
				</div>
			</div>
			<div className={styles.heroimg}>
				<Image
					src="/eu.jpeg" // substitua pelo caminho da sua imagem
					alt="Imagem de Apresentação"
					width={800}
					height={400}
				/>
			</div>
		</div>
	);
}
