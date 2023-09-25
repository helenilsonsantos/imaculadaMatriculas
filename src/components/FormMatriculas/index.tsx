import { useState, FormEvent } from 'react'
import { cadastrarLead } from '../../services/lead'
import { telefoneMascara } from '../../helpers'
import CarregandoCirculo from '../CarregandoCirculo'
import Notificacoes from '../Notificacoes'
import './form.css'

function FormMatriculas () {

    const [nomeResponsavel, setNomeResponsavel] = useState('')
    const [telefone, setTelefone] = useState('')
    const [email, setEmail] = useState('')
    const [nomeAluno, setNomeAluno] = useState('')
    const [dataNascimento, setDataNascimento] = useState('')
    const [serieAno, setSerieAno] = useState('')
    const [irmaoEscola, setIrmaoEscola] = useState('')
    const [turnoPreferencia, setTurnoPreferencia] = useState('')
    const [escolaOrigem, setEscolaOrigem] = useState('')
    const [motivoTransferencia, setMotivoTransferencia] = useState('')
    const [formaConhecimento, setFormaConhecimento] = useState('')
    const [processando, setProcessando] = useState(false)
    const [sucesso, setSucesso] = useState(false)
    const [erro, setErro] = useState(false)


    const changeTelefone = (e: any) => {

        return setTelefone(telefoneMascara(e))
    }

    const novoLead = async (e: FormEvent) => {
        e.preventDefault()
        setProcessando(true)

        const payload = {
            nomeResponsavel,
            telefone,
            email,
            nomeAluno,
            dataNascimento,
            serieAno,
            irmaoEscola,
            turnoPreferencia,
            escolaOrigem,
            motivoTransferencia,
            formaConhecimento
        }

        try {

            const resposta = await cadastrarLead(payload)

            if (resposta.status === 200) {
                setProcessando(false)
                setSucesso(true)

                return setTimeout(() => {
                    setSucesso(false)
                }, 3000)
            }
        
        } catch (error) {

            setProcessando(false)
            setErro(true)

            return setTimeout(() => {
                setErro(false)
            }, 3000)
        }
    }

    return (
        <>
            {processando && <CarregandoCirculo/>}
            {sucesso && <Notificacoes texto='Dados Enviados com Sucesso' cor='sucesso'/>}
            {erro && <Notificacoes texto='Falha ao Enviar os Dados. Tente Novamente' cor='erro'/>}
            <form className='formMatriculas' id='formMatriculas' onSubmit={novoLead}>
                <div className='forMatriculasContent'>
                    <h2>PREENCHA OS DADOS ABAIXO</h2>
                </div>
                <div className='forMatriculasContent'>
                    <h3>DADOS DO RESPONSÁVEL</h3>
                    <section>
                        <span>
                            <label htmlFor="">Nome Completo</label>
                            <input 
                                type="text"
                                value={nomeResponsavel}
                                onChange={(e) => setNomeResponsavel(e.target.value)} 
                                placeholder='Ex. Adriano da Silva'
                                required/>
                        </span>
                    </section>

                    <section>
                        <span>
                            <label htmlFor="">Telefone/WhatsApp</label>
                            <input 
                                type="text"
                                value={telefone}
                                minLength={18}
                                maxLength={18}
                                onChange={(e) => changeTelefone(e.target.value)}
                                placeholder='(00) 0.0000 - 0000'
                                required/>
                        </span>
                        <span>
                            <label htmlFor="">E-mail</label>
                            <input 
                                type="text"
                                value={email}
                                placeholder='adriano@gmail.com'
                                onChange={(e) => setEmail(e.target.value)}/>
                        </span>
                    </section>
                </div>

                <div className='forMatriculasContent'>
                    <h3>DADOS DO ALUNO</h3>
                    <section>
                        <span>
                            <label htmlFor="">Nome Completo</label>
                            <input 
                                type="text"
                                value={nomeAluno}
                                onChange={(e) => setNomeAluno(e.target.value)}
                                placeholder='Carlos Eduardo da Silva'
                                required/>
                        </span>
                        <span>
                            <label htmlFor="">Data de Nascimento</label>
                            <input 
                                type="date"
                                value={dataNascimento}
                                onChange={(e) => setDataNascimento(e.target.value)}
                                required/>
                        </span>
                    </section>

                    <section>
                        <span>
                            <label htmlFor="">Série/Ano em 2024</label>
                            <select value={serieAno} onChange={(e) => setSerieAno(e.target.value)} required>
                                <option value=""></option>
                                <option value="Maternal">Maternal</option>
                                <option value="Jardim I">Jardim I</option>
                                <option value="Jardim II">Jardim II</option>
                                <option value="1° Ano">1° Ano</option>
                                <option value="2° Ano">2° Ano</option>
                                <option value="3° Ano">3° Ano</option>
                                <option value="4° Ano">4° Ano</option>
                                <option value="5° Ano">5° Ano</option>
                                <option value="6° Ano">6° Ano</option>
                                <option value="7° Ano">7° Ano</option>
                                <option value="8° Ano">8° Ano</option>
                                <option value="9° Ano">9° Ano</option>
                            </select>
                        </span>
                        <span>
                            <label htmlFor="">Turno de Preferência</label>
                            <select value={turnoPreferencia} onChange={(e) => setTurnoPreferencia(e.target.value)} required>
                                <option value=""></option>
                                <option value="Manhã">Manhã</option>
                                <option value="Tarde">Tarde</option>
                            </select>
                        </span>
                        <span>
                            <label htmlFor="">Tem Irmão Estudando na Escola?</label>
                            <select value={irmaoEscola} onChange={(e) => setIrmaoEscola(e.target.value)} required>
                                <option value=""></option>
                                <option value="Sim">Sim</option>
                                <option value="Não">Não</option>
                            </select>
                        </span>
                    </section>
                </div>

                <div className='forMatriculasContent'>
                    <h3>OUTROS DADOS</h3>
                    <section>
                        <span>
                            <label htmlFor="">Instituição de Origem</label>
                            <input
                                value={escolaOrigem}
                                onChange={(e) => setEscolaOrigem(e.target.value)} 
                                type="text" />
                        </span>
                        <span>
                            <label htmlFor="">Motivo da Transferência</label>
                            <input
                                value={motivoTransferencia}
                                onChange={(e) => setMotivoTransferencia(e.target.value)} 
                                type="text" />
                        </span>
                    </section>
                    <section>
                        <span>
                            <label htmlFor="">Como você nos conheceu?</label>
                            <select value={formaConhecimento} onChange={(e) => setFormaConhecimento(e.target.value)} required>
                                <option value=""></option>
                                <option value="Indicação de Amigos/Parenteses">Indicação de Amigos/Parenteses</option>
                                <option value="Redes Sociais">Redes Sociais</option>
                                <option value="Outdoor">Outdoor</option>
                                <option value="Outros">Outros</option>
                            </select>
                        </span>
                    </section>
                </div>
                <div className='forMatriculasContent btnFormEnviar'>
                    <div>
                        <input 
                            id="consetimentoUsuario"
                            type="checkbox"
                            required/>
                        <label htmlFor="consetimentoUsuario">Ao enviar os dados, você está de acordo com a nossa <b>Política de Privacidade</b></label>
                    </div>
                    <button className='btnDefault'>ENVIAR DADOS</button>
                </div>
            </form>
        </>
    )
}

export default FormMatriculas