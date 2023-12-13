import { useState } from 'react';
import BackgroundVideo from './components/BackgroundVideo';
import PaginaInicial from './pages/Home';
import Jogo from './pages/Jogo';
import PalavraAdivinhar from './components/palavraParaAdivinhar';
import Formulario from './pages/FormularioCadastro';
import { adicionarPalavraSorteada } from "./jsonServerActions";

import HomeStyle from './styles/Home.module.css'
import FormularioStyle from './styles/Formulario.module.css'
import './styles/global.css';

function App() {
  const [palavraParaAdivinhar, setPalavraParaAdivinhar] = useState("");
  const [mostrarJogo, setMostrarJogo] = useState(false);
  const [formulario, setFormulario] = useState(false);

  const handleClickIniciarJogo = () => {
    console.log("Clicou em Iniciar jogo");
    setMostrarJogo(true);
    setFormulario(false);
    adicionarPalavraSorteada(palavraParaAdivinhar);
  };

  const handleClickFormulario = () => {
    console.log("Clicou em Iniciar cadastro");
    setFormulario(true);
  };

  return (
    <>
      <div>
        <BackgroundVideo />
      </div>
      <main className='container'>
        <div>
          {formulario ? (
            <div>
              <Formulario />
              <button className={FormularioStyle.botaoIniciaJogo} onClick={handleClickIniciarJogo}>Iniciar jogo</button>
            </div>
          ) : mostrarJogo ? (
            <Jogo palavraParaAdivinhar={palavraParaAdivinhar} />
          ) : (
            <div className={HomeStyle.divHome}>
              <PaginaInicial />
              <PalavraAdivinhar setPalavraParaAdivinhar={setPalavraParaAdivinhar} />
              <button className={HomeStyle.botaoPrincipal} onClick={handleClickFormulario}>Iniciar cadastro</button>
            </div>
          )}
        </div>
      </main>
    </>
  );
}

export default App;