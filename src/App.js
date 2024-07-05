import { useState } from 'react';
import Banner from './componentes/Banner/banner.js';
import Formulario from './componentes/Formulario/index.js';
import Posicao from './componentes/Posicao/index.js';
import Rodape from './componentes/Rodape/index.js';

function App() {

  const posicoes = [
    {
      nome: 'Atacante',
      corPrimaria : '#57C278',
      corSecundaria : '#D9F7E9'
    },

    {
      nome: 'Zagueiro',
      corPrimaria : '#82CFFA',
      corSecundaria : '#E8F8FF'
    },

    {
      nome: 'Goleiro',
      corPrimaria : '#A6D157',
      corSecundaria : '#F0F8E2'
    },

    {
      nome: 'Meio-campo',
      corPrimaria : '#E06B69',
      corSecundaria : '#FDE7E8'
    },

    {
      nome: 'Volante',
      corPrimaria : '#DB6EBF',
      corSecundaria : '#FAE9F5'
    },

    {
      nome: 'Centroavante',
      corPrimaria : '#FFBA05',
      corSecundaria : '#FFF5D9'
    },

    {
      nome: 'Lateral-direito',
      corPrimaria : '#FF8A29',
      corSecundaria : '#FFEEDF'
    },

    {
      nome: 'Lateral-esquerdo',
      corPrimaria : '#57C278',
      corSecundaria : '#D9F7E9'
    }
  ]

  const [jogadores, setJogadores] = useState([])

  const aoNovoJogadorAdicionado = (jogador) => {
    setJogadores([...jogadores, jogador])
  }

  return (
    <div className="App">
      <Banner/>
      <Formulario posicao={posicoes.map(posicoes => posicoes.nome)} aoJogadorCadastrado={jogador => aoNovoJogadorAdicionado(jogador) }/>
      {posicoes.map(posicao => <Posicao 
        key={posicao.nome} 
        nome={posicao.nome} 
        corPrimaria={posicao.corPrimaria} 
        corSecundaria={posicao.corSecundaria}
        jogadores={jogadores.filter(jogador => jogador.posicao === posicao.nome)}
      />)}
      <Rodape />

    </div>
  );
}

export default App;

