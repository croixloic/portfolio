import Head from "next/head";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import img1 from '../public/assets/img/css2.png'
import img2 from '../public/assets/img/html.png'
import img3 from '../public/assets/img/javascript.png'
import img4 from '../public/assets/img/mysql2.png'
import img5 from '../public/assets/img/nextjs.png'
import img6 from '../public/assets/img/reacte.png'
import img7 from '../public/assets/img/sass.jpg'
import img8 from '../public/assets/img/nodejs2.png'
import img9 from '../public/assets/img/git2.png'
import { FaLinkedin } from "react-icons/fa";
import { FaGit } from "react-icons/fa";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Loïc Croix Développeur Front-end</title>
      </Head>
      <section className={styles.header}>
        <div>
          <h1>Je suis Loïc Croix Développeur Front-end</h1>
          <p>création d&apos;applications Web front-end</p>
        </div>
        <div className={styles.listLink}>
          <div className={styles.link}>
            <a
              href="https://www.linkedin.com/in/lo%C3%AFc-croix-61328517a/"
              target="blank"
            >
              <FaLinkedin />
            </a>
          </div>
          <div className={styles.link}>
            <a href="https://github.com/croixloic" target="blank">
              <FaGit />
            </a>
          </div>
        </div>
      </section>
      <section className={styles.propos}>
        <div>
          <p className={styles.p1}>À PROPOS DE MOI...</p>
          <h2>Qui suis-je?</h2>
          <p>
            Étant intéressé par l’informatique, je me suis orienté vers une
            formation diplômante dans le développement web. Celle-ci m’a permis
            d’avoir un suivi régulier par des professionnels, de mener des
            projets en autonomie allant de la création d’une base de données à
            celle de framework avec React JS. J’ai une préférence pour la
            réalisation visuelle des sites. Je suis organisé, rigoureux et je
            m’intéresse à la veille technologique afin de vous proposer des
            idées innovantes.
          </p>
        </div>
      </section>
      <section className={styles.competences}>
          <p className={styles.p1}>Compétences</p>
          <h2>Ce que je sais faire</h2>
        <div className={styles.container}>
          <div className={styles.competence}>
            <div className={styles.competenceimg}>

            <Image 
            layout="responsive"
            placeholder="blur"
            src={img2}
            alt="html"
            width="768"
            height="768"
            />
            </div>
            <p>Html</p>
          </div>
          <div className={styles.competence}>
          <div className={styles.competenceimg}>
            <Image 
            layout="responsive"
            placeholder="blur"
            src={img1}
            alt="css"
            width="2400"
            height="2400"
            />
            </div>
            <p>css</p>
          </div>
          <div className={styles.competence}>
          <div className={styles.competenceimg}>
            <Image 
            layout="responsive"
            placeholder="blur"
            src={img3}
            alt="js"
            width="1052"
            height="1052"
            />
            </div>
            <p>javascript</p>
          </div>
          <div className={styles.competence}>
          <div className={styles.competenceimg}>
            <Image 
            layout="responsive"
            placeholder="blur"
            src={img4}
            alt="Mysql"
            width="174"
            height="174"
            />
            </div>
            <p>Mysql</p>
          </div>
          <div className={styles.competence}>
          <div className={styles.competenceimg}>
            <Image 
            layout="responsive"
            placeholder="blur"
            src={img6}
            alt="React.js"
            width="360"
            height="360"
            />
            </div>
            <p>React.js</p>
          </div>
          <div className={styles.competence}>
          <div className={styles.competenceimg}>
            <Image 
            layout="responsive"
            placeholder="blur"
            src={img5}
            alt="Next.js"
            width="300"
            height="300"
            />
            </div>
            <p>Next.js</p>
          </div>
          <div className={styles.competence}>
          <div className={styles.competenceimg}>
            <Image 
            layout="responsive"
            placeholder="blur"
            src={img7}
            alt="Sass"
            width="260"
            height="260"
            />
            </div>
            <p>Sass/scss</p>
          </div>
          <div className={styles.competence}>
          <div className={styles.competenceimg}>
            <Image 
            layout="responsive"
            placeholder="blur"
            src={img8}
            alt="node.js"
            width="600"
            height="600"
            />
            </div>
            <p>node.js</p>
          </div>
          <div className={styles.competence}>
          <div className={styles.competenceimg}>
            <Image 
            layout="responsive"
            placeholder="blur"
            src={img9}
            alt="git"
            width="240"
            height="240"
            />
            </div>
            <p>Git</p>
          </div>
        </div>
      </section>
      <section className={styles.portfolio}>
        <div className={styles.protfcontent}>
          <p className={styles.p1}>Portfolio</p>
          <p>accéder facilement a la mise en pratique de mes compétences en cliquant sur ce bouton</p>
          <div className={styles.button}>
          <Link href='/portfolio'><a>Cliquez ici</a></Link>
          </div>
        </div>
      </section>
    </>
  );
}
