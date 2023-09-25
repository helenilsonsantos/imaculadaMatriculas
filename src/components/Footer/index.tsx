import { Link } from 'react-router-dom'
import facebookImg from '../../assets/img/facebook.png'
import intagramImg from '../../assets/img/instagram.png'
import youtubeImg from  '../../assets/img/youtube.png'
import './footer.css'

function Footer () {

    const target = '_blank'
  
    return (
        <footer id='footer'>
            <div id = 'contienerRodape'>
                <div>
                    <strong>Sobre</strong>
                    <p>
                        O Colégio Imaculada Conceição nasce a partir de um sonho de três jovens professoras santanenses ao observar a necessidade de uma escola particular na cidade de Olho d'Água das Flores, uma vez que os alunos daquela localidade se deslocavam para escolas da cidade vizinha. Assim sendo, em outubro de 1989, inicia-se o processo de fundação. Inicialmente, estava localizado à Rua do Comércio, nº 270, com o nome Escola Doce Infância. Em 1994, muda-se para o prédio próprio, passando a se chamar Colégio Imaculada Conceição. Atualmente, o Colégio conta com 50 colaboradores e com 450 alunos distribuídos pelos cursos de Educação Infantil e Ensino Fundamental I e II, nos turnos matutino e vespertino.
                    </p>

                </div>

                <div id = 'redesSociais'>
                    <b>Redes Sociais</b>
                    <span>
                        <a href='https://www.facebook.com/cicdesde1990' target={target}><img src={facebookImg} alt = 'página do facebook do colégio imaculada conceição' width={40}/></a>
                        <a href='https://www.instagram.com/colegioimaculada.cic' target={target}><img src={intagramImg} alt = 'página do facebook do colégio imaculada conceição' width={40}/></a>
                        <a href='https://www.youtube.com/@colegioimaculadaconceicao-4060' target={target}><img src={youtubeImg} alt = 'página do facebook do colégio imaculada conceição' width={40}/></a>
                    </span>
                </div>

                <div id = 'enderecoRodape'>
                    <strong>Endereço</strong>
                    <p>Rua Marechal Deodoro da Fonseca - 743, Centro, Olho d'Água das Flores - AL</p>
                    <p>Contato: (82) 3623 - 1146</p>
                    <p>WhatsApp: (82) 9 9818-6116</p>
                    <p>E-mail: imaculadaolhodagua@gmail.com</p>
                </div>

                <div id = 'linksUteisRodape'>
                    <strong>Link Úteis</strong>
                    <Link to='/politicaprivacidade'>Política de Privacidade</Link>
                </div>
                
                <div id = 'direitosRodape'>
                    <strong>Direitos Reservados</strong>
                    <p>CNPJ: 24.467.516/0001 - 09</p>
                    <p>Educandario Olho d'Água Ltda</p>
                    <p>Colégio Imaculada Conceição</p>
                </div>
            </div>
            <div id= 'desenvolvimentoDados'>
                <p>© 2023 por Colégio Imaculada Conceição. Todos os Direitos Reservados.</p>
                <p>Desenvolvido por <a href='https://www.meuhg.com/' target={target}>Hg Consultoria</a></p>
            </div>
        </footer>
    )
}

export default Footer