import React, { useState } from 'react';
import './style.css';

export default function Schedule() {
  const [appointment, setAppointment] = useState({
    name: '',
    email: '',
    phone: '',
    specialty: '',
    doctor: '',
    date: '',
    time: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulando o envio dos dados para uma API ou WhatsApp
    alert(`📅 Consulta Solicitada com Sucesso!\n\nPaciente: ${appointment.name}\nEspecialidade: ${appointment.specialty}\nData: ${appointment.date} às ${appointment.time}h.\n\nNossa equipe entrará em contato para confirmar.`);
    
    // Limpa o formulário
    setAppointment({ name: '', email: '', phone: '', specialty: '', doctor: '', date: '', time: '' });
  };

  return (
    <div className="schedule-page">
      <section className="schedule-intro">
        <span className="schedule-badge">Agendamento Online</span>
        <h1>Marque sua Consulta ou Exame</h1>
        <p>Preencha os campos abaixo e escolha o melhor momento para o seu atendimento.</p>
      </section>

      <section className="schedule-container">
        <div className="schedule-card-form">
          <form onSubmit={handleSubmit} className="modern-form">
            
            <div className="form-row">
              <div className="form-group">
                <label>Nome Completo</label>
                <input type="text" required value={appointment.name} onChange={e => setAppointment({...appointment, name: e.target.value})} placeholder="Digite seu nome completo" />
              </div>
            </div>

            <div className="form-row dual-column">
              <div className="form-group">
                <label>E-mail</label>
                <input type="email" required value={appointment.email} onChange={e => setAppointment({...appointment, email: e.target.value})} placeholder="seu@email.com" />
              </div>
              <div className="form-group">
                <label>Telefone / WhatsApp</label>
                <input type="tel" required value={appointment.phone} onChange={e => setAppointment({...appointment, phone: e.target.value})} placeholder="(11) 99999-0000" />
              </div>
            </div>

            <div className="form-row dual-column">
              <div className="form-group">
                <label>Especialidade Desejada</label>
                <select required value={appointment.specialty} onChange={e => setAppointment({...appointment, specialty: e.target.value})}>
                  <option value="">Selecione...</option>
                  <option value="Cardiologia">Cardiologia</option>
                  <option value="Pediatria">Pediatria</option>
                  <option value="Ortopedia">Ortopedia</option>
                  <option value="Ginecologia">Ginecologia</option>
                  <option value="Dermatologia">Dermatologia</option>
                  <option value="Clínica Médica">Clínica Médica</option>
                  <option value="Exame Laboratorial">Exame Laboratorial / Imagem</option>
                </select>
              </div>

              <div className="form-group">
                <label>Preferência de Profissional (Opcional)</label>
                <select value={appointment.doctor} onChange={e => setAppointment({...appointment, doctor: e.target.value})}>
                  <option value="">Qualquer profissional disponível</option>
                  <option value="Dr. Henrique Silva">Dr. Henrique Silva (Cardiologia)</option>
                  <option value="Dra. Mariana Costa">Dra. Mariana Costa (Pediatria)</option>
                  <option value="Dr. Carlos Eduardo">Dr. Carlos Eduardo (Ortopedia)</option>
                  <option value="Dra. Beatriz Ramos">Dra. Beatriz Ramos (Ginecologia)</option>
                </select>
              </div>
            </div>

            <div className="form-row dual-column">
              <div className="form-group">
                <label>Data Preferencial</label>
                <input type="date" required value={appointment.date} onChange={e => setAppointment({...appointment, date: e.target.value})} />
              </div>
              <div className="form-group">
                <label>Horário Preferencial</label>
                <select required value={appointment.time} onChange={e => setAppointment({...appointment, time: e.target.value})}>
                  <option value="">Selecione o turno...</option>
                  <option value="Manhã (08:00 às 12:00)">Manhã (08h às 12h)</option>
                  <option value="Tarde (13:00 às 18:00)">Tarde (13h às 18h)</option>
                </select>
              </div>
            </div>

            <button type="submit" className="btn-confirm-schedule">Solicitar Agendamento</button>
          </form>
        </div>

        {/* Card Lateral de Avisos Úteis */}
        <div className="schedule-side-info">
          <h3>Informações Importantes</h3>
          <ul>
            <li>📌 <strong>Confirmação Humana:</strong> Após o envio, nossa secretária entrará em contato via WhatsApp em até 30 minutos para confirmar o horário exato.</li>
            <li>💳 <strong>Convênios:</strong> Aceitamos os principais planos de saúde (Bradesco, SulAmérica, Unimed, Amil). Verifique a cobertura ao telefone.</li>
            <li>🕒 <strong>Antecedência:</strong> Solicitamos chegar com 15 minutos de antecedência no dia da sua consulta para triagem inicial.</li>
          </ul>
        </div>
      </section>
    </div>
  );
}