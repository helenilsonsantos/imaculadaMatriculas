import propsNotificacoes from '../../interfaces/propsNotificacoes'
import { SectionDefault } from '../Styles'

function Notificacoes (props: propsNotificacoes) {
    return (
        <SectionDefault cor={props.cor}>
            <p>{props.texto}</p>
        </SectionDefault>
    )
}

export default Notificacoes