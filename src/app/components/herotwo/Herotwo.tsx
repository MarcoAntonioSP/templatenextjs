import Image from "next/image";
import styles from "./herotwo.module.css";
export default function Herotwo() {
  return (
    <div className={styles.herocontainer}>
      <div>
        <h1>kadslkdjsakldjsalkajkl</h1>
      </div>

      <div className={styles.herotwo}>
        <div className={styles.herotwoleft}>
          <div className={styles.herotwoimg}>
            <Image
              className={styles.image}
              src="/section1.jpg" // substitua pelo caminho da sua imagem
              alt="Imagem de Apresentação"
              width={500}
              height={400}
            />
          </div>
          <div className={styles.herotwotextleft}>
            <h1>Aceleração Digital</h1>
          </div>
          <div className={styles.herotwotextbottom}>
            <h2>
              A vote for Donald Trump is a vote for school shootings and measles
            </h2>
          </div>
        </div>

        <div className={styles.herotworigth}>            
          <div  className={styles.herotwotextrigth}>    
            <div className={styles.herotworigtharticles}>
              <div>
                <h4>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod
                  quam
                </h4>
                <br />
                <p>date  daily</p>
              </div>
            </div>
            <div className={styles.herotworigtharticlesimg}>
              <Image
              className={styles.image2}
                src="/section1.jpg" // substitua pelo caminho da sua imagem
                alt="Imagem de Apresentação"
                width={100}
                height={0}
              />
            </div>
          </div>
          <div  className={styles.herotwotextrigth}>    
            <div className={styles.herotworigtharticles}>
              <div>
                <h4>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod
                  quam
                </h4>
                <br />
                <p>date  daily</p>
              </div>
            </div>
            <div className={styles.herotworigtharticlesimg}>
              <Image
              className={styles.image2}
                src="/section1.jpg" // substitua pelo caminho da sua imagem
                alt="Imagem de Apresentação"
                width={100}
                height={0}
              />
            </div>
          </div>
          <div  className={styles.herotwotextrigth}>    
            <div className={styles.herotworigtharticles}>
              <div>
                <h4>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod
                  quam
                </h4>
                <br />
                <p>date  daily</p>
              </div>
            </div>
            <div className={styles.herotworigtharticlesimg}>
              <Image
              className={styles.image2}
                src="/section1.jpg" // substitua pelo caminho da sua imagem
                alt="Imagem de Apresentação"
                width={100}
                height={0}
              />
            </div>
          </div>
          <div  className={styles.herotwotextrigth}>    
            <div className={styles.herotworigtharticles}>
              <div>
                <h4>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod
                  quam
                </h4>
                <br />
                <p>date  daily</p>
              </div>
            </div>
            <div className={styles.herotworigtharticlesimg}>
              <Image
              className={styles.image2}
                src="/section1.jpg" // substitua pelo caminho da sua imagem
                alt="Imagem de Apresentação"
                width={100}
                height={0}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
