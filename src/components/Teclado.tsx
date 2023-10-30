import styles from "../styles/Teclado.module.css"

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

type KeyboardProps = {
  disabled?: boolean
  letrasAtivadas: string[]
  letrasInativas: string[]
  addPalpiteDeLetras: (letra: string) => void
}

export function Keyboard({
  letrasAtivadas,
  letrasInativas,
  addPalpiteDeLetras,
  disabled = false,
}: KeyboardProps) {
  return (
    <div>
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
