import { useState, useEffect } from 'react';
import style from '../styles/PainelFinal.module.css'

interface jogador {
  nome: string;
  sobrenome: string;
  genero: string;
}

function PainelDoJogo() {
  const [ jogadores, setjogadores] = useState<jogador[]>([]);
  const [Palavras, setPalavras] = useState<string[]>([]);

  useEffect(() => {
    const fetchjogadores = async () => {
      try {
        const response = await fetch('http://localhost:8080/jogadores');
        if (response.ok) {
          const data: jogador[] = await response.json();
          const ultimosjogadores = data.slice(-3);
          setjogadores(ultimosjogadores);
        }
      } catch (error) {
        console.error('Erro ao buscar jogadores:', error);
      }
    };

    const fetchPalavras = async () => {
        try {
          const response = await fetch('http://localhost:8080/palavraSorteada');
          if (response.ok) {
            const data = await response.json();
            const palavras = data.map((item: { palavra_sorteada: any; }) => item.palavra_sorteada);
            const ultimosPalavras = palavras.slice(-3);
            setPalavras(ultimosPalavras);
          }
        } catch (error) {
          console.error('Erro ao buscar palavras sorteadas:', error);
        }
      };
      
    fetchjogadores();
    fetchPalavras();
  }, []);

  return (
    <div className={style.painelFinal}>
      <h2>Últimos 3 Jogadores:</h2>
      <ul>
        {jogadores.map((jogador, index) => (
          <li key={index}>
            Nome: {jogador.nome} <br></br>
            Sobrenome: {jogador.sobrenome} <br></br>
            Gênero: {jogador.genero}
          </li>
        ))}
      </ul>

      <h2>Últimas 3 Palavras Sorteadas:</h2>
      <ul>
        {Palavras.map((word, index) => (
          <li key={index}>{word}</li>
        ))}
      </ul>
    </div>
  );
}

export default PainelDoJogo;
