import React from "react";
import bookSolid from "./book-solid.svg";
import heartPulseSolid from "./heart-pulse-solid.svg";
import spaceAwesomeBrandsSolid1 from "./space-awesome-brands-solid.svg";
import suitcaseSolid from "./suitcase-solid.svg";
import { Header } from "../../components/Header/Header";

import "./style.css";

export const Segmento = () => {
 
  const segmentos = [
    
    {
      icon: bookSolid,
      title: "Aprendizado",
      faixa: "5 a 21 anos",
      description:
        "Projeto de incentivo ao raciocínio lógico de crianças para desenvolver seu pensamento crítico, empreendedorismo, matemática e computação.",
    },
    {
      icon: spaceAwesomeBrandsSolid1,
      title: "Primeiro Emprego",
      faixa: "16 a 20 anos",
      description:
        "Jovens em busca do primeiro emprego, para fornecer competências e habilidades, desenvolvimento pessoal e conhecimentos necessários para ingressar no mercado de trabalho.",
    },
    {
      icon: suitcaseSolid,
      title: "Recolocação",
      faixa: "21 a 60 anos",
      description:
        "Projeto de apoio ao retorno ao mercado de trabalho com foco em atualização, capacitação e desenvolvimento profissional contínuo.",
    },
    {
      icon: heartPulseSolid,
      title: "Bem-estar",
      faixa: "+50 anos",
      description:
        "Promovendo assistência para desenvolvimento social, por meio de atividades de conversação, terapias, doação de alimentos e palestras de reeducação da mente.",
    },
  ];

  return (
    <section className="sobre-section">
        <Header />
     <div className="rectangle-sticky"/>
      <h2 className="sobre-titulo">Conheça nossos segmentos</h2>

      <div className="sobre-cards">
        {segmentos.map(({ icon, title, faixa, description }, index) => (
          <div key={index} className="sobre-card">
            <img src={icon} alt={title} className="sobre-icon" />
            <h3>{title}</h3>
            <p>
              {faixa} <br />
              {description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
