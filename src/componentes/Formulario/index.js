import './Formulario.css'
import CampoTexto from '../CampoTexto/CampoTexto'
import ListaSuspensa from '../ListaSuspensa';
import Botao from '../Botao';
import { useState } from 'react';


const Formulario = (props) => {

    const [nome, setNome] = useState('')
    const [idade, setIdade] = useState('')
    const [imagem, setImagem] = useState('')
    const [posicao1, setPosicao] = useState('')


    const aoSalvar = (evento) => {
        evento.preventDefault()
        props.aoJogadorCadastrado({
            nome,
            idade,
            imagem,
            posicao: posicao1
        })
        setNome('')
        setIdade('')
        setPosicao('')
        setImagem('')
    }
    

    return (
        <section className='formulario'>
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do jogador</h2>

                <CampoTexto 
                    obrigatorio={true} 
                    label="Nome" 
                    placeholder="Digite o nome..." 
                    valor={nome}
                    aoAlterado={valor => setNome(valor)}
                />

                <CampoTexto 
                    obrigatorio={true} 
                    label="Idade" 
                    placeholder="Digite a idade..." 
                    valor={idade}
                    aoAlterado = {valor => setIdade(valor)}
                />

                <CampoTexto 
                    label="Imagem" 
                    placeholder="Digite o endereço da imagem..." 
                    valor={imagem}
                    aoAlterado={valor => setImagem(valor)}
                />

                <ListaSuspensa 
                    obrigatorio={true} 
                    label="Posição" 
                    itens = {props.posicao}
                    valor={posicao1}
                    aoAlterado = {valor => setPosicao(valor)}
                />

                <Botao>
                    Criar card
                </Botao>
            </form>
        </section>
    )
}

export default Formulario;
