import styles from '../styles/PalavraGraviton.module.css'

type HangmanWordProps = {
  letrasAdivinhadas: string[]
  palavraParaAdivinhar: string
  revelar?: boolean
}

export function HangmanWord({
  letrasAdivinhadas,
  palavraParaAdivinhar,
  revelar = false,
}: HangmanWordProps) {
  return (
    <div
      className={styles.palavraPalpite}
    >
      {palavraParaAdivinhar.split("").map((letra, index) => (
        <span style={{ borderBottom: ".1em solid white" }} key={index}>
          <span
            style={{
              visibility:
                letrasAdivinhadas.includes(letra) || revelar
                  ? "visible"
                  : "hidden",
              color:
                !letrasAdivinhadas.includes(letra) && revelar ? "red" : "hsl(200, 100%, 50%)",
            }}
          >
            {letra}
          </span>
        </span>
      ))}
    </div>
  )
}
