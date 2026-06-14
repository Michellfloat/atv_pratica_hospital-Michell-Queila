import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import './style.css'; // Criaremos este arquivo na estilização das páginas

export default function Navbar() {
  return (
    <header className="navbar-header">
      <div className="navbar-container">
        {/* Logo/Identidade */}
        <Link to="/" className="navbar-logo">
          <span className="logo-icon">🩺</span>
          <span className="logo-text">Vita<span className="logo-accent">Clínica</span></span>
        </Link>

        {/* Links de Navegação */}
        <nav className="navbar-navigation">
          <NavLink to="/" end className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
            Início
          </NavLink>
          <NavLink to="/about" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
            Quem Somos
          </NavLink>
          <NavLink to="/services" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
            Especialidades
          </NavLink>
          <NavLink to="/team" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
            Corpo Clínico
          </NavLink>
          <NavLink to="/blog" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
            Blog
          </NavLink>
          <NavLink to="/contact" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
            Contato
          </NavLink>
        </nav>

        {/* CTA (Call To Action) - Essencial para conversão em sites médicos */}
        <div className="navbar-cta">
          <Link to="/contact" className="btn-schedule">
            Agendar Consulta
          </Link>
        </div>
      </div>
    </header>
  );
}