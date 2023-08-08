import { NegociacaoController } from './controllers/negociacao-controller.js';

const controller = new NegociacaoController()
const form = document.querySelector('.form') as HTMLInputElement
if (form) {
    form.addEventListener('submit', event => {
        event.preventDefault()
        controller.adiciona()
    });    
} else {
    throw new Error('Não foi possível iniciar a aplicação. Verifique se o form existe')
}

const botaoImporta = document.querySelector("#importa")
if (botaoImporta) {
    botaoImporta.addEventListener('click', () => {
        controller.importaDados()
    })
} else {
    throw Error('Botao importa não foi encontrado')
}