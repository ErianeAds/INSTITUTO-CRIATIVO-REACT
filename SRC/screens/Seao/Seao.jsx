import React from "react";
//import { Link } from "react-router-dom";
import { Header } from "../Header/Header";
import { useEffect } from "react";
import exemplo2 from "./IMG/example-2.png";
import exemplo3 from "./IMG/example-3.png";
import exemplo4 from "./IMG/example-4.png";
import exemplo5 from "./IMG/example-5.png";
import exemplo6 from "./IMG/example-6.png";
import exemplo7 from "./IMG/example-7.png";
import exemplo8 from "./IMG/example-8.png";
import exemplo9 from "./IMG/example-9.png";
import exemplo10 from "./IMG/example-10.png";
import exemplo11 from "./IMG/example-11.png";
import exemplo12 from "./IMG/example-12.png";
import exemplo13 from "./IMG/example-13.png";
import exemplo14 from "./IMG/example-14.png";
import exemplo15 from "./IMG/example.png";
//import { Sobre } from "../../components/Sobre/Sobre";

import "./style.css";

export const Seao = () => {
  useEffect(() => {
    const interval = setInterval(() => {
      const carrossel = document.querySelector(".carrossel");
      if (carrossel) {
        carrossel.scrollBy({ left: 230, behavior: "smooth" }); // ajuste a largura conforme necessário
      }
    }, 3000); // tempo em milissegundos

    return () => clearInterval(interval); // limpa ao desmontar
  }, []);
  return (
  
    <div className="seao">
     <Header/>
  
      <div className="hero-image">
      <div className="copy">
        <div className="page-title">
          <div className="text-wrapper-8">Educação criativa e inovadora</div>
          <p className="p">
            O Instituto Criativo é uma ONG que nasceu para transformar a vida das pessoas.
          </p>
        </div>
      </div>

      <div className="button-container">
        <button className="button-2">
          <div className="text-wrapper-9">Eventos</div>
        </button>

        <a
          className="button-3"
          href="https://docs.google.com/forms/d/e/1FAIpQLSeG9lzGfHVSifOnKUA7CdMQSI_L8o0m-WXm2jucjtVtJXuqWw/viewform"
          rel="noopener noreferrer"
          target="_blank"
        >
          <div className="text-wrapper-10">Quero ser criativo</div>
        </a>
      </div>
    </div>

<section className="eventos-carrossel">
    <h2 className="titulo-secao">Fique por dentro</h2>
    <div className="carrossel-container">
      <button className="seta esquerda">&#8249;</button>
      <div className="carrossel">
        <div className="card-evento">
          <img src={exemplo2} alt="Evento 2" />
          <h3 className="nome-evento">Festival XYZ</h3>
          <p className="info-evento">São Paulo • 22 Jun 2025</p>
        </div>

        <div className="card-evento">
          <img src={exemplo3} alt="Evento 3" />
          <h3 className="nome-evento">Show ABC</h3>
          <p className="info-evento">Rio de Janeiro • 10 Jul 2025</p>
        </div>

        <div className="card-evento">
          <img src={exemplo4} alt="Evento 4" />
          <h3 className="nome-evento">Show ABC</h3>
          <p className="info-evento">Rio de Janeiro • 10 Jul 2025</p>
        </div>

        <div className="card-evento">
          <img src={exemplo5} alt="Evento 5" />
          <h3 className="nome-evento">Show ABC</h3>
          <p className="info-evento">Rio de Janeiro • 10 Jul 2025</p>
        </div>

        <div className="card-evento">
          <img src={exemplo6} alt="Evento 6" />
          <h3 className="nome-evento">Show ABC</h3>
          <p className="info-evento">Rio de Janeiro • 10 Jul 2025</p>
        </div>

        <div className="card-evento">
          <img src={exemplo7} alt="Evento 7" />
          <h3 className="nome-evento">Show ABC</h3>
          <p className="info-evento">Rio de Janeiro • 10 Jul 2025</p>
        </div>

        <div className="card-evento">
          <img src={exemplo8} alt="Evento 8" />
          <h3 className="nome-evento">Show ABC</h3>
          <p className="info-evento">Rio de Janeiro • 10 Jul 2025</p>
        </div>

        <div className="card-evento">
          <img src={exemplo9} alt="Evento 9" />
          <h3 className="nome-evento">Show ABC</h3>
          <p className="info-evento">Rio de Janeiro • 10 Jul 2025</p>
        </div>

        <div className="card-evento">
          <img src={exemplo10} alt="Evento 10" />
          <h3 className="nome-evento">Show ABC</h3>
          <p className="info-evento">Rio de Janeiro • 10 Jul 2025</p>
        </div>
        
        <div className="card-evento">
          <img src={exemplo11} alt="Evento 11" />
          <h3 className="nome-evento">Show ABC</h3>
          <p className="info-evento">Rio de Janeiro • 10 Jul 2025</p>
        </div>
        
        <div className="card-evento">
          <img src={exemplo12} alt="Evento 12" />
          <h3 className="nome-evento">Show ABC</h3>
          <p className="info-evento">Rio de Janeiro • 10 Jul 2025</p>
        </div>
        
        <div className="card-evento">
          <img src={exemplo13} alt="Evento 13" />
          <h3 className="nome-evento">Show ABC</h3>
          <p className="info-evento">Rio de Janeiro • 10 Jul 2025</p>
        </div>
        
        <div className="card-evento">
          <img src={exemplo14} alt="Evento 14" />
          <h3 className="nome-evento">Show ABC</h3>
          <p className="info-evento">Rio de Janeiro • 10 Jul 2025</p>
        </div>
        
        <div className="card-evento">
          <img src={exemplo15} alt="Evento 15" />
          <h3 className="nome-evento">Show ABC</h3>
          <p className="info-evento">Rio de Janeiro • 10 Jul 2025</p>
        </div>
        
      </div>
      <button className="seta direita">&#8250;</button>
    </div>
  </section>

  
</div>
    
  );
  
};

