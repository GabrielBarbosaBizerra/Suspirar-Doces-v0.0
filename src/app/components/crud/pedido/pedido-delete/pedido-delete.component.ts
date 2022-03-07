import { PedidoService } from './../../../../services/pedido.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Pedido } from 'src/app/models/pedido';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'app-pedido-delete',
  templateUrl: './pedido-delete.component.html',
  template: 'passed in {{ data.idPedido }}',
  styleUrls: ['./pedido-delete.component.css']
})
export class PedidoDeleteComponent implements OnInit {
  public pedidoFormDelete: FormGroup;
  public pedido: Pedido;

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<PedidoDeleteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {idPedido: number},
    private pedidoService: PedidoService
    ) { }

  ngOnInit(): void {
    this.buscarPedido();
    this.preencherFormulario();
  }

  preencherFormulario(){
    this.pedidoFormDelete = this.fb.group({
      nomeCliente: [''],
      valorPedido: ['']
    });
  }

  buscarPedido(){
    this.pedidoService.buscarPorId(this.data.idPedido).subscribe((obj) =>{ this.pedido = obj });
  }

  removerPedido(){
    this.pedidoService.remover(this.data.idPedido).subscribe(results => {});
    this.dialogRef.close();
    window.location.reload();
  }
  
  cancelar(){
    this.dialogRef.close();
  }
}
