"use client";

import { useEffect, useState } from 'react';
import Link from 'next/link';
import styles from './navhead.module.css'; // Verifique se o caminho está correto

export default function NavHead() {
  const [isSticky, setIsSticky] = useState(false);

  const handleScroll = () => {
    setIsSticky(window.scrollY > 0);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`${styles.headernav} ${isSticky ? styles.sticky : ''}`}>
      <nav className={`navbar navbar-expand-lg ${isSticky ? styles.transparentBg : 'bg-body-tertiary'}`}>
        <div className="container-fluid d-flex justify-content-between align-items-center">
          <Link className="navbar-brand" href="/">
            <img 
              src="/logo.png" 
              alt="Logo" 
              style={{ marginRight: "50px", width: isSticky ? "40px" : "80px", transition: 'width 0.3s ease' }} 
            />
          </Link>
          <button 
            className="navbar-toggler" 
            type="button" 
            data-bs-toggle="collapse" 
            data-bs-target="#navbarNavAltMarkup" 
            aria-controls="navbarNavAltMarkup" 
            aria-expanded="false" 
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
        <div className={`collapse navbar-collapse ${styles.menu}`} id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link className="nav-link" href="#">Quem Somos</Link>
            <Link className="nav-link" href="#">Serviços</Link>
            <Link className="nav-link" href="#">Contato</Link>
            <Link className="nav-link" href="#">Blog</Link>
          </div>
        </div>
      </nav>
    </div>
  );
}
