import Jogador from '../Jogador';
import './Posicao.css'

const Posicao = (props) => {
    return (
        props.jogadores.length > 0 && <section className='time' style={{backgroundColor:props.corSecundaria}}>
            <h3 style={{borderColor: props.corPrimaria}}>{props.nome}</h3>
            <div className='jogadores'>
                {props.jogadores.map(jogador => <Jogador
                    corDeFundo={props.corPrimaria}
                    key={jogador.nome} 
                    nome={jogador.nome} 
                    idade={jogador.idade} 
                    imagem={jogador.imagem}
                />)}
            </div>

        </section>
    )
}

export default Posicao;
