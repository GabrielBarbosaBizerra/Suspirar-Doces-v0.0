import { Pedido } from "./pedido";
import { Produto } from "./produto";

export interface ProdutosPedidos{
    id?:number;
    idPedido?:string;
    idProduto:number;
    pedido?: Pedido;
    produto?: Produto;
    nome?:string;
    quantidade: number
}