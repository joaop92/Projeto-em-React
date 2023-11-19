import React, { useState } from 'react';
import axios from 'axios';
import  "../Rota/Formulario.css";

const Formulario = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [mensagem, setMensagem] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();

    const data = {
      nome,
      email,
      mensagem
    };

    axios.post('/api/contato', data)
      .then(() => {
        alert('Sua mensagem foi enviada com sucesso!');
        setNome('');
        setEmail('');
        setMensagem('');
      })
      .catch((error) => {
        console.error(error);
        alert('Ocorreu um erro ao enviar sua mensagem.');
      });
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Nome"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
      />
      <input
        type="email"
        placeholder="E-mail"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="text"
        placeholder="Mensagem"
        value={mensagem}
        onChange={(e) => setMensagem(e.target.value)}
      />
      <button type="submit">Enviar</button>
    </form>
  );
};
export default Formulario;
