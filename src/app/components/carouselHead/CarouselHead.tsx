'use client';
import styles from "./carousel.module.css";
import { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
export default function CarouselHead() {
    useEffect(() => {
        const loadBootstrap = async () => {
            await import('bootstrap/dist/js/bootstrap.bundle.min.js');
        };

        loadBootstrap();
    }, []);
    return (
        <div
            id="carouselExample"
            className="carousel slide"
            data-bs-ride="carousel"
            style={{ overflow: 'hidden', height: '700' }} // Define a altura e oculta o overflow
        >
            <div className="carousel-inner" style={{ height: '700px' }}>
                <div className="carousel-item active">
                    <img
                        src="banner1.jpg"
                        className="d-block w-100"
                        alt="banner1.jpg"
                        style={{ height: '800px', objectFit: 'cover' }} // Ajusta a imagem para cobrir o espaço
                    />
                </div>
                <div className="carousel-item">
                    <img
                        src="banner2.jpg"
                        className="d-block w-100"
                        alt="Imagem 2"
                        style={{ height: '800px', objectFit: 'cover' }}
                    />
                </div>
                <div className="carousel-item">
                    <img
                        src="banner3.jpg"
                        className="d-block w-100"
                        alt="Imagem 3"
                        style={{ height: '800px', objectFit: 'cover' }}
                    />
                </div>
            </div>
            <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExample"
                data-bs-slide="prev"
            >
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExample"
                data-bs-slide="next"
            >
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
};