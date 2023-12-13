import React, { useEffect } from "react";
import { fetchPalavraServidor } from "../jsonServerActions";

// Componente React chamado PalavraAdivinhar usado para buscar uma palavra do servidor e definir essa palavra como o estado palavraParaAdivinhar do componente pai

interface PalavraAdivinharProps {
  setPalavraParaAdivinhar: React.Dispatch<React.SetStateAction<string>>;
}

const PalavraAdivinhar: React.FC<PalavraAdivinharProps> = ({ setPalavraParaAdivinhar }) => {
  useEffect(() => {
    fetchPalavraServidor()
      .then((word) => {
        if (word) {
          setPalavraParaAdivinhar(word);
        }
      });
  }, [setPalavraParaAdivinhar]);

  return null;
};

export default PalavraAdivinhar;
