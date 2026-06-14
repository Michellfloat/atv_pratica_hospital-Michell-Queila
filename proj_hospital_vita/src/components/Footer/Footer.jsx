import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-wrapper">
      <div className="footer-container">
        {/* Coluna 1: Sobre Breve */}
        <div className="footer-column brand-info">
          <h3>VitaClínica</h3>
          <p>Cuidados médicos modernos com foco no acolhimento humano, tecnologia em exames e diagnósticos precisos.</p>
        </div>

        {/* Coluna 2: Links Rápidos */}
        <div className="footer-column">
          <h4>Navegação</h4>
          <ul>
            <li><Link to="/about">Nossa História</Link></li>
            <li><Link to="/services">Exames e Especialidades</Link></li>
            <li><Link to="/team">Nossos Especialistas</Link></li>
            <li><Link to="/blog">Dicas de Saúde</Link></li>
          </ul>
        </div>

        {/* Coluna 3: Contatos Úteis */}
        <div className="footer-column">
          <h4>Atendimento</h4>
          <p>📞 (11) 4004-1234</p>
          <p>✉️ contato@vitaclinica.com.br</p>
          <p>📍 Av. Paulista, 1000 - São Paulo, SP</p>
        </div>
      </div>

      {/* Faixa de Direitos Autorais */}
      <div className="footer-bottom">
        <p>&copy; {currentYear} VitaClínica. Todos os direitos reservados. | Desenvolvido com foco em performance.</p>
      </div>
    </footer>
  );
}