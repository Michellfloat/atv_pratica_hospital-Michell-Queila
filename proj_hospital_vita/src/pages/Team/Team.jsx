import React from 'react';
import './style.css';

export default function Team() {
  const doctors = [
    { id: 1, name: 'Dr. Henrique Silva', role: 'Cardiologista', crm: 'CRM/SP 123456', avatar: '👨‍⚕️' },
    { id: 2, name: 'Dra. Mariana Costa', role: 'Pediatra', crm: 'CRM/SP 789101', avatar: '👩‍⚕️' },
    { id: 3, name: 'Dr. Carlos Eduardo', role: 'Ortopedista', crm: 'CRM/SP 112131', avatar: '👨‍⚕️' },
    { id: 4, name: 'Dra. Beatriz Ramos', role: 'Ginecologista', crm: 'CRM/SP 141516', avatar: '👩‍⚕️' }
  ];

  return (
    <div className="team-page">
      <section className="page-intro">
        <h1>Nosso Corpo Clínico</h1>
        <p>Especialistas altamente qualificados e comprometidos com a excelência médica.</p>
      </section>

      <section className="team-grid-container">
        <div className="team-grid">
          {doctors.map(doc => (
            <div key={doc.id} className="doctor-card">
              <div className="doctor-avatar-box">{doc.avatar}</div>
              <div className="doctor-info">
                <h3>{doc.name}</h3>
                <span className="doctor-role">{doc.role}</span>
                <small className="doctor-crm">{doc.crm}</small>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}