import styles from "./serviceshero.module.css";
import Image from "next/image";

export default function Serviceshero() {
  return (
    <div className={styles.serviceshero}>
      <div className={styles.servicesherotitle}>
        <h1>
          Faça Parte do setor que mais cresce no Brasil. Nós te ajudamos obter
          melhorias de vendas com estratégia e as melhores soluções para seu
          marketplace.
        </h1>
      </div>

      <div className={styles.servicesherosection}>
        <div className={styles.servicesheroleft}>
          <Image
            src="/teste.webp"
            alt="First slide"
            width={800} // Substitua conforme necessário
            height={500} // Substitua conforme necessário
            style={{ objectFit: "cover" }}
          />
        </div>

        <div className={styles.servicesheroright}>
          <h1>
            Setor de Ecommerce , impulsionado pelos marketplaces, cresceu 182%
            em 6 anos
          </h1>
          <p className="f-500">
            A reportagem no site Poder 360 fala sobre o crescimento das vendas
            de e-commerce de 2017 até 2022. O faturamento cresceu quase 182%
            durante o período, somando R$ 169 milhões de reais em 6 anos. O
            número de pedidos online teve alta de 163% no mesmo período,
            chegando a R$ 368,7 milhões em 2022.
          </p>
          <p>
            Ainda que o setor esteja em uma forte crescente, é necessário
            reforçar que para conseguir se destacar no mercado de marketplace,
            uma boa estratégia com gestão profissional focada em otimização de
            processos trazendo lucratividade e reputação para sua empresa
          </p>
          <p>Conte com a Mais Resultado e mire o sucesso!</p>
        </div>
      </div>
    </div>
  );
}
