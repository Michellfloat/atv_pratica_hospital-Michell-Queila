import React from 'react';
import './style.css';

export default function About() {
  return (
    <div className="about-page">
      {/* Header da Página */}
      <section className="page-intro">
        <h1>Quem Somos</h1>
        <p>Conheça a nossa história, nossa estrutura e o compromisso com a sua saúde.</p>
      </section>

      {/* História e Propósito */}
      <section className="history-section">
        <div className="history-text">
          <h2>Nossa Jornada pela Medicina Humanizada</h2>
          <p>
            Fundada em 2018, a VitaClínica nasceu com o objetivo claro de resgatar a proximidade entre médico e paciente, unindo esse acolhimento às inovações tecnológicas mais modernas do setor de saúde.
          </p>
          <p>
            Acreditamos que um diagnóstico certeiro começa com uma escuta atenta. Por isso, nossa infraestrutura foi projetada para oferecer conforto e agilidade, eliminando a burocracia dos atendimentos tradicionais.
          </p>
        </div>
        <div className="history-image-placeholder">
          <div className="info-overlay">
            <span>Hospitalidade & Rigor Técnico</span>
          </div>
        </div>
      </section>

      {/* Missão, Visão e Valores */}
      <section className="mvv-section">
        <div className="mvv-card">
          <div className="mvv-icon">🎯</div>
          <h3>Missão</h3>
          <p>Oferecer serviços médicos e diagnósticos de excelência, priorizando a segurança, o respeito e a dignidade humana.</p>
        </div>
        <div className="mvv-card">
          <div className="mvv-icon">👁️</div>
          <h3>Visão</h3>
          <p>Ser reconhecida como a clínica de referência em inovação assistencial e agilidade diagnóstica até 2028.</p>
        </div>
        <div className="mvv-card">
          <div className="mvv-icon">🤝</div>
          <h3>Valores</h3>
          <p>Ética inegociável, transparência nos processos, empatia no cuidado e melhoria contínua.</p>
        </div>
      </section>
    </div>
  );
}