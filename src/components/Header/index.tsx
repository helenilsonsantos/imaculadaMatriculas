import logoCic from '../../assets/img/logo.png'
import './header.css'

function Header () {

    const scrollToFormMatriculas = () => {

        const elementoAncora = document.getElementById('formMatriculas')

        if (elementoAncora) {
          elementoAncora.scrollIntoView({ behavior: 'smooth' });
        }
    }

    return (
        <section className='containerHeader'>
            <img className='logoImaculada' src={logoCic} alt='Colégio Imaculada Conceição'/>
            <span className='contentHeader'>
                <span>
                    <h1>MATRÍCULAS 2024</h1>
                    <p>Está <b>aberto</b> o período para realização das matrículas para o ano letivo de <b>2024</b>.</p>
                    <p>Preencha o formulário abaixo. Entraremos em contato o mais rápido possível. </p>
                    <button className='btnDefault btnMatriculas2024' onClick={scrollToFormMatriculas}>PRÉ - MATRÍCULA</button>
                </span>

                <span className='imgAluno'>

                </span>
            </span>
            <button className='btnDefault btnPreMatricula' onClick={scrollToFormMatriculas}>PRÉ - MATRÍCULA</button>
        </section>
    )
}

export default Header