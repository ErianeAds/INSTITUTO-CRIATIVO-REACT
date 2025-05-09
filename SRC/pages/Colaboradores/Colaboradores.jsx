
// Colaboradores.jsx
import React from "react";
import { ColaboradorCard } from "./ColaboradorCard";
import carlos_albertini from "./img/carlos_albertini.jpg";
import "./style.css";

const colaboradores = [
  { nome: "Deyse Santana", cargo: "Analista Financeira", foto: <img src={carlos_albertini} alt="Evento 6" /> },
  { nome: "João Querlon", cargo: "Conselheiro Fiscal", foto: "./joao_querlon.jpg" },
  { nome: "Felipe Almeida", cargo: "Designer", foto: "https://placehold.co/150x150" },
  { nome: "Joaquim Roberto", cargo: "Conselheiro", foto: "https://placehold.co/150x150" },
  { nome: "Carlos E. Albertini", cargo: "Psicoterapeuta", foto: "https://placehold.co/150x150" },
  { nome: "Marcos Brito", cargo: "Gestor de conteúdo", foto: "https://placehold.co/150x150" },
];

export const Colaboradores = () => (
  
  <section className="colaboradores-container">
   
  <h2>Parceiros e voluntários</h2>
  <p className="subtitulo">Quem nos ajuda nessa incrível jornada</p>

  <div className="destaques">
    <div className="card-destaque">
      <img src="lucy.jpg" alt="Lucy Mari" />
      <h3>Lucy Mari</h3>
      <h4>Presidente e fundadora</h4>
      <p>
        Empresária, educadora, psicoterapeuta, formada em matemática, mestre em
        ciência da computação, MBA em educação e doutora em engenharia de computação
        pela USP.
      </p>
    </div>

    <div className="card-destaque">
      <img src="rodrigo.jpg" alt="Rodrigo Assirati" />
      <h3>Rodrigo Assirati</h3>
      <h4>Vice-presidente</h4>
      <p>
        Educador e empreendedor, especialista em educação pela Microsoft e consultor
        de tecnologia em várias empresas.
      </p>
    </div>
  </div>

    <h2>Parceiros e voluntários</h2>
    <p>Quem nos ajuda nessa incrível jornada</p>
    <div className="colaboradores-grid">
      {colaboradores.map((colab, index) => (
        <ColaboradorCard key={index} {...colab} />
      ))}
    </div>
  </section>
);