/**
 * @description Essa função é boa para clarear a mente sobre os parâmetros dos decorators e como eles funcionam.
 * Outro detalhe é que se você sabe que você vai utilizar um decorator sem parâmetro. Só retorne a função em sí que você não precisa chama-la depois.
 * Só vai precisar colocar o nome dela que vai ser exportada executando.
 * Segue o exemplo em negociacao-controller.ts
 */
export function inspect (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
) {
    const metodoOriginal = descriptor.value
    descriptor.value = function (...args: any[]) {
        console.log(`--- Método: ${propertyKey}`)
        console.log(`------ Parâmetros: ${JSON.stringify(args)}`)
        const retorno = metodoOriginal.apply(this, args)
        console.log(`------ Retorno: ${JSON.stringify(retorno)}`)
        return retorno
    }
    return descriptor
}