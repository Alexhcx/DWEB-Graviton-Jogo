import astronauta1 from '../assets/img/AstronautaEditado.png';
import explosao from '../assets/img/Explosion.png'
import styles from '../styles/Astronauta.module.css';

//componente React escrito em TypeScript que exibe imagens de um astronauta
//e uma explosão em diferentes posições e tamanhos, dependendo do número de palpites fornecidos.

const ASTRO1 = (
  <img
    src={astronauta1}
    alt="Astro1"
    className={styles.astro1}
  />
);

const ASTRO2 = (
  <img
    src={astronauta1}
    alt="Astro2"
    className={styles.astro2}
  />
);

const ASTRO3 = (
  <img
    src={astronauta1}
    alt="Astro3"
    className={styles.astro3}
  />
);

const ASTRO4 = (
  <img
    src={astronauta1}
    alt="Astro4"
    className={styles.astro4}
  />
);

const ASTRO5 = (
  <img
    src={astronauta1}
    alt="Astro5"
    className={styles.astro5}
  />
);

const ASTRO6 = (
  <img
    src={astronauta1}
    className={styles.astro6}
  />
);

const ASTRO7 = (
  <img
    src={explosao}
    alt="Astro6"
    className={styles.astro7}
  />
);

const astronautaDistacia = [ASTRO1, ASTRO2, ASTRO3, ASTRO4, ASTRO5, ASTRO6, ASTRO7];

type AstronautaProps = {
  qtdPalpites: number
}

export function Astronauta({ qtdPalpites }: AstronautaProps) {
  return (
    <div>
      {astronautaDistacia[qtdPalpites]}
    </div>
  );
}

export default Astronauta;