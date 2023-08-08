/**
 * @definition Definindo getters com decorators é interessante porque te permite que com apenas uma função e com diversos checks que são necessários você defina uma propriedade do objeto sem ter que fazer o mesmo código várias vézes
 * Repare como essa função deixou o constructor de negociacao-controller muito mais limpo e coeso adicionando apenas essa função para pegar o método
 * ainda por cima melhorando a performance da aplicação utilizando uma técnica de cache no getter.
 */
export function domInject (seletor: string) {
    return function (
        target: any, // a classe do método em que foi chamado, num objeto normal o prototype, no estático o constructor
        propertyKey: string // a propriedade ou método que esta sendo chamado
    ) {
        console.log(`Modificando prototype ${target.constructor.name} e adicionando getter para ${propertyKey}`)
        let elemento: HTMLElement | null = null
        const getter = function () {
            if (!elemento) {
                elemento = <HTMLElement>document.querySelector(seletor)
                console.log(`Buscando elemento do DOM com ${seletor} para injetar em ${propertyKey}`)
            }
            return elemento
        }

        Object.defineProperty(
            target, // objeto no qual você quer modificar a propriedade
            propertyKey, // a propriedade em sí que você quer modificar
            { get: getter }) // o que você quer colocar nela
    }
}