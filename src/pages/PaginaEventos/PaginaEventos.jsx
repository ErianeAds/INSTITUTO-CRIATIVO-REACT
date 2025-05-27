import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ResumoVendasAdmin from './ResumoVendasAdmin.jsx';
import ResumoVendasMensal from './ResumoVendasMensal.jsx';
import documento from './img/documento.gif';
import grafico from './img/grafico-de-linha.gif';
import homeIcon from './img/globe.png';
import aboutIcon from './img/network.png';
import segmentIcon from './img/contract.png';
import usersIcon from './img/command.png';
import socialImpactIcon from './img/education.png';
import brandsIcon from './img/contract.png';
import dashboardIcon from './img/budget.png';

import "./PaginaEventos.css";


export const PaginaEventos = () => {
  const [resumoSelecionado, setResumoSelecionado] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  if (resumoSelecionado === 'geral') {
    return <ResumoVendasAdmin onVoltar={() => setResumoSelecionado(null)} />;
  }

  if (resumoSelecionado === 'mensal') {
    return <ResumoVendasMensal onVoltar={() => setResumoSelecionado(null)} />;
  }

  return (
    <div className={`pagina-eventos ${menuOpen ? 'menu-aberto' : ''}`}>
      <header className="topo">
        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle sidebar"
        >
          ☰
        </button>
        <h2 className="titulo-topo">Gerenciamento de Vendas</h2>
      </header>

      <aside className={`sidebar ${menuOpen ? 'open' : 'collapsed'}`}>
        <Link to="/homepage" onClick={() => setMenuOpen(false)}>
          <img src={homeIcon} alt="Home" className="icon-sidebar" />
          {menuOpen && 'Home'}
        </Link>
        <Link to="/sobre" onClick={() => setMenuOpen(false)}>
          <img src={aboutIcon} alt="Sobre" className="icon-sidebar" />
          {menuOpen && 'Sobre'}
        </Link>
        <Link to="/segmento" onClick={() => setMenuOpen(false)}>
          <img src={segmentIcon} alt="Segmentos" className="icon-sidebar" />
          {menuOpen && 'Segmentos'}
        </Link>
        <Link to="/colaboradores" onClick={() => setMenuOpen(false)}>
          <img src={usersIcon} alt="Colaboradores" className="icon-sidebar" />
          {menuOpen && 'Colaboradores'}
        </Link>
        <Link to="/impacto-social" onClick={() => setMenuOpen(false)}>
          <img src={socialImpactIcon} alt="Impacto Social" className="icon-sidebar" />
          {menuOpen && 'Impacto Social'}
        </Link>
        <Link to="/marcas" onClick={() => setMenuOpen(false)}>
          <img src={brandsIcon} alt="Marcas" className="icon-sidebar" />
          {menuOpen && 'Marcas'}
        </Link>
        <Link to="/dashboard" onClick={() => setMenuOpen(false)}>
          <img src={dashboardIcon} alt="Dashboard" className="icon-sidebar" />
          {menuOpen && 'Dashboard'}
        </Link>
      </aside>

      <main className="eventos-container">
        <div className="dashboard-cards">
          <div className="card-admin" onClick={() => setResumoSelecionado('geral')}>
            <img src={documento} className="icon-admin" alt="ícone geral" />
            <h3>Histórico Geral</h3>
            <p>Visualize as vendas totais por evento dos útimos 12 meses.</p>
          </div>

          <div className="card-admin" onClick={() => setResumoSelecionado('mensal')}>
            <img src={grafico} className="icon-admin" alt="ícone mensal" />
            <h3>Relatório Mensal</h3>
            <p>Visualize as vendas agrupadas por mês de cada segmento emitidas nos útimos 12 meses.</p>
          </div>
        </div>
        <p className="instrucao">Escolha uma das opções para continuar.</p>
      </main>
    </div>
  );
};