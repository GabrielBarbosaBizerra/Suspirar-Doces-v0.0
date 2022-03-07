import { ClienteService } from './../../../../services/cliente.service';
import { Cliente } from './../../../../models/cliente';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cliente-update',
  templateUrl: './cliente-update.component.html',
  template: 'passed in {{ data.idCliente }}',
  styleUrls: ['./cliente-update.component.css']
})

export class ClienteUpdateComponent implements OnInit {

  public clienteFormUpdate: FormGroup;

  constructor(
    private fb:FormBuilder,
    public dialogRef: MatDialogRef<ClienteUpdateComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {idCliente: number},
    private clienteService: ClienteService,
    private router: Router
  ) { }

  

  ngOnInit(): void {
    this.buscarCliente();
    this.preencherFormulario();
  }

  preencherFormulario(){
    this.clienteFormUpdate = this.fb.group({
      nome: ['', [Validators.required]],
      cpf: ['', Validators.required],
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

  atualizarCliente(){
    this.clienteService.atualizar(this.cliente).subscribe(results => {});
    this.dialogRef.close();
    window.location.reload();
  }

  cancelar(): void {
    this.dialogRef.close();
    this.clienteFormUpdate.reset();
  }

}
