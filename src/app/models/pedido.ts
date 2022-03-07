import { ProdutosPedidos } from './produtosPedidos';
import { Cliente } from './cliente';
export interface Pedido {
    id?: number;
    idCliente: number;
    cliente?: Cliente;
    produtosPedidos: ProdutosPedidos[];
    valorDeEntrada: number;
    valorTotal: number;
    valorAPagar: number;
    dataDeEntrega: Date;
    dataDoPedido?: Date;
    localDeEntrega: string;
    status: boolean;
}