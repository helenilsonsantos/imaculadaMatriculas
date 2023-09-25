import styled from "styled-components"
import coresBackgroundDefault from "../../interfaces/coresBackgroundDefault"
import proposBackgroundNotificacoes from "../../interfaces/propsbackgroundNotificacoes"

const backgroundNotificacoes: coresBackgroundDefault = {
    sucesso: '#25AE88',
    erro: '#E21B1B'
}

export const SectionDefault = styled.section <proposBackgroundNotificacoes> `
    background-color: ${(props) => backgroundNotificacoes[props.cor]};
    position: fixed;
    margin: 0 auto;
    color: #FFF;
    top: 10px;
    left: 0;
    right: 0;
    border-radius: 5px;
    width: max-content;
    height: 40px;
    padding: 0px 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 10;
    animation: AnimacaoNotificacao 300ms ease-in-out;

    @keyframes AnimacaoNotificacao { 
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }
`


