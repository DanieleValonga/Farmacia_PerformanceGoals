import React from 'react';
import './Contato.css';

const Contato: React.FC = () => {
  return (
    <div className="contact-container">
      <h1 className="contact-title">Contato</h1>

      <div className="contact-info">
        <h2 className="info-title">Números de Telefone</h2>
        <p>Telefone 1: (11) 1234-5678</p>
        <p>Telefone 2: (11) 9876-5432</p>
      </div>


      <div className="contact-form">
        <h2 className="form-title">Entre em Contato</h2>
        <form>
          <label htmlFor="nome">Nome:</label>
          <input id="nome" type="text" placeholder="Seu Nome" required />

          <label htmlFor="email">Email:</label>
          <input id="email" type="email" placeholder="Seu Email" required />

          <label htmlFor="assunto">Assunto:</label>
          <input id="assunto" type="text" placeholder="Assunto" required />

          <label htmlFor="mensagem">Mensagem:</label>
          <textarea id="mensagem" placeholder="Sua Mensagem" rows={4} required></textarea>

          <button type="submit">Enviar</button>
        </form>
      </div>
    </div>
  );
};

export default Contato;