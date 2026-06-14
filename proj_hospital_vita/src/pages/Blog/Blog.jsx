import React from 'react';
import './style.css';

export default function Blog() {
  const posts = [
    { id: 1, title: 'Check-up Anual: Por que ele é indispensável?', category: 'Prevenção', date: '14 Jun, 2026', readTime: '4 min de leitura' },
    { id: 2, title: 'Alimentos que ajudam a proteger o coração', category: 'Nutrição', date: '10 Jun, 2026', readTime: '5 min de leitura' },
    { id: 3, title: 'A importância da rotina de sono para imunidade', category: 'Bem-estar', date: '28 Mai, 2026', readTime: '3 min de leitura' }
  ];

  return (
    <div className="blog-page">
      <section className="page-intro">
        <h1>Blog Viva Saudável</h1>
        <p>Artigos, dicas práticas e informativos escritos pelo nosso corpo clínico.</p>
      </section>

      <section className="blog-grid-container">
        <div className="blog-grid">
          {posts.map(post => (
            <article key={post.id} className="blog-post-card">
              <div className="post-thumbnail-placeholder">
                <span className="category-tag">{post.category}</span>
              </div>
              <div className="post-metadata">
                <span>{post.date}</span>
                <span>•</span>
                <span>{post.readTime}</span>
              </div>
              <h3>{post.title}</h3>
              <p>Cuidar da saúde vai muito além de tratar sintomas. Entenda os pilares fundamentais neste artigo completo.</p>
              <button className="btn-read-more" onClick={() => alert('Em breve o artigo completo estará disponível!')}>Ler Artigo na Integra</button>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}