
//Este é um módulo TypeScript que exporta três funções para interagir com um servidor.

export function fetchPalavraServidor() {
    return fetch("http://localhost:8080/palavras")
      .then((response) => {
        if (response.ok) {
          return response.json().then((data) => {
            const randomIndex = Math.floor(Math.random() * data.length);
            return data[randomIndex];
          });
        } else {
          console.error("Não é possível utilizar o comando fetch.");
        }
      })
      .catch((error) => {
        console.error("Erro durante o fetching palavras do servidor:", error);
      });
  }

  export function adicionarJogador(playerData: any) {
    return fetch('http://localhost:8080/jogadores', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(playerData)
    })
    .then(response => {
      if (response.ok) {
        console.log('Jogador adicionado com sucesso!');
      } else {
        console.error('Erro ao adicionar jogador.');
      }
    })
    .catch(error => {
      console.error('Erro ao adicionar jogador:', error);
    });
  }

  export function adicionarPalavraSorteada(palavra_sorteada: any) {

    const palavra = { palavra_sorteada };
  
    return fetch('http://localhost:8080/palavraSorteada', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(palavra)
    })
      .then(response => {
        if (response.ok) {
          console.log('Palavra adicionada com sucesso!');
        } else {
          console.error('Erro ao adicionar palavra.');
        }
      })
      .catch(error => {
        console.error('Erro ao adicionar palavra:', error);
      });
  }

  