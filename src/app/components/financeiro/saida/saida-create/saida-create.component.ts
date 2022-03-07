import { SaidaService } from './../../../../services/saida.service';
import { MatDialogRef } from '@angular/material/dialog';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Saida } from './../../../../models/saida';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-saida-create',
  templateUrl: './saida-create.component.html',
  styleUrls: ['./saida-create.component.css']
})
export class SaidaCreateComponent implements OnInit {

  saida: Saida = {
    nome: '',
    valor: null,
    descricao: '',
    data: new Date()
  }

  public saidaForm: FormGroup;

  constructor(
    private fb:FormBuilder,
    public dialogRef: MatDialogRef<SaidaCreateComponent>,
    private saidaService: SaidaService
    ) { }

  ngOnInit(){
    this.saidaForm = this.fb.group({
      nome: ['', [Validators.required]],
      valor: ['',[Validators.required]],
      descricao: [''],
      data: [new Date()]
    })
  }

  cadastrar(){
    this.saidaService.cadastrar(this.saida).subscribe(results => {});
    this.dialogRef.close();
    window.location.reload();
  }

  cancelar(): void {
    this.dialogRef.close();
  }
}
