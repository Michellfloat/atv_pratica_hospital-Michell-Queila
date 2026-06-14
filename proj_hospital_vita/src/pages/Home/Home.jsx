import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

export default function Home() {
  return (
    <div className="home-page">
      {/* 1. SEÇÃO HERO: Impacto Inicial e Conversão */}
      <section className="hero-section">
        <div className="hero-content">
          <span className="badge-excellence">✨ Excelência em Saúde</span>
          <h1>Cuidado médico de alta performance com acolhimento humano</h1>
          <p>
            A VitaClínica une tecnologia diagnóstica de ponta a um corpo clínico altamente qualificado para oferecer consultas e exames com máxima precisão.
          </p>
          <div className="hero-actions">
            <Link to="/schedule" className="btn-primary-cta">
              Agendar Consulta
            </Link>
            <Link to="/services" className="btn-secondary-cta">
              Conhecer Especialidades
            </Link>
          </div>
        </div>
        <div className="hero-visual">
          {/* Mockup visual moderno simulando o ambiente limpo da clínica */}
          <div className="visual-card bg-pattern">
            <div className="floating-badge">
              <span className="icon">🛡️</span>
              <div>
                <strong>Ambiente Seguro</strong>
                <small>Protocolo Hospitalar</small>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. SEÇÃO DE AUTORIDADE: Métricas e Diferenciais */}
      <section className="metrics-section">
        <div className="metrics-grid">
          <div className="metric-item">
            <h2>+15k</h2>
            <p>Pacientes Atendidos</p>
          </div>
          <div className="metric-item">
            <h2>45+</h2>
            <p>Médicos Especialistas</p>
          </div>
          <div className="metric-item">
            <h2>98%</h2>
            <p>Índice de Satisfação</p>
          </div>
          <div className="metric-item">
            <h2>20min</h2>
            <p>Tempo Médio de Espera</p>
          </div>
        </div>
      </section>

      {/* 3. SEÇÃO DE PREVIEW: Pilares de Atendimento */}
      <section className="pillars-section">
        <div className="section-header">
          <h2>Por que escolher a VitaClínica?</h2>
          <p>Focamos na medicina preventiva e no diagnóstico ágil para sua total tranquilidade.</p>
        </div>

        <div className="pillars-grid">
          <div className="pillar-card">
            <div className="pillar-icon text-blue">🔬</div>
            <h3>Exames Avançados</h3>
            <p>Laboratório próprio e equipamentos de última geração para resultados rápidos e minuciosos.</p>
          </div>

          <div className="pillar-card">
            <div className="pillar-icon text-green">🩺</div>
            <h3>Consultas Sem Pressa</h3>
            <p>Médicos dedicados a entender o seu histórico de forma holística e humanizada.</p>
          </div>

          <div className="pillar-card">
            <div className="pillar-icon text-blue">📱</div>
            <h3>Prontuário Digital</h3>
            <p>Acesso fácil aos seus resultados de exames e receitas direto pelo celular ou portal.</p>
          </div>
        </div>
      </section>

      {/* 4. SEÇÃO FINAL: CTA de Fechamento */}
      <section className="cta-closure-section">
        <div className="cta-closure-content">
          <h2>Pronto para investir na sua saúde e bem-estar?</h2>
          <p>Escolha o melhor dia e horário. Nossa equipe está pronta para te atender de forma personalizada.</p>
          <Link to="/contact" className="btn-primary-cta green-variation">
            Marcar Minha Consulta Agora
          </Link>
        </div>
      </section>
    </div>
  );
}