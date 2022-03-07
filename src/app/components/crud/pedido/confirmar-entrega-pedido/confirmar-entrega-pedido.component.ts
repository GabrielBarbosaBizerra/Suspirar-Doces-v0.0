import { FormGroup, FormBuilder } from '@angular/forms';
import { Pedido } from './../../../../models/pedido';
import { PedidoService } from './../../../../services/pedido.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Component, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'app-confirmar-entrega-pedido',
  templateUrl: './confirmar-entrega-pedido.component.html',
  template: 'passed in {{ data.idPedido }}',
  styleUrls: ['./confirmar-entrega-pedido.component.css']
})
export class ConfirmarEntregaPedidoComponent implements OnInit {
  public confirmarForm: FormGroup;
  pedido: Pedido;
  constructor(
    private fb:FormBuilder,
    public dialogRef: MatDialogRef<ConfirmarEntregaPedidoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {idPedido: number},
    private pedidoService: PedidoService
    ) { }

  ngOnInit(): void {
    this.buscarPedido();
    this.preencherFormulario();
  }

  preencherFormulario(){
    this.confirmarForm = this.fb.group({
      cliente: ['']
    })
  }
  buscarPedido(){
    this.pedidoService.buscarPorId(this.data.idPedido).subscribe((obj) =>{ this.pedido = obj });
  }
  cancelar(){
    this.dialogRef.close();
  }

  confimarEntrega():void{
    this.pedido.status = true;
    this.pedidoService.atualizar(this.pedido).subscribe(results => {});
    this.dialogRef.close();
    window.location.reload();
  }
}
