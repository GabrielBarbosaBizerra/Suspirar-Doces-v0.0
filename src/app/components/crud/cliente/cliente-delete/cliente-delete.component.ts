import { Cliente } from './../../../../models/cliente';
import { ClienteService } from './../../../../services/cliente.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, Inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-cliente-delete',
  templateUrl: './cliente-delete.component.html',
  template: 'passed in {{ data.idCliente }}',
  styleUrls: ['./cliente-delete.component.css']
})
export class ClienteDeleteComponent implements OnInit {
  public clienteFormDelete: FormGroup;

  constructor(
    private fb:FormBuilder,
    public dialogRef: MatDialogRef<ClienteDeleteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {idCliente: number},
    private clienteService: ClienteService
  ) { }

  ngOnInit(): void {
    this.buscarCliente();
    this.preencherFormulario();
  }

  preencherFormulario(){
    this.clienteFormDelete = this.fb.group({
      nome: ['', [Validators.required]],
      cpf: ['', [Validators.required]],
      telefone: ['',[Validators.required]],
      cidade: [''],
    });
  }

  cliente: Cliente;

  buscarCliente(){
    this.clienteService.buscarPorId(this.data.idCliente).subscribe((obj) => {
      this.cliente = obj;
    });
  }

  removerCliente(){
    this.clienteService.remover(this.data.idCliente).subscribe(results =>{});
    this.dialogRef.close();
    window.location.reload();
  }

  cancelar(): void {
    this.dialogRef.close();
  }

}
