import { useCallback, useState } from "react";
import { HangmanDrawing } from "../components/AnimacaoAstronauta";
import { HangmanWord } from "../components/PalavrasGraviton";
import { Keyboard } from "../components/Teclado";
import Painel from "../components/PainelFinal";
import style from "../styles/PainelFinal.module.css"

//omponente React chamado Jogo, escrito em TypeScript. usado para criar um jogo de adivinhação de palavras.

interface JogoProps {
  palavraParaAdivinhar: string;
}

export function Jogo({ palavraParaAdivinhar }: JogoProps) {

  const letrasDaPalavra = new Set(palavraParaAdivinhar.split(""));
  const [letrasAdivinhadas, setletrasAdivinhadas] = useState<string[]>([]);
  const letrasIncorretas = letrasAdivinhadas.filter(
    (letra) => !palavraParaAdivinhar.includes(letra)
  );

  const letrasAdivinhadasSet = new Set(letrasAdivinhadas);

  const foiPerdedor = letrasIncorretas.length >= 6;
  const foiVencedor = [...letrasDaPalavra].every((letra) => letrasAdivinhadasSet.has(letra));
  const addPalpiteDeLetras = useCallback(
    (letra: string) => {
      if (letrasAdivinhadas.includes(letra) || foiPerdedor || foiVencedor) return;

      setletrasAdivinhadas((currentletras) => [...currentletras, letra]);
    },
    [letrasAdivinhadas, foiVencedor, foiPerdedor]
  );

  return (
  <div>
    <div
      style={{
        maxWidth: "800px",
        display: "flex",
        flexDirection: "column",
        gap: "2rem",
        margin: "0 auto",
        alignItems: "center",
      }}
    >
      <div className={style.msgFinal}>
      {foiVencedor && "Você Ganhou! Atualize para jogar de novo"}
      {foiPerdedor && "Você perdeu! Atualize para jogar de novo"}
      
      </div>
      <HangmanDrawing qtdPalpites={letrasIncorretas.length} />
      <HangmanWord
        revelar={foiPerdedor}
        letrasAdivinhadas={letrasAdivinhadas}
        palavraParaAdivinhar={palavraParaAdivinhar}
      />
      <div style={{ alignSelf: "stretch" }}>
        <Keyboard
          disabled={ foiVencedor || foiPerdedor}
          letrasAtivadas={letrasAdivinhadas.filter((letra) =>
            palavraParaAdivinhar.includes(letra)
          )}
          letrasInativas={letrasIncorretas}
          addPalpiteDeLetras={addPalpiteDeLetras}
        />
      </div>
      {foiVencedor || foiPerdedor ? <Painel /> : null}
    </div>
  </div>
  );
}

export default Jogo;
