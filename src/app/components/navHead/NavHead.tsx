"use client"; 
import { useEffect, useState } from 'react'; 
import Link from 'next/link'; 
import Image from 'next/image'; // Importa o componente Image
import styles from './navhead.module.css'; 

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
                        <Image 
                            src="/logo.png" 
                            alt="Logo" 
                            style={{ marginRight: "50px", transition: 'width 0.3s ease' }} 
                            width={isSticky ? 40 : 80} // Define a largura de acordo com o estado sticky
                            height={isSticky ? 40 : 80} // A altura pode ser ajustada para manter a proporção
                        /> 
                    </Link> 
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Alternar navegação"> 
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
