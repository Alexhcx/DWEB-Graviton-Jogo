import React, { useState } from 'react';
import styles from '../styles/Formulario.module.css'
import { adicionarJogador } from '../jsonServerActions';

//Componente React chamado Formulario escrito em TypeScript usado para criar um formulário que permite ao usuário inserir informações sobre um jogador.

const Formulario: React.FC = () => {
  const [nome, setNome] = useState('');
  const [sobrenome, setSobrenome] = useState('');
  const [genero, setGenero] = useState('');

  const handleNomeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNome(event.target.value);
  };

  const handleSobrenomeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSobrenome(event.target.value);
  };

  const handleGeneroChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setGenero(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    const jogador = {
      nome,
      sobrenome,
      genero,
    };

    adicionarJogador(jogador);
  };

  return (
    <div className={styles.formulario}>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="nome">Nome:</label>
          <input
            type="text"
            id="nome"
            value={nome}
            onChange={handleNomeChange}
          />
        </div>
        <div>
          <label htmlFor="sobrenome">Sobrenome:</label>
          <input
            type="text"
            id="sobrenome"
            value={sobrenome}
            onChange={handleSobrenomeChange}
          />
        </div>
        <div>
          <label htmlFor="genero">Gênero:</label>
          <select id="genero" value={genero} onChange={handleGeneroChange}>
            <option value="">Selecione o gênero</option>
            <option value="masculino">Masculino</option>
            <option value="feminino">Feminino</option>
            <option value="outros">Outros</option>
          </select>
        </div>
        <button className={styles.botaoJogador} type="submit">Adicionar Jogador</button>
      </form>
      <div>
        <br />
        <br />
        <h3>Informações do Jogador:</h3>
        <p>Nome: {nome}</p>
        <p>Sobrenome: {sobrenome}</p>
        <p>Gênero: {genero}</p>
      </div>
    </div>
  );
};

export default Formulario;
