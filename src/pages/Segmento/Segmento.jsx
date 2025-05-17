import React from "react";
import bookSolid from "./book-solid.svg";
import heartPulseSolid from "./heart-pulse-solid.svg";
import spaceAwesomeBrandsSolid1 from "./space-awesome-brands-solid.svg";
import suitcaseSolid from "./suitcase-solid.svg";
import { Header } from "../../components/Header/Header";
import { Footer } from "../../components/footer/footer";
import img1 from "./modelo-masculino-elegante-hipster-em-oculos-apontando-os-dedos-para-baixo-sorrindo-satisfeito-com-camera-recomendando-p.jpg";
import "./style.css";

export const Segmento = () => {
  const segmentos = [
    {
      icon: bookSolid,
      title: "Aprendizado",
      faixa: "5 a 21 anos",
      description:
        "Incentivo ao raciocínio lógico e pensamento crítico para crianças e jovens, com foco em matemática, computação e empreendedorismo.",
    },
    {
      icon: spaceAwesomeBrandsSolid1,
      title: "Primeiro Emprego",
      faixa: "16 a 20 anos",
      description:
        "Capacitação de jovens para o mercado de trabalho com desenvolvimento de habilidades, competências e postura profissional.",
    },
    {
      icon: suitcaseSolid,
      title: "Recolocação",
      faixa: "21 a 60 anos",
      description:
        "Apoio à reinserção profissional por meio de atualização, capacitação e desenvolvimento contínuo.",
    },
    {
      icon: heartPulseSolid,
      title: "Bem-estar",
      faixa: "+50 anos",
      description:
        "Promoção da saúde física e mental com atividades sociais, terapias, palestras e ações solidárias.",
    },
  ];

  return (
    <main className="all-section">
      <Header />

      <section className="segmento-container">
        <div className="segmento-banner">
          <img src={img1} alt="Jovem apontando" />
          <h2>Conheça nossos segmentos</h2>
        </div>

        <div className="segmento-grid">
          {segmentos.map(({ icon, title, faixa, description }, index) => (
            <div key={index} className="segmento-card">
              <img src={icon} alt={title} className="segmento-icon" />
              <div className="segmento-content">
                <h3>{title}</h3>
                <span className="segmento-faixa">{faixa}</span>
                <p>{description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
};
