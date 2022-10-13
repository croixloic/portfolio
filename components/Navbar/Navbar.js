import React from "react";
import Link from "next/link";
import Image from "next/image";
import img1 from "../../public/assets/img/lc.png";
import styles from "../Navbar/Navbar.module.css";

export default function Navbar() {
  return (
    <div className={styles.header}>
      <div className={styles.img}>
          <Image
            layout="responsive"
            placeholder="blur"
            src={img1}
            alt="logo"
            width="873"
            height="492"
          />
      </div>
      <nav className={styles.navbar}>     
        <div className={styles.link}>
          <Link href="/">
            <a>Accueil</a>
          </Link>
          <Link href="/portfolio">
            <a>Portfolio</a>
          </Link>
        </div>
      </nav>
    </div>
  );
}
