export function logarTempoDeExecucao(emSegundos: boolean = false) {
    return function (
        target: any, // se você coloca num método estático, target é a função construtora, se você coloca num método normal é o prototype da classe
        propertyKey: string, // nome do método que foi decorado
        descriptor: PropertyDescriptor // toda a referência para o método
    ) {
        const metodoOriginal = descriptor.value
        descriptor.value = function (...args: Array<any>) {
            let divisor = 1
            let unidade = 'milisegundos'
            if (emSegundos) {
                divisor = 1000
                unidade = 'segundos'
            }
            const t1 = performance.now()
            const retorno = metodoOriginal.apply(this, args)
            const t2 = performance.now()
            const tempoDeExecucao = (t2 - t1) / divisor
            console.log(`${propertyKey}, tempo de execução: ${(tempoDeExecucao)} ${unidade}`)
            retorno
        }

        return descriptor
    }
}