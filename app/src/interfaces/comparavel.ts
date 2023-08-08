/**
 * @description Esse 'T' funciona como um tipo variável, chamado de "Generics", quando ele é implementado você deve dizer na implementação
 * que tipo a que você esta esperando, e esse tipo tem que ser igual no método ou propriedade que você chamou.
 * Interessante pra quando você utiliza polimorfismo
 */
export interface Comparavel<T> {
    ehIgual(objeto: T): boolean
}