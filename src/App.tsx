import { useState } from 'react';
import BackgroundVideo from './components/BackgroundVideo';
import PaginaInicial from './pages/Home';
import Jogo from './pages/Jogo';
import botao from './styles/Home.module.css'
import PalavraAdivinhar from './components/palavraParaAdivinhar';
import Formulario from './pages/FormularioCadastro';
import { adicionarPalavraSorteada } from "./jsonServerActions";

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
    <div>
      <BackgroundVideo />
      {formulario ? (
        <div>
          <Formulario />
          <button className={botao.botaoJogo} onClick={handleClickIniciarJogo}>Iniciar jogo</button>
        </div>
      ) : mostrarJogo ? (
        <Jogo palavraParaAdivinhar={palavraParaAdivinhar}/>
      ) : (
        <div>
          <PaginaInicial />
          <PalavraAdivinhar setPalavraParaAdivinhar={setPalavraParaAdivinhar} />
          <button className={botao.botaoPrincipal} onClick={handleClickFormulario}>Iniciar cadastro</button>
        </div>
      )}
    </div>
  );
}

export default App;