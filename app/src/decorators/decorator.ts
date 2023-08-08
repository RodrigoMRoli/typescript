/**
 * @description Essa é só uma função esqueleto para ver a estrutura de um decorator, uma boa forma de ver ele em funcionamento de forma simples é vendo o inspect.ts
 * @param target é a classe do método em que foi chamado, num objeto normal o prototype, no estático o constructor
 * @param propertyKey o nome do método que foi decorado
 * @param descriptor toda a referência para o método
 */
export function decorator(
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
)  {
    const metodoOriginal = descriptor.value
    descriptor.value = function (...args: any[]) {
        const retorno = metodoOriginal.apply(this, args)
        return "Eu sou um decorator"
    }

    return descriptor
}
/**
 * @description Também existe essa forma de utilizar um decorator
 */
export function decorator2()  {
    return function (
        target: any,
        propertyKey: string,
        descriptor: PropertyDescriptor
    ) {
        const metodoOriginal = descriptor.value
        descriptor.value = function (...args: any[]) {
            const retorno = metodoOriginal.apply(this, args)
            return "Eu sou um decorator"
        }

        return descriptor
    }
}