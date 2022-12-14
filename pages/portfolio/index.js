import React from "react";
import styles from "../portfolio/styles.module.css";
import Image from "next/image";
import img1 from "../../public/assets/img/screen1.png";
import img2 from "../../public/assets/img/screen2.png";
import img3 from "../../public/assets/img/screen3.png";
import img4 from "../../public/assets/img/screen4.png";

export default function index() {
  return (
    <section className={styles.portfolio}>
      <h1>Portfolio</h1>
      <p className={styles.p1}>Projets</p>
      <p className={styles.realisation}>Ce que j&apos;ai réalisé</p>
      <div className={styles.container}>
        <div className={styles.content}>
          <Image
            layout="responsive"
            placeholder="blur"
            src={img1}
            alt="tourisme en avesnois"
            width="1583"
            height="757"
          />
          <p className={styles.description}>
            L&apos;objectif de &quot;Tourisme en Avesnois&quot; est de faire
            connaître au grand public l&apos;actualité et la mise en valeur de
            l&apos;Avesnois.
          </p>
          <span>projet Next.js</span>
          <div className={styles.btn}>
            <a
              className={styles.link1}
              href="https://github.com/croixloic/tourisme-en-avesnois"
              target="blank"
            >
              Code
            </a>
            <a
              className={styles.link1}
              href="https://tourisme-en-avesnois.vercel.app/"
              target="blank"
            >
              Démo
            </a>
          </div>
        </div>
        <div className={styles.content}>
          <Image
            layout="responsive"
            placeholder="blur"
            src={img2}
            alt="the cook"
            width="1579"
            height="763"
          />
          <p className={styles.description}>
            L&apos;objectif de &quot;the cook&quot; est de permettre aux
            restaurateurs d&apos;avoir une vitrine présentant leurs restaurants
            et également d&apos;y inclure leurs menus. Les visiteurs peuvent
            s&apos;inscrire et mettre une réaction aux restaurants qu&apos;ils
            ont préférés.
          </p>
          <span>projet React.js/Mysql</span>
          <div className={styles.btn}>
            <a
              className={styles.link1}
              href="https://github.com/croixloic/the-cook"
              target="blank"
            >
              Code
            </a>
          </div>
        </div>
        <div className={styles.content}>
          <Image
            layout="responsive"
            placeholder="blur"
            src={img3}
            alt="the cook"
            width="1581"
            height="749"
          />
          <p className={styles.description}>
            Projet final de ma formation : Le projet consiste à construire un
            réseau social interne pour les employés de Groupomania. Le but de
            cet outil est de faciliter les interactions entre collègues.
          </p>
          <span>projet React.js/Mysql</span>
          <div className={styles.btn}>
            <a
              className={styles.link1}
              href="https://github.com/croixloic/p7_Groupomania"
              target="blank"
            >
              Code
            </a>
          </div>
        </div>
        <div className={styles.content}>
          <Image
            layout="responsive"
            placeholder="blur"
            src={img4}
            alt="Omyfood"
            width="1589"
            height="759"
          />
          <p className={styles.description}>
            Projet intergration de maquette
            Ohmyfood! est une jeune startup qui voudrait s&apos;imposer sur le marché
            de la restauration. L&apos;objectif est de développer un site 100% mobile
            qui répertorie les menus de restaurants gastronomiques.
          </p>
          <span>html et scss</span>
          <div className={styles.btn}>
            <a
              className={styles.link1}
              href="hhttps://github.com/croixloic/Croixloic_P3_25102021"
              target="blank"
            >
              Code
              </a>
              <a
                className={styles.link1}
                href="https://croixloic.github.io/Croixloic_P3_25102021/index.html"
                target="blank"
                >
                Démo
              </a>
          </div>
        </div>
      </div>
    </section>
  );
}
