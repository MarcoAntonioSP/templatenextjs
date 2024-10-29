"use client";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './corousel.module.css';
import bootstrap from 'bootstrap/dist/js/bootstrap.bundle.min.js';

export default function CarouselHead() {
    const carouselRef = useRef(null);

    useEffect(() => {
        if (carouselRef.current) {
            const carousel = new bootstrap.Carousel(carouselRef.current, {
                interval: 6000, // Tempo em milissegundos para a troca automática
                pause: false,   // Não pausar ao passar o mouse
            });

            return () => {
                carousel.dispose(); // Limpa o carrossel ao desmontar
            };
        }
    }, []);

    return (
        <div className="container-fluid p-0">
            <div
                id="carouselExampleCaptions"
                className="carousel slide"
                data-bs-ride="carousel"
                ref={carouselRef}
            >
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner" style={{ height: '700px' }}>
                    <div className="carousel-item active" style={{ height: '700px', position: 'relative' }}>
                        <Image src="/banner1.jpg" className="d-block w-100" alt="First slide" fill style={{ objectFit: 'cover' }} />
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
                                <div className='mt-5'>
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
                        <Image src="/banner2.jpg" className="d-block w-100" alt="Second slide" fill style={{ objectFit: 'cover' }} />
                        <div className="carousel-caption d-md-block">
                            <div className={`container mt-5 text-center p-4 border rounded ${styles.aewaew}`} style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)' }}>
                                <p className="text-muted">Dê um passo à frente</p>
                                <h1 style={{ color: '#FFD700' }}>Presença Online Sólida</h1>
                                <h3 style={{ color: '#FFFFFF' }}>
                                    <i>Sites otimizados para impulsionar suas vendas e expandir sua marca.</i>
                                </h3>
                                <div className="text-light">
                                    <i className="bi bi-check-circle-fill text-success"></i> <span>Design atrativo</span><br />
                                    <i className="bi bi-check-circle-fill text-success"></i> <span>Funcionalidades avançadas</span><br />
                                    <i className="bi bi-check-circle-fill text-success"></i> <span>Estratégias de marketing integradas</span><br />
                                </div>
                                <div className='mt-5'>
                                    <Link href="/contato">
                                        <button className="btn btn-warning mx-2">Fale Conosco</button>
                                    </Link>
                                    <Link href="/servicos">
                                        <button className="btn btn-secondary mx-2">Explore Nossos Serviços</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item" style={{ height: '700px', position: 'relative' }}>
                        <Image src="/banner3.jpg" className="d-block w-100" alt="Third slide" fill style={{ objectFit: 'cover' }} />
                        <div className="carousel-caption d-md-block">
                            <div className={`container mt-5 text-center p-4 border rounded ${styles.aewaew}`} style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)' }}>
                                <p className="text-muted">Alavanque seu negócio hoje</p>
                                <h1 style={{ color: '#FFD700' }}>Vendas pela Web</h1>
                                <h3 style={{ color: '#FFFFFF' }}>
                                    <i>Soluções digitais que atraem visitantes e os convertem em clientes fiéis.</i>
                                </h3>
                                <div className="text-light">
                                    <i className="bi bi-check-circle-fill text-success"></i> <span>Aumento de conversões garantido</span><br />
                                    <i className="bi bi-check-circle-fill text-success"></i> <span>Ferramentas de análise de performance</span><br />
                                    <i className="bi bi-check-circle-fill text-success"></i> <span>Suporte técnico 24/7</span><br />
                                </div>
                                <div className='mt-5'>
                                    <Link href="/contato">
                                        <button className="btn btn-warning mx-2">Fale Conosco</button>
                                    </Link>
                                    <Link href="/servicos">
                                        <button className="btn btn-secondary mx-2">Explore Nossos Serviços</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
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
