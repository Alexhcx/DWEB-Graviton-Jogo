import { useCallback, useState } from "react";
import { Astronauta } from "../components/AnimacaoAstronauta";
import { Palavra } from "../components/PalavrasGraviton";
import { Teclado } from "../components/Teclado";
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
      <div>
        <div className={style.msgFinal}>
          {foiVencedor && "Você Ganhou! Aperte F5 para jogar de novo."}
          {foiPerdedor && "Você perdeu! Aperte F5 para jogar de novo."}
        </div>
      <section className={style.secaoPalavraAstroTeclado}>
        <Astronauta qtdPalpites={letrasIncorretas.length} />
        <Palavra
          revelar={foiPerdedor}
          letrasAdivinhadas={letrasAdivinhadas}
          palavraParaAdivinhar={palavraParaAdivinhar}
        />
      </section>  
        <div>
          <Teclado
            disabled={foiVencedor || foiPerdedor}
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
