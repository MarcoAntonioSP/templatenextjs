"use client";
import React, { useState } from "react";
import styles from "./contato.module.css";
import Navpages from "@/app/components/navpages/Navpages";
import Footer from "@/app/components/footer/Footer";

export default function Contato() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    mensagem: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você pode adicionar a lógica para enviar os dados do formulário.
    console.log(formData);
  };

  return (
    <div className={styles.container}>
      <Navpages />
      <div className={styles.header}>
        <h1 className={styles.title}>Entre em Contato</h1>
        <p className={styles.subtitle}>
          Estamos aqui para ajudar. Preencha o formulário abaixo ou nos envie um
          e-mail.
        </p>
      </div>

      <div className={styles.content}>
        <div className={styles.formSection}>
          <h2 className={styles.formTitle}>Envie-nos uma Mensagem</h2>
          <form onSubmit={handleSubmit} className={styles.contactForm}>
            <input
              type="text"
              name="nome"
              placeholder="Seu Nome"
              value={formData.nome}
              onChange={handleChange}
              className={styles.input}
            />
            <input
              type="email"
              name="email"
              placeholder="Seu E-mail"
              value={formData.email}
              onChange={handleChange}
              className={styles.input}
            />
            <textarea
              name="mensagem"
              placeholder="Sua Mensagem"
              value={formData.mensagem}
              onChange={handleChange}
              className={styles.textarea}
            />
            <button type="submit" className={styles.submitButton}>
              Enviar Mensagem
            </button>
          </form>
        </div>

        <div className={styles.infoSection}>
          <h2 className={styles.infoTitle}>Outras Formas de Contato</h2>
          <div className={styles.contactInfo}>
            <div className={styles.contactItem}>
              <h3 className={styles.contactSubtitle}>Endereço</h3>
              <p>Rua Exemplo, 123, Cidade - Estado</p>
            </div>
            <div className={styles.contactItem}>
              <h3 className={styles.contactSubtitle}>Telefone</h3>
              <p>(11) 9 1234-5678</p>
            </div>
            <div className={styles.contactItem}>
              <h3 className={styles.contactSubtitle}>E-mail</h3>
              <p>contato@seusite.com</p>
            </div>
          </div>

          <div className={styles.mapSection}>
            <h3 className={styles.mapTitle}>Localização</h3>
            <div className={styles.mapContainer}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.7852418180746!2d-46.36599392731275!3d-23.540225413971733!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce7acd3fb00323%3A0xe6788b3ab3414cac!2sR.%20Jorge%20Tibiri%C3%A7%C3%A1%2C%2023%20-%20S%C3%ADtio%20Paredao%2C%20Ferraz%20de%20Vasconcelos%20-%20SP%2C%2008501-230!5e0!3m2!1spt-BR!2sbr!4v1730961139561!5m2!1spt-BR!2sbr"
                style={{ border: "0" }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
