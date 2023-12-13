import styles from '../styles/PalavraGraviton.module.css'

//Componente React Palavra usado para exibir uma palavra no jogo da forca

type PalavraProps = {
  letrasAdivinhadas: string[]
  palavraParaAdivinhar: string
  revelar?: boolean
}

export function Palavra({
  letrasAdivinhadas,
  palavraParaAdivinhar,
  revelar = false,
}: PalavraProps) {
  return (
    <div
      className={styles.palavraPalpite}
    >
      {palavraParaAdivinhar.split("").map((letra, index) => (
        <span key={index}>
          <span
            style={{
              visibility:
                letrasAdivinhadas.includes(letra) || revelar
                  ? "visible"
                  : "hidden",
              color:
                !letrasAdivinhadas.includes(letra) && revelar ? "red" : "hsl(200, 100%, 50%)"
            }}
          >
            {letra}
          </span>
        </span>
      ))}
    </div>
  )
}
