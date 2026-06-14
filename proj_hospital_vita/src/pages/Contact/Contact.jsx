import React, { useState } from 'react';
import './style.css';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', msg: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Obrigado, ${form.name}! Mensagem enviada com sucesso. Entraremos em contato.`);
    setForm({ name: '', email: '', phone: '', msg: '' });
  };

  return (
    <div className="contact-page">
      <section className="page-intro">
        <h1>Fale Conosco</h1>
        <p>Tire suas dúvidas ou solicite o pré-agendamento de sua consulta.</p>
      </section>

      <section className="contact-container">
        {/* Lado 1: Form */}
        <div className="contact-form-box">
          <h2>Enviar Mensagem</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Nome Completo</label>
              <input type="text" required value={form.name} onChange={e => setForm({...form, name: e.target.value})} placeholder="Seu nome" />
            </div>
            <div className="form-group">
              <label>E-mail</label>
              <input type="email" required value={form.email} onChange={e => setForm({...form, email: e.target.value})} placeholder="seu@email.com" />
            </div>
            <div className="form-group">
              <label>Telefone / WhatsApp</label>
              <input type="tel" required value={form.phone} onChange={e => setForm({...form, phone: e.target.value})} placeholder="(00) 00000-0000" />
            </div>
            <div className="form-group">
              <label>Como podemos te ajudar?</label>
              <textarea rows="4" value={form.msg} onChange={e => setForm({...form, msg: e.target.value})} placeholder="Descreva sua solicitação..."></textarea>
            </div>
            <button type="submit" className="btn-submit">Enviar Solicitação</button>
          </form>
        </div>

        {/* Lado 2: Informações Institucionais */}
        <div className="contact-info-box">
          <h2>Canais de Atendimento</h2>
          <div className="info-item">
            <span className="info-icon">📍</span>
            <div>
              <strong>Endereço</strong>
              <p>Av. Dedenzeiros, xxxx - 4º Andar<br />Dedenzeiros, Bahia  - BA</p>
            </div>
          </div>
          <div className="info-item">
            <span className="info-icon">📞</span>
            <div>
              <strong>Central Telefônica</strong>
              <p>(11) 4004-1234</p>
            </div>
          </div>
          <div className="info-item">
            <span className="info-icon">⏰</span>
            <div>
              <strong>Horário de Funcionamento</strong>
              <p>Segunda a Sexta: 07h às 19h<br />Sábados: 07h às 13h</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}