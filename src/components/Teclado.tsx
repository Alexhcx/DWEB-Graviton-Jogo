import styles from "../styles/Teclado.module.css"

//Componente React chamado Teclado, escrito em TypeScript usado para renderizar um teclado virtual com letras de 'a' a 'z' (incluindo 'ç').

const TECLAS = [
  "a",
  "b",
  "c",
  "ç",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
]

type TecladoProps = {
  disabled?: boolean
  letrasAtivadas: string[]
  letrasInativas: string[]
  addPalpiteDeLetras: (letra: string) => void
}

export function Teclado({
  letrasAtivadas,
  letrasInativas,
  addPalpiteDeLetras,
  disabled = false,
}: TecladoProps) {
  return (
    <div className={styles.divTeclado}>
      {TECLAS.map(key => {
        const estaAtivo = letrasAtivadas.includes(key)
        const estaInativo = letrasInativas.includes(key)
        return (
          <button
            onClick={() => addPalpiteDeLetras(key)}
            className={`${styles.btn} ${estaAtivo ? styles.active : ""} ${
              estaInativo ? styles.inactive : ""
            }`}
            disabled={ estaInativo || estaAtivo || disabled}
            key={key}
          >
            {key}
          </button>
        )
      })}
    </div>
  )
}
