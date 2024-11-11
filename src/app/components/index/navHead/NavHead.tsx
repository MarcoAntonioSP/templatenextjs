"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./navhead.module.css";

export default function NavHead() {
  const [isSticky, setIsSticky] = useState(false);

  const handleScroll = () => {
    // Defina a rolagem para 450px para tornar o menu fixo
    setIsSticky(window.scrollY > 450);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {/* Div superior com 15px de altura e cor vermelha */}
      <div className={`${styles.topBar} ${isSticky ? styles.hideTopBar : ""}`}>
        <p>
           Rua Serra de Botucatu, 2404, Tatuapé- São Paulo, SP (11) 9 5451-0976 - (11) 9 3742-1766
        </p>
      </div>
      {/* NavBar */}
      <div
        className={`${styles.headernav} ${isSticky ? styles.sticky : "bg-transparent"}`}>
        <nav
          className={`navbar navbar-expand-lg ${isSticky ? styles.transparentBg : ""}`}>
          <div className="container-fluid d-flex justify-content-between align-items-center">
            <Link className="navbar-brand" href="/">
              <Image
                src="/logo.png"
                className={styles.logoteste}
                alt="Logo"
                width={isSticky ? 110 : 200}
                height={isSticky ? 80 : 80}
                style={{ marginRight: "150px", transition: "width 0.3s ease" }}
                priority
              />
            </Link>
            <button
              className="navbar-toggler border"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>
          <div
            className={`collapse navbar-collapse ${styles.menu}`}
            id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <Link className={`${styles.navLink} ${isSticky ? styles.blackText : styles.whiteText}`} href="/">
                Home
              </Link>
              <Link className={`${styles.navLink} ${isSticky ? styles.blackText : styles.whiteText}`} href="/pages/quemsomos">
                Quem Somos
              </Link>
              <Link className={`${styles.navLink} ${isSticky ? styles.blackText : styles.whiteText}`} href="/pages/servicos">
                Serviços
              </Link>
              <Link className={`${styles.navLink} ${isSticky ? styles.blackText : styles.whiteText}`} href="/pages/blog">
                Blog
              </Link>
              <Link className={`${styles.navLink} ${isSticky ? styles.blackText : styles.whiteText}`} href="/pages/contato">
                Contato
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
