import React, { useEffect } from "react";
import { fetchPalavraServidor } from "../jsonServerActions";

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
