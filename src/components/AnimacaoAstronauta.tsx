import astronauta1 from '../assets/img/AstronautaEditado.png';
import explosao from '../assets/img/Explosion.png'

//componente React escrito em TypeScript que exibe imagens de um astronauta
//e uma explosão em diferentes posições e tamanhos, dependendo do número de palpites fornecidos.

const ASTRO1 = (
  <img
    src={astronauta1}
    alt="Astro1"
    style={{
      height: "275px",
      position: "absolute",
      left: "50%",        
      transform: "translateX(-50%) translateY(83%)", 
      zIndex: "-1"
    }}
  />
);

const ASTRO2 = (
  <img
    src={astronauta1}
    alt="Astro2"
    style={{
      height: "225px",
      position: "absolute",
      left: "50%",        
      transform: "translateX(-50%) translateY(112%)", 
      zIndex: "-1"
    }}
  />
);

const ASTRO3 = (
  <img
    src={astronauta1}
    alt="Astro3"
    style={{
      height: "170px",
      position: "absolute",
      left: "50%",        
      transform: "translateX(-50%) translateY(160%)", 
      zIndex: "-1"
    }}
  />
);

const ASTRO4 = (
  <img
    src={astronauta1}
    alt="Astro4"
    style={{
      height: "150px",
      position: "absolute",
      left: "50%",        
      transform: "translateX(-50%) translateY(190%)", 
      zIndex: "-1"
    }}
  />
);

const ASTRO5 = (
  <img
    src={astronauta1}
    alt="Astro5"
    style={{
      height: "100px",
      position: "absolute",
      left: "50%",        
      transform: "translateX(-50%) translateY(310%)", 
      zIndex: "-1"
    }}
  />
);

const ASTRO6 = (
  <img
    src={astronauta1}
    alt="Astro6"
    style={{
      height: "50px",
      position: "absolute",
      left: "50%",        
      transform: "translateX(-50%) translateY(670%)", 
      zIndex: "-1"
    }}
  />
);

const ASTRO7 = (
  <img
    src={explosao}
    alt="Astro6"
    style={{
      height: "100px",
      position: "absolute",
      left: "50%",        
      transform: "translateX(-50%) translateY(280%)", 
      zIndex: "-1"
    }}
  />
);

const astronautaDistacia = [ASTRO1, ASTRO2, ASTRO3, ASTRO4, ASTRO5, ASTRO6, ASTRO7];

type HangmanDrawingProps = {
  qtdPalpites: number
}

export function HangmanDrawing({ qtdPalpites }: HangmanDrawingProps) {
  return (
    <div style={{ position: "relative" }}>
      {astronautaDistacia[qtdPalpites]}
    </div>
  );
}

export default HangmanDrawing;