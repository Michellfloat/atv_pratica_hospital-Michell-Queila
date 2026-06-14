import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

export default function Services() {
  const specialties = [
    { id: 1, name: 'Cardiologia', desc: 'Prevenção, diagnóstico e tratamento de doenças que acometem o coração e o sistema circulatório.', icon: '❤️' },
    { id: 2, name: 'Pediatria', desc: 'Assistência médica integralizada a crianças e adolescentes, do nascimento à juventude.', icon: '🧸' },
    { id: 3, name: 'Ortopedia', desc: 'Cuidados especializados em lesões, deformidades de ossos, músculos, articulações e ligamentos.', icon: '🦴' },
    { id: 4, name: 'Ginecologia', desc: 'Acompanhamento completo da saúde da mulher em todas as fases da vida, pré-natal e exames preventivos.', icon: '🌸' },
    { id: 5, name: 'Dermatologia', desc: 'Diagnóstico e tratamento de doenças da pele, cabelos e unhas, além de procedimentos clínicos.', icon: '☀️' },
    { id: 6, name: 'Clínica Médica', desc: 'Atendimento e avaliação global do paciente, check-ups anuais e direcionamento especializado.', icon: '📋' }
  ];

  return (
    <div className="services-page">
      <section className="page-intro">
        <h1>Nossas Especialidades</h1>
        <p>Atendimento médico multidisciplinar e exames laboratoriais no mesmo local.</p>
      </section>

      <section className="services-grid-container">
        <div className="services-grid">
          {specialties.map(spec => (
            <div key={spec.id} className="service-card">
              <div className="service-icon-box">{spec.icon}</div>
              <h3>{spec.name}</h3>
              <p>{spec.desc}</p>
              <Link to="/schedule" className="service-link">Agendar Consulta &rarr;</Link>
            </div>
          ))}
        </div>
      </section>

      {/* Bloco de Exames Otimizado */}
      <section className="exams-banner">
        <div className="exams-content">
          <h2>🔬 Centro de Diagnóstico por Imagem e Laboratório</h2>
          <p>Realize seus exames de sangue, ultrassonografia, eletrocardiograma e raio-x com agilidade e entrega de laudos online.</p>
          <Link to="/contact" className="btn-primary-cta green-variation">Ver Disponibilidade de Horários</Link>
        </div>
      </section>
    </div>
  );
}