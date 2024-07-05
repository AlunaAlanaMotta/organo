import './Rodape.css'

const Rodape = () => {
    return (
        <footer className='rodape'>
            <section className='links'>
                <ul>
                    <li>
                        <a href='https://facebook.com' target='_blank' rel='noopener noreferrer'>
                            <img src='/imagens/fb.png' alt='Facebook' />
                        </a>
                    </li>
                </ul>
                <ul>
                    <li>
                        <a href='https://instagram.com' target='_blank' rel='noopener noreferrer'>
                            <img src='/imagens/ig.png' alt='Instagram' />
                        </a>
                    </li>
                </ul>
                <ul>
                    <li>
                        <a href='https://twitter.com' target='_blank' rel='noopener noreferrer'>
                            <img src='/imagens/tw.png' alt='Twitter' />
                        </a>
                    </li>
                </ul>
            </section>
            <section>
                <img src="/imagens/logo.png" alt="Logo" />
            </section>
            <section>
                <p>
                    Desenvolvido por Alana Motta.
                </p>
            </section>
        </footer>
    )
}

export default Rodape
