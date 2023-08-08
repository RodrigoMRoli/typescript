import { Imprimivel } from "../utils/imprimivel.js";
import { Comparavel } from "./comparavel.js";

/**
 * @description Absurdo o que isso faz. Se você tiver diversos interfaces que você queira colocar em um único modelo isso gera um incoveniente que são os diversos
 * imports, para contornar isso crie essa interface que herda todas as outras e você só precisa utilizar essa interface no modelo. Simplesmente foda.
 */
export interface Modelo<T> extends Imprimivel, Comparavel<T> {}