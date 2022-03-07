import { ProdutoService } from './../../../../services/produto.service';
import { ClienteService } from './../../../../services/cliente.service';
import { Cliente } from './../../../../models/cliente';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PedidoService } from './../../../../services/pedido.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Pedido } from 'src/app/models/pedido';
import { Component, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'app-pedido-update',
  templateUrl: './pedido-update.component.html',
  template: 'passed in {{ data.idPedido }}',
  styleUrls: ['./pedido-update.component.css']
})

export class PedidoUpdateComponent implements OnInit {
  pedidoForm: FormGroup;
  clientes: Cliente[];
  pedido: Pedido;

  constructor(private fb: FormBuilder, private pedidoService: PedidoService, public dialogRef: MatDialogRef<PedidoUpdateComponent>, private clienteService: ClienteService, @Inject(MAT_DIALOG_DATA) public data: {idPedido: number},) { }
  
  ngOnInit(): void {
    this.buscarPedido();
    this.buscarClientes();
    this.preencherFormulario();
  }
  
  buscarPedido(){
    this.pedidoService.buscarPorId(this.data.idPedido).subscribe((obj) => {this.pedido = obj});
  }

  buscarClientes(){
    this.clienteService.listarClientes().subscribe(data => {
      this.clientes = data
    });
  }

  preencherFormulario(){
    this.pedidoForm = this.fb.group({
      cliente: ["", [Validators.required]],
      valorTotal: ["" , [Validators.required]],
      valorDeEntrada: ["", [Validators.required]],
      valorAPagar: [ "", [Validators.required]],
      dataDeEntrega: ["", [Validators.required]]
    });
  }

  atualizarPedido(){
    this.pedidoService.atualizar(this.pedido).subscribe(results => {});
    this.dialogRef.close();
    window.location.reload();
  }

  cancelar(){
    this.dialogRef.close();
    window.location.reload();
  }
}
