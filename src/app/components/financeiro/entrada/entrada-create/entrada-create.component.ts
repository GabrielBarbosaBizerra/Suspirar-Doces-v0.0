import { EntradaService } from './../../../../services/entrada.service';
import { MatDialogRef } from '@angular/material/dialog';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Entrada } from './../../../../models/entrada';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-entrada-create',
  templateUrl: './entrada-create.component.html',
  styleUrls: ['./entrada-create.component.css']
})
export class EntradaCreateComponent implements OnInit {

  entrada: Entrada = {
    nome: '',
    valor: 0,
    descricao: '',
    data: new Date()
  }

  public entradaForm: FormGroup;

  constructor(
    private fb:FormBuilder,
    public dialogRef: MatDialogRef<EntradaCreateComponent>,
    private entradaService: EntradaService
    ) { }

  ngOnInit(){
    this.entradaForm = this.fb.group({
      nome: ['', [Validators.required]],
      valor: ['',[Validators.required]],
      descricao: [''],
      data: [new Date()]
    })
  }

  cadastrar(){
    this.entradaService.cadastrar(this.entrada).subscribe(results => {});
    this.dialogRef.close();
    window.location.reload();
  }

  cancelar(): void {
    this.dialogRef.close();
  }
}
