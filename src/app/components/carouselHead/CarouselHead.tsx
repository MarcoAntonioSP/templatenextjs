"use client";
import { useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './corousel.module.css';

export default function CarouselHead() {
    const carouselRef = useRef(null);

    useEffect(() => {
        let bootstrap;

        // Carrega o JavaScript do Bootstrap dinamicamente
        import('bootstrap/dist/js/bootstrap.bundle.min.js').then((module) => {
            bootstrap = module.default;
            if (carouselRef.current) {
                const carousel = new bootstrap.Carousel(carouselRef.current, {
                    interval: 6000,
                    pause: false,
                });

                return () => {
                    carousel.dispose();
                };
            }
        });
    }, []);

    return (
        <div className="container-fluid p-0">
            <div
                id="carouselExampleCaptions"
                className="carousel slide"
                data-bs-ride="carousel"
                ref={carouselRef}
            >
                {/* Indicadores */}
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>

                {/* Slides */}
                <div className="carousel-inner" style={{ height: '700px' }}>
                    <div className="carousel-item active" style={{ height: '700px', position: 'relative' }}>
                        <div style={{ position: 'relative', height: '100%', width: '100%' }}>
                            <Image src="/banner1.jpg" className="d-block w-100" alt="First slide" fill style={{ objectFit: 'cover' }} />
                        </div>
                        <div className="carousel-caption d-md-block">
                            <div className={`container mt-5 text-center p-4 border rounded ${styles.aewaew}`} style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)' }}>
                                <p className="text-muted">Transforme seu sonho digital</p>
                                <h1 style={{ color: '#FFD700' }}>Sites que Vendem</h1>
                                <h3 style={{ color: '#FFFFFF' }}>
                                    <i>Projetados para maximizar suas vendas com design responsivo e funcionalidades intuitivas.</i>
                                </h3>
                                <div className="text-light">
                                    <i className="bi bi-check-circle-fill text-success"></i> <span>Experiência personalizada</span><br />
                                    <i className="bi bi-check-circle-fill text-success"></i> <span>Suporte contínuo</span><br />
                                    <i className="bi bi-check-circle-fill text-success"></i> <span>Soluções otimizadas para SEO</span><br />
                                </div>
                                <div className="mt-5">
                                    <Link href="/contato">
                                        <button className="btn btn-warning mx-2">Fale Conosco</button>
                                    </Link>
                                    <Link href="/servicos">
                                        <button className="btn btn-secondary mx-2">Veja Nossos Serviços</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item" style={{ height: '700px', position: 'relative' }}>
                        <div style={{ position: 'relative', height: '100%', width: '100%' }}>
                            <Image src="/banner2.jpg" className="d-block w-100" alt="Second slide" fill style={{ objectFit: 'cover' }} />
                        </div>
                        <div className="carousel-caption d-md-block">
                            <div className={`container mt-5 text-center p-4 border rounded ${styles.aewaew}`} style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)' }}>
                                <p className="text-muted">Inovação e Estratégia</p>
                                <h1 style={{ color: '#FFD700' }}>Sites Sob Medida</h1>
                                <h3 style={{ color: '#FFFFFF' }}>
                                    <i>Desenvolvimento focado em resultados, trazendo uma experiência única ao usuário.</i>
                                </h3>
                                <div className="text-light">
                                    <i className="bi bi-check-circle-fill text-success"></i> <span>Designs Modernos</span><br />
                                    <i className="bi bi-check-circle-fill text-success"></i> <span>Funcionalidade Total</span><br />
                                    <i className="bi bi-check-circle-fill text-success"></i> <span>Conversões Aumentadas</span><br />
                                </div>
                                <div className="mt-5">
                                    <Link href="/contato">
                                        <button className="btn btn-warning mx-2">Fale Conosco</button>
                                    </Link>
                                    <Link href="/servicos">
                                        <button className="btn btn-secondary mx-2">Veja Nossos Serviços</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item" style={{ height: '700px', position: 'relative' }}>
                        <div style={{ position: 'relative', height: '100%', width: '100%' }}>
                            <Image src="/banner3.jpg" className="d-block w-100" alt="Third slide" fill style={{ objectFit: 'cover' }} />
                        </div>
                        <div className="carousel-caption d-md-block">
                            <div className={`container mt-5 text-center p-4 border rounded ${styles.aewaew}`} style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)' }}>
                                <p className="text-muted">Alcance o topo do mercado</p>
                                <h1 style={{ color: '#FFD700' }}>Desenvolvimento Web Completo</h1>
                                <h3 style={{ color: '#FFFFFF' }}>
                                    <i>Conquiste sua presença digital com soluções completas e funcionais.</i>
                                </h3>
                                <div className="text-light">
                                    <i className="bi bi-check-circle-fill text-success"></i> <span>Estratégias Digitais</span><br />
                                    <i className="bi bi-check-circle-fill text-success"></i> <span>Experiência de Usuário</span><br />
                                    <i className="bi bi-check-circle-fill text-success"></i> <span>Resultados Visíveis</span><br />
                                </div>
                                <div className="mt-5">
                                    <Link href="/contato">
                                        <button className="btn btn-warning mx-2">Fale Conosco</button>
                                    </Link>
                                    <Link href="/servicos">
                                        <button className="btn btn-secondary mx-2">Veja Nossos Serviços</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Controles laterais */}
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
}
