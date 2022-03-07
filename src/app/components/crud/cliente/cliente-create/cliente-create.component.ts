import { ClienteService } from './../../../../services/cliente.service';
import { Cliente } from './../../../../models/cliente';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-cliente-create',
  templateUrl: './cliente-create.component.html',
  styleUrls: ['./cliente-create.component.css']
})
export class ClienteCreateComponent implements OnInit {

  cliente: Cliente = {
    nome: '',
    cpf: '',
    telefone: '',
    cidade: ''
  }

  public clienteForm: FormGroup;

  constructor(
    private fb:FormBuilder,
    public dialogRef: MatDialogRef<ClienteCreateComponent>,
    private clienteService: ClienteService
    ) { }

  ngOnInit(){
    this.clienteForm = this.fb.group({
      cpf: [Validators.required],
      nome: ['', [Validators.required]],
      telefone: ['',[Validators.required]],
      cidade: ['']
    })
  }

  cadastrar(){
    this.clienteService.cadastrar(this.cliente).subscribe(results => {});
    console.log(this.cliente);
    this.dialogRef.close();
    window.location.reload();
  }

  cancelar(): void {
    this.dialogRef.close();
  }

}
