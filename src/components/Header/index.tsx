import logoCic from '../../assets/img/logo.png'
import matriculasImg from '../../assets/img/matriculas.png'
import './header.css'

function Header () {

    const formMatriculas = () => {

        const formActivesoft = 'https://siga03.activesoft.com.br/captacao_alunos/?codigo=CIC_OLHO&unidade=1'

        return window.open(formActivesoft, '_blank')

    }

    return (
        <section className='containerHeader'>
            <img className='logoImaculada' src={logoCic} alt='Colégio Imaculada Conceição'/>
            <span className='contentHeader'>
                <span>
                    <h1>MATRÍCULAS 2024</h1>
                    <p>Está <b>aberto</b> o período para realização das matrículas para o ano letivo de <b>2024</b>.</p>
                    <p>Realize a sua pré-matrícula, clicando abaixo. Entraremos em contato o mais rápido possível. </p>
                    <button className='btnDefault btnMatriculas2024' onClick={formMatriculas}>PRÉ - MATRÍCULA</button>
                </span>

                <span className='imgAluno'>
                    <img id='matriculasAbertas' src={matriculasImg} alt='Matrículas 2024. Colégio Imaculada Conceição'/>
                </span>
            </span>
            <button className='btnDefault btnPreMatricula' onClick={formMatriculas}>PRÉ - MATRÍCULA</button>
        </section>
    )
}

export default Header