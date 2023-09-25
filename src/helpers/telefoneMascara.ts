
const telefoneMascara = (valor: string) => {

    valor = valor.replace(/\D/g, '')
    valor= valor.replace(/^(\d{2})(\d)/, '($1) $2')
    valor = valor.replace(/(\d)(\d{8})/, '$1.$2')
    valor = valor.replace(/(\d)(\d{4})$/, '$1 - $2')
  
    return valor
}

export default telefoneMascara

