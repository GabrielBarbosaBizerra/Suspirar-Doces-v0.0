import { ConfirmarEntregaPedidoComponent } from './../confirmar-entrega-pedido/confirmar-entrega-pedido.component';
import { MatTableDataSource } from '@angular/material/table';
import { PedidoService } from './../../../../services/pedido.service';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Pedido } from 'src/app/models/pedido';
import { PedidoCreateComponent } from '../pedido-create/pedido-create.component';
import { PedidoUpdateComponent } from '../pedido-update/pedido-update.component';
import { PedidoDeleteComponent } from '../pedido-delete/pedido-delete.component';

@Component({
  selector: 'app-pedido-read',
  templateUrl: './pedido-read.component.html',
  styleUrls: ['./pedido-read.component.css']
})
export class PedidoReadComponent implements OnInit {

  dataSource: MatTableDataSource<Pedido>;
  listaPedidos: Pedido[];
  displayedColumns = ['id', 'cliente', 'produtosPedidos', 'valorTotal', 'valorDeEntrada', 'valorAPagar', 'localDeEntrega', 'dataDeEntrega', 'dataDoPedido','status', 'acoes'];

  constructor(private dialog: MatDialog, private pedidoService: PedidoService) { }

  ngOnInit(): void {
    this.bucarPedidos();
  }

  bucarPedidos(){
    this.pedidoService.listarPedidos().subscribe((pedidos: Pedido[]) => {
      this.listaPedidos = pedidos;
    });
  }

  addPedido(): void {
    const dialogRef = this.dialog.open(PedidoCreateComponent, {
      minWidth: '600px',
    });
  }

  atualizarPedido(id:number): void{
    const dialogRefAtualizarPedido = this.dialog.open(PedidoUpdateComponent, {
      minWidth: '600px',
      data: {idPedido: id}
    });
  }

  deletarPedido(id:number): void{
    const dialogRefDeletarPedido = this.dialog.open(PedidoDeleteComponent, {
      minWidth: '600px',
      data: {idPedido: id}
    });
  }

  confirmarEntregaPedido(id:number){
    const dialogRefConfirmarEntregaPedido = this.dialog.open(ConfirmarEntregaPedidoComponent, {
      minWidth: '200px',
      data: {idPedido: id}
    })
  }

}
