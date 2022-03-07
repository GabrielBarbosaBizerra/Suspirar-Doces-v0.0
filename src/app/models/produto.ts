import { Ingrediente } from './Ingrediente';
export interface Produto{
    id?:number;
    idIngrediente?: number;
    ingredientes?: Ingrediente;
    nome:string;
    preco:number;
    descricao?:string;
}